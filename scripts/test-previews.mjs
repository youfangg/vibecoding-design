import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const PORT = 9344;
const BASE = process.env.PREVIEW_BASE || "http://127.0.0.1:4173/docs/";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chrome = spawn("google-chrome", [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--remote-debugging-port=" + PORT,
  "--user-data-dir=/tmp/chrome-preview-test",
  "about:blank"
], { stdio: "ignore" });

for (let i = 0; i < 40; i++) {
  try {
    const res = await fetch("http://127.0.0.1:" + PORT + "/json/version");
    if (res.ok) break;
  } catch (error) {
    await sleep(150);
  }
}

const tab = await (await fetch("http://127.0.0.1:" + PORT + "/json/new?about:blank", { method: "PUT" })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve);
  ws.addEventListener("error", reject);
});
let seq = 0;
const pending = new Map();
let loadWait = null;
const pageErrors = [];
ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.method === "Page.loadEventFired" && loadWait) {
    loadWait();
    loadWait = null;
  }
  if (msg.method === "Runtime.exceptionThrown") {
    const details = msg.params && msg.params.exceptionDetails;
    const text = details && details.exception && (details.exception.description || details.text) || "";
    pageErrors.push(String(text).slice(0, 240));
  }
  if (msg.method === "Runtime.consoleAPICalled" && msg.params && msg.params.type === "error") {
    pageErrors.push(msg.params.args.map((arg) => arg.value || arg.description || "").join(" ").slice(0, 240));
  }
  if (msg.id && pending.has(msg.id)) {
    const job = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) job.reject(new Error(JSON.stringify(msg.error)));
    else job.resolve(msg.result);
  }
});
function waitLoad() {
  return new Promise((resolve) => {
    loadWait = resolve;
    setTimeout(resolve, 2500);
  });
}
function send(method, params) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params: params || {} }));
  });
}
async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });

const statusUrl = BASE + "previews/status.js";
const statusText = await (await fetch(statusUrl)).text();
const table = JSON.parse(statusText.replace(/^[\s\S]*?=\s*/, "").replace(/;\s*$/, ""));
const only = (process.env.PREVIEW_IDS || "").split(",").filter(Boolean);
const targets = Object.entries(table).filter(([, row]) => row.status === "ready" || row.status === "review").filter(([id]) => !only.length || only.indexOf(id) !== -1);
const failures = [];
for (const [id, row] of targets) {
  const url = new URL(row.entry, BASE).href;
  await send("Page.navigate", { url });
  await waitLoad();
  let report;
  try {
    report = await evaluate(`(() => {
      const text = document.body.innerText || "";
      const preview = window.__preview || null;
      return {
        text: text.slice(0, 80),
        missing: Boolean(preview && preview.missing),
        mechanism: preview && preview.mechanism || "",
        hasTrigger: Boolean(preview && preview.trigger)
      };
    })()`);
  } catch (error) {
    failures.push({ id, error: String(error).slice(0, 180) });
    continue;
  }
  if (!report.text || report.missing) failures.push({ id, error: "empty or missing", report });
  if (report.hasTrigger) {
    const changed = await evaluate(`(async () => {
      if (window.__preview.reset) window.__preview.reset();
      await new Promise((r) => setTimeout(r, 120));
      const before = window.__preview.readRaw ? window.__preview.readRaw() : window.__preview.read();
      window.__preview.trigger();
      await new Promise((r) => setTimeout(r, 450));
      const after = window.__preview.readRaw ? window.__preview.readRaw() : window.__preview.read();
      const dom = document.querySelector(".host-page") && document.querySelector(".host-page").dataset.state;
      const expected = window.__preview.expectAfter;
      const matched = expected == null || String(after) === String(expected) || String(dom) === String(expected);
      const moved = String(before) !== String(after);
      const semantic = expected == null ? moved : matched && String(before) !== String(expected);
      return { before, after, dom, expected, semantic, changed: moved };
    })()`);
    if (!changed.semantic) {
      failures.push({ id, error: "trigger did not reach expected state", changed });
    }
  }
}

