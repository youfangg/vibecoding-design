/* 站内复刻登记。
   新增一条：
   1. 新建 docs/previews/<案例 id>.html，可引用同目录的 base.css 与 kit.js。
   2. 在下面加上该 id。说明只出现在代码里，页面文案在各复刻文件中。
   画廊只播放这里登记的复刻。案例页有复刻时先打开复刻，若官方页也允许嵌入，可以改切到官方文档页。
   两者都没有时，案例页显示「暂无站内预览」。
   重新探测嵌入许可：python3 scripts/probe-embeds.py
*/
window.PREVIEW_RECUTS = {
  "animate-highlight": true,
  "animate-auto-height": true,
  "animate-bottom-nav": true,
  "animate-liquid-button": true,
  "animate-image-zoom": true,
  "animate-click": true,
  "animate-motion-grid": true,
  "animate-sliding-number": true,
  "split-text": true,
  "rb-decrypted-text": true,
  "aceternity-flip-words": true,
  "fancy-text-highlighter": true,
  "tracing-beam": true,
  "fancy-stacking-cards": true,
  "sticky-scroll-reveal": true,
  "expandable-card": true,
  "kokonut-slide-to-confirm": true,
  "vaul-drawer": true,
  "aceternity-3d-card": true,
  "kokonut-page-flip": true,
  "aceternity-spotlight": true,
  "animata-wide-card-skeleton": true,
  "nivo-bar": true,
  "magic-confetti": true,
  "do-not-scroll": true,
  "gooey-sticky-menu": true,
  "lookbook-hover": true,
  "motion-trail": true,
  "elastic-grid": true,
  "scroll-3d-carousel": true,
  "shopping-cart-animation": true,
  "page-slide-drawer": true,
  "gsap-horizontal-gallery": true,
  "gsap-scrubbed-bento": true,
  "gsap-flip-carousel": true,
  "cinematic-3d-scroll": true,
  "infinite-canvas": true,
  "palmer-grid": true,
  "hover-preview-minimap": true,
  "cloth-carousel": true
};
