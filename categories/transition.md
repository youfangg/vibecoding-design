# 过渡与页面切换

本类共 8 条，来自分册「[滚动叙事与页面转场](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a)」。在 `data/cases.json` 中对应 `category` 为 `transition`。复制下方提示词即可用于 AI Coding。

## 目录

- [并行页面转场 / Parallel Page Transitions](#parallel-transitions)
- [UnD 内容色转场与面包滚动](#und-ny)
- [重复镜像转场 / Repeating Image Transition](#repeating-image-transition)
- [运动路径转场 / Motion Path Transition](#motion-path-transition)
- [像素转场 / Pixel Transition](#rb-pixel-transition)
- [像素互换 / Pixel Swap](#rb-pixel-swap)
- [对比拖拽 / Compare](#aceternity-compare)
- [动画模态框 / Animated Modal](#aceternity-animated-modal)

## 并行页面转场 / Parallel Page Transitions

<a id="parallel-transitions"></a>

- 来源：X
- 作者：Ismaíl Márquez（ismamz） / Codrops
- 日期：2026-10-08
- 子类：并行时间轴与持久 3D 场景
- 触发：route change
- 技术栈：React Router / GSAP / R3F
- 官方演示：https://amber.isma.uy/
- 原始出处：https://x.com/codrops/status/2108194228429861191
- 分册锚点：[parallel-transitions](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#parallel-transitions)

页面切换被编成一条并行舞蹈：离场页、入场页、固定 UI 与一个跨路由存活的 3D 场景在同一条 GSAP timeline 里交错进行。配套演示是 Amber Genetics 标本档案站。

链接：

- [查看 Codrops 的 X 原帖](https://x.com/codrops/status/2108194228429861191)（X，2026-10-08）
- [阅读并行页面转场教程](https://tympanus.net/codrops/2026/10/08/building-parallel-page-transitions-with-gsap-and-react-router/)（Codrops，2026-10-08）
- [打开 Amber Genetics 演示站](https://amber.isma.uy/)（amber.isma.uy）

### 提示词

```
【场景】档案/展厅站：路由切换时，页面、导航与持久 3D 标本在同一条时间轴中并行演出。
【触发】路由切换。
【运动】单一 timeline 同时管理离场、入场、固定 UI 与 3D 场景；总时长 700–1000ms，旧页还在时新页已开始。画布跨路由不卸载。转场中锁点击。
【不要】等离场结束再开始入场。
```

## UnD 内容色转场与面包滚动

<a id="und-ny"></a>

- 来源：设计站点
- 作者：LOWORKS / Haruki Higashi
- 日期：站点仍在线，2026-11-21 可访问
- 子类：按内容色转场
- 触发：route change / scroll
- 技术栈：Next.js / GSAP / Tailwind / Shopify API
- 官方演示：https://und-ny.com/
- 原始出处：https://loworks.co.jp/en/works/und/
- 分册锚点：[und-ny](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#und-ny)

日本茶与面包电商站。页面切换会跟着目标页的内容色舞起来，再加上面包与配料的滚动展示。值得复刻的是把品牌色彩当成转场本身。

链接：

- [打开 UnD 官网](https://und-ny.com/)（und-ny.com）
- [查看 LOWORKS 项目页](https://loworks.co.jp/en/works/und/)（LOWORKS）

### 提示词

```
【场景】食品电商：不同分类有自己的主色。路由切换时，遮罩使用目标页主色。
【触发】路由切换；商品页内再用滚动展示食材。
【运动】色块播过 500–800ms，新页背景先落定再揭示媒体。每页暴露主色 token。
【不要】所有页面都用同一种黑色硬切。
```

## 重复镜像转场 / Repeating Image Transition

<a id="repeating-image-transition"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-04-28
- 子类：多帧重复镜像切换
- 触发：route change / click
- 技术栈：GSAP / WebGL 或 CSS
- 官方演示：https://tympanus.net/Development/RepeatingImageTransition/
- 原始出处：https://tympanus.net/codrops/2025/04/28/animating-in-frames-repeating-image-transition/
- 分册锚点：[repeating-image-transition](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#repeating-image-transition)

页面或镜头切换时，图像以重复帧、堆叠镜像的方式播过，像在连拍。适合影集与编辑站的路由切换。

链接：

- [打开 Repeating Image Transition 演示](https://tympanus.net/Development/RepeatingImageTransition/)（Codrops Demo）
- [阅读帧动画转场教程](https://tympanus.net/codrops/2025/04/28/animating-in-frames-repeating-image-transition/)（Codrops，2025-04-28）

### 提示词

```
【场景】影集站路由切换：图像以重复镜像/连拍帧播过。
【触发】路由或点击切镜头。
【运动】多帧重复与位移 700–1000ms，转场中锁点击。
【不要】用单次 fade 冒充连拍感。
```

## 运动路径转场 / Motion Path Transition

<a id="motion-path-transition"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：缩略图沿路径飞入
- 触发：click
- 技术栈：GSAP MotionPath
- 官方演示：https://tympanus.net/Tutorials/MotionPathTransition/
- 分册锚点：[motion-path-transition](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#motion-path-transition)

缩略图沿 GSAP MotionPath 飞向详情位，做竖向或弧线流转场。适合影集选图到大图的导航。

链接：

- [打开 Thumbnail Flow / MotionPath 演示](https://tympanus.net/Tutorials/MotionPathTransition/)（Codrops Demo）

### 提示词

```
【场景】影集：点击缩略图后，它沿一条弧线飞入详情主图位。
【触发】点击；ESC 或返回沿原路径回去。
【运动】路径运动 700–1000ms；详情文案延迟入场。
【不要】详情图与缩略图断开。
```

## 像素转场 / Pixel Transition

<a id="rb-pixel-transition"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：像素化再清晰
- 触发：state / route change
- 技术栈：React / Canvas 或 shader
- 官方演示：https://www.reactbits.dev/animations/pixel-transition
- 分册锚点：[rb-pixel-transition](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#rb-pixel-transition)

镜头或页面切换时先像素化，再清晰成新画面。适合游戏、复古或媒体切换。

链接：

- [打开 React Bits Pixel Transition 演示](https://www.reactbits.dev/animations/pixel-transition)（React Bits）

### 提示词

```
【场景】游戏或媒体切换：旧画面先像素化，再解粗成新画面。
【触发】状态或路由切换。
【运动】像素化 300–450ms，揭示 400–600ms。
【不要】像素过细看不出颗粒感。
```

## 像素互换 / Pixel Swap

<a id="rb-pixel-swap"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：像素块互换画面
- 触发：click / hover
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/pixel-swap
- 分册锚点：[rb-pixel-swap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#rb-pixel-swap)

两张图以像素块互相替换的方式切换，而不是整张淡入。适合产品对比或相册切图。

链接：

- [打开 React Bits Pixel Swap 演示](https://www.reactbits.dev/animations/pixel-swap)（React Bits）

### 提示词

```
【场景】产品两种配色对比：点击后图像以像素块互换。
【触发】点击或切换。
【运动】像素块 stagger 互换 500–800ms。
【不要】用整图 fade 冒充。
```

## 对比拖拽 / Compare

<a id="aceternity-compare"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：前后对比拖杆
- 触发：drag
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/compare
- 分册锚点：[aceternity-compare](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#aceternity-compare)

一根拖杆把两张图分左右或上下对比。适合修图前后、产品新旧款或模型输出对照。

链接：

- [打开 Aceternity Compare 演示](https://ui.aceternity.com/components/compare)（Aceternity UI）

### 提示词

```
【场景】修图前后或产品新旧款对比：一根拖杆分割两张图。
【触发】拖拽跟手；键盘可调整。
【运动】拖杆 1:1 跟手，松手可轻微吸附。两侧图都要有说明。
【不要】只能鼠标操作。
```

## 动画模态框 / Animated Modal

<a id="aceternity-animated-modal"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：模态框进出场
- 触发：click
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/animated-modal
- 分册锚点：[aceternity-animated-modal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a#aceternity-animated-modal)

模态框带入场与离场，另加遮罩和焦点困。这是页内「打开一层」的基础转场，不要做成突然踩出的盒子。

链接：

- [打开 Aceternity Animated Modal 演示](https://ui.aceternity.com/components/animated-modal)（Aceternity UI）

### 提示词

```
【场景】产品详情或表单以模态框打开。
【触发】点击打开；ESC 与点击遮罩关闭。
【运动】入场 300–450ms 導缩放+淡入，离场稍快；焦点困在框内。
【不要】突然出现/消失；忽略焦点管理。
```
