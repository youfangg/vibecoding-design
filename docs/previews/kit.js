/* Shared helpers for in-page recuts. Scenes call PreviewKit; they do not share markup. */
(function () {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(pointer: fine)");

  function reduced() {
    return motion.matches;
  }

  function finePointer() {
    return fine.matches;
  }

  function springLoop(readTarget, write, opts) {
    const keys = opts.keys;
    const stiffness = opts.stiffness;
    const damping = opts.damping;
    const mass = opts.mass || 1;
    const state = {};
    keys.forEach(function (key) {
      state[key] = { x: null, v: 0 };
    });
    let raf = 0;
    let last = 0;
    let primed = false;

    function snapshot(target) {
      keys.forEach(function (key) {
        state[key].x = target[key];
        state[key].v = 0;
      });
      const values = {};
      keys.forEach(function (key) { values[key] = state[key].x; });
      write(values);
    }

    function frame(now) {
      const target = readTarget();
      const dt = Math.min(0.034, last ? (now - last) / 1000 : 0.016);
      last = now;
      let moving = false;
      keys.forEach(function (key) {
        const item = state[key];
        if (item.x == null) item.x = target[key];
        const force = (-stiffness * (item.x - target[key]) - damping * item.v) / mass;
        item.v += force * dt;
        item.x += item.v * dt;
        if (Math.abs(item.v) > 0.6 || Math.abs(item.x - target[key]) > 0.4) moving = true;
        else {
          item.x = target[key];
          item.v = 0;
        }
      });
      const values = {};
      keys.forEach(function (key) { values[key] = state[key].x; });
      write(values);
      if (moving) raf = requestAnimationFrame(frame);
      else raf = 0;
    }

    function kick(snap) {
      const target = readTarget();
      if (!primed || snap || reduced()) {
        snapshot(target);
        primed = true;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        return;
      }
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    }

    return { kick: kick };
  }

  window.PreviewKit = {
    reduced: reduced,
    finePointer: finePointer,
    springLoop: springLoop
  };
})();
