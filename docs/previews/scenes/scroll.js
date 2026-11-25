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
  add("savor", "章节气泡", "shown", "chapter-bubble", function (ui) {
    var card = H.el("div", null, "第一章 · 渡口");
    card.style.cssText = "margin:16px;padding:16px;background:#fffaf4;border-radius:16px;opacity:.2";
    ui.body.append(card);
    var mode = "hidden";
    return { play: function () { mode = "shown"; card.style.opacity = "1"; }, reset: function () { mode = "hidden"; card.style.opacity = ".2"; }, read: function () { return mode; } };
  });
  add("artists-247", "曲目叙事", "track2", "track-on-scroll", function (ui) {
    var label = H.el("p", null, "01 夜航");
    label.style.cssText = "margin:20px;font-family:serif;font-size:1.4rem";
    ui.body.append(label);
    var mode = "track1";
    return { play: function () { mode = "track2"; label.textContent = "02 灯塔"; }, reset: function () { mode = "track1"; label.textContent = "01 夜航"; }, read: function () { return mode; } };
  });
  add("container-scroll", "钉住缩放", "zoomed", "pinned-scale", function (ui) {
    var box = H.el("div", null, "容器");
    box.style.cssText = "margin:20px;height:100px;background:#e7c48a;display:grid;place-items:center;transform:scale(.7)";
    ui.body.append(box);
    var mode = "small";
    return { play: function () { mode = "zoomed"; box.style.transform = "scale(1)"; }, reset: function () { mode = "small"; box.style.transform = "scale(.7)"; }, read: function () { return mode; } };
  });
  add("hero-parallax", "多层视差", "shifted", "layer-parallax", function (ui) {
    var back = H.el("div"); var front = H.el("div", null, "前景船");
    back.style.cssText = "position:absolute;inset:20px 40px;background:#7ea0b8";
    front.style.cssText = "position:absolute;left:30px;top:70px;background:#fffaf4;padding:8px";
    var wrap = H.el("div"); wrap.style.cssText = "position:relative;height:180px";
    wrap.append(back, front); ui.body.append(wrap);
    var mode = "aligned";
    return { play: function () { mode = "shifted"; back.style.transform = "translateY(12px)"; front.style.transform = "translateY(-16px)"; }, reset: function () { mode = "aligned"; back.style.transform = front.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("parallax-grid-scroll", "多列视差", "offset", "column-parallax", function (ui) {
    var cols = [0, 1, 2].map(function (i) {
      var c = H.el("div", null, "列" + (i + 1));
      c.style.cssText = "background:#fffaf4;border:1px solid #e6d9c8;min-height:80px;padding:8px";
      return c;
    });
    var row = H.el("div"); row.style.cssText = "margin:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px";
    cols.forEach(function (c) { row.append(c); }); ui.body.append(row);
    var mode = "flat";
    return { play: function () { mode = "offset"; cols.forEach(function (c, i) { c.style.transform = "translateY(" + (i - 1) * 12 + "px)"; }); }, reset: function () { mode = "flat"; cols.forEach(function (c) { c.style.transform = "none"; }); }, read: function () { return mode; } };
  });
  add("rb-scroll-expand", "滚动扩开", "wide", "media-expands", function (ui) {
    var media = H.el("div", null, "窗景");
    media.style.cssText = "margin:20px;height:60px;width:80px;background:#c46a4a;color:#fff;display:grid;place-items:center";
    ui.body.append(media);
    var mode = "tight";
    return { play: function () { mode = "wide"; media.style.width = "200px"; media.style.height = "110px"; }, reset: function () { mode = "tight"; media.style.width = "80px"; media.style.height = "60px"; }, read: function () { return mode; } };
  });
  add("magic-scroll-progress", "阅读进度", "mid", "progress-bar", function (ui) {
    var bar = H.el("div");
    bar.style.cssText = "margin:20px;height:8px;background:#e6d9c8";
    var fill = H.el("div");
    fill.style.cssText = "height:100%;width:0;background:#9f2d20";
    bar.append(fill); ui.body.append(bar);
    var mode = "start";
    return { play: function () { mode = "mid"; fill.style.width = "55%"; }, reset: function () { mode = "start"; fill.style.width = "0"; }, read: function () { return mode; } };
  });
  add("fancy-sticky-footer", "揭开页脚", "revealed", "footer-reveal", function (ui) {
    var page = H.el("div", null, "正文");
    page.style.cssText = "margin:12px;height:80px;background:#fffaf4;position:relative;z-index:1";
    var foot = H.el("div", null, "页脚 · 南窗");
    foot.style.cssText = "margin:-20px 12px 12px;padding:12px;background:#241c16;color:#f6f1e8;transform:translateY(24px)";
    ui.body.append(page, foot);
    var mode = "hidden";
    return { play: function () { mode = "revealed"; foot.style.transform = "none"; }, reset: function () { mode = "hidden"; foot.style.transform = "translateY(24px)"; }, read: function () { return mode; } };
  });
  add("infinite-layers-grid", "平铺视差", "drift", "tiled-drift", function (ui) {
    var layer = H.el("div");
    layer.style.cssText = "margin:12px;height:100px;background-image:linear-gradient(#e6d9c8 1px,transparent 1px),linear-gradient(90deg,#e6d9c8 1px,transparent 1px);background-size:20px 20px";
    ui.body.append(layer);
    var mode = "still";
    return { play: function () { mode = "drift"; layer.style.backgroundPosition = "12px 8px"; }, reset: function () { mode = "still"; layer.style.backgroundPosition = "0 0"; }, read: function () { return mode; } };
  });
  add("circle-text-scroll", "圆环字", "turned", "ring-text-turn", function (ui) {
    var ring = H.el("div", null, "青浦 · 十年");
    ring.style.cssText = "margin:16px auto;width:120px;height:120px;border-radius:50%;display:grid;place-items:center;border:1px solid #241c16;font-family:serif";
    ui.body.append(ring);
    var mode = "front";
    return { play: function () { mode = "turned"; ring.style.transform = "rotateX(50deg) rotateZ(30deg)"; }, reset: function () { mode = "front"; ring.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("aceternity-timeline", "时间线", "two", "timeline-nodes", function (ui) {
    var items = ["2016 铁索", "2024 新桥"].map(function (text, i) {
      var row = H.el("div", null, text);
      row.style.cssText = "margin:6px 16px;padding-left:12px;border-left:3px solid #e6d9c8;opacity:" + (i ? ".3" : "1");
      ui.body.append(row);
      return row;
    });
    var mode = "one";
    return { play: function () { mode = "two"; items[1].style.opacity = "1"; items[1].style.borderColor = "#9f2d20"; }, reset: function () { mode = "one"; items[1].style.opacity = ".3"; items[1].style.borderColor = "#e6d9c8"; }, read: function () { return mode; } };
  });
  add("lamp-effect", "灯光章节", "lit", "lamp-reveal", function (ui) {
    var chapter = H.el("div", null, "梁下");
    chapter.style.cssText = "margin:20px;padding:20px;background:#1b1714;color:#3a342c;text-align:center;font-family:serif;font-size:1.6rem";
    ui.body.append(chapter);
    var mode = "dark";
    return { play: function () { mode = "lit"; chapter.style.color = "#f6f1e8"; chapter.style.textShadow = "0 0 18px #e7c48a"; }, reset: function () { mode = "dark"; chapter.style.color = "#3a342c"; chapter.style.textShadow = "none"; }, read: function () { return mode; } };
  });
  add("on-scroll-layout-formations", "拼合版式", "formed", "pieces-assemble", function (ui) {
    var pieces = ["江", "边", "照"].map(function (text, i) {
      var p = H.el("span", null, text);
      p.style.cssText = "display:inline-block;margin:8px;font-family:serif;font-size:1.6rem;transform:translate(" + (i * 20 - 20) + "px,16px)";
      return p;
    });
    var row = H.el("div"); row.style.margin = "16px";
    pieces.forEach(function (p) { row.append(p); }); ui.body.append(row);
    var mode = "scattered";
    return { play: function () { mode = "formed"; pieces.forEach(function (p) { p.style.transform = "none"; }); }, reset: function () { mode = "scattered"; pieces.forEach(function (p, i) { p.style.transform = "translate(" + (i * 20 - 20) + "px,16px)"; }); }, read: function () { return mode; } };
  });
  add("staggered-3d-grid", "柱面网格", "tilted", "perspective-grid", function (ui) {
    var grid = H.el("div");
    grid.style.cssText = "margin:16px;display:grid;grid-template-columns:1fr 1fr;gap:6px;transform:none";
    for (var i = 0; i < 4; i++) { var c = H.el("div", null, "房" + (i + 1)); c.style.cssText = "background:#fffaf4;padding:12px"; grid.append(c); }
    ui.body.append(grid);
    var mode = "flat";
    return { play: function () { mode = "tilted"; grid.style.transform = "perspective(400px) rotateY(-18deg)"; }, reset: function () { mode = "flat"; grid.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("one-element-scroll", "单元素锚点", "worn", "one-element-steps", function (ui) {
    var watch = H.el("div", null, "包装");
    watch.style.cssText = "margin:20px;width:100px;height:70px;background:#e7c48a;display:grid;place-items:center";
    ui.body.append(watch);
    var mode = "box";
    return { play: function () { mode = "worn"; watch.textContent = "戴上"; watch.style.borderRadius = "40px"; }, reset: function () { mode = "box"; watch.textContent = "包装"; watch.style.borderRadius = "0"; }, read: function () { return mode; } };
  });
  add("rb-drift-wall", "透视墙", "passed", "wall-tiles-drift", function (ui) {
    var wall = H.el("div");
    wall.style.cssText = "margin:16px;height:90px;overflow:hidden;background:#1b1714;position:relative";
    var tile = H.el("div", null, "窗");
    tile.style.cssText = "position:absolute;left:-40px;top:24px;width:48px;height:36px;background:#e7c48a";
    wall.append(tile); ui.body.append(wall);
    var mode = "waiting";
    return { play: function () { mode = "passed"; tile.style.left = "180px"; }, reset: function () { mode = "waiting"; tile.style.left = "-40px"; }, read: function () { return mode; } };
  });
})();
