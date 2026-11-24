# 微交互反馈

本类共 11 条，来自分册「[手势、导航与微交互](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f)」。在 `data/cases.json` 中对应 `category` 为 `micro`。复制下方提示词即可用于 AI Coding。

## 目录

- [光标拖尾图集 / Image Motion Trail](#motion-trail)
- [磁吸 Dock / macOS Dock](#dock)
- [点击火花 / Click Spark](#rb-click-spark)
- [磁吸元素 / Magnet](#rb-magnet)
- [贴纸撕开 / Sticker Peel](#rb-sticker-peel)
- [液体按钮 / Liquid Button](#animate-liquid-button)
- [黏液输入 / Gooey Input](#aceternity-gooey-input)
- [占位消失输入 / Placeholders And Vanish Input](#vanish-input)
- [链接预览 / Link Preview](#link-preview)
- [方向感知悬停 / Direction Aware Hover](#direction-aware-hover)
- [图像变焦 / Image Zoom](#animate-image-zoom)

## 光标拖尾图集 / Image Motion Trail

<a id="motion-trail"></a>

- 来源：X
- 作者：Codrops
- 日期：2026-10-11
- 子类：光标拖尾图集
- 触发：pointer move
- 技术栈：GSAP / WebGL
- 官方演示：https://tympanus.net/Development/MotionTrailAnimations/
- 原始出处：https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/
- 分册锚点：[motion-trail](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#motion-trail)

光标或手指移动时，一系列图片沿轨迹相继呈现，形成有间距的拖尾。适合作品集英雄区或时尚编辑页。

链接：

- [打开 Motion Trail 演示](https://tympanus.net/Development/MotionTrailAnimations/)（Codrops Demo）
- [阅读设计解析](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)（Codrops，2023-10-18）

### 提示词

```
【场景】作品集英雄区：光标移过时作品图沿轨迹逐张呈现。
【触发】pointermove；默认休眠。
【运动】沿轨迹 40–80px 取一帧，循环 6–12 张；新帧从 0.85 缩放进入，旧帧 80–160ms 后淡出。限制同屏帧数。
【不要】触控设备上黏着光标跟随。
```

## 磁吸 Dock / macOS Dock

<a id="dock"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-21
- 子类：磁吸缩放 Dock
- 触发：pointer proximity
- 技术栈：React / Tailwind / Motion
- 官方演示：https://magicui.design/docs/components/dock
- 分册锚点：[dock](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#dock)

仿 macOS Dock：图标排一排，光标靠近时中心图标放大，邻近图标按距离衰减抬起。

链接：

- [打开 Magic UI Dock 演示](https://magicui.design/docs/components/dock)（Magic UI）

### 提示词

```
【场景】工具站底部：一排图标，光标靠近时像 macOS 一样鼓起。
【触发】光标距离；点击有按压回弹。
【运动】中心约 1.6–2x，左右 2–3 个邻居按距离衰减，spring 跟随。触屏改为点击高亮。
【不要】只放大当前图标、邻居不动。
```

## 点击火花 / Click Spark

<a id="rb-click-spark"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：点击爆出火花
- 触发：click
- 技术栈：React / Canvas 或 DOM
- 官方演示：https://www.reactbits.dev/animations/click-spark
- 分册锚点：[rb-click-spark](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-click-spark)

点击时在落点爆出短火花。适合按钮、点赞或游戏化界面的轻反馈。

链接：

- [打开 React Bits Click Spark 演示](https://www.reactbits.dev/animations/click-spark)（React Bits）

### 提示词

```
【场景】主要按钮或点赞：点击处爆出短火花。
【触发】点击一次播一次。
【运动】火花 300–500ms 消失；限制同屏实例。
【不要】效果残留或过长。
```

## 磁吸元素 / Magnet

<a id="rb-magnet"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：近距磁吸位移
- 触发：pointer proximity
- 技术栈：React
- 官方演示：https://www.reactbits.dev/animations/magnet
- 分册锚点：[rb-magnet](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-magnet)

光标靠近时，按钮或元素被轻轻吸向指针。适合主要行动点，幅度要小。

链接：

- [打开 React Bits Magnet 演示](https://www.reactbits.dev/animations/magnet)（React Bits）

### 提示词

```
【场景】主按钮在光标靠近时被轻轻吸向指针。
【触发】近距；离开后回位。
【运动】位移小（约 6–12px），spring 跟随。触屏关闭。
【不要】吸得太远导致点不中。
```

## 贴纸撕开 / Sticker Peel

<a id="rb-sticker-peel"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：贴纸角被撕起
- 触发：hover / drag
- 技术栈：React / CSS 或 WebGL
- 官方演示：https://www.reactbits.dev/animations/sticker-peel
- 分册锚点：[rb-sticker-peel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-sticker-peel)

一张贴纸或卡在悬停或拖拽时被撕起一角，露出下面的信息。适合优惠、彩蛋或卡片背面。

链接：

- [打开 React Bits Sticker Peel 演示](https://www.reactbits.dev/animations/sticker-peel)（React Bits）

### 提示词

```
【场景】优惠贴纸或卡片：悬停或拖角时被撕起，露出背面信息。
【触发】悬停或拖角；触屏改为拖。
【运动】撕起 400–600ms，带轻微卷曲。
【不要】背面信息只画在贴图里不可读。
```

## 液体按钮 / Liquid Button

<a id="animate-liquid-button"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：悬停液体填充
- 触发：hover / focus
- 技术栈：React / CSS 或 SVG
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/liquid-button
- 分册锚点：[animate-liquid-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-liquid-button)

按钮在悬停时从底部被颜色像液体一样填满。比普通背景切换更有材质。

链接：

- [打开 Animate UI Liquid Button 演示](https://animate-ui.com/docs/primitives/animate-ui/liquid-button)（Animate UI）

### 提示词

```
【场景】主按钮悬停时颜色从底部像液体一样涌入。
【触发】hover 与 focus。
【运动】填充 300–450ms，离开时退回。文字对比全程可读。
【不要】液体盖住文字。
```

## 黏液输入 / Gooey Input

<a id="aceternity-gooey-input"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：输入框黏液反馈
- 触发：focus / submit
- 技术栈：React / SVG filter
- 官方演示：https://ui.aceternity.com/components/gooey-input
- 分册锚点：[aceternity-gooey-input](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#aceternity-gooey-input)

输入框聚焦或提交时带黏液或融合质感的反馈。适合搜索或短输入，不要影响输入本身。

链接：

- [打开 Aceternity Gooey Input 演示](https://ui.aceternity.com/components/gooey-input)（Aceternity UI）

### 提示词

```
【场景】搜索框聚焦或提交时带短暂黏液反馈。
【触发】focus 或 submit。
【运动】质感 300–450ms，不能挡输入或光标。
【不要】把输入做成难以对准的液体。
```

## 占位消失输入 / Placeholders And Vanish Input

<a id="vanish-input"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：占位词轮换并在提交时消失
- 触发：idle cycle / submit
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/placeholders-and-vanish-input
- 分册锚点：[vanish-input](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#vanish-input)

输入框占位词轮换，提交时文字像被吸走一样消失。适合搜索或 AI 提示输入。

链接：

- [打开 Aceternity Placeholders And Vanish Input 演示](https://ui.aceternity.com/components/placeholders-and-vanish-input)（Aceternity UI）

### 提示词

```
【场景】AI 或搜索输入：空闲时占位词轮换，提交时字被吸走。
【触发】空闲轮换；提交播放一次消失。
【运动】消失 400–600ms 后清空并恢复占位。
【不要】动画挡住真正的输入与粘贴。
```

## 链接预览 / Link Preview

<a id="link-preview"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：悬停链接预览卡
- 触发：hover / focus
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/link-preview
- 分册锚点：[link-preview](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#link-preview)

悬停链接时弹出一张预览卡，带短位移与淡入。适合编辑正文或导航。

链接：

- [打开 Aceternity Link Preview 演示](https://ui.aceternity.com/components/link-preview)（Aceternity UI）

### 提示词

```
【场景】正文链接悬停时弹出预览卡。
【触发】hover 与 focus；移开后关闭。
【运动】短位移+淡入 200–300ms；不要挡住原链接。
【不要】只有悬停、键盘无法打开。
```

## 方向感知悬停 / Direction Aware Hover

<a id="direction-aware-hover"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：从进入方向覆盖
- 触发：hover / focus
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/direction-aware-hover
- 分册锚点：[direction-aware-hover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#direction-aware-hover)

悬停覆盖层从光标进入卡片的那一侧滑入。比统一的自下而上覆盖更有方向感。

链接：

- [打开 Aceternity Direction Aware Hover 演示](https://ui.aceternity.com/components/direction-aware-hover)（Aceternity UI）

### 提示词

```
【场景】作品卡悬停：信息层从光标进入的那一侧滑入。
【触发】hover 与 focus。
【运动】按进入边滑动 300–450ms；离开沿进入边退回。
【不要】触屏只靠悬停。
```

## 图像变焦 / Image Zoom

<a id="animate-image-zoom"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：指针位置变焦
- 触发：hover / click
- 技术栈：React
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/image-zoom
- 分册锚点：[animate-image-zoom](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-image-zoom)

图像在悬停或点击时，对准指针位置放大。适合商品材质特写或摄影细节。

链接：

- [打开 Animate UI Image Zoom 演示](https://animate-ui.com/docs/primitives/animate-ui/image-zoom)（Animate UI）

### 提示词

```
【场景】商品图悬停时对准指针放大看材质。
【触发】桌面悬停，触屏点击放大。
【运动】放大跟手，比例约 1.5–2x；离开后收回。
【不要】放大后无法关闭。
```
