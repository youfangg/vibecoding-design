# 加载与骨架

本类共 13 条，来自分册「[加载与数据可视化](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a)」。在 `data/cases.json` 中对应 `category` 为 `loading`。复制下方提示词即可用于 AI Coding。

## 目录

- [分阶段加载 / Multi Step Loader](#multi-step-loader)
- [格子波动状态行 / Lattice Loader](#lattice-loader)
- [宽卡骨架到内容 / Wide Card Skeleton](#animata-wide-card-skeleton)
- [列表行骨架 / List Skeleton](#animata-list-skeleton)
- [拆分屏幕预加载 / Split Reveal](#animata-split-reveal)
- [竖条瓶砖预加载 / Vertical Tiles](#animata-vertical-tiles)
- [加载走马灯 / Loading Carousel](#cult-loading-carousel)
- [线性遮罩揭示 / Loading Line Reveal](#motion-line-reveal)
- [SVG 路径加载圈 / SVG Loading Spinner](#motion-svg-spinner)
- [无限加载列表 / Infinite Loading](#motion-infinite-loading)
- [图像生成加载 / Image Generation Loader](#image-generation-loader)
- [点阵动画格 / Motion Grid](#animate-motion-grid)
- [AI 状态加载 / AI State Loading](#kokonut-ai-loading)

## 分阶段加载 / Multi Step Loader

<a id="multi-step-loader"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：分阶段揭示
- 触发：async process
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/multi-step-loader
- 分册锚点：[multi-step-loader](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#multi-step-loader)

耗时流程里用一串可读状态句通知进展，而不是一个转圈。官方默认每步 2000ms，可循环或在最后一步停住。适合部署、导入或 AI 任务。

链接：

- [打开 Aceternity Multi Step Loader 演示](https://ui.aceternity.com/components/multi-step-loader)（Aceternity UI）

### 提示词

```
【场景】部署或导入面板：依次出现「正在构建」「跑检查」「正在部署」。
【触发】异步任务开始；结束后关闭加载层。
【运动】每步文案微位移入场 300–450ms；完成步出现勾选并降为次要色。优先绑定真实进度，否则约 2000ms/步。结束时 loop=false。
【不要】用无限循环冒充真实进度；忽略 reduced-motion。
```

## 格子波动状态行 / Lattice Loader

<a id="lattice-loader"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：代理任务状态行
- 触发：task running
- 技术栈：React
- 官方演示：https://reactbits.dev/micro/lattice-loader
- 分册锚点：[lattice-loader](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#lattice-loader)

一行代理任务状态：一片格子如波浪依次点亮，旁边是实时秒表。官方用它表现 Agent 正在工作，而不是通用转圈。

链接：

- [打开 React Bits Lattice Loader 演示](https://reactbits.dev/micro/lattice-loader)（React Bits）

### 提示词

```
【场景】AI 对话或任务行：左侧格子波动点亮，右侧等宽秒表与状态文案。
【触发】任务进行中循环；结束或出错时停波并停表。
【运动】格子按对角线提亮，stagger 40–80ms，整波 1.2–1.8s。不要频闪。
【不要】只用一个旋转图标替代。
```

## 宽卡骨架到内容 / Wide Card Skeleton

<a id="animata-wide-card-skeleton"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：骨架到真实内容的布局变形
- 触发：data resolve
- 技术栈：React / Tailwind / Motion layout
- 官方演示：https://animata.design/docs/skeleton/wide-card
- 分册锚点：[animata-wide-card-skeleton](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animata-wide-card-skeleton)

官方演示是一张宽卡骨架：封面、标题与文案位是脆骨色块，带微弱模糊闪动。落地时要把这些块的位置与尺寸共享给真实内容——数据到达后做一次布局变形与模糊消失，而不是瞬间换掉卡面。

链接：

- [打开 Animata Wide Card Skeleton 演示](https://animata.design/docs/skeleton/wide-card)（Animata）

### 提示词

```
【场景】资讯或商品宽卡列表：请求中先看到与成品同结构的骨架，数据到达后骨架变成真实封面与文案。
【触发】请求开始出现骨架；成功后变形一次；失败则换成错误态。
【运动】骨架块微弱模糊闪 1.2–1.6s 循环。数据到达后，封面/标题/摘要从骨架几何用 layout 或共享元素演进到真实尺寸，450–600ms，模糊从 8px 收到 0。多卡 stagger 60–100ms。
【不要】瞬间切换、先闪空再淡入，或让骨架与成品结构对不上。reduced-motion 时直接显示成品。
```

## 列表行骨架 / List Skeleton

<a id="animata-list-skeleton"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：列表占位骨架
- 触发：data resolve
- 技术栈：React / Tailwind
- 官方演示：https://animata.design/docs/skeleton/list
- 分册锚点：[animata-list-skeleton](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animata-list-skeleton)

一组列表行的骨架占位：头像圆与两行文案块循环闪动。适合通知、搜索结果或好友列表。落地时应让每行骨架对齐真实行项再交接。

链接：

- [打开 Animata List Skeleton 演示](https://animata.design/docs/skeleton/list)（Animata）

### 提示词

```
【场景】通知或搜索结果列表首屏加载。
【触发】请求中显示 4–6 行骨架；数据到达后逐行变成真实内容。
【运动】骨架微闪。交接时每行从骨架几何演进到真实行，350–500ms，stagger 40–70ms。
【不要】整表一起闪换；骨架行高与成品行高不一致。
```

## 拆分屏幕预加载 / Split Reveal

<a id="animata-split-reveal"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：预加载拆屏揭示
- 触发：load complete
- 技术栈：React
- 官方演示：https://animata.design/docs/preloader/split-reveal
- 分册锚点：[animata-split-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animata-split-reveal)

全屏预加载：屏幕从中间或一条缝拆开，露出下面的真实首屏。适合品牌站或编辑型产品进场，把等待编成一次揭幕。

链接：

- [打开 Animata Split Reveal 演示](https://animata.design/docs/preloader/split-reveal)（Animata）

### 提示词

```
【场景】品牌站首屏预加载：资源就绪后，遮罩从中间拆开揭示首屏。
【触发】关键资源加载完成；最长等 3–4s。
【运动】两扇向上下或两侧移开，700–1000ms，easing cubic-bezier(0.76, 0, 0.24, 1)。拆开后卸载遮罩。
【不要】每次路由都重播；挡住读屏进入。
```

## 竖条瓶砖预加载 / Vertical Tiles

<a id="animata-vertical-tiles"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：竖向瓶砖收起
- 触发：load complete
- 技术栈：React
- 官方演示：https://animata.design/docs/preloader/vertical-tiles
- 分册锚点：[animata-vertical-tiles](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animata-vertical-tiles)

预加载层被切成多条竖向瓶砖，就绪后逐条收起或滑走，露出首屏。与中线拆分不同，它更像一扇百叶窗依次打开。

链接：

- [打开 Animata Vertical Tiles 演示](https://animata.design/docs/preloader/vertical-tiles)（Animata）

### 提示词

```
【场景】影集或时尚站进场：全屏被切成 7–11 条竖瓶砖，就绪后逐条收起。
【触发】首屏资源就绪。
【运动】瓶砖向上下滑出或缩到 0，stagger 40–70ms，单条 500–700ms。可从中间向两侧。
【不要】瓶砖数量过多导致频闪；忽略 reduced-motion（改为直接淡出）。
```

## 加载走马灯 / Loading Carousel

<a id="cult-loading-carousel"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-23
- 子类：等待中的轮播提示
- 触发：long wait
- 技术栈：React
- 官方演示：https://www.cult-ui.com/docs/components/loading-carousel
- 分册锚点：[cult-loading-carousel](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#cult-loading-carousel)

等待时间较长时，用一组短提示或插图轮播打发，而不是干等一条进度条。适合导入、生成或对账等真正要花几秒的流程。

链接：

- [打开 Cult UI Loading Carousel 演示](https://www.cult-ui.com/docs/components/loading-carousel)（Cult UI）

### 提示词

```
【场景】数据导入或 AI 生成要等 5s 以上：中央轮播 3–5 条短提示。
【触发】任务进行中循环；结束后当前卡收起并揭示结果。
【运动】卡片水平或垂直切换，500–700ms；可配进度点。
【不要】轮播快过读完；用它冒充短暂加载。
```

## 线性遮罩揭示 / Loading Line Reveal

<a id="motion-line-reveal"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-23
- 子类：线性遮罩揭示内容
- 触发：load complete
- 技术栈：Motion for React
- 官方演示：https://motion.dev/examples/react-loading-line-reveal
- 分册锚点：[motion-line-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#motion-line-reveal)

Motion 官方例子：一道线性遮罩或扫描把真实内容揭出来，而不是转圈消失后内容突然出现。适合首屏英雄、图集或章节进场。

链接：

- [打开 Motion Loading line reveal 示例](https://motion.dev/examples/react-loading-line-reveal)（Motion）

### 提示词

```
【场景】首屏英雄图与标题被一条遮罩盖住，就绪后遮罩移开揭示。
【触发】首屏资源就绪一次。
【运动】遮罩沿一条轴移开或收缩，700–1000ms，easing cubic-bezier(0.76, 0, 0.24, 1)。文案可延迟 80ms 再入场。
【不要】用整屏 fade 冒充；揭示中让内容跳动。
```

## SVG 路径加载圈 / SVG Loading Spinner

<a id="motion-svg-spinner"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-23
- 子类：路径描边加载
- 触发：loading
- 技术栈：Motion / SVG
- 官方演示：https://motion.dev/examples/js-svg-loading-spinner
- 分册锚点：[motion-svg-spinner](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#motion-svg-spinner)

用 SVG 路径描边做加载指示，而不是 CSS 边框旋转。路径可以是品牌字母或图标，让等待本身带品牌识别。

链接：

- [打开 Motion SVG loading spinner 示例](https://motion.dev/examples/js-svg-loading-spinner)（Motion）

### 提示词

```
【场景】按钮或面板内的品牌加载：图标轮廓被描边。
【触发】请求进行中循环；结束后路径闭合并换成勾选。
【运动】stroke-dashoffset 循环约 1s，线宽稳定；结束 250ms 切换。
【不要】路径闪烁或转圈过快。
```

## 无限加载列表 / Infinite Loading

<a id="motion-infinite-loading"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-23
- 子类：触底加载入场
- 触发：scroll end / fetch more
- 技术栈：Motion for React
- 官方演示：https://motion.dev/examples/react-infinite-loading
- 分册锚点：[motion-infinite-loading](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#motion-infinite-loading)

Motion 官方例子演示无限列表：新一批到达时行项入场，而不是突然贴在底部。适合信消、商品流或日志。

链接：

- [打开 Motion Infinite loading 示例](https://motion.dev/examples/react-infinite-loading)（Motion）

### 提示词

```
【场景】商品流或信消：滚到底部加载下一页。
【触发】触底请求；新行到达后入场。
【运动】新行从 y 12–20px、opacity 0 进入，stagger 40–60ms，400–550ms。底部可有短骨架。
【不要】重播已在视口内的旧行入场。
```

## 图像生成加载 / Image Generation Loader

<a id="image-generation-loader"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：生成中的图像占位
- 触发：generation in progress
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/image-generation-loader
- 分册锚点：[image-generation-loader](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#image-generation-loader)

专为图像生成等待设计的加载态：占位框里能看到正在生成的过程感，而不是空白方块。适合 AI 绘图或视觉编辑工具。

链接：

- [打开 Aceternity Image Generation Loader 演示](https://ui.aceternity.com/components/image-generation-loader)（Aceternity UI）

### 提示词

```
【场景】AI 绘图面板：画布里先是生成中的占位，完成后切到成图。
【触发】点击生成；完成或失败时切换。
【运动】占位里有进行中的光泽或噪声；成图以 400–600ms 模糊清晰或淡入落定。
【不要】用泛骨架冒充「正在画」的过程感。
```

## 点阵动画格 / Motion Grid

<a id="animate-motion-grid"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：帧动画点阵
- 触发：loading / status
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/motion-grid
- 分册锚点：[animate-motion-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animate-motion-grid)

一片点阵按帧播动画，用于加载或状态指示。它把等待变成一小段像素动画，适合工具栏、聊天输入附近的状态。

链接：

- [打开 Animate UI Motion Grid 演示](https://animate-ui.com/docs/primitives/animate-ui/motion-grid)（Animate UI）

### 提示词

```
【场景】聊天输入旁的「正在思考」：一块小点阵播一段循环动画。
【触发】任务进行中循环；结束时停在最后一帧或淡出。
【运动】帧间切换平稳，避免频闪；尺寸小、不抢戏。
【不要】做成全屏点阵背景。
```

## AI 状态加载 / AI State Loading

<a id="kokonut-ai-loading"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：对话式 AI 状态
- 触发：agent running
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/ai/ai-loading
- 分册锚点：[kokonut-ai-loading](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#kokonut-ai-loading)

面向 AI 聊天的状态加载：用于正在思考、拉取工具或生成中的可读反馈，而不是通用骨架。适合对话式产品里的等待行。

链接：

- [打开 Kokonut AI State Loading 演示](https://kokonutui.com/docs/ai/ai-loading)（Kokonut UI）

### 提示词

```
【场景】AI 对话气泡：助手正在思考或调用工具时出现状态行。
【触发】任务开始；文案可随实际阶段换。
【运动】状态文案微入场，可配微弱脆骨或脉冲；切换 200–300ms。
【不要】用泛转圈替代可读状态。
```
