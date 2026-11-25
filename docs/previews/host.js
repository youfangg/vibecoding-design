/* Shared chrome for independently implemented reference scenes. */
(function () {
  function reduced() {
    return Boolean(window.PreviewKit && window.PreviewKit.reduced());
  }

  function shell(root, opts) {
    root.replaceChildren();
    const page = document.createElement("div");
    page.className = "host-page";
    const bar = document.createElement("div");
    bar.className = "host-bar";
    const h = document.createElement("h1");
    h.textContent = opts.title || "";
    const note = document.createElement("p");
    note.className = "host-note";
    note.textContent = "示例数据 · 独立参考实现，不是官方演示的逐像素复刻";
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "host-reset";
    reset.textContent = "重放";
    bar.append(h, note, reset);
    const body = document.createElement("div");
    body.className = "host-body";
    page.append(bar, body);
    if (opts.limit) {
      const lim = document.createElement("p");
      lim.className = "host-limit";
      lim.textContent = opts.limit;
      page.append(lim);
    }
    root.append(page);
    return { body: body, reset: reset, page: page };
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function expose(id, mechanism, api) {
    let plays = 0;
    function run(fn) {
      plays += 1;
      fn();
      return plays;
    }
    function paint() {
      if (api.page) api.page.dataset.state = String(api.read());
    }
    window.__preview = {
      id: id,
      mechanism: mechanism,
      expectAfter: api.expectAfter,
      trigger: function () { const value = run(api.trigger); paint(); return value; },
      reset: function () { const value = run(api.reset || api.trigger); paint(); return value; },
      readRaw: api.read,
      read: function () { return String(api.read()) + "#" + plays; }
    };
    paint();
  }

  window.Host = { reduced: reduced, shell: shell, el: el, expose: expose };
  window.SCENES = window.SCENES || {};
})();
