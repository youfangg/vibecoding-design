(function () {
  var S = window.SCENES;
  var H = window.Host;
  function add(id, title, expectAfter, mechanism, setup) {
    S[id] = function (root) {
      var ui = H.shell(root, { title: title, limit: setup.limit });
      var api = setup(ui);
      ui.reset.addEventListener("click", function () {
        if (api.reset) api.reset();
        api.play();
      });
      H.expose(id, mechanism, { trigger: api.play, reset: api.reset || api.play, read: api.read, page: ui.page, expectAfter: expectAfter });
      if (api.boot) api.boot();
    };
  }
  add("circular-gallery", "弧形画廊", "next", "arc-gallery-step", function (ui) {
    var frame = H.el("div", null, "青岛");
    frame.style.cssText = "margin:16px auto;width:120px;height:80px;background:#7ea0b8;display:grid;place-items:center;color:#fff";
    var btn = H.el("button", null, "下一张"); btn.type = "button";
    ui.body.append(frame, btn);
    var names = ["青岛", "大理"]; var i = 0; var mode = "qingdao";
    btn.addEventListener("click", function () { i = 1; mode = "next"; frame.textContent = names[1]; });
    return { play: function () { i = 1; mode = "next"; frame.textContent = "大理"; }, reset: function () { mode = "qingdao"; frame.textContent = "青岛"; }, read: function () { return mode; } };
  });
  add("card-stack", "拖掷卡堆", "thrown", "flick-card", function (ui) {
    var card = H.el("div", null, "名片");
    card.style.cssText = "margin:20px;width:120px;height:80px;background:#fffaf4;border:1px solid #e6d9c8;display:grid;place-items:center";
    ui.body.append(card);
    var mode = "stacked";
    return { play: function () { mode = "thrown"; card.style.transform = "translate(80px,-20px) rotate(12deg)"; card.style.opacity = ".4"; }, reset: function () { mode = "stacked"; card.style.transform = "none"; card.style.opacity = "1"; }, read: function () { return mode; } };
  });
  add("reorder-list", "拖拽重排", "swapped", "reorder", function (ui) {
    var items = ["甲", "乙"];
    var list = H.el("div"); list.style.margin = "12px";
    function paint() { list.replaceChildren(); items.forEach(function (text) { list.append(H.el("div", null, text)); }); }
    paint(); ui.body.append(list);
    var mode = "ab";
    return { play: function () { items = ["乙", "甲"]; mode = "swapped"; paint(); }, reset: function () { items = ["甲", "乙"]; mode = "ab"; paint(); }, read: function () { return mode; } };
  });
  add("rb-elastic-slider", "弹力滑杆", "pulled", "elastic-range", function (ui) {
    var input = document.createElement("input");
    input.type = "range"; input.min = "0"; input.max = "100"; input.value = "20";
    input.style.cssText = "margin:24px;width:180px";
    ui.body.append(input);
    var mode = "rest";
    input.addEventListener("input", function () { mode = Number(input.value) > 60 ? "pulled" : "rest"; });
    return { play: function () { input.value = "80"; mode = "pulled"; }, reset: function () { input.value = "20"; mode = "rest"; }, read: function () { return mode; } };
  });
  add("rb-lanyard", "挂绳", "pulled", "verlet-lanyard", function (ui) {
    var note = H.el("p", null, "示例数据 · 南窗入场。绳是一串定长约束，证卡拖得动，松手后垂回去。");
    note.style.cssText = "margin:8px 12px 0;font-size:12px;color:#7a6a58";
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 200;
    canvas.tabIndex = 0;
    canvas.style.cssText = "display:block;width:calc(100% - 16px);margin:8px;background:#efe6d8";
    ui.body.append(note, canvas);
    var ctx = canvas.getContext("2d");
    var rest = 12;
    var pts = [];
    function hang() {
      pts = [];
      for (var i = 0; i < 12; i++) pts.push({ x: 160, y: 18 + i * rest, px: 160, py: 18 + i * rest });
    }
    function step(grab) {
      for (var i = 1; i < pts.length; i++) {
        var p = pts[i];
        var vx = (p.x - p.px) * 0.98;
        var vy = (p.y - p.py) * 0.98;
        p.px = p.x;
        p.py = p.y;
        p.x += vx;
        p.y += vy + 0.45;
      }
      if (grab) {
        pts[pts.length - 1].x = grab.x;
        pts[pts.length - 1].y = grab.y;
        pts[pts.length - 1].px = grab.x;
        pts[pts.length - 1].py = grab.y;
      }
      for (var n = 0; n < 8; n++) {
        pts[0].x = 160;
        pts[0].y = 18;
        for (var j = 0; j < pts.length - 1; j++) {
          var a = pts[j];
          var b = pts[j + 1];
          var dx = b.x - a.x;
          var dy = b.y - a.y;
          var dist = Math.hypot(dx, dy) || 1;
          var diff = (dist - rest) / dist;
          var ox = dx * diff * 0.5;
          var oy = dy * diff * 0.5;
          if (j > 0) { a.x += ox; a.y += oy; }
          b.x -= ox;
          b.y -= oy;
        }
      }
    }
    function draw() {
      ctx.clearRect(0, 0, 320, 200);
      ctx.fillStyle = "#d7e4ea";
      ctx.fillRect(0, 0, 320, 36);
      ctx.fillStyle = "#241c16";
      ctx.font = "12px sans-serif";
      ctx.fillText("南窗入场", 12, 22);
      ctx.beginPath();
      pts.forEach(function (p, i) {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.strokeStyle = "#241c16";
      ctx.lineWidth = 2;
      ctx.stroke();
      var end = pts[pts.length - 1];
      ctx.fillStyle = "#e7c48a";
      ctx.fillRect(end.x - 28, end.y - 8, 56, 36);
      ctx.fillStyle = "#241c16";
      ctx.fillText("林夏", end.x - 14, end.y + 8);
      ctx.fillText("嘉宾", end.x - 14, end.y + 22);
    }
    var hold = null;
    function place(event) {
      var r = canvas.getBoundingClientRect();
      hold = {
        x: (event.clientX - r.left) / r.width * 320,
        y: (event.clientY - r.top) / r.height * 200
      };
    }
    canvas.addEventListener("pointerdown", function (event) { place(event); step(hold); draw(); });
    canvas.addEventListener("pointermove", function (event) { if (!hold) return; place(event); step(hold); draw(); });
    canvas.addEventListener("pointerup", function () { hold = null; });
    canvas.addEventListener("keydown", function (event) {
      var end = pts[pts.length - 1];
      var x = end.x;
      var y = end.y;
      if (event.key === "ArrowLeft") x -= 16;
      else if (event.key === "ArrowRight") x += 16;
      else if (event.key === "ArrowUp") y -= 12;
      else if (event.key === "ArrowDown") y += 12;
      else return;
      event.preventDefault();
      for (var i = 0; i < 6; i++) step({ x: x, y: y });
      draw();
    });
    hang();
    draw();
    return {
      play: function () {
        for (var i = 0; i < 16; i++) step({ x: 248, y: 96 });
        hold = null;
        for (var j = 0; j < 10; j++) step(null);
        draw();
      },
      reset: function () { hold = null; hang(); draw(); },
      read: function () { return pts[pts.length - 1].x > 190 ? "pulled" : "hang"; }
    };
  });
  add("aceternity-draggable-card", "自由拖卡", "moved", "free-drag", function (ui) {
    var card = H.el("div", null, "便签");
    card.style.cssText = "margin:16px;width:80px;height:48px;background:#fffaf4;border:1px solid #e6d9c8;display:grid;place-items:center";
    ui.body.append(card);
    var mode = "origin";
    return { play: function () { mode = "moved"; card.style.transform = "translate(48px,16px)"; }, reset: function () { mode = "origin"; card.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("fancy-gravity", "重力掉落", "down", "gravity-drop", function (ui) {
    var ball = H.el("div");
    ball.style.cssText = "margin-left:24px;width:24px;height:24px;border-radius:50%;background:#9f2d20;transform:translateY(0)";
    ui.body.append(ball);
    var mode = "up";
    return { play: function () { mode = "down"; ball.style.transition = H.reduced() ? "none" : "transform .4s cubic-bezier(.3,.8,.4,1)"; ball.style.transform = "translateY(80px)"; }, reset: function () { mode = "up"; ball.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("cult-kanban", "看板拖拽", "done", "kanban-move", function (ui) {
    var cols = H.el("div");
    cols.style.cssText = "margin:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px";
    var todo = H.el("div", null, "待办"); var done = H.el("div", null, "完成");
    todo.style.cssText = done.style.cssText = "min-height:70px;background:#fffaf4;padding:6px";
    var card = H.el("div", null, "写纪要");
    todo.append(card); cols.append(todo, done); ui.body.append(cols);
    var mode = "todo";
    return { play: function () { mode = "done"; done.append(card); }, reset: function () { mode = "todo"; todo.append(card); }, read: function () { return mode; } };
  });
  add("kokonut-wheel-picker", "滚轮", "picked", "wheel-value", function (ui) {
    var values = ["少糖", "标准", "多糖"];
    var label = H.el("div", null, values[0]);
    label.style.cssText = "margin:16px;font-family:serif;font-size:1.4rem";
    var btn = H.el("button", null, "下一项"); btn.type = "button";
    ui.body.append(label, btn);
    var i = 0; var mode = "first";
    btn.addEventListener("click", function () { i = 1; mode = "picked"; label.textContent = values[1]; });
    return { play: function () { i = 1; mode = "picked"; label.textContent = values[1]; }, reset: function () { mode = "first"; label.textContent = values[0]; }, read: function () { return mode; } };
  });
  add("kokonut-hold-button", "长按确认", "held", "hold-fill", function (ui) {
    var btn = H.el("button", null, "按住确认");
    btn.type = "button";
    btn.style.cssText = "margin:20px;min-height:44px;width:140px;background:linear-gradient(90deg,#9f2d20 0,#9f2d20 0,#fffaf4 0)";
    ui.body.append(btn);
    var mode = "idle";
    return { play: function () { mode = "held"; btn.style.background = "#9f2d20"; btn.style.color = "#fff"; btn.textContent = "已确认"; }, reset: function () { mode = "idle"; btn.style.background = "#fffaf4"; btn.style.color = "#241c16"; btn.textContent = "按住确认"; }, read: function () { return mode; } };
  });
  add("rb-morph-slider", "形态滑块", "wide", "slider-morphs-shape", function (ui) {
    var shape = H.el("div");
    shape.style.cssText = "margin:16px;width:40px;height:40px;background:#8a3b2c;border-radius:50%";
    ui.body.append(shape);
    var mode = "dot";
    return { play: function () { mode = "wide"; shape.style.width = "120px"; shape.style.borderRadius = "8px"; }, reset: function () { mode = "dot"; shape.style.width = "40px"; shape.style.borderRadius = "50%"; }, read: function () { return mode; } };
  });
  add("kokonut-pull-cord", "灯绳", "on", "cord-toggle", function (ui) {
    var lamp = H.el("div", null, "灯");
    lamp.style.cssText = "margin:12px;padding:16px;background:#1b1714;color:#3a342c";
    var cord = H.el("button", null, "拉绳"); cord.type = "button";
    ui.body.append(lamp, cord);
    var mode = "off";
    return { play: function () { mode = "on"; lamp.style.background = "#e7c48a"; lamp.style.color = "#241c16"; }, reset: function () { mode = "off"; lamp.style.background = "#1b1714"; lamp.style.color = "#3a342c"; }, read: function () { return mode; } };
  });
  add("rb-infinite-menu", "球面菜单", "item", "sphere-menu-step", function (ui) {
    var tile = H.el("div", null, "茶");
    tile.style.cssText = "margin:20px auto;width:64px;height:64px;background:#e7c48a;display:grid;place-items:center;border-radius:12px";
    ui.body.append(tile);
    var mode = "tea";
    return { play: function () { mode = "item"; tile.textContent = "诗"; tile.style.transform = "rotateY(40deg)"; }, reset: function () { mode = "tea"; tile.textContent = "茶"; tile.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-option-wheel", "弧形选择", "b", "arc-option", function (ui) {
    var label = H.el("div", null, "A 少糖");
    label.style.cssText = "margin:16px;font-family:serif;font-size:1.3rem";
    ui.body.append(label);
    var mode = "a";
    return { play: function () { mode = "b"; label.textContent = "B 标准"; }, reset: function () { mode = "a"; label.textContent = "A 少糖"; }, read: function () { return mode; } };
  });
  add("rb-shredder", "碎纸", "shredded", "shred-strip", function (ui) {
    var mail = H.el("div", null, "中奖通知");
    mail.style.cssText = "margin:12px;padding:8px;background:#fffaf4;border:1px solid #e6d9c8";
    ui.body.append(mail);
    var mode = "whole";
    return { play: function () { mode = "shredded"; mail.textContent = "已删除 · 可撤销"; mail.style.letterSpacing = "0.3em"; mail.style.opacity = ".5"; }, reset: function () { mode = "whole"; mail.textContent = "中奖通知"; mail.style.letterSpacing = "0"; mail.style.opacity = "1"; }, read: function () { return mode; } };
  });
  add("rb-scrub-field", "数值芯片", "scrubbed", "scrub-value", function (ui) {
    var chip = H.el("div", null, "¥36");
    chip.style.cssText = "margin:16px;display:inline-block;padding:8px 12px;background:#fffaf4;border:1px solid #241c16";
    ui.body.append(chip);
    var mode = "base";
    return { play: function () { mode = "scrubbed"; chip.textContent = "¥48"; chip.style.transform = "translateX(12px)"; }, reset: function () { mode = "base"; chip.textContent = "¥36"; chip.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-swipe-row", "滑出行", "open", "swipe-actions", function (ui) {
    var row = H.el("div");
    row.style.cssText = "margin:12px;display:flex;background:#fffaf4";
    var main = H.el("div", null, "桂花拿铁");
    main.style.flex = "1"; main.style.padding = "10px";
    var action = H.el("div", null, "删除");
    action.style.cssText = "width:0;overflow:hidden;background:#9f2d20;color:#fff;display:grid;place-items:center";
    row.append(action, main); ui.body.append(row);
    var mode = "closed";
    return { play: function () { mode = "open"; action.style.width = "56px"; }, reset: function () { mode = "closed"; action.style.width = "0"; }, read: function () { return mode; } };
  });
  add("rb-wake-slider", "尾流滑杆", "woke", "slider-wake", function (ui) {
    var track = H.el("div");
    track.style.cssText = "margin:20px;height:8px;background:#e6d9c8;position:relative";
    var wake = H.el("div");
    wake.style.cssText = "position:absolute;left:0;top:-4px;height:16px;width:0;background:rgba(159,45,32,.35)";
    track.append(wake); ui.body.append(track);
    var mode = "calm";
    return { play: function () { mode = "woke"; wake.style.width = "70%"; }, reset: function () { mode = "calm"; wake.style.width = "0"; }, read: function () { return mode; } };
  });
  add("magic-lens", "透镜", "moved", "lens-position", function (ui) {
    var photo = H.el("div");
    photo.style.cssText = "margin:12px;height:120px;background:#d7c4a2;position:relative";
    var lens = H.el("div");
    lens.style.cssText = "position:absolute;width:48px;height:48px;border-radius:50%;border:2px solid #241c16;left:12px;top:12px;background:rgba(255,250,244,.3)";
    photo.append(lens); ui.body.append(photo);
    var mode = "home";
    return { play: function () { mode = "moved"; lens.style.left = "80px"; lens.style.top = "40px"; }, reset: function () { mode = "home"; lens.style.left = "12px"; lens.style.top = "12px"; }, read: function () { return mode; } };
  });
  add("animate-spring", "弹簧拖拽", "stretched", "spring-offset", function (ui) {
    var bob = H.el("div");
    bob.style.cssText = "margin:8px auto;width:2px;height:40px;background:#241c16";
    var mass = H.el("div", null, "点");
    mass.style.cssText = "margin:0 auto;width:28px;height:28px;border-radius:50%;background:#9f2d20";
    ui.body.append(bob, mass);
    var mode = "rest";
    return { play: function () { mode = "stretched"; bob.style.height = "90px"; }, reset: function () { mode = "rest"; bob.style.height = "40px"; }, read: function () { return mode; } };
  });
})();