const grabExpr = `(() => {
  const canvas = document.querySelector("canvas");
  let pixels = null;
  if (canvas && canvas.width && canvas.height) {
    let data = null;
    const gl = canvas.getContext("webgl2");
    if (gl) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      const buf = new Uint8Array(canvas.width * canvas.height * 4);
      gl.readPixels(0, 0, canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, buf);
      data = buf;
    } else {
      const ctx = canvas.getContext("2d");
      if (ctx) data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    }
    if (data) {
      let n = 0, sum = 0, sum2 = 0, hash = 0;
      for (let i = 0; i < data.length; i += 64) {
        const v = data[i] + data[i + 1] + data[i + 2];
        sum += v;
        sum2 += v * v;
        hash = (hash * 33 + v) >>> 0;
        n++;
      }
      const mean = sum / n;
      pixels = { variance: Math.round(sum2 / n - mean * mean), hash, mean: Math.round(mean) };
    }
  }
  const nodes = [...document.querySelectorAll(".host-body *")].slice(0, 24);
  const style = nodes.map((el) => {
    const cs = getComputedStyle(el);
    return [el.tagName, cs.transform, cs.filter, cs.width, cs.backgroundSize, (el.textContent || "").slice(0, 8)].join("|");
  }).join(";");
  const tween = window.__shaderTween;
  return {
    pixels,
    text: (document.body.innerText || "").replace(/\\s+/g, " ").slice(0, 140),
    style,
    gsap: window.gsap && window.gsap.version || "",
    driven: window.__gsapDriven || "",
    tween: tween && typeof tween.progress === "function" ? Math.round(tween.progress() * 100) / 100 : null
  };
})()`;

const visualPlan = [
  { id: "shader-animation-gsap", canvas: true, script: `[...document.querySelectorAll("button")].find((b) => b.textContent.includes("播放封面")).click()` },
  { id: "animated-letters-shader", canvas: true, script: `[...document.querySelectorAll("button")].find((b) => b.textContent.includes("看场次")).click()` },
  { id: "dreamy-particles", canvas: true, script: `(() => { const el = document.querySelector("canvas"); const r = el.getBoundingClientRect(); el.dispatchEvent(new PointerEvent("pointermove", { bubbles: true, clientX: r.left + r.width * 0.2, clientY: r.top + r.height * 0.45 })); })()` },
  { id: "rb-lanyard", canvas: true, script: `(() => { const el = document.querySelector("canvas"); const r = el.getBoundingClientRect(); const x = r.left + r.width * 0.78; const y = r.top + r.height * 0.45; el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, clientX: x, clientY: y })); })()` },
  { id: "rb-ferrofluid", canvas: true, script: `(() => { const el = document.querySelector("canvas"); const r = el.getBoundingClientRect(); el.dispatchEvent(new PointerEvent("pointermove", { bubbles: true, clientX: r.left + r.width * 0.5, clientY: r.top + r.height * 0.18 })); })()` },
  { id: "rb-splash-cursor", canvas: true, script: `(() => { const el = document.querySelector("canvas"); const r = el.getBoundingClientRect(); el.dispatchEvent(new PointerEvent("pointermove", { bubbles: true, clientX: r.left + r.width * 0.7, clientY: r.top + r.height * 0.3 })); })()` },
  { id: "fancy-underline-to-background", script: `document.querySelector("article span").click()` },
  { id: "scroll-blur-typography", script: `(() => { const el = document.querySelector("[tabindex]"); el.scrollTop = 140; el.dispatchEvent(new Event("scroll")); })()` },
  { id: "rb-warp-text", script: `(() => { const el = document.querySelector("article"); const r = el.getBoundingClientRect(); el.dispatchEvent(new PointerEvent("pointermove", { bubbles: true, clientX: r.left + 40, clientY: r.top + 30 })); })()` },
  { id: "macbook-scroll", script: `(() => { const el = document.querySelector("[tabindex]"); el.focus(); el.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })); })()` },
  { id: "blur-fade", script: `document.querySelector(".host-reset").click()` },
  { id: "aceternity-compare", script: `(() => { const el = [...document.querySelectorAll("button")].find((b) => b.textContent.includes("拖")); el.focus(); el.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })); })()` }
];

