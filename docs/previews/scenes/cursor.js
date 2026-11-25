(function () {
  var S = window.SCENES;
  var H = window.Host;

  function field(body) {
    var box = H.el("div");
    box.tabIndex = 0;
    box.style.cssText = "margin:12px;height:220px;position:relative;background:#f3eee6;overflow:hidden";
    var link = H.el("a", null, "南窗书局 · 预约");
    link.href = "#seat";
    link.style.cssText = "position:absolute;left:16px;top:16px";
    box.append(link);
    body.append(box);
    return box;
  }

  function pointer(box, onMove) {
    var x = 80, y = 80;
    function set(nx, ny) { x = nx; y = ny; onMove(x, y); }
    box.addEventListener("pointermove", function (event) {
      var r = box.getBoundingClientRect();
      set(event.clientX - r.left, event.clientY - r.top);
    });
    box.addEventListener("keydown", function (event) {
      var step = 16;
      if (event.key === "ArrowLeft") set(x - step, y);
      else if (event.key === "ArrowRight") set(x + step, y);
      else if (event.key === "ArrowUp") set(x, y - step);
      else if (event.key === "ArrowDown") set(x, y + step);
      else return;
      event.preventDefault();
    });
    return { set: set, get: function () { return { x: x, y: y }; } };
  }

  S["rb-blob-cursor"] = function (root) {
    var ui = H.shell(root, { title: "软体光标" });
    var box = field(ui.body);
    var blob = H.el("div");
    blob.style.cssText = "position:absolute;width:42px;height:42px;margin:-21px 0 0 -21px;border-radius:50%;background:rgba(159,45,32,.45);pointer-events:none";
    box.append(blob);
    var px = 40, py = 40;
    var ptr = pointer(box, function (x, y) { ptr.target = { x: x, y: y }; });
    ptr.target = { x: 40, y: 40 };
    function tick() {
      var k = H.reduced() ? 1 : 0.15;
      px += (ptr.target.x - px) * k;
      py += (ptr.target.y - py) * k;
      blob.style.left = px + "px";
      blob.style.top = py + "px";
      if (!H.reduced()) requestAnimationFrame(tick);
    }
    tick();
    var aim = "rest";
    function home() { aim = "rest"; px = 40; py = 40; ptr.set(40, 40); blob.style.left = "40px"; blob.style.top = "40px"; }
    ui.reset.addEventListener("click", home);
    H.expose("rb-blob-cursor", "lagging-blob", { trigger: function () { aim = "away"; ptr.set(160, 120); }, reset: home, expectAfter: "away", page: ui.page, read: function () { return aim; } });
  };

  S["rb-splash-cursor"] = function (root) {
    var ui = H.shell(root, { title: "墨水台" });
    var note = H.el("p", null, "示例数据 · 候鸟前台。墨在格子上平流、扩散，再把散度投掉，光标是搅动它的力。");
    note.style.cssText = "margin:8px 12px 0;font-size:12px;color:#7a6a58";
    var canvas = document.createElement("canvas");
    canvas.width = 192;
    canvas.height = 108;
    canvas.tabIndex = 0;
    canvas.style.cssText = "display:block;width:calc(100% - 16px);margin:8px;background:#1b1714";
    ui.body.append(note, canvas);
    var ctx = canvas.getContext("2d");
    var N = 48;
    var dens = new Float32Array(N * N);
    var vx = new Float32Array(N * N);
    var vy = new Float32Array(N * N);
    var tmp = new Float32Array(N * N);
    var tmpx = new Float32Array(N * N);
    var tmpy = new Float32Array(N * N);
    var div = new Float32Array(N * N);
    var pressure = new Float32Array(N * N);
    function id(x, y) { return y * N + x; }
    function sample(src, x, y) {
      if (x < 0.5) x = 0.5;
      if (y < 0.5) y = 0.5;
      if (x > N - 1.5) x = N - 1.5;
      if (y > N - 1.5) y = N - 1.5;
      var x0 = Math.floor(x);
      var y0 = Math.floor(y);
      var tx = x - x0;
      var ty = y - y0;
      var i = id(x0, y0);
      return src[i] * (1 - tx) * (1 - ty) + src[i + 1] * tx * (1 - ty) + src[i + N] * (1 - tx) * ty + src[i + N + 1] * tx * ty;
    }
    function advect(src, dest) {
      for (var y = 1; y < N - 1; y++) for (var x = 1; x < N - 1; x++) {
        var i = id(x, y);
        dest[i] = sample(src, x - vx[i] * 1.1, y - vy[i] * 1.1);
      }
    }
    function project() {
      for (var y = 1; y < N - 1; y++) for (var x = 1; x < N - 1; x++) {
        var i = id(x, y);
        div[i] = -0.5 * (vx[i + 1] - vx[i - 1] + vy[i + N] - vy[i - N]);
        pressure[i] = 0;
      }
      for (var k = 0; k < 10; k++) {
        for (var y2 = 1; y2 < N - 1; y2++) for (var x2 = 1; x2 < N - 1; x2++) {
          var i2 = id(x2, y2);
          tmp[i2] = (pressure[i2 - 1] + pressure[i2 + 1] + pressure[i2 - N] + pressure[i2 + N] + div[i2]) * 0.25;
        }
        for (var n = 0; n < pressure.length; n++) pressure[n] = tmp[n];
      }
      for (var y3 = 1; y3 < N - 1; y3++) for (var x3 = 1; x3 < N - 1; x3++) {
        var i3 = id(x3, y3);
        vx[i3] -= 0.5 * (pressure[i3 + 1] - pressure[i3 - 1]);
        vy[i3] -= 0.5 * (pressure[i3 + N] - pressure[i3 - N]);
      }
    }
    function step() {
      advect(vx, tmpx);
      advect(vy, tmpy);
      for (var i = 0; i < vx.length; i++) { vx[i] = tmpx[i] * 0.996; vy[i] = tmpy[i] * 0.996; }
      project();
      advect(dens, tmp);
      for (var j = 0; j < dens.length; j++) dens[j] = tmp[j] * 0.992;
    }
    function stir(x, y) {
      var cx = x / canvas.width * N;
      var cy = y / canvas.height * N;
      for (var j = -3; j <= 3; j++) for (var i = -3; i <= 3; i++) {
        var px = Math.round(cx) + i;
        var py = Math.round(cy) + j;
        if (px < 1 || py < 1 || px >= N - 1 || py >= N - 1) continue;
        var index = id(px, py);
        vx[index] += -j * 0.8;
        vy[index] += i * 0.8;
        dens[index] += 0.8;
      }
    }
    function blob() {
      dens.fill(0);
      vx.fill(0);
      vy.fill(0);
      for (var y = 18; y < 30; y++) for (var x = 18; x < 30; x++) dens[id(x, y)] = 1;
    }
    function spread() {
      var n = 0;
      for (var i = 0; i < dens.length; i++) if (dens[i] > 0.25) n++;
      return n;
    }
    function draw() {
      var img = ctx.createImageData(N, N);
      for (var i = 0; i < dens.length; i++) {
        var d = Math.max(0, Math.min(1, dens[i]));
        img.data[i * 4] = 20 + d * 210;
        img.data[i * 4 + 1] = 16 + d * 80;
        img.data[i * 4 + 2] = 14;
        img.data[i * 4 + 3] = 255;
      }
      var tiny = document.createElement("canvas");
      tiny.width = N;
      tiny.height = N;
      tiny.getContext("2d").putImageData(img, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(tiny, 0, 0, 192, 108);
    }
    canvas.addEventListener("pointermove", function (event) {
      var r = canvas.getBoundingClientRect();
      stir((event.clientX - r.left) / r.width * canvas.width, (event.clientY - r.top) / r.height * canvas.height);
      step();
      draw();
    });
    canvas.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      stir(96, 54);
      step();
      draw();
    });
    blob();
    draw();
    ui.reset.addEventListener("click", function () {
      blob();
      stir(96, 40);
      for (var i = 0; i < 8; i++) step();
      draw();
    });
    H.expose("rb-splash-cursor", "stable-fluid-advection", {
      trigger: function () {
        stir(120, 30);
        for (var i = 0; i < 14; i++) step();
        draw();
      },
      reset: function () { blob(); draw(); },
      expectAfter: "flowing",
      page: ui.page,
      read: function () { return spread() > 180 ? "flowing" : "still"; }
    });
  };

  S["rb-target-cursor"] = function (root) {
    var ui = H.shell(root, { title: "瞄准" });
    var box = field(ui.body);
    var target = H.el("button", null, "席位");
    target.type = "button";
    target.style.cssText = "position:absolute;left:140px;top:80px;min-height:36px";
    var ring = H.el("div");
    ring.style.cssText = "position:absolute;width:28px;height:28px;border:2px solid #9f2d20;pointer-events:none";
    box.append(target, ring);
    var locked = 0;
    function place(x, y) { ring.style.left = x + "px"; ring.style.top = y + "px"; }
    pointer(box, function (x, y) { place(x, y); });
    target.addEventListener("pointerenter", function () { locked = 1; ring.style.width = "64px"; });
    target.addEventListener("pointerleave", function () { locked = 0; ring.style.width = "28px"; });
    target.addEventListener("focus", function () { locked = 1; ring.style.width = "64px"; });
    function lock() { locked = 1; ring.style.width = "64px"; ring.style.left = "140px"; ring.style.top = "80px"; target.focus(); }
    function unlock() { locked = 0; ring.style.width = "28px"; place(20, 20); }
    ui.reset.addEventListener("click", unlock);
    H.expose("rb-target-cursor", "crosshair-locks-on-target", { trigger: lock, reset: unlock, expectAfter: 1, page: ui.page, read: function () { return locked; } });
  };

  S["rb-crosshair"] = function (root) {
    var ui = H.shell(root, { title: "十字线" });
    var box = field(ui.body);
    var h = H.el("div");
    var v = H.el("div");
    h.style.cssText = "position:absolute;left:0;right:0;height:1px;background:#9f2d20;pointer-events:none";
    v.style.cssText = "position:absolute;top:0;bottom:0;width:1px;background:#9f2d20;pointer-events:none";
    box.append(h, v);
    var y = 0;
    pointer(box, function (x, yy) { v.style.left = x + "px"; h.style.top = yy + "px"; y = yy; });
    function home() { v.style.left = "20px"; h.style.top = "20px"; y = 20; }
    function aim() { v.style.left = "120px"; h.style.top = "90px"; y = 90; }
    ui.reset.addEventListener("click", home);
    H.expose("rb-crosshair", "fullscreen-crosshair", { trigger: aim, reset: home, expectAfter: 90, page: ui.page, read: function () { return y; } });
  };

  S["rb-cursor-grid"] = function (root) {
    var ui = H.shell(root, { title: "网格高亮" });
    var box = field(ui.body);
    box.style.display = "grid";
    box.style.gridTemplateColumns = "repeat(6,1fr)";
    var cells = [];
    for (var i = 0; i < 24; i++) {
      var c = H.el("div");
      c.style.border = "1px solid #e4d8c8";
      box.append(c);
      cells.push(c);
    }
    var hit = -1;
    box.addEventListener("pointermove", function (event) {
      var r = box.getBoundingClientRect();
      var col = Math.floor((event.clientX - r.left) / (r.width / 6));
      var row = Math.floor((event.clientY - r.top) / (r.height / 4));
      hit = row * 6 + col;
      cells.forEach(function (c, i) { c.style.background = i === hit ? "#e7c48a" : "transparent"; });
    });
    function clearHit() { hit = -1; cells.forEach(function (c) { c.style.background = "transparent"; }); }
    function mark() { hit = 3; cells.forEach(function (c, i) { c.style.background = i === 3 ? "#e7c48a" : "transparent"; }); }
    ui.reset.addEventListener("click", clearHit);
    H.expose("rb-cursor-grid", "cell-under-pointer", { trigger: mark, reset: clearHit, expectAfter: 3, page: ui.page, read: function () { return hit; } });
  };

  S["rb-pixel-trail"] = function (root) {
    var ui = H.shell(root, { title: "像素拖尾" });
    var box = field(ui.body);
    var n = 0;
    pointer(box, function (x, y) {
      if (H.reduced()) return;
      var p = H.el("i");
      p.style.cssText = "position:absolute;width:8px;height:8px;background:#241c16";
      p.style.left = x + "px";
      p.style.top = y + "px";
      box.append(p);
      n += 1;
      setTimeout(function () { p.remove(); }, 600);
    });
    function drop() {
      var p = H.el("i");
      p.style.cssText = "position:absolute;width:8px;height:8px;background:#241c16;left:48px;top:64px";
      box.append(p);
      n += 1;
    }
    function clearTrail() { box.querySelectorAll("i").forEach(function (node) { node.remove(); }); n = 0; }
    ui.reset.addEventListener("click", clearTrail);
    H.expose("rb-pixel-trail", "square-pixel-trail", { trigger: drop, reset: clearTrail, expectAfter: 1, page: ui.page, read: function () { return n; } });
  };

  S["rb-swarm-cursor"] = function (root) {
    var ui = H.shell(root, { title: "粒子追随" });
    var box = field(ui.body);
    var dots = [];
    for (var i = 0; i < 8; i++) {
      var d = H.el("i");
      d.style.cssText = "position:absolute;width:8px;height:8px;border-radius:50%;background:#8a3b2c";
      box.append(d);
      dots.push({ el: d, x: 20 + i * 8, y: 40 });
    }
    var tx = 40, ty = 40;
    pointer(box, function (x, y) { tx = x; ty = y; });
    function tick() {
      dots.forEach(function (d, i) {
        var aimx = tx + Math.cos(i) * 12;
        var aimy = ty + Math.sin(i) * 12;
        var k = H.reduced() ? 1 : 0.08 + i * 0.01;
        d.x += (aimx - d.x) * k;
        d.y += (aimy - d.y) * k;
        d.el.style.left = d.x + "px";
        d.el.style.top = d.y + "px";
      });
      if (!H.reduced()) requestAnimationFrame(tick);
    }
    tick();
    function home() { tx = 30; ty = 30; }
    ui.reset.addEventListener("click", home);
    H.expose("rb-swarm-cursor", "dots-spring-to-pointer", { trigger: function () { tx = 150; ty = 100; }, reset: home, expectAfter: 150, page: ui.page, read: function () { return Math.round(tx); } });
  };

  S["magic-smooth-cursor"] = function (root) {
    var ui = H.shell(root, { title: "平滑跟随" });
    var box = field(ui.body);
    var dot = H.el("div");
    dot.style.cssText = "position:absolute;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:#241c16";
    box.append(dot);
    var x = 20, y = 20, tx = 20, ty = 20;
    pointer(box, function (px, py) { tx = px; ty = py; });
    function tick() {
      var k = H.reduced() ? 1 : 0.12;
      x += (tx - x) * k;
      y += (ty - y) * k;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      if (!H.reduced()) requestAnimationFrame(tick);
    }
    tick();
    function home() { tx = 20; ty = 20; x = 20; y = 20; dot.style.left = "20px"; dot.style.top = "20px"; }
    ui.reset.addEventListener("click", home);
    H.expose("magic-smooth-cursor", "single-lerp-cursor", { trigger: function () { tx = 140; ty = 90; }, reset: home, expectAfter: 140, page: ui.page, read: function () { return Math.round(tx); } });
  };

  S["magic-pointer"] = function (root) {
    var ui = H.shell(root, { title: "带标签的光标" });
    var box = field(ui.body);
    var tag = H.el("div", null, "页面");
    tag.style.cssText = "position:absolute;padding:2px 6px;background:#241c16;color:#f6f1e8;font-size:12px;pointer-events:none";
    box.append(tag);
    var label = "页面";
    pointer(box, function (x, y) {
      tag.style.left = (x + 12) + "px";
      tag.style.top = y + "px";
    });
    box.querySelector("a").addEventListener("pointerenter", function () { label = "预约"; tag.textContent = "预约"; });
    box.querySelector("a").addEventListener("pointerleave", function () { label = "页面"; tag.textContent = "页面"; });
    function home() { label = "页面"; tag.textContent = "页面"; }
    ui.reset.addEventListener("click", home);
    H.expose("magic-pointer", "cursor-label", { trigger: function () { label = "预约"; tag.textContent = "预约"; tag.style.left = "120px"; tag.style.top = "24px"; }, reset: home, expectAfter: "预约", page: ui.page, read: function () { return label; } });
  };

  S["animata-cursor-tracker"] = function (root) {
    var ui = H.shell(root, { title: "坐标" });
    var box = field(ui.body);
    var read = H.el("p", null, "0, 0");
    read.style.cssText = "position:absolute;right:8px;bottom:8px;margin:0";
    box.append(read);
    var text = "0, 0";
    pointer(box, function (x, y) { text = Math.round(x) + ", " + Math.round(y); read.textContent = text; });
    function home() { text = "0, 0"; read.textContent = text; }
    ui.reset.addEventListener("click", home);
    H.expose("animata-cursor-tracker", "live-coordinates", { trigger: function () { text = "12, 8"; read.textContent = text; }, reset: home, expectAfter: "12, 8", page: ui.page, read: function () { return text; } });
  };

  S["rb-text-cursor"] = function (root) {
    var ui = H.shell(root, { title: "落下的字" });
    var box = field(ui.body);
    var glyphs = ["南", "窗", "书"];
    var n = 0;
    pointer(box, function (x, y) {
      if (H.reduced()) return;
      var g = H.el("span", null, glyphs[n % glyphs.length]);
      n += 1;
      g.style.cssText = "position:absolute;font-family:serif;font-size:18px";
      g.style.left = x + "px";
      g.style.top = y + "px";
      box.append(g);
      setTimeout(function () { g.remove(); }, 700);
    });
    function drop() {
      var g = H.el("span", null, glyphs[n % glyphs.length]);
      g.style.cssText = "position:absolute;font-family:serif;font-size:18px;left:36px;top:48px";
      box.append(g);
      n += 1;
    }
    function clearGlyphs() { box.querySelectorAll("span").forEach(function (node) { node.remove(); }); n = 0; }
    ui.reset.addEventListener("click", clearGlyphs);
    H.expose("rb-text-cursor", "glyphs-fall-behind-pointer", { trigger: drop, reset: clearGlyphs, expectAfter: 1, page: ui.page, read: function () { return n; } });
  };
})();
