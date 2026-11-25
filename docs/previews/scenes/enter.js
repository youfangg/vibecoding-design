(function () {
  var S = window.SCENES;
  var H = window.Host;

  S["blur-fade"] = function (root) {
    var ui = H.shell(root, { title: "南窗 · 周四朗诵会" });
    var line = H.el("p", "line", "把已经排好的诗，读出声。");
    line.style.cssText = "margin:24px;font-family:serif;font-size:1.8rem;filter:blur(10px);opacity:0;transform:translateY(12px)";
    ui.body.append(line);
    var phase = 0;
    function rewind() {
      phase = 0;
      line.style.transition = "none";
      line.style.filter = "blur(10px)";
      line.style.opacity = "0";
      line.style.transform = "translateY(12px)";
    }
    function play() {
      rewind();
      var sharp = function () {
        line.style.transition = H.reduced() ? "none" : "filter .45s ease, opacity .45s ease, transform .45s ease";
        line.style.filter = "none";
        line.style.opacity = "1";
        line.style.transform = "none";
        phase = 1;
      };
      if (H.reduced()) sharp();
      else requestAnimationFrame(sharp);
    }
    ui.reset.addEventListener("click", play);
    H.expose("blur-fade", "blur-then-sharp", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return phase; } });
    play();
  };

  S["animated-list"] = function (root) {
    var ui = H.shell(root, { title: "北岛晚市" });
    var rows = ["慢煮牛胸 ¥128", "海盐时蔬 ¥48", "桂花酒酿 ¥22"];
    var list = H.el("div", "list");
    list.style.margin = "16px";
    var selected = 0;
    var buttons = rows.map(function (text, i) {
      var b = H.el("button", "row", text);
      b.type = "button";
      b.style.cssText = "display:block;width:100%;text-align:left;min-height:44px;margin:6px 0;border:0;background:#fffaf4;padding:8px 12px;transform:translateY(16px);opacity:0";
      b.addEventListener("click", function () { select(i); });
      list.append(b);
      return b;
    });
    ui.body.append(list);
    function select(i) {
      selected = i;
      buttons.forEach(function (b, n) {
        b.style.boxShadow = n === i ? "inset 4px 0 0 #9f2d20" : "none";
        b.setAttribute("aria-current", n === i ? "true" : "false");
      });
    }
    function play() {
      buttons.forEach(function (b, i) {
        b.style.transition = "none";
        b.style.transform = "translateY(16px)";
        b.style.opacity = "0";
        var go = function () {
          b.style.transition = H.reduced() ? "none" : "transform .45s cubic-bezier(.2,.8,.2,1), opacity .45s";
          b.style.transform = "none";
          b.style.opacity = "1";
        };
        if (H.reduced()) go();
        else setTimeout(go, 90 * i);
      });
      select(0);
    }
    ui.body.tabIndex = 0;
    ui.body.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") select(Math.min(rows.length - 1, selected + 1));
      if (event.key === "ArrowUp") select(Math.max(0, selected - 1));
    });
    ui.reset.addEventListener("click", play);
    H.expose("animated-list", "rows-spring-and-select", { trigger: function () { select(1); }, reset: function () { select(0); }, expectAfter: 1, page: ui.page, read: function () { return selected; } });
    play();
  };

  S["bounce-cards"] = function (root) {
    var ui = H.shell(root, { title: "候鸟相册" });
    var wrap = H.el("div");
    wrap.style.cssText = "position:relative;height:220px;margin:24px";
    var colors = ["#7ea0b8", "#c46a4a", "#e7c48a", "#23483a"];
    var cards = colors.map(function (color, i) {
      var c = H.el("div");
      c.style.cssText = "position:absolute;left:40px;top:30px;width:120px;height:150px;background:" + color;
      wrap.append(c);
      return c;
    });
    ui.body.append(wrap);
    var spread = 0;
    function play() {
      spread = 1;
      cards.forEach(function (c, i) {
        var rot = (i - 1.5) * 12;
        var x = (i - 1.5) * 36;
        c.style.transition = H.reduced() ? "none" : "transform .6s cubic-bezier(.2,1.4,.4,1)";
        c.style.transform = "translateX(" + x + "px) rotate(" + rot + "deg)";
      });
    }
    function rewind() {
      spread = 0;
      cards.forEach(function (c) { c.style.transition = "none"; c.style.transform = "none"; });
    }
    ui.reset.addEventListener("click", function () { rewind(); setTimeout(play, 30); });
    H.expose("bounce-cards", "fan-with-overshoot", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return spread; } });
    play();
  };

  S["vertical-cut-reveal"] = function (root) {
    var ui = H.shell(root, { title: "白潮新季" });
    var panel = H.el("div", null, "海盐衬衫已经上架");
    panel.style.cssText = "margin:24px;height:140px;background:#d7e4ea;display:grid;place-items:center;font-family:serif;font-size:1.4rem;clip-path:inset(100% 0 0 0)";
    ui.body.append(panel);
    var opened = 0;
    function rewind() {
      opened = 0;
      panel.style.transition = "none";
      panel.style.clipPath = "inset(100% 0 0 0)";
    }
    function play() {
      rewind();
      requestAnimationFrame(function () {
        panel.style.transition = H.reduced() ? "none" : "clip-path .45s ease";
        panel.style.clipPath = "inset(0 0 0 0)";
        opened = 1;
      });
    }
    ui.reset.addEventListener("click", play);
    H.expose("vertical-cut-reveal", "clip-reveal-up", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return opened; } });
    play();
  };

  S["rb-halftone-reveal"] = function (root) {
    var ui = H.shell(root, { title: "青浦渡口" });
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 180;
    canvas.style.cssText = "margin:16px;background:#efe6d8";
    ui.body.append(canvas);
    var ctx = canvas.getContext("2d");
    var t = 0;
    function draw(p) {
      ctx.clearRect(0, 0, 320, 180);
      ctx.fillStyle = "#7ea0b8";
      ctx.fillRect(0, 0, 320, 180);
      ctx.fillStyle = "#241c16";
      var step = 14;
      var radius = H.reduced() ? 0 : (1 - p) * 6;
      for (var y = step; y < 180; y += step) {
        for (var x = step; x < 320; x += step) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = "#f6f1e8";
      ctx.font = "20px serif";
      ctx.fillText("渡口 · 2017", 16, 160);
    }
    var job = 0;
    function rewind() { job += 1; t = 0; draw(0); }
    function play() {
      rewind();
      var mine = job;
      if (H.reduced()) { draw(1); t = 1; return; }
      var start = performance.now();
      function frame(now) {
        if (mine !== job) return;
        t = Math.min(1, (now - start) / 280);
        draw(t);
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    ui.reset.addEventListener("click", play);
    H.expose("rb-halftone-reveal", "halftone-dots-shrink", { trigger: play, reset: rewind, expectAfter: 10, page: ui.page, read: function () { return Math.round(t * 10); } });
    play();
  };

  S["canvas-reveal-effect"] = function (root) {
    var ui = H.shell(root, { title: "织光海报" });
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 180;
    canvas.style.margin = "16px";
    ui.body.append(canvas);
    var ctx = canvas.getContext("2d");
    var revealed = 0;
    function base() {
      ctx.fillStyle = "#e7c48a";
      ctx.fillRect(0, 0, 320, 180);
      ctx.fillStyle = "#241c16";
      ctx.font = "22px serif";
      ctx.fillText("南窗春季", 24, 96);
      ctx.globalCompositeOperation = "destination-in";
    }
    function paintMask(x) {
      base();
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, x, 180);
      ctx.globalCompositeOperation = "source-over";
    }
    var job = 0;
    function rewind() { job += 1; revealed = 0; paintMask(0); }
    function play() {
      rewind();
      var mine = job;
      if (H.reduced()) { paintMask(320); revealed = 320; return; }
      var x = 0;
      function frame() {
        if (mine !== job) return;
        x += 80;
        var next = Math.min(320, x);
        paintMask(next);
        revealed = next;
        if (next < 320) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    canvas.addEventListener("pointermove", function (event) {
      var rect = canvas.getBoundingClientRect();
      var next = Math.round((event.clientX - rect.left) * (canvas.width / rect.width));
      paintMask(next);
      revealed = next;
    });
    ui.reset.addEventListener("click", play);
    H.expose("canvas-reveal-effect", "pointer-wipe-mask", { trigger: play, reset: rewind, expectAfter: 320, page: ui.page, read: function () { return revealed; } });
    play();
  };

  S["motion-exit-animation"] = function (root) {
    var ui = H.shell(root, { title: "墨蓝记要" });
    var card = H.el("article");
    card.style.cssText = "margin:16px;padding:12px;background:#fffaf4;border:1px solid #e6d9c8";
    card.append(H.el("strong", null, "从会议里列出任务"));
    var gone = 0;
    var btn = H.el("button", null, "完成并离开");
    btn.type = "button";
    btn.style.cssText = "margin:16px;min-height:40px;border:0;background:#241c16;color:#f6f1e8;padding:0 12px";
    ui.body.append(card, btn);
    function leave() {
      gone = 1;
      card.style.transition = H.reduced() ? "none" : "transform .35s ease, opacity .35s ease";
      card.style.transform = "translateY(24px)";
      card.style.opacity = "0";
    }
    function play() {
      gone = 0;
      card.style.transition = "none";
      card.style.transform = "none";
      card.style.opacity = "1";
    }
    btn.addEventListener("click", leave);
    ui.reset.addEventListener("click", play);
    H.expose("motion-exit-animation", "exit-then-unmount-visual", { trigger: leave, reset: play, expectAfter: 1, page: ui.page, read: function () { return gone; } });
  };
})();
