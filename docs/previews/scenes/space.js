(function () {
  var S = window.SCENES;
  var H = window.Host;

  function add(id, title, expectAfter, mechanism, setup) {
    S[id] = function (root) {
      var ui = H.shell(root, { title: title });
      var api = setup(ui);
      ui.reset.addEventListener("click", function () { api.reset(); api.play(); });
      H.expose(id, mechanism, {
        trigger: api.play,
        reset: api.reset,
        read: api.read,
        page: ui.page,
        expectAfter: expectAfter
      });
      (api.boot || api.reset)();
    };
  }

  function stage(ui, height) {
    var box = H.el("div");
    box.tabIndex = 0;
    box.style.cssText = "margin:8px;height:" + height + "px;position:relative;overflow:hidden;background:#efe6d8";
    ui.body.append(box);
    return box;
  }

  function sheet(ui, w, h) {
    var c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    c.tabIndex = 0;
    c.style.cssText = "display:block;width:calc(100% - 16px);height:auto;margin:8px;background:#efe6d8";
    ui.body.append(c);
    return c;
  }

  function track(node, move, down) {
    var p = { x: 0.5, y: 0.5 };
    function put(x, y) {
      p.x = Math.max(0, Math.min(1, x));
      p.y = Math.max(0, Math.min(1, y));
      if (move) move(p);
    }
    node.addEventListener("pointermove", function (event) {
      var r = node.getBoundingClientRect();
      put((event.clientX - r.left) / r.width, (event.clientY - r.top) / r.height);
    });
    node.addEventListener("pointerdown", function (event) {
      var r = node.getBoundingClientRect();
      put((event.clientX - r.left) / r.width, (event.clientY - r.top) / r.height);
      if (down) down(p);
    });
    node.addEventListener("keydown", function (event) {
      var step = 0.1;
      if (event.key === "ArrowLeft") put(p.x - step, p.y);
      else if (event.key === "ArrowRight") put(p.x + step, p.y);
      else if (event.key === "ArrowUp") put(p.x, p.y - step);
      else if (event.key === "ArrowDown") put(p.x, p.y + step);
      else if ((event.key === "Enter" || event.key === " ") && down) down(p);
      else return;
      event.preventDefault();
    });
    return p;
  }

  function cube(size, faces, colors) {
    var box = H.el("div");
    box.style.cssText = "width:" + size + "px;height:" + size + "px;position:relative;transform-style:preserve-3d";
    var half = size / 2;
    var maps = [
      "rotateY(0deg) translateZ(" + half + "px)",
      "rotateY(90deg) translateZ(" + half + "px)",
      "rotateY(180deg) translateZ(" + half + "px)",
      "rotateY(-90deg) translateZ(" + half + "px)",
      "rotateX(90deg) translateZ(" + half + "px)",
      "rotateX(-90deg) translateZ(" + half + "px)"
    ];
    faces.forEach(function (text, i) {
      var face = H.el("div", null, text);
      face.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;font-size:12px;backface-visibility:hidden;background:" + colors[i % colors.length];
      face.style.transform = maps[i];
      box.append(face);
      return face;
    });
    return box;
  }

  add("macbook-scroll", "南窗笔记本", "open", "lid-hinge-open", function (ui) {
    var box = stage(ui, 210);
    box.style.perspective = "800px";
    var hinge = H.el("div");
    hinge.style.cssText = "position:absolute;left:50%;bottom:36px;width:200px;height:120px;margin-left:-100px;transform-origin:center bottom;transform-style:preserve-3d";
    var lid = H.el("div", null, "南窗 · 周四朗诵");
    lid.style.cssText = "position:absolute;inset:0;background:#1d3348;color:#f6f1e8;display:grid;place-items:center;font-family:serif;border-radius:8px 8px 0 0";
    var deck = H.el("div");
    deck.style.cssText = "position:absolute;left:50%;bottom:24px;width:220px;height:14px;margin-left:-110px;background:#241c16;border-radius:0 0 10px 10px";
    hinge.append(lid);
    box.append(hinge, deck);
    var open = 0;
    function set(v) {
      open = Math.max(0, Math.min(1, v));
      hinge.style.transition = H.reduced() ? "none" : "transform .4s ease";
      hinge.style.transform = "rotateX(" + (-108 * open) + "deg)";
    }
    box.addEventListener("wheel", function (event) {
      event.preventDefault();
      set(open + (event.deltaY > 0 ? 0.18 : -0.18));
    }, { passive: false });
    box.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp") set(open + 0.25);
      if (event.key === "ArrowDown") set(open - 0.25);
    });
    return { play: function () { set(1); }, reset: function () { set(0); }, read: function () { return open > 0.85 ? "open" : "shut"; } };
  });

  add("ink-games", "传送门卡", "tilted", "portal-card-tilt", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var yaw = 0;
    var pitch = 0;
    var mode = "flat";
    function project(x, y, z) {
      var cy = Math.cos(yaw), sy = Math.sin(yaw);
      var x1 = x * cy - z * sy;
      var z1 = x * sy + z * cy;
      var cx = Math.cos(pitch), sx = Math.sin(pitch);
      var y1 = y * cx - z1 * sx;
      var z2 = y * sx + z1 * cx;
      var f = 260 / (z2 + 3.4);
      return [160 + x1 * f, 100 + y1 * f];
    }
    function quad(pts, color) {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
    function draw() {
      ctx.clearRect(0, 0, 320, 200);
      ctx.fillStyle = "#d7e4ea";
      ctx.fillRect(0, 0, 320, 200);
      var card = [[-1.1, -0.7, 0], [1.1, -0.7, 0], [1.1, 0.7, 0], [-1.1, 0.7, 0]].map(function (p) { return project(p[0], p[1], p[2]); });
      quad(card, "#241c16");
      var portal = [[-0.7, -0.35, 0.02], [0.7, -0.35, 0.02], [0.7, 0.4, 0.02], [-0.7, 0.4, 0.02]].map(function (p) { return project(p[0], p[1], p[2]); });
      quad(portal, "#e7c48a");
      ctx.fillStyle = "#241c16";
      ctx.font = "14px serif";
      var label = project(-0.4, 0.05, 0.04);
      ctx.fillText("候鸟旅馆", label[0], label[1]);
    }
    track(c, function (p) {
      yaw = (p.x - 0.5) * 0.9;
      pitch = (0.5 - p.y) * 0.6;
      mode = Math.abs(yaw) > 0.25 ? "tilted" : "flat";
      draw();
    });
    return {
      play: function () { yaw = 0.55; pitch = -0.2; mode = "tilted"; draw(); },
      reset: function () { yaw = 0; pitch = 0; mode = "flat"; draw(); },
      read: function () { return mode; }
    };
  });

  add("aceternity-3d-marquee", "透视墙", "moving", "perspective-marquee", function (ui) {
    var box = stage(ui, 180);
    box.style.perspective = "600px";
    var rig = H.el("div");
    rig.style.cssText = "position:absolute;inset:20px 0;display:flex;gap:8px;transform:rotateX(22deg) rotateZ(-12deg);transform-style:preserve-3d";
    ["南窗", "白潮", "云帆", "青浦", "织光", "回声"].forEach(function (name, i) {
      var tile = H.el("div", null, name);
      tile.style.cssText = "flex:0 0 72px;height:84px;display:grid;place-items:center;background:#fffaf4;border:1px solid #e6d9c8;font-family:serif;transform:translateZ(" + (i % 2 ? 24 : 0) + "px)";
      rig.append(tile);
    });
    box.append(rig);
    var shift = 0;
    function paint() { rig.style.transform = "translateX(" + (-shift) + "px) rotateX(22deg) rotateZ(-12deg)"; }
    return {
      play: function () { shift = 90; paint(); },
      reset: function () { shift = 0; paint(); },
      read: function () { return shift > 40 ? "moving" : "still"; }
    };
  });

  add("aceternity-3d-pin", "三维图钉", "popped", "pin-pop", function (ui) {
    var box = stage(ui, 180);
    box.style.perspective = "700px";
    var pin = H.el("div", null, "青浦渡口");
    pin.style.cssText = "position:absolute;left:50%;top:54px;width:120px;height:72px;margin-left:-60px;background:#fffaf4;border:1px solid #c4b5a4;display:grid;place-items:center;font-family:serif;transform:translateZ(0)";
    var stem = H.el("div");
    stem.style.cssText = "position:absolute;left:50%;top:126px;width:2px;height:28px;background:#241c16";
    box.append(pin, stem);
    var up = 0;
    function set(v) {
      up = v;
      pin.style.transition = H.reduced() ? "none" : "transform .35s cubic-bezier(.2,1.2,.3,1)";
      pin.style.transform = "translateZ(" + (v * 48) + "px) translateY(" + (-v * 10) + "px)";
    }
    box.addEventListener("pointerenter", function () { set(1); });
    box.addEventListener("pointerleave", function () { set(0); });
    box.addEventListener("focus", function () { set(1); });
    box.addEventListener("blur", function () { set(0); });
    return { play: function () { set(1); }, reset: function () { set(0); }, read: function () { return up ? "popped" : "flat"; } };
  });

  add("rb-cubes", "立方阵列", "turned", "cube-array-spin", function (ui) {
    var box = stage(ui, 160);
    box.style.cssText += ";display:flex;gap:18px;align-items:center;justify-content:center;perspective:500px";
    var nodes = ["茶", "船", "夜"].map(function (text) {
      var wrap = H.el("div");
      wrap.style.cssText = "width:52px;height:52px;transform-style:preserve-3d";
      wrap.append(cube(52, [text, text, text, text, "", ""], ["#e7c48a", "#7ea0b8", "#c46a4a", "#fffaf4", "#efe6d8", "#efe6d8"]));
      box.append(wrap);
      return wrap;
    });
    var turn = 0;
    function paint() {
      nodes.forEach(function (node, i) {
        node.style.transform = "rotateX(" + (turn + i * 12) + "deg) rotateY(" + (turn * 1.3) + "deg)";
      });
    }
    track(box, function (p) { turn = (p.x - 0.5) * 80; paint(); });
    return {
      play: function () { turn = 48; paint(); },
      reset: function () { turn = 0; paint(); },
      read: function () { return Math.abs(turn) > 20 ? "turned" : "rest"; }
    };
  });

  add("rb-depth-carousel", "景深走马灯", "front", "z-carousel", function (ui) {
    var box = stage(ui, 180);
    box.style.perspective = "700px";
    var names = ["龙井", "白茶", "岩茶", "桂花"];
    var cards = names.map(function (name) {
      var card = H.el("div", null, name);
      card.style.cssText = "position:absolute;left:50%;top:36px;width:90px;height:100px;margin-left:-45px;background:#fffaf4;border:1px solid #e6d9c8;display:grid;place-items:center;font-family:serif";
      box.append(card);
      return card;
    });
    var index = 0;
    function layout() {
      cards.forEach(function (card, i) {
        var d = i - index;
        card.style.transition = H.reduced() ? "none" : "transform .35s ease";
        card.style.transform = "translateX(" + (d * 78) + "px) translateZ(" + (-Math.abs(d) * 90) + "px)";
        card.style.zIndex = String(8 - Math.abs(d));
      });
    }
    box.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") index = Math.min(names.length - 1, index + 1);
      if (event.key === "ArrowLeft") index = Math.max(0, index - 1);
      layout();
    });
    var next = H.el("button", null, "下一张");
    next.type = "button";
    next.style.cssText = "position:absolute;right:8px;bottom:8px";
    next.addEventListener("click", function () { index = Math.min(names.length - 1, index + 1); layout(); });
    box.append(next);
    return {
      play: function () { index = 2; layout(); },
      reset: function () { index = 0; layout(); },
      read: function () { return index === 2 ? "front" : "start"; }
    };
  });

  add("rb-flying-posters", "飞行海报", "near", "poster-dolly", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var posters = [
      { z: 1.2, x: -0.4, color: "#7ea0b8", name: "南窗" },
      { z: 2.1, x: 0.5, color: "#e7c48a", name: "白潮" },
      { z: 3.0, x: -0.2, color: "#c46a4a", name: "云帆" }
    ];
    var cam = 0;
    function draw() {
      ctx.fillStyle = "#1d3348";
      ctx.fillRect(0, 0, 320, 200);
      posters.map(function (p) { return { p: p, z: p.z - cam }; }).sort(function (a, b) { return b.z - a.z; }).forEach(function (item) {
        var f = 180 / (item.z + 0.4);
        var w = 70 * f / 80;
        var h = 96 * f / 80;
        var x = 160 + item.p.x * f - w / 2;
        var y = 100 - h / 2;
        ctx.fillStyle = item.p.color;
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = "#241c16";
        ctx.font = "12px serif";
        ctx.fillText(item.p.name, x + 8, y + h / 2);
      });
    }
    return {
      play: function () { cam = 1.05; draw(); },
      reset: function () { cam = 0; draw(); },
      read: function () { return cam > 0.6 ? "near" : "far"; }
    };
  });

  add("github-globe", "航线地球", "spun", "sphere-arcs", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var yaw = 0.4;
    var mode = "front";
    var dots = [];
    for (var lat = -60; lat <= 60; lat += 20) {
      for (var lon = -180; lon < 180; lon += 20) {
        var phi = lat * Math.PI / 180;
        var lam = lon * Math.PI / 180;
        dots.push([Math.cos(phi) * Math.cos(lam), Math.sin(phi), Math.cos(phi) * Math.sin(lam)]);
      }
    }
    function rotate(p) {
      var cy = Math.cos(yaw), sy = Math.sin(yaw);
      return [p[0] * cy + p[2] * sy, p[1], -p[0] * sy + p[2] * cy];
    }
    function project(p) {
      var f = 90 / (2.4 - p[2]);
      return [160 + p[0] * f, 100 - p[1] * f];
    }
    function city(lat, lon) {
      var phi = lat * Math.PI / 180;
      var lam = lon * Math.PI / 180;
      return [Math.cos(phi) * Math.cos(lam), Math.sin(phi), Math.cos(phi) * Math.sin(lam)];
    }
    function draw() {
      ctx.fillStyle = "#d7e4ea";
      ctx.fillRect(0, 0, 320, 200);
      ctx.fillStyle = "#241c16";
      dots.forEach(function (p) {
        var r = rotate(p);
        if (r[2] < -0.15) return;
        var q = project(r);
        ctx.fillRect(q[0], q[1], 2, 2);
      });
      var a = city(31, 121);
      var b = city(48, 2);
      ctx.beginPath();
      for (var t = 0; t <= 1; t += 0.05) {
        var mid = [
          a[0] * (1 - t) + b[0] * t,
          a[1] * (1 - t) + b[1] * t,
          a[2] * (1 - t) + b[2] * t
        ];
        var lift = 1 + Math.sin(t * Math.PI) * 0.35;
        var n = Math.hypot(mid[0], mid[1], mid[2]) || 1;
        var q = project(rotate([mid[0] / n * lift, mid[1] / n * lift, mid[2] / n * lift]));
        if (t === 0) ctx.moveTo(q[0], q[1]);
        else ctx.lineTo(q[0], q[1]);
      }
      ctx.strokeStyle = "#9f2d20";
      ctx.stroke();
    }
    track(c, function (p) { yaw = p.x * 3; mode = "spun"; draw(); });
    return {
      play: function () { yaw = 2.1; mode = "spun"; draw(); },
      reset: function () { yaw = 0.4; mode = "front"; draw(); },
      read: function () { return mode; }
    };
  });

  add("apple-cards-carousel", "大卡片", "expanded", "card-expand", function (ui) {
    var row = H.el("div");
    row.tabIndex = 0;
    row.style.cssText = "margin:8px;display:flex;gap:8px;height:150px";
    var open = -1;
    var cards = ["诗集", "朗诵会", "茶席"].map(function (name, i) {
      var card = H.el("button");
      card.type = "button";
      card.style.cssText = "flex:1;border:0;background:#fffaf4;text-align:left;padding:10px;min-width:0";
      card.append(H.el("strong", null, name));
      var more = H.el("p", null, i === 1 ? "周四 19:30 · 还剩 6 席" : "查看这册");
      more.hidden = true;
      card.append(more);
      card.addEventListener("click", function () { open = open === i ? -1 : i; layout(); });
      row.append(card);
      return { card: card, more: more, i: i };
    });
    ui.body.append(row);
    function layout() {
      cards.forEach(function (item) {
        var on = open === item.i;
        item.card.style.flex = on ? "2.6" : "1";
        item.card.style.background = on ? "#1d3348" : "#fffaf4";
        item.card.style.color = on ? "#f6f1e8" : "#241c16";
        item.more.hidden = !on;
      });
    }
    row.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { open = Math.min(2, (open < 0 ? 0 : open + 1)); layout(); }
      if (event.key === "ArrowLeft") { open = Math.max(0, open - 1); layout(); }
    });
    return {
      play: function () { open = 1; layout(); },
      reset: function () { open = -1; layout(); },
      read: function () { return open === 1 ? "expanded" : "row"; }
    };
  });

  add("wobble-card", "晃动卡", "tilted", "spring-tilt", function (ui) {
    var box = stage(ui, 170);
    box.style.perspective = "600px";
    var card = H.el("div", null, "流光腕表");
    card.style.cssText = "position:absolute;left:50%;top:36px;width:140px;height:90px;margin-left:-70px;background:#fffaf4;border:1px solid #e6d9c8;display:grid;place-items:center;font-family:serif";
    box.append(card);
    var tx = 0;
    var ty = 0;
    var mode = "level";
    function apply() {
      card.style.transform = "rotateX(" + (-ty * 16) + "deg) rotateY(" + (tx * 18) + "deg)";
    }
    track(box, function (p) {
      tx = (p.x - 0.5) * 2;
      ty = (p.y - 0.5) * 2;
      mode = Math.abs(tx) + Math.abs(ty) > 0.4 ? "tilted" : "level";
      apply();
    });
    return {
      play: function () { tx = 0.9; ty = -0.4; mode = "tilted"; apply(); },
      reset: function () { tx = 0; ty = 0; mode = "level"; apply(); },
      read: function () { return mode; }
    };
  });

  add("r3f-carousels", "环绕走马灯", "turned", "ring-carousel", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var names = ["诗集", "岩茶", "夜航", "渡口", "唱片"];
    var spin = 0;
    function draw() {
      ctx.fillStyle = "#f3eee6";
      ctx.fillRect(0, 0, 320, 200);
      var order = names.map(function (name, i) {
        var a = spin + i / names.length * Math.PI * 2;
        var z = Math.cos(a);
        var x = Math.sin(a);
        return { name: name, z: z, x: x };
      }).sort(function (a, b) { return a.z - b.z; });
      order.forEach(function (item) {
        var f = 150 / (2.4 - item.z);
        var w = Math.max(64, 78 * f / 90);
        var h = Math.max(78, 96 * f / 90);
        var x = 160 + item.x * f * 0.85 - w / 2;
        var y = 104 - h / 2;
        ctx.globalAlpha = 0.55 + (item.z + 1) * 0.22;
        ctx.fillStyle = item.z > 0.35 ? "#9f2d20" : "#fffaf4";
        ctx.fillRect(x, y, w, h);
        ctx.globalAlpha = 1;
        ctx.fillStyle = item.z > 0.35 ? "#f6f1e8" : "#241c16";
        ctx.font = Math.max(16, Math.floor(w / 3.2)) + "px serif";
        ctx.fillText(item.name, x + 10, y + h / 2 + 6);
      });
    }
    track(c, function (p) { spin = p.x * Math.PI; draw(); });
    return {
      play: function () { spin = 0.9; draw(); },
      reset: function () { spin = 0; draw(); },
      read: function () { return spin > 0.4 ? "turned" : "front"; }
    };
  });

  add("rb-card-swap", "卡片对换", "back", "flip-swap", function (ui) {
    var box = stage(ui, 170);
    box.style.perspective = "700px";
    var card = H.el("div");
    card.style.cssText = "position:absolute;left:50%;top:28px;width:140px;height:100px;margin-left:-70px;transform-style:preserve-3d";
    var front = H.el("div", null, "霜降");
    var back = H.el("div", null, "墨蓝");
    front.style.cssText = back.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;font-family:serif;font-size:1.3rem;backface-visibility:hidden";
    front.style.background = "#f3eee6";
    back.style.background = "#241c16";
    back.style.color = "#f6f1e8";
    back.style.transform = "rotateY(180deg)";
    card.append(front, back);
    box.append(card);
    var side = 0;
    function paint() {
      card.style.transition = H.reduced() ? "none" : "transform .45s ease";
      card.style.transform = "rotateY(" + (side * 180) + "deg)";
    }
    var btn = H.el("button", null, "对换");
    btn.type = "button";
    btn.style.cssText = "position:absolute;right:8px;bottom:8px";
    btn.addEventListener("click", function () { side = side ? 0 : 1; paint(); });
    box.append(btn);
    return {
      play: function () { side = 1; paint(); },
      reset: function () { side = 0; paint(); },
      read: function () { return side ? "back" : "front"; }
    };
  });

  add("fancy-css-box", "三维包装盒", "turned", "css-cube-drag", function (ui) {
    var box = stage(ui, 180);
    box.style.cssText += ";perspective:600px;display:grid;place-items:center";
    var spin = cube(88, ["南", "窗", "书", "局", "茶", "夜"], ["#fffaf4", "#e7c48a", "#7ea0b8", "#c46a4a", "#f3eee6", "#241c16"]);
    box.append(spin);
    var rx = -18;
    var ry = 28;
    function paint() { spin.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)"; }
    track(box, function (p) { ry = (p.x - 0.5) * 160; rx = (0.5 - p.y) * 80; paint(); });
    return {
      play: function () { rx = 24; ry = 70; paint(); },
      reset: function () { rx = -18; ry = 28; paint(); },
      read: function () { return ry > 50 ? "turned" : "rest"; }
    };
  });

  add("fancy-box-carousel", "盒面走马灯", "side", "cube-face-turn", function (ui) {
    var box = stage(ui, 180);
    box.style.cssText += ";perspective:700px;display:grid;place-items:center";
    var spin = H.el("div");
    spin.style.cssText = "width:100px;height:100px;position:relative;transform-style:preserve-3d";
    ["封面", "目录", "内页", "封底"].forEach(function (text, i) {
      var face = H.el("div", null, text);
      face.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;background:#fffaf4;border:1px solid #e6d9c8;font-family:serif";
      face.style.transform = "rotateY(" + (i * 90) + "deg) translateZ(50px)";
      spin.append(face);
    });
    box.append(spin);
    var face = 0;
    function paint() {
      spin.style.transition = H.reduced() ? "none" : "transform .45s ease";
      spin.style.transform = "rotateY(" + (-face * 90) + "deg)";
    }
    box.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { face = (face + 1) % 4; paint(); }
      if (event.key === "ArrowLeft") { face = (face + 3) % 4; paint(); }
    });
    return {
      play: function () { face = 1; paint(); },
      reset: function () { face = 0; paint(); },
      read: function () { return face === 1 ? "side" : "front"; }
    };
  });

  add("rb-depth-text", "层叠字", "shifted", "extruded-parallax", function (ui) {
    var box = stage(ui, 160);
    box.style.perspective = "500px";
    var stack = H.el("div");
    stack.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;transform-style:preserve-3d";
    var layers = ["#c4b5a4", "#8a3b2c", "#241c16"].map(function (color, i) {
      var t = H.el("div", null, "南窗");
      t.style.cssText = "position:absolute;font-family:serif;font-size:2.4rem;color:" + color;
      stack.append(t);
      return t;
    });
    box.append(stack);
    var mx = 0;
    var my = 0;
    function paint() {
      layers.forEach(function (layer, i) {
        layer.style.transform = "translateZ(" + (i * 16) + "px) translate(" + (mx * i * 8) + "px," + (my * i * 4) + "px)";
      });
    }
    track(box, function (p) { mx = p.x - 0.5; my = p.y - 0.5; paint(); });
    return {
      play: function () { mx = 0.8; my = -0.2; paint(); },
      reset: function () { mx = 0; my = 0; paint(); },
      read: function () { return Math.abs(mx) > 0.4 ? "shifted" : "flat"; }
    };
  });

  add("rb-dome-gallery", "穹顶画廊", "turned", "hemisphere-gallery", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var yaw = 0;
    var tiles = [];
    var names = ["诗", "茶", "船", "夜", "碟", "桥"];
    for (var i = 0; i < 6; i++) {
      var a = (i / 6) * Math.PI * 1.4 - 0.4;
      tiles.push({ a: a, name: names[i], color: ["#7ea0b8", "#e7c48a", "#c46a4a", "#fffaf4", "#9f2d20", "#23483a"][i] });
    }
    function draw() {
      ctx.fillStyle = "#1d3348";
      ctx.fillRect(0, 0, 320, 200);
      tiles.map(function (tile) {
        var ang = tile.a + yaw;
        var x = Math.sin(ang);
        var z = Math.cos(ang);
        var y = 0.15;
        return { tile: tile, x: x, y: y, z: z };
      }).sort(function (a, b) { return a.z - b.z; }).forEach(function (item) {
        if (item.z < -0.2) return;
        var f = 120 / (2.2 - item.z);
        var w = 36 * f / 80;
        var h = 48 * f / 80;
        var px = 160 + item.x * f - w / 2;
        var py = 110 - item.y * f - h / 2;
        ctx.fillStyle = item.tile.color;
        ctx.fillRect(px, py, w, h);
        ctx.fillStyle = "#241c16";
        ctx.fillText(item.tile.name, px + 6, py + h / 2);
      });
    }
    track(c, function (p) { yaw = (p.x - 0.5) * 1.4; draw(); });
    return {
      play: function () { yaw = 0.7; draw(); },
      reset: function () { yaw = 0; draw(); },
      read: function () { return Math.abs(yaw) > 0.3 ? "turned" : "front"; }
    };
  });

  add("rb-model-viewer", "包装模型", "turned", "projected-mesh", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var yaw = 0.5;
    var pitch = 0.35;
    var verts = [
      [-1, -0.6, -0.4], [1, -0.6, -0.4], [1, 0.6, -0.4], [-1, 0.6, -0.4],
      [-1, -0.6, 0.4], [1, -0.6, 0.4], [1, 0.6, 0.4], [-1, 0.6, 0.4]
    ];
    var faces = [
      [0, 1, 2, 3, "#e7c48a"],
      [4, 5, 6, 7, "#7ea0b8"],
      [0, 1, 5, 4, "#c4b5a4"],
      [2, 3, 7, 6, "#fffaf4"],
      [1, 2, 6, 5, "#c46a4a"],
      [0, 3, 7, 4, "#241c16"]
    ];
    function rot(p) {
      var cy = Math.cos(yaw), sy = Math.sin(yaw);
      var x1 = p[0] * cy - p[2] * sy;
      var z1 = p[0] * sy + p[2] * cy;
      var cx = Math.cos(pitch), sx = Math.sin(pitch);
      return [x1, p[1] * cx - z1 * sx, p[1] * sx + z1 * cx];
    }
    function draw() {
      ctx.fillStyle = "#f3eee6";
      ctx.fillRect(0, 0, 320, 200);
      ctx.fillStyle = "rgba(36,28,22,.18)";
      ctx.beginPath();
      ctx.ellipse(160, 162, 54, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      var pts = verts.map(rot);
      faces.map(function (face) {
        var z = 0;
        for (var i = 0; i < 4; i++) z += pts[face[i]][2];
        return { face: face, z: z };
      }).sort(function (a, b) { return a.z - b.z; }).forEach(function (item) {
        ctx.beginPath();
        item.face.slice(0, 4).forEach(function (index, n) {
          var f = 120 / (3 - pts[index][2]);
          var x = 160 + pts[index][0] * f;
          var y = 96 + pts[index][1] * f;
          if (n === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = item.face[4];
        ctx.fill();
        ctx.strokeStyle = "#241c16";
        ctx.stroke();
      });
    }
    track(c, function (p) { yaw = p.x * 4; pitch = 0.2 + p.y; draw(); });
    return {
      play: function () { yaw = 2.2; pitch = 0.5; draw(); },
      reset: function () { yaw = 0.5; pitch = 0.35; draw(); },
      read: function () { return yaw > 1.4 ? "turned" : "rest"; }
    };
  });

  add("aceternity-comet-card", "透视产品卡", "tilted", "product-tilt", function (ui) {
    var box = stage(ui, 180);
    box.style.perspective = "700px";
    var card = H.el("div");
    card.style.cssText = "position:absolute;left:50%;top:24px;width:160px;height:120px;margin-left:-80px;background:linear-gradient(#1d3348,#241c16);color:#f6f1e8;padding:12px;transform-style:preserve-3d";
    card.append(H.el("strong", null, "流光腕表"));
    var sheen = H.el("div");
    sheen.style.cssText = "position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(255,250,244,.45),transparent 70%)";
    card.append(sheen);
    box.append(card);
    var rx = 0;
    var ry = 0;
    function paint() {
      card.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
      sheen.style.transform = "translateX(" + (ry) + "px)";
    }
    track(box, function (p) { ry = (p.x - 0.5) * 24; rx = (0.5 - p.y) * 16; paint(); });
    return {
      play: function () { rx = -10; ry = 16; paint(); },
      reset: function () { rx = 0; ry = 0; paint(); },
      read: function () { return Math.abs(ry) > 8 ? "tilted" : "flat"; }
    };
  });

  add("aceternity-background-cubes-grid", "立方涟漪", "raised", "iso-cube-ripple", function (ui) {
    var c = sheet(ui, 320, 200);
    var ctx = c.getContext("2d");
    var px = 0.2;
    var py = 0.2;
    function iso(x, y, z) {
      return [40 + (x - y) * 18, 40 + (x + y) * 10 - z];
    }
    function poly(pts, color) {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
    function draw() {
      ctx.fillStyle = "#efe6d8";
      ctx.fillRect(0, 0, 320, 200);
      for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 8; x++) {
          var dx = x / 7 - px;
          var dy = y / 5 - py;
          var h = Math.max(0, 28 - Math.hypot(dx, dy) * 70);
          var p0 = iso(x, y, h);
          var p1 = iso(x + 1, y, h);
          var p2 = iso(x + 1, y + 1, h);
          var p3 = iso(x, y + 1, h);
          var b1 = iso(x + 1, y, 0);
          var b2 = iso(x + 1, y + 1, 0);
          var b3 = iso(x, y + 1, 0);
          poly([p1, b1, b2, p2], "#c46a4a");
          poly([p3, b3, b2, p2], "#7ea0b8");
          poly([p0, p1, p2, p3], "#e7c48a");
        }
      }
    }
    track(c, function (p) { px = p.x; py = p.y; draw(); });
    return {
      play: function () { px = 0.5; py = 0.45; draw(); },
      reset: function () { px = 0.05; py = 0.05; draw(); },
      read: function () { return px > 0.3 ? "raised" : "flat"; }
    };
  });

  add("aceternity-parallax-hero-images", "多层英雄图", "shifted", "depth-layers", function (ui) {
    var box = stage(ui, 180);
    var layers = [
      { color: "#7ea0b8", name: "远山", k: 8 },
      { color: "#e7c48a", name: "渡口", k: 18 },
      { color: "#241c16", name: "南窗", k: 32 }
    ].map(function (item) {
      var el = H.el("div", null, item.name);
      el.style.cssText = "position:absolute;left:16px;right:16px;height:36px;display:grid;place-items:center;color:#f6f1e8;background:" + item.color;
      box.append(el);
      return { el: el, k: item.k, top: 0 };
    });
    layers[0].el.style.top = "16px";
    layers[1].el.style.top = "64px";
    layers[2].el.style.top = "112px";
    layers[2].el.style.color = "#f6f1e8";
    var mx = 0;
    function paint() {
      layers.forEach(function (layer) {
        layer.el.style.transform = "translateX(" + (mx * layer.k) + "px)";
      });
    }
    track(box, function (p) { mx = p.x - 0.5; paint(); });
    return {
      play: function () { mx = 0.8; paint(); },
      reset: function () { mx = 0; paint(); },
      read: function () { return Math.abs(mx) > 0.4 ? "shifted" : "center"; }
    };
  });
})();
