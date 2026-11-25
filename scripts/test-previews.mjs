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
ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.method === "Page.loadEventFired" && loadWait) {
    loadWait();
    loadWait = null;
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
  failureSample: failures.slice(0, 40)
};
writeFileSync("/tmp/preview-test-report.json", JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
ws.close();
chrome.kill();
process.exit(failures.length || gallery.remote.length ? 1 : 0);
