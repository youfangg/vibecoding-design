# 指针与光标

本类共 11 条，来自分册「[粒子、流体与光标](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9)」。在 `data/cases.json` 中对应 `category` 为 `cursor`。复制下方提示词即可用于 AI Coding。

- [文字拖尾光标 / Text Cursor](#rb-text-cursor)
## 目录

- [软体光标 / Blob Cursor](#rb-blob-cursor)
- [飘洒光标 / Splash Cursor](#rb-splash-cursor)
- [瞄准光标 / Target Cursor](#rb-target-cursor)
- [十字准星 / Crosshair](#rb-crosshair)
- [光标网格 / Cursor Grid](#rb-cursor-grid)
- [像素拖尾 / Pixel Trail](#rb-pixel-trail)
- [虫群光标 / Swarm Cursor](#rb-swarm-cursor)
- [平滑光标 / Smooth Cursor](#magic-smooth-cursor)
- [跟随指针 / Pointer](#magic-pointer)
- [光标跟踪器 / Cursor Tracker](#animata-cursor-tracker)

## 软体光标 / Blob Cursor

<a id="rb-blob-cursor"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：滞后软体光标
- 触发：pointer move
- 技术栈：React / SVG 或 Canvas
- 官方演示：https://www.reactbits.dev/animations/blob-cursor
- 分册锚点：[rb-blob-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-blob-cursor)

自定义光标是一团软体，跟随带滞后与形变。适合艺术、时尚或品牌站的桌面端，触屏要关闭。

链接：

- [打开 React Bits Blob Cursor 演示](https://www.reactbits.dev/animations/blob-cursor)（React Bits）

### 提示词

```
【场景】艺术或时尚站桌面端：一团软体跟随光标。
【触发】pointermove；要有滞后，不要 1:1 贴。
【运动】快速移动时微拉长，停下后回弹成团。原生光标可隐藏，但可点击目标要保留。
【不要】触屏设备强制自定义光标。
```

## 飘洒光标 / Splash Cursor

<a id="rb-splash-cursor"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：流体飘洒拖尾
- 触发：pointer move
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/animations/splash-cursor
- 分册锚点：[rb-splash-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-splash-cursor)

光标移动时在轨迹上洒起流体或色斑，像浴在墨水里。比软体光标更偏材质与拖尾。

链接：

- [打开 React Bits Splash Cursor 演示](https://www.reactbits.dev/animations/splash-cursor)（React Bits）

### 提示词

```
【场景】艺术站花续区：光标移过时拖出流体洒渲。
【触发】开始移动后再洒；停下后洒渲渐散。
【运动】拖尾有滞后，颜色要收敛。
【不要】一直清窗体洒渲；触屏默认关闭。
```

## 瞄准光标 / Target Cursor

<a id="rb-target-cursor"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：准星与瞄准
- 触发：pointer move / hover
- 技术栈：React
- 官方演示：https://www.reactbits.dev/animations/target-cursor
- 分册锚点：[rb-target-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-target-cursor)

自定义光标像瞄准镜或准星，悬停可交互元件时可收紧或锁定。适合游戏、工具或高能产品站。

链接：

- [打开 React Bits Target Cursor 演示](https://www.reactbits.dev/animations/target-cursor)（React Bits）

### 提示词

```
【场景】游戏或工具站桌面端：光标是一个带滞后的瞄准镜。
【触发】移动跟随；悬停可点目标时收紧。
【运动】跟随带 40–80ms 滞后；悬停时瞬间缩小或锁定 150–250ms。
【不要】挡住点击热区；触屏关闭。
```

## 十字准星 / Crosshair

<a id="rb-crosshair"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：全屏十字线
- 触发：pointer move
- 技术栈：React
- 官方演示：https://www.reactbits.dev/animations/crosshair
- 分册锚点：[rb-crosshair](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-crosshair)

跟随光标的全屏或局部十字准星线，常见于编辑工具、对位或游戏化界面。要细、要克制，不要满屏闪线。

链接：

- [打开 React Bits Crosshair 演示](https://www.reactbits.dev/animations/crosshair)（React Bits）

### 提示词

```
【场景】设计工具或游戏化展厅：光标带细十字线。
【触发】光标移动；可有极短滞后。
【运动】线条细、不要抢戏；悬停热区时可收短或变色。
【不要】粗线跨过整页正文。
```

## 光标网格 / Cursor Grid

<a id="rb-cursor-grid"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：跟随光标的网格高亮
- 触发：pointer move
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/cursor-grid
- 分册锚点：[rb-cursor-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-cursor-grid)

一层网格在光标附近被点亮或拖动，像一块可触的矩阵。适合科技、仪表盘或实验室感的背景。

链接：

- [打开 React Bits Cursor Grid 演示](https://www.reactbits.dev/animations/cursor-grid)（React Bits）

### 提示词

```
【场景】科技品牌首屏：网格在光标附近被点亮。
【触发】光标半径内高亮；离开后淡出。
【运动】衰减要柔；不要一移动就全屏闪。
【不要】网格粗到压字。
```

## 像素拖尾 / Pixel Trail

<a id="rb-pixel-trail"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：像素点阵拖尾
- 触发：pointer move
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/pixel-trail
- 分册锚点：[rb-pixel-trail](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-pixel-trail)

光标轨迹被解成像素格点亮，带短暂滞后。比图片拖尾更干、更像催枯，适合游戏或复古科技站。

链接：

- [打开 React Bits Pixel Trail 演示](https://www.reactbits.dev/animations/pixel-trail)（React Bits）

### 提示词

```
【场景】游戏或复古科技首屏：光标过处点亮像素格。
【触发】pointermove；停下后格子 200–400ms 淡出。
【运动】格子要大到能被识别为像素；限制同屏点亮数。
【不要】像素过密不成粒度。
```

## 虫群光标 / Swarm Cursor

<a id="rb-swarm-cursor"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：小粒子追随
- 触发：pointer move
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/swarm-cursor
- 分册锚点：[rb-swarm-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-swarm-cursor)

一小群粒子追随光标，带滞后与散开。比单点光标更有群体感，适合娱乐或生物感的品牌页。

链接：

- [打开 React Bits Swarm Cursor 演示](https://www.reactbits.dev/animations/swarm-cursor)（React Bits）

### 提示词

```
【场景】娱乐或生物感品牌页：一小群点跟随光标。
【触发】pointermove；停下后粒子围拥再缓慢消散。
【运动】追随带滞后与微乱；数量要少。
【不要】虫群挡住点击或正文。
```

## 平滑光标 / Smooth Cursor

<a id="magic-smooth-cursor"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：滞后平滑跟随
- 触发：pointer move
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/smooth-cursor
- 分册锚点：[magic-smooth-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#magic-smooth-cursor)

一个带滞后的平滑自定义光标，专注于跟手质量而不是花窝。适合作为其他光标效果的底座。

链接：

- [打开 Magic UI Smooth Cursor 演示](https://magicui.design/docs/components/smooth-cursor)（Magic UI）

### 提示词

```
【场景】品牌站桌面端：自定义光标带稳定滞后跟随。
【触发】pointermove。
【运动】spring 跟随，不要抖；点击热区不能被挡。
【不要】触屏上强制使用；忽略源生光标可访问性。
```

## 跟随指针 / Pointer

<a id="magic-pointer"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：带标签的跟随光标
- 触发：pointer move
- 技术栈：React
- 官方演示：https://magicui.design/docs/components/pointer
- 分册锚点：[magic-pointer](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#magic-pointer)

一个可带标签的跟随指针，常用于演示、教学或协作光标。关键是标签要跟得稳，且不挡内容。

链接：

- [打开 Magic UI Pointer 演示](https://magicui.design/docs/components/pointer)（Magic UI）

### 提示词

```
【场景】教学或演示页：光标旁带一个短标签。
【触发】光标移动；标签可随场景改文案。
【运动】光标与标签都带滞后；标签不要挡热区。
【不要】在表单里强制自定义光标。
```

## 光标跟踪器 / Cursor Tracker

<a id="animata-cursor-tracker"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：坐标或跟随标记
- 触发：pointer move
- 技术栈：React
- 官方演示：https://animata.design/docs/container/cursor-tracker
- 分册锚点：[animata-cursor-tracker](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#animata-cursor-tracker)

一个跟随光标的标记层，可显示坐标、标签或微光。常被用于演示工具或创作站的玩味层。

链接：

- [打开 Animata Cursor Tracker 演示](https://animata.design/docs/container/cursor-tracker)（Animata）

### 提示词

```
【场景】创作或设计工具演示：光标旁有带滞后的标记。
【触发】移动跟随。
【运动】滞后短而稳；文字要可读。
【不要】坐标层挡住真正的交互。
```

## 文字拖尾光标 / Text Cursor

<a id="rb-text-cursor"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：光标后落下字或符号的拖尾
- 触发：pointer move
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/text-animations/text-cursor
- 分册锚点：[rb-text-cursor](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-text-cursor)

光标移动时在身后落下文字、符号或短词，可以是盖章般的拷贝、一条跟随的字链，或缎带一样的字母。

链接：

- [打开 React Bits Text Cursor 演示](https://www.reactbits.dev/text-animations/text-cursor)（React Bits）

### 提示词

```
【场景】诗歌节「南窗」专题页自定义光标，移动时身后落下「风」「窗」「夜」「读」四个交替汉字，像被盖在浅米色纸上，短暂停留后淡出。页面标题「周四晚上，把诗读出声」。
【触发】指针移动时在轨迹上盖印；速度高时间距拉大，低时更密。静止后拖尾在 400–700ms 内消失。
【运动】字的旋转轻微、不转圈发晕；数量有上限，避免拖一条长蛇。
【不要】拖尾挡住链接与按钮热区；在输入框里仍盖字；没有系统光标回退（尤其是触摸设备可关闭）。
```
