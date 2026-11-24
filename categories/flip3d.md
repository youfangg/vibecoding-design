# 翻转与 3D

本类共 19 条，来自分册「[三维与光影材质](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2)」。在 `data/cases.json` 中对应 `category` 为 `flip3d`。复制下方提示词即可用于 AI Coding。

## 目录

- [滚动 3D 走马灯 / On-Scroll 3D Carousel](#scroll-3d-carousel)
- [滚动开合笔记本 / MacBook Scroll](#macbook-scroll)
- [INK Games 单画布与传送门卡](#ink-games)
- [三维跑马灯 / 3D Marquee](#aceternity-3d-marquee)
- [三维图钉 / 3D Animated Pin](#aceternity-3d-pin)
- [三维卡片 / 3D Card Effect](#aceternity-3d-card)
- [立方体阵列 / Cubes](#rb-cubes)
- [景深走马灯 / Depth Carousel](#rb-depth-carousel)
- [飞行海报 / Flying Posters](#rb-flying-posters)
- [GitHub 地球仪 / GitHub Globe](#github-globe)
- [Apple 式卡片走马灯 / Apple Cards Carousel](#apple-cards-carousel)
- [晃动卡 / Wobble Card](#wobble-card)
- [实验性三维走马灯 / R3F Experimental Carousels](#r3f-carousels)
- [卡片对换 / Card Swap](#rb-card-swap)
- [CSS 三维盒 / 3D CSS Box](#fancy-css-box)
- [翻页 / Page Flip](#kokonut-page-flip)
- [布料海报走马灯 / Cloth Posters Carousel](#cloth-carousel)
- [立方盒走马灯 / Box Carousel](#fancy-box-carousel)
- [FLIP 走马灯 / FLIP Carousel](#gsap-flip-carousel)

## 滚动 3D 走马灯 / On-Scroll 3D Carousel

<a id="scroll-3d-carousel"></a>

- 来源：X
- 作者：Codrops
- 日期：2026-10-13
- 子类：滚动驱动的 3D 旋转画廊
- 触发：scroll
- 技术栈：WebGL / GSAP
- 官方演示：https://tympanus.net/Development/3DCarousel/
- 原始出处：https://tympanus.net/codrops/2025/05/07/on-scroll-3d-carousel/
- 分册锚点：[scroll-3d-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#scroll-3d-carousel)

图片被摆成一圈 3D 走马灯，滚动时整圈在透视下旋转，而不是水平滑动轮播。适合影集或产品系列的空间浏览。

链接：

- [打开 On-Scroll 3D Carousel 演示](https://tympanus.net/Development/3DCarousel/)（Codrops Demo）
- [阅读教程文章](https://tympanus.net/codrops/2025/05/07/on-scroll-3d-carousel/)（Codrops，2025-05-07）

### 提示词

```
【场景】影集或产品系列：多张图片围成一圈，滚动即旋转。
【触发】滚动控制旋转（scrub）；可选拖拽惯性。
【运动】图片均布圆周，透视约 800–1200px；正面略放大，背面缩小降透明。
【不要】做成普通水平轮播；小屏用过强透视。
```

## 滚动开合笔记本 / MacBook Scroll

<a id="macbook-scroll"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-21
- 子类：滚动开合的笔记本
- 触发：scroll
- 技术栈：React / Motion 或 GSAP，CSS 3D 或 R3F
- 官方演示：https://ui.aceternity.com/components/macbook-scroll
- 分册锚点：[macbook-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#macbook-scroll)

滚动时一台笔记本从合着到张开，屏幕里的界面像从机身里走出来。手法见于 Fey.com，适合软件或硬件产品页。

链接：

- [打开 Aceternity MacBook Scroll 演示](https://ui.aceternity.com/components/macbook-scroll)（Aceternity UI）

### 提示词

```
【场景】SaaS 或硬件产品页：笔记本从关到开，屏幕界面走向视口。
【触发】钉住滚动。
【运动】盖子从约 90° 到 0°，随后屏幕放大接管下一屏。scrub 0.6–1，透视约 1200px。小屏简化。
【不要】把笔记本当纯装饰、与滚动无关。
```

## INK Games 单画布与传送门卡

<a id="ink-games"></a>

- 来源：设计站点
- 作者：ToyFight
- 日期：Awwwards SOTD 2025-10-14
- 子类：单画布传送门卡
- 触发：pointer move / scroll enter
- 技术栈：Next.js / GSAP / Lenis / R3F + drei
- 官方演示：https://www.inkgames.com/
- 原始出处：https://tympanus.net/codrops/2025/11/21/one-canvas-to-rule-them-all-how-ink-games-new-site-handles-complex-3d/
- 分册锚点：[ink-games](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#ink-games)

全站共用一块固定 WebGL 画布。传送门卡跟光标倾斜，DOM 文字与 3D 同步旋转，卡内用 stencil 遮罩。

链接：

- [打开 INK Games 官网](https://www.inkgames.com/)（inkgames.com）
- [阅读单画布三维方案拆解](https://tympanus.net/codrops/2025/11/21/one-canvas-to-rule-them-all-how-ink-games-new-site-handles-complex-3d/)（Codrops，2025-11-21）

### 提示词

```
【场景】游戏品牌站：一排产品卡，卡里是 3D 场景，卡上是 HTML 标题，光标移动时卡面倾斜。
【触发】桌面光标控制旋转；滚入时做一次揭示。
【运动】全页一块固定画布，用 scissor/View 画进各容器；旋转跟光标插值。不在视口时停帧。
【不要】为每一张卡开一个 WebGL 上下文。
```

## 三维跑马灯 / 3D Marquee

<a id="aceternity-3d-marquee"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：透视网格跑马灯
- 触发：idle loop
- 技术栈：React / CSS 3D
- 官方演示：https://ui.aceternity.com/components/3d-marquee
- 分册锚点：[aceternity-3d-marquee](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-3d-marquee)

多张图排成有透视的三维网格并缓慢移动。适合品牌墙、客户 logo 或作品墙，不要当唯一信息层。

链接：

- [打开 Aceternity 3D Marquee 演示](https://ui.aceternity.com/components/3d-marquee)（Aceternity UI）

### 提示词

```
【场景】品牌或作品墙：多图在透视网格里缓慢移动。
【触发】空闲循环；可见时才动。
【运动】速度慢，透视稳定；图要有名称或 alt。
【不要】转得过快或挡住正文。
```

## 三维图钉 / 3D Animated Pin

<a id="aceternity-3d-pin"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：悬停弹出的三维钉
- 触发：hover / focus
- 技术栈：React / CSS 3D
- 官方演示：https://ui.aceternity.com/components/3d-pin
- 分册锚点：[aceternity-3d-pin](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-3d-pin)

一张卡或地点在悬停时像图钉一样弹出三维层。适合地图标注、精选或案例入口。

链接：

- [打开 Aceternity 3D Animated Pin 演示](https://ui.aceternity.com/components/3d-pin)（Aceternity UI）

### 提示词

```
【场景】地图或精选卡：悬停时弹出三维钉层。
【触发】hover 与 focus。
【运动】弹出 400–600ms，带透视；离开收回。
【不要】触屏只靠悬停。
```

## 三维卡片 / 3D Card Effect

<a id="aceternity-3d-card"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：光标倾斜的三维卡
- 触发：pointer move
- 技术栈：React / CSS 3D
- 官方演示：https://ui.aceternity.com/components/3d-card-effect
- 分册锚点：[aceternity-3d-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-3d-card)

卡片随光标倾斜，内部图层有轻微视差。是产品卡、定价卡最常用的三维微倾手法。

链接：

- [打开 Aceternity 3D Card Effect 演示](https://ui.aceternity.com/components/3d-card-effect)（Aceternity UI）

### 提示词

```
【场景】产品卡随光标微倾，图层带视差。
【触发】桌面 pointermove；触屏关闭或改为静态。
【运动】倾斜有上限与插值，不要硬贴。
【不要】倾角过大导致眩晕或文字反光难读。
```

## 立方体阵列 / Cubes

<a id="rb-cubes"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：可交互立方体阵列
- 触发：pointer / scroll
- 技术栈：React / CSS 3D 或 WebGL
- 官方演示：https://www.reactbits.dev/animations/cubes
- 分册锚点：[rb-cubes](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-cubes)

一组立方体可随光标或滚动翻转、错落。适合科技英雄或数据装饰，数量要克制。

链接：

- [打开 React Bits Cubes 演示](https://www.reactbits.dev/animations/cubes)（React Bits）

### 提示词

```
【场景】科技英雄区：一组立方体随光标或滚动轻微翻转。
【触发】指针或滚动。
【运动】错落要小，不要满屏翻转。
【不要】立方体挡住正文。
```

## 景深走马灯 / Depth Carousel

<a id="rb-depth-carousel"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：有景深的卡片走马灯
- 触发：drag / click / keyboard
- 技术栈：React / CSS 3D
- 官方演示：https://www.reactbits.dev/components/depth-carousel
- 分册锚点：[rb-depth-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-depth-carousel)

卡片在 Z 轴上排开，当前张靠前，两侧后退。比平面轮播更有空间感。

链接：

- [打开 React Bits Depth Carousel 演示](https://www.reactbits.dev/components/depth-carousel)（React Bits）

### 提示词

```
【场景】产品或影集：当前卡靠前，两侧后退并变小。
【触发】拖拽、点击或键盘。
【运动】切换 450–650ms，带 snap。
【不要】透视过强；没有键盘切换。
```

## 飞行海报 / Flying Posters

<a id="rb-flying-posters"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：三维空间中的飞行海报
- 触发：scroll / pointer
- 技术栈：React / WebGL 或 CSS 3D
- 官方演示：https://www.reactbits.dev/components/flying-posters
- 分册锚点：[rb-flying-posters](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-flying-posters)

海报或图片在三维空间中飞过或排开，可随滚动或指针运动。适合展览或音乐站。

链接：

- [打开 React Bits Flying Posters 演示](https://www.reactbits.dev/components/flying-posters)（React Bits）

### 提示词

```
【场景】展览或音乐站：海报在空间中飞过。
【触发】滚动或指针。
【运动】速度慢，正面海报要可读。
【不要】海报飞得看不清画面。
```

## GitHub 地球仪 / GitHub Globe

<a id="github-globe"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：三维地球与连线
- 触发：idle / pointer
- 技术栈：React / Three.js 或 R3F
- 官方演示：https://ui.aceternity.com/components/github-globe
- 分册锚点：[github-globe](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#github-globe)

一颗可旋转的三维地球，点与弧线表示连接。适合全球团队、开源贡献或覆盖范围。

链接：

- [打开 Aceternity GitHub Globe 演示](https://ui.aceternity.com/components/github-globe)（Aceternity UI）

### 提示词

```
【场景】全球团队或覆盖页：一颗地球上标出城市并连线。
【触发】空闲自转；可拖拽旋转。
【运动】自转慢；点要有地名。弱设备降级为平面地图。
【不要】地球挡住正文；没有文字标签。
```

## Apple 式卡片走马灯 / Apple Cards Carousel

<a id="apple-cards-carousel"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：可点开的卡片走马灯
- 触发：drag / click / keyboard
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/apple-cards-carousel
- 分册锚点：[apple-cards-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#apple-cards-carousel)

一组大卡片水平排列，点击可展开详情。手法接近 App Store 或 Apple 营销页的卡片浏览。

链接：

- [打开 Aceternity Apple Cards Carousel 演示](https://ui.aceternity.com/components/apple-cards-carousel)（Aceternity UI）

### 提示词

```
【场景】精选内容或套餐：大卡片水平浏览，点击展开详情。
【触发】拖拽或键盘；点击打开。
【运动】切换带吸附；展开用共享布局 450–600ms。
【不要】详情与封面断开。
```

## 晃动卡 / Wobble Card

<a id="wobble-card"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：光标晃动的卡片
- 触发：pointer move
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/wobble-card
- 分册锚点：[wobble-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#wobble-card)

卡片随光标做弹性晃动，比刚性倾斜更软。适合特性卡或玩味入口。

链接：

- [打开 Aceternity Wobble Card 演示](https://ui.aceternity.com/components/wobble-card)（Aceternity UI）

### 提示词

```
【场景】特性卡随光标做弹性晃动。
【触发】桌面 pointermove；触屏关闭。
【运动】spring 晃动，幅度小，停下后回正。
【不要】晃个不停影响阅读。
```

## 实验性三维走马灯 / R3F Experimental Carousels

<a id="r3f-carousels"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：React Three Fiber 实验走马灯
- 触发：drag / scroll
- 技术栈：React Three Fiber
- 官方演示：https://tympanus.net/Tutorials/R3FExperimentalCarousels/
- 分册锚点：[r3f-carousels](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#r3f-carousels)

Codrops 教程里的一组 R3F 实验性走马灯，探索不同的三维浏览结构。适合需要非平面轮播的影集或产品。

链接：

- [打开 Experimental Carousel 演示](https://tympanus.net/Tutorials/R3FExperimentalCarousels/)（Codrops Demo）

### 提示词

```
【场景】影集需要非平面的三维浏览结构。
【触发】拖拽或滚动。
【运动】切换要有吸附，正面作品可读。弱设备提供平面回退。
【不要】只有装饰性旋转、没有选中态。
```

## 卡片对换 / Card Swap

<a id="rb-card-swap"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：两张卡三维对换
- 触发：click / drag
- 技术栈：React / CSS 3D
- 官方演示：https://www.reactbits.dev/components/card-swap
- 分册锚点：[rb-card-swap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-card-swap)

两张或一组卡片以三维翻面或对换的方式切换内容。适合对比、套餐或前后状态。

链接：

- [打开 React Bits Card Swap 演示](https://www.reactbits.dev/components/card-swap)（React Bits）

### 提示词

```
【场景】两套方案或前后状态用卡片三维对换。
【触发】点击或拖拽。
【运动】翻或互换 500–700ms，透视稳定。
【不要】翻面时文字镜像不可读。
```

## CSS 三维盒 / 3D CSS Box

<a id="fancy-css-box"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：纯 CSS 三维盒子
- 触发：pointer / drag
- 技术栈：React / CSS 3D
- 官方演示：https://www.fancycomponents.dev/docs/components/blocks/css-box
- 分册锚点：[fancy-css-box](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#fancy-css-box)

用纯 CSS 做的可旋转三维盒子。适合包装、产品盒或玩味展示，不必上 WebGL。

链接：

- [打开 Fancy 3D CSS Box 演示](https://www.fancycomponents.dev/docs/components/blocks/css-box)（Fancy Components）

### 提示词

```
【场景】包装或产品盒：一个可旋转的 CSS 三维盒子。
【触发】拖拽或光标。
【运动】旋转跟手，松手可惯性减速。盒面要有可读内容。
【不要】为这种结构强行上 WebGL。
```

## 翻页 / Page Flip

<a id="kokonut-page-flip"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：书页翻转
- 触发：click / drag
- 技术栈：React / CSS 3D
- 官方演示：https://kokonutui.com/docs/cards/page-flip
- 分册锚点：[kokonut-page-flip](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#kokonut-page-flip)

像翻书一样把一页翻到下一页。适合画册、杂志或 onboarding。

链接：

- [打开 Kokonut Page Flip 演示](https://kokonutui.com/docs/cards/page-flip)（Kokonut UI）

### 提示词

```
【场景】画册或 onboarding：像翻书一样到下一页。
【触发】点击或拖拽页角。
【运动】翻页 600–900ms，带卷曲或透视。提供键盘翻页。
【不要】翻页中途让文字镜像难读。
```

## 布料海报走马灯 / Cloth Posters Carousel

<a id="cloth-carousel"></a>

- 来源：设计站点
- 作者：Jesper Landberg / Codrops
- 日期：2026-11-17
- 子类：WebGPU 布料模拟的无限走马灯
- 触发：virtual scroll / click
- 技术栈：WebGPU / DomGL / 虚拟滚动
- 官方演示：https://tympanus.net/Demos/ClothCarousel/
- 原始出处：https://tympanus.net/codrops/2026/11/17/cloth-posters-webgpu/
- 分册锚点：[cloth-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#cloth-carousel)

无限横向走马灯里，每张海报都是一块布：滚动拉住中间，其余部分向后披垂。点击从被点处提起，细节页上的文字也会随布折叠。需要 WebGPU，没有回退。

链接：

- [打开 Cloth Carousel 演示](https://tympanus.net/Demos/ClothCarousel/)（Codrops Demo）
- [阅读布料海报走马灯教程](https://tympanus.net/codrops/2026/11/17/cloth-posters-webgpu/)（Codrops，2026-11-17）

### 提示词

```
【场景】作品海报做成可无限横滑的布料走马灯，滚动时布面从中部被拉动并披垂，点击一张则从点击处提起并展开详情。
【触发】滚轮、触屏和拖拽驱动虚拟滚动；点击打开，再点或关闭收回。无 WebGPU 时明确提示，不要空白页。
【运动】布料用粒子网格与空气阻力模拟，停止后缓缓展平；打开时从点击点领先，其余随后。详情文字在运动中贴在布上。
【不要】在不支持 WebGPU 的浏览器假装可用；快速拖拽时布面剧烈自交且无法恢复。
```

## 立方盒走马灯 / Box Carousel

<a id="fancy-box-carousel"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：可拖拽的立方体侧面走马灯
- 触发：drag / autoplay
- 技术栈：React / CSS 3D
- 官方演示：https://www.fancycomponents.dev/docs/components/carousel/box-carousel
- 分册锚点：[fancy-box-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#fancy-box-carousel)

项目贴在旋转立方或盒体的各个面上，可拖拽并平滑转到下一面。比平面滑块更有体积感，适合少量精选作品。

链接：

- [打开 Fancy Box Carousel 演示](https://www.fancycomponents.dev/docs/components/carousel/box-carousel)（Fancy Components）

### 提示词

```
【场景】精选作品或功能用立方盒四面展示，拖拽或按钮翻到下一面。
【触发】拖拽带动量，也可自动缓慢旋转，悬停暂停。
【运动】沿 Y 轴旋转 90° 的倍数落定，400–700ms；透视克制，正面内容始终可读。
【不要】一次展示过多面导致文字反光难认；缺少键盘或按钮替代。
```

## FLIP 走马灯 / FLIP Carousel

<a id="gsap-flip-carousel"></a>

- 来源：设计站点
- 作者：GSAP
- 日期：采集于 2026-11-24
- 子类：用 FLIP 记录布局再补间的走马灯
- 触发：click / drag
- 技术栈：GSAP Flip
- 官方演示：https://demos.gsap.com/demo/flip-carousel/
- 分册锚点：[gsap-flip-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#gsap-flip-carousel)

官方 Demo Hub 的 FLIP 走马灯：先记录各卡片布局，再把它们补间到新位置，而不是只做轨道平移。切换时卡片像重新排版一样就位。

链接：

- [打开 GSAP FLIP Carousel 演示](https://demos.gsap.com/demo/flip-carousel/)（GSAP Demo Hub）

### 提示词

```
【场景】卡片走马灯切换时，各卡从当前位置 FLIP 到新槽位，而不是整条轨道生硬平移。
【触发】按钮、指示点或拖拽到阈值后切换。
【运动】先记录布局再 Flip.from，300–600ms；进出焦点的卡片可有轻微缩放。
【不要】只做 translateX 却称为 FLIP；动画中途再次点击导致布局错乱。
```
