(function () {
  var S = window.SCENES;
  var H = window.Host;

  S["number-ticker"] = function (root) {
    var ui = H.shell(root, { title: "云帆本月包车" });
    var num = H.el("p", null, "0");
    num.style.cssText = "margin:24px;font-variant-numeric:tabular-nums;font-size:2.4rem";
    ui.body.append(num);
    var value = 0;
    function play() {
      value = 0;
      var target = 36;
      if (H.reduced()) { value = target; num.textContent = String(value) + " / 50"; return; }
      var timer = setInterval(function () {
        value += 2;
        if (value >= target) { value = target; clearInterval(timer); }
        num.textContent = String(value) + " / 50";
      }, 40);
    }
    ui.reset.addEventListener("click", play);
    H.expose("number-ticker", "count-up", { trigger: play, read: function () { return value; } });
    play();
  };

  S["animated-beam"] = function (root) {
    var ui = H.shell(root, { title: "笔记流向" });
    ui.body.innerHTML = '<svg viewBox="0 0 280 80" style="margin:16px;width:280px"><circle cx="30" cy="40" r="12" fill="#241c16"/><circle cx="250" cy="40" r="12" fill="#8a3b2c"/><path id="beam" d="M42 40 H238" stroke="#e7c48a" stroke-width="4" stroke-dasharray="20 180"/></svg>';
    var beam = ui.body.querySelector("#beam");
    var offset = 0;
    function play() {
      offset += 30;
      beam.style.strokeDashoffset = H.reduced() ? "0" : String(-offset);
    }
    if (!H.reduced()) setInterval(play, 200);
    ui.reset.addEventListener("click", play);
    H.expose("animated-beam", "dash-along-link", { trigger: play, read: function () { return offset; } });
  };

  S["world-map"] = function (root) {
    var ui = H.shell(root, { title: "班线" });
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 240 120");
    svg.style.cssText = "margin:16px;width:240px;background:#e7eef2";
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M30 80 C 80 20, 140 20, 200 60");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#9f2d20");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-dasharray", "220");
    path.setAttribute("stroke-dashoffset", "220");
    svg.appendChild(path);
    ui.body.append(svg);
    var drawn = 0;
    function play() {
      drawn = 0;
      path.style.transition = "none";
      path.setAttribute("stroke-dashoffset", "220");
      requestAnimationFrame(function () {
        path.style.transition = H.reduced() ? "none" : "stroke-dashoffset .8s linear";
        path.setAttribute("stroke-dashoffset", "0");
        drawn = 1;
      });
    }
    ui.reset.addEventListener("click", play);
    H.expose("world-map", "route-line-draw", { trigger: play, read: function () { return drawn; } });
    play();
  };

  function lineChart(id, title, d) {
    S[id] = function (root) {
      var ui = H.shell(root, { title: title });
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 240 100");
      svg.style.cssText = "margin:16px;width:240px;background:#fffaf4";
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#8a3b2c");
      path.setAttribute("stroke-width", "3");
      path.setAttribute("stroke-dasharray", "300");
      path.setAttribute("stroke-dashoffset", "300");
      svg.appendChild(path);
      ui.body.append(svg);
      var drawn = 0;
      function play() {
        drawn = 1;
        path.style.transition = H.reduced() ? "none" : "stroke-dashoffset .7s ease";
        path.setAttribute("stroke-dashoffset", "0");
      }
      ui.reset.addEventListener("click", function () {
        drawn = 0;
        path.style.transition = "none";
        path.setAttribute("stroke-dashoffset", "300");
        setTimeout(play, 30);
      });
      H.expose(id, "stroke-draw", { trigger: play, read: function () { return drawn; } });
      play();
    };
  }
  lineChart("nivo-line", "青浦客流", "M10 80 L50 60 L90 70 L130 30 L170 40 L210 20");
  lineChart("nivo-stream", "三班叠流", "M10 70 C 40 40, 70 90, 100 50 S 160 30, 220 55");

  S["nivo-pie"] = function (root) {
    var ui = H.shell(root, { title: "班线占比" });
    ui.body.innerHTML = '<svg viewBox="0 0 80 80" width="120" style="margin:16px"><circle cx="40" cy="40" r="24" fill="none" stroke="#e6d9c8" stroke-width="12"/><circle id="arc" cx="40" cy="40" r="24" fill="none" stroke="#9f2d20" stroke-width="12" stroke-dasharray="0 200" transform="rotate(-90 40 40)"/></svg>';
    var arc = ui.body.querySelector("#arc");
    var shown = 0;
    function play() {
      shown = 1;
      arc.style.transition = H.reduced() ? "none" : "stroke-dasharray .6s ease";
      arc.setAttribute("stroke-dasharray", "90 200");
    }
    ui.reset.addEventListener("click", function () { shown = 0; arc.setAttribute("stroke-dasharray", "0 200"); setTimeout(play, 30); });
    H.expose("nivo-pie", "pie-sector-grow", { trigger: play, read: function () { return shown; } });
    play();
  };

  S["nivo-choropleth"] = function (root) {
    var ui = H.shell(root, { title: "分区着色" });
    var grid = H.el("div");
    grid.style.cssText = "margin:16px;display:grid;grid-template-columns:repeat(4,36px);gap:4px";
    var cells = [];
    for (var i = 0; i < 8; i++) {
      var c = H.el("div");
      c.style.cssText = "height:36px;background:#efe6d8";
      grid.append(c);
      cells.push(c);
    }
    ui.body.append(grid);
    var on = 0;
    function play() {
      on = 1;
      cells.forEach(function (c, i) {
        c.style.transition = H.reduced() ? "none" : "background .4s ease";
        c.style.transitionDelay = (i * 50) + "ms";
        c.style.background = ["#e7c48a", "#c46a4a", "#7ea0b8", "#23483a"][i % 4];
      });
    }
    ui.reset.addEventListener("click", function () { on = 0; cells.forEach(function (c) { c.style.background = "#efe6d8"; }); });
    H.expose("nivo-choropleth", "regions-fade-in", { trigger: play, read: function () { return on; } });
    play();
  };

  S["nivo-sankey"] = function (root) {
    var ui = H.shell(root, { title: "转化" });
    var row = H.el("div");
    row.style.cssText = "margin:16px;display:flex;gap:24px;align-items:center";
    ["到站 40", "下单 22", "完成 16"].forEach(function (text) { row.append(H.el("div", null, text)); });
    ui.body.append(row);
    var step = 0;
    function play() {
      step = 0;
      Array.from(row.children).forEach(function (n, i) { n.style.opacity = "0.25"; });
      function next() {
        row.children[step].style.opacity = "1";
        step += 1;
        if (step < 3 && !H.reduced()) setTimeout(next, 250);
        if (H.reduced()) Array.from(row.children).forEach(function (n) { n.style.opacity = "1"; });
      }
      next();
    }
    ui.reset.addEventListener("click", play);
    H.expose("nivo-sankey", "flow-steps-appear", { trigger: play, read: function () { return step; } });
    play();
  };

  S["nivo-sunburst"] = function (root) {
    var ui = H.shell(root, { title: "层级" });
    var label = H.el("p", null, "全部行程");
    label.style.cssText = "margin:16px;font-family:serif;font-size:1.3rem";
    var btn = H.el("button", null, "进入通勤");
    btn.type = "button";
    ui.body.append(label, btn);
    var depth = 0;
    btn.addEventListener("click", function () { depth = depth ? 0 : 1; label.textContent = depth ? "通勤 · 36 趟" : "全部行程"; btn.textContent = depth ? "返回全部" : "进入通勤"; });
    ui.reset.addEventListener("click", function () { depth = 0; label.textContent = "全部行程"; });
    H.expose("nivo-sunburst", "drill-level", { trigger: function () { btn.click(); }, read: function () { return depth; } });
  };

  S["magic-dotted-map"] = function (root) {
    var ui = H.shell(root, { title: "点阵地图" });
    var canvas = document.createElement("canvas");
    canvas.width = 220;
    canvas.height = 100;
    canvas.style.margin = "16px";
    ui.body.append(canvas);
    var ctx = canvas.getContext("2d");
    var shown = 0;
    function play() {
      shown = 1;
      ctx.clearRect(0, 0, 220, 100);
      ctx.fillStyle = "#241c16";
      for (var y = 8; y < 100; y += 10) for (var x = 8; x < 220; x += 10) ctx.fillRect(x, y, 2, 2);
      ctx.fillStyle = "#9f2d20";
      ctx.beginPath();
      ctx.arc(70, 40, 4, 0, Math.PI * 2);
      ctx.arc(150, 60, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ui.reset.addEventListener("click", play);
    H.expose("magic-dotted-map", "dot-grid-and-pins", { trigger: play, read: function () { return shown; } });
    play();
  };

  S["kokonut-liquid-gauge"] = function (root) {
    var ui = H.shell(root, { title: "液面" });
    var glass = H.el("div");
    glass.style.cssText = "margin:16px;width:80px;height:120px;border:2px solid #241c16;position:relative;overflow:hidden;background:#fffaf4";
    var liquid = H.el("div");
    liquid.style.cssText = "position:absolute;left:0;right:0;bottom:0;height:10%;background:#7ea0b8";
    glass.append(liquid);
    ui.body.append(glass);
    var level = 10;
    function play() {
      level = 70;
      liquid.style.transition = H.reduced() ? "none" : "height .6s ease";
      liquid.style.height = "70%";
    }
    ui.reset.addEventListener("click", function () { level = 10; liquid.style.height = "10%"; });
    H.expose("kokonut-liquid-gauge", "liquid-height", { trigger: play, read: function () { return level; } });
  };

  S["kokonut-spending-ring"] = function (root) {
    var ui = H.shell(root, { title: "分类环" });
    ui.body.innerHTML = '<svg viewBox="0 0 80 80" width="120" style="margin:16px"><circle cx="40" cy="40" r="26" fill="none" stroke="#e6d9c8" stroke-width="8"/><circle id="a" cx="40" cy="40" r="26" fill="none" stroke="#9f2d20" stroke-width="8" stroke-dasharray="0 200" transform="rotate(-90 40 40)"/><circle id="b" cx="40" cy="40" r="26" fill="none" stroke="#e7c48a" stroke-width="8" stroke-dasharray="0 200" stroke-dashoffset="-70" transform="rotate(-90 40 40)"/></svg><p style="margin:0 16px">餐饮 40 · 通勤 25</p>';
    var shown = 0;
    function play() {
      shown = 1;
      ui.body.querySelector("#a").setAttribute("stroke-dasharray", "70 200");
      ui.body.querySelector("#b").setAttribute("stroke-dasharray", "40 200");
    }
    ui.reset.addEventListener("click", function () { shown = 0; ui.body.querySelector("#a").setAttribute("stroke-dasharray", "0 200"); ui.body.querySelector("#b").setAttribute("stroke-dasharray", "0 200"); });
    H.expose("kokonut-spending-ring", "two-arc-share", { trigger: play, read: function () { return shown; } });
    play();
  };

  S["magic-icon-cloud"] = function (root) {
    var ui = H.shell(root, { title: "标签云" });
    var tags = ["茶", "诗", "船", "夜"];
    var wrap = H.el("div");
    wrap.style.cssText = "position:relative;height:160px;margin:12px";
    var nodes = tags.map(function (text, i) {
      var n = H.el("span", null, text);
      n.style.cssText = "position:absolute;left:50%;top:50%;font-family:serif;font-size:1.2rem";
      wrap.append(n);
      return n;
    });
    ui.body.append(wrap);
    var angle = 0;
    function paint() {
      nodes.forEach(function (n, i) {
        var a = angle + i * Math.PI / 2;
        n.style.transform = "translate(" + (Math.cos(a) * 50) + "px," + (Math.sin(a) * 36) + "px)";
      });
    }
    function play() { angle += H.reduced() ? 0 : 0.4; paint(); }
    ui.reset.addEventListener("click", function () { angle = 0; paint(); });
    H.expose("magic-icon-cloud", "orbit-labels", { trigger: play, read: function () { return Math.round(angle * 10); } });
    paint();
  };

  S["magic-orbiting-circles"] = function (root) {
    var ui = H.shell(root, { title: "轨道" });
    var wrap = H.el("div");
    wrap.style.cssText = "position:relative;height:160px;margin:12px";
    var core = H.el("div", null, "店");
    core.style.cssText = "position:absolute;left:50%;top:50%;width:36px;height:36px;margin:-18px 0 0 -18px;border-radius:50%;background:#241c16;color:#f6f1e8;display:grid;place-items:center";
    var moon = H.el("div");
    moon.style.cssText = "position:absolute;width:14px;height:14px;border-radius:50%;background:#e7c48a";
    wrap.append(core, moon);
    ui.body.append(wrap);
    var a = 0;
    function paint() {
      moon.style.left = (80 + Math.cos(a) * 50) + "px";
      moon.style.top = (70 + Math.sin(a) * 40) + "px";
    }
    function play() { a += 0.8; paint(); }
    if (!H.reduced()) setInterval(play, 400);
    ui.reset.addEventListener("click", function () { a = 0; paint(); });
    H.expose("magic-orbiting-circles", "orbit-icon", { trigger: play, read: function () { return Math.round(a * 10); } });
    paint();
  };

  S["magic-circular-progress"] = function (root) {
    var ui = H.shell(root, { title: "完成度" });
    var label = H.el("p", null, "0%");
    label.style.cssText = "margin:16px;font-size:2rem";
    ui.body.append(label);
    var n = 0;
    function play() {
      n = 0;
      var timer = setInterval(function () {
        n += 10;
        label.textContent = n + "%";
        if (n >= 70) clearInterval(timer);
      }, H.reduced() ? 0 : 50);
    }
    ui.reset.addEventListener("click", play);
    H.expose("magic-circular-progress", "percent-count", { trigger: play, read: function () { return n; } });
    play();
  };

  S["nivo-radar"] = function (root) {
    var ui = H.shell(root, { title: "课程评分" });
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 120 120");
    svg.style.cssText = "margin:12px;width:140px";
    var poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    poly.setAttribute("points", "60,60 60,60 60,60 60,60");
    poly.setAttribute("fill", "rgba(159,45,32,.35)");
    poly.setAttribute("stroke", "#9f2d20");
    svg.appendChild(poly);
    ui.body.append(svg);
    var grown = 0;
    function play() {
      grown = 1;
      poly.setAttribute("points", H.reduced() ? "60,20 100,60 60,95 25,60" : "60,20 100,60 60,95 25,60");
    }
    ui.reset.addEventListener("click", function () { grown = 0; poly.setAttribute("points", "60,60 60,60 60,60 60,60"); setTimeout(play, 30); });
    H.expose("nivo-radar", "polygon-grows", { trigger: play, read: function () { return grown; } });
    play();
  };

  S["nivo-calendar"] = function (root) {
    var ui = H.shell(root, { title: "投稿日历" });
    var grid = H.el("div");
    grid.style.cssText = "margin:16px;display:grid;grid-template-columns:repeat(7,16px);gap:3px";
    var cells = [];
    for (var i = 0; i < 28; i++) {
      var c = H.el("i");
      c.style.cssText = "display:block;height:16px;background:#efe6d8";
      grid.append(c);
      cells.push(c);
    }
    ui.body.append(grid);
    var on = 0;
    function play() {
      on = 1;
      cells.forEach(function (c, i) {
        if (i % 3 === 0) c.style.background = "#23483a";
        else if (i % 3 === 1) c.style.background = "#8a3b2c";
      });
    }
    ui.reset.addEventListener("click", function () { on = 0; cells.forEach(function (c) { c.style.background = "#efe6d8"; }); });
    H.expose("nivo-calendar", "day-cells-color", { trigger: play, read: function () { return on; } });
    play();
  };

  S["nivo-treemap"] = function (root) {
    var ui = H.shell(root, { title: "行程构成" });
    var map = H.el("div");
    map.style.cssText = "margin:16px;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;gap:4px;width:200px;height:120px";
    [["通勤", "#7ea0b8"], ["包车", "#c46a4a"], ["拼车", "#e7c48a"]].forEach(function (item, i) {
      var cell = H.el("div", null, item[0]);
      cell.style.cssText = "background:" + item[1] + ";padding:6px;font-size:12px";
      if (i === 0) cell.style.gridRow = "1 / span 2";
      map.append(cell);
    });
    ui.body.append(map);
    var drilled = 0;
    map.firstChild.addEventListener("click", function () { drilled = 1; map.firstChild.textContent = "通勤 36 趟"; });
    ui.reset.addEventListener("click", function () { drilled = 0; map.firstChild.textContent = "通勤"; });
    H.expose("nivo-treemap", "area-drill", { trigger: function () { map.firstChild.click(); }, read: function () { return drilled; } });
  };
})();
