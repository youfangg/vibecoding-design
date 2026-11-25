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

  function raster(ui, formula) {
    var c = document.createElement("canvas");
    c.width = 160;
    c.height = 90;
    c.tabIndex = 0;
    c.style.cssText = "display:block;width:calc(100% - 16px);height:auto;margin:8px;background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var img = ctx.createImageData(160, 90);
    var u = { x: 0.2, y: 0.3, t: 0 };
    function draw() {
      var data = img.data;
      for (var y = 0; y < 90; y++) {
        for (var x = 0; x < 160; x++) {
          var rgb = formula(x, y, u);
          var i = (y * 160 + x) * 4;
          data[i] = rgb[0];
          data[i + 1] = rgb[1];
          data[i + 2] = rgb[2];
          data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }
    function put(px, py) { u.x = px; u.y = py; draw(); }
    c.addEventListener("pointermove", function (event) {
      var r = c.getBoundingClientRect();
      put((event.clientX - r.left) / r.width, (event.clientY - r.top) / r.height);
    });
    c.addEventListener("keydown", function (event) {
      var step = 0.08;
      if (event.key === "ArrowLeft") put(u.x - step, u.y);
      else if (event.key === "ArrowRight") put(u.x + step, u.y);
      else if (event.key === "ArrowUp") put(u.x, u.y - step);
      else if (event.key === "ArrowDown") put(u.x, u.y + step);
      else return;
      event.preventDefault();
    });
    return { u: u, draw: draw };
  }

  function clamp(n) { return n < 0 ? 0 : n > 255 ? 255 : n; }

  add("haoqi", "玻璃与正文", "scrolled", "shared-scroll-refraction", function (ui) {
    var scroller = H.el("div");
    scroller.tabIndex = 0;
    scroller.style.cssText = "margin:8px;height:180px;overflow:auto;background:#f3eee6;position:relative";
    var copy = H.el("div");
    copy.style.cssText = "padding:12px 12px 80px;font-family:serif;font-size:1.2rem;line-height:1.7";
    copy.textContent = "南窗周四朗诵会。把已经排好的诗读出声。第一排靠窗，第二排靠书架。";
    var glass = document.createElement("canvas");
    glass.width = 80;
    glass.height = 48;
    glass.style.cssText = "position:sticky;top:12px;margin-left:12px;width:120px;height:72px;border:1px solid #c4b5a4";
    scroller.append(glass, copy);
    ui.body.append(scroller);
    var g = glass.getContext("2d");
    var y = 0;
    function draw(next) {
      y = next;
      g.clearRect(0, 0, 80, 48);
      for (var i = 0; i < 8; i++) {
        var shift = Math.sin(i + y * 0.08) * 6;
        g.fillStyle = i % 2 ? "#7ea0b8" : "#e7c48a";
        g.fillRect(4 + shift, i * 6, 70, 4);
      }
      copy.style.transform = "translateY(" + (-y * 0.05) + "px)";
    }
    scroller.addEventListener("scroll", function () { draw(scroller.scrollTop); });
    return {
      play: function () { scroller.scrollTop = 64; draw(64); },
      reset: function () { scroller.scrollTop = 0; draw(0); },
      read: function () { return y > 24 ? "scrolled" : "top"; }
    };
  });

  add("rb-silk", "丝绸", "lit", "anisotropic-silk", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var wave = Math.sin(x * 0.09 + y * 0.02 + u.t) * Math.sin(y * 0.18);
      var sheen = Math.pow(Math.max(0, Math.sin(y * 0.22 + u.x * 4)), 8) * 180;
      var base = 70 + wave * 30;
      return [clamp(base + sheen), clamp(base * 0.7 + sheen * 0.6), clamp(base * 0.55)];
    });
    return {
      play: function () { view.u.t = 2.2; view.u.x = 0.7; view.draw(); },
      reset: function () { view.u.t = 0; view.u.x = 0.1; view.draw(); },
      read: function () { return view.u.t > 1 ? "lit" : "dim"; }
    };
  });

  add("rb-aurora", "极光", "risen", "aurora-bands", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var band = Math.sin(x * 0.05 + u.t) + Math.sin(y * 0.08 + Math.sin(x * 0.04 + u.t));
      var v = Math.max(0, 1 - Math.abs(y - 40 - band * 10) / 16);
      return [20, clamp(40 + v * 160), clamp(50 + v * 120 + u.x * 40)];
    });
    return {
      play: function () { view.u.t = 1.6; view.draw(); },
      reset: function () { view.u.t = 0; view.draw(); },
      read: function () { return view.u.t > 1 ? "risen" : "low"; }
    };
  });

  add("rb-hyperspeed", "超空间", "warped", "radial-streaks", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var dx = x - 80;
      var dy = y - 45;
      var r = Math.hypot(dx, dy) + 0.001;
      var streak = Math.pow((Math.sin(r * 0.35 - u.t * 6) * 0.5 + 0.5), 10);
      var v = streak * (0.4 + u.x);
      return [clamp(v * 255), clamp(v * 180), clamp(v * 90)];
    });
    return {
      play: function () { view.u.t = 1.4; view.u.x = 0.9; view.draw(); },
      reset: function () { view.u.t = 0; view.u.x = 0.1; view.draw(); },
      read: function () { return view.u.t > 1 ? "warped" : "idle"; }
    };
  });

  add("aceternity-liquid-glass", "液态玻璃", "bent", "blob-refraction", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var cx = u.x * 160;
      var cy = u.y * 90;
      var dx = x - cx;
      var dy = y - cy;
      var d = Math.hypot(dx, dy);
      var sx = x;
      var sy = y;
      if (d < 26) {
        sx += dx * 0.35;
        sy += dy * 0.35;
      }
      var stripe = Math.floor(sx / 10) % 2 ? 210 : 40;
      var glass = d < 26 ? 30 : 0;
      return [clamp(stripe - glass), clamp(stripe * 0.85), clamp(stripe * 0.7 + glass)];
    });
    return {
      play: function () { view.u.x = 0.62; view.u.y = 0.4; view.draw(); },
      reset: function () { view.u.x = 0.15; view.u.y = 0.2; view.draw(); },
      read: function () { return view.u.x > 0.4 ? "bent" : "aside"; }
    };
  });

  add("rb-holo-card", "全息卡", "flared", "holo-sheen", function (ui) {
    var card = H.el("div", null, "候鸟会员");
    card.tabIndex = 0;
    card.style.cssText = "margin:16px;width:180px;height:110px;display:grid;place-items:center;font-family:serif;color:#241c16;background:linear-gradient(120deg,#e7c48a,#7ea0b8,#c46a4a)";
    ui.body.append(card);
    var angle = 120;
    function set(a) {
      angle = a;
      card.style.background = "linear-gradient(" + a + "deg,#e7c48a,#f6f1e8,#7ea0b8,#c46a4a)";
    }
    card.addEventListener("pointermove", function (event) {
      var r = card.getBoundingClientRect();
      set(80 + (event.clientX - r.left) / r.width * 160);
    });
    return {
      play: function () { set(210); },
      reset: function () { set(120); },
      read: function () { return angle > 180 ? "flared" : "rest"; }
    };
  });

  add("beams-collision", "对撞光束", "hit", "beam-collision", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 160;
    c.tabIndex = 0;
    c.style.cssText = "display:block;width:calc(100% - 16px);margin:8px;background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var t = 0;
    function ends() {
      return [40 + t * 120, 280 - t * 120];
    }
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 160);
      var pair = ends();
      ctx.strokeStyle = "#e7c48a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(20, 40);
      ctx.lineTo(pair[0], 80);
      ctx.moveTo(300, 120);
      ctx.lineTo(pair[1], 80);
      ctx.stroke();
      if (Math.abs(pair[0] - pair[1]) < 28) {
        ctx.fillStyle = "#f6f1e8";
        ctx.beginPath();
        ctx.arc((pair[0] + pair[1]) / 2, 80, 18, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return {
      play: function () { t = 1; draw(); },
      reset: function () { t = 0; draw(); },
      read: function () { return Math.abs(ends()[0] - ends()[1]) < 28 ? "hit" : "apart"; }
    };
  });

  add("aceternity-vortex", "涡流", "stirred", "polar-vortex", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var dx = x - 80;
      var dy = y - 45;
      var r = Math.hypot(dx, dy);
      var a = Math.atan2(dy, dx) + u.t * 2 + r * 0.08;
      var v = Math.sin(a * 3) * 0.5 + 0.5;
      return [clamp(20 + v * 40), clamp(30 + v * 50), clamp(40 + v * 140)];
    });
    return {
      play: function () { view.u.t = 1.2; view.draw(); },
      reset: function () { view.u.t = 0; view.draw(); },
      read: function () { return view.u.t > 0.5 ? "stirred" : "still"; }
    };
  });

  add("gemini-effect", "滚动光场", "spread", "scroll-color-field", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var spread = u.t;
      var d = Math.abs(y - 45) / (8 + spread * 40);
      var hue = x / 160 + spread;
      return [clamp(80 + Math.sin(hue * 6) * 80 * (1 - d)), clamp(60 + Math.sin(hue * 4 + 1) * 70), clamp(90 + Math.sin(hue * 3 + 2) * 80)];
    });
    var range = H.el("input");
    range.type = "range";
    range.min = "0";
    range.max = "100";
    range.style.margin = "0 8px 8px";
    range.addEventListener("input", function () { view.u.t = Number(range.value) / 100; view.draw(); });
    ui.body.append(range);
    return {
      play: function () { view.u.t = 0.85; range.value = "85"; view.draw(); },
      reset: function () { view.u.t = 0; range.value = "0"; view.draw(); },
      read: function () { return view.u.t > 0.5 ? "spread" : "tight"; }
    };
  });

  add("svg-mask-effect", "遮罩揭示", "open", "svg-mask-wipe", function (ui) {
    var wrap = H.el("div");
    wrap.tabIndex = 0;
    wrap.style.cssText = "margin:8px;height:150px;position:relative;background:#241c16";
    wrap.innerHTML = '<svg viewBox="0 0 320 150" width="100%" height="150"><defs><mask id="wipe"><rect width="320" height="150" fill="black"/><circle id="hole" cx="40" cy="75" r="16" fill="white"/></mask></defs><rect width="320" height="150" fill="#e7c48a" mask="url(#wipe)"/><text x="24" y="82" fill="#241c16" font-size="28" font-family="serif" mask="url(#wipe)">白潮新季</text></svg>';
    ui.body.append(wrap);
    var hole = wrap.querySelector("#hole");
    var r = 16;
    function set(cx, radius) {
      r = radius;
      hole.setAttribute("cx", String(cx));
      hole.setAttribute("r", String(radius));
    }
    wrap.addEventListener("pointermove", function (event) {
      var box = wrap.getBoundingClientRect();
      set((event.clientX - box.left) / box.width * 320, 54);
    });
    return {
      play: function () { set(180, 90); },
      reset: function () { set(40, 16); },
      read: function () { return r > 40 ? "open" : "shut"; }
    };
  });

  add("evervault-card", "加密卡", "cleared", "cipher-radius", function (ui) {
    var grid = H.el("div");
    grid.tabIndex = 0;
    grid.style.cssText = "margin:8px;display:grid;grid-template-columns:repeat(12,1fr);gap:2px;width:260px;background:#241c16;padding:8px";
    var cells = [];
    var alphabet = "南窗书局甲乙丙丁戊己";
    for (var i = 0; i < 48; i++) {
      var cell = H.el("span", null, alphabet[i % alphabet.length]);
      cell.style.cssText = "color:#e7c48a;font-size:11px;text-align:center";
      grid.append(cell);
      cells.push(cell);
    }
    ui.body.append(grid);
    var px = 0;
    var py = 0;
    function paint() {
      cells.forEach(function (cell, i) {
        var x = i % 12;
        var y = Math.floor(i / 12);
        var near = Math.hypot(x - px, y - py) < 1.6;
        cell.textContent = near ? "席" : alphabet[i % alphabet.length];
        cell.style.color = near ? "#f6f1e8" : "#e7c48a";
      });
    }
    grid.addEventListener("pointermove", function (event) {
      var box = grid.getBoundingClientRect();
      px = (event.clientX - box.left) / box.width * 12;
      py = (event.clientY - box.top) / box.height * 4;
      paint();
    });
    return {
      play: function () { px = 6; py = 2; paint(); },
      reset: function () { px = 0; py = 0; paint(); },
      read: function () { return px > 3 ? "cleared" : "cipher"; }
    };
  });

  add("cult-fluted-glass", "长槽玻璃", "shifted", "fluted-sample", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var column = Math.floor(x / 6);
      var bend = Math.sin(column + u.x * 6) * 4;
      var src = Math.floor(x + bend);
      var stripe = src % 18 < 9;
      return stripe ? [126, 160, 184] : [231, 196, 138];
    });
    return {
      play: function () { view.u.x = 0.8; view.draw(); },
      reset: function () { view.u.x = 0; view.draw(); },
      read: function () { return view.u.x > 0.4 ? "shifted" : "straight"; }
    };
  });

  add("cult-morph-surface", "变形表面", "morphed", "blob-morph", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 150;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#efe6d8";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var t = 0;
    function draw() {
      ctx.clearRect(0, 0, 320, 150);
      ctx.fillStyle = "#8a3b2c";
      ctx.beginPath();
      for (var a = 0; a <= Math.PI * 2; a += 0.2) {
        var r = 36 + (1 - t) * 16 * Math.sin(a * 3) + t * 22 * Math.sin(a * 5);
        var x = 160 + Math.cos(a) * r;
        var y = 75 + Math.sin(a) * r * 0.72;
        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }
    var btn = H.el("button", null, "换成波纹");
    btn.type = "button";
    btn.style.margin = "0 8px 8px";
    btn.addEventListener("click", function () { t = t > 0.5 ? 0 : 1; draw(); });
    ui.body.append(btn);
    return {
      play: function () { t = 1; draw(); },
      reset: function () { t = 0; draw(); },
      read: function () { return t > 0.5 ? "morphed" : "rest"; }
    };
  });

  add("bayer-dithering", "拜耳网点", "dithered", "bayer-matrix", function (ui) {
    var matrix = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    var view = raster(ui, function (x, y, u) {
      var shade = (Math.sin(x * 0.08) * 0.5 + 0.5) * (0.35 + y / 140);
      if (u.t < 1) {
        var gray = shade * 220;
        return [gray, gray * 0.92, gray * 0.8];
      }
      var on = shade > matrix[(y % 4) * 4 + (x % 4)] / 16;
      return on ? [36, 28, 22] : [246, 241, 232];
    });
    return {
      play: function () { view.u.t = 1; view.draw(); },
      reset: function () { view.u.t = 0; view.draw(); },
      read: function () { return view.u.t >= 1 ? "dithered" : "plain"; }
    };
  });

  add("ps1-jitter-shader", "顶点抖动", "snapped", "affine-vertex-snap", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 160;
    c.tabIndex = 0;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var snap = 8;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 160);
      var pts = [[70, 40], [250, 50], [230, 130], [80, 120]].map(function (p) {
        return [Math.round(p[0] / snap) * snap, Math.round(p[1] / snap) * snap];
      });
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      pts.slice(1).forEach(function (p) { ctx.lineTo(p[0], p[1]); });
      ctx.closePath();
      ctx.fillStyle = "#c46a4a";
      ctx.fill();
      ctx.strokeStyle = "#e7c48a";
      ctx.stroke();
    }
    return {
      play: function () { snap = 16; draw(); },
      reset: function () { snap = 4; draw(); },
      read: function () { return snap > 8 ? "snapped" : "fine"; }
    };
  });

  add("scan-effect", "深度扫描", "sliced", "heightfield-scan", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var h = Math.sin(x * 0.12) * Math.cos(y * 0.1);
      var scan = u.y * 90;
      var revealed = y < scan - h * 8;
      return revealed ? [196, 106, 74] : [36, 28, 22];
    });
    return {
      play: function () { view.u.y = 0.72; view.draw(); },
      reset: function () { view.u.y = 0.08; view.draw(); },
      read: function () { return view.u.y > 0.4 ? "sliced" : "dark"; }
    };
  });

  add("shader-animation-gsap", "点击涟漪", "rippled", "gsap-shader-timeline", function (ui) {
    var note = H.el("p", null, "示例数据 · 白潮封面。GSAP 时间轴推动着色器的时间与中心，海面从点击处漾开。");
    note.style.cssText = "margin:8px 12px 0;font-size:12px;color:#7a6a58";
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 150;
    canvas.tabIndex = 0;
    canvas.style.cssText = "display:block;width:calc(100% - 16px);height:150px;margin:8px;background:#173044";
    var btn = H.el("button", null, "播放封面");
    btn.type = "button";
    btn.style.cssText = "margin:0 12px 8px;min-height:36px";
    ui.body.append(note, canvas, btn);
    var gl = window.GL.context(canvas);
    var poster = document.createElement("canvas");
    poster.width = 320;
    poster.height = 150;
    var ctx = poster.getContext("2d");
    ctx.fillStyle = "#7ea0b8";
    ctx.fillRect(0, 0, 320, 150);
    ctx.fillStyle = "#e7c48a";
    ctx.fillRect(0, 98, 320, 52);
    ctx.fillStyle = "#fffaf4";
    ctx.beginPath();
    ctx.moveTo(36, 98);
    ctx.lineTo(150, 46);
    ctx.lineTo(250, 98);
    ctx.fill();
    ctx.fillStyle = "#241c16";
    ctx.font = "28px serif";
    ctx.fillText("白潮 · 中间季", 24, 36);
    ctx.font = "14px sans-serif";
    ctx.fillText("周四到店 · 海盐白 ¥268", 24, 128);
    var prog = window.GL.program(gl,
      "#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=vec2(aPos.x*0.5+0.5,0.5-aPos.y*0.5);gl_Position=vec4(aPos,0.0,1.0);}",
      "#version 300 es\nprecision mediump float;uniform sampler2D uTex;uniform float uTime;uniform vec2 uCenter;in vec2 vUv;out vec4 o;void main(){vec2 d=vUv-uCenter;float dist=length(d);vec2 off=dist>0.001?normalize(d)*sin(dist*36.0-uTime*6.0)*uTime*0.028:vec2(0.0);vec2 uv=clamp(vUv+off,0.001,0.999);vec4 c=texture(uTex,uv);vec4 a=texture(uTex,clamp(uv+vec2(0.008,0.0)*uTime,0.001,0.999));vec4 b=texture(uTex,clamp(uv-vec2(0.0,0.008)*uTime,0.001,0.999));vec4 blur=mix(c,(a+b)*0.5,clamp(uTime,0.0,1.0));float reveal=smoothstep(0.0,0.25,uTime);o=mix(vec4(0.09,0.14,0.2,1.0),blur,reveal);}"
    );
    var buf = window.GL.quad(gl);
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, poster);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    var proxy = { time: 0 };
    var center = [0.5, 0.48];
    function draw() {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      gl.uniform1f(gl.getUniformLocation(prog, "uTime"), proxy.time);
      gl.uniform2f(gl.getUniformLocation(prog, "uCenter"), center[0], center[1]);
      window.GL.drawQuad(gl, prog, buf);
    }
    function playAt(x, y) {
      center = [x, y];
      if (!window.gsap) {
        proxy.time = 0;
        window.__gsapDriven = "";
        window.__shaderTween = null;
        draw();
        return;
      }
      window.gsap.killTweensOf(proxy);
      if (H.reduced()) {
        proxy.time = 1;
        window.__gsapDriven = "reduced";
        window.__shaderTween = null;
        draw();
        return;
      }
      proxy.time = 0;
      draw();
      window.__gsapDriven = "running";
      window.__shaderTween = window.gsap.to(proxy, {
        time: 1,
        duration: 0.22,
        ease: "power2.out",
        onUpdate: function () {
          window.__gsapDriven = "gsap";
          draw();
        }
      });
    }
    canvas.addEventListener("pointerdown", function (event) {
      var r = canvas.getBoundingClientRect();
      playAt((event.clientX - r.left) / r.width, (event.clientY - r.top) / r.height);
    });
    btn.addEventListener("click", function () { playAt(0.62, 0.42); });
    canvas.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") playAt(0.35, 0.5);
    });
    return {
      play: function () { playAt(0.62, 0.42); },
      reset: function () {
        if (window.gsap) window.gsap.killTweensOf(proxy);
        proxy.time = H.reduced() ? 1 : 0;
        window.__gsapDriven = H.reduced() ? "reduced" : "";
        window.__shaderTween = null;
        draw();
      },
      read: function () {
        var driven = window.__gsapDriven === "gsap" || window.__gsapDriven === "reduced";
        return proxy.time > 0.5 && driven ? "rippled" : "still";
      },
      boot: function () {
        if (window.gsap) window.gsap.killTweensOf(proxy);
        proxy.time = H.reduced() ? 1 : 0;
        window.__gsapDriven = H.reduced() ? "reduced" : "";
        window.__shaderTween = null;
        draw();
      }
    };
  });

  add("grid-to-full-preview", "网格让路", "open", "clip-neighbors", function (ui) {
    var grid = H.el("div");
    grid.style.cssText = "margin:8px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:240px";
    var names = ["龙井", "白茶", "岩茶", "桂花", "冷泡", "牛胸"];
    var cells = names.map(function (name) {
      var cell = H.el("div", null, name);
      cell.style.cssText = "height:48px;display:grid;place-items:center;background:#fffaf4;border:1px solid #e6d9c8";
      grid.append(cell);
      return cell;
    });
    ui.body.append(grid);
    var hot = -1;
    function layout() {
      cells.forEach(function (cell, i) {
        var col = i % 3;
        var hotCol = hot < 0 ? -1 : hot % 3;
        cell.style.transition = H.reduced() ? "none" : "clip-path .3s ease";
        if (hot < 0 || i === hot) cell.style.clipPath = "inset(0)";
        else if (col < hotCol) cell.style.clipPath = "inset(0 35% 0 0)";
        else cell.style.clipPath = "inset(0 0 0 35%)";
        cell.style.background = i === hot ? "#e7c48a" : "#fffaf4";
      });
    }
    cells.forEach(function (cell, i) {
      cell.addEventListener("pointerenter", function () { hot = i; layout(); });
    });
    return {
      play: function () { hot = 4; layout(); },
      reset: function () { hot = -1; layout(); },
      read: function () { return hot === 4 ? "open" : "grid"; }
    };
  });

  add("sdf-lens-blur", "形状模糊", "focused", "sdf-weighted-blur", function (ui) {
    function scene(x, y) {
      var stripe = Math.floor(x / 8) % 2;
      return stripe ? [36, 28, 22] : [231, 196, 138];
    }
    var view = raster(ui, function (x, y, u) {
      var dx = x - u.x * 160;
      var dy = y - u.y * 90;
      var sdf = Math.hypot(dx, dy) - 22;
      if (sdf > 6) return scene(x, y);
      var acc = [0, 0, 0];
      var taps = [[0, 0], [4, 0], [-4, 0], [0, 3], [0, -3]];
      taps.forEach(function (tap) {
        var sample = scene(x + tap[0], y + tap[1]);
        acc[0] += sample[0];
        acc[1] += sample[1];
        acc[2] += sample[2];
      });
      return [acc[0] / 5, acc[1] / 5, acc[2] / 5];
    });
    return {
      play: function () { view.u.x = 0.55; view.u.y = 0.5; view.draw(); },
      reset: function () { view.u.x = 0.1; view.u.y = 0.1; view.draw(); },
      read: function () { return view.u.x > 0.4 ? "focused" : "aside"; }
    };
  });

  add("aceternity-chromatic-image", "色差", "split", "channel-offset", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var shift = (u.x - 0.5) * 16;
      function ink(sx) {
        var nx = Math.max(0, Math.min(159, Math.round(sx)));
        return (nx > 40 && nx < 120 && y > 30 && y < 60) ? 1 : 0;
      }
      return [ink(x - shift) * 180, ink(x) * 140, ink(x + shift) * 160];
    });
    return {
      play: function () { view.u.x = 0.85; view.draw(); },
      reset: function () { view.u.x = 0.5; view.draw(); },
      read: function () { return Math.abs(view.u.x - 0.5) > 0.2 ? "split" : "aligned"; }
    };
  });

  add("rb-dither-veil", "抖动幕", "burned", "dither-reveal", function (ui) {
    var matrix = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    var view = raster(ui, function (x, y, u) {
      var color = [196, 106, 74];
      var dx = x - u.x * 160;
      var dy = y - u.y * 90;
      if (Math.hypot(dx, dy) < 22) return color;
      var shade = 0.35 + y / 200;
      var on = shade * 16 > matrix[(y % 4) * 4 + (x % 4)];
      return on ? [36, 28, 22] : [230, 224, 214];
    });
    return {
      play: function () { view.u.x = 0.5; view.u.y = 0.5; view.draw(); },
      reset: function () { view.u.x = 0; view.u.y = 0; view.draw(); },
      read: function () { return view.u.x > 0.3 ? "burned" : "veiled"; }
    };
  });

  add("rb-electric-border", "电流边", "hot", "edge-discharge", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 150;
    c.tabIndex = 0;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var px = 0.2;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 150);
      ctx.beginPath();
      ctx.rect(40, 30, 240, 90);
      ctx.strokeStyle = "#7ea0b8";
      ctx.stroke();
      var near = Math.abs(px - 0.5);
      var sparks = near < 0.25 ? 8 : 2;
      ctx.strokeStyle = "#e7c48a";
      for (var i = 0; i < sparks; i++) {
        var x = 40 + ((i * 47 + px * 80) % 240);
        ctx.beginPath();
        ctx.moveTo(x, 30);
        ctx.lineTo(x + (i % 2 ? 6 : -6), 18);
        ctx.stroke();
      }
    }
    c.addEventListener("pointermove", function (event) {
      px = (event.clientX - c.getBoundingClientRect().left) / c.getBoundingClientRect().width;
      draw();
    });
    return {
      play: function () { px = 0.5; draw(); },
      reset: function () { px = 0.05; draw(); },
      read: function () { return Math.abs(px - 0.5) < 0.2 ? "hot" : "dim"; }
    };
  });

  add("rb-electric-logo", "闪电字", "arcing", "glyph-arc", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 140;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var on = 0;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 140);
      ctx.fillStyle = "#f6f1e8";
      ctx.font = "48px serif";
      ctx.fillText("南窗", 90, 84);
      if (!on) return;
      ctx.strokeStyle = "#e7c48a";
      ctx.beginPath();
      ctx.moveTo(150, 40);
      ctx.lineTo(168, 58);
      ctx.lineTo(154, 70);
      ctx.lineTo(190, 96);
      ctx.stroke();
    }
    return {
      play: function () { on = 1; draw(); },
      reset: function () { on = 0; draw(); },
      read: function () { return on ? "arcing" : "quiet"; }
    };
  });

  add("rb-metallic-paint", "液态金属", "flowing", "metal-on-glyphs", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 120;
    c.tabIndex = 0;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#241c16";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillStyle = "#fff";
    ctx.fillText("南窗", 70, 84);
    var mask = ctx.getImageData(0, 0, 320, 120);
    var band = 40;
    function draw() {
      var img = ctx.createImageData(320, 120);
      for (var i = 0; i < mask.data.length; i += 4) {
        if (mask.data[i + 3] < 40) continue;
        var x = (i / 4) % 320;
        var shine = Math.max(0, 1 - Math.abs(x - band) / 28);
        img.data[i] = 180 + shine * 70;
        img.data[i + 1] = 180 + shine * 60;
        img.data[i + 2] = 170 + shine * 40;
        img.data[i + 3] = 255;
      }
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 120);
      ctx.putImageData(img, 0, 0);
    }
    c.addEventListener("pointermove", function (event) {
      band = (event.clientX - c.getBoundingClientRect().left) / c.getBoundingClientRect().width * 320;
      draw();
    });
    return {
      play: function () { band = 210; draw(); },
      reset: function () { band = 40; draw(); },
      read: function () { return band > 120 ? "flowing" : "rest"; }
    };
  });

  add("rb-chroma-grid", "回彩网格", "lit", "spotlight-chroma", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 150;
    c.tabIndex = 0;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px)";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var px = 20;
    var py = 20;
    var colors = ["#9f2d20", "#7ea0b8", "#e7c48a", "#23483a", "#c46a4a", "#1d3348"];
    function draw() {
      for (var i = 0; i < 6; i++) {
        var x = (i % 3) * 100 + 16;
        var y = Math.floor(i / 3) * 70 + 10;
        var hit = Math.hypot(px - (x + 40), py - (y + 28)) < 48;
        ctx.fillStyle = hit ? colors[i] : "#b7ab9c";
        ctx.fillRect(x, y, 80, 56);
      }
    }
    c.addEventListener("pointermove", function (event) {
      var r = c.getBoundingClientRect();
      px = (event.clientX - r.left) / r.width * 320;
      py = (event.clientY - r.top) / r.height * 150;
      draw();
    });
    return {
      play: function () { px = 150; py = 40; draw(); },
      reset: function () { px = 10; py = 130; draw(); },
      read: function () { return px > 80 && py < 80 ? "lit" : "gray"; }
    };
  });

  add("rb-decay-card", "溶蚀卡", "torn", "slice-tear", function (ui) {
    var c = document.createElement("canvas");
    c.width = 320;
    c.height = 140;
    c.tabIndex = 0;
    c.style.cssText = "display:block;margin:8px;width:calc(100% - 16px);background:#efe6d8";
    ui.body.append(c);
    var ctx = c.getContext("2d");
    var tear = 0;
    function draw() {
      ctx.fillStyle = "#efe6d8";
      ctx.fillRect(0, 0, 320, 140);
      for (var y = 0; y < 8; y++) {
        var shift = tear * Math.sin(y * 1.7) * 16;
        ctx.fillStyle = y % 2 ? "#c46a4a" : "#e7c48a";
        ctx.fillRect(80 + shift, 20 + y * 12, 140, 11);
      }
    }
    c.addEventListener("pointermove", function () { tear = 1; draw(); });
    c.addEventListener("pointerleave", function () { tear = 0; draw(); });
    return {
      play: function () { tear = 1; draw(); },
      reset: function () { tear = 0; draw(); },
      read: function () { return tear ? "torn" : "whole"; }
    };
  });

  add("rb-fluid-glass", "玻璃体", "placed", "sphere-refraction", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var rd = [(x / 160 - 0.5) * 1.5, (y / 90 - 0.5) * 0.85, 1];
      var len = Math.hypot(rd[0], rd[1], rd[2]);
      rd = [rd[0] / len, rd[1] / len, rd[2] / len];
      var center = [(u.x - 0.5) * 1.1, (u.y - 0.5) * 0.7, 0];
      var oc = [-center[0], -center[1], -2.2 - center[2]];
      var b = oc[0] * rd[0] + oc[1] * rd[1] + oc[2] * rd[2];
      var c = oc[0] * oc[0] + oc[1] * oc[1] + oc[2] * oc[2] - 0.35;
      var disc = b * b - c;
      if (disc < 0) {
        var stripe = Math.floor((x + y) / 8) % 2;
        return stripe ? [126, 160, 184] : [231, 196, 138];
      }
      var t = -b - Math.sqrt(disc);
      var hx = oc[0] + rd[0] * t;
      var hy = oc[1] + rd[1] * t;
      var bend = Math.floor((x + hx * 18) / 8) % 2;
      return bend ? [246, 241, 232] : [36, 52, 72];
    });
    return {
      play: function () { view.u.x = 0.62; view.u.y = 0.48; view.draw(); },
      reset: function () { view.u.x = 0.2; view.u.y = 0.2; view.draw(); },
      read: function () { return view.u.x > 0.4 ? "placed" : "aside"; }
    };
  });

  add("rb-reflective-card", "镜面卡", "tilted", "reflection-vector", function (ui) {
    var card = H.el("div");
    card.tabIndex = 0;
    card.style.cssText = "margin:16px;width:180px;height:110px;border-radius:12px;display:grid;place-items:center;color:#241c16;font-family:serif;background:#d7dde2";
    card.textContent = "云帆通行";
    ui.body.append(card);
    var tilt = 0;
    function set(v) {
      tilt = v;
      var light = 40 + v * 40;
      card.style.background = "linear-gradient(" + (90 + v * 40) + "deg,#f6f1e8 " + light + "%,#7ea0b8)";
      card.style.transform = "perspective(400px) rotateY(" + (v * 18) + "deg)";
    }
    card.addEventListener("pointermove", function (event) {
      var r = card.getBoundingClientRect();
      set((event.clientX - r.left) / r.width * 2 - 1);
    });
    return {
      play: function () { set(0.8); },
      reset: function () { set(0); },
      read: function () { return tilt > 0.4 ? "tilted" : "flat"; }
    };
  });

  add("rb-balatro", "油漆旋涡", "stirred", "quantized-swirl", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var dx = x - 80 - (u.x - 0.5) * 30;
      var dy = y - 45;
      var a = Math.atan2(dy, dx) + u.t * 3;
      var q = Math.floor((a + Math.hypot(dx, dy) * 0.05) * 2);
      var palette = [[36, 28, 22], [159, 45, 32], [231, 196, 138], [126, 160, 184]];
      return palette[Math.abs(q) % 4];
    });
    return {
      play: function () { view.u.t = 1; view.u.x = 0.7; view.draw(); },
      reset: function () { view.u.t = 0; view.u.x = 0.5; view.draw(); },
      read: function () { return view.u.t > 0 ? "stirred" : "still"; }
    };
  });

  add("magic-border-beam", "沿边光", "traveling", "perimeter-beam", function (ui) {
    var card = H.el("div", null, "云帆包月");
    card.style.cssText = "margin:16px;width:180px;height:100px;display:grid;place-items:center;background:#fffaf4;border:1px solid #e6d9c8;position:relative";
    var beam = H.el("i");
    beam.style.cssText = "position:absolute;width:18px;height:3px;background:#9f2d20";
    card.append(beam);
    ui.body.append(card);
    var t = 0;
    function paint() {
      var x = 8;
      var y = 8;
      if (t < 0.25) x = 8 + (180 - 16) * (t / 0.25);
      else if (t < 0.5) { x = 180 - 18; y = 8 + 84 * ((t - 0.25) / 0.25); }
      else if (t < 0.75) { x = 180 - 18 - (180 - 16) * ((t - 0.5) / 0.25); y = 100 - 12; }
      else { x = 8; y = 100 - 12 - 84 * ((t - 0.75) / 0.25); }
      beam.style.left = x + "px";
      beam.style.top = y + "px";
    }
    return {
      play: function () { t = 0.55; paint(); },
      reset: function () { t = 0.02; paint(); },
      read: function () { return t > 0.4 ? "traveling" : "start"; }
    };
  });

  add("aceternity-pixelated-canvas", "像素搅动", "stirred", "block-displace", function (ui) {
    var view = raster(ui, function (x, y, u) {
      var bx = Math.floor(x / 6);
      var by = Math.floor(y / 6);
      var dx = bx - u.x * 26;
      var dy = by - u.y * 15;
      var push = Math.hypot(dx, dy) < 4 ? 2 : 0;
      var src = (Math.floor(x / 6) + push) % 2;
      return src ? [36, 28, 22] : [231, 196, 138];
    });
    return {
      play: function () { view.u.x = 0.5; view.u.y = 0.5; view.draw(); },
      reset: function () { view.u.x = 0; view.u.y = 0; view.draw(); },
      read: function () { return view.u.x > 0.3 ? "stirred" : "still"; }
    };
  });

  add("aceternity-glowing-effect", "轮廓辉光", "along", "contour-glow", function (ui) {
    var card = H.el("div", null, "青浦夜航");
    card.style.cssText = "margin:16px;width:200px;height:90px;border-radius:20px;display:grid;place-items:center;background:#fffaf4;position:relative;overflow:hidden";
    var glow = H.el("i");
    glow.style.cssText = "position:absolute;width:36px;height:10px;border-radius:8px;background:#e7c48a;filter:blur(0)";
    card.append(glow);
    ui.body.append(card);
    var t = 0;
    function paint() {
      glow.style.left = (12 + Math.cos(t) * 70) + "px";
      glow.style.top = (40 + Math.sin(t) * 28) + "px";
    }
    return {
      play: function () { t = 2.2; paint(); },
      reset: function () { t = 0; paint(); },
      read: function () { return t > 1 ? "along" : "origin"; }
    };
  });
})();
