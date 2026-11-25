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
  add("dock", "磁吸 Dock", "near", "dock-magnify", function (ui) {
    var icons = ["信", "历", "图"].map(function (text) {
      var b = H.el("span", null, text);
      b.style.cssText = "display:inline-grid;place-items:center;width:32px;height:32px;margin:12px 4px;background:#fffaf4;border-radius:8px";
      return b;
    });
    var row = H.el("div"); icons.forEach(function (b) { row.append(b); }); ui.body.append(row);
    var mode = "even";
    return { play: function () { mode = "near"; icons[1].style.transform = "scale(1.45) translateY(-6px)"; }, reset: function () { mode = "even"; icons.forEach(function (b) { b.style.transform = "none"; }); }, read: function () { return mode; } };
  });
  add("rb-click-spark", "点击火花", "spark", "click-sparks", function (ui) {
    var btn = H.el("button", null, "点一下"); btn.type = "button";
    btn.style.margin = "16px";
    var bits = H.el("div");
    ui.body.append(btn, bits);
    var mode = "idle";
    return { play: function () { mode = "spark"; bits.textContent = "✦ ✦ ✦"; }, reset: function () { mode = "idle"; bits.textContent = ""; }, read: function () { return mode; } };
  });
  add("rb-magnet", "近距磁吸", "pulled", "magnet-offset", function (ui) {
    var node = H.el("div", null, "钮");
    node.style.cssText = "margin:24px;width:36px;height:36px;border-radius:50%;background:#8a3b2c;color:#fff;display:grid;place-items:center";
    ui.body.append(node);
    var mode = "rest";
    return { play: function () { mode = "pulled"; node.style.transform = "translate(18px,8px)"; }, reset: function () { mode = "rest"; node.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-sticker-peel", "撕贴纸", "peeled", "corner-peel", function (ui) {
    var sticker = H.el("div", null, "贴纸");
    sticker.style.cssText = "margin:16px;width:100px;height:70px;background:#e7c48a;transform-origin:left bottom";
    ui.body.append(sticker);
    var mode = "flat";
    return { play: function () { mode = "peeled"; sticker.style.transform = "rotate(-12deg) skewX(-8deg)"; }, reset: function () { mode = "flat"; sticker.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("aceternity-gooey-input", "黏液输入", "focus", "input-goo", function (ui) {
    var input = document.createElement("input");
    input.placeholder = "留言";
    input.style.cssText = "margin:16px;padding:8px;border:0;border-bottom:2px solid #e6d9c8;background:transparent";
    ui.body.append(input);
    var mode = "blur";
    input.addEventListener("focus", function () { mode = "focus"; input.style.borderColor = "#9f2d20"; });
    return { play: function () { mode = "focus"; input.style.borderColor = "#9f2d20"; }, reset: function () { mode = "blur"; input.style.borderColor = "#e6d9c8"; }, read: function () { return mode; } };
  });
  add("vanish-input", "占位消失", "sent", "placeholder-vanish", function (ui) {
    var input = document.createElement("input");
    input.placeholder = "今晚见";
    input.style.cssText = "margin:16px;padding:8px";
    ui.body.append(input);
    var mode = "idle";
    return { play: function () { mode = "sent"; input.placeholder = ""; input.value = ""; }, reset: function () { mode = "idle"; input.placeholder = "今晚见"; }, read: function () { return mode; } };
  });
  add("link-preview", "链接预览卡", "shown", "hover-preview-card", function (ui) {
    var link = H.el("button", null, "南窗书局"); link.type = "button";
    var card = H.el("div", null, "周四 19:30 · 还有席");
    card.hidden = true;
    card.style.cssText = "margin:8px 16px;padding:8px;background:#fffaf4;border:1px solid #e6d9c8";
    ui.body.append(link, card);
    var mode = "hidden";
    return { play: function () { mode = "shown"; card.hidden = false; }, reset: function () { mode = "hidden"; card.hidden = true; }, read: function () { return mode; } };
  });
  add("direction-aware-hover", "方向覆盖", "from-left", "enter-direction", function (ui) {
    var card = H.el("div");
    card.style.cssText = "margin:16px;height:80px;position:relative;overflow:hidden;background:#efe6d8";
    var cover = H.el("div", null, "详情");
    cover.style.cssText = "position:absolute;inset:0;background:#241c16;color:#f6f1e8;display:grid;place-items:center;transform:translateX(-100%)";
    card.append(cover); ui.body.append(card);
    var mode = "closed";
    return { play: function () { mode = "from-left"; cover.style.transform = "none"; }, reset: function () { mode = "closed"; cover.style.transform = "translateX(-100%)"; }, read: function () { return mode; } };
  });
  add("kokonut-tear-button", "撕票", "torn", "tear-ticket", function (ui) {
    var ticket = H.el("div", null, "入场券");
    ticket.style.cssText = "margin:16px;width:140px;padding:10px;background:#fffaf4;border-top:8px dotted #e6d9c8";
    ui.body.append(ticket);
    var mode = "whole";
    return { play: function () { mode = "torn"; ticket.style.borderTop = "0"; ticket.textContent = "已撕下"; }, reset: function () { mode = "whole"; ticket.style.borderTop = "8px dotted #e6d9c8"; ticket.textContent = "入场券"; }, read: function () { return mode; } };
  });
  add("kokonut-undo-button", "撤销倒计时", "undo", "undo-window", function (ui) {
    var bar = H.el("div", null, "已删除 · 撤销");
    bar.hidden = true;
    bar.style.cssText = "margin:12px;padding:8px;background:#241c16;color:#f6f1e8";
    ui.body.append(bar);
    var mode = "idle";
    return { play: function () { mode = "undo"; bar.hidden = false; }, reset: function () { mode = "idle"; bar.hidden = true; }, read: function () { return mode; } };
  });
  add("kokonut-ai-voice", "录音波形", "recording", "voice-bars", function (ui) {
    var bars = [0, 1, 2, 3].map(function () {
      var b = H.el("i");
      b.style.cssText = "display:inline-block;width:6px;height:8px;margin:16px 2px;background:#9f2d20";
      ui.body.append(b); return b;
    });
    var mode = "idle";
    return { play: function () { mode = "recording"; bars.forEach(function (b, i) { b.style.height = (12 + i * 6) + "px"; }); }, reset: function () { mode = "idle"; bars.forEach(function (b) { b.style.height = "8px"; }); }, read: function () { return mode; } };
  });
  add("fancy-elastic-line", "弹簧线", "pulled", "svg-elastic-line", function (ui) {
    ui.body.innerHTML = '<svg viewBox="0 0 220 60" style="margin:12px;width:220px"><path id="line" d="M10 30 H210" fill="none" stroke="#241c16" stroke-width="2"/></svg>';
    var mode = "straight";
    return { play: function () { mode = "pulled"; ui.body.querySelector("#line").setAttribute("d", "M10 30 Q 110 58 210 30"); }, reset: function () { mode = "straight"; ui.body.querySelector("#line").setAttribute("d", "M10 30 H210"); }, read: function () { return mode; } };
  });
  add("rb-curved-input", "弧上输入", "focus", "arc-input", function (ui) {
    var input = document.createElement("input");
    input.placeholder = "弧上的句子";
    input.style.cssText = "margin:20px;padding:8px 12px;border-radius:20px;border:1px solid #241c16";
    ui.body.append(input);
    var mode = "blur";
    return { play: function () { mode = "focus"; input.style.borderColor = "#9f2d20"; input.style.background = "#fffaf4"; }, reset: function () { mode = "blur"; input.style.borderColor = "#241c16"; input.style.background = "transparent"; }, read: function () { return mode; } };
  });
  add("rb-sling-button", "弹射发送", "sent", "sling-send", function (ui) {
    var msg = H.el("p", null, "晚上七点在北岛见");
    msg.style.margin = "12px";
    var status = H.el("p", null, "未发送");
    ui.body.append(msg, status);
    var mode = "draft";
    return { play: function () { mode = "sent"; status.textContent = "已送达"; msg.style.transform = "translateY(-12px)"; }, reset: function () { mode = "draft"; status.textContent = "未发送"; msg.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-spring-check", "弹簧勾选", "checked", "spring-check", function (ui) {
    var box = H.el("button", null, "☐ 记下来");
    box.type = "button";
    box.style.cssText = "margin:16px;min-height:40px;border:0;background:transparent;font-size:1.1rem";
    ui.body.append(box);
    var mode = "off";
    return { play: function () { mode = "checked"; box.textContent = "☑ 记下来"; box.style.transform = "scale(1.05)"; }, reset: function () { mode = "off"; box.textContent = "☐ 记下来"; box.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("rb-squish-switch", "拉长开关", "on", "squish-toggle", function (ui) {
    var track = H.el("button", null, "");
    track.type = "button";
    track.style.cssText = "margin:16px;width:64px;height:32px;border-radius:16px;border:0;background:#e6d9c8;position:relative";
    var thumb = H.el("i");
    thumb.style.cssText = "position:absolute;left:4px;top:4px;width:24px;height:24px;border-radius:50%;background:#fff";
    track.append(thumb); ui.body.append(track);
    var mode = "off";
    return { play: function () { mode = "on"; track.style.background = "#23483a"; thumb.style.left = "36px"; thumb.style.transform = "scaleX(1.25)"; }, reset: function () { mode = "off"; track.style.background = "#e6d9c8"; thumb.style.left = "4px"; thumb.style.transform = "none"; }, read: function () { return mode; } };
  });
  add("aceternity-file-upload", "拖放上传", "dropped", "drop-file", function (ui) {
    var zone = H.el("div", null, "把稿件拖到这里");
    zone.style.cssText = "margin:16px;padding:20px;border:1px dashed #c4b5a4;background:#fffaf4";
    ui.body.append(zone);
    var mode = "empty";
    return { play: function () { mode = "dropped"; zone.textContent = "已收到 稿件.pdf"; zone.style.borderStyle = "solid"; }, reset: function () { mode = "empty"; zone.textContent = "把稿件拖到这里"; zone.style.borderStyle = "dashed"; }, read: function () { return mode; } };
  });
  add("kokonut-attract-button", "铁屑磁场", "aligned", "filings-point", function (ui) {
    var btn = H.el("button", null, "预约"); btn.type = "button";
    var bits = H.el("div", null, "····");
    bits.style.letterSpacing = "6px";
    ui.body.append(bits, btn);
    var mode = "scatter";
    return { play: function () { mode = "aligned"; bits.textContent = "→→→"; }, reset: function () { mode = "scatter"; bits.textContent = "····"; }, read: function () { return mode; } };
  });
  add("kokonut-particle-button", "完成后粒子", "done", "async-burst", function (ui) {
    var btn = H.el("button", null, "提交"); btn.type = "button";
    var note = H.el("p", null, "");
    ui.body.append(btn, note);
    var mode = "idle";
    return { play: function () { mode = "done"; btn.textContent = "已完成"; note.textContent = "✦"; }, reset: function () { mode = "idle"; btn.textContent = "提交"; note.textContent = ""; }, read: function () { return mode; } };
  });
  add("kokonut-cart-button", "原位步进", "stepper", "cart-stepper", function (ui) {
    var btn = H.el("button", null, "加入"); btn.type = "button";
    btn.style.cssText = "margin:16px;min-height:40px";
    ui.body.append(btn);
    var mode = "add";
    return { play: function () { mode = "stepper"; btn.textContent = "− 1 +"; }, reset: function () { mode = "add"; btn.textContent = "加入"; }, read: function () { return mode; } };
  });
  add("animate-input-otp", "验证码格", "filled", "otp-cells", function (ui) {
    var row = H.el("div");
    row.style.cssText = "margin:16px;display:flex;gap:6px";
    var cells = [0, 1, 2, 3].map(function () {
      var c = H.el("div", null, "");
      c.style.cssText = "width:32px;height:40px;border:1px solid #241c16;display:grid;place-items:center";
      row.append(c); return c;
    });
    ui.body.append(row);
    var mode = "empty";
    return { play: function () { mode = "filled"; "4821".split("").forEach(function (ch, i) { cells[i].textContent = ch; }); }, reset: function () { mode = "empty"; cells.forEach(function (c) { c.textContent = ""; }); }, read: function () { return mode; } };
  });
  add("animate-flip-button", "翻面按钮", "back", "button-flip", function (ui) {
    var btn = H.el("button", null, "了解"); btn.type = "button";
    btn.style.cssText = "margin:16px;min-height:44px;min-width:88px";
    ui.body.append(btn);
    var mode = "front";
    return { play: function () { mode = "back"; btn.textContent = "预约"; btn.style.transform = "rotateX(180deg)"; }, reset: function () { mode = "front"; btn.textContent = "了解"; btn.style.transform = "none"; }, read: function () { return mode; } };
  });
})();
