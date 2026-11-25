(function () {
  const lib = window.LIBRARY;
  const app = document.getElementById("app");
  const bootError = document.getElementById("boot-error");
  if (!lib || !Array.isArray(lib.cases) || !lib.taxonomy) {
    bootError.hidden = false;
    return;
  }

  const EMBED_SANDBOX = "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox";
  const MAX_CARD_FRAMES = 8;

  const taxonomy = lib.taxonomy;
  const cases = lib.cases;
  const byId = new Map(cases.map(function (c) { return [c.id, c]; }));
  const catIds = new Set(taxonomy.categories.map(function (c) { return c.id; }));
  const srcIds = new Set(taxonomy.sources.map(function (s) { return s.id; }));
  const catMeta = new Map(taxonomy.categories.map(function (c) { return [c.id, c]; }));
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
  const gallery = document.getElementById("gallery");
  const aboutEl = document.getElementById("about");
  const countEl = document.getElementById("count");
  const clearBtn = document.getElementById("clear");
  const leadEl = document.getElementById("index-lead");
  const noteEl = document.getElementById("filter-note");
  const mast = document.querySelector(".mast");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrowQuery = window.matchMedia("(max-width: 1099px)");

  let state = { q: "", cat: "", src: "", id: "" };
  let lastId = null;
  let booted = false;
  let savedScroll = 0;
  let previewObserver = null;
  const intersecting = new Set();

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

  function canEmbed(url) {
    const allow = window.EMBED_ALLOW && window.EMBED_ALLOW.urls;
    return Boolean(url && allow && allow[url] === true);
  }

  function recutSrc(item) {
    if (!window.PREVIEW_RECUTS || !window.PREVIEW_RECUTS[item.id]) return "";
    return "previews/" + item.id + ".html";
  }

  function previewPlan(item) {
    const demo = safeUrl(item.officialDemoUrl);
    const local = recutSrc(item);
    if (canEmbed(demo)) return { mode: "embed", src: demo, local: local, embed: demo };
    if (local) return { mode: "local", src: local, local: local, embed: "" };
    return { mode: "none", src: "", local: "", embed: "" };
  }

  function statusLine(plan) {
    if (plan.mode === "none") return { live: false, text: "暂无预览" };
    if (plan.local && plan.embed) return { live: true, text: "可预览 · 官方 / 复刻" };
    if (plan.mode === "local") return { live: true, text: "可预览 · 站内复刻" };
    return { live: true, text: "可预览 · 官方页面" };
  }

  // Cards prefer a registered recut: it is a full scene sized to the frame.
  // The case stage still opens the official page first when embedding is allowed.
  function cardFrame(plan) {
    if (plan.local) return { mode: "local", src: plan.local };
    return { mode: plan.mode, src: plan.src };
  }

  function cardStatus(plan) {
    if (plan.mode === "none") return { live: false, text: "暂无预览" };
    if (plan.local) return { live: true, text: "可预览 · 站内复刻" };
    if (plan.mode === "embed") return { live: true, text: "可预览 · 官方页面" };
    return { live: true, text: "可预览" };
  }

  function applyFrame(frame, mode, src, title) {
    if (mode === "embed") {
      frame.setAttribute("sandbox", EMBED_SANDBOX);
      frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    } else {
      frame.removeAttribute("sandbox");
      frame.removeAttribute("referrerpolicy");
    }
    frame.title = (mode === "embed" ? "官方演示：" : "站内复刻：") + title;
    frame.src = src;
  }

  function glyphOf(item) {
    const text = String(item && item.title || "").replace(/[\s/·・]/g, "");
    return text.slice(0, 1) || "案";
  }

  function renderPoster(category, flag, glyph) {
    const poster = el("div", "poster");
    const sceneName = category || "type";
    poster.dataset.scene = sceneName;
    const scene = el("div", "scene scene-" + sceneName);
    scene.setAttribute("aria-hidden", "true");
    ["a", "b", "c", "d"].forEach(function (name) {
      const obj = el("span", "obj " + name);
      if (name === "a" && glyph) obj.setAttribute("data-glyph", glyph);
      scene.append(obj);
    });
    poster.append(scene);
    if (glyph && sceneName !== "type") {
      const chip = el("span", "poster-glyph", glyph);
      chip.setAttribute("aria-hidden", "true");
      poster.append(chip);
    }
    poster.append(el("p", "poster-flag", flag));
    return poster;
  }

  function renderStage(item) {
    const plan = previewPlan(item);
    const stage = el("section", "stage is-" + plan.mode);
    stage.setAttribute("aria-label", "案例预览");
    const bar = el("div", "stage-bar");
    const titles = el("div", "stage-titles");
    titles.append(el("h3", "stage-kicker", "站内预览"));
    const noteBits = [];
    if (item.trigger) noteBits.push("触发 · " + item.trigger);
    if (!(plan.local && plan.embed)) {
      noteBits.push(plan.mode === "embed" ? "官方页面嵌入" : plan.mode === "local" ? "依据提示词复刻" : "尚未嵌入");
    }
    if (noteBits.length) titles.append(el("p", "stage-note", noteBits.join("  ·  ")));
    bar.append(titles);

    const actions = el("div", "stage-actions");
    if (plan.local && plan.embed) {
      const group = el("div", "stage-switch");
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", "预览来源");
      [["embed", "官方页面"], ["local", "站内复刻"]].forEach(function (choice) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.previewSource = choice[0];
        button.textContent = choice[1];
        button.setAttribute("aria-pressed", plan.mode === choice[0] ? "true" : "false");
        group.append(button);
      });
      actions.append(group);
    }
    const demoHref = safeUrl(item.officialDemoUrl);
    if (demoHref) {
      const anchor = document.createElement("a");
      anchor.className = "stage-demo";
      anchor.href = demoHref;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = "官方演示 ↗";
      actions.append(anchor);
    }
    bar.append(actions);
    stage.append(bar);

    const viewport = el("div", "stage-viewport");
    if (plan.mode === "none") {
      const empty = el("div", "stage-empty");
      empty.append(renderPoster(item.category, "暂无站内预览", glyphOf(item)));
      const copy = el("div", "stage-empty-copy");
      copy.append(el("strong", null, "暂无站内预览"));
      copy.append(el("p", null, demoHref
        ? "官方页面不允许被嵌入，这条也还没有站内复刻。请打开官方演示核对运动。"
        : "这条没有单独的官方演示地址，也还没有站内复刻。请从下方出处打开。"));
      empty.append(copy);
      viewport.append(empty);
    } else {
      viewport.append(renderPoster(item.category, "正在打开预览", glyphOf(item)));
      const frame = document.createElement("iframe");
      frame.className = "stage-iframe";
      frame.dataset.localSrc = plan.local;
      frame.dataset.embedSrc = plan.embed;
      frame.dataset.caseTitle = item.title;
      frame.addEventListener("load", function () { viewport.classList.add("is-ready"); });
      applyFrame(frame, plan.mode, plan.src, item.title);
      viewport.append(frame);
    }
    stage.append(viewport);
    return stage;
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
    button.className = "chip nav-item";
    button.dataset[kind] = id;
    button.append(el("span", "chip-label", label), el("span", "nav-count", ""));
    return button;
  }

  function buildNav() {
    sourcesEl.append(navButton("", "全部", "src"));
    taxonomy.sources.forEach(function (source) {
      sourcesEl.append(navButton(source.id, source.label, "src"));
    });
    catsEl.append(navButton("", "全部", "cat"));
    taxonomy.volumes.forEach(function (volume) {
      catsEl.append(el("span", "chip-vol", volume.title));
      volume.categories.forEach(function (category) {
        catsEl.append(navButton(category.id, category.label, "cat"));
      });
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

  function groupCases(items) {
    const groups = [];
    const map = new Map();
    items.forEach(function (item) {
      let group = map.get(item.category);
      if (!group) {
        group = { category: item.category, items: [] };
        map.set(item.category, group);
        groups.push(group);
      }
      group.items.push(item);
    });
    groups.forEach(function (group) {
      group.items.sort(function (a, b) {
        function rank(item) {
          const plan = previewPlan(item);
          if (plan.local) return 0;
          if (plan.mode !== "none") return 1;
          return 2;
        }
        return rank(a) - rank(b) || a.no - b.no;
      });
    });
    return groups;
  }

  function flatten(groups) {
    const list = [];
    groups.forEach(function (group) {
      group.items.forEach(function (item) { list.push(item); });
    });
    return list;
  }

  function renderCard(item, qToks) {
    const plan = previewPlan(item);
    const framePlan = cardFrame(plan);
    const status = cardStatus(plan);
    const card = el("article", "card");
    const stage = el("div", "card-stage");
    stage.dataset.previewHost = "1";
    stage.dataset.mode = framePlan.mode;
    stage.dataset.src = framePlan.src || "";
    stage.dataset.caseTitle = item.title;
    stage.append(renderPoster(item.category, plan.mode === "none" ? "暂无站内预览" : "", glyphOf(item)));

    const caption = el("div", "card-caption");
    const title = el("p", "card-title");
    const titleId = "card-title-" + item.id;
    const metaId = "card-meta-" + item.id;
    const statusId = "card-status-" + item.id;
    title.id = titleId;
    fill(title, item.title, qToks);
    const meta = el("p", "card-meta");
    meta.id = metaId;
    meta.append(
      el("span", null, item.categoryLabel),
      el("span", "dotsep", "·"),
      el("span", null, item.sourceLabel)
    );
    caption.append(title, meta);
    if (qToks.length && item.description) {
      const desc = el("p", "card-desc");
      fill(desc, item.description, qToks);
      caption.append(desc);
    }
    const statusP = el("p", "card-status " + (status.live ? "is-live" : "is-idle"));
    statusP.id = statusId;
    statusP.append(el("span", "card-status-text", status.text));
    caption.append(statusP);

    const hit = document.createElement("button");
    hit.type = "button";
    hit.className = "card-hit";
    hit.dataset.open = item.id;
    hit.setAttribute("aria-labelledby", titleId + " " + metaId + " " + statusId);

    card.append(stage, caption, hit);
    return card;
  }

  function renderGallery(items, groups, qToks) {
    const fragment = document.createDocumentFragment();
    if (!items.length) {
      const empty = el("p", "empty");
      empty.append(el("strong", null, "没有符合的案例"));
      empty.append("试一个更短的词，或清除筛选。");
      fragment.append(empty);
    } else {
      groups.forEach(function (group) {
        const meta = catMeta.get(group.category);
        const section = el("section", "shelf");
        const headId = "shelf-" + group.category;
        section.setAttribute("aria-labelledby", headId);
        const head = el("header", "shelf-head");
        const heading = el("h3", null, meta ? meta.label : group.category);
        heading.id = headId;
        const previewN = group.items.filter(function (item) {
          return previewPlan(item).mode !== "none";
        }).length;
        const sub = (meta ? meta.volumeTitle + " · " : "") + previewN + " 可预览 / " + group.items.length;
        head.append(heading, el("p", null, sub));
        const grid = el("div", "grid");
        group.items.forEach(function (item) { grid.append(renderCard(item, qToks)); });
        section.append(head, grid);
        fragment.append(section);
      });
    }
    listEl.replaceChildren(fragment);
  }

  function externalAnchor(href, className, text) {
    const anchor = document.createElement("a");
    anchor.className = className;
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = text;
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

  function renderCase(item, qToks, flat, openHidden) {
    reader.setAttribute("aria-labelledby", "case-title");
    const plan = previewPlan(item);
    const status = statusLine(plan);
    const bar = el("div", "reader-toolbar");
    const close = document.createElement("button");
    close.type = "button";
    close.className = "close-case";
    close.dataset.close = "1";
    close.textContent = "返回画廊";
    bar.append(close, el("p", "toolbar-title", item.title), el("span", "case-no", "No. " + String(item.no).padStart(3, "0")));

    const layout = el("div", "stage-layout");
    const pane = el("div", "stage-pane");
    pane.append(renderStage(item));

    const dossier = el("div", "dossier");
    if (openHidden) dossier.append(el("p", "filter-note", "正在阅读的案例不在这组结果里。"));

    const eyebrow = el("p", "eyebrow");
    const catBtn = document.createElement("button");
    catBtn.type = "button";
    catBtn.dataset.setCat = item.category;
    catBtn.textContent = item.categoryLabel;
    const srcBtn = document.createElement("button");
    srcBtn.type = "button";
    srcBtn.dataset.setSrc = item.source;
    srcBtn.textContent = item.sourceLabel;
    eyebrow.append(
      catBtn,
      el("span", "eyebrow-sep", "·"),
      srcBtn,
      el("span", "preview-pill " + (status.live ? "is-live" : "is-idle"), status.text)
    );
    dossier.append(eyebrow);

    const title = el("h2", "case-title");
    title.id = "case-title";
    title.tabIndex = -1;
    fill(title, item.title, qToks);
    dossier.append(title);

    const lead = el("p", "lead");
    fill(lead, item.description, qToks);
    dossier.append(lead);

    const demoHref = safeUrl(item.officialDemoUrl);
    const originHref = safeUrl(item.originalUrl);
    const demoLink = (item.links || []).find(function (link) { return link.href === item.officialDemoUrl; });
    const originLink = (item.links || []).find(function (link) { return link.href === item.originalUrl; });
    if (demoHref) {
      const row = el("p", "demo-row");
      row.append(externalAnchor(demoHref, "text-demo", demoLink && demoLink.title ? demoLink.title : "打开官方演示"));
      const host = hostLabel(demoHref);
      if (host) row.append(el("span", "demo-host", host + " ↗"));
      dossier.append(row);
    }
    if (originHref && originHref !== demoHref) {
      const row = el("p", "origin-row");
      row.append(externalAnchor(originHref, "origin-link", originLink && originLink.title ? originLink.title : "打开原始出处"));
      const host = hostLabel(originHref);
      if (host) row.append(el("span", "demo-host", host + " ↗"));
      dossier.append(row);
    }
    if (!demoHref) dossier.append(el("p", "missing-demo", "官方演示未单独标出，请从下方出处打开。"));

    const head = el("div", "prompt-head");
    head.append(el("h3", null, "提示词"));
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "copy";
    copy.dataset.copy = item.id;
    copy.textContent = "复制提示词";
    head.append(copy);
    dossier.append(head, el("pre", "prompt", item.prompt));

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
    dossier.append(facts);

    if (item.links && item.links.length) {
      dossier.append(el("h3", null, "出处"));
      const bib = el("ul", "bib");
      item.links.forEach(function (link) {
        const href = safeUrl(link.href);
        if (!href) return;
        const li = el("li");
        li.append(externalAnchor(href, null, link.title || href));
        const meta = [link.site, link.date].filter(Boolean).join(" · ");
        if (meta) li.append(el("span", "link-meta", meta));
        bib.append(li);
      });
      dossier.append(bib);
    }

    const index = flat.findIndex(function (entry) { return entry.id === item.id; });
    if (index >= 0) {
      const nav = el("nav", "pager");
      nav.setAttribute("aria-label", "相邻案例");
      nav.append(pagerButton(flat[index - 1], "上一条", "prev"));
      nav.append(pagerButton(flat[index + 1], "下一条", "next"));
      dossier.append(nav);
    }

    layout.append(pane, dossier);
    reader.replaceChildren(bar, layout);
  }

  function buildAbout() {
    aboutEl.className = "about";
    aboutEl.append(el("h2", null, "怎么用这份画廊"));
    const steps = el("ol", "steps");
    [
      ["看效果", "画廊里能预览的卡片会直接播放运动。不能嵌入、也没有复刻的，卡片写明暂无预览。"],
      ["打开", "点进案例后，预览占主画面。官方页面和站内复刻都有时，可以在预览上切换。"],
      ["复制", "提示词保持原文，贴进 AI Coding 工具。"]
    ].forEach(function (step) {
      const li = el("li");
      li.append(el("span", null, step[0]), document.createTextNode(step[1]));
      steps.append(li);
    });
    aboutEl.append(steps);
    aboutEl.append(el("h2", null, "六个分册"));
    const volumes = el("ul", "volumes");
    taxonomy.volumes.forEach(function (volume) {
      const li = el("li");
      li.append(el("span", null, volume.title), el("span", "nav-count", String(volume.count)));
      volumes.append(li);
    });
    aboutEl.append(volumes);
    const featuredIds = taxonomy.featuredPreviewIds || [];
    if (featuredIds.length) {
      aboutEl.append(el("h2", null, "总目上留有预览图的 " + featuredIds.length + " 条"));
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
      aboutEl.append(featured);
    }
    aboutEl.append(el("p", "colophon", "动效以官方演示为准。使用提示词时沿用分册里的约束：长正文不要逐字动画；手势类要提供键盘或非拖拽替代；钉住滚动要保留锚点导航；转场中要锁点击；三维、着色器或粒子背景不要挡住正文，并给弱设备准备回退；自定义光标默认只给桌面并保留点击可访问性；骨架要把占位块落地成「数据到达后的布局变形」，而不是瞬间换掉；一律尊重 reduced-motion。"));
  }

  function stopCardPreviews() {
    intersecting.clear();
    if (previewObserver) previewObserver.disconnect();
  }

  function setPosterFlag(host, text) {
    const flag = host.querySelector(".poster-flag");
    if (flag) flag.textContent = text || "";
  }

  function mountCard(host) {
    if (host.classList.contains("is-mounted")) return;
    const mode = host.dataset.mode;
    const src = host.dataset.src;
    if (!src || mode === "none") return;
    setPosterFlag(host, "正在打开预览");
    const frame = document.createElement("iframe");
    frame.className = "card-iframe";
    frame.tabIndex = -1;
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("scrolling", "no");
    frame.addEventListener("load", function () { host.classList.add("is-ready"); });
    applyFrame(frame, mode, src, host.dataset.caseTitle || "");
    host.appendChild(frame);
    host.classList.add("is-mounted");
  }

  function unmountCard(host) {
    const frame = host.querySelector("iframe");
    if (frame) frame.remove();
    host.classList.remove("is-mounted", "is-ready");
    if (host.dataset.mode !== "none") setPosterFlag(host, "");
  }

  function viewportDistance(host) {
    const rect = host.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    return Math.abs(mid - window.innerHeight / 2);
  }

  function reconcileCards() {
    const ranked = Array.from(intersecting).sort(function (a, b) {
      return viewportDistance(a) - viewportDistance(b);
    });
    const keep = new Set(ranked.slice(0, MAX_CARD_FRAMES));
    ranked.forEach(function (host) {
      if (keep.has(host)) mountCard(host);
      else unmountCard(host);
    });
    listEl.querySelectorAll("[data-preview-host].is-mounted").forEach(function (host) {
      if (!keep.has(host)) unmountCard(host);
    });
  }

  function onPreview(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) intersecting.add(entry.target);
      else intersecting.delete(entry.target);
    });
    reconcileCards();
  }

  function bindCardPreviews() {
    stopCardPreviews();
    previewObserver = new IntersectionObserver(onPreview, {
      root: null,
      rootMargin: "60px 0px",
      threshold: 0.35
    });
    listEl.querySelectorAll("[data-preview-host]").forEach(function (host) {
      if (host.dataset.mode === "none" || !host.dataset.src) return;
      previewObserver.observe(host);
    });
  }

  function syncMastInert() {
    if (!mast) return;
    mast.inert = Boolean(state.id) && narrowQuery.matches;
  }

  const previewableTotal = ordered.filter(function (item) {
    return previewPlan(item).mode !== "none";
  }).length;

  function render() {
    const wasReading = document.body.classList.contains("is-reading");
    const qToks = tokensOf(state.q);
    const filter = { qToks: qToks, cat: state.cat, src: state.src };
    const filtered = ordered.filter(function (item) { return matches(item, filter); });
    const groups = groupCases(filtered);
    const flat = flatten(groups);
    const willRead = Boolean(state.id);
    const changed = lastId !== state.id;
    const filtering = Boolean(state.q || state.cat || state.src);
    const previewableShown = filtered.filter(function (item) {
      return previewPlan(item).mode !== "none";
    }).length;

    if (q.value !== state.q) q.value = state.q;
    countEl.textContent = filtering
      ? filtered.length + " / " + ordered.length + " 条 · " + previewableShown + " 可预览"
      : ordered.length + " 条 · " + previewableTotal + " 可预览";
    clearBtn.hidden = !filtering;
    leadEl.textContent = "先看效果。点开卡片可以在页内交互，并复制提示词。";
    document.getElementById("mast-count").textContent = String(taxonomy.total);
    document.getElementById("mast-previewable").textContent = previewableTotal + " 可预览";
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

    stopCardPreviews();
    renderGallery(filtered, groups, qToks);
    aboutEl.hidden = filtering || !filtered.length;
    const openHidden = willRead && !filtered.some(function (item) { return item.id === state.id; });
    noteEl.hidden = !openHidden || willRead;
    noteEl.textContent = openHidden ? "正在阅读的案例不在这组结果里。" : "";

    if (!wasReading && willRead) savedScroll = window.scrollY;
    if (willRead) renderCase(byId.get(state.id), qToks, flat, openHidden);
    gallery.hidden = willRead;
    reader.hidden = !willRead;
    document.body.classList.toggle("is-reading", willRead);
    syncMastInert();

    if (changed && willRead) {
      reader.scrollTop = 0;
      const dossier = reader.querySelector(".dossier");
      if (dossier) dossier.scrollTop = 0;
    }
    if (wasReading && !willRead) {
      const returnId = lastId;
      window.requestAnimationFrame(function () {
        const button = returnId && listEl.querySelector('[data-open="' + CSS.escape(returnId) + '"]');
        if (button) {
          const mastHeight = mast ? mast.getBoundingClientRect().height + 12 : 180;
          const shelf = button.closest(".shelf");
          const head = shelf ? shelf.querySelector(".shelf-head") : null;
          const first = shelf ? shelf.querySelector(".card-hit") : null;
          const target = first === button && head ? head : button.closest(".card") || button;
          target.style.scrollMarginTop = mastHeight + "px";
          target.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
          button.focus({ preventScroll: true });
        } else {
          window.scrollTo(0, savedScroll);
        }
      });
    } else if (changed && willRead && booted && document.activeElement !== q) {
      const closeBtn = reader.querySelector("[data-close]");
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    if (!willRead) bindCardPreviews();
    lastId = state.id;
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
  buildAbout();
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
  app.addEventListener("click", function (event) {
    const opener = event.target.closest("[data-open]");
    if (!opener) return;
    state.id = opener.dataset.open;
    commit("push");
  });
  reader.addEventListener("click", function (event) {
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
    const source = event.target.closest("[data-preview-source]");
    if (source) {
      if (source.getAttribute("aria-pressed") === "true") return;
      const frame = source.closest(".stage").querySelector(".stage-iframe");
      const viewport = source.closest(".stage").querySelector(".stage-viewport");
      if (!frame) return;
      const mode = source.dataset.previewSource;
      const src = mode === "local" ? frame.dataset.localSrc : frame.dataset.embedSrc;
      if (!src) return;
      if (viewport) viewport.classList.remove("is-ready");
      applyFrame(frame, mode, src, frame.dataset.caseTitle);
      source.parentElement.querySelectorAll("[data-preview-source]").forEach(function (button) {
        button.setAttribute("aria-pressed", button === source ? "true" : "false");
      });
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
  narrowQuery.addEventListener("change", syncMastInert);

  state = sanitize(readState());
  app.hidden = false;
  render();
})();
