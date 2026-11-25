(function () {
  var S = window.SCENES;
  var H = window.Host;

  function stage(body) {
    var box = H.el("div");
    box.style.cssText = "margin:16px;min-height:180px;position:relative;overflow:hidden;background:#fffaf4;border:1px solid #e6d9c8";
    body.append(box);
    return box;
  }

  S["parallel-transitions"] = function (root) {
    var ui = H.shell(root, { title: "云帆路线" });
    var box = stage(ui.body);
    var badge = H.el("div", null, "云帆");
    badge.style.cssText = "position:absolute;left:12px;top:12px;background:#241c16;color:#f6f1e8;padding:4px 8px";
    var copy = H.el("p", null, "通勤班线");
    copy.style.cssText = "position:absolute;left:12px;bottom:16px;margin:0;font-family:serif;font-size:1.4rem";
    box.append(badge, copy);
    var chapter = 0;
    var names = ["通勤班线", "跨城拼车"];
    function go(next) {
      chapter = next;
      copy.style.opacity = "0";
      box.style.transition = H.reduced() ? "none" : "background .6s linear";
      copy.style.transition = H.reduced() ? "none" : "opacity .25s linear";
      box.style.background = next ? "#d7e4ea" : "#efe2c4";
      setTimeout(function () {
        copy.textContent = names[next];
        copy.style.opacity = "1";
      }, H.reduced() ? 0 : 180);
    }
    var btn = H.el("button", null, "下一章");
    btn.type = "button";
    btn.style.cssText = "margin:0 16px;min-height:36px";
    btn.addEventListener("click", function () { go(chapter ? 0 : 1); });
    ui.body.append(btn);
    ui.reset.addEventListener("click", function () { go(0); });
    H.expose("parallel-transitions", "staggered-crossfade-persistent-badge", { trigger: function () { go(1); }, read: function () { return chapter; } });
    go(0);
  };

  S["und-ny"] = function (root) {
    var ui = H.shell(root, { title: "原野配色" });
    var box = stage(ui.body);
    var label = H.el("p", null, "霜降");
    label.style.cssText = "margin:0;padding:24px;font-family:serif;font-size:2rem";
    box.append(label);
    var tone = 0;
    function go(next) {
      tone = next;
      box.style.background = next ? "#241c16" : "#f3eee6";
      label.style.color = next ? "#f6f1e8" : "#241c16";
      label.textContent = next ? "墨蓝" : "霜降";
    }
    var btn = H.el("button", null, "换成墨蓝");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", function () { go(tone ? 0 : 1); });
    ui.body.append(btn);
    ui.reset.addEventListener("click", function () { go(0); });
    H.expose("und-ny", "page-color-follows-content", { trigger: function () { go(1); }, read: function () { return tone; } });
  };

  S["repeating-image-transition"] = function (root) {
    var ui = H.shell(root, { title: "白潮两季" });
    var box = stage(ui.body);
    box.style.display = "flex";
    var slices = [];
    for (var i = 0; i < 6; i++) {
      var s = H.el("div");
      s.style.flex = "1";
      box.append(s);
      slices.push(s);
    }
    var which = 0;
    function paint(next) {
      which = next;
      var colors = next ? ["#8a3b2c", "#f4efe6"] : ["#7ea0b8", "#e7c48a"];
      slices.forEach(function (s, i) {
        s.style.transition = H.reduced() ? "none" : "transform .45s ease";
        s.style.transform = "translateY(" + (i % 2 ? 8 : -8) + "px)";
        s.style.background = colors[i % 2];
      });
    }
    var btn = H.el("button", null, "换一季");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", function () { paint(which ? 0 : 1); });
    ui.body.append(btn);
    ui.reset.addEventListener("click", function () { paint(0); });
    H.expose("repeating-image-transition", "repeated-slices-swap", { trigger: function () { paint(1); }, read: function () { return which; } });
    paint(0);
  };

  S["motion-path-transition"] = function (root) {
    var ui = H.shell(root, { title: "流光腕表" });
    var box = stage(ui.body);
    var thumb = H.el("div");
    thumb.style.cssText = "position:absolute;width:36px;height:36px;background:#e7c48a;left:16px;bottom:16px";
    var slot = H.el("div", null, "珍珠贝母盘");
    slot.style.cssText = "position:absolute;right:16px;top:24px;width:120px;height:72px;border:1px dashed #c4b5a4;display:grid;place-items:center;font-size:12px";
    box.append(thumb, slot);
    var flown = 0;
    function play() {
      flown = 0;
      thumb.style.transition = "none";
      thumb.style.transform = "none";
      requestAnimationFrame(function () {
        thumb.style.transition = H.reduced() ? "none" : "transform .6s cubic-bezier(.2,.7,.2,1)";
        thumb.style.transform = "translate(180px,-90px) scale(1.4)";
        flown = 1;
      });
    }
    var btn = H.el("button", null, "飞入详情");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", play);
    ui.body.append(btn);
    ui.reset.addEventListener("click", play);
    H.expose("motion-path-transition", "thumbnail-along-path", { trigger: play, read: function () { return flown; } });
  };

  S["rb-pixel-transition"] = function (root) {
    var ui = H.shell(root, { title: "回声封面" });
    var canvas = document.createElement("canvas");
    canvas.width = 240;
    canvas.height = 140;
    canvas.style.margin = "16px";
    ui.body.append(canvas);
    var ctx = canvas.getContext("2d");
    var step = 0;
    function draw(block, color) {
      ctx.fillStyle = color;
      for (var y = 0; y < 140; y += block) {
        for (var x = 0; x < 240; x += block) ctx.fillRect(x, y, block - 1, block - 1);
      }
    }
    function play() {
      step = 0;
      var blocks = H.reduced() ? [4] : [28, 16, 8, 4];
      var colors = ["#1d3348", "#e7c48a"];
      function next() {
        draw(blocks[Math.min(step, blocks.length - 1)], colors[step > 1 ? 1 : 0]);
        step += 1;
        if (step < blocks.length) setTimeout(next, 160);
      }
      next();
    }
    ui.reset.addEventListener("click", play);
    H.expose("rb-pixel-transition", "pixelate-then-clear", { trigger: play, read: function () { return step; } });
    play();
  };

  S["rb-pixel-swap"] = function (root) {
    var ui = H.shell(root, { title: "两张窗景" });
    var grid = H.el("div");
    grid.style.cssText = "margin:16px;display:grid;grid-template-columns:repeat(6,28px);gap:4px";
    var cells = [];
    for (var i = 0; i < 24; i++) {
      var c = H.el("div");
      c.style.height = "28px";
      c.style.background = "#7ea0b8";
      grid.append(c);
      cells.push(c);
    }
    ui.body.append(grid);
    var swapped = 0;
    function play() {
      swapped = 1;
      cells.forEach(function (c, i) {
        c.style.transition = H.reduced() ? "none" : "background .4s ease";
        c.style.transitionDelay = H.reduced() ? "0s" : (i % 6) * 40 + "ms";
        c.style.background = i % 2 ? "#c46a4a" : "#e7c48a";
      });
    }
    ui.reset.addEventListener("click", function () {
      swapped = 0;
      cells.forEach(function (c) { c.style.background = "#7ea0b8"; });
    });
    var btn = H.el("button", null, "互换");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", play);
    ui.body.append(btn);
    H.expose("rb-pixel-swap", "cells-swap-palette", { trigger: play, read: function () { return swapped; } });
  };

  S["aceternity-compare"] = function (root) {
    var ui = H.shell(root, { title: "修图前后" });
    var box = stage(ui.body);
    var before = H.el("div");
    before.style.cssText = "position:absolute;inset:0;background:#c9b48a";
    var after = H.el("div");
    after.style.cssText = "position:absolute;inset:0;background:#7ea0b8;width:50%";
    var handle = H.el("button", null, "拖");
    handle.type = "button";
    handle.style.cssText = "position:absolute;top:0;bottom:0;left:50%;width:28px;margin-left:-14px;border:0;background:#241c16;color:#f6f1e8";
    box.append(before, after, handle);
    var pos = 50;
    function set(p) {
      pos = Math.max(8, Math.min(92, p));
      after.style.width = pos + "%";
      handle.style.left = pos + "%";
    }
    handle.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") set(pos - 8);
      if (event.key === "ArrowRight") set(pos + 8);
    });
    var dragging = false;
    handle.addEventListener("pointerdown", function () { dragging = true; });
    window.addEventListener("pointerup", function () { dragging = false; });
    box.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      var rect = box.getBoundingClientRect();
      set((event.clientX - rect.left) / rect.width * 100);
    });
    ui.reset.addEventListener("click", function () { set(50); });
    H.expose("aceternity-compare", "before-after-divider", { trigger: function () { set(75); }, read: function () { return Math.round(pos); } });
  };

  function stage(body) {
    var box = H.el("div");
    box.style.cssText = "margin:16px;height:180px;position:relative;overflow:hidden;background:#efe6d8";
    body.append(box);
    return box;
  }

  S["aceternity-animated-modal"] = function (root) {
    var ui = H.shell(root, { title: "预约席位" });
    var openBtn = H.el("button", null, "预约");
    openBtn.type = "button";
    openBtn.style.cssText = "margin:16px;min-height:40px;background:#8a3b2c;color:#fffaf4;border:0;padding:0 14px";
    var modal = H.el("div");
    modal.style.cssText = "display:none;margin:0 16px;padding:16px;background:#fffaf4;border:1px solid #e6d9c8";
    modal.append(H.el("p", null, "周四 19:30 · 还剩 6 席"));
    var close = H.el("button", null, "关闭");
    close.type = "button";
    modal.append(close);
    ui.body.append(openBtn, modal);
    var open = 0;
    function set(on) {
      open = on ? 1 : 0;
      modal.style.display = on ? "block" : "none";
      modal.style.transform = on && !H.reduced() ? "scale(1)" : "scale(.92)";
      modal.style.transition = "transform .25s ease";
    }
    openBtn.addEventListener("click", function () { set(1); });
    close.addEventListener("click", function () { set(0); });
    ui.reset.addEventListener("click", function () { set(0); });
    H.expose("aceternity-animated-modal", "modal-scale-in", { trigger: function () { set(1); }, read: function () { return open; } });
  };

  S["magic-theme-toggler"] = function (root) {
    var ui = H.shell(root, { title: "原野主题" });
    var box = stage(ui.body);
    var clip = H.el("div");
    clip.style.cssText = "position:absolute;inset:0;background:#241c16;clip-path:circle(0% at 80% 70%)";
    box.append(clip, H.el("p", null, "浅色正文仍可读"));
    var dark = 0;
    function play() {
      dark = 1;
      clip.style.transition = H.reduced() ? "none" : "clip-path .5s ease";
      clip.style.clipPath = "circle(140% at 80% 70%)";
    }
    var btn = H.el("button", null, "切到深色");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", play);
    ui.body.append(btn);
    ui.reset.addEventListener("click", function () {
      dark = 0;
      clip.style.transition = "none";
      clip.style.clipPath = "circle(0% at 80% 70%)";
    });
    H.expose("magic-theme-toggler", "circle-clip-theme", { trigger: play, read: function () { return dark; } });
  };

  S["animate-page-transition"] = function (root) {
    var ui = H.shell(root, { title: "南窗分册" });
    var head = H.el("div", null, "南窗书局");
    head.style.cssText = "margin:12px 16px 0;font-family:serif";
    var page = H.el("div");
    page.style.cssText = "margin:8px 16px;padding:16px;background:#fffaf4;min-height:100px";
    ui.body.append(head, page);
    var n = 0;
    var pages = ["诗集目录", "朗诵会场次"];
    function go(next) {
      n = next;
      page.style.transition = H.reduced() ? "none" : "transform .35s ease, opacity .35s ease";
      page.style.opacity = "0";
      page.style.transform = "translateX(24px)";
      setTimeout(function () {
        page.textContent = pages[next];
        page.style.transform = "translateX(0)";
        page.style.opacity = "1";
      }, H.reduced() ? 0 : 180);
    }
    var btn = H.el("button", null, "下一页");
    btn.type = "button";
    btn.style.margin = "0 16px";
    btn.addEventListener("click", function () { go(n ? 0 : 1); });
    ui.body.append(btn);
    ui.reset.addEventListener("click", function () { go(0); });
    H.expose("animate-page-transition", "shared-header-page-slide", { trigger: function () { go(1); }, read: function () { return n; } });
    go(0);
  };
})();
