# 滚动叙事

本类共 17 条，来自分册「[滚动叙事与页面转场](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a)」。在 `data/cases.json` 中对应 `category` 为 `scroll`。复制下方提示词即可用于 AI Coding。

## 目录

- [路径描边进度 / Tracing Beam](#tracing-beam)
- [Savor 食物科技叙事滚动](#savor)
- [24/7 Artists 音乐站滚动叙事](#artists-247)
- [弹性滞后网格 / Elastic Grid Scroll](#elastic-grid)
- [容器滚动缩放 / Container Scroll Animation](#container-scroll)
- [粘滞滚动揭示 / Sticky Scroll Reveal](#sticky-scroll-reveal)
- [英雄视差 / Hero Parallax](#hero-parallax)
- [视差网格滚动 / Parallax Grid Scroll](#parallax-grid-scroll)
- [滚动扩展 / Scroll Expand](#rb-scroll-expand)
- [滚动进度 / Scroll Progress](#magic-scroll-progress)
- [堆叠卡片 / Stacking Cards](#fancy-stacking-cards)
- [粘滞页脚 / Sticky Footer](#fancy-sticky-footer)
- [电影感三维滚动 / Cinematic 3D Scroll](#cinematic-3d-scroll)
- [无限视差网格 / Infinite Layers Grid](#infinite-layers-grid)
- [滚动三维圆字 / 3D Text Circle Scroll](#circle-text-scroll)
- [滚动时间线 / Timeline](#aceternity-timeline)
- [灯光章节头 / Lamp Effect](#lamp-effect)

## 路径描边进度 / Tracing Beam

<a id="tracing-beam"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-21
- 子类：路径描边进度
- 触发：scroll
- 技术栈：React / SVG / Motion
- 官方演示：https://ui.aceternity.com/components/tracing-beam
- 分册锚点：[tracing-beam](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#tracing-beam)

一道光束沿着 SVG 路径随滚动向下描边，标记读到了哪里。光束长度会随滚动速度调整。适合长文章、教程或时间线。

链接：

- [打开 Aceternity Tracing Beam 演示](https://ui.aceternity.com/components/tracing-beam)（Aceternity UI）

### 提示词

```
【场景】长篇教程侧边一条发光进度束随阅读位置向下走。
【触发】滚动进度；快速滚动时光束稍变长，停下后 200–300ms 回弹。
【运动】沿固定 SVG 路径描边，与正文卷进度匹配。
【不要】用顶部细线进度条替代。
```

## Savor 食物科技叙事滚动

<a id="savor"></a>

- 来源：设计站点
- 作者：Resn
- 日期：Awwwards SOTD 2025-09-10
- 子类：章节揭示与气泡转场
- 触发：scroll / route change
- 技术栈：GSAP SplitText / Rive / WebGL / Lenis
- 官方演示：https://www.savor.it/
- 原始出处：https://www.commarts.com/webpicks/savor
- 分册锚点：[savor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#savor)

食物科技品牌站：滚动把工艺讲成有触感的章节。GSAP 与 SplitText 负责逐字揭示，Rive 负责原理图，WebGL 气泡负责章节转场，Lenis 负责顺滑滚动。

链接：

- [打开 Savor 官网](https://www.savor.it/)（savor.it）
- [阅读 Communication Arts 访谈](https://www.commarts.com/webpicks/savor)（Communication Arts）

### 提示词

```
【场景】食物科技品牌站：用滚动讲清工艺，章节切换时用软质气泡而不是硬切。
【触发】滚动揭示文案与图解；章节切换触发气泡播过。
【运动】标题错落出现；章节间 WebGL 气泡播过 600–900ms。
【不要】把科学讲解堆成长文；失去滚动可访问性。
```

## 24/7 Artists 音乐站滚动叙事

<a id="artists-247"></a>

- 来源：设计站点
- 作者：Waaark / Antoine Wodniack / Jimmy Rahe
- 日期：Awwwards SOTD，站点仍在线
- 子类：音乐单页滚动叙事
- 触发：scroll
- 技术栈：Web 前端动效（工作室常用 GSAP 类工具）
- 官方演示：https://247artists.com/
- 原始出处：https://www.awwwards.com/sites/24-7-artists
- 分册锚点：[artists-247](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#artists-247)

音乐行业单页站，用滚动控制节奏、层次与章节切换。值得看的是把单页滚动当成一条有起伏的曲式，而不是堆积入场动画。

链接：

- [打开 24/7 Artists 官网](https://247artists.com/)（247artists.com）
- [查看 Awwwards 项目页](https://www.awwwards.com/sites/24-7-artists)（Awwwards）

### 提示词

```
【场景】音乐服务单页站：用滚动控制节奏与章节切换。
【触发】滚动；菜单可跳到章节。
【运动】分成有起伏的多个钉住章节；视差微差，标题入场跟章节进度绑定。
【不要】让每一屏都像 MV 预告片；不要失去正文可读性。
```

## 弹性滞后网格 / Elastic Grid Scroll

<a id="elastic-grid"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2025-06-03
- 子类：弹性滞后网格
- 触发：scroll
- 技术栈：GSAP ScrollSmoother / CSS Grid
- 官方演示：https://tympanus.net/Tutorials/ElasticGridScroll/
- 原始出处：https://tympanus.net/codrops/2025/06/03/elastic-grid-scroll-creating-lag-based-layout-animations-with-gsap-scrollsmoother/
- 分册锚点：[elastic-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#elastic-grid)

响应式 CSS 网格里，中间列更快、侧列带滞后，整块在滚动时像弹性材质一样拉伸。教程用 GSAP ScrollSmoother 为每列设定不同 lag。

链接：

- [打开 Elastic Grid Scroll 演示](https://tympanus.net/Tutorials/ElasticGridScroll/)（Codrops Demo）
- [阅读滞后布局教程](https://tympanus.net/codrops/2025/06/03/elastic-grid-scroll-creating-lag-based-layout-animations-with-gsap-scrollsmoother/)（Codrops，2025-06-03）

### 提示词

```
【场景】摄影看板或电商首屏：多列图片网格在滚动时像弹性材质一样拉伸。
【触发】滚动。
【运动】中间列 lag 接近 0，越往外侧越大；停止后柔和重新对齐。小屏减列时要重新分配或关闭 lag。
【不要】把滞后做得像卡顿。
```

## 容器滚动缩放 / Container Scroll Animation

<a id="container-scroll"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：钉住容器缩放
- 触发：scroll
- 技术栈：React / Motion 或 GSAP
- 官方演示：https://ui.aceternity.com/components/container-scroll-animation
- 分册锚点：[container-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#container-scroll)

一个被钉住的卡片或设备框随滚动放大走近视口，常用于产品首屏。与笔记本开合不同，它更贴近「屏上的屏幕走进来」。

链接：

- [打开 Aceternity Container Scroll Animation 演示](https://ui.aceternity.com/components/container-scroll-animation)（Aceternity UI）

### 提示词

```
【场景】SaaS 首屏：一个产品界面框被钉住后随滚动放大走近视口。
【触发】钉住滚动区段。
【运动】尺寸与圆角跟进度走，scrub 0.6–1；结束时交给真实界面。
【不要】让框只是旁边装饰、与滚动无关。
```

## 粘滞滚动揭示 / Sticky Scroll Reveal

<a id="sticky-scroll-reveal"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：侧栏粘滞与内容切换
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/sticky-scroll-reveal
- 分册锚点：[sticky-scroll-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#sticky-scroll-reveal)

一侧标题或图片粘滞，另一侧内容随滚动切换。是特性讲解、步骤教程的常见结构。

链接：

- [打开 Aceternity Sticky Scroll Reveal 演示](https://ui.aceternity.com/components/sticky-scroll-reveal)（Aceternity UI）

### 提示词

```
【场景】产品特性页：左侧图粘滞，右侧步骤文案随滚动替换。
【触发】滚动段落。
【运动】每步入场 400–600ms；左侧图可做共享元素切换。提供锚点导航。
【不要】小屏仍强行双栏粘滞。
```

## 英雄视差 / Hero Parallax

<a id="hero-parallax"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：多层图片视差
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/hero-parallax
- 分册锚点：[hero-parallax](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#hero-parallax)

英雄区里多排图片以不同速度随滚动移动，形成景深。适合产品壁纸或案例首屏，幅度要小，不要说晕。

链接：

- [打开 Aceternity Hero Parallax 演示](https://ui.aceternity.com/components/hero-parallax)（Aceternity UI）

### 提示词

```
【场景】产品案例首屏：多排缩略图以不同速度移动。
【触发】滚动。
【运动】前层更快、后层更慢，幅度克制；图要有 alt。
【不要】视差过大导致眩晕；小屏减弱。
```

## 视差网格滚动 / Parallax Grid Scroll

<a id="parallax-grid-scroll"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：多列网格视差
- 触发：scroll
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/parallax-scroll
- 分册锚点：[parallax-grid-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#parallax-grid-scroll)

多列图片网格以不同速度上下移动。与弹性滞后网格相近，但更常用于垂直视差而不是弹性拉伸。

链接：

- [打开 Aceternity Parallax Grid Scroll 演示](https://ui.aceternity.com/components/parallax-scroll)（Aceternity UI）

### 提示词

```
【场景】影集网格三列以不同速度垂直移动。
【触发】滚动。
【运动】列与列速度微差，停下后不要长期错位。
【不要】与弹性滞后网格做成完全相同的幅度。
```

## 滚动扩展 / Scroll Expand

<a id="rb-scroll-expand"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：滚动扩开媒体
- 触发：scroll
- 技术栈：React / Scroll 驱动
- 官方演示：https://www.reactbits.dev/animations/scroll-expand
- 分册锚点：[rb-scroll-expand](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#rb-scroll-expand)

一张图或一个块随滚动从缩略扩展到近全屏。适合影集章节或产品细节展示。

链接：

- [打开 React Bits Scroll Expand 演示](https://www.reactbits.dev/animations/scroll-expand)（React Bits）

### 提示词

```
【场景】影集章节：一张照片从居中缩略扩展到近全屏。
【触发】钉住滚动。
【运动】尺寸与圆角跟进度，scrub 0.6–1。
【不要】扩展时把周边正文压得不可读。
```

## 滚动进度 / Scroll Progress

<a id="magic-scroll-progress"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：页面阅读进度
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/scroll-progress
- 分册锚点：[magic-scroll-progress](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#magic-scroll-progress)

顶部或侧边的阅读进度条，跟页面或文章进度绑定。比描边光束更克制，适合长文与文档。

链接：

- [打开 Magic UI Scroll Progress 演示](https://magicui.design/docs/components/scroll-progress)（Magic UI）

### 提示词

```
【场景】长文章顶部一条细进度条。
【触发】文章容器滚动百分比，不是整页。
【运动】宽度跟进度，可有轻微滞后；不要抢戏。
【不要】跟错滚动容器。
```

## 堆叠卡片 / Stacking Cards

<a id="fancy-stacking-cards"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：滚动堆叠卡
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/blocks/stacking-cards
- 分册锚点：[fancy-stacking-cards](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#fancy-stacking-cards)

一组卡片随滚动依次叠上来或揭开。适合特性列表、价格档或章节卡。

链接：

- [打开 Fancy Stacking Cards 演示](https://www.fancycomponents.dev/docs/components/blocks/stacking-cards)（Fancy Components）

### 提示词

```
【场景】特性或价格卡随滚动依次叠上。
【触发】滚动段落。
【运动】当前卡居中，上一张缩小给下一张让位，400–600ms。
【不要】让卡片堆到看不清正文。
```

## 粘滞页脚 / Sticky Footer

<a id="fancy-sticky-footer"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：页脚从页面下揭出
- 触发：scroll end
- 技术栈：React / CSS
- 官方演示：https://www.fancycomponents.dev/docs/components/blocks/sticky-footer
- 分册锚点：[fancy-sticky-footer](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#fancy-sticky-footer)

滚到页底时，页脚像被页面揭开一样露出来，而不是普通接在后面。

链接：

- [打开 Fancy Sticky Footer 演示](https://www.fancycomponents.dev/docs/components/blocks/sticky-footer)（Fancy Components）

### 提示词

```
【场景】品牌站页底：页面主体滑开后露出大型页脚。
【触发】滚到文档底部。
【运动】主体与页脚是两层表面，揭示过程要顺。
【不要】把页脚接在身后却没有揭开感。
```

## 电影感三维滚动 / Cinematic 3D Scroll

<a id="cinematic-3d-scroll"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：电影感三维章节
- 触发：scroll
- 技术栈：Three.js / GSAP
- 官方演示：https://tympanus.net/Tutorials/Cinematic3DScroll/
- 分册锚点：[cinematic-3d-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#cinematic-3d-scroll)

Codrops 演示把滚动编成电影感三维章节：镜头、光照与场景元件跟进度走。适合高策展厅或品牌故事页。

链接：

- [打开 Cinematic Scroll Animations 演示](https://tympanus.net/Tutorials/Cinematic3DScroll/)（Codrops Demo）

### 提示词

```
【场景】品牌故事页：滚动控制电影感三维章节。
【触发】钉住滚动段落。
【运动】镜头与光照跟进度；正文留在 DOM。小屏或弱设备改为平面章节。
【不要】镜头运动过猛导致眩晕。
```

## 无限视差网格 / Infinite Layers Grid

<a id="infinite-layers-grid"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-06-11
- 子类：无缝平铺视差网格
- 触发：scroll
- 技术栈：GSAP
- 官方演示：https://tympanus.net/Tutorials/InfiniteLayersGrid/
- 原始出处：https://tympanus.net/codrops/2025/06/11/building-an-infinite-parallax-grid-with-gsap-and-seamless-tiling/
- 分册锚点：[infinite-layers-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#infinite-layers-grid)

用 GSAP 做无缝平铺的无限视差网格，图层像无限画布一样接续。适合看板或时装编辑浏览。

链接：

- [打开 Infinite Layers Grid 演示](https://tympanus.net/Tutorials/InfiniteLayersGrid/)（Codrops Demo）
- [阅读无缝平铺教程](https://tympanus.net/codrops/2025/06/11/building-an-infinite-parallax-grid-with-gsap-and-seamless-tiling/)（Codrops，2025-06-11）

### 提示词

```
【场景】时装看板：多层图网格无缝循环滚动。
【触发】滚动或拖拽。
【运动】层与层速度微差，接缝处不能裂缝。
【不要】没有跳转或结束方式的死循环。
```

## 滚动三维圆字 / 3D Text Circle Scroll

<a id="circle-text-scroll"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-02-03
- 子类：圆环三维字随滚动
- 触发：scroll
- 技术栈：Three.js / shaders
- 官方演示：https://tympanus.net/Tutorials/3DTextCircleScroll/
- 原始出处：https://tympanus.net/codrops/2025/02/03/building-an-on-scroll-3d-circle-text-animation-with-three-js-and-shaders/
- 分册锚点：[circle-text-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#circle-text-scroll)

三维文字排在圆环上，滚动时整圈旋转。与圆柱字柱不同，它更像一个竖着的字幕环。

链接：

- [打开 3D Text Circle Animation 演示](https://tympanus.net/Tutorials/3DTextCircleScroll/)（Codrops Demo）
- [阅读圆字滚动教程](https://tympanus.net/codrops/2025/02/03/building-an-on-scroll-3d-circle-text-animation-with-three-js-and-shaders/)（Codrops，2025-02-03）

### 提示词

```
【场景】全屏圆字环随滚动旋转。
【触发】滚动驱动角度。
【运动】正对相机的字可读；小屏改为平面标题。
【不要】过强透视导致眩晕。
```

## 滚动时间线 / Timeline

<a id="aceternity-timeline"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：竖向时间线揭示
- 触发：scroll
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/timeline
- 分册锚点：[aceternity-timeline](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#aceternity-timeline)

一条竖向时间线随滚动揭示节点。适合公司年表、产品演进或项目史。

链接：

- [打开 Aceternity Timeline 演示](https://ui.aceternity.com/components/timeline)（Aceternity UI）

### 提示词

```
【场景】公司年表或产品演进：竖向时间线随滚动揭示节点。
【触发】滚动进入视口。
【运动】节点与连线依次出现 400–600ms；提供锚点。
【不要】节点没有可读日期与标题。
```

## 灯光章节头 / Lamp Effect

<a id="lamp-effect"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：灯光照亮章节
- 触发：in-view / scroll
- 技术栈：React / CSS 或 shader
- 官方演示：https://ui.aceternity.com/components/lamp-effect
- 分册锚点：[lamp-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#lamp-effect)

章节标题上方有一道灯光照亮，像被灯照著。常用于英雄区或章节入口，带一点滚动或入场仪式感。

链接：

- [打开 Aceternity Lamp Effect 演示](https://ui.aceternity.com/components/lamp-effect)（Aceternity UI）

### 提示词

```
【场景】章节标题上方有一道软灯光照亮。
【触发】进入视口后点亮。
【运动】灯光 600–900ms 亮起，不要夺走标题对比。
【不要】把灯做成闪烁幻灯。
```
