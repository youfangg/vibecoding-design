(function () {
  const lib = window.LIBRARY;
  const app = document.getElementById("app");
  const bootError = document.getElementById("boot-error");
  if (!lib || !Array.isArray(lib.cases) || !lib.taxonomy) {
    bootError.hidden = false;
    return;
  }

  const taxonomy = lib.taxonomy;
  const cases = lib.cases;
  const byId = new Map(cases.map(function (c) { return [c.id, c]; }));
  const catIds = new Set(taxonomy.categories.map(function (c) { return c.id; }));
  const srcIds = new Set(taxonomy.sources.map(function (s) { return s.id; }));
  const catRank = new Map();
  taxonomy.volumes.forEach(function (volume) {
    volume.categories.forEach(function (category) {
      if (!catRank.has(category.id)) catRank.set(category.id, catRank.size);
    });
  });
  cases.forEach(function (item, index) {
    item.order = index;
    item.hay = [
      item.title,
      item.description,
      item.prompt,
      item.author,
      item.stack,
      item.trigger,
      item.subcategory,
      item.id,
      item.categoryLabel,
      item.sourceLabel,
      item.volumeTitle
    ].concat((item.links || []).flatMap(function (link) {
      return [link.title, link.href, link.site];
    })).filter(Boolean).join("\n").toLowerCase();
  });
  const ordered = cases.slice().sort(function (a, b) {
    const rank = (catRank.get(a.category) || 0) - (catRank.get(b.category) || 0);
    return rank || a.order - b.order;
  });
  ordered.forEach(function (item, index) { item.no = index + 1; });

  const q = document.getElementById("q");
  const catsEl = document.getElementById("cats");
  const sourcesEl = document.getElementById("sources");
  const listEl = document.getElementById("list");
  const reader = document.getElementById("reader");
  const countEl = document.getElementById("count");
  const clearBtn = document.getElementById("clear");
  const leadEl = document.getElementById("index-lead");
  const noteEl = document.getElementById("filter-note");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let state = { q: "", cat: "", src: "", id: "" };
  let results = [];
  let lastId = null;
  let booted = false;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function escapeReg(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function fill(node, text, tokens) {
    node.replaceChildren();
    if (!text) return;
    if (!tokens.length) {
      node.textContent = text;
      return;
    }
    const re = new RegExp(tokens.map(escapeReg).join("|"), "gi");
    let last = 0;
    for (const match of text.matchAll(re)) {
      if (match.index > last) node.append(text.slice(last, match.index));
      node.append(el("mark", null, match[0]));
      last = match.index + match[0].length;
      if (match[0].length === 0) break;
    }
    if (last < text.length) node.append(text.slice(last));
  }

  function tokensOf(query) {
    return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }

  function matches(item, filter) {
    if (filter.cat && item.category !== filter.cat) return false;
    if (filter.src && item.source !== filter.src) return false;
    return filter.qToks.every(function (token) { return item.hay.includes(token); });
  }

  function safeUrl(url) {
    if (!url || typeof url !== "string") return "";
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.href;
    } catch (error) {
      return "";
    }
    return "";
  }

  function hostLabel(url) {
    try { return new URL(url).host.replace(/^www\./, ""); }
    catch (error) { return ""; }
  }

  function readState() {
    const params = new URLSearchParams(location.search);
    let id = "";
    if (location.hash.length > 1) {
      try { id = decodeURIComponent(location.hash.slice(1)); }
      catch (error) { id = location.hash.slice(1); }
    }
    return {
      q: params.get("q") || "",
      cat: params.get("cat") || "",
      src: params.get("src") || "",
      id: id
    };
  }

  function sanitize(next) {
    if (next.cat && !catIds.has(next.cat)) next.cat = "";
    if (next.src && !srcIds.has(next.src)) next.src = "";
    if (next.id && !byId.has(next.id)) next.id = "";
    return next;
  }

  function writeState(mode) {
    if (mode === "none") return;
    const url = new URL(location.href);
    const params = new URLSearchParams();
    if (state.q) params.set("q", state.q);
    if (state.cat) params.set("cat", state.cat);
    if (state.src) params.set("src", state.src);
    url.search = params.toString();
    url.hash = state.id || "";
    const next = url.pathname + url.search + url.hash;
    const current = location.pathname + location.search + location.hash;
    if (next === current) return;
    history[mode === "push" ? "pushState" : "replaceState"](null, "", next);
  }

  function commit(mode) {
    writeState(mode);
    render();
  }

  function navButton(id, label, kind) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-item";
    button.dataset[kind] = id;
    button.append(el("span", "nav-label", label), el("span", "nav-count", ""));
    return button;
  }

  function buildNav() {
    catsEl.append(navButton("", "全部", "cat"));
    taxonomy.volumes.forEach(function (volume) {
      const block = el("div", "vol");
      block.append(el("p", "vol-name", volume.title));
      const row = el("div", "vol-cats");
      volume.categories.forEach(function (category) {
        row.append(navButton(category.id, category.label, "cat"));
      });
      block.append(row);
      catsEl.append(block);
    });
    sourcesEl.append(navButton("", "全部", "src"));
    taxonomy.sources.forEach(function (source) {
      sourcesEl.append(navButton(source.id, source.label, "src"));
    });
  }

  function updateNav(container, kind, active, countFor) {
    container.querySelectorAll(".nav-item").forEach(function (button) {
      const id = button.dataset[kind];
      const on = id === active;
      const count = countFor(id);
      button.classList.toggle("is-active", on);
      button.classList.toggle("is-empty", !on && count === 0);
      button.setAttribute("aria-pressed", on ? "true" : "false");
      button.querySelector(".nav-count").textContent = String(count);
    });
  }

  function renderList(qToks) {
    const fragment = document.createDocumentFragment();
    if (!results.length) {
      const empty = el("p", "empty");
      empty.append(el("strong", null, "没有符合的案例"));
      empty.append("试一个更短的词，或清除筛选。");
      fragment.append(empty);
    } else {
      results.forEach(function (item) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "entry";
        button.dataset.open = item.id;
        if (item.id === state.id) button.setAttribute("aria-current", "true");
        const body = el("span", "entry-body");
        const title = el("span", "entry-title");
        const desc = el("span", "entry-desc");
        fill(title, item.title, qToks);
        fill(desc, item.description, qToks);
        body.append(title, desc, el("span", "entry-meta", item.categoryLabel + " · " + item.sourceLabel));
        button.append(el("span", "entry-no", String(item.no).padStart(3, "0")), body);
        fragment.append(button);
      });
    }
    listEl.replaceChildren(fragment);
  }

  function linkCard(href, kicker, name, className) {
    const anchor = document.createElement("a");
    anchor.className = className;
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.append(
      el("span", "demo-kicker", kicker),
      el("span", "demo-name", name),
      el("span", "demo-host", hostLabel(href) + " ↗")
    );
    return anchor;
  }

  function addFact(list, label, value) {
    if (!value) return;
    const row = el("div");
    row.append(el("dt", null, label));
    const dd = el("dd");
    if (typeof value === "string") dd.textContent = value;
    else dd.append(value);
    row.append(dd);
    list.append(row);
  }

  function renderIntro() {
    reader.setAttribute("aria-labelledby", "intro-title");
    const intro = el("div", "intro");
    intro.append(el("p", "intro-kicker", "统计截至 " + taxonomy.asOf));
    const title = el("h2", "intro-title", "先核对运动，再复制提示词。");
    title.id = "intro-title";
    intro.append(title);
    intro.append(el("p", "lead", taxonomy.total + " 条已核验案例，按 " + taxonomy.categories.length + " 个主类、" + taxonomy.sources.length + " 类来源收在 " + taxonomy.volumes.length + " 个分册里。"));
    const steps = el("ol", "steps");
    [
      ["检索", "用关键词、主类或来源把范围缩小。"],
      ["核对", "打开官方演示，确认是不是要的运动。"],
      ["复制", "提示词保持原文，贴进 AI Coding 工具。"]
    ].forEach(function (step) {
      const li = el("li");
      li.append(el("span", null, step[0]), document.createTextNode(step[1]));
      steps.append(li);
    });
    intro.append(steps);
    intro.append(el("h3", null, "六个分册"));
    const volumes = el("ul", "volumes");
    taxonomy.volumes.forEach(function (volume) {
      const li = el("li");
      li.append(el("span", null, volume.title), el("span", "nav-count", String(volume.count)));
      volumes.append(li);
    });
    intro.append(volumes);
    const featuredIds = taxonomy.featuredPreviewIds || [];
    if (featuredIds.length) {
      intro.append(el("h3", null, "总目上留有预览图的 " + featuredIds.length + " 条"));
      const featured = el("ul", "featured");
      featuredIds.forEach(function (id) {
        const item = byId.get(id);
        if (!item) return;
        const li = el("li");
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.open = id;
        button.textContent = item.title;
        li.append(button);
        featured.append(li);
      });
      intro.append(featured);
    }
    intro.append(el("p", "colophon", "动效以官方演示为准。使用提示词时沿用分册里的约束：长正文不要逐字动画；手势类要提供键盘或非拖拽替代；钉住滚动要保留锚点导航；转场中要锁点击；三维、着色器或粒子背景不要挡住正文，并给弱设备准备回退；自定义光标默认只给桌面并保留点击可访问性；骨架要把占位块落地成「数据到达后的布局变形」，而不是瞬间换掉；一律尊重 reduced-motion。"));
    reader.replaceChildren(intro);
  }

  function renderCase(item, qToks) {
    reader.setAttribute("aria-labelledby", "case-title");
    const wrap = el("div", "case");
    const bar = el("div", "reader-toolbar");
    const close = document.createElement("button");
    close.type = "button";
    close.className = "close-case";
    close.dataset.close = "1";
    close.append(el("span", "close-wide", "关闭"), el("span", "close-narrow", "返回目录"));
    bar.append(close, el("span", "case-no", "No. " + String(item.no).padStart(3, "0")));
    const eyebrow = el("p", "eyebrow");
    const catBtn = document.createElement("button");
    catBtn.type = "button";
    catBtn.dataset.setCat = item.category;
    catBtn.textContent = item.categoryLabel;
    const srcBtn = document.createElement("button");
    srcBtn.type = "button";
    srcBtn.dataset.setSrc = item.source;
    srcBtn.textContent = item.sourceLabel;
    eyebrow.append(catBtn, el("span", null, "·"), srcBtn);
    wrap.append(eyebrow);

    const title = el("h2", "case-title");
    title.id = "case-title";
    title.tabIndex = -1;
    fill(title, item.title, qToks);
    wrap.append(title);

    const lead = el("p", "lead");
    fill(lead, item.description, qToks);
    wrap.append(lead);

    const demoHref = safeUrl(item.officialDemoUrl);
    const originHref = safeUrl(item.originalUrl);
    const demoLink = (item.links || []).find(function (link) { return link.href === item.officialDemoUrl; });
    const originLink = (item.links || []).find(function (link) { return link.href === item.originalUrl; });
    if (demoHref) {
      wrap.append(linkCard(demoHref, "官方演示", demoLink ? demoLink.title : "打开官方演示", "demo"));
    }
    if (originHref && originHref !== demoHref) {
      wrap.append(linkCard(originHref, "原始出处", originLink ? originLink.title : "打开原始出处", "origin-link"));
    }
    if (!demoHref) {
      wrap.append(el("p", "missing-demo", "官方演示未单独标出，请从下方出处打开。"));
    }

    const facts = el("dl", "facts");
    addFact(facts, "触发", item.trigger);
    addFact(facts, "技术栈", item.stack);
    addFact(facts, "子类", item.subcategory);
    addFact(facts, "作者", item.author);
    addFact(facts, "日期", item.date);
    const volumeHref = safeUrl(item.volumeUrl);
    if (volumeHref && item.volumeTitle) {
      const volume = document.createElement("a");
      volume.href = volumeHref;
      volume.target = "_blank";
      volume.rel = "noopener noreferrer";
      volume.textContent = item.volumeTitle;
      addFact(facts, "分册", volume);
    } else {
      addFact(facts, "分册", item.volumeTitle);
    }
    addFact(facts, "标识", item.id);
    wrap.append(facts);

    const head = el("div", "prompt-head");
    head.append(el("h3", null, "提示词"));
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "copy";
    copy.dataset.copy = item.id;
    copy.textContent = "复制提示词";
    head.append(copy);
    wrap.append(head);
    wrap.append(el("pre", "prompt", item.prompt));

    if (item.links && item.links.length) {
      wrap.append(el("h3", null, "出处"));
      const bib = el("ul", "bib");
      item.links.forEach(function (link) {
        const href = safeUrl(link.href);
        if (!href) return;
        const li = el("li");
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = link.title || href;
        li.append(anchor);
        const meta = [link.site, link.date].filter(Boolean).join(" · ");
        if (meta) li.append(el("span", "link-meta", meta));
        bib.append(li);
      });
      wrap.append(bib);
    }

    const index = results.findIndex(function (entry) { return entry.id === item.id; });
    if (index >= 0) {
      const nav = el("nav", "pager");
      nav.setAttribute("aria-label", "相邻案例");
      nav.append(pagerButton(results[index - 1], "上一条", "prev"));
      nav.append(pagerButton(results[index + 1], "下一条", "next"));
      wrap.append(nav);
    }
    reader.replaceChildren(bar, wrap);
  }

  function pagerButton(item, kicker, side) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pager-btn " + side;
    button.append(el("span", "pager-kicker", kicker));
    if (!item) {
      button.disabled = true;
      button.append(el("span", "pager-title", side === "prev" ? "已是第一条" : "已是最后一条"));
    } else {
      button.dataset.pager = item.id;
      button.append(el("span", "pager-title", item.title));
    }
    return button;
  }

  function render() {
    const qToks = tokensOf(state.q);
    const filter = { qToks: qToks, cat: state.cat, src: state.src };
    results = ordered.filter(function (item) { return matches(item, filter); });
    if (q.value !== state.q) q.value = state.q;
    const filtering = Boolean(state.q || state.cat || state.src);
    countEl.textContent = filtering ? results.length + " / " + ordered.length + " 条" : ordered.length + " 条";
    clearBtn.hidden = !filtering;
    leadEl.textContent = taxonomy.total + " 条已核验案例。选定一条后，可以打开官方演示并复制提示词。";
    document.getElementById("mast-count").textContent = String(taxonomy.total);
    document.getElementById("mast-date").textContent = taxonomy.asOf;
    updateNav(catsEl, "cat", state.cat, function (id) {
      return ordered.filter(function (item) {
        return matches(item, { qToks: qToks, cat: id, src: state.src });
      }).length;
    });
    updateNav(sourcesEl, "src", state.src, function (id) {
      return ordered.filter(function (item) {
        return matches(item, { qToks: qToks, cat: state.cat, src: id });
      }).length;
    });
    renderList(qToks);
    const openHidden = Boolean(state.id) && !results.some(function (item) { return item.id === state.id; });
    noteEl.hidden = !openHidden;
    noteEl.textContent = openHidden ? "正在阅读的案例不在这组结果里。" : "";
    const top = reader.scrollTop;
    const changed = lastId !== state.id;
    if (state.id) renderCase(byId.get(state.id), qToks);
    else renderIntro();
    if (changed) reader.scrollTop = 0;
    else reader.scrollTop = top;
    if (changed && state.id) {
      const selector = '[data-open="' + CSS.escape(state.id) + '"]';
      const button = listEl.querySelector(selector);
      if (button) button.scrollIntoView({ block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
      if (booted && document.activeElement !== q) {
        const heading = document.getElementById("case-title");
        if (heading) heading.focus({ preventScroll: true });
      }
    }
    lastId = state.id;
    document.body.classList.toggle("is-reading", Boolean(state.id));
    document.title = state.id ? byId.get(state.id).title + " · 交互动效资料库" : "交互动效资料库";
    document.documentElement.dataset.ready = "1";
    booted = true;
  }

  async function copyPrompt(button) {
    const text = byId.get(button.dataset.copy).prompt;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "0";
      area.style.left = "0";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.focus();
      area.select();
      try { ok = document.execCommand("copy"); }
      catch (copyError) { ok = false; }
      area.remove();
    }
    button.textContent = ok ? "已复制" : "请手动选择";
    button.classList.toggle("is-done", ok);
    window.setTimeout(function () {
      if (!button.isConnected) return;
      button.textContent = "复制提示词";
      button.classList.remove("is-done");
    }, 1600);
    button.focus();
  }

  buildNav();
  document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    q.blur();
  });
  q.addEventListener("input", function () {
    state.q = q.value;
    commit("replace");
  });
  catsEl.addEventListener("click", function (event) {
    const button = event.target.closest("[data-cat]");
    if (!button) return;
    const id = button.dataset.cat;
    state.cat = id && id === state.cat ? "" : id;
    commit("replace");
  });
  sourcesEl.addEventListener("click", function (event) {
    const button = event.target.closest("[data-src]");
    if (!button) return;
    const id = button.dataset.src;
    state.src = id && id === state.src ? "" : id;
    commit("replace");
  });
  clearBtn.addEventListener("click", function () {
    state.q = "";
    state.cat = "";
    state.src = "";
    commit("replace");
  });
  listEl.addEventListener("click", function (event) {
    const button = event.target.closest("[data-open]");
    if (!button) return;
    state.id = button.dataset.open;
    commit("push");
  });
  reader.addEventListener("click", function (event) {
    const opener = event.target.closest("[data-open]");
    if (opener) {
      state.id = opener.dataset.open;
      commit("push");
      return;
    }
    if (event.target.closest("[data-close]")) {
      state.id = "";
      commit("push");
      return;
    }
    const pager = event.target.closest("[data-pager]");
    if (pager) {
      state.id = pager.dataset.pager;
      commit("push");
      return;
    }
    const setCat = event.target.closest("[data-set-cat]");
    if (setCat) {
      state.cat = setCat.dataset.setCat;
      commit("replace");
      return;
    }
    const setSrc = event.target.closest("[data-set-src]");
    if (setSrc) {
      state.src = setSrc.dataset.setSrc;
      commit("replace");
      return;
    }
    const copy = event.target.closest("[data-copy]");
    if (copy) copyPrompt(copy);
  });
  document.querySelector(".brand").addEventListener("click", function (event) {
    event.preventDefault();
    state = { q: "", cat: "", src: "", id: "" };
    commit("push");
  });
  document.addEventListener("keydown", function (event) {
    const typing = event.target && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable);
    if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      q.focus();
      q.select();
    } else if (event.key === "Escape" && state.id) {
      state.id = "";
      commit("push");
    } else if (event.key === "Escape" && event.target === q) {
      q.blur();
    }
  });
  window.addEventListener("popstate", function () {
    state = sanitize(readState());
    render();
  });

  state = sanitize(readState());
  app.hidden = false;
  render();
})();
