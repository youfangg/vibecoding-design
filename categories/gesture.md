# 手势与拖拽

本类共 16 条，来自分册「[手势、导航与微交互](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f)」。在 `data/cases.json` 中对应 `category` 为 `gesture`。复制下方提示词即可用于 AI Coding。

## 目录

- [弧形画廊 / Circular Gallery](#circular-gallery)
- [跟手抽屉 / Vaul](#vaul-drawer)
- [可投掷卡堆 / Stack](#card-stack)
- [拖拽重排列表 / Reorder Items](#reorder-list)
- [Palmer 可拖商品网格](#palmer-grid)
- [弹性滑杆 / Elastic Slider](#rb-elastic-slider)
- [证件挂绳 / Lanyard](#rb-lanyard)
- [可拖卡片 / Draggable Card](#aceternity-draggable-card)
- [重力场 / Gravity](#fancy-gravity)
- [看板拖拽 / Kanban Board](#cult-kanban)
- [滚轮选择 / Wheel Picker](#kokonut-wheel-picker)
- [滑动确认 / Slide to Confirm](#kokonut-slide-to-confirm)
- [长按确认 / Hold Button](#kokonut-hold-button)
- [变形滑块 / Morph Slider](#rb-morph-slider)
- [无限画布 / Infinite Canvas](#infinite-canvas)
- [加入购物车导引 / Shopping Cart Animation](#shopping-cart-animation)

## 弧形画廊 / Circular Gallery

<a id="circular-gallery"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-21
- 子类：弧形画廊拖拽浏览
- 触发：drag / scroll / keyboard
- 技术栈：React
- 官方演示：https://reactbits.dev/components/circular-gallery
- 分册锚点：[circular-gallery](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#circular-gallery)

一条贴着弧面的图片画廊，可拖拽、滚动或键盘切换，中间一张正对用户。适合摄影精选或专辑封面。

链接：

- [打开 React Bits Circular Gallery 演示](https://reactbits.dev/components/circular-gallery)（React Bits）

### 提示词

```
【场景】摄影精选：图片沿弧线排开，中间一张正对用户。
【触发】拖拽、滚轮、左右键；点击中间卡打开大图。
【运动】中间卡 scale 1，两侧递减并微旋转；拖拽带惯性并 snap。
【不要】无限滑过且不吸停；关掉图的 alt。
```

## 跟手抽屉 / Vaul

<a id="vaul-drawer"></a>

- 来源：AI Coding
- 作者：Emil Kowalski
- 日期：采集于 2026-11-23
- 子类：跟手与惯性抽屉
- 触发：drag / click
- 技术栈：React / Vaul
- 官方演示：https://vaul.emilkowal.ski/
- 原始出处：https://emilkowal.ski/ui/building-a-drawer-component
- 分册锚点：[vaul-drawer](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#vaul-drawer)

为 Web 做的 iOS Sheet 式抽屉：拖拽跟手 1:1，松手时带着速度吸附或关闭，也可停在中间吸附点。常用曲线 cubic-bezier(0.32, 0.72, 0, 1)，约 500ms。

链接：

- [打开 Vaul 官方演示](https://vaul.emilkowal.ski/)（Vaul）
- [阅读制作笔记](https://emilkowal.ski/ui/building-a-drawer-component)（emilkowal.ski）

### 提示词

```
【场景】移动端订单详情或过滤器：从底部拖出面板，可停在半开与全开。
【触发】点击打开；拖动跟手 1:1；ESC 与遮罩关闭。
【运动】到顶后上拖被阻尼；内容滚到顶约 100ms 再允许拖起；松手约 500ms。
【不要】用 CSS 变量承载拖拽位移；忽略 reduced-motion。
```

## 可投掷卡堆 / Stack

<a id="card-stack"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：拖掷卡堆
- 触发：drag / flick / click
- 技术栈：React
- 官方演示：https://reactbits.dev/components/stack
- 分册锚点：[card-stack](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#card-stack)

一堆可拖、可投、可点的卡片。被扔出的卡会收到堆底。适合选相或推荐卡堆。

链接：

- [打开 React Bits Stack 演示](https://reactbits.dev/components/stack)（React Bits）

### 提示词

```
【场景】选相：三四张照片卡堆在一起，可把最上面一张投走。
【触发】拖拽或快投；也可点击送到堆底。
【运动】偏移映射旋转；超过阈值扔出并 spring 落到底，否则 300–450ms 回弹。
【不要】把卡真的删掉。提供键盘替代。
```

## 拖拽重排列表 / Reorder Items

<a id="reorder-list"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-23
- 子类：拖拽重排与布局计算
- 触发：drag
- 技术栈：Motion for React
- 官方演示：https://motion.dev/examples/react-reorder-items
- 分册锚点：[reorder-list](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#reorder-list)

拖动一行时，其余行用 layout 动画自动让位。重点不是拖起本身，而是邻居如何顺畅让路。

链接：

- [打开 Motion Reorder 示例](https://motion.dev/examples/react-reorder-items)（Motion）

### 提示词

```
【场景】待办或播放列表：按住一行拖到新位置。
【触发】拖拽句柄；键盘可上下移动。
【运动】被拖行轻微抬高；其余行 layout 让位 250–400ms，松手吸到最近槽位。
【不要】让邻居跳跃或立刻贴换。
```

## Palmer 可拖商品网格

<a id="palmer-grid"></a>

- 来源：设计站点
- 作者：Joffrey Spitzer / Codrops（原站为 Uncommon 为 Palmer 而作）
- 日期：2025-09-01
- 子类：可拖商品网格与 Flip 详情
- 触发：load / drag / wheel / click
- 技术栈：GSAP Draggable / Flip / SplitText
- 官方演示：https://tympanus.net/Tutorials/PalmerDraggableGrid/
- 原始出处：https://tympanus.net/codrops/2025/09/01/recreating-palmers-draggable-product-grid-with-gsap/
- 分册锚点：[palmer-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#palmer-grid)

复刻 Palmer 商品网格：随机错落入场后可二维拖拽或滚轮平移。点击后网格让侧，图片用 Flip 飞进详情栏。

链接：

- [打开可拖商品网格演示](https://tympanus.net/Tutorials/PalmerDraggableGrid/)（Codrops Demo）
- [阅读复刻教程](https://tympanus.net/codrops/2025/09/01/recreating-palmers-draggable-product-grid-with-gsap/)（Codrops，2025-09-01）

### 提示词

```
【场景】家居店首屏：多列商品铺满视口，可拖或滚轮浏览，点击进详情。
【触发】入场一次；之后拖拽或滚轮；点击打开详情。
【运动】入场随机 stagger；浏览带惯性；点击后图片 Flip 1.2s 飞进详情，标题 SplitText 揭示。
【不要】把详情做成与网格图断开的模态框。
```

## 弹性滑杆 / Elastic Slider

<a id="rb-elastic-slider"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：可拉弹的滑杆
- 触发：drag
- 技术栈：React
- 官方演示：https://www.reactbits.dev/components/elastic-slider
- 分册锚点：[rb-elastic-slider](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-elastic-slider)

拖动滑杆时轨道或按钮带弹性拉伸，松手回弹。比普通滑块更有触感，适合音量、进度或参数调节。

链接：

- [打开 React Bits Elastic Slider 演示](https://www.reactbits.dev/components/elastic-slider)（React Bits）

### 提示词

```
【场景】音量或参数滑杆：拖动时轨道有弹性拉伸。
【触发】拖拽跟手；键盘可微调。
【运动】跟手 1:1，边缘可拉过再回弹；松手 250–400ms spring。
【不要】只做视觉弹性却把值绑死。
```

## 证件挂绳 / Lanyard

<a id="rb-lanyard"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：三维挂绳物理
- 触发：drag
- 技术栈：React / R3F / 物理
- 官方演示：https://www.reactbits.dev/components/lanyard
- 分册锚点：[rb-lanyard](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-lanyard)

一张三维证件或卡片挂在绳子上，可被拖拽甩动并回摆。适合关于页或团队名片的玩味交互。

链接：

- [打开 React Bits Lanyard 演示](https://www.reactbits.dev/components/lanyard)（React Bits）

### 提示词

```
【场景】关于页：一张工牌挂在绳子上，可被拖拽甩动。
【触发】拖拽；松手后摆回。
【运动】绳与卡有重量和阻尼，能量要耗尽。卡片信息仍要可读。
【不要】在弱设备上强行物理；触屏要好拖。
```

## 可拖卡片 / Draggable Card

<a id="aceternity-draggable-card"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：自由拖拽卡片
- 触发：drag
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/draggable-card
- 分册锚点：[aceternity-draggable-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#aceternity-draggable-card)

桌面上的卡片可被拖到任意位置，带惯性或回弹。适合看板草稿、贴纸或玩味桌面。

链接：

- [打开 Aceternity Draggable Card 演示](https://ui.aceternity.com/components/draggable-card)（Aceternity UI）

### 提示词

```
【场景】灵感贴纸墙：卡片可被拖到任意位置。
【触发】拖拽；可选双击复位。
【运动】跟手，松手可带惯性；不要拖出可用区。
【不要】挡住键盘可达的内容。
```

## 重力场 / Gravity

<a id="fancy-gravity"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：元素受重力掉落
- 触发：pointer / physics
- 技术栈：React / 物理引擎
- 官方演示：https://www.fancycomponents.dev/docs/components/physics/gravity
- 分册锚点：[fancy-gravity](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#fancy-gravity)

页面里的元素像刚体一样受重力掉落、堆叠或被拖起。适合互动演示或彩蛋，不适合作为主要阅读布局。

链接：

- [打开 Fancy Gravity 演示](https://www.fancycomponents.dev/docs/components/physics/gravity)（Fancy Components）

### 提示词

```
【场景】互动彩蛋：按钮或标签可被打落再堆起来。
【触发】点击或拖拽启动物理。
【运动】重力、碰撞与阻尼；提供复位。
【不要】把主要导航做成不可预测的物理玩具。
```

## 看板拖拽 / Kanban Board

<a id="cult-kanban"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-23
- 子类：看板列间拖拽
- 触发：drag
- 技术栈：React
- 官方演示：https://www.cult-ui.com/docs/components/kanban-board
- 分册锚点：[cult-kanban](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#cult-kanban)

任务卡可在列与列之间拖拽，目标列让位。是项目管理里最完整的拖拽场景之一。

链接：

- [打开 Cult UI Kanban Board 演示](https://www.cult-ui.com/docs/components/kanban-board)（Cult UI）

### 提示词

```
【场景】项目看板：卡片可在列间拖拽。
【触发】拖拽卡片；键盘可移动。
【运动】卡片跟手抬起；目标列出现占位，邻居 layout 让位 200–350ms。
【不要】没有键盘路径或落点预览。
```

## 滚轮选择 / Wheel Picker

<a id="kokonut-wheel-picker"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：iOS 式滚轮
- 触发：drag / wheel
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/inputs/wheel-picker
- 分册锚点：[kokonut-wheel-picker](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-wheel-picker)

iOS 风格的滚轮选择器，可拖、可滑、可吸到刻度。适合时间、数量或枚举选项。

链接：

- [打开 Kokonut Wheel Picker 演示](https://kokonutui.com/docs/inputs/wheel-picker)（Kokonut UI）

### 提示词

```
【场景】时间或数量选择：iOS 式滚轮。
【触发】拖拽或滚轮；松手吸到刻度。
【运动】跟手，惯性减速后 snap；当前项居中清晰，两侧变淡。
【不要】没有键盘或输入替代。
```

## 滑动确认 / Slide to Confirm

<a id="kokonut-slide-to-confirm"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：滑块确认动作
- 触发：drag
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/buttons/slide-to-confirm
- 分册锚点：[kokonut-slide-to-confirm](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-slide-to-confirm)

把滑块拖到尽头才确认，常用于付款、删除或不可撤销操作。要有明确的成功态与可取消。

链接：

- [打开 Kokonut Slide to Confirm 演示](https://kokonutui.com/docs/buttons/slide-to-confirm)（Kokonut UI）

### 提示词

```
【场景】付款或删除前：把滑块拖到尽头才确认。
【触发】拖拽；未到尽头松手则回弹。
【运动】跟手 1:1，到达尽头后锁定并出现成功态 300–450ms。
【不要】用它替换所有按钮；提供可访问的替代确认。
```

## 长按确认 / Hold Button

<a id="kokonut-hold-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：长按填充确认
- 触发：pointer hold
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/buttons/hold-button
- 分册锚点：[kokonut-hold-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-hold-button)

按住按钮一段时间才触发，常带环形或条形进度。适合录音、删除或危险动作。

链接：

- [打开 Kokonut Hold Button 演示](https://kokonutui.com/docs/buttons/hold-button)（Kokonut UI）

### 提示词

```
【场景】删除或录音：按住约 800–1200ms 才触发。
【触发】按下开始填充，松开则取消并回退。
【运动】进度沿环或条填充；完成时短暂确认反馈。
【不要】没有取消路径；忽略键盘操作。
```

## 变形滑块 / Morph Slider

<a id="rb-morph-slider"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：滑块控制形态变形
- 触发：drag
- 技术栈：React / SVG 或 Motion
- 官方演示：https://www.reactbits.dev/components/morph-slider
- 分册锚点：[rb-morph-slider](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-morph-slider)

拖动滑块时，图形或布局发生形态变形。适合对比两种状态、材质或排版。

链接：

- [打开 React Bits Morph Slider 演示](https://www.reactbits.dev/components/morph-slider)（React Bits）

### 提示词

```
【场景】两种产品状态或排版用滑块互相变形。
【触发】拖拽滑块，进度 0–1 映射变形。
【运动】形态插值要连续，松手可吸到两端。
【不要】只在两端切换、中间没有过渡。
```

## 无限画布 / Infinite Canvas

<a id="infinite-canvas"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：可拖无限画布
- 触发：drag / wheel / pinch
- 技术栈：JavaScript / GSAP 或自研
- 官方演示：https://tympanus.net/Tutorials/InfiniteCanvas/
- 分册锚点：[infinite-canvas](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#infinite-canvas)

一块可平移、可缩放的无限画布，适合地图式浏览、白板或作品墙。

链接：

- [打开 Infinite Canvas 演示](https://tympanus.net/Tutorials/InfiniteCanvas/)（Codrops Demo）

### 提示词

```
【场景】作品墙或白板：可拖拽平移，滚轮缩放。
【触发】拖、滚轮、触屏捏合。
【运动】平移带惯性，缩放跟手并有范围限制。提供复位。
【不要】没有边界提示或找不到回原点的方式。
```

## 加入购物车导引 / Shopping Cart Animation

<a id="shopping-cart-animation"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2024-11-21
- 子类：从商品飞向购物车
- 触发：click add-to-cart
- 技术栈：GSAP
- 官方演示：https://tympanus.net/Tutorials/ShoppingCartAnimation/
- 原始出处：https://tympanus.net/codrops/2024/11/21/from-product-to-cart-adding-guiding-animations-to-the-shopping-experience/
- 分册锚点：[shopping-cart-animation](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#shopping-cart-animation)

把商品加入购物车时，用导引动画把用户的视线带到车图标，而不是只改一个数字。

链接：

- [打开 Shopping Cart Animation 演示](https://tympanus.net/Tutorials/ShoppingCartAnimation/)（Codrops Demo）
- [阅读购物车导引教程](https://tympanus.net/codrops/2024/11/21/from-product-to-cart-adding-guiding-animations-to-the-shopping-experience/)（Codrops，2024-11-21）

### 提示词

```
【场景】商品卡点击加入购物车：缩略图或一个标记飞向车图标。
【触发】点击加入。
【运动】沿弧线 500–700ms 飞入，车图标短暂鼓起，数字更新。
【不要】每次加入都做超长全屏动画。
```