const visual = [];
if (!only.length) {
  for (const plan of visualPlan) {
    pageErrors.length = 0;
    const row = table[plan.id];
    await send("Page.navigate", { url: new URL(row.entry, BASE).href });
    await waitLoad();
    await sleep(150);
    try {
      await evaluate(`(() => { if (window.__preview && window.__preview.reset) window.__preview.reset(); return true; })()`);
      await sleep(80);
      const before = await evaluate(grabExpr);
      await evaluate(`(() => { ${plan.script}; return true; })()`);
      await sleep(plan.canvas ? 420 : 280);
      const after = await evaluate(grabExpr);
      const pixelMoved = before.pixels && after.pixels && before.pixels.hash !== after.pixels.hash;
      const styleMoved = JSON.stringify(before.style) !== JSON.stringify(after.style) || before.text !== after.text;
      const moved = Boolean(pixelMoved || styleMoved);
      const blank = plan.canvas && (!after.pixels || after.pixels.variance < 12);
      const shaderNoise = pageErrors.filter((line) => /shader|compile|link|WebGL|TypeError/i.test(line));
      const gsapOk = plan.id !== "shader-animation-gsap" || (String(after.gsap).startsWith("3.") && after.driven === "gsap" && after.tween >= 0.99);
      if (!moved || blank || shaderNoise.length || !gsapOk) {
        failures.push({
          id: plan.id,
          error: "rendered output did not change",
          changed: { moved, blank, gsap: after.gsap, driven: after.driven, tween: after.tween, before: before.pixels || before.style, after: after.pixels || after.style, errors: shaderNoise }
        });
      }
      visual.push({
        id: plan.id,
        moved,
        blank: Boolean(blank),
        variance: after.pixels && after.pixels.variance,
        gsap: after.gsap,
        driven: after.driven,
        tween: after.tween,
        style: after.style
      });
    } catch (error) {
      failures.push({ id: plan.id, error: "visual check failed: " + String(error).slice(0, 180) });
    }
  }

  pageErrors.length = 0;
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await send("Page.navigate", { url: new URL(table["shader-animation-gsap"].entry, BASE).href });
  await waitLoad();
  await sleep(200);
  const reduced = await evaluate(grabExpr);
  const reducedText = await evaluate(`(document.body.innerText || "").includes("白潮")`);
  const reducedOk = reduced.pixels && reduced.pixels.variance > 40 && reduced.driven === "reduced" && reducedText && !pageErrors.length;
  if (!reducedOk) {
    failures.push({ id: "shader-animation-gsap", error: "reduced motion fallback unreadable", changed: { reduced, reducedText, errors: pageErrors.slice() } });
  }
  visual.push({ id: "shader-animation-gsap-reduced", variance: reduced.pixels && reduced.pixels.variance, driven: reduced.driven, text: reducedText });
  await send("Emulation.setEmulatedMedia", { features: [] });
}

await send("Page.navigate", { url: BASE + "index.html" });
await sleep(800);
const gallery = await evaluate(`(() => {
  const srcs = [...document.querySelectorAll("iframe")].map((frame) => frame.getAttribute("src") || "");
  return {
    count: document.getElementById("count").textContent,
    remote: srcs.filter((src) => /^https?:/i.test(src)),
    local: srcs.filter((src) => src && !/^https?:/i.test(src)).length
  };
})()`);

const summary = {
  checked: targets.length,
  failures: failures.length,
  gallery,
  visual,
  failureSample: failures.slice(0, 40)
};
writeFileSync("/tmp/preview-test-report.json", JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
ws.close();
chrome.kill();
process.exit(failures.length || gallery.remote.length ? 1 : 0);
