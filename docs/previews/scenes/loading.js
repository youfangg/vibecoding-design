(function () {
  var S = window.SCENES;
  var H = window.Host;

  S["multi-step-loader"] = function (root) {
    var ui = H.shell(root, { title: "墨蓝整理会议" });
    var steps = ["识别发言人", "抽取待办", "合并重复项"];
    var list = H.el("ol");
    list.style.margin = "16px";
    steps.forEach(function (text) { list.append(H.el("li", null, text)); });
    ui.body.append(list);
    var phase = 0;
    function paint() {
      Array.from(list.children).forEach(function (li, i) {
        li.style.color = i < phase ? "#23483a" : "#7a6a58";
        li.style.fontWeight = i === phase - 1 ? "600" : "400";
      });
    }
    function play() {
      phase = 0;
      paint();
      function next() {
        phase += 1;
        paint();
        if (phase < steps.length && !H.reduced()) setTimeout(next, 400);
        if (H.reduced()) { phase = steps.length; paint(); }
      }
      next();
    }
    ui.reset.addEventListener("click", play);
    H.expose("multi-step-loader", "sequential-steps", { trigger: play, read: function () { return phase; } });
    play();
  };

  S["lattice-loader"] = function (root) {
    var ui = H.shell(root, { title: "代理状态" });
    var rows = ["检索案例", "整理提示词", "等待确认"];
    var box = H.el("div");
    box.style.margin = "16px";
    var nodes = rows.map(function (text) {
      var p = H.el("p", null, "○ " + text);
      p.style.margin = "6px 0";
      box.append(p);
      return p;
    });
    ui.body.append(box);
    var phase = 0;
    function paint() { nodes.forEach(function (p, i) { p.textContent = (i < phase ? "● " : "○ ") + rows[i]; }); }
    function play() {
      phase = 0;
      paint();
      var timer = setInterval(function () {
        phase += 1;
        paint();
        if (phase >= rows.length) clearInterval(timer);
      }, H.reduced() ? 0 : 350);
    }
    ui.reset.addEventListener("click", play);
    H.expose("lattice-loader", "status-rows", { trigger: play, read: function () { return phase; } });
    play();
  };

  S["animata-list-skeleton"] = function (root) {
    var ui = H.shell(root, { title: "订单列表" });
    var box = H.el("div");
    box.style.margin = "16px";
    ui.body.append(box);
    var shown = 0;
    var timer = 0;
    function rewind() {
      clearTimeout(timer);
      shown = 0;
      box.replaceChildren();
      for (var i = 0; i < 3; i++) {
        var bar = H.el("div");
        bar.style.cssText = "height:14px;margin:8px 0;background:#e6d9c8";
        box.append(bar);
      }
    }
    function play() {
      rewind();
      timer = setTimeout(function () {
        box.replaceChildren();
        ["桂花拿铁 ¥36", "冷泡 ¥28", "牛胸 ¥128"].forEach(function (text) {
          box.append(H.el("p", null, text));
        });
        shown = 1;
      }, H.reduced() ? 0 : 180);
    }
    ui.reset.addEventListener("click", play);
    H.expose("animata-list-skeleton", "skeleton-to-rows", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return shown; } });
    play();
  };

  S["animata-split-reveal"] = function (root) {
    var ui = H.shell(root, { title: "预加载拆屏" });
    var left = H.el("div");
    var right = H.el("div");
    left.style.cssText = right.style.cssText = "position:absolute;top:0;bottom:0;width:50%;background:#241c16";
    left.style.left = "0";
    right.style.right = "0";
    var wrap = H.el("div");
    wrap.style.cssText = "position:relative;height:160px;margin:16px;background:#e7c48a";
    wrap.append(H.el("p", null, "南窗已经开门"), left, right);
    ui.body.append(wrap);
    var open = 0;
    function rewind() {
      open = 0;
      left.style.transition = right.style.transition = "none";
      left.style.transform = "none";
      right.style.transform = "none";
    }
    function play() {
      rewind();
      requestAnimationFrame(function () {
        left.style.transition = right.style.transition = H.reduced() ? "none" : "transform .4s ease";
        left.style.transform = "translateX(-100%)";
        right.style.transform = "translateX(100%)";
        open = 1;
      });
    }
    ui.reset.addEventListener("click", play);
    H.expose("animata-split-reveal", "split-panels-open", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return open; } });
    play();
  };

  S["animata-vertical-tiles"] = function (root) {
    var ui = H.shell(root, { title: "竖向砖" });
    var wrap = H.el("div");
    wrap.style.cssText = "position:relative;height:160px;margin:16px;background:#7ea0b8";
    var tiles = [];
    for (var i = 0; i < 5; i++) {
      var t = H.el("div");
      t.style.cssText = "position:absolute;left:0;right:0;height:20%;background:#241c16;top:" + (i * 20) + "%";
      wrap.append(t);
      tiles.push(t);
    }
    ui.body.append(wrap);
    var gone = 0;
    function rewind() {
      gone = 0;
      tiles.forEach(function (t) {
        t.style.transition = "none";
        t.style.transform = "scaleY(1)";
      });
    }
    function play() {
      rewind();
      requestAnimationFrame(function () {
        tiles.forEach(function (t, i) {
          t.style.transition = H.reduced() ? "none" : "transform .35s ease";
          t.style.transitionDelay = H.reduced() ? "0s" : i * 40 + "ms";
          t.style.transform = "scaleY(0)";
        });
        gone = 1;
      });
    }
    ui.reset.addEventListener("click", play);
    H.expose("animata-vertical-tiles", "tiles-collapse", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return gone; } });
    play();
  };

  S["cult-loading-carousel"] = function (root) {
    var ui = H.shell(root, { title: "等待时的提示" });
    var tips = ["正在温杯", "研磨豆子", "萃取中"];
    var p = H.el("p", null, tips[0]);
    p.style.cssText = "margin:24px;font-family:serif;font-size:1.4rem";
    ui.body.append(p);
    var i = 0;
    function play() { i = (i + 1) % tips.length; p.textContent = tips[i]; }
    ui.reset.addEventListener("click", function () { i = 0; p.textContent = tips[0]; });
    H.expose("cult-loading-carousel", "rotating-wait-copy", { trigger: play, read: function () { return i; } });
  };

  S["motion-line-reveal"] = function (root) {
    var ui = H.shell(root, { title: "线性遮罩" });
    var bar = H.el("div", null, "本季茶单");
    bar.style.cssText = "margin:24px;padding:16px;background:#fffaf4;clip-path:inset(0 100% 0 0);font-family:serif;font-size:1.4rem";
    ui.body.append(bar);
    var open = 0;
    function rewind() {
      open = 0;
      bar.style.transition = "none";
      bar.style.clipPath = "inset(0 100% 0 0)";
    }
    function play() {
      rewind();
      requestAnimationFrame(function () {
        bar.style.transition = H.reduced() ? "none" : "clip-path .4s ease";
        bar.style.clipPath = "inset(0 0 0 0)";
        open = 1;
      });
    }
    ui.reset.addEventListener("click", play);
    H.expose("motion-line-reveal", "horizontal-mask-reveal", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return open; } });
    play();
  };

  S["motion-svg-spinner"] = function (root) {
    var ui = H.shell(root, { title: "路径描边" });
    ui.body.innerHTML = '<svg viewBox="0 0 80 80" width="80" height="80" style="margin:16px"><circle cx="40" cy="40" r="28" fill="none" stroke="#e6d9c8" stroke-width="6"/><circle id="arc" cx="40" cy="40" r="28" fill="none" stroke="#9f2d20" stroke-width="6" stroke-dasharray="40 200" stroke-linecap="square"/></svg>';
    var arc = ui.body.querySelector("#arc");
    var offset = 0;
    function play() {
      offset = (offset + 40) % 180;
      arc.style.strokeDashoffset = String(H.reduced() ? 0 : offset);
    }
    if (!H.reduced()) setInterval(play, 200);
    ui.reset.addEventListener("click", play);
    H.expose("motion-svg-spinner", "stroke-dash-spinner", { trigger: play, read: function () { return offset; } });
    play();
  };

  S["motion-infinite-loading"] = function (root) {
    var ui = H.shell(root, { title: "触底再加载" });
    var scroller = H.el("div");
    scroller.style.cssText = "height:160px;overflow:auto;margin:12px;border:1px solid #e6d9c8";
    var list = H.el("div");
    scroller.append(list);
    ui.body.append(scroller);
    var count = 0;
    function add(n) {
      for (var i = 0; i < n; i++) {
        count += 1;
        list.append(H.el("p", null, "记录 " + count));
      }
    }
    add(4);
    scroller.addEventListener("scroll", function () {
      if (scroller.scrollTop + scroller.clientHeight > scroller.scrollHeight - 8) add(2);
    });
    var more = H.el("button", null, "加载更多");
    more.type = "button";
    more.style.margin = "0 12px";
    more.addEventListener("click", function () { add(2); });
    ui.body.append(more);
    ui.reset.addEventListener("click", function () { count = 0; list.replaceChildren(); add(4); });
    H.expose("motion-infinite-loading", "append-on-end", { trigger: function () { add(2); }, read: function () { return count; } });
  };

  S["image-generation-loader"] = function (root) {
    var ui = H.shell(root, { title: "海报生成中" });
    var frame = H.el("div");
    frame.style.cssText = "margin:16px;width:140px;height:180px;background:#e6d9c8";
    var cap = H.el("p", null, "构图");
    ui.body.append(frame, cap);
    var steps = ["构图", "上色", "精修"];
    var colors = ["#e6d9c8", "#e7c48a", "#c46a4a"];
    var phase = 0;
    function paint() { frame.style.background = colors[phase]; cap.textContent = steps[phase]; }
    function play() {
      phase = 0;
      paint();
      if (H.reduced()) { phase = 2; paint(); return; }
      var timer = setInterval(function () {
        phase += 1;
        paint();
        if (phase >= 2) clearInterval(timer);
      }, 400);
    }
    ui.reset.addEventListener("click", play);
    H.expose("image-generation-loader", "frame-stages", { trigger: play, read: function () { return phase; } });
    play();
  };

  S["kokonut-ai-loading"] = function (root) {
    var ui = H.shell(root, { title: "墨蓝对话" });
    var log = H.el("div");
    log.style.margin = "16px";
    ui.body.append(log);
    var n = 0;
    var lines = ["我在看会议记录", "抽出了 3 个待办", "要现在写进笔记吗？"];
    function play() {
      n = 0;
      log.replaceChildren();
      function push() {
        log.append(H.el("p", null, lines[n]));
        n += 1;
        if (n < lines.length && !H.reduced()) setTimeout(push, 350);
        if (H.reduced() && n < lines.length) { while (n < lines.length) { log.append(H.el("p", null, lines[n])); n += 1; } }
      }
      push();
    }
    ui.reset.addEventListener("click", play);
    H.expose("kokonut-ai-loading", "chat-status-lines", { trigger: play, read: function () { return n; } });
    play();
  };

  S["kokonut-ai-text-loading"] = function (root) {
    var ui = H.shell(root, { title: "思考态" });
    var word = H.el("p", null, "整理");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var words = ["整理", "归纳", "写回"];
    var i = 0;
    function play() { i = (i + 1) % words.length; word.textContent = words[i]; }
    ui.reset.addEventListener("click", function () { i = 0; word.textContent = words[0]; });
    H.expose("kokonut-ai-text-loading", "word-replace", { trigger: play, read: function () { return i; } });
  };

  S["rb-status-mark"] = function (root) {
    var ui = H.shell(root, { title: "状态环" });
    var mark = H.el("div", null, "○");
    mark.style.cssText = "margin:24px;width:64px;height:64px;border:3px solid #241c16;border-radius:50%;display:grid;place-items:center;font-size:1.4rem";
    ui.body.append(mark);
    var phase = 0;
    var glyphs = ["○", "◔", "✔"];
    function play() {
      phase = 0;
      mark.textContent = glyphs[0];
      function next() {
        phase += 1;
        mark.textContent = glyphs[Math.min(phase, 2)];
        if (phase < 2 && !H.reduced()) setTimeout(next, 300);
        if (H.reduced()) { phase = 2; mark.textContent = "✔"; }
      }
      next();
    }
    ui.reset.addEventListener("click", play);
    H.expose("rb-status-mark", "ring-to-check", { trigger: play, read: function () { return phase; } });
    play();
  };

  S["rb-refine-frame"] = function (root) {
    var ui = H.shell(root, { title: "织光画框" });
    var frame = H.el("div");
    frame.style.cssText = "margin:16px;width:160px;aspect-ratio:4/5;background:#ddd";
    var cap = H.el("p", null, "构图");
    ui.body.append(frame, cap);
    var names = ["构图", "上色", "精修"];
    var colors = ["#ddd", "#e7c48a", "#8a3b2c"];
    var phase = 0;
    function paint() { frame.style.background = colors[phase]; cap.textContent = names[phase] + " · 4:5"; }
    function play() {
      phase = 0;
      paint();
      if (H.reduced()) { phase = 2; paint(); return; }
      var timer = setInterval(function () {
        phase += 1;
        paint();
        if (phase >= 2) clearInterval(timer);
      }, 400);
    }
    ui.reset.addEventListener("click", play);
    H.expose("rb-refine-frame", "same-frame-stages", { trigger: play, read: function () { return phase; } });
    play();
  };

  S["rb-thought-line"] = function (root) {
    var ui = H.shell(root, { title: "思考轨迹" });
    var list = H.el("ul");
    ["识别发言人", "抽取待办", "合并重复项"].forEach(function (t) { list.append(H.el("li", null, t)); });
    var folded = H.el("p", null, "");
    folded.hidden = true;
    ui.body.append(list, folded);
    var done = 0;
    var timer = 0;
    function rewind() {
      clearTimeout(timer);
      done = 0;
      list.hidden = false;
      folded.hidden = true;
      folded.textContent = "";
    }
    function play() {
      rewind();
      timer = setTimeout(function () {
        done = 1;
        list.hidden = true;
        folded.hidden = false;
        folded.textContent = "已思考 8 秒 · 生成 3 个任务";
      }, H.reduced() ? 0 : 160);
    }
    ui.reset.addEventListener("click", play);
    H.expose("rb-thought-line", "steps-collapse-to-summary", { trigger: play, reset: rewind, expectAfter: 1, page: ui.page, read: function () { return done; } });
    play();
  };
})();
