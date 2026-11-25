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

  function board(ui, w, h) {
    var c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    c.tabIndex = 0;
    c.style.cssText = "display:block;width:calc(100% - 16px);margin:8px;background:#241c16";
    ui.body.append(c);
    return { canvas: c, ctx: c.getContext("2d"), w: w, h: h };
  }

  add("rb-meta-balls", "超球", "merged", "metaball-field", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var split = 1;
    function draw() {
      var img = ctx.createImageData(220, 120);
      var centers = split ? [[60, 60], [160, 60]] : [[100, 60], [120, 60]];
      for (var y = 0; y < 120; y += 2) {
        for (var x = 0; x < 220; x += 2) {
          var field = 0;
          centers.forEach(function (c) {
            var d = Math.hypot(x - c[0], y - c[1]) + 0.5;
            field += 420 / d;
          });
          if (field > 9) {
            for (var oy = 0; oy < 2; oy++) for (var ox = 0; ox < 2; ox++) {
              var i = ((y + oy) * 220 + x + ox) * 4;
              img.data[i] = 231;
              img.data[i + 1] = 196;
              img.data[i + 2] = 138;
              img.data[i + 3] = 255;
            }
          }
        }
      }
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 220, 120);
      ctx.putImageData(img, 0, 0);
    }
    return {
      play: function () { split = 0; draw(); },
      reset: function () { split = 1; draw(); },
      read: function () { return split ? "apart" : "merged"; }
    };
  });

  add("rb-ribbons", "丝带", "curved", "ribbon-strip", function (ui) {
    var view = board(ui, 320, 140);
    var ctx = view.ctx;
    var bend = 0;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 140);
      ctx.beginPath();
      for (var x = 0; x <= 320; x += 8) {
        var y = 70 + Math.sin(x * 0.04 + bend) * 28;
        var nx = -Math.cos(x * 0.04 + bend);
        var ny = 1;
        if (x === 0) ctx.moveTo(x, y + ny * 6);
        else ctx.lineTo(x, y + 6);
      }
      for (var x2 = 320; x2 >= 0; x2 -= 8) ctx.lineTo(x2, 70 + Math.sin(x2 * 0.04 + bend) * 28 - 6);
      ctx.closePath();
      ctx.fillStyle = "#9f2d20";
      ctx.fill();
    }
    return {
      play: function () { bend = 2; draw(); },
      reset: function () { bend = 0; draw(); },
      read: function () { return bend > 1 ? "curved" : "flat"; }
    };
  });

  add("rb-laser-flow", "激光", "fired", "laser-core", function (ui) {
    var view = board(ui, 320, 120);
    var ctx = view.ctx;
    var on = 0;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 320, 120);
      if (!on) return;
      ctx.strokeStyle = "rgba(231,196,138,.35)";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(20, 70);
      ctx.lineTo(300, 40);
      ctx.stroke();
      ctx.strokeStyle = "#f6f1e8";
      ctx.lineWidth = 2;
      ctx.stroke();
      for (var i = 0; i < 8; i++) {
        ctx.fillStyle = "#e7c48a";
        ctx.fillRect(30 + i * 34, 60 - i * 3, 3, 3);
      }
    }
    return {
      play: function () { on = 1; draw(); },
      reset: function () { on = 0; draw(); },
      read: function () { return on ? "fired" : "dark"; }
    };
  });

  add("rb-particles", "粒子场", "pushed", "pointer-repulsion", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var dots = [];
    for (var i = 0; i < 40; i++) dots.push({ x: (i % 8) * 24 + 16, y: Math.floor(i / 8) * 20 + 16, hx: (i % 8) * 24 + 16, hy: Math.floor(i / 8) * 20 + 16 });
    var px = -100;
    var py = -100;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 220, 120);
      dots.forEach(function (d) {
        var dx = d.hx - px;
        var dy = d.hy - py;
        var dist = Math.hypot(dx, dy) || 1;
        var push = dist < 36 ? (36 - dist) / dist : 0;
        d.x = d.hx + dx * push;
        d.y = d.hy + dy * push;
        ctx.fillStyle = "#e7c48a";
        ctx.fillRect(d.x, d.y, 3, 3);
      });
    }
    view.canvas.addEventListener("pointermove", function (event) {
      var r = view.canvas.getBoundingClientRect();
      px = (event.clientX - r.left) / r.width * 220;
      py = (event.clientY - r.top) / r.height * 120;
      draw();
    });
    return {
      play: function () { px = 110; py = 60; draw(); },
      reset: function () { px = -100; py = -100; draw(); },
      read: function () { return px > 0 ? "pushed" : "grid"; }
    };
  });

  add("rb-liquid-ether", "色场", "warped", "domain-warp", function (ui) {
    var view = board(ui, 160, 90);
    var ctx = view.ctx;
    var t = 0;
    function draw() {
      var img = ctx.createImageData(160, 90);
      for (var y = 0; y < 90; y++) {
        for (var x = 0; x < 160; x++) {
          var wx = x + Math.sin(y * 0.08 + t) * 8;
          var wy = y + Math.cos(x * 0.07 + t) * 6;
          var v = Math.sin(wx * 0.1) + Math.cos(wy * 0.12);
          var i = (y * 160 + x) * 4;
          img.data[i] = 40 + v * 40;
          img.data[i + 1] = 70 + v * 50;
          img.data[i + 2] = 90 + v * 30;
          img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }
    return {
      play: function () { t = 2; draw(); },
      reset: function () { t = 0; draw(); },
      read: function () { return t > 1 ? "warped" : "still"; }
    };
  });

  add("rb-plasma", "等离子", "cycling", "plasma-field", function (ui) {
    var view = board(ui, 160, 90);
    var ctx = view.ctx;
    var t = 0;
    function draw() {
      var img = ctx.createImageData(160, 90);
      for (var y = 0; y < 90; y++) {
        for (var x = 0; x < 160; x++) {
          var v = Math.sin(x * 0.08 + t) + Math.sin(y * 0.1) + Math.sin((x + y) * 0.05 + t);
          var i = (y * 160 + x) * 4;
          img.data[i] = 80 + Math.sin(v) * 80;
          img.data[i + 1] = 40 + Math.sin(v + 2) * 40;
          img.data[i + 2] = 90 + Math.sin(v + 4) * 70;
          img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }
    return {
      play: function () { t = 1.7; draw(); },
      reset: function () { t = 0; draw(); },
      read: function () { return t > 1 ? "cycling" : "base"; }
    };
  });

  add("rb-ballpit", "波波池", "dropped", "verlet-balls", function (ui) {
    var view = board(ui, 220, 140);
    var ctx = view.ctx;
    var balls = [];
    for (var i = 0; i < 12; i++) balls.push({ x: 30 + (i % 4) * 28, y: 20 + Math.floor(i / 4) * 16, px: 30 + (i % 4) * 28, py: 20 + Math.floor(i / 4) * 16 });
    var dropped = 0;
    function step() {
      balls.forEach(function (b) {
        var vx = (b.x - b.px) * 0.98;
        var vy = (b.y - b.py) * 0.98 + 0.8;
        b.px = b.x;
        b.py = b.y;
        b.x += vx;
        b.y += vy;
        if (b.y > 124) { b.y = 124; b.py = b.y + vy * 0.4; }
        if (b.x < 10) b.x = 10;
        if (b.x > 210) b.x = 210;
      });
    }
    function draw() {
      ctx.fillStyle = "#1d3348";
      ctx.fillRect(0, 0, 220, 140);
      balls.forEach(function (b, i) {
        ctx.beginPath();
        ctx.fillStyle = ["#e7c48a", "#c46a4a", "#7ea0b8"][i % 3];
        ctx.arc(b.x, b.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    return {
      play: function () {
        for (var n = 0; n < 24; n++) step();
        dropped = 1;
        draw();
      },
      reset: function () {
        balls.forEach(function (b, i) {
          b.x = b.px = 30 + (i % 4) * 28;
          b.y = b.py = 20 + Math.floor(i / 4) * 16;
        });
        dropped = 0;
        draw();
      },
      read: function () { return dropped ? "dropped" : "held"; }
    };
  });

  add("rb-ferrofluid", "磁流体", "spiked", "magnetic-particle-field", function (ui) {
    var note = H.el("p", null, "示例数据 · 北岛实验室。黑墨被磁力场吸向磁铁，尖刺顺着场的方向长出来。");
    note.style.cssText = "margin:8px 12px 0;font-size:12px;color:#7a6a58";
    ui.body.append(note);
    var view = board(ui, 220, 150);
    var ctx = view.ctx;
    var cx = 110;
    var cy = 88;
    var magnet = { x: 110, y: 150 };
    var pts = [];
    function seed() {
      pts = [];
      for (var i = 0; i < 72; i++) {
        var a = i / 72 * Math.PI * 2;
        var r = 6 + (i % 5) * 4;
        pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.72, vx: 0, vy: 0 });
      }
    }
    function step() {
      pts.forEach(function (p, i) {
        var fx = (cx - p.x) * 0.025;
        var fy = (cy - p.y) * 0.025;
        var toMx = magnet.x - p.x;
        var toMy = magnet.y - p.y;
        var md = Math.hypot(toMx, toMy) || 1;
        var radial = Math.hypot(p.x - cx, p.y - cy);
        var facing = toMx * (p.x - cx) + toMy * (p.y - cy);
        var face = facing > 0 ? Math.min(2.2, radial / 16) : 0.12;
        var pull = 180 / (md + 10) * face;
        fx += toMx / md * pull;
        fy += toMy / md * pull;
        for (var j = 0; j < pts.length; j++) {
          if (j === i) continue;
          var q = pts[j];
          var dx = q.x - p.x;
          var dy = q.y - p.y;
          var d = Math.hypot(dx, dy) || 1;
          if (d < 16) {
            fx += dx / d * 0.35;
            fy += dy / d * 0.35;
          }
          if (d < 7) {
            fx -= dx / d * 0.8;
            fy -= dy / d * 0.8;
          }
        }
        p.vx = (p.vx + fx) * 0.72;
        p.vy = (p.vy + fy) * 0.72;
        p.x += p.vx;
        p.y += p.vy;
      });
    }
    function reach() {
      var best = 0;
      pts.forEach(function (p) {
        var along = ((magnet.x - cx) * (p.x - cx) + (magnet.y - cy) * (p.y - cy)) / (Math.hypot(magnet.x - cx, magnet.y - cy) || 1);
        if (along > best) best = along;
      });
      return best;
    }
    function draw() {
      ctx.fillStyle = "#1b1714";
      ctx.fillRect(0, 0, 220, 150);
      ctx.fillStyle = "#e7c48a";
      ctx.fillRect(magnet.x - 7, magnet.y - 7, 14, 14);
      pts.forEach(function (p) {
        ctx.beginPath();
        ctx.fillStyle = "#2a2a2a";
        ctx.arc(p.x, p.y, 5.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    view.canvas.addEventListener("pointermove", function (event) {
      var r = view.canvas.getBoundingClientRect();
      magnet.x = (event.clientX - r.left) / r.width * 220;
      magnet.y = (event.clientY - r.top) / r.height * 150;
      step();
      draw();
    });
    seed();
    draw();
    return {
      play: function () {
        magnet.x = 110;
        magnet.y = 28;
        for (var i = 0; i < 28; i++) step();
        draw();
      },
      reset: function () { magnet.x = 110; magnet.y = 150; seed(); draw(); },
      read: function () { return reach() > 34 ? "spiked" : "round"; }
    };
  });

  add("animata-boids", "鸟群", "flocked", "boids-rules", function (ui) {
    var view = board(ui, 220, 130);
    var ctx = view.ctx;
    var birds = [];
    for (var i = 0; i < 16; i++) birds.push({ x: 20 + (i % 8) * 22, y: 20 + Math.floor(i / 8) * 40, vx: 0.4, vy: 0 });
    var flocked = 0;
    function step() {
      birds.forEach(function (b) {
        var sx = 0, sy = 0, cx = 0, cy = 0, ax = 0, ay = 0, n = 0;
        birds.forEach(function (o) {
          if (o === b) return;
          var d = Math.hypot(o.x - b.x, o.y - b.y);
          if (d < 28) { sx -= o.x - b.x; sy -= o.y - b.y; n++; cx += o.x; cy += o.y; ax += o.vx; ay += o.vy; }
        });
        if (n) {
          b.vx += sx * 0.01 + (cx / n - b.x) * 0.004 + (ax / n - b.vx) * 0.05;
          b.vy += sy * 0.01 + (cy / n - b.y) * 0.004 + (ay / n - b.vy) * 0.05;
        }
        var sp = Math.hypot(b.vx, b.vy) || 1;
        b.vx = b.vx / sp * 1.4;
        b.vy = b.vy / sp * 1.4;
        b.x = (b.x + b.vx + 220) % 220;
        b.y = (b.y + b.vy + 130) % 130;
      });
    }
    function draw() {
      ctx.fillStyle = "#efe6d8";
      ctx.fillRect(0, 0, 220, 130);
      ctx.strokeStyle = "#241c16";
      birds.forEach(function (b) {
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x - b.vx * 4, b.y - b.vy * 4);
        ctx.stroke();
      });
    }
    return {
      play: function () { for (var i = 0; i < 18; i++) step(); flocked = 1; draw(); },
      reset: function () {
        birds.forEach(function (b, i) { b.x = 20 + (i % 8) * 22; b.y = 20 + Math.floor(i / 8) * 40; b.vx = 0.4; b.vy = 0; });
        flocked = 0;
        draw();
      },
      read: function () { return flocked ? "flocked" : "rows"; }
    };
  });

  add("dreamy-particles", "梦境粒子", "gathered", "gpu-advected-particles", function (ui) {
    var note = H.el("p", null, "示例数据 · 回声唱片。封面粒子在显存里平流，光标把它们拢成一团光。");
    note.style.cssText = "margin:8px 12px 0;font-size:12px;color:#7a6a58";
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 160;
    canvas.tabIndex = 0;
    canvas.style.cssText = "display:block;width:calc(100% - 16px);height:160px;margin:8px;background:#102033";
    ui.body.append(note, canvas);
    var gl = window.GL.context(canvas);
    var cols = 32;
    var rows = 16;
    var quad = window.GL.quad(gl);
    function stateTex(fill) {
      var data = new Uint8Array(cols * rows * 4);
      fill(data);
      var tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, cols, rows, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      return { tex: tex, fb: fb, data: data };
    }
    function scatter(data) {
      for (var i = 0; i < cols * rows; i++) {
        data[i * 4] = (i * 37) % 220 + 15;
        data[i * 4 + 1] = (i * 19) % 200 + 20;
        data[i * 4 + 2] = 128;
        data[i * 4 + 3] = 128;
      }
      data[(8 + 8 * cols) * 4] = 210;
      data[(8 + 8 * cols) * 4 + 1] = 140;
    }
    var a = stateTex(scatter);
    var b = stateTex(scatter);
    var current = a;
    var next = b;
    var bloomTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, bloomTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 320, 160, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    var bloomFb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, bloomFb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, bloomTex, 0);
    var update = window.GL.program(gl,
      "#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.0,1.0);}",
      "#version 300 es\nprecision mediump float;uniform sampler2D uState;uniform vec2 uPointer;uniform float uAttract;in vec2 vUv;out vec4 o;void main(){vec4 s=texture(uState,vUv);vec2 pos=s.xy;vec2 vel=s.zw-0.5;vec2 toP=uPointer-pos;vel+=toP*uAttract*0.05;vel+=vec2(-toP.y,toP.x)*uAttract*0.03;vel+=vec2(sin(pos.y*14.0),cos(pos.x*12.0))*0.008;vel*=0.9;pos=clamp(pos+vel,0.02,0.98);o=vec4(pos,vel+0.5);}"
    );
    var points = window.GL.program(gl,
      "#version 300 es\nuniform sampler2D uState;uniform vec2 uSize;void main(){int w=int(uSize.x);int x=gl_VertexID%w;int y=gl_VertexID/w;vec2 uv=(vec2(float(x),float(y))+0.5)/uSize;vec2 pos=texture(uState,uv).xy;gl_Position=vec4(pos*2.0-1.0,0.0,1.0);gl_PointSize=8.0;}",
      "#version 300 es\nprecision mediump float;out vec4 o;void main(){vec2 p=gl_PointCoord*2.0-1.0;float d=dot(p,p);if(d>1.0)discard;o=vec4(0.95,0.82,0.55,exp(-d*2.2)*0.55);}"
    );
    var blit = window.GL.program(gl,
      "#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.0,1.0);}",
      "#version 300 es\nprecision mediump float;uniform sampler2D uTex;in vec2 vUv;out vec4 o;vec3 tap(vec2 d){return texture(uTex,vUv+d).rgb;}void main(){vec2 px=vec2(1.0/320.0,1.0/160.0);vec3 c=tap(vec2(0.0))*0.4;c+=tap(px)*0.15;c+=tap(-px)*0.15;c+=tap(vec2(px.x,-px.y))*0.15;c+=tap(vec2(-px.x,px.y))*0.15;o=vec4(c+vec3(0.07,0.12,0.18),1.0);}"
    );
    var pointer = { x: 0.7, y: 0.4 };
    var attract = 0;
    var vao = gl.createVertexArray();
    function upload(target) {
      scatter(target.data);
      gl.bindTexture(gl.TEXTURE_2D, target.tex);
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, cols, rows, gl.RGBA, gl.UNSIGNED_BYTE, target.data);
    }
    function tick() {
      gl.bindFramebuffer(gl.FRAMEBUFFER, next.fb);
      gl.viewport(0, 0, cols, rows);
      gl.disable(gl.BLEND);
      gl.useProgram(update);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, current.tex);
      gl.uniform1i(gl.getUniformLocation(update, "uState"), 0);
      gl.uniform2f(gl.getUniformLocation(update, "uPointer"), pointer.x, pointer.y);
      gl.uniform1f(gl.getUniformLocation(update, "uAttract"), attract);
      window.GL.drawQuad(gl, update, quad);
      var swap = current;
      current = next;
      next = swap;
    }
    function paint() {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, 320, 160);
      gl.clearColor(0.06, 0.1, 0.16, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.useProgram(points);
      gl.bindVertexArray(vao);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, current.tex);
      gl.uniform1i(gl.getUniformLocation(points, "uState"), 0);
      gl.uniform2f(gl.getUniformLocation(points, "uSize"), cols, rows);
      gl.drawArrays(gl.POINTS, 0, cols * rows);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    }
    function sampleX() {
      var px = new Uint8Array(4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, current.fb);
      gl.readPixels(8, 8, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
      return px[0];
    }
    canvas.addEventListener("pointermove", function (event) {
      var r = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - r.left) / r.width;
      pointer.y = 1 - (event.clientY - r.top) / r.height;
      attract = 0.8;
      tick();
      paint();
    });
    upload(a);
    upload(b);
    paint();
    return {
      play: function () {
        pointer.x = 0.18;
        pointer.y = 0.55;
        attract = 1;
        for (var i = 0; i < 20; i++) tick();
        paint();
      },
      reset: function () {
        attract = 0;
        pointer.x = 0.7;
        upload(a);
        upload(b);
        current = a;
        next = b;
        paint();
      },
      read: function () { return sampleX() < 120 ? "gathered" : "scatter"; }
    };
  });

  add("codrops-adrift", "漂流", "drifted", "flow-advection", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var pts = [];
    for (var i = 0; i < 30; i++) pts.push({ x: 20, y: 10 + i * 3.5 });
    var drifted = 0;
    function step() {
      pts.forEach(function (p) {
        var a = Math.sin(p.y * 0.08) * 1.2;
        p.x += Math.cos(a) * 3;
        p.y += Math.sin(a) * 0.4;
      });
    }
    function draw() {
      ctx.fillStyle = "#d7e4ea";
      ctx.fillRect(0, 0, 220, 120);
      ctx.fillStyle = "#9f2d20";
      pts.forEach(function (p) { ctx.fillRect(p.x, p.y, 3, 3); });
    }
    return {
      play: function () { for (var i = 0; i < 16; i++) step(); drifted = 1; draw(); },
      reset: function () { pts.forEach(function (p, i) { p.x = 20; p.y = 10 + i * 3.5; }); drifted = 0; draw(); },
      read: function () { return drifted ? "drifted" : "source"; }
    };
  });

  add("kokonut-ink", "墨晕", "bloomed", "ink-bloom", function (ui) {
    var view = board(ui, 220, 130);
    var ctx = view.ctx;
    var r = 4;
    function draw() {
      ctx.fillStyle = "#f6f1e8";
      ctx.fillRect(0, 0, 220, 130);
      var g = ctx.createRadialGradient(110, 65, 2, 110, 65, r);
      g.addColorStop(0, "rgba(36,28,22,.9)");
      g.addColorStop(1, "rgba(36,28,22,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(110, 65, r, 0, Math.PI * 2);
      ctx.fill();
    }
    return {
      play: function () { r = 58; draw(); },
      reset: function () { r = 4; draw(); },
      read: function () { return r > 20 ? "bloomed" : "drop"; }
    };
  });

  add("kokonut-caustics", "焦散", "bright", "caustic-lines", function (ui) {
    var view = board(ui, 160, 90);
    var ctx = view.ctx;
    var t = 0;
    function draw() {
      var img = ctx.createImageData(160, 90);
      for (var y = 0; y < 90; y++) {
        for (var x = 0; x < 160; x++) {
          var v = Math.pow(Math.max(0, Math.sin(x * 0.2 + t) * Math.sin(y * 0.25 + t * 0.5)), 6);
          var i = (y * 160 + x) * 4;
          img.data[i] = 20 + v * 220;
          img.data[i + 1] = 40 + v * 180;
          img.data[i + 2] = 60 + v * 80;
          img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }
    return {
      play: function () { t = 1.4; draw(); },
      reset: function () { t = 0; draw(); },
      read: function () { return t > 1 ? "bright" : "dim"; }
    };
  });

  add("kokonut-rain-glass", "雨玻璃", "wet", "sliding-drops", function (ui) {
    var view = board(ui, 180, 140);
    var ctx = view.ctx;
    var drops = [[40, 10], [90, 24], [130, 8]];
    var wet = 0;
    function draw() {
      ctx.fillStyle = "#7ea0b8";
      ctx.fillRect(0, 0, 180, 140);
      ctx.fillStyle = "rgba(246,241,232,.8)";
      drops.forEach(function (d) {
        ctx.beginPath();
        ctx.ellipse(d[0], d[1], 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(d[0] - 1, d[1] - 30, 2, 24);
      });
    }
    return {
      play: function () { drops = [[40, 90], [90, 110], [130, 80]]; wet = 1; draw(); },
      reset: function () { drops = [[40, 10], [90, 24], [130, 8]]; wet = 0; draw(); },
      read: function () { return wet ? "wet" : "dry"; }
    };
  });

  add("magic-cool-mode", "点击粒子", "burst", "click-burst", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var bits = [];
    function draw() {
      ctx.fillStyle = "#fffaf4";
      ctx.fillRect(0, 0, 220, 120);
      ctx.fillStyle = "#9f2d20";
      bits.forEach(function (b) { ctx.fillRect(b.x, b.y, 3, 3); });
    }
    view.canvas.addEventListener("pointerdown", function (event) {
      var r = view.canvas.getBoundingClientRect();
      var x = (event.clientX - r.left) / r.width * 220;
      var y = (event.clientY - r.top) / r.height * 120;
      bits = [];
      for (var i = 0; i < 12; i++) bits.push({ x: x + Math.cos(i) * 16, y: y + Math.sin(i) * 12 + i });
      draw();
    });
    return {
      play: function () {
        bits = [];
        for (var i = 0; i < 12; i++) bits.push({ x: 110 + Math.cos(i) * 18, y: 60 + Math.sin(i) * 14 });
        draw();
      },
      reset: function () { bits = []; draw(); },
      read: function () { return bits.length ? "burst" : "clear"; }
    };
  });

  add("rb-elastic-mesh", "弹性网", "pulled", "spring-mesh", function (ui) {
    var view = board(ui, 220, 140);
    var ctx = view.ctx;
    var cols = 8;
    var rows = 5;
    var nodes = [];
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) nodes.push({ x: 20 + x * 26, y: 16 + y * 26, hx: 20 + x * 26, hy: 16 + y * 26 });
    var pulled = 0;
    function draw() {
      ctx.fillStyle = "#efe6d8";
      ctx.fillRect(0, 0, 220, 140);
      ctx.strokeStyle = "#241c16";
      nodes.forEach(function (n, i) {
        var col = i % cols;
        if (col < cols - 1) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y);
          ctx.stroke();
        }
        if (i + cols < nodes.length) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[i + cols].x, nodes[i + cols].y);
          ctx.stroke();
        }
      });
    }
    function relax() {
      for (var k = 0; k < 6; k++) {
        nodes.forEach(function (n, i) {
          if (pulled && i === 20) return;
          var col = i % cols;
          [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (dir) {
            var nx = col + dir[0];
            var ny = Math.floor(i / cols) + dir[1];
            if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) return;
            var o = nodes[ny * cols + nx];
            var dx = o.x - n.x;
            var dy = o.y - n.y;
            var dist = Math.hypot(dx, dy) || 1;
            var diff = (dist - 26) / dist * 0.2;
            n.x += dx * diff;
            n.y += dy * diff;
          });
        });
      }
    }
    return {
      play: function () {
        pulled = 1;
        nodes[20].y = nodes[20].hy + 36;
        relax();
        draw();
      },
      reset: function () {
        nodes.forEach(function (n) { n.x = n.hx; n.y = n.hy; });
        pulled = 0;
        draw();
      },
      read: function () { return pulled ? "pulled" : "even"; }
    };
  });

  add("magic-glyph-matrix", "字形矩阵", "mutated", "glyph-shuffle", function (ui) {
    var view = board(ui, 220, 110);
    var ctx = view.ctx;
    var glyphs = "南窗茶船夜碟";
    var seed = 1;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 220, 110);
      ctx.fillStyle = "#8fbf7a";
      ctx.font = "14px serif";
      for (var y = 0; y < 5; y++) {
        for (var x = 0; x < 10; x++) {
          var index = (x * 3 + y * 5 + seed) % glyphs.length;
          ctx.fillText(glyphs[index], 8 + x * 20, 22 + y * 18);
        }
      }
    }
    return {
      play: function () { seed = 4; draw(); },
      reset: function () { seed = 1; draw(); },
      read: function () { return seed > 2 ? "mutated" : "base"; }
    };
  });

  add("rb-ripple-distortion", "水面", "rippled", "grid-wave", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var amp = 0;
    function draw() {
      ctx.fillStyle = "#d7e4ea";
      ctx.fillRect(0, 0, 220, 120);
      ctx.strokeStyle = "#1d3348";
      for (var y = 0; y < 6; y++) {
        ctx.beginPath();
        for (var x = 0; x <= 220; x += 10) {
          var dy = Math.sin(x * 0.08 + y) * amp;
          if (x === 0) ctx.moveTo(x, 16 + y * 18 + dy);
          else ctx.lineTo(x, 16 + y * 18 + dy);
        }
        ctx.stroke();
      }
    }
    return {
      play: function () { amp = 8; draw(); },
      reset: function () { amp = 0; draw(); },
      read: function () { return amp > 2 ? "rippled" : "flat"; }
    };
  });

  add("rb-strands", "玻璃丝", "parted", "strands-in-sphere", function (ui) {
    var view = board(ui, 200, 140);
    var ctx = view.ctx;
    var part = 0;
    function draw() {
      ctx.fillStyle = "#1d3348";
      ctx.fillRect(0, 0, 200, 140);
      ctx.beginPath();
      ctx.arc(100, 70, 52, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(246,241,232,.4)";
      ctx.stroke();
      for (var i = 0; i < 7; i++) {
        ctx.beginPath();
        for (var t = 0; t <= 1; t += 0.1) {
          var y = 30 + t * 80;
          var x = 70 + i * 8 + Math.sin(t * 6 + i) * 8;
          if (part && Math.abs(y - 70) < 16) x += (i - 3) * 4;
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = ["#e7c48a", "#f6f1e8", "#7ea0b8"][i % 3];
        ctx.stroke();
      }
    }
    return {
      play: function () { part = 1; draw(); },
      reset: function () { part = 0; draw(); },
      read: function () { return part ? "parted" : "wound"; }
    };
  });

  add("rb-crystalized-ball", "电球", "charged", "cracked-orb", function (ui) {
    var view = board(ui, 200, 140);
    var ctx = view.ctx;
    var on = 0;
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 200, 140);
      ctx.beginPath();
      ctx.arc(100, 70, 40, 0, Math.PI * 2);
      ctx.strokeStyle = "#7ea0b8";
      ctx.stroke();
      if (!on) return;
      ctx.strokeStyle = "#e7c48a";
      ctx.beginPath();
      ctx.moveTo(70, 50);
      ctx.lineTo(90, 70);
      ctx.lineTo(80, 90);
      ctx.moveTo(120, 48);
      ctx.lineTo(110, 74);
      ctx.lineTo(130, 96);
      ctx.stroke();
      ctx.fillStyle = "#f6f1e8";
      [[88, 60], [112, 80], [96, 92]].forEach(function (p) { ctx.fillRect(p[0], p[1], 2, 2); });
    }
    return {
      play: function () { on = 1; draw(); },
      reset: function () { on = 0; draw(); },
      read: function () { return on ? "charged" : "clear"; }
    };
  });

  add("rb-lightning", "落雷", "struck", "bolt-to-point", function (ui) {
    var view = board(ui, 220, 140);
    var ctx = view.ctx;
    var hit = null;
    function bolt(x0, y0, x1, y1) {
      var pts = [[x0, y0]];
      var segs = 5;
      for (var i = 1; i < segs; i++) {
        var t = i / segs;
        pts.push([x0 + (x1 - x0) * t + (Math.sin(i * 4.2) * 16), y0 + (y1 - y0) * t]);
      }
      pts.push([x1, y1]);
      ctx.beginPath();
      pts.forEach(function (p, i) { if (i === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]); });
      ctx.stroke();
    }
    function draw() {
      ctx.fillStyle = "#1d3348";
      ctx.fillRect(0, 0, 220, 140);
      if (!hit) return;
      ctx.strokeStyle = "#f6f1e8";
      bolt(110, 8, hit[0], hit[1]);
    }
    view.canvas.addEventListener("pointerdown", function (event) {
      var r = view.canvas.getBoundingClientRect();
      hit = [(event.clientX - r.left) / r.width * 220, (event.clientY - r.top) / r.height * 140];
      draw();
    });
    return {
      play: function () { hit = [160, 110]; draw(); },
      reset: function () { hit = null; draw(); },
      read: function () { return hit ? "struck" : "clear"; }
    };
  });

  add("rb-faulty-terminal", "故障终端", "glitched", "phosphor-grid", function (ui) {
    var view = board(ui, 220, 110);
    var ctx = view.ctx;
    var glitch = 0;
    function draw() {
      ctx.fillStyle = "#10160f";
      ctx.fillRect(0, 0, 220, 110);
      ctx.font = "12px serif";
      for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 16; x++) {
          var hot = glitch && x > 6 && x < 11 && y > 1 && y < 4;
          ctx.fillStyle = hot ? "#f6f1e8" : "#6f8f5a";
          ctx.fillText(hot ? "█" : "南", 6 + x * 13, 18 + y * 16);
        }
      }
    }
    return {
      play: function () { glitch = 1; draw(); },
      reset: function () { glitch = 0; draw(); },
      read: function () { return glitch ? "glitched" : "idle"; }
    };
  });

  add("rb-threads", "让路的丝", "parted", "threads-avoid", function (ui) {
    var view = board(ui, 220, 120);
    var ctx = view.ctx;
    var px = -1;
    function draw() {
      ctx.fillStyle = "#f6f1e8";
      ctx.fillRect(0, 0, 220, 120);
      ctx.strokeStyle = "#8a3b2c";
      for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        for (var x = 0; x <= 220; x += 8) {
          var y = 16 + i * 10;
          if (px > 0) y += Math.max(0, 18 - Math.hypot(x - px, y - 60)) * (i < 5 ? -1 : 1) * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }
    view.canvas.addEventListener("pointermove", function (event) {
      px = (event.clientX - view.canvas.getBoundingClientRect().left) / view.canvas.getBoundingClientRect().width * 220;
      draw();
    });
    return {
      play: function () { px = 110; draw(); },
      reset: function () { px = -1; draw(); },
      read: function () { return px > 0 ? "parted" : "even"; }
    };
  });

  add("rb-antigravity", "反重力环", "ring", "cursor-ring", function (ui) {
    var view = board(ui, 220, 130);
    var ctx = view.ctx;
    var mode = "down";
    function draw() {
      ctx.fillStyle = "#241c16";
      ctx.fillRect(0, 0, 220, 130);
      ctx.fillStyle = "#e7c48a";
      for (var i = 0; i < 16; i++) {
        var a = i / 16 * Math.PI * 2;
        var x = mode === "ring" ? 110 + Math.cos(a) * 36 : 20 + (i % 8) * 24;
        var y = mode === "ring" ? 64 + Math.sin(a) * 28 : 100;
        ctx.fillRect(x, y, 3, 3);
      }
    }
    return {
      play: function () { mode = "ring"; draw(); },
      reset: function () { mode = "down"; draw(); },
      read: function () { return mode; }
    };
  });
})();
