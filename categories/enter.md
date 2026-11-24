# 进入与离场

本类共 8 条，来自分册「[文字动效与进入离场](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8)」。在 `data/cases.json` 中对应 `category` 为 `enter`。复制下方提示词即可用于 AI Coding。

## 目录

- [逐字错落入场 / Split Text](#split-text)
- [模糊清晰入场 / Blur Fade](#blur-fade)
- [弹入列表 / Animated List](#animated-list)
- [扇形照片弹入 / Bounce Cards](#bounce-cards)
- [竖向裁切揭示 / Vertical Cut Reveal](#vertical-cut-reveal)
- [半调揭示 / Halftone Reveal](#rb-halftone-reveal)
- [画布揭示 / Canvas Reveal Effect](#canvas-reveal-effect)
- [离场动画 / Exit Animation](#motion-exit-animation)

## 逐字错落入场 / Split Text

<a id="split-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-21
- 子类：逐字错落入场
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://reactbits.dev/text-animations/split-text
- 分册锚点：[split-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#split-text)

把标题拆成字符或单词，再按时间差错落入场。这是列表、英雄区与编辑标题最常用的入场语言。

链接：

- [打开 React Bits Split Text 演示](https://reactbits.dev/text-animations/split-text)（React Bits）

### 提示词

```
【场景】产品页英雄标题进入视口时按字符依次出现。
【触发】in-view 一次。
【运动】每字从 y 24–32px、opacity 0 归位，500–700ms，stagger 30–50ms，整句不超过约 1.2s。中文按字，英文可按词。
【不要】每个字都弹跳；在正文段落上逐字动。原文字保留给读屏。
```

## 模糊清晰入场 / Blur Fade

<a id="blur-fade"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：模糊清晰入场
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/blur-fade
- 分册锚点：[blur-fade](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#blur-fade)

元素进入视口时从模糊与透明变清晰，比单纯淡入更有景深。适合编辑排版、团队照或产品亮点列表。

链接：

- [打开 Magic UI Blur Fade 演示](https://magicui.design/docs/components/blur-fade)（Magic UI）

### 提示词

```
【场景】编辑页或团队介绍：照片与段落进入视口时从模糊变清。
【触发】in-view 一次。
【运动】起点 blur 8–12px、opacity 0、可选 y 12–20px；500–700ms；多项 stagger 80–120ms。
【不要】在长正文上一直模糊。reduced-motion 时直接显示。
```

## 弹入列表 / Animated List

<a id="animated-list"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：列表行弹入与选中滑块
- 触发：in-view / keyboard
- 技术栈：React / Motion
- 官方演示：https://reactbits.dev/components/animated-list
- 分册锚点：[animated-list](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#animated-list)

可滚动列表的行项用 spring 弹入，选中项带一块会滑行的高亮，并支持方向键。适合通知、搜索结果或命令菜单。

链接：

- [打开 React Bits Animated List 演示](https://reactbits.dev/components/animated-list)（React Bits）

### 提示词

```
【场景】通知中心或命令面板：行项依次弹入，当前行有滑动选中背景。
【触发】列表进入或数据到达；方向键改变选中。
【运动】每行从 y 16–24px 弹入，stagger 40–60ms；选中背景共享布局滑动 200–300ms。
【不要】每次滚动都重播入场。
```

## 扇形照片弹入 / Bounce Cards

<a id="bounce-cards"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：扇形照片弹入
- 触发：in-view / hover
- 技术栈：React
- 官方演示：https://reactbits.dev/components/bounce-cards
- 分册锚点：[bounce-cards](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#bounce-cards)

一把照片卡先弹入，再扇开成扇形；悬停某一张时它摆正并稍微放大，其余的让开。

链接：

- [打开 React Bits Bounce Cards 演示](https://reactbits.dev/components/bounce-cards)（React Bits）

### 提示词

```
【场景】旅途或婚礼相册：三到五张照片像手里一把照片一样弹出再扇开。
【触发】进入视口时入场；悬停或点击让当前张摆正。
【运动】先叠在一起弹到居中 500–700ms，再扇开 300–450ms；悬停当前张旋转归零并缩放到约 1.06。
【不要】扇形打得太开叠出屏外。
```

## 竖向裁切揭示 / Vertical Cut Reveal

<a id="vertical-cut-reveal"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：裁切滑入揭示
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/text/vertical-cut-reveal
- 分册锚点：[vertical-cut-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#vertical-cut-reveal)

标题被裁切进一条隐藏溢出的槽，再由下或由上滑入。可按词、字或行拆分。裁切感来自 overflow 掩蔽，而不是淡入。

链接：

- [打开 Fancy Components Vertical Cut Reveal 演示](https://www.fancycomponents.dev/docs/components/text/vertical-cut-reveal)（Fancy Components）

### 提示词

```
【场景】章节标题从一条隐藏槽里切出来。
【触发】in-view 一次。
【运动】外层 overflow:hidden，内层从 y 100% 滑到 0；spring 偏收敛（如 stiffness 300、damping 30）；stagger 40–80ms。
【不要】把单词拆到两行上完成动画。斜体要留边距。
```

## 半调揭示 / Halftone Reveal

<a id="rb-halftone-reveal"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：半调网点揭示
- 触发：in-view
- 技术栈：React / WebGL 或 SVG
- 官方演示：https://www.reactbits.dev/animations/halftone-reveal
- 分册锚点：[rb-halftone-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-halftone-reveal)

图像或区块以半调网点从疏到密揭示出来。比淡入更有印刷或海报感，适合影集和编辑页入场。

链接：

- [打开 React Bits Halftone Reveal 演示](https://www.reactbits.dev/animations/halftone-reveal)（React Bits）

### 提示词

```
【场景】影集封面进入视口时以半调网点揭示。
【触发】in-view 一次。
【运动】网点从疏到密，600–900ms。
【不要】网点未收干净就停下。
```

## 画布揭示 / Canvas Reveal Effect

<a id="canvas-reveal-effect"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：画布擦除揭示
- 触发：in-view / pointer
- 技术栈：React / Canvas
- 官方演示：https://ui.aceternity.com/components/canvas-reveal-effect
- 分册锚点：[canvas-reveal-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#canvas-reveal-effect)

用画布擦除、点亮或粒子消散把下层图像或文字揭示出来。适合首屏或章节封面。

链接：

- [打开 Aceternity Canvas Reveal Effect 演示](https://ui.aceternity.com/components/canvas-reveal-effect)（Aceternity UI）

### 提示词

```
【场景】首屏封面被一层画布逐渐擦开。
【触发】进入视口自动，或随光标擦除。
【运动】揭示 0.8–1.4s，结束后可卸载覆盖层。
【不要】留下挡点击的透明画布。
```

## 离场动画 / Exit Animation

<a id="motion-exit-animation"></a>

- 来源：AI Coding
- 作者：Motion
- 日期：采集于 2026-11-23
- 子类：组件卸载离场
- 触发：unmount / state change
- 技术栈：Motion for React
- 官方演示：https://motion.dev/examples/react-exit-animation
- 分册锚点：[motion-exit-animation](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#motion-exit-animation)

Motion 官方例子演示元素在卸载前先播离场，而不是瞬间消失。这是列表删除、弹层关闭和页内切换的基础语法。

链接：

- [打开 Motion Exit animation 示例](https://motion.dev/examples/react-exit-animation)（Motion）

### 提示词

```
【场景】通知或卡片被删除时先离场再卸载。
【触发】状态变为移除。
【运动】向旁或向下位移并淡出 250–400ms，邻居让位。
【不要】不等离场就直接从 DOM 拿掉。
```
