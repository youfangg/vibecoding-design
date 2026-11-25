# 微交互反馈

本类共 26 条，来自分册「[手势、导航与微交互](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f)」。在 `data/cases.json` 中对应 `category` 为 `micro`。复制下方提示词即可用于 AI Coding。

- [弧形输入条 / Curved Input](#rb-curved-input)
- [弹弓发送 / Sling Button](#rb-sling-button)
- [弹簧勾选 / Spring Check](#rb-spring-check)
- [挤压开关 / Squish Switch](#rb-squish-switch)
- [拖放上传 / File Upload](#aceternity-file-upload)
- [铁屑磁吸按钮 / Magnet Button](#kokonut-attract-button)
- [粒子完成按钮 / Particle Button](#kokonut-particle-button)
- [就地变成数量步进 / Cart Button](#kokonut-cart-button)
- [弹出式验证码格 / Input OTP](#animate-input-otp)
- [翻面按钮 / Flip Button](#animate-flip-button)
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
- [悬停全幅预览与小地图 / Hover Preview Mini Map](#hover-preview-minimap)
- [撕票确认 / Tear Button](#kokonut-tear-button)
- [倒计时撤销 / Undo Button](#kokonut-undo-button)
- [语音波形输入 / AI Voice](#kokonut-ai-voice)
- [弹性线 / Elastic Line](#fancy-elastic-line)

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

## 悬停全幅预览与小地图 / Hover Preview Mini Map

<a id="hover-preview-minimap"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2022-03-01
- 子类：全页预览配合光标小地图
- 触发：hover
- 技术栈：JavaScript / CSS
- 官方演示：https://tympanus.net/Development/HoverPreviewMiniMap/
- 原始出处：https://tympanus.net/codrops/2022/03/01/hover-preview-effect-with-mini-map/
- 分册锚点：[hover-preview-minimap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#hover-preview-minimap)

悬停缩略图时，全页预览覆盖整个界面，同时用小地图显示指针落在哪一张上。演示有隐藏光标与自定义光标两个版本。移动端需要另做交互。

链接：

- [打开 Hover Preview Mini Map 演示](https://tympanus.net/Development/HoverPreviewMiniMap/)（Codrops Demo）
- [阅读小地图悬停预览教程](https://tympanus.net/codrops/2022/03/01/hover-preview-effect-with-mini-map/)（Codrops，2022-03-01）

### 提示词

```
【场景】三个作品缩略图：悬停时全页预览盖住原界面，角落小地图同步指示指针所在缩略图。
【触发】桌面悬停进入，移出收回。提供无光标与自定义光标两种模式。
【运动】预览与说明在 300–500ms 内展开；小地图中的指示器跟手，不要延迟过大。
【不要】预览挡住后完全失去位置感；把同一交互硬套到触屏而不提供替代浏览。
```

## 撕票确认 / Tear Button

<a id="kokonut-tear-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：沿齿孔撕下票根以确认
- 触发：pointer drag
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/buttons/tear-button
- 分册锚点：[kokonut-tear-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-tear-button)

危险操作做成票根：沿齿孔一孔一孔撕下后才确认。适合删除工作区这类不可轻易撤销的动作。

链接：

- [打开 Kokonut Tear Button 演示](https://kokonutui.com/docs/buttons/tear-button)（Kokonut UI）

### 提示词

```
【场景】删除工作区或类似不可轻易撤销的操作：按钮是一张票，必须沿齿孔撕下票根才确认。
【触发】按住票根拖离，孔位依次断开；未撕完松开则复原。
【运动】孔位逐个断开，票根离开后显示已确认文案，可选数秒后印出新票。
【不要】单击就删除；没有明确的确认文案；触屏无法完成撕的手势。
```

## 倒计时撤销 / Undo Button

<a id="kokonut-undo-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：沿按钮边缘倒计时的撤销窗
- 触发：click / keyboard undo
- 技术栈：React / Motion
- 官方演示：https://kokonutui.com/docs/buttons/undo-button
- 分册锚点：[kokonut-undo-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-undo-button)

按下「归档」后进入可撤销窗口：边缘描边倒计时，按钮文案变成「已归档 | 撤销」。悬停或切走标签页会暂停计时，也可用快捷键撤销。

链接：

- [打开 Kokonut Undo Button 演示](https://kokonutui.com/docs/buttons/undo-button)（Kokonut UI）

### 提示词

```
【场景】归档或删除类操作先进入几秒撤销窗，时间沿按钮边缘消耗，确认后才真正执行。
【触发】第一次点击打开撤销窗（默认约 5s）；再次点击或 ⌘Z / Ctrl+Z 撤销。鼠标悬停或页面隐藏时暂停。
【运动】描边从顶部顺时针减少；宽度随文案平滑变化；数字按秒滚动。
【不要】时间一到才给撤销却没有视觉倒计时；在输入框里误拦撤销快捷键。
```

## 语音波形输入 / AI Voice

<a id="kokonut-ai-voice"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：录音波形与回放确认
- 触发：press to talk
- 技术栈：React / Canvas 或 SVG
- 官方演示：https://kokonutui.com/docs/ai/ai-voice
- 分册锚点：[kokonut-ai-voice](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-ai-voice)

语音输入先出现滚动波形，录完后可以回放、丢弃或发送。重点是录音过程的波形运动，以及结束后的明确选择。

链接：

- [打开 Kokonut AI Voice 演示](https://kokonutui.com/docs/ai/ai-voice)（Kokonut UI）

### 提示词

```
【场景】聊天或助手的语音输入：按住或点击开始后出现滚动波形，结束给出回放、丢弃和发送。
【触发】按下开始，松开或再次点击结束。
【运动】波形随音量起伏并水平滚动；结束后波形停下，三个动作成组出现。
【不要】没有回放就直接发送；波形纯装饰与声音无关；缺少静音与权限失败说明。
```

## 弹性线 / Elastic Line

<a id="fancy-elastic-line"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：指针拉拽的弹簧 SVG 线
- 触发：pointer move
- 技术栈：React / SVG / 弹簧
- 官方演示：https://www.fancycomponents.dev/docs/components/physics/elastic-line
- 分册锚点：[fancy-elastic-line](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#fancy-elastic-line)

一条 SVG 线被指针靠近或拉拽时像橡皮筋一样凹陷，离开后弹簧回正。适合分隔、签名线或轻量装饰交互。

链接：

- [打开 Fancy Elastic Line 演示](https://www.fancycomponents.dev/docs/components/physics/elastic-line)（Fancy Components）

### 提示词

```
【场景】章节分隔或签名线：指针靠近时线被轻轻拉弯，离开后弹回。
【触发】指针靠近或穿过；离开后回正。
【运动】弹簧回正带一两下衰减，不要永久抖动。触屏可改为按住拖拽。
【不要】整条页面布局被线的形变撑动；动画停不下来。
```

## 弧形输入条 / Curved Input

<a id="rb-curved-input"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：文字与按钮贴在弧上的输入栏
- 触发：focus / submit
- 技术栈：React / Motion / SVG
- 官方演示：https://www.reactbits.dev/components/curved-input
- 分册锚点：[rb-curved-input](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-curved-input)

搜索或留言输入条整体弯成弧，文字、插入符和提交按钮都沿着曲线走，提交时有一次轻反馈。

链接：

- [打开 React Bits Curved Input 演示](https://www.reactbits.dev/components/curved-input)（React Bits）

### 提示词

```
【场景】播客「回声」节目页底部的留言弧：「对第 48 集《在夜船上读书》说一句」。占位「你在哪一页合上的？」用户输入「我在码头那章停了很久。」插入符贴着弧走，右侧是弧上的「送出」按钮。
【触发】聚焦开始输入；提交播放一次短反馈；失焦保持已输入文本。
【运动】字符沿弧排列，插入符不离线；提交按钮 150–250ms 轻按，成功后弧上闪一句「已送到第 48 集」。
【不要】弯曲到难以阅读或选中；移动端键盘把弧顶出屏幕却无滚动；缺少 label 与错误态。
```

## 弹弓发送 / Sling Button

<a id="rb-sling-button"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：拉回再松开的弹射发送
- 触发：pointer drag / release
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/micro/sling-button
- 分册锚点：[rb-sling-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-sling-button)

发送按钮可以像弹弓一样被拉回，松开后向前弹出以完成发送；拉力不够则弹回原位。

链接：

- [打开 React Bits Sling Button 演示](https://www.reactbits.dev/micro/sling-button)（React Bits）

### 提示词

```
【场景】即时通讯「潮汐」聊天页，输入框已写好「晚上七点在北岛见，我先占座。」发送键是一枚小石子按钮。向下拉满后松开，按钮弹向前方，消息入列，状态从「发送中」到「已送达」。拉得不够则弹回，不发送。
【触发】按住下拉，松开时按拉力阈值决定发送或取消；键盘仍可用 Enter 直接发送。
【运动】拉伸跟手，带橡皮筋感；发送 250–400ms 弹出并复位；失败回弹 300ms。
【不要】阈值不明导致误发；没有普通点击/回车的后备；把弹弓用在破坏性、不可撤销的操作上。
```

## 弹簧勾选 / Spring Check

<a id="rb-spring-check"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：一次弹簧完成勾选与划线
- 触发：click / keyboard
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/micro/spring-check
- 分册锚点：[rb-spring-check](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-spring-check)

勾选一行时，弹簧先填满方框、再勾出对勾，同时在标签上划掉一条线，取消则反向收回。

链接：

- [打开 React Bits Spring Check 演示](https://www.reactbits.dev/micro/spring-check)（React Bits）

### 提示词

```
【场景】旅行清单「候鸟」：三行「带护照复印件」「确认青岛蓝窗房 12/4 入住」「给南窗书局发取书短信」。勾选第一行时，方框被弹簧填满，对勾画出，文字「带护照复印件」被一条稳稳的线划过。
【触发】点击行或复选框；空格在聚焦时切换。
【运动】填充、对勾、划线是一次 350–500ms 的连贯弹簧，不要分成三段生硬动画。取消时反向 250–350ms。
【不要】漏掉真实的 checkbox 语义；划线把字衬得无法阅读；组里没有全选/计数。reduced-motion 时改为瞬时勾选与划线。
```

## 挤压开关 / Squish Switch

<a id="rb-squish-switch"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：拇指会被速度拉长并撞停
- 触发：click / drag
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/micro/squish-switch
- 分册锚点：[rb-squish-switch](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#rb-squish-switch)

开关滑块随甩动速度被拉长，撞到两端时挤扁再回弹，比普通开关更有物理感。

链接：

- [打开 React Bits Squish Switch 演示](https://www.reactbits.dev/micro/squish-switch)（React Bits）

### 提示词

```
【场景】天气应用「潮汐」的通知设置：「降雨前提醒我」一行，右侧是开关。打开时滑块被速度拉长，撞到右端挤扁再回弹，标签从「关闭」换成「已开启 · 提前 30 分钟」。
【触发】点击切换；也可拖到另一端松开。
【运动】位移 200–350ms，拉伸与挤压跟速度走，结束有短回弹。不要无限抖动。
【不要】没有选中态对比；把开关做得过大或拖得脱出轨道；忽略开关的可访问名称。reduced-motion 时取消拉伸与碰撞，只做位置切换。
```

## 拖放上传 / File Upload

<a id="aceternity-file-upload"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-25
- 子类：带网格背景与微交互的拖放上传
- 触发：drag / click
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/file-upload
- 分册锚点：[aceternity-file-upload](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#aceternity-file-upload)

一个带背景网格的上传区，支持拖放与点击选择，文件进入时有入场与进度，失败有明确回退。

链接：

- [打开 Aceternity File Upload 演示](https://ui.aceternity.com/components/file-upload)（Aceternity UI）

### 提示词

```
【场景】「青浦影像」投稿页：虚线框写「把作品拖到这里，或选择文件」，背景是浅网格。拖入三张图「码头铁索.jpg 2.4MB」「湿窗.jpg 1.8MB」「河面黄昏.jpg 3.1MB」后，每张以缩略图落入列表，下有进度条，完成后显示尺寸与「可删除」。
【触发】拖入、点击选择或键盘激活；校验失败就地提示。
【运动】文件卡 250–400ms 落入，进度平滑；删除时收起高度。拖入悬停时框线与网格轻微点亮。
【不要】没有类型/大小限制说明；失败只 toast 一下就丢文件；进度假跳到 100%。
```

## 铁屑磁吸按钮 / Magnet Button

<a id="kokonut-attract-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-25
- 子类：铁屑随磁场倒向按钮
- 触发：pointer move / hover
- 技术栈：React / Canvas
- 官方演示：https://kokonutui.com/docs/buttons/attract-button
- 分册锚点：[kokonut-attract-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-attract-button)

呼叫行动按钮周围有一圈铁屑或细针，它们顺着磁场排列，并随光标向按钮倾斜，与普通磁吸位移不是同一效果。

链接：

- [打开 Kokonut Magnet Button 演示](https://kokonutui.com/docs/buttons/attract-button)（Kokonut UI）

### 提示词

```
【场景】课程站点「山海科考」报名区，主按钮「预约公开课」。按钮周围是一圈细铁屑，平时沿按钮外磁场排列；光标靠近时铁屑倒向指针与按钮之间，像被吸住。按钮文案下有「12 月 6 日 · 青岛观象台」。
【触发】指针在按钮附近移动时更新磁场；离开后 300–500ms 回到环状排列。
【运动】铁屑转动要跟手但带一点阻尼，不要闪烁。按钮本身可有轻微磁吸位移，幅度克制。
【不要】铁屑挡住文字；做成廉价粒子喷发；reduced-motion 时只保留静止构图与普通悬停。
```

## 粒子完成按钮 / Particle Button

<a id="kokonut-particle-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-25
- 子类：异步动作后勾画与粒子爆发
- 触发：click / async process
- 技术栈：React / Motion
- 官方演示：https://kokonutui.com/docs/buttons/particle-button
- 分册锚点：[kokonut-particle-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-particle-button)

用于异步操作的状态按钮：进行中显示spinner，成功时画出对勾并爆出一小圈粒子，失败则回退到可重试。

链接：

- [打开 Kokonut Particle Button 演示](https://kokonutui.com/docs/buttons/particle-button)（Kokonut UI）

### 提示词

```
【场景】票务「南窗书局朗诵会」座位页，按钮「锁定 2 个座位」。点击后按钮进入加载，文案「正在锁定…」，成功则画出对勾并爆出一小圈纸屑般的粒子，文案改为「已锁定 12 排 7–8 座，10 分钟内付款」。
【触发】点击发起请求；成功/失败各播一次；可重试。
【运动】spinner 不打断按钮宽度；对勾 300–450ms 画出；粒子 400–600ms 散开并消失，数量克制。
【不要】成功粒子无限循环；失败仍显示成功；没有加载与禁用态导致连点。reduced-motion 时取消粒子，只切换文案与对勾。
```

## 就地变成数量步进 / Cart Button

<a id="kokonut-cart-button"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-25
- 子类：加购后在原位展开步进器
- 触发：click / press
- 技术栈：React / Motion
- 官方演示：https://kokonutui.com/docs/buttons/cart-button
- 分册锚点：[kokonut-cart-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#kokonut-cart-button)

「加入」按钮在原位变形为带加减的数量步进，数量为 1 时可以收到回收桶，长按加减可持续改变。

链接：

- [打开 Kokonut Cart Button 演示](https://kokonutui.com/docs/buttons/cart-button)（Kokonut UI）

### 提示词

```
【场景】咖啡店「北岛」小程序点单：「桂花酒酿拿铁 ¥36」旁是「加入」。点一次，按钮在原位展开成「−  1  +」，再点加到 2。减到 0 时出现垃圾桶并收回成「加入」。长按加减会重复步进。
【触发】点击加入或加减；长按重复；到 0 收起。
【运动】宽度与内容 300–450ms 变形，数字滑动切换。不要跳出页面或另开抽屉才改数量。
【不要】没有最大库存限制；动画期间丢点击；读屏无法听到数量变化。
```

## 弹出式验证码格 / Input OTP

<a id="animate-input-otp"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-25
- 子类：逐格弹入与粘贴错落入场
- 触发：focus / submit
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/input-otp
- 分册锚点：[animate-input-otp](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-input-otp)

验证码输入格在键入时逐字弹出，粘贴整段时按格错落入场，API 与常见 OTP 输入兼容，需保证可访问。

链接：

- [打开 Animate UI Input OTP 演示](https://animate-ui.com/docs/primitives/animate-ui/input-otp)（Animate UI）

### 提示词

```
【场景】「星港支付」转账确认：标题「输入短信验证码」，说明「已发送至 138 **** 2164」。六格空位，用户键入 4 时该格弹入；若一次粘贴「839201」，六格从左到右 stagger 弹出。成功后短促勾选，进入「已转账 ¥1,280 给折纸事务所」。
【触发】键入、退格、粘贴；满格自动提交或等用户确认。
【运动】单字 180–250ms 弹出；粘贴 stagger 40–60ms。错误时格子轻摇一次并清空。
【不要】阻断粘贴；用无标签的裸 input；错误不说明原因。reduced-motion 时取消弹出，直接显示已填数字。
```

## 翻面按钮 / Flip Button

<a id="animate-flip-button"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-25
- 子类：悬停翻到背面的行动按钮
- 触发：hover / focus
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/flip-button
- 分册锚点：[animate-flip-button](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f#animate-flip-button)

按钮在悬停或聚焦时沿轴翻到背面，背面给出补充信息或另一种行动，离开后翻回。

链接：

- [打开 Animate UI Flip Button 演示](https://animate-ui.com/docs/primitives/animate-ui/flip-button)（Animate UI）

### 提示词

```
【场景】「白潮」产品卡底部按钮，正面「加入购物袋 · ¥168」；悬停翻到背面「库存 14 件 · 今日截单 18:00」。聚焦时同样翻转，方便键盘用户。
【触发】悬停或聚焦翻转；离开或失焦翻回。点击仍执行加入。
【运动】沿水平或垂直轴 300–450ms 翻转，背面不可在翻到一半时被点到。
【不要】背面信息只存在于动画里、读屏读不到；翻转时布局高度跳动。
```
