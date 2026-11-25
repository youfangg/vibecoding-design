(function () {
  var S = window.SCENES;
  var H = window.Host;

  var LEDE = {
    "physics-about-me": ["青浦人物页", "页首是阿贵的介绍。往下滚动时，名字会落到段落前面。"],
    "rb-ascii-text": ["南窗海报", "远看是「窗」字，走近才看出它由网点排成。"],
    "rb-blur-text": ["周四开门", "门牌先是糊的，字一个个清楚之后才读得到时间。"],
    "rb-falling-text": ["栏目标题", "栏目名从栏外落进版心，停在正文上方。"],
    "rb-glitch-text": ["白潮限量", "这批衬衫只做 200 件，标题在库存旁轻轻错位。"],
    "rb-particle-text": ["散场", "朗诵会结束，标题化成纸屑，仍停在同一行。"],
    "rb-rotating-text": ["场次条", "同一行轮换席位、夜航和周四的安排。"],
    "rb-scroll-float": ["诗集内页", "诗题贴着滚动轻轻浮起，正文还留在原处。"],
    "rb-scroll-velocity": ["航行日志", "滚动越快，航线标题拉得越开。"],
    "rb-shuffle": ["座位牌", "打乱的姓氏停回「林夏」，旁边是二楼靠窗。"],
    "rb-split-flap": ["班次牌", "翻牌停在「青浦 19:30」，下面是剩余席位。"],
    "rb-text-pressure": ["封面压字", "手指按住书名时，字重才顶到最黑。"],
    "rb-true-focus": ["目录", "视线停在当前篇名上，其余篇名退到后面。"],
    "rb-variable-proximity": ["靠窗座位", "光标靠近哪个字，那个字就加重，像在点名。"],
    "magic-morphing-text": ["白潮昼夜", "同一行从白昼换成夜航，字距一起打开。"],
    "magic-video-text": ["灯塔夜", "字里填的是海面的颜色，不是一张空标题。"],
    "magic-text-3d-flip": ["书脊", "正面是书名，翻过去是这一册的篇目。"],
    "fancy-letter-3d-swap": ["换季", "春字翻成夏字，仍留在同一块海报上。"],
    "fancy-scramble-hover": ["店招", "鼠标停上店名时，字母才按顺序排好。"],
    "fancy-text-along-path": ["环湖步道", "路名沿着步道的弧写，不单独飘在空白里。"],
    "fancy-variable-hover": ["字重试样", "同一句诗，停在哪个字上就把那个字加粗。"],
    "aceternity-typewriter": ["朗诵预告", "句子是当场要读的那一行，不是孤立的两个字。"],
    "aceternity-text-generate": ["墨蓝纪要", "会议标题一个字一个字写进笔记标题栏。"],
    "scroll-text-motion": ["章节名", "滚过这一节时，章名才滑进栏宽。"],
    "codrops-3d-text-scroll": ["展览墙", "展题随着滚动转到正面，说明留在墙下。"],
    "letter-shuffle-menu": ["导航", "菜单先是错位的「店书」，点一下才落成「书店」。"],
    "kokonut-spoiler-text": ["书评", "结局先被挡住，点开才是「结局在周四」。"],
    "type-shuffle-animation": ["发车时刻", "站牌先刷乱码，停稳后是 12:04 的班次。"],
    "on-scroll-typography-animations": ["游记首段", "滚到这一段，句子才完成入场。"],
    "line-type-effect": ["一行简介", "这句话属于南窗的开场白，打完才换行。"],
    "on-scroll-svg-filter-text": ["滤镜下的标题", "滚动把标题从扭曲滤镜里拉直。"],
    "terminal-typography-hover": ["票价终端", "停在票价上时，数字才用等宽字重写一遍。"],
    "kokonut-plucked-text": ["琴弦标题", "拨一下，标题像弦一样弹回原位。"],
    "kokonut-cradle-text": ["摇篮曲", "标题左右摇，副题「摇到睡着」留在下面。"],
    "kokonut-shadow-text": ["夜海报", "标题的影子单独移动，正文不跟着跑。"],
    "kokonut-marker-text": ["划重点的诗", "记号笔只涂在这一句的关键词上。"],
    "kokonut-extruded-text": ["门头字", "店名有厚度，光从左侧打过来。"],
    "fancy-media-between-text": ["图文标题", "两个词中间夹着渡口的色块，不是孤零零一个词。"],
    "fancy-breathing-text": ["灯塔", "标题随着呼吸变轻，坐标仍是候鸟旅馆。"],
    "fancy-letter-swap": ["上下册", "上册两个字对调位置，书名还在封面。"],
    "fancy-scramble-in": ["正文入场", "乱码退去之后，留下的是这一段的第一句。"],
    "fancy-scroll-and-swap": ["分章", "从第一章滚到第二章，章名换掉，页边还在。"],
    "magic-dia-text-reveal": ["主题色带", "一条色带扫过「南窗春季」，扫完句子恢复可读。"],
    "aceternity-squiggly-text": ["手写标注", "老师在诗句底下画了一道波浪线。"],
    "aceternity-canvas-text": ["沿路的字", "路名写在步道曲线上，旁边是里程。"],
    "rb-tech-text": ["航线编号", "技术标题是云帆的班次号，不是样品字。"],
    "rb-fold-text": ["折叠海报", "标题折进纸里，打开才看见全名。"],
    "rb-stroke-text": ["线框店名", "先看到描边，填充随后补上。"],
    "rb-echo-text": ["回声", "喊出去的店名在山谷里又出现一次。"],
    "rb-curved-loop": ["环岛线", "站名绕着圈走，圈心里是发车间隔。"],
    "rb-circular-text": ["杯套", "店名绕着杯口写，中间是今日的茶。"],
    "rb-fuzzy-text": ["起雾的窗", "窗上的字先是毛的，擦开才读得见。"],
    "rb-masked-heading": ["遮幅标题", "标题从遮幅里显出来，下面是这一期的目录。"],
    "rb-scrambled-text": ["密码席位", "乱码停成席位号，旁边注明二楼。"],
    "magic-aurora-text": ["夜航标题", "标题上飘着一层极光，句子本身仍可读。"],
    "magic-terminal": ["订座终端", "命令行里是还剩的席位，不是空提示符。"],
    "aceternity-text-hover-effect": ["篇名", "停在篇名上，下划线才长出来。"]
  };

  function add(id, title, expectAfter, mechanism, setup) {
    S[id] = function (root) {
      var ui = H.shell(root, { title: title, limit: setup.limit });
      var copy = LEDE[id];
      if (copy) {
        var kicker = H.el("p", null, "示例数据 · " + copy[0]);
        kicker.style.cssText = "margin:8px 12px 0;color:#7a6a58;font-size:12px";
        var lede = H.el("p", null, copy[1]);
        lede.style.cssText = "margin:2px 12px 0;font-size:13px;line-height:1.55";
        ui.body.append(kicker, lede);
      }
      var api = setup(ui);
      ui.reset.addEventListener("click", function () {
        if (api.reset) api.reset();
        api.play();
      });
      H.expose(id, mechanism, {
        trigger: api.play,
        reset: api.reset || api.play,
        read: api.read,
        page: ui.page,
        expectAfter: expectAfter
      });
      if (api.boot) api.boot();
    };
  }

  function chars(parent, text) {
    var box = H.el("div");
    box.style.cssText = "margin:18px;font-family:serif;font-size:1.8rem;line-height:1.4";
    var nodes = Array.from(text).map(function (ch) {
      var s = H.el("span", null, ch);
      s.style.display = "inline-block";
      box.append(s);
      return s;
    });
    parent.append(box);
    return nodes;
  }

  add("physics-about-me", "关于页碎字", "fallen", "letters-fall-on-scroll", function (ui) {
    var nodes = chars(ui.body, "关于青浦");
    var y = nodes.map(function () { return 0; });
    var v = nodes.map(function () { return 0; });
    var fallen = "rest";
    function tick() {
      var done = true;
      nodes.forEach(function (n, i) {
        v[i] += 0.6;
        y[i] = Math.min(72, y[i] + v[i]);
        if (y[i] >= 72) v[i] *= -0.35;
        if (Math.abs(v[i]) > 0.4) done = false;
        n.style.transform = "translateY(" + y[i] + "px) rotate(" + (y[i] / 8) + "deg)";
      });
      if (!done && !H.reduced()) requestAnimationFrame(tick);
      else fallen = "fallen";
    }
    return {
      play: function () { fallen = "falling"; y = nodes.map(function () { return 0; }); v = nodes.map(function () { return 1 + Math.random(); }); tick(); },
      reset: function () { fallen = "rest"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return fallen === "falling" ? "fallen" : fallen; },
      boot: function () { this.play(); }
    };
  });

  add("rb-ascii-text", "密度大字", "ascii", "ascii-density-glyph", function (ui) {
    var pre = H.el("pre");
    pre.style.cssText = "margin:12px;font-size:10px;line-height:1";
    ui.body.append(pre);
    var mode = "blank";
    var art = ["  ██  ", " █  █ ", " ████ ", " █  █ ", " █  █ "];
    return {
      play: function () { mode = "ascii"; pre.textContent = art.join("\n"); },
      reset: function () { mode = "blank"; pre.textContent = "····"; },
      read: function () { return mode; }
    };
  });

  add("rb-blur-text", "去模糊入场", "sharp", "per-letter-blur", function (ui) {
    var nodes = chars(ui.body, "南窗开门");
    var mode = "blur";
    return {
      play: function () {
        mode = "sharp";
        nodes.forEach(function (n, i) {
          n.style.transition = H.reduced() ? "none" : "filter .4s ease";
          n.style.transitionDelay = H.reduced() ? "0s" : i * 40 + "ms";
          n.style.filter = "none";
        });
      },
      reset: function () { mode = "blur"; nodes.forEach(function (n) { n.style.filter = "blur(6px)"; }); },
      read: function () { return mode; },
      boot: function () { this.reset(); this.play(); }
    };
  });

  add("rb-falling-text", "坠落字母", "landed", "gravity-bounce-letters", function (ui) {
    var nodes = chars(ui.body, "落下");
    var mode = "up";
    return {
      play: function () {
        mode = "landed";
        nodes.forEach(function (n, i) {
          n.style.transition = H.reduced() ? "none" : "transform .5s cubic-bezier(.2,1.4,.4,1)";
          n.style.transitionDelay = i * 50 + "ms";
          n.style.transform = "translateY(48px)";
        });
      },
      reset: function () { mode = "up"; nodes.forEach(function (n) { n.style.transition = "none"; n.style.transform = "translateY(-40px)"; }); },
      read: function () { return mode; }
    };
  });

  add("rb-glitch-text", "故障字", "glitch", "rgb-slice", function (ui) {
    var word = H.el("div", null, "限量 200");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;position:relative";
    ui.body.append(word);
    var mode = "clean";
    return {
      play: function () {
        mode = "glitch";
        word.style.textShadow = "3px 0 #c46a4a, -3px 0 #7ea0b8";
        word.style.clipPath = "inset(20% 0 30% 0)";
      },
      reset: function () { mode = "clean"; word.style.textShadow = "none"; word.style.clipPath = "none"; },
      read: function () { return mode; }
    };
  });

  add("rb-particle-text", "粒子字", "reformed", "letters-to-dots", function (ui) {
    var nodes = chars(ui.body, "散开");
    var mode = "solid";
    return {
      play: function () {
        mode = "reformed";
        nodes.forEach(function (n, i) {
          n.style.transition = H.reduced() ? "none" : "transform .45s ease, opacity .45s";
          n.style.transform = "none";
          n.style.opacity = "1";
          n.style.borderRadius = "0";
        });
      },
      reset: function () {
        mode = "scattered";
        nodes.forEach(function (n, i) {
          n.style.transform = "translate(" + ((i - 1) * 28) + "px, 20px) scale(.4)";
          n.style.opacity = ".4";
        });
      },
      read: function () { return mode; }
    };
  });

  add("rb-rotating-text", "轮换词", "席位", "keyword-cycle", function (ui) {
    var p = H.el("p");
    p.style.cssText = "margin:24px;font-family:serif;font-size:1.4rem";
    ui.body.append(p);
    var words = ["朗诵会", "席位", "夜航"];
    var i = 0;
    function paint() { p.textContent = "周四的" + words[i]; }
    return {
      play: function () { i = (i + 1) % words.length; paint(); },
      reset: function () { i = 0; paint(); },
      read: function () { return words[i]; },
      boot: function () { paint(); }
    };
  });

  add("rb-scroll-float", "滚动错位", "offset", "scroll-letter-offset", function (ui) {
    var scroller = H.el("div");
    scroller.tabIndex = 0;
    scroller.style.cssText = "height:160px;overflow:auto;margin:12px;border:1px solid #e6d9c8";
    var inner = H.el("div");
    inner.style.height = "420px";
    var nodes = chars(inner, "错位字");
    scroller.append(inner);
    ui.body.append(scroller);
    var mode = "flat";
    scroller.addEventListener("scroll", function () {
      mode = "offset";
      nodes.forEach(function (n, i) { n.style.transform = "translateY(" + ((i % 2 ? -1 : 1) * scroller.scrollTop / 8) + "px)"; });
    });
    return {
      play: function () { scroller.scrollTop = 80; mode = "offset"; nodes.forEach(function (n, i) { n.style.transform = "translateY(" + (i % 2 ? -10 : 10) + "px)"; }); },
      reset: function () { scroller.scrollTop = 0; mode = "flat"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("rb-scroll-velocity", "速度字重", "fast", "scroll-velocity-skew", function (ui) {
    var word = H.el("div", null, "加快");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "still";
    return {
      play: function () { mode = "fast"; word.style.transform = H.reduced() ? "none" : "skewX(-18deg) scaleX(1.3)"; word.style.fontWeight = "700"; },
      reset: function () { mode = "still"; word.style.transform = "none"; word.style.fontWeight = "400"; },
      read: function () { return mode; }
    };
  });

  add("rb-shuffle", "洗牌复位", "home", "character-shuffle", function (ui) {
    var nodes = chars(ui.body, "复位");
    var mode = "away";
    return {
      play: function () { mode = "home"; nodes.forEach(function (n) { n.style.transition = H.reduced() ? "none" : "transform .35s ease"; n.style.transform = "none"; }); },
      reset: function () { mode = "away"; nodes.forEach(function (n, i) { n.style.transition = "none"; n.style.transform = "translate(" + (i * 18 - 20) + "px,-16px)"; }); },
      read: function () { return mode; }
    };
  });

  add("rb-split-flap", "翻牌", "flipped", "split-flap", function (ui) {
    var flap = H.el("div", null, "12");
    flap.style.cssText = "margin:24px;width:72px;height:64px;background:#241c16;color:#f6f1e8;display:grid;place-items:center;font-size:1.8rem;transform-origin:center top";
    ui.body.append(flap);
    var mode = "12";
    return {
      play: function () { mode = "flipped"; flap.style.transition = H.reduced() ? "none" : "transform .35s ease"; flap.style.transform = "rotateX(-70deg)"; flap.textContent = "04"; },
      reset: function () { mode = "12"; flap.style.transform = "none"; flap.textContent = "12"; },
      read: function () { return mode; }
    };
  });

  add("rb-text-pressure", "压力变字", "near", "pointer-pressure", function (ui) {
    var word = H.el("div", null, "原野");
    word.tabIndex = 0;
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;font-weight:400";
    ui.body.append(word);
    var mode = "far";
    word.addEventListener("pointermove", function () { mode = "near"; word.style.fontWeight = "800"; word.style.letterSpacing = "0.12em"; });
    return {
      play: function () { mode = "near"; word.style.fontWeight = "800"; },
      reset: function () { mode = "far"; word.style.fontWeight = "400"; word.style.letterSpacing = "0"; },
      read: function () { return mode; }
    };
  });

  add("rb-true-focus", "对焦词", "focus-1", "one-word-sharp", function (ui) {
    var words = ["周四", "晚上", "读诗"].map(function (text) {
      var s = H.el("span", null, text + " ");
      s.style.display = "inline-block";
      return s;
    });
    var line = H.el("p");
    line.style.cssText = "margin:24px;font-family:serif;font-size:1.6rem";
    words.forEach(function (w) { line.append(w); });
    ui.body.append(line);
    var i = 0;
    function paint() {
      words.forEach(function (w, n) { w.style.filter = n === i ? "none" : "blur(3px)"; w.style.opacity = n === i ? "1" : ".45"; });
    }
    return {
      play: function () { i = 1; paint(); },
      reset: function () { i = 0; paint(); },
      read: function () { return "focus-" + i; },
      boot: function () { paint(); }
    };
  });

  add("rb-variable-proximity", "近距可变字", "close", "distance-tracking", function (ui) {
    var nodes = chars(ui.body, "靠近");
    var mode = "far";
    ui.body.addEventListener("pointermove", function (event) {
      mode = "close";
      var r = ui.body.getBoundingClientRect();
      nodes.forEach(function (n) {
        var b = n.getBoundingClientRect();
        var d = Math.abs(event.clientX - (b.left - r.left + b.width / 2));
        n.style.fontWeight = d < 40 ? "800" : "400";
      });
    });
    return {
      play: function () { mode = "close"; nodes[0].style.fontWeight = "800"; },
      reset: function () { mode = "far"; nodes.forEach(function (n) { n.style.fontWeight = "400"; }); },
      read: function () { return mode; }
    };
  });

  add("rb-warp-text", "网格扭曲", "warp", "pointer-grid-warp", function (ui) {
    var card = H.el("article");
    card.style.cssText = "margin:8px;padding:12px;background:#fffaf4;border:1px solid #e6d9c8";
    var kicker = H.el("p", null, "示例数据 · 白潮春季");
    kicker.style.cssText = "margin:0 0 6px;color:#7a6a58;font-size:12px";
    card.append(kicker);
    var nodes = chars(card, "把衬衫穿到海边");
    nodes.forEach(function (n) { n.style.fontSize = "1.35rem"; });
    var lede = H.el("p", null, "海盐衬衫，周四到店。标题会跟着光标扭一下，价钱和按钮留在原处。");
    lede.style.cssText = "margin:8px 0;font-size:13px;line-height:1.6";
    var row = H.el("div");
    ["看系列", "预约到店"].forEach(function (label) {
      var b = H.el("button", null, label);
      b.type = "button";
      b.style.cssText = "min-height:36px;margin-right:8px;border:1px solid #241c16;background:#fffaf4";
      row.append(b);
    });
    var price = H.el("p", null, "海盐白 ¥268 · 墨蓝 ¥268");
    price.style.cssText = "margin:8px 0 0;font-size:12px;color:#7a6a58";
    card.append(lede, row, price);
    ui.body.append(card);
    card.tabIndex = 0;
    var mode = "flat";
    function warp(on) {
      mode = on ? "warp" : "flat";
      nodes.forEach(function (n, i) {
        n.style.transform = on ? "translateY(" + (i % 2 ? -5 : 5) + "px) rotate(" + ((i % 5) - 2) * 4 + "deg)" : "none";
      });
    }
    card.addEventListener("pointermove", function () { warp(true); });
    card.addEventListener("pointerleave", function () { warp(false); });
    return { play: function () { warp(true); }, reset: function () { warp(false); }, read: function () { return mode; } };
  });

  add("magic-morphing-text", "形态过渡", "night", "word-morph", function (ui) {
    var word = H.el("div", null, "白昼");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;transition:letter-spacing .3s";
    ui.body.append(word);
    var mode = "day";
    return {
      play: function () { mode = "night"; word.textContent = "夜航"; word.style.letterSpacing = "0.2em"; },
      reset: function () { mode = "day"; word.textContent = "白昼"; word.style.letterSpacing = "0"; },
      read: function () { return mode; }
    };
  });

  add("magic-video-text", "字内纹理", "filled", "glyph-fill", function (ui) {
    var word = H.el("div", null, "灯塔");
    word.style.cssText = "margin:24px;font-family:serif;font-size:3rem;font-weight:700;background:#7ea0b8;color:transparent;-webkit-background-clip:text;background-clip:text";
    ui.body.append(word);
    var mode = "empty";
    return {
      play: function () { mode = "filled"; word.style.backgroundImage = "linear-gradient(90deg,#7ea0b8,#e7c48a,#c46a4a)"; },
      reset: function () { mode = "empty"; word.style.backgroundImage = "none"; word.style.background = "#e6d9c8"; },
      read: function () { return mode; }
    };
  });

  add("magic-text-3d-flip", "翻面换词", "back", "word-rotate-x", function (ui) {
    var word = H.el("div", null, "正面");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;transform-origin:center";
    ui.body.append(word);
    var mode = "front";
    return {
      play: function () { mode = "back"; word.style.transition = H.reduced() ? "none" : "transform .4s"; word.style.transform = "rotateX(180deg)"; word.textContent = "背面"; },
      reset: function () { mode = "front"; word.style.transform = "none"; word.textContent = "正面"; },
      read: function () { return mode; }
    };
  });

  add("fancy-letter-3d-swap", "字母翻面", "swapped", "per-letter-rotate-x", function (ui) {
    var nodes = chars(ui.body, "换字");
    var mode = "front";
    return {
      play: function () { mode = "swapped"; nodes.forEach(function (n, i) { n.style.transition = H.reduced() ? "none" : "transform .35s"; n.style.transitionDelay = i * 60 + "ms"; n.style.transform = "rotateX(180deg)"; }); },
      reset: function () { mode = "front"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("fancy-scramble-hover", "悬停乱码", "clear", "scramble-then-resolve", function (ui) {
    var word = H.el("button", null, "南窗");
    word.type = "button";
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;border:0;background:transparent";
    ui.body.append(word);
    var mode = "noise";
    word.addEventListener("mouseenter", function () { mode = "clear"; word.textContent = "南窗"; });
    word.addEventListener("focus", function () { mode = "clear"; word.textContent = "南窗"; });
    return {
      play: function () { mode = "clear"; word.textContent = "南窗"; },
      reset: function () { mode = "noise"; word.textContent = "$#%@"; },
      read: function () { return mode; }
    };
  });

  add("fancy-text-along-path", "路径排字", "along", "text-on-path", function (ui) {
    ui.body.innerHTML = '<svg viewBox="0 0 280 80" style="margin:12px;width:280px"><path id="arc" d="M10 60 Q 140 0 270 60" fill="none" stroke="#e6d9c8"/><text font-size="16" font-family="serif"><textPath id="tp" href="#arc" startOffset="0%">南窗周四朗诵</textPath></text></svg>';
    var mode = "start";
    var tp = function () { return ui.body.querySelector("#tp"); };
    return {
      play: function () { mode = "along"; tp().setAttribute("startOffset", "40%"); },
      reset: function () { mode = "start"; tp().setAttribute("startOffset", "0%"); },
      read: function () { return mode; }
    };
  });

  add("fancy-variable-hover", "逐字改轴", "heavy", "per-letter-weight", function (ui) {
    var nodes = chars(ui.body, "字重");
    var mode = "light";
    nodes.forEach(function (n) {
      n.tabIndex = 0;
      n.addEventListener("pointerenter", function () { mode = "heavy"; n.style.fontWeight = "800"; });
    });
    return {
      play: function () { mode = "heavy"; nodes.forEach(function (n) { n.style.fontWeight = "800"; }); },
      reset: function () { mode = "light"; nodes.forEach(function (n) { n.style.fontWeight = "400"; }); },
      read: function () { return mode; }
    };
  });

  add("aceternity-typewriter", "逐字打出", "typed", "typewriter", function (ui) {
    var line = H.el("p");
    line.style.cssText = "margin:24px;font-family:serif;font-size:1.5rem;min-height:2rem";
    ui.body.append(line);
    var full = "周四晚上把诗读出声";
    var mode = "empty";
    return {
      play: function () { mode = "typed"; line.textContent = H.reduced() ? full : full; },
      reset: function () { mode = "empty"; line.textContent = ""; },
      read: function () { return mode; }
    };
  });

  add("aceternity-text-generate", "逐词生成", "generated", "word-stagger-in", function (ui) {
    var words = ["南窗", "本周四", "还有席"].map(function (text) {
      var s = H.el("span", null, text + " ");
      s.style.opacity = "0";
      return s;
    });
    var line = H.el("p");
    line.style.cssText = "margin:24px;font-family:serif;font-size:1.4rem";
    words.forEach(function (w) { line.append(w); });
    ui.body.append(line);
    var mode = "hidden";
    return {
      play: function () { mode = "generated"; words.forEach(function (w, i) { w.style.transition = H.reduced() ? "none" : "opacity .3s"; w.style.transitionDelay = i * 80 + "ms"; w.style.opacity = "1"; }); },
      reset: function () { mode = "hidden"; words.forEach(function (w) { w.style.opacity = "0"; }); },
      read: function () { return mode; }
    };
  });

  add("scroll-text-motion", "滚动字形", "moved", "scroll-shifts-glyphs", function (ui) {
    var nodes = chars(ui.body, "滚动字");
    var mode = "rest";
    return {
      play: function () { mode = "moved"; nodes.forEach(function (n, i) { n.style.transform = "translateX(" + (i * 6) + "px)"; }); },
      reset: function () { mode = "rest"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("codrops-3d-text-scroll", "圆柱字", "turned", "cylinder-text", function (ui) {
    var ring = H.el("div");
    ring.style.cssText = "margin:30px auto;width:160px;height:80px;position:relative;transform-style:preserve-3d";
    ["外立面", "梁下"].forEach(function (text, i) {
      var face = H.el("div", null, text);
      face.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;font-family:serif;background:#fffaf4;border:1px solid #e6d9c8";
      face.style.transform = "rotateY(" + (i * 180) + "deg) translateZ(40px)";
      ring.append(face);
    });
    ui.body.append(ring);
    var mode = "front";
    return {
      play: function () { mode = "turned"; ring.style.transition = H.reduced() ? "none" : "transform .45s"; ring.style.transform = "rotateY(180deg)"; },
      reset: function () { mode = "front"; ring.style.transform = "none"; },
      read: function () { return mode; }
    };
  });

  add("animated-letters-shader", "着色字母", "waved", "glyph-fragment-shader", function (ui) {
    var card = H.el("article");
    card.style.cssText = "margin:8px;padding:10px 12px 12px;background:#fffaf4;border:1px solid #e6d9c8";
    var kicker = H.el("p", null, "示例数据 · 南窗书局");
    kicker.style.cssText = "margin:0;color:#7a6a58;font-size:12px";
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 84;
    canvas.style.cssText = "display:block;width:100%;height:auto;background:#f6f1e8";
    var copy = H.el("p", null, "周四 19:30 · 二楼靠窗。还剩 6 席，标题由片段着色器逐列推动。");
    copy.style.cssText = "margin:8px 0;font-size:13px;line-height:1.55";
    var btn = H.el("button", null, "看场次");
    btn.type = "button";
    btn.style.cssText = "min-height:36px;border:1px solid #241c16;background:#fffaf4";
    card.append(kicker, canvas, copy, btn);
    ui.body.append(card);
    var gl = window.GL.context(canvas);
    var amp = 0;
    var vs = "#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.0,1.0);}";
    var fs = "#version 300 es\nprecision mediump float;uniform sampler2D uTex;uniform float uAmp;in vec2 vUv;out vec4 o;void main(){float col=floor(vUv.x*8.0);float shift=sin(col*1.7+uAmp*18.0)*uAmp;vec2 uv=vec2(vUv.x,1.0-(vUv.y-shift));vec4 c=texture(uTex,uv);vec4 fringe=texture(uTex,uv+vec2(uAmp*0.35,0.0));o=vec4(fringe.r,c.g,c.b,1.0);if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0)o=vec4(0.965,0.945,0.910,1.0);}";
    var prog = window.GL.program(gl, vs, fs);
    var buf = window.GL.quad(gl);
    var sheet = document.createElement("canvas");
    sheet.width = 320;
    sheet.height = 84;
    var ctx = sheet.getContext("2d");
    ctx.fillStyle = "#f6f1e8";
    ctx.fillRect(0, 0, 320, 84);
    ctx.fillStyle = "#241c16";
    ctx.font = "46px serif";
    ctx.fillText("把诗读出声", 18, 56);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sheet);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    function draw() {
      gl.viewport(0, 0, 320, 84);
      gl.useProgram(prog);
      gl.uniform1f(gl.getUniformLocation(prog, "uAmp"), amp);
      window.GL.drawQuad(gl, prog, buf);
    }
    btn.addEventListener("click", function () { amp = 0.045; draw(); });
    return {
      play: function () { amp = 0.045; draw(); },
      reset: function () { amp = 0; draw(); },
      read: function () { return amp > 0.02 ? "waved" : "flat"; },
      boot: function () { draw(); }
    };
  });

  add("letter-shuffle-menu", "菜单洗牌", "set", "menu-letters-settle", function (ui) {
    var btn = H.el("button", null, "书店");
    btn.type = "button";
    btn.style.cssText = "margin:20px;min-height:40px;font-family:serif;font-size:1.3rem";
    ui.body.append(btn);
    var mode = "mix";
    btn.addEventListener("click", function () { mode = "set"; btn.textContent = "书店"; });
    return {
      play: function () { mode = "set"; btn.textContent = "书店"; },
      reset: function () { mode = "mix"; btn.textContent = "店书"; },
      read: function () { return mode; }
    };
  });

  add("kokonut-spoiler-text", "揭开遮盖", "open", "spoiler-reveal", function (ui) {
    var btn = H.el("button", null, "████");
    btn.type = "button";
    btn.style.cssText = "margin:20px;min-height:44px;filter:blur(6px)";
    ui.body.append(btn);
    var mode = "hidden";
    return {
      play: function () { mode = "open"; btn.style.filter = "none"; btn.textContent = "结局在周四"; },
      reset: function () { mode = "hidden"; btn.style.filter = "blur(6px)"; btn.textContent = "████"; },
      read: function () { return mode; }
    };
  });

  add("scroll-blur-typography", "滚动去模糊", "clear", "scroll-blur", function (ui) {
    var scroller = H.el("div");
    scroller.tabIndex = 0;
    scroller.style.cssText = "margin:8px;height:210px;overflow:auto;background:#fffaf4;border:1px solid #e6d9c8;padding:12px";
    var kicker = H.el("p", null, "示例数据 · 青浦一日");
    kicker.style.cssText = "margin:0 0 6px;color:#7a6a58;font-size:12px";
    var title = H.el("h2", null, "远山还在雾里");
    title.style.cssText = "margin:0 0 8px;font-family:serif;font-size:1.6rem;filter:blur(8px)";
    function section(heading, text) {
      var h = H.el("h3", null, heading);
      h.style.cssText = "margin:14px 0 4px;font-family:serif;font-size:1.05rem";
      var p = H.el("p", null, text);
      p.style.cssText = "margin:0;font-size:13px;line-height:1.65";
      scroller.append(h, p);
    }
    scroller.append(kicker, title);
    section("渡口", "第一班船 7:40。雾大的时候，对岸的房子只剩一条线。");
    section("南窗", "上岸走到书局，周四 19:30 还有朗诵。靠窗还剩 6 席。");
    section("回程", "末班 21:10。标题随滚动变清楚，这三段正文一直可读。");
    ui.body.append(scroller);
    var mode = "blur";
    function sync() {
      var amount = Math.min(1, scroller.scrollTop / 70);
      title.style.filter = "blur(" + ((1 - amount) * 8) + "px)";
      mode = amount > 0.65 ? "clear" : "blur";
    }
    scroller.addEventListener("scroll", sync);
    scroller.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") scroller.scrollTop += 40;
      if (event.key === "ArrowUp") scroller.scrollTop -= 40;
    });
    return {
      play: function () { scroller.scrollTop = 120; sync(); mode = "clear"; title.style.filter = "none"; },
      reset: function () { scroller.scrollTop = 0; mode = "blur"; title.style.filter = "blur(8px)"; },
      read: function () { return mode; }
    };
  });

  add("type-shuffle-animation", "终端洗牌", "settled", "terminal-shuffle", function (ui) {
    var word = H.el("div", null, "????");
    word.style.cssText = "margin:24px;font-family:ui-monospace,monospace;font-size:1.6rem";
    ui.body.append(word);
    var mode = "noise";
    return {
      play: function () { mode = "settled"; word.textContent = "12.04"; },
      reset: function () { mode = "noise"; word.textContent = "?*#&"; },
      read: function () { return mode; }
    };
  });

  add("on-scroll-typography-animations", "滚动变形", "tracked", "scroll-tracking", function (ui) {
    var word = H.el("div", null, "拉开");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "tight";
    return {
      play: function () { mode = "tracked"; word.style.letterSpacing = "0.4em"; word.style.fontWeight = "300"; },
      reset: function () { mode = "tight"; word.style.letterSpacing = "0"; word.style.fontWeight = "600"; },
      read: function () { return mode; }
    };
  });

  add("line-type-effect", "行悬停", "shifted", "hover-letter-shift", function (ui) {
    var nodes = chars(ui.body, "一行字");
    var mode = "rest";
    return {
      play: function () { mode = "shifted"; nodes.forEach(function (n, i) { n.style.transform = "translateY(" + (i % 2 ? -6 : 6) + "px)"; }); },
      reset: function () { mode = "rest"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("on-scroll-svg-filter-text", "滤镜扭曲", "displaced", "svg-displacement", function (ui) {
    ui.body.innerHTML = '<svg viewBox="0 0 240 80" style="margin:12px;width:240px"><filter id="d"><feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" result="n"/><feDisplacementMap id="map" in="SourceGraphic" in2="n" scale="0"/></filter><text id="tx" x="12" y="50" font-size="32" font-family="serif" filter="url(#d)">扭曲</text></svg>';
    var mode = "flat";
    return {
      play: function () { mode = "displaced"; ui.body.querySelector("#map").setAttribute("scale", "12"); },
      reset: function () { mode = "flat"; ui.body.querySelector("#map").setAttribute("scale", "0"); },
      read: function () { return mode; }
    };
  });

  add("terminal-typography-hover", "终端光标", "on", "caret-hover", function (ui) {
    var line = H.el("button", null, "guest@nan>_");
    line.type = "button";
    line.style.cssText = "margin:20px;font-family:ui-monospace,monospace;background:#241c16;color:#e7c48a;border:0;padding:10px";
    ui.body.append(line);
    var mode = "off";
    return {
      play: function () { mode = "on"; line.textContent = "guest@nan> open_"; },
      reset: function () { mode = "off"; line.textContent = "guest@nan>_"; },
      read: function () { return mode; }
    };
  });

  add("kokonut-plucked-text", "弹拨字", "plucked", "string-wave", function (ui) {
    var nodes = chars(ui.body, "拨弦");
    var mode = "still";
    return {
      play: function () {
        mode = "plucked";
        nodes.forEach(function (n, i) { n.style.transform = "translateY(" + Math.sin(i) * 14 + "px)"; });
      },
      reset: function () { mode = "still"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("kokonut-cradle-text", "牛顿摆字", "hit", "cradle-impulse", function (ui) {
    var nodes = chars(ui.body, "摆动");
    var mode = "rest";
    return {
      play: function () { mode = "hit"; nodes[nodes.length - 1].style.transform = "translateX(16px)"; nodes[0].style.transform = "none"; },
      reset: function () { mode = "rest"; nodes.forEach(function (n) { n.style.transform = "none"; }); nodes[0].style.transform = "translateX(-16px)"; },
      read: function () { return mode; }
    };
  });

  add("kokonut-shadow-text", "长影字", "lit", "pointer-shadow", function (ui) {
    var word = H.el("div", null, "日晷");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "flat";
    return {
      play: function () { mode = "lit"; word.style.textShadow = "12px 16px 0 rgba(36,28,22,.25)"; },
      reset: function () { mode = "flat"; word.style.textShadow = "none"; },
      read: function () { return mode; }
    };
  });

  add("kokonut-marker-text", "描线高亮", "marked", "underline-draw", function (ui) {
    var word = H.el("span", null, "读到这里");
    word.style.cssText = "font-family:serif;font-size:1.6rem;background:linear-gradient(#e7c48a,#e7c48a) left bottom/0 8px no-repeat";
    var wrap = H.el("div");
    wrap.style.margin = "24px";
    wrap.append(word);
    ui.body.append(wrap);
    var mode = "plain";
    return {
      play: function () { mode = "marked"; word.style.backgroundSize = "100% 8px"; },
      reset: function () { mode = "plain"; word.style.backgroundSize = "0 8px"; },
      read: function () { return mode; }
    };
  });

  add("kokonut-extruded-text", "挤出字", "lit", "extruded-shadow", function (ui) {
    var word = H.el("div", null, "键帽");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "flat";
    return {
      play: function () { mode = "lit"; word.style.textShadow = "1px 1px #c4b5a4,2px 2px #c4b5a4,3px 3px #c4b5a4,4px 4px #8a3b2c"; },
      reset: function () { mode = "flat"; word.style.textShadow = "none"; },
      read: function () { return mode; }
    };
  });

  add("fancy-media-between-text", "词间展开", "open", "gap-reveals-media", function (ui) {
    var row = H.el("div");
    row.style.cssText = "margin:20px;display:flex;align-items:center;font-family:serif;font-size:1.4rem";
    var media = H.el("div");
    media.style.cssText = "width:0;height:48px;background:#7ea0b8;overflow:hidden";
    row.append(H.el("span", null, "南窗"), media, H.el("span", null, "夜航"));
    ui.body.append(row);
    var mode = "closed";
    return {
      play: function () { mode = "open"; media.style.transition = H.reduced() ? "none" : "width .35s"; media.style.width = "72px"; },
      reset: function () { mode = "closed"; media.style.width = "0"; },
      read: function () { return mode; }
    };
  });

  add("fancy-breathing-text", "呼吸字", "inhale", "weight-breathe", function (ui) {
    var word = H.el("div", null, "呼吸");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "exhale";
    return {
      play: function () { mode = "inhale"; word.style.fontWeight = "200"; word.style.letterSpacing = "0.18em"; },
      reset: function () { mode = "exhale"; word.style.fontWeight = "700"; word.style.letterSpacing = "0"; },
      read: function () { return mode; }
    };
  });

  add("fancy-letter-swap", "竖向换字", "swapped", "vertical-letter-swap", function (ui) {
    var nodes = chars(ui.body, "上下");
    var mode = "low";
    return {
      play: function () { mode = "swapped"; nodes.forEach(function (n, i) { n.style.transform = "translateY(" + (i ? "-18px" : "18px") + "px)"; }); },
      reset: function () { mode = "low"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("fancy-scramble-in", "乱码揭示", "read", "scramble-reveal", function (ui) {
    var word = H.el("div", null, "乱码");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "noise";
    return {
      play: function () { mode = "read"; word.textContent = "正文"; },
      reset: function () { mode = "noise"; word.textContent = "▓░▒"; },
      read: function () { return mode; }
    };
  });

  add("fancy-scroll-and-swap", "滚动换字", "next", "scroll-swap-word", function (ui) {
    var word = H.el("div", null, "第一章");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "first";
    return {
      play: function () { mode = "next"; word.style.transform = "translateY(-8px)"; word.textContent = "第二章"; },
      reset: function () { mode = "first"; word.style.transform = "none"; word.textContent = "第一章"; },
      read: function () { return mode; }
    };
  });

  add("fancy-underline-to-background", "下划线铺底", "filled", "underline-grows", function (ui) {
    var card = H.el("article");
    card.style.cssText = "margin:8px;padding:12px;background:#fffaf4;border:1px solid #e6d9c8";
    var kicker = H.el("p", null, "示例数据 · 南窗周刊");
    kicker.style.cssText = "margin:0 0 6px;color:#7a6a58;font-size:12px";
    var para = H.el("p");
    para.style.cssText = "margin:0;font-family:serif;font-size:1.15rem;line-height:1.7";
    para.append("把已经排好的诗，");
    var word = H.el("span", null, "读出声");
    word.style.cssText = "background:linear-gradient(#f0d0c8,#f0d0c8) left bottom/100% 2px no-repeat";
    para.append(word, "。周四 19:30，二楼靠窗还剩 6 席。");
    var note = H.el("p", null, "下划线会长成整句的底色，句子其余的字保持不动。");
    note.style.cssText = "margin:8px 0 0;font-size:12px;color:#7a6a58";
    card.append(kicker, para, note);
    ui.body.append(card);
    var mode = "line";
    return {
      play: function () { mode = "filled"; word.style.backgroundSize = "100% 100%"; },
      reset: function () { mode = "line"; word.style.backgroundSize = "100% 2px"; },
      read: function () { return mode; }
    };
  });

  add("magic-dia-text-reveal", "色带扫过", "swept", "color-band", function (ui) {
    var word = H.el("div", null, "主题色");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;color:#b3a89c";
    ui.body.append(word);
    var mode = "dim";
    return {
      play: function () { mode = "swept"; word.style.color = "#9f2d20"; },
      reset: function () { mode = "dim"; word.style.color = "#b3a89c"; },
      read: function () { return mode; }
    };
  });

  add("aceternity-squiggly-text", "蠕动字", "wiggle", "turbulence-text", function (ui) {
    ui.body.innerHTML = '<svg viewBox="0 0 200 70" style="margin:12px;width:220px"><filter id="sq"><feTurbulence id="tb" type="turbulence" baseFrequency="0.01"/><feDisplacementMap id="dm" in="SourceGraphic" in2="tb" scale="0"/></filter><text x="10" y="46" font-size="36" font-family="serif" filter="url(#sq)">蠕动</text></svg>';
    var mode = "still";
    return {
      play: function () { mode = "wiggle"; ui.body.querySelector("#dm").setAttribute("scale", "8"); },
      reset: function () { mode = "still"; ui.body.querySelector("#dm").setAttribute("scale", "0"); },
      read: function () { return mode; }
    };
  });

  add("aceternity-canvas-text", "曲线填字", "drawn", "curves-in-glyphs", function (ui) {
    var canvas = document.createElement("canvas");
    canvas.width = 240; canvas.height = 80;
    canvas.style.margin = "12px";
    ui.body.append(canvas);
    var ctx = canvas.getContext("2d");
    var mode = "plain";
    return {
      play: function () {
        mode = "drawn";
        ctx.clearRect(0, 0, 240, 80);
        ctx.font = "bold 42px serif";
        ctx.fillText("曲线", 20, 54);
        ctx.globalCompositeOperation = "source-atop";
        ctx.strokeStyle = "#9f2d20";
        ctx.beginPath();
        ctx.moveTo(10, 60);
        ctx.quadraticCurveTo(80, 10, 200, 50);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      },
      reset: function () { mode = "plain"; ctx.clearRect(0, 0, 240, 80); ctx.font = "bold 42px serif"; ctx.fillStyle = "#241c16"; ctx.fillText("曲线", 20, 54); },
      read: function () { return mode; },
      boot: function () { this.reset(); }
    };
  });

  add("rb-tech-text", "虚线路径字", "dashed", "proximity-dashed", function (ui) {
    var word = H.el("div", null, "路径");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem;color:#241c16";
    ui.body.append(word);
    var mode = "solid";
    return {
      play: function () { mode = "dashed"; word.style.color = "transparent"; word.style.webkitTextStroke = "1px #241c16"; },
      reset: function () { mode = "solid"; word.style.color = "#241c16"; word.style.webkitTextStroke = "0"; },
      read: function () { return mode; }
    };
  });

  add("rb-fold-text", "折纸展开", "open", "fold-rows", function (ui) {
    var rows = ["第一行已经折好", "第二行跟着打开"].map(function (text) {
      var row = H.el("div", null, text);
      row.style.cssText = "margin:4px 16px;padding:8px;background:#fffaf4;transform-origin:top;transform:scaleY(0)";
      ui.body.append(row);
      return row;
    });
    var mode = "folded";
    return {
      play: function () { mode = "open"; rows.forEach(function (row, i) { row.style.transition = H.reduced() ? "none" : "transform .35s"; row.style.transitionDelay = i * 80 + "ms"; row.style.transform = "scaleY(1)"; }); },
      reset: function () { mode = "folded"; rows.forEach(function (row) { row.style.transform = "scaleY(0)"; }); },
      read: function () { return mode; }
    };
  });

  add("rb-stroke-text", "描边填色", "filled", "stroke-then-fill", function (ui) {
    var word = H.el("div", null, "灌注");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2.4rem;color:transparent;-webkit-text-stroke:1px #241c16";
    ui.body.append(word);
    var mode = "stroke";
    return {
      play: function () { mode = "filled"; word.style.color = "#9f2d20"; },
      reset: function () { mode = "stroke"; word.style.color = "transparent"; },
      read: function () { return mode; }
    };
  });

  add("rb-echo-text", "残影收束", "one", "echoes-converge", function (ui) {
    var stack = H.el("div");
    stack.style.cssText = "position:relative;height:70px;margin:16px";
    var layers = [0, 1, 2].map(function (i) {
      var n = H.el("div", null, "回声");
      n.style.cssText = "position:absolute;left:" + (i * 14) + "px;top:10px;font-family:serif;font-size:2rem;opacity:" + (1 - i * 0.25);
      stack.append(n);
      return n;
    });
    ui.body.append(stack);
    var mode = "echo";
    return {
      play: function () { mode = "one"; layers.forEach(function (n, i) { n.style.transition = H.reduced() ? "none" : "left .35s, opacity .35s"; n.style.left = "0"; n.style.opacity = i ? "0" : "1"; }); },
      reset: function () { mode = "echo"; layers.forEach(function (n, i) { n.style.left = (i * 14) + "px"; n.style.opacity = String(1 - i * 0.25); }); },
      read: function () { return mode; }
    };
  });

  add("rb-curved-loop", "弧线标语", "dragged", "arc-text-drag", function (ui) {
    ui.body.innerHTML = '<svg viewBox="0 0 280 90" style="margin:8px;width:280px"><path id="c" d="M10 70 Q 140 10 270 70" fill="none"/><text font-size="14" font-family="serif"><textPath id="loop" href="#c" startOffset="0%">每周四晚 · 南窗书局 · </textPath></text></svg>';
    var mode = "idle";
    return {
      play: function () { mode = "dragged"; ui.body.querySelector("#loop").setAttribute("startOffset", "18%"); },
      reset: function () { mode = "idle"; ui.body.querySelector("#loop").setAttribute("startOffset", "0%"); },
      read: function () { return mode; }
    };
  });

  add("rb-circular-text", "环形绕字", "spin", "circular-spin", function (ui) {
    var ring = H.el("div", null, "回声唱片 · 灯塔将亮 · ");
    ring.style.cssText = "margin:28px auto;width:140px;height:140px;border-radius:50%;border:1px dashed #c4b5a4;display:grid;place-items:center;font-size:12px;text-align:center";
    ui.body.append(ring);
    var mode = "still";
    return {
      play: function () { mode = "spin"; ring.style.transition = H.reduced() ? "none" : "transform .5s"; ring.style.transform = "rotate(40deg)"; },
      reset: function () { mode = "still"; ring.style.transform = "none"; },
      read: function () { return mode; }
    };
  });

  add("rb-fuzzy-text", "绒毛字", "fuzzy", "jitter-strength", function (ui) {
    var word = H.el("div", null, "霜降");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2rem";
    ui.body.append(word);
    var mode = "calm";
    return {
      play: function () { mode = "fuzzy"; word.style.textShadow = "1px 0 #241c16, -1px 1px #241c16, 0 -1px #241c16"; },
      reset: function () { mode = "calm"; word.style.textShadow = "none"; },
      read: function () { return mode; }
    };
  });

  add("rb-masked-heading", "字内纹理", "masked", "texture-inside-type", function (ui) {
    var word = H.el("div", null, "透出");
    word.style.cssText = "margin:24px;font-family:serif;font-size:3rem;font-weight:700;color:transparent;background:#c46a4a;-webkit-background-clip:text;background-clip:text";
    ui.body.append(word);
    var mode = "plain";
    return {
      play: function () { mode = "masked"; word.style.backgroundImage = "repeating-linear-gradient(90deg,#c46a4a 0 8px,#e7c48a 8px 16px)"; },
      reset: function () { mode = "plain"; word.style.backgroundImage = "none"; word.style.background = "#c46a4a"; },
      read: function () { return mode; }
    };
  });

  add("rb-scrambled-text", "光标扭曲", "bent", "pointer-bend-chars", function (ui) {
    var nodes = chars(ui.body, "正文");
    var mode = "straight";
    return {
      play: function () { mode = "bent"; nodes.forEach(function (n, i) { n.style.transform = "rotate(" + (i === 0 ? -12 : 12) + "deg)"; }); },
      reset: function () { mode = "straight"; nodes.forEach(function (n) { n.style.transform = "none"; }); },
      read: function () { return mode; }
    };
  });

  add("magic-aurora-text", "极光字", "flow", "aurora-gradient", function (ui) {
    var word = H.el("div", null, "极光");
    word.style.cssText = "margin:24px;font-family:serif;font-size:2.6rem;font-weight:700;color:transparent;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(90deg,#7ea0b8,#23483a)";
    ui.body.append(word);
    var mode = "still";
    return {
      play: function () { mode = "flow"; word.style.backgroundImage = "linear-gradient(90deg,#e7c48a,#7ea0b8,#9f2d20)"; },
      reset: function () { mode = "still"; word.style.backgroundImage = "linear-gradient(90deg,#7ea0b8,#23483a)"; },
      read: function () { return mode; }
    };
  });

  add("magic-terminal", "终端窗", "typed", "terminal-lines", function (ui) {
    var term = H.el("pre");
    term.style.cssText = "margin:12px;padding:10px;background:#241c16;color:#e7c48a;min-height:72px";
    ui.body.append(term);
    var mode = "blank";
    return {
      play: function () { mode = "typed"; term.textContent = "$ brew open\n席位还剩 6"; },
      reset: function () { mode = "blank"; term.textContent = "$"; },
      read: function () { return mode; }
    };
  });

  add("aceternity-text-hover-effect", "描边字", "outline", "hover-outline", function (ui) {
    var word = H.el("button", null, "轮廓");
    word.type = "button";
    word.style.cssText = "margin:20px;font-family:serif;font-size:2rem;border:0;background:transparent;color:#241c16";
    ui.body.append(word);
    var mode = "fill";
    return {
      play: function () { mode = "outline"; word.style.color = "transparent"; word.style.webkitTextStroke = "1px #9f2d20"; },
      reset: function () { mode = "fill"; word.style.color = "#241c16"; word.style.webkitTextStroke = "0"; },
      read: function () { return mode; }
    };
  });
})();
