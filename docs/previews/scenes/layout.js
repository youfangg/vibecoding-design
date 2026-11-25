(function () {
  var S = window.SCENES;
  var H = window.Host;
  function add(id, title, expectAfter, mechanism, setup) {
    S[id] = function (root) {
      var ui = H.shell(root, { title: title });
      var api = setup(ui);
      ui.reset.addEventListener("click", function () { (api.reset || api.play)(); });
      H.expose(id, mechanism, { trigger: api.play, reset: api.reset || api.play, read: api.read, page: ui.page, expectAfter: expectAfter });
      if (api.boot) api.boot();
    };
  }
  add("shared-layout", "共享布局", "detail", "shared-move", function (ui) {
    var slot = H.el("div");
    slot.style.cssText = "margin:12px;min-height:80px;background:#fffaf4;padding:8px";
    var thumb = H.el("div", null, "封面");
    thumb.style.cssText = "width:48px;height:36px;background:#c46a4a";
    slot.append(thumb); ui.body.append(slot);
    var mode = "list";
    return { play: function () { mode = "detail"; thumb.style.width = "120px"; thumb.style.height = "72px"; }, reset: function () { mode = "list"; thumb.style.width = "48px"; thumb.style.height = "36px"; }, read: function () { return mode; } };
  });
  add("resizable-navbar", "导航收缩", "compact", "nav-shrink", function (ui) {
    var nav = H.el("div", null, "南窗书局");
    nav.style.cssText = "margin:12px;padding:16px;background:#241c16;color:#f6f1e8";
    ui.body.append(nav);
    var mode = "tall";
    return { play: function () { mode = "compact"; nav.style.padding = "6px 16px"; nav.style.fontSize = "14px"; }, reset: function () { mode = "tall"; nav.style.padding = "16px"; nav.style.fontSize = "16px"; }, read: function () { return mode; } };
  });
  add("aceternity-tabs", "滑块标签", "b", "tab-pill", function (ui) {
    var row = H.el("div"); row.style.cssText = "margin:12px;display:flex;position:relative";
    var pill = H.el("i"); pill.style.cssText = "position:absolute;left:0;top:0;bottom:0;width:50%;background:#f0d0c8";
    var a = H.el("button", null, "菜单"); var b = H.el("button", null, "席位");
    a.type = b.type = "button"; a.style.flex = b.style.flex = "1"; a.style.position = b.style.position = "relative";
    row.append(pill, a, b); ui.body.append(row);
    var mode = "a";
    return { play: function () { mode = "b"; pill.style.left = "50%"; }, reset: function () { mode = "a"; pill.style.left = "0"; }, read: function () { return mode; } };
  });
  add("accordion-gallery", "手风琴", "open", "accordion-width", function (ui) {
    var row = H.el("div"); row.style.cssText = "margin:12px;display:flex;height:80px";
    var panes = ["海", "盐", "衫"].map(function (text) {
      var p = H.el("div", null, text); p.style.cssText = "flex:1;background:#d7e4ea;display:grid;place-items:center;border:1px solid #fff";
      row.append(p); return p;
    });
    ui.body.append(row);
    var mode = "even";
    return { play: function () { mode = "open"; panes[0].style.flex = "3"; }, reset: function () { mode = "even"; panes[0].style.flex = "1"; }, read: function () { return mode; } };
  });
  add("rb-gooey-nav", "黏液指示", "second", "goo-indicator", function (ui) {
    var dot = H.el("div");
    dot.style.cssText = "width:18px;height:18px;border-radius:50%;background:#8a3b2c;margin:16px";
    ui.body.append(dot);
    var mode = "first";
    return { play: function () { mode = "second"; dot.style.transform = "translateX(48px) scaleX(1.4)"; }, reset: function () { mode = "first"; dot.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-bubble-menu", "气泡菜单", "open", "bubbles-spread", function (ui) {
    var bubbles = ["午", "晚", "酒"].map(function (text, i) {
      var b = H.el("span", null, text);
      b.style.cssText = "display:inline-grid;place-items:center;width:36px;height:36px;margin:8px;border-radius:50%;background:#8a3b2c;color:#fff;transform:scale(0)";
      ui.body.append(b); return b;
    });
    var mode = "closed";
    return { play: function () { mode = "open"; bubbles.forEach(function (b) { b.style.transform = "scale(1)"; }); }, reset: function () { mode = "closed"; bubbles.forEach(function (b) { b.style.transform = "scale(0)"; }); }, read: function () { return mode; } };
  });
  add("rb-folder", "文件夹", "open", "folder-open", function (ui) {
    var folder = H.el("div", null, "稿件");
    folder.style.cssText = "margin:16px;width:120px;padding:16px 8px 8px;background:#e7c48a";
    ui.body.append(folder);
    var mode = "shut";
    return { play: function () { mode = "open"; folder.textContent = "稿件 · 3"; folder.style.paddingTop = "28px"; }, reset: function () { mode = "shut"; folder.textContent = "稿件"; folder.style.paddingTop = "16px"; }, read: function () { return mode; } };
  });
  add("cult-toolbar-expandable", "工具栏展开", "more", "toolbar-expand", function (ui) {
    var bar = H.el("div");
    bar.style.cssText = "margin:12px;display:flex;gap:6px";
    var extra = H.el("button", null, "导出"); extra.type = "button"; extra.hidden = true;
    bar.append(H.el("span", null, "编辑"), extra); ui.body.append(bar);
    var mode = "short";
    return { play: function () { mode = "more"; extra.hidden = false; }, reset: function () { mode = "short"; extra.hidden = true; }, read: function () { return mode; } };
  });
  add("kokonut-marking-menu", "径向菜单", "open", "radial-menu", function (ui) {
    var wrap = H.el("div"); wrap.style.cssText = "position:relative;height:140px;margin:8px";
    var center = H.el("button", null, "按"); center.type = "button";
    center.style.cssText = "position:absolute;left:70px;top:50px";
    var item = H.el("span", null, "复制");
    item.style.cssText = "position:absolute;left:70px;top:50px;opacity:0";
    wrap.append(center, item); ui.body.append(wrap);
    var mode = "closed";
    return { play: function () { mode = "open"; item.style.opacity = "1"; item.style.top = "12px"; }, reset: function () { mode = "closed"; item.style.opacity = "0"; item.style.top = "50px"; }, read: function () { return mode; } };
  });
  add("kokonut-status-island", "状态岛", "expanded", "island-grow", function (ui) {
    var island = H.el("div", null, "墨蓝");
    island.style.cssText = "margin:16px auto;width:72px;padding:6px;text-align:center;background:#241c16;color:#f6f1e8;border-radius:16px";
    ui.body.append(island);
    var mode = "compact";
    return { play: function () { mode = "expanded"; island.style.width = "160px"; island.textContent = "已同步 3 条"; }, reset: function () { mode = "compact"; island.style.width = "72px"; island.textContent = "墨蓝"; }, read: function () { return mode; } };
  });
  add("ease-reverse-clip-menu", "裁切菜单", "open", "clip-menu", function (ui) {
    var menu = H.el("div", null, "书店 / 活动 / 讲座");
    menu.style.cssText = "margin:12px;padding:12px;background:#fffaf4;clip-path:inset(0 0 100% 0)";
    ui.body.append(menu);
    var mode = "shut";
    return { play: function () { mode = "open"; menu.style.clipPath = "inset(0 0 0 0)"; }, reset: function () { mode = "shut"; menu.style.clipPath = "inset(0 0 100% 0)"; }, read: function () { return mode; } };
  });
  add("context-aware-fixed", "标识让位", "invert", "logo-contrast", function (ui) {
    var hero = H.el("div");
    hero.style.cssText = "margin:12px;height:80px;background:#241c16;color:#f6f1e8;display:grid;place-items:center";
    var logo = H.el("b", null, "原野");
    hero.append(logo); ui.body.append(hero);
    var mode = "light";
    return { play: function () { mode = "invert"; logo.style.color = "#f6f1e8"; hero.style.background = "#241c16"; }, reset: function () { mode = "light"; hero.style.background = "#f3eee6"; logo.style.color = "#241c16"; }, read: function () { return mode; } };
  });
  add("kokonut-morph-popover", "按钮变表单", "form", "button-to-form", function (ui) {
    var box = H.el("div");
    box.style.cssText = "margin:12px;padding:8px;background:#fffaf4;width:72px";
    var label = H.el("div", null, "订阅");
    box.append(label); ui.body.append(box);
    var mode = "button";
    return { play: function () { mode = "form"; box.style.width = "180px"; label.textContent = "邮箱已留下"; }, reset: function () { mode = "button"; box.style.width = "72px"; label.textContent = "订阅"; }, read: function () { return mode; } };
  });
  add("aceternity-notch", "槽口变形", "wide", "notch-morph", function (ui) {
    var notch = H.el("div", null, "·");
    notch.style.cssText = "margin:12px auto;width:48px;height:18px;background:#241c16;color:#f6f1e8;border-radius:10px;text-align:center";
    ui.body.append(notch);
    var mode = "dot";
    return { play: function () { mode = "wide"; notch.style.width = "140px"; notch.textContent = "正在播放"; }, reset: function () { mode = "dot"; notch.style.width = "48px"; notch.textContent = "·"; }, read: function () { return mode; } };
  });
  add("cult-dynamic-island", "动态岛", "alert", "island-state", function (ui) {
    var island = H.el("div", null, "静音");
    island.style.cssText = "margin:16px auto;padding:6px 12px;background:#241c16;color:#f6f1e8;border-radius:20px;width:64px;text-align:center";
    ui.body.append(island);
    var mode = "idle";
    return { play: function () { mode = "alert"; island.style.width = "150px"; island.textContent = "车已到站"; }, reset: function () { mode = "idle"; island.style.width = "64px"; island.textContent = "静音"; }, read: function () { return mode; } };
  });
  add("rb-card-nav", "导航弹卡", "cards", "nav-to-cards", function (ui) {
    var nav = H.el("div");
    nav.style.cssText = "margin:12px;display:flex;gap:6px";
    ["路线", "包车"].forEach(function (text) {
      var c = H.el("div", null, text);
      c.style.cssText = "padding:8px;background:#fffaf4;border:1px solid #e6d9c8;transform:scaleY(0)";
      nav.append(c);
    });
    ui.body.append(nav);
    var mode = "bar";
    return { play: function () { mode = "cards"; Array.from(nav.children).forEach(function (c) { c.style.transform = "scaleY(1)"; }); }, reset: function () { mode = "bar"; Array.from(nav.children).forEach(function (c) { c.style.transform = "scaleY(0)"; }); }, read: function () { return mode; } };
  });
  add("rb-flowing-menu", "液态菜单", "flow", "row-band", function (ui) {
    var rows = ["午餐", "晚市"].map(function (text) {
      var row = H.el("div", null, text);
      row.style.cssText = "margin:4px 12px;padding:8px;background:#fffaf4";
      ui.body.append(row); return row;
    });
    var mode = "plain";
    return { play: function () { mode = "flow"; rows[1].style.background = "#f0d0c8"; }, reset: function () { mode = "plain"; rows[1].style.background = "#fffaf4"; }, read: function () { return mode; } };
  });
  add("rb-magic-bento", "边缘光格", "glow", "edge-glow", function (ui) {
    var cell = H.el("div", null, "离线先写");
    cell.style.cssText = "margin:16px;padding:16px;background:#fffaf4;border:1px solid #e6d9c8";
    ui.body.append(cell);
    var mode = "flat";
    return { play: function () { mode = "glow"; cell.style.boxShadow = "inset 0 0 0 2px #e7c48a"; }, reset: function () { mode = "flat"; cell.style.boxShadow = "none"; }, read: function () { return mode; } };
  });
  add("aceternity-focus-cards", "其余失焦", "focus", "siblings-dim", function (ui) {
    var cards = ["甲", "乙"].map(function (text) {
      var c = H.el("div", null, text);
      c.style.cssText = "flex:1;padding:16px;background:#fffaf4";
      return c;
    });
    var row = H.el("div"); row.style.cssText = "margin:12px;display:flex;gap:8px";
    cards.forEach(function (c) { row.append(c); }); ui.body.append(row);
    var mode = "all";
    return { play: function () { mode = "focus"; cards[0].style.opacity = "1"; cards[1].style.opacity = ".35"; }, reset: function () { mode = "all"; cards.forEach(function (c) { c.style.opacity = "1"; }); }, read: function () { return mode; } };
  });
  add("animate-pinned-list", "置顶滑动", "pinned", "pin-item", function (ui) {
    var pin = H.el("div", null, "普通");
    var rest = H.el("div", null, "置顶区");
    pin.style.cssText = rest.style.cssText = "margin:6px 12px;padding:8px;background:#fffaf4";
    ui.body.append(rest, pin);
    var mode = "normal";
    return { play: function () { mode = "pinned"; rest.before(pin); pin.textContent = "已置顶"; pin.style.background = "#f0d0c8"; }, reset: function () { mode = "normal"; rest.after(pin); pin.textContent = "普通"; pin.style.background = "#fffaf4"; }, read: function () { return mode; } };
  });
})();
