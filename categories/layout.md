# 导航与布局变形

本类共 20 条，来自分册「[手势、导航与微交互](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f)」。在 `data/cases.json` 中对应 `category` 为 `layout`。复制下方提示词即可用于 AI Coding。

## 目录

- [整页滑移抽屉导航 / Page-Slide Drawer Nav](#page-slide-drawer)
- [可展开卡片 / Expandable Card](#expandable-card)
- [共享布局动画 / Shared Layout Animation](#shared-layout)
- [可收缩导航 / Resizable Navbar](#resizable-navbar)
- [动画标签页 / Animated Tabs](#aceternity-tabs)
- [手风琴画廊 / Accordion Gallery](#accordion-gallery)
- [黏液导航 / Gooey Nav](#rb-gooey-nav)
- [气泡菜单 / Bubble Menu](#rb-bubble-menu)
- [文件夹 / Folder](#rb-folder)
- [自动高度 / Auto Height](#animate-auto-height)
- [底部导航 / Bottom Navigation](#animate-bottom-nav)
- [滑块高亮 / Highlight](#animate-highlight)
- [可展开工具栏 / Toolbar Expandable](#cult-toolbar-expandable)
- [标记菜单 / Marking Menu](#kokonut-marking-menu)
- [状态岛 / Status Island](#kokonut-status-island)
- [反向缓动裁切菜单 / Ease Reverse Clip Menu](#ease-reverse-clip-menu)
- [情境感知固定物 / Context-Aware Fixed Elements](#context-aware-fixed)
- [按钮长成表单 / Morph Popover](#kokonut-morph-popover)
- [浮动槽口导航 / Notch](#aceternity-notch)
- [灵动岛 / Dynamic Island](#cult-dynamic-island)

## 整页滑移抽屉导航 / Page-Slide Drawer Nav

<a id="page-slide-drawer"></a>

- 来源：X
- 作者：Details（@details_so）
- 日期：2026-10-14
- 子类：整页滑移揭示底层菜单
- 触发：click
- 技术栈：GSAP
- 原始出处：https://x.com/details_so/status/2110323365303013702
- 分册锚点：[page-slide-drawer](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#page-slide-drawer)

菜单藏在整个站点后面。点开时，当前页面作为一整块表面向左并轻微缩放，露出后层导航。公开可操作源是 X 录像，完整源码在付费 Vault，本条仅作运动参考。

链接：

- [查看 Details 的 X 原帖](https://x.com/details_so/status/2110323365303013702)（X，2026-10-14）

### 提示词

```
【场景】品牌站全局导航：菜单在页面层之下，打开时整页像一块表面移开。
【触发】点击菜单；ESC 与遮罩关闭。
【运动】整页向左平移并缩放到约 0.92，600–800ms；菜单一直在后层。打开时锁滚动并困焦点。
【不要】只做一个右侧 slide-over 抽屉。
```

## 可展开卡片 / Expandable Card

<a id="expandable-card"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-21
- 子类：共享元素展开
- 触发：click
- 技术栈：React / Motion layoutId
- 官方演示：https://ui.aceternity.com/components/expandable-card
- 分册锚点：[expandable-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#expandable-card)

点击网格中的卡片，它展开成详情视图。缩略图与标题在两个布局之间连续演进，而不是弹出一个无关模态框。

链接：

- [打开 Aceternity Expandable Cards 演示](https://ui.aceternity.com/components/expandable-card)（Aceternity UI）

### 提示词

```
【场景】专辑或案例网格：点击一张卡展成详情层。
【触发】点击；ESC 与遮罩关闭。
【运动】封面与标题共享布局 450–600ms；正文延迟约 80ms 淡入。
【不要】弹出与封面断线的模态框。
```

## 共享布局动画 / Shared Layout Animation

<a id="shared-layout"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-21
- 子类：共享布局动画
- 触发：state / selection change
- 技术栈：Motion for React（layoutId）
- 官方演示：https://motion.dev/examples/react-shared-layout-animation
- 分册锚点：[shared-layout](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#shared-layout)

Motion 官方 layoutId 示例：两个不同树上的元素被识别为同一个对象，从旧位置与尺寸演进到新布局。这是网格到详情、选中高亮与 Tab 滑块的基础语法。

链接：

- [打开 Motion 共享布局示例](https://motion.dev/examples/react-shared-layout-animation)（Motion）

### 提示词

```
【场景】产品列表到详情：封面从列表位置飞到详情主图位。
【触发】选中或路由切换。
【运动】相同 layoutId，450–650ms，带轻微 spring。滚动容器要开 layoutScroll。
【不要】用两个独立 fade 冒充共享元素。
```

## 可收缩导航 / Resizable Navbar

<a id="resizable-navbar"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：滚动时导航收缩
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/resizable-navbar
- 分册锚点：[resizable-navbar](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#resizable-navbar)

导航在页顶较大，向下滚动后收成更紧凑的条。是内容站与 SaaS 里常见的布局变形。

链接：

- [打开 Aceternity Resizable Navbar 演示](https://ui.aceternity.com/components/resizable-navbar)（Aceternity UI）

### 提示词

```
【场景】内容站或 SaaS 顶栏：滚动后从大导航收成紧凑条。
【触发】向下滚动超过阈值；回到顶部再展开。
【运动】高度、字号与间距 300–450ms 连续变化，不要闪。
【不要】收缩后找不到主导航入口。
```

## 动画标签页 / Animated Tabs

<a id="aceternity-tabs"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：滑块标签切换
- 触发：click / keyboard
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/tabs
- 分册锚点：[aceternity-tabs](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#aceternity-tabs)

标签页的选中背景在项目之间滑动，内容区做短入场。这是导航变形里最常用的基础件。

链接：

- [打开 Aceternity Animated Tabs 演示](https://ui.aceternity.com/components/tabs)（Aceternity UI）

### 提示词

```
【场景】设置或产品模块用标签页切换。
【触发】点击或左右键。
【运动】选中背景共享布局滑动 200–300ms；内容短入场 250–400ms。
【不要】没有键盘与 aria 支持。
```

## 手风琴画廊 / Accordion Gallery

<a id="accordion-gallery"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：展开式图片手风琴
- 触发：hover / click
- 技术栈：React
- 官方演示：https://www.reactbits.dev/components/accordion-gallery
- 分册锚点：[accordion-gallery](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#accordion-gallery)

一排图片，悬停或点击某一张时它变宽，其余让开。适合影集、团队或产品系列。

链接：

- [打开 React Bits Accordion Gallery 演示](https://www.reactbits.dev/components/accordion-gallery)（React Bits）

### 提示词

```
【场景】影集或团队：一排图，当前张变宽，其余让开。
【触发】桌面悬停，触屏点击；键盘可切换。
【运动】宽度与图片裁切 400–600ms。图要有 alt。
【不要】只靠悬停、没有触屏路径。
```

## 黏液导航 / Gooey Nav

<a id="rb-gooey-nav"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：黏液感选中指示
- 触发：click / hover
- 技术栈：React / SVG 或 filter
- 官方演示：https://www.reactbits.dev/components/gooey-nav
- 分册锚点：[rb-gooey-nav](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-gooey-nav)

导航选中指示带黏液或融合感，在项目之间移动时会拉丝再落定。比普通滑块更有材质。

链接：

- [打开 React Bits Gooey Nav 演示](https://www.reactbits.dev/components/gooey-nav)（React Bits）

### 提示词

```
【场景】主导航的选中指示在项目之间以黏液感移动。
【触发】点击或键盘选中。
【运动】指示 300–450ms 拉丝落定。文字保持清晰。
【不要】黏液挡住文字。
```

## 气泡菜单 / Bubble Menu

<a id="rb-bubble-menu"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：气泡散开菜单
- 触发：click
- 技术栈：React
- 官方演示：https://www.reactbits.dev/components/bubble-menu
- 分册锚点：[rb-bubble-menu](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-bubble-menu)

主按钮打开后，菜单项像气泡一样散开到周围。适合浮动操作或移动端次级导航。

链接：

- [打开 React Bits Bubble Menu 演示](https://www.reactbits.dev/components/bubble-menu)（React Bits）

### 提示词

```
【场景】移动端右下角主按钮：打开后菜单项呈气泡散开。
【触发】点击开关；ESC 与点击外部关闭。
【运动】项从中心 spring 散开，stagger 40–60ms；关闭沿原路径收回。
【不要】散开后没有焦点管理。
```

## 文件夹 / Folder

<a id="rb-folder"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：文件夹开合
- 触发：click
- 技术栈：React / CSS 3D
- 官方演示：https://www.reactbits.dev/components/folder
- 分册锚点：[rb-folder](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-folder)

一个可视的文件夹被打开后露出里面的文件或卡片。适合作品归档或文档集合。

链接：

- [打开 React Bits Folder 演示](https://www.reactbits.dev/components/folder)（React Bits）

### 提示词

```
【场景】作品归档：点击文件夹打开，露出里面的项目卡。
【触发】点击开合。
【运动】封面翻或拉开 400–600ms，内容延迟入场。
【不要】打开后内容不可达。
```

## 自动高度 / Auto Height

<a id="animate-auto-height"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：内容变化时高度动画
- 触发：content change
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/auto-height
- 分册锚点：[animate-auto-height](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-auto-height)

容器高度随内容变化做动画，而不是突然撑开。适合折叠面板、错误提示或动态表单。

链接：

- [打开 Animate UI Auto Height 演示](https://animate-ui.com/docs/primitives/animate-ui/auto-height)（Animate UI）

### 提示词

```
【场景】折叠面板或动态表单：内容增减时高度平滑变化。
【触发】内容或开关变化。
【运动】高度插值 250–400ms，避免跳动。
【不要】从 height:auto 突变；注意 overflow 与焦点。
```

## 底部导航 / Bottom Navigation

<a id="animate-bottom-nav"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：底部导航滑块与收起
- 触发：click / scroll
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/bottom-navigation
- 分册锚点：[animate-bottom-nav](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-bottom-nav)

底部导航的高亮滑到选中项，并可在滚动时收成图标或滑走。适合移动端应用壳。

链接：

- [打开 Animate UI Bottom Navigation 演示](https://animate-ui.com/docs/primitives/animate-ui/bottom-navigation)（Animate UI）

### 提示词

```
【场景】移动端应用底部导航。
【触发】点击切换；向下滚动可收起。
【运动】高亮滑块 200–300ms；收起 250–400ms。当前项要有文字或 aria。
【不要】只靠图标颜色区分选中。
```

## 滑块高亮 / Highlight

<a id="animate-highlight"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：高亮在项目间滑动
- 触发：click / hover / controlled
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/highlight
- 分册锚点：[animate-highlight](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-highlight)

一块背景在列表或标签项目之间滑动，可由点击、悬停或受控值驱动。是 Dock、Tabs 与菜单共用的基础积木。

链接：

- [打开 Animate UI Highlight 演示](https://animate-ui.com/docs/primitives/animate-ui/highlight)（Animate UI）

### 提示词

```
【场景】筛选芯片或菜单：选中背景在项目之间滑动。
【触发】点击、悬停或受控值。
【运动】共享布局 200–300ms。
【不要】背景尺寸与项目对不齐。
```

## 可展开工具栏 / Toolbar Expandable

<a id="cult-toolbar-expandable"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-23
- 子类：工具栏展开更多操作
- 触发：click
- 技术栈：React
- 官方演示：https://www.cult-ui.com/docs/components/toolbar-expandable
- 分册锚点：[cult-toolbar-expandable](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#cult-toolbar-expandable)

一条工具栏从紧凑态展开出更多按钮。适合编辑器、邮件或文档工具。

链接：

- [打开 Cult UI Toolbar Expandable 演示](https://www.cult-ui.com/docs/components/toolbar-expandable)（Cult UI）

### 提示词

```
【场景】编辑器工具栏：点击展开更多操作。
【触发】点击开关。
【运动】宽度或项目依次展开 300–450ms，stagger 30–50ms。
【不要】展开后焦点丢失。
```

## 标记菜单 / Marking Menu

<a id="kokonut-marking-menu"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：径向标记菜单
- 触发：press / context menu
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/navigation/marking-menu
- 分册锚点：[kokonut-marking-menu](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-marking-menu)

按住或右键后，在指针周围弹出径向菜单，可向某个方向滑动选择。适合创作者工具。

链接：

- [打开 Kokonut Marking Menu 演示](https://kokonutui.com/docs/navigation/marking-menu)（Kokonut UI）

### 提示词

```
【场景】画布工具：按住或右键后，指针周围弹出径向菜单。
【触发】按下弹出，滑向扇区松手即选。
【运动】菜单 150–250ms 弹出；扇区要够大。提供键盘替代。
【不要】只有方向手势、没有可点目标。
```

## 状态岛 / Status Island

<a id="kokonut-status-island"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：动态岛式状态条
- 触发：status change / click
- 技术栈：React / Motion
- 官方演示：https://kokonutui.com/docs/navigation/status-island
- 分册锚点：[kokonut-status-island](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-status-island)

一条可展开的状态岛，用于播放中、录音或后台任务。从紧凑指示扩展成更完整的状态条。

链接：

- [打开 Kokonut Status Island 演示](https://kokonutui.com/docs/navigation/status-island)（Kokonut UI）

### 提示词

```
【场景】播放或后台任务：顶部一条状态岛，点击展开详情。
【触发】状态出现时入场；点击扩展。
【运动】紧凑与展开用布局动画 300–450ms。
【不要】状态变化时跳动或挡住导航。
```

## 反向缓动裁切菜单 / Ease Reverse Clip Menu

<a id="ease-reverse-clip-menu"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2026-04-22
- 子类：开关使用不同缓动的裁切菜单
- 触发：click / toggle
- 技术栈：GSAP / clip-path / easeReverse
- 官方演示：https://tympanus.net/Development/EaseReverseClipMenu/
- 原始出处：https://tympanus.net/codrops/2026/04/22/a-playful-clip-menu-with-gsaps-easereverse/
- 分册锚点：[ease-reverse-clip-menu](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#ease-reverse-clip-menu)

全屏或大幅裁切菜单：打开用一种缓动，关闭用 easeReverse 换成更有弹性或更干脆的曲线。中途打断时时间轴反向仍保持设计好的关闭手感。

链接：

- [打开 Ease Reverse Clip Menu 演示](https://tympanus.net/Development/EaseReverseClipMenu/)（Codrops Demo）
- [阅读 easeReverse 裁切菜单教程](https://tympanus.net/codrops/2026/04/22/a-playful-clip-menu-with-gsaps-easereverse/)（Codrops，2026-04-22）

### 提示词

```
【场景】作品站导航：点击开关弹出以 clip-path 揭示的菜单，关闭时不要简单倒放打开动画。
【触发】开关切换；可在动画中途再次点击打断。
【运动】打开约 0.6–0.8s（如 expo）；关闭改用 easeReverse（如轻微 elastic）。条目可带微小旋转离场。
【不要】开关共用同一缓动导致关闭发黏或过冲；打断后菜单停在半开状态。
```

## 情境感知固定物 / Context-Aware Fixed Elements

<a id="context-aware-fixed"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2024-10-09
- 子类：固定标识随内容让位或显现
- 触发：scroll intersection
- 技术栈：GSAP / ScrollTrigger / SplitType
- 官方演示：https://tympanus.net/Development/ContextAwareLogoAnimationScroll/
- 原始出处：https://tympanus.net/codrops/2024/10/09/exploring-playful-context-aware-animations-for-fixed-elements/
- 分册锚点：[context-aware-fixed](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#context-aware-fixed)

固定在视口上的标识或控件，遇到滚动内容时会躲让、隐藏或改形态，过后再出现。强调「看见前方内容再反应」，而不是简单的滚动缩导航。

链接：

- [打开 Context-Aware Fixed Elements 演示](https://tympanus.net/Development/ContextAwareLogoAnimationScroll/)（Codrops Demo）
- [阅读情境感知固定物教程](https://tympanus.net/codrops/2024/10/09/exploring-playful-context-aware-animations-for-fixed-elements/)（Codrops，2024-10-09）

### 提示词

```
【场景】固定在角落的标志或控件，当正文或大标题滚到它附近时让位或收起，离开后再出现。
【触发】与特定内容块相交；而不是只按滚动方向隐藏。
【运动】躲让带一点玩味（位移、拆字或淡出）但要在 200–400ms 内完成，不挡住阅读。
【不要】与内容重叠无法阅读；仅做通用的向下滚动藏顶栏。
```

## 按钮长成表单 / Morph Popover

<a id="kokonut-morph-popover"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：按钮展开为表单再收成确认
- 触发：click / submit
- 技术栈：React / Motion layout
- 官方演示：https://kokonutui.com/docs/buttons/morph-popover
- 分册锚点：[kokonut-morph-popover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-morph-popover)

「反馈」一类按钮用共享布局长成表单，标签上滑成为标题；提交后先进入发送态，再缩小成感谢小胶囊。

链接：

- [打开 Kokonut Morph Popover 演示](https://kokonutui.com/docs/buttons/morph-popover)（Kokonut UI）

### 提示词

```
【场景】页面上的反馈按钮点击后就地长成输入面板，提交后再收成「谢谢」胶囊。
【触发】点击打开，Esc 关闭；提交若返回 Promise，先显示发送中。
【运动】spring 约 0.42s 变形，标签滑成标题；发送后约 1.6s 显示确认再可复位。
【不要】按钮消失后另弹一个无关联的弹层；焦点不进入输入框。
```

## 浮动槽口导航 / Notch

<a id="aceternity-notch"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-24
- 子类：贴边槽口在状态间变形
- 触发：click / route change
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/notch
- 分册锚点：[aceternity-notch](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#aceternity-notch)

可配置的浮动槽口，钉在屏幕顶部或底部。传入带链接的项目后，切换时槽口外形与内容会动画到当前项。

链接：

- [打开 Aceternity Notch 演示](https://ui.aceternity.com/components/notch)（Aceternity UI）

### 提示词

```
【场景】移动端或桌面悬浮导航做成贴边槽口，切换栏目时外壳和内容一起变形。
【触发】点击项目或路由变化。
【运动】宽度、高度与圆角 300–450ms spring 过渡到当前项所需尺寸，内容交叉淡入。
【不要】内容溢出圆角外壳；与系统手势条冲突且无法关闭。
```

## 灵动岛 / Dynamic Island

<a id="cult-dynamic-island"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-24
- 子类：多尺寸预设的变形状态岛
- 触发：state change
- 技术栈：React / Motion
- 官方演示：https://www.cult-ui.com/docs/components/dynamic-island
- 分册锚点：[cult-dynamic-island](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#cult-dynamic-island)

一套可组合的灵动岛：在紧凑、加宽、高耸、多行等预设之间变形，用于通知、播放中或进度。尺寸变化由状态机或排程动画驱动。

链接：

- [打开 Cult UI Dynamic Island 演示](https://www.cult-ui.com/docs/components/dynamic-island)（Cult UI）

### 提示词

```
【场景】播放中、来消息或同步进度，用顶部状态岛在多种尺寸之间变形。
【触发】应用事件调用 setSize，或按时间排程一组过渡。
【运动】外壳宽高与圆角连续变形，内容随预设进入退出。动画过程中避免重复点击造成队列堆积。
【不要】每种状态都突然切尺寸；内容在变形中被裁切到不可读。
```
