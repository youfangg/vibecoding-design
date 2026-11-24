# 文字动效

本类共 57 条，来自分册「[文字动效与进入离场](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8)」。在 `data/cases.json` 中对应 `category` 为 `type`。复制下方提示词即可用于 AI Coding。

## 目录

- [口语节奏逐词 / Scroll-Driven Kinetic Type](#do-not-scroll)
- [物理碎裂正文 / Physics-Breaking Type](#physics-about-me)
- [ASCII 密度字 / ASCII Text](#rb-ascii-text)
- [逐字去模糊 / Blur Text](#rb-blur-text)
- [解密文本 / Decrypted Text](#rb-decrypted-text)
- [坠落文字 / Falling Text](#rb-falling-text)
- [故障文字 / Glitch Text](#rb-glitch-text)
- [粒子文字 / Particle Text](#rb-particle-text)
- [轮换词 / Rotating Text](#rb-rotating-text)
- [滚动悬浮字 / Scroll Float](#rb-scroll-float)
- [速度字重 / Scroll Velocity](#rb-scroll-velocity)
- [洗牌字 / Shuffle](#rb-shuffle)
- [翻牌字 / Split Flap Text](#rb-split-flap)
- [压力变字 / Text Pressure](#rb-text-pressure)
- [对焦标题 / True Focus](#rb-true-focus)
- [近距可变字体 / Variable Proximity](#rb-variable-proximity)
- [扭曲字 / Warp Text](#rb-warp-text)
- [变形文字 / Morphing Text](#magic-morphing-text)
- [视频字 / Video Text](#magic-video-text)
- [立体翻字 / Text 3D Flip](#magic-text-3d-flip)
- [三维换字 / Letter 3D Swap](#fancy-letter-3d-swap)
- [悬停乱码 / Scramble Hover](#fancy-scramble-hover)
- [路径排字 / Text Along Path](#fancy-text-along-path)
- [逐字可变悬停 / Variable Font Hover By Letter](#fancy-variable-hover)
- [翻转换词 / Flip Words](#aceternity-flip-words)
- [打字机 / Typewriter Effect](#aceternity-typewriter)
- [生成文字 / Text Generate Effect](#aceternity-text-generate)
- [滚动字运动 / On-Scroll Text Motion](#scroll-text-motion)
- [滚动三维字柱 / 3D Text Scroll](#codrops-3d-text-scroll)
- [着色器字母 / Animated Letters Shader](#animated-letters-shader)
- [字母洗牌菜单 / Letter Shuffle Menu](#letter-shuffle-menu)
- [剧透遮盖 / Spoiler Text](#kokonut-spoiler-text)
- [滚动去模糊字 / Scroll Blur Typography](#scroll-blur-typography)
- [LCD 洗牌字 / Type Shuffle Animation](#type-shuffle-animation)
- [滚动字体组 / On-Scroll Typography Animations](#on-scroll-typography-animations)
- [字线悬停 / Line & Letter Hover Animations](#line-type-effect)
- [滚动 SVG 滤镜字 / On-Scroll SVG Filter Text](#on-scroll-svg-filter-text)
- [终端字悬停 / Terminal-like Typography Hover](#terminal-typography-hover)
- [弹拨标题 / Plucked Text](#kokonut-plucked-text)
- [牛顿摆标题 / Cradle Text](#kokonut-cradle-text)
- [日晷阴影字 / Shadow Text](#kokonut-shadow-text)
- [手绘标记字 / Marker Text](#kokonut-marker-text)
- [挤压立体字 / Extruded Text](#kokonut-extruded-text)
- [字间展开媒体 / Media Between Text](#fancy-media-between-text)
- [呼吸可变字 / Breathing Text](#fancy-breathing-text)
- [悬停竖向换字 / Letter Swap](#fancy-letter-swap)
- [乱码落入 / Scramble In](#fancy-scramble-in)
- [滚动竖向换字 / Scroll and Swap Text](#fancy-scroll-and-swap)
- [下划线扩成底色 / Underline To Background](#fancy-underline-to-background)
- [方向高亮笔 / Text Highlighter](#fancy-text-highlighter)
- [色带扫过揭示 / Dia Text Reveal](#magic-dia-text-reveal)
- [蠕动滤镜字 / Squiggly Text](#aceternity-squiggly-text)
- [画布曲线填字 / Canvas Text](#aceternity-canvas-text)
- [路径化字标 / Tech Text](#rb-tech-text)
- [折纸展开字 / Fold Text](#rb-fold-text)
- [描边填字 / Stroke Text](#rb-stroke-text)
- [回声拖尾字 / Echo Text](#rb-echo-text)

## 口语节奏逐词 / Scroll-Driven Kinetic Type

<a id="do-not-scroll"></a>

- 来源：X
- 作者：Antoine Wodniack / Codrops
- 日期：2026-11-10
- 子类：口语节奏逐词显现
- 触发：scroll
- 技术栈：GSAP / ScrollTrigger / Lenis
- 官方演示：https://tympanus.net/Demos/DoNotScroll/
- 原始出处：https://x.com/codrops/status/2120089205338423328
- 分册锚点：[do-not-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#do-not-scroll)

滚动被编成金属活字海报：每次只读出一两个词，速度近似朗读。字母带彩色拖尾滑入，节奏不均速。官方文字为真实 HTML。

链接：

- [查看 Codrops 的 X 原帖](https://x.com/codrops/status/2120089205338423328)（X，2026-11-10）
- [打开 Do Not Scroll 演示](https://tympanus.net/Demos/DoNotScroll/)（Codrops Demo）
- [阅读动势排版教程](https://tympanus.net/codrops/2026/11/10/kinetic-typography-gsap/)（Codrops，2026-11-10）

### 提示词

```
【场景】全屏字海报：把一句短话按朗读节奏拆成几步，滚动一次只读出一个词。
【触发】滚动控制 GSAP timeline（scrub，带轻微惯性）。
【运动】每步约 200lvh；文字居中，字母带短暂彩色拖尾。入场更快，词与词之间留短暂停顿。
【不要】把一句话全部同时折腾；忽略 reduced-motion。
```

## 物理碎裂正文 / Physics-Breaking Type

<a id="physics-about-me"></a>

- 来源：X
- 作者：Stas Bondar（Codrops 转述）
- 日期：2025-03-29
- 子类：滚动触发的物理碎裂
- 触发：scroll enter
- 技术栈：GSAP SplitText / ScrollTrigger / Matter.js
- 官方演示：https://www.stabondar.com/
- 原始出处：https://tympanus.net/codrops/2025/03/25/stas-bondar-25-the-code-techniques-behind-a-next-level-portfolio/
- 分册锚点：[physics-about-me](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#physics-about-me)

About Me 正文在滚入视口时按字母解体：SplitText 拆字后，每个字符成为 Matter.js 刚体，施加随机力后塌落并互相碰撞。

链接：

- [打开 Stas Bondar 个人站](https://www.stabondar.com/)（stabondar.com）
- [阅读站点技术拆解](https://tympanus.net/codrops/2025/03/25/stas-bondar-25-the-code-techniques-behind-a-next-level-portfolio/)（Codrops，2025-03-25）

### 提示词

```
【场景】关于页正文进入视口时，字母失去平面约束并互相碰撞。
【触发】ScrollTrigger onEnter 一次；可提供复位。
【运动】先拆字再做刚体；触发时给随机冲量，1.2–2s 后能量耗尽。
【不要】页面一进就全屏爆炸。动画层 aria-hidden，原正文留给读屏。
```

## ASCII 密度字 / ASCII Text

<a id="rb-ascii-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：字符密度排成大字
- 触发：load / in-view
- 技术栈：React / Canvas 或 DOM
- 官方演示：https://www.reactbits.dev/text-animations/ascii-text
- 分册锚点：[rb-ascii-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-ascii-text)

用 ASCII 或点阵字符的密度排成大字标题。适合终端、黑客或复古科技英雄区，但要给读屏提供真正的标题文本。

链接：

- [打开 React Bits ASCII Text 演示](https://www.reactbits.dev/text-animations/ascii-text)（React Bits）

### 提示词

```
【场景】复古科技英雄标题用字符密度排成大字。
【触发】载入或进入视口一次。
【运动】字符按密度场组成字形，可随指针微调，约 800–1200ms。
【不要】把正文只画在 canvas 里导致无法选中与读屏。
```

## 逐字去模糊 / Blur Text

<a id="rb-blur-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：文字去模糊入场
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/text-animations/blur-text
- 分册锚点：[rb-blur-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-blur-text)

标题按字符从模糊变清晰，比整句 Blur Fade 更细。适合短标题，不适合长段落。

链接：

- [打开 React Bits Blur Text 演示](https://www.reactbits.dev/text-animations/blur-text)（React Bits）

### 提示词

```
【场景】短标题按字从模糊变清。
【触发】in-view 一次。
【运动】每字从 blur 10–14px 到 0，stagger 30–50ms，单字 400–600ms。
【不要】用在长正文上。
```

## 解密文本 / Decrypted Text

<a id="rb-decrypted-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：乱码收敛成正文
- 触发：in-view
- 技术栈：React
- 官方演示：https://www.reactbits.dev/text-animations/decrypted-text
- 分册锚点：[rb-decrypted-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-decrypted-text)

标题先以乱码或十六进制闪动，再逐字收敛成真正文案。适合安全、科技或加密产品，但最终文字必须稳定可读。

链接：

- [打开 React Bits Decrypted Text 演示](https://www.reactbits.dev/text-animations/decrypted-text)（React Bits）

### 提示词

```
【场景】安全或科技产品标题：先乱码闪动，再逐字变成真句。
【触发】in-view 一次。
【运动】每位快速轮换字符，锁定后不再闪，整句 0.8–1.4s。
【不要】循环解密；读屏要能读到最终句。
```

## 坠落文字 / Falling Text

<a id="rb-falling-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：物理坠落字母
- 触发：in-view / click
- 技术栈：React / 2D 物理
- 官方演示：https://www.reactbits.dev/text-animations/falling-text
- 分册锚点：[rb-falling-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-falling-text)

字母像物体一样受重力坠落、碰撞或堆叠。与 About 页整段碎裂相近，但更常用于标题彩蛋或互动演示。

链接：

- [打开 React Bits Falling Text 演示](https://www.reactbits.dev/text-animations/falling-text)（React Bits）

### 提示词

```
【场景】创意标题可被点击后坠落堆叠。
【触发】进入视口或点击一次。
【运动】字母成为刚体，1.2–2s 后能量耗尽。提供复位。
【不要】让坠落挡住可点击内容；弱设备改为静态。
```

## 故障文字 / Glitch Text

<a id="rb-glitch-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：色差与切片故障
- 触发：in-view / hover
- 技术栈：React / CSS
- 官方演示：https://www.reactbits.dev/text-animations/glitch-text
- 分册锚点：[rb-glitch-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-glitch-text)

标题带短暂 RGB 色差、切片错位或噪声闪烁。适合只在入场或悬停时闪一下，不要连续频闪。

链接：

- [打开 React Bits Glitch Text 演示](https://www.reactbits.dev/text-animations/glitch-text)（React Bits）

### 提示词

```
【场景】科技标题入场或悬停时短暂故障一下。
【触发】入场播 400–700ms，或悬停时轻闪。
【运动】色差与切片错位要短，随后稳定。
【不要】循环高频闪烁。
```

## 粒子文字 / Particle Text

<a id="rb-particle-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：字形离散为粒子
- 触发：in-view / pointer
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/text-animations/particle-text
- 分册锚点：[rb-particle-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-particle-text)

标题字形由粒子组成，可汇聚成字或打散。适合英雄区一次成形，不要让粒子成为唯一信息层。

链接：

- [打开 React Bits Particle Text 演示](https://www.reactbits.dev/text-animations/particle-text)（React Bits）

### 提示词

```
【场景】英雄标题由粒子汇聚成形。
【触发】进入视口后汇聚一次；光标可轻微打散。
【运动】汇聚 0.8–1.4s；要有真实 DOM 标题给读屏。
【不要】只把字画在 canvas 里。
```

## 轮换词 / Rotating Text

<a id="rb-rotating-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：句中关键词轮换
- 触发：interval
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/text-animations/rotating-text
- 分册锚点：[rb-rotating-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-rotating-text)

一句标题里的关键词按间隔轮换，带翻、滑或淡。适合价值主张里枚举几个能力词。

链接：

- [打开 React Bits Rotating Text 演示](https://www.reactbits.dev/text-animations/rotating-text)（React Bits）

### 提示词

```
【场景】口号里的关键词每 2–3s 轮换。
【触发】定时切换；悬停可暂停。
【运动】新词从下或翻转进来，400–600ms；高度要稳定避免把下面布局顶动。
【不要】轮换过快读不完。
```

## 滚动悬浮字 / Scroll Float

<a id="rb-scroll-float"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：滚动时字符悬浮错位
- 触发：scroll
- 技术栈：React / Scroll 驱动
- 官方演示：https://www.reactbits.dev/text-animations/scroll-float
- 分册锚点：[rb-scroll-float](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-scroll-float)

滚动时标题字符轻微悬浮或错位，像被气流托起。适合章节标题，幅度要小。

链接：

- [打开 React Bits Scroll Float 演示](https://www.reactbits.dev/text-animations/scroll-float)（React Bits）

### 提示词

```
【场景】章节标题随滚动轻微浮起错位。
【触发】滚动进度。
【运动】位移小，字符间可有微差；停下后回位。
【不要】幅度大到字读不清。
```

## 速度字重 / Scroll Velocity

<a id="rb-scroll-velocity"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：滚动速度驱动字形
- 触发：scroll velocity
- 技术栈：React / scroll velocity
- 官方演示：https://www.reactbits.dev/text-animations/scroll-velocity
- 分册锚点：[rb-scroll-velocity](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-scroll-velocity)

字形的倾斜、拉长或字重跟滚动速度绑定：滚得快更夸张，停下后回正。这是把「滚动手感」写进标题的手法。

链接：

- [打开 React Bits Scroll Velocity 演示](https://www.reactbits.dev/text-animations/scroll-velocity)（React Bits）

### 提示词

```
【场景】全屏标题的倾斜或拉长跟滚动速度走。
【触发】滚动速度；停下后 200–400ms 回正。
【运动】映射要有上限，避免字被拉到不可读。
【不要】匀速滚动时还一直扭曲。
```

## 洗牌字 / Shuffle

<a id="rb-shuffle"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：字符洗牌复位
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/text-animations/shuffle
- 分册锚点：[rb-shuffle](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-shuffle)

标题字符先被打乱位置，再洗牌回正确顺序。与解密乱码不同，它更像空间上的洗牌。

链接：

- [打开 React Bits Shuffle 演示](https://www.reactbits.dev/text-animations/shuffle)（React Bits）

### 提示词

```
【场景】短标题入场时字符从乱序洗回原位。
【触发】in-view 一次。
【运动】0.7–1.2s 内归位，easing 收敛。
【不要】洗牌过程长到读不成句。
```

## 翻牌字 / Split Flap Text

<a id="rb-split-flap"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：机械翻牌
- 触发：in-view / value change
- 技术栈：React / CSS 3D
- 官方演示：https://www.reactbits.dev/text-animations/split-flap-text
- 分册锚点：[rb-split-flap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-split-flap)

像机场或火车站翻牌一样，每位绕轴翻到目标字符。适合时刻表、看板或复古资讯头。

链接：

- [打开 React Bits Split Flap Text 演示](https://www.reactbits.dev/text-animations/split-flap-text)（React Bits）

### 提示词

```
【场景】出发看板或数据头：数字与字母按位翻到目标。
【触发】进入视口或值变化。
【运动】每位绕轴翻，stagger 40–80ms；使用等宽。
【不要】翻得过快看不清中间态。
```

## 压力变字 / Text Pressure

<a id="rb-text-pressure"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：指针压力改变字形
- 触发：pointer proximity
- 技术栈：React / variable font
- 官方演示：https://www.reactbits.dev/text-animations/text-pressure
- 分册锚点：[rb-text-pressure](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-text-pressure)

光标靠近时，标题的字重、宽度或挤压随距离变化，像被按下去。适合可变字体标题。

链接：

- [打开 React Bits Text Pressure 演示](https://www.reactbits.dev/text-animations/text-pressure)（React Bits）

### 提示词

```
【场景】可变字体标题随光标远近改变字重或宽度。
【触发】指针距离；离开后回默认。
【运动】变化要跟手但有短滞后；幅度可读。
【不要】触屏强制依赖悬停。
```

## 对焦标题 / True Focus

<a id="rb-true-focus"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：当前词对焦其余虚化
- 触发：interval / scroll / hover
- 技术栈：React
- 官方演示：https://www.reactbits.dev/text-animations/true-focus
- 分册锚点：[rb-true-focus](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-true-focus)

一句里只有当前词清晰，其余词虚化，对焦点可轮换或随滚动走。适合强调关键词的口号。

链接：

- [打开 React Bits True Focus 演示](https://www.reactbits.dev/text-animations/true-focus)（React Bits）

### 提示词

```
【场景】口号中轮流对焦一个关键词，其余词虚化。
【触发】定时或滚动；也可悬停。
【运动】对焦切换 300–500ms，虚化程度以仍可扫读为准。
【不要】把其余词虚到完全不可读。
```

## 近距可变字体 / Variable Proximity

<a id="rb-variable-proximity"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：距离驱动可变字体
- 触发：pointer proximity
- 技术栈：React / variable font
- 官方演示：https://www.reactbits.dev/text-animations/variable-proximity
- 分册锚点：[rb-variable-proximity](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-variable-proximity)

每个字符的可变字体轴随与光标的距离连续变化。比整句压力更细，是按字母的近距响应。

链接：

- [打开 React Bits Variable Proximity 演示](https://www.reactbits.dev/text-animations/variable-proximity)（React Bits）

### 提示词

```
【场景】大标题每个字随光标距离改字重或宽度。
【触发】指针近距；离开后回默认。
【运动】按字衰减，过渡要连续。
【不要】变化太大导致字重叠。
```

## 扭曲字 / Warp Text

<a id="rb-warp-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：标题网格扭曲
- 触发：idle / pointer
- 技术栈：React / Canvas 或 SVG
- 官方演示：https://www.reactbits.dev/text-animations/warp-text
- 分册锚点：[rb-warp-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-warp-text)

标题像被网格或力场轻轻扭曲，可随时间或光标变化。幅度必须克制，否则字不可读。

链接：

- [打开 React Bits Warp Text 演示](https://www.reactbits.dev/text-animations/warp-text)（React Bits）

### 提示词

```
【场景】英雄标题带轻微力场扭曲。
【触发】空闲或光标。
【运动】扭曲幅度小，停下后可回正。
【不要】把字扭到无法阅读。
```

## 变形文字 / Morphing Text

<a id="magic-morphing-text"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：词与词之间形态过渡
- 触发：interval
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/morphing-text
- 分册锚点：[magic-morphing-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#magic-morphing-text)

一组词在同一位置互相变形过渡，而不是简单淡入淡出。适合短词轮换的口号。

链接：

- [打开 Magic UI Morphing Text 演示](https://magicui.design/docs/components/morphing-text)（Magic UI）

### 提示词

```
【场景】短词口号在同一位置互相变形。
【触发】每 2–3s 切换；悬停可暂停。
【运动】形态过渡 500–800ms，容器宽度要稳。
【不要】用两个淡入冒充变形。
```

## 视频字 / Video Text

<a id="magic-video-text"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：字内填充视频
- 触发：load
- 技术栈：React / CSS mask 或 SVG
- 官方演示：https://magicui.design/docs/components/video-text
- 分册锚点：[magic-video-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#magic-video-text)

把视频裁切进大号标题字形里。适合旅游、时装或运动英雄区，字形本身必须足够粗。

链接：

- [打开 Magic UI Video Text 演示](https://magicui.design/docs/components/video-text)（Magic UI）

### 提示词

```
【场景】旅行或时装英雄大标题内播放视频。
【触发】进入视口后播放；不可见时暂停。
【运动】视频是内容，字不要再加强烈入场。提供纯色回退与真实标题文本。
【不要】细笔画字体；自动播放带声音。
```

## 立体翻字 / Text 3D Flip

<a id="magic-text-3d-flip"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：三维翻面换词
- 触发：interval / click
- 技术栈：React / CSS 3D
- 官方演示：https://magicui.design/docs/components/text-3d-flip
- 分册锚点：[magic-text-3d-flip](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#magic-text-3d-flip)

文字像卡片一样做 3D 翻面，换成下一句。适合短词或数字的切换。

链接：

- [打开 Magic UI Text 3D Flip 演示](https://magicui.design/docs/components/text-3d-flip)（Magic UI）

### 提示词

```
【场景】短词或数字 3D 翻到下一状态。
【触发】定时或点击。
【运动】绕中轴翻 500–700ms，透视约 800–1200px。
【不要】长句做 3D 翻面。
```

## 三维换字 / Letter 3D Swap

<a id="fancy-letter-3d-swap"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：按字母三维替换
- 触发：hover / change
- 技术栈：React / CSS 3D
- 官方演示：https://www.fancycomponents.dev/docs/components/text/letter-3d-swap
- 分册锚点：[fancy-letter-3d-swap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-letter-3d-swap)

悬停或切换时，单个字母做 3D 替换。比整句翻面更细，适合导航或短标题彩蛋。

链接：

- [打开 Fancy Letter 3D Swap 演示](https://www.fancycomponents.dev/docs/components/text/letter-3d-swap)（Fancy Components）

### 提示词

```
【场景】导航或短标题悬停时按字母 3D 换成另一词。
【触发】悬停或状态切换。
【运动】按字母 stagger 30–50ms 翻换，单字 350–500ms。
【不要】触屏只依赖悬停。
```

## 悬停乱码 / Scramble Hover

<a id="fancy-scramble-hover"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：悬停时字符乱码复位
- 触发：hover / focus
- 技术栈：React
- 官方演示：https://www.fancycomponents.dev/docs/components/text/scramble-hover
- 分册锚点：[fancy-scramble-hover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-scramble-hover)

悬停链接或标题时，字符短暂乱码再回到原词。是导航微交互里很常用的文字手法。

链接：

- [打开 Fancy Scramble Hover 演示](https://www.fancycomponents.dev/docs/components/text/scramble-hover)（Fancy Components）

### 提示词

```
【场景】导航链接悬停时短暂乱码再复位。
【触发】hover 与 focus。
【运动】乱码 200–350ms 内收敛回原词。
【不要】每次经过都长时间乱码。
```

## 路径排字 / Text Along Path

<a id="fancy-text-along-path"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：文字沿路径运动
- 触发：scroll / loop
- 技术栈：React / SVG
- 官方演示：https://www.fancycomponents.dev/docs/components/text/text-along-path
- 分册锚点：[fancy-text-along-path](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-text-along-path)

文字沿一条 SVG 路径排列，并可随滚动或时间移动。适合环形签名、标语轨道或装饰性标题。

链接：

- [打开 Fancy Text Along Path 演示](https://www.fancycomponents.dev/docs/components/text/text-along-path)（Fancy Components）

### 提示词

```
【场景】环形标语沿路径缓慢移动。
【触发】空闲循环或滚动驱动。
【运动】速度慢，文字要能被选中或另附可读文本。
【不要】路径过陡导致字重叠。
```

## 逐字可变悬停 / Variable Font Hover By Letter

<a id="fancy-variable-hover"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-23
- 子类：悬停逐字改轴
- 触发：hover / focus
- 技术栈：React / variable font
- 官方演示：https://www.fancycomponents.dev/docs/components/text/variable-font-hover-by-letter
- 分册锚点：[fancy-variable-hover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-variable-hover)

悬停标题时，字母依次或按位置改变可变字体轴。比整句加粗更有书写感。

链接：

- [打开 Fancy Variable Font Hover By Letter 演示](https://www.fancycomponents.dev/docs/components/text/variable-font-hover-by-letter)（Fancy Components）

### 提示词

```
【场景】大标题悬停时字母依次变重或变宽。
【触发】hover 与 focus。
【运动】按字母 stagger 20–40ms；离开后收回。
【不要】变化大到字母碰撞。
```

## 翻转换词 / Flip Words

<a id="aceternity-flip-words"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：句中翻转换词
- 触发：interval
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/flip-words
- 分册锚点：[aceternity-flip-words](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#aceternity-flip-words)

标题中的一个词按间隔翻转成下一词。是轮换词的一种更干脆的实现，适合短能力词。

链接：

- [打开 Aceternity Flip Words 演示](https://ui.aceternity.com/components/flip-words)（Aceternity UI）

### 提示词

```
【场景】口号里的能力词每几秒翻转切换。
【触发】定时；可暂停。
【运动】翻或滑入 400–600ms，容器高度稳定。
【不要】长句整体翻转。
```

## 打字机 / Typewriter Effect

<a id="aceternity-typewriter"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：逐字打出
- 触发：in-view
- 技术栈：React
- 官方演示：https://ui.aceternity.com/components/typewriter-effect
- 分册锚点：[aceternity-typewriter](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#aceternity-typewriter)

标题或对话像打字一样逐字出现，可带光标闪烁。适合短句或终端感文案，不要打一篇长文。

链接：

- [打开 Aceternity Typewriter Effect 演示](https://ui.aceternity.com/components/typewriter-effect)（Aceternity UI）

### 提示词

```
【场景】短口号或终端句逐字打出。
【触发】in-view 一次。
【运动】每字 30–60ms，末尾光标闪烁；完成后光标可停。
【不要】打长段落；读屏要一次读到整句。
```

## 生成文字 / Text Generate Effect

<a id="aceternity-text-generate"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：逐词生成显现
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/text-generate-effect
- 分册锚点：[aceternity-text-generate](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#aceternity-text-generate)

文案像被生成一样逐词显现，带轻微模糊或淡入。适合 AI 产品或短说明的入场。

链接：

- [打开 Aceternity Text Generate Effect 演示](https://ui.aceternity.com/components/text-generate-effect)（Aceternity UI）

### 提示词

```
【场景】AI 产品短说明逐词显现。
【触发】in-view 一次。
【运动】按词淡入或去模糊，stagger 40–70ms。
【不要】用它生成整篇正文。
```

## 滚动字运动 / On-Scroll Text Motion

<a id="scroll-text-motion"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：滚动驱动字形运动
- 触发：scroll
- 技术栈：GSAP / ScrollTrigger
- 官方演示：https://tympanus.net/Development/ScrollTextMotion/
- 分册锚点：[scroll-text-motion](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#scroll-text-motion)

Codrops 演示把滚动直接写成标题运动：字的位置、缩放或切片跟滚动进度绑定。适合章节海报。

链接：

- [打开 On-Scroll Text Motion 演示](https://tympanus.net/Development/ScrollTextMotion/)（Codrops Demo）

### 提示词

```
【场景】章节海报标题随滚动位移或切片。
【触发】滚动 scrub。
【运动】进度与字形属性一一对应，停下后稳定。文字用真实 HTML。
【不要】把字拆到不可读。
```

## 滚动三维字柱 / 3D Text Scroll

<a id="codrops-3d-text-scroll"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：圆柱或三维字随滚动转
- 触发：scroll
- 技术栈：Three.js / GSAP
- 官方演示：https://tympanus.net/Tutorials/3DTextScroll/
- 分册锚点：[codrops-3d-text-scroll](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#codrops-3d-text-scroll)

三维文字排在圆柱或其他空间结构上，滚动时整体旋转。适合强视觉的字体展示，小屏要简化。

链接：

- [打开 3D Text Scroll 演示](https://tympanus.net/Tutorials/3DTextScroll/)（Codrops Demo）

### 提示词

```
【场景】全屏三维字柱随滚动旋转。
【触发】滚动驱动旋转。
【运动】透视稳定，正对相机的字要可读；小屏改为平面标题。
【不要】过强透视导致眩晕。
```

## 着色器字母 / Animated Letters Shader

<a id="animated-letters-shader"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-03-24
- 子类：GLSL 交互字母
- 触发：pointer / time
- 技术栈：Three.js / GLSL
- 官方演示：https://tympanus.net/Tutorials/AnimatedLettersShader/
- 原始出处：https://tympanus.net/codrops/2025/03/24/animating-letters-with-shaders-interactive-text-effect-with-three-js-glsl/
- 分册锚点：[animated-letters-shader](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#animated-letters-shader)

用 Three.js 与 GLSL 给字母做交互着色：光标或时间改变字形的扭曲、光照或填充。适合英雄区一次展示。

链接：

- [打开 Interactive Text Effect 演示](https://tympanus.net/Tutorials/AnimatedLettersShader/)（Codrops Demo）
- [阅读着色器字母教程](https://tympanus.net/codrops/2025/03/24/animating-letters-with-shaders-interactive-text-effect-with-three-js-glsl/)（Codrops，2025-03-24）

### 提示词

```
【场景】英雄字母随光标产生着色器扭曲或光照。
【触发】光标或缓慢自发。
【运动】幅度克制，字仍可读；另附 DOM 标题。
【不要】把正文只放在 WebGL 里。
```

## 字母洗牌菜单 / Letter Shuffle Menu

<a id="letter-shuffle-menu"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2022-03-23
- 子类：菜单项字母洗牌
- 触发：hover / menu open
- 技术栈：JavaScript / typography
- 官方演示：https://tympanus.net/Development/LetterShuffleMenu/
- 原始出处：https://tympanus.net/codrops/2022/03/23/letter-shuffle-animation-for-a-menu/
- 分册锚点：[letter-shuffle-menu](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#letter-shuffle-menu)

菜单打开或悬停时，字母洗牌后落成词。把导航项本身变成一场短暂的文字表演。

链接：

- [打开 Letter Shuffle Menu 演示](https://tympanus.net/Development/LetterShuffleMenu/)（Codrops Demo）
- [阅读菜单洗牌教程](https://tympanus.net/codrops/2022/03/23/letter-shuffle-animation-for-a-menu/)（Codrops，2022-03-23）

### 提示词

```
【场景】导航打开或悬停时，菜单项字母快速洗牌落位。
【触发】打开菜单或 hover/focus。
【运动】每项 300–500ms 内归位；键盘焦点同样触发。
【不要】让洗牌延迟到无法迅速点选。
```

## 剧透遮盖 / Spoiler Text

<a id="kokonut-spoiler-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：点击揭开遮盖文字
- 触发：click / hover
- 技术栈：React
- 官方演示：https://kokonutui.com/docs/texts/spoiler-text
- 分册锚点：[kokonut-spoiler-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-spoiler-text)

一段文字先被噪点或模糊遮住，点击或悬停后揭开。适合剧透、答案或敏感信息，揭开动作要短而明确。

链接：

- [打开 Kokonut Spoiler Text 演示](https://kokonutui.com/docs/texts/spoiler-text)（Kokonut UI）

### 提示词

```
【场景】评论里的剧透句先被遮住，点击后揭开。
【触发】点击或键盘激活；再次可盖回。
【运动】噪点或模糊在 200–350ms 内消失。
【不要】只靠颜色隐藏而文字仍可被选中读出敏感内容。
```

## 滚动去模糊字 / Scroll Blur Typography

<a id="scroll-blur-typography"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2024-04-23
- 子类：滚动驱动的模糊揭示
- 触发：scroll
- 技术栈：GSAP / CSS filter
- 官方演示：https://tympanus.net/Development/ScrollBlurTypography/
- 原始出处：https://tympanus.net/codrops/2024/04/23/blurry-text-reveal-on-scroll/
- 分册锚点：[scroll-blur-typography](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#scroll-blur-typography)

标题或短句进入视口时，从强烈模糊逐渐变得清晰。没有复杂遮罩，靠滤镜与滚动进度配合，适合配颗粒背景的编辑页。滤镜动画较重，应只用于短文本。

链接：

- [打开 Scroll Blur Typography 演示](https://tympanus.net/Development/ScrollBlurTypography/)（Codrops Demo）
- [阅读模糊揭示教程](https://tympanus.net/codrops/2024/04/23/blurry-text-reveal-on-scroll/)（Codrops，2024-04-23）

### 提示词

```
【场景】编辑页或案例页：短标题随滚动从模糊变为清晰。
【触发】滚动进度驱动（scrub），进入视口后开始，离开可反向。
【运动】filter: blur 从约 16–24px 收到 0，并伴随轻微 opacity 提升；全程贴合滚动，不要额外弹跳。只用于标题或一两句短文。
【不要】在长段落或大量文字上同时做滤镜；忽略性能与 reduced-motion（改为直接显示）。
```

## LCD 洗牌字 / Type Shuffle Animation

<a id="type-shuffle-animation"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2023-02-08
- 子类：终端式字符洗牌切换
- 触发：load / click
- 技术栈：JavaScript / GSAP
- 官方演示：https://tympanus.net/Development/TypeShuffleAnimation/
- 原始出处：https://tympanus.net/codrops/2023/02/08/shuffling-typography-animation/
- 分册锚点：[type-shuffle-animation](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#type-shuffle-animation)

受 Andreas Gysin 的 LCD 1 启发：姓名、职业、简介等字段在切换时，字符像液晶屏一样快速洗牌后落定。演示提供多种效果变体，适合作品集档案卡。

链接：

- [打开 Type Shuffle Animation 演示](https://tympanus.net/Development/TypeShuffleAnimation/)（Codrops Demo）
- [阅读洗牌字体教程](https://tympanus.net/codrops/2023/02/08/shuffling-typography-animation/)（Codrops，2023-02-08）

### 提示词

```
【场景】作品集或团队档案卡：切换人物时，姓名、职位、简介里的字符先乱码再落成新文案。
【触发】进入或点击切换；可提供多种洗牌节奏。
【运动】每位轮换随机字符，约 400–800ms 内收敛到目标字，可按列或按行轻微错开。保留原文字给读屏。
【不要】与已有洗牌菜单或悬停乱码做成同一效果；在长正文上整段持续闪烁。
```

## 滚动字体组 / On-Scroll Typography Animations

<a id="on-scroll-typography-animations"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2023-01-18
- 子类：多种滚动驱动字体变形
- 触发：scroll
- 技术栈：GSAP / ScrollTrigger
- 官方演示：https://tympanus.net/Development/OnScrollTypographyAnimations/
- 原始出处：https://tympanus.net/codrops/2023/01/18/on-scroll-typography-animations/
- 分册锚点：[on-scroll-typography-animations](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#on-scroll-typography-animations)

一组随滚动改变字距、倾斜、裁切或位移的标题实验。需要中速滚动才能看清每一段的变形，适合作品集章节头，而不是单一入场。

链接：

- [打开 On-Scroll Typography Animations 演示](https://tympanus.net/Development/OnScrollTypographyAnimations/)（Codrops Demo）
- [阅读滚动字体教程](https://tympanus.net/codrops/2023/01/18/on-scroll-typography-animations/)（Codrops，2023-01-18）

### 提示词

```
【场景】作品集长页：每个章节标题用一种随滚动发生的字体变形（字距、倾斜、裁切或位移）。
【触发】滚动进度（scrub），进入视口后播放该段。
【运动】变形贴合滚动，幅度克制，标题始终可辨认；各段手法不同，但都保留真实 DOM 文本。
【不要】把多种效果叠在同一句上；滚动过快时丢失可读性；忽略 reduced-motion。
```

## 字线悬停 / Line & Letter Hover Animations

<a id="line-type-effect"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2023
- 子类：行与字母的悬停变形
- 触发：hover
- 技术栈：GSAP / CSS
- 官方演示：https://tympanus.net/Development/LineTypeEffect/
- 分册锚点：[line-type-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#line-type-effect)

一组单词列表：悬停时字母与装饰线以裁切、错位或描边方式回应。每个词是独立的短标题，适合导航、词汇表或作品索引。

链接：

- [打开 Line & Letter Hover Animations 演示](https://tympanus.net/Development/LineTypeEffect/)（Codrops Demo）

### 提示词

```
【场景】作品索引或词汇表：一列短词，悬停时字母与装饰线错位、裁切或描边回应。
【触发】桌面悬停，键盘聚焦同样播放。
【运动】200–400ms 内完成，离场用稍不同的曲线收回；只动当前词。保留可读 DOM 文本。
【不要】整列同时抖动；触屏没有可聚焦的替代状态。
```

## 滚动 SVG 滤镜字 / On-Scroll SVG Filter Text

<a id="on-scroll-svg-filter-text"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2024-08-22
- 子类：滚动触发的 SVG 滤镜扭曲
- 触发：scroll / replay
- 技术栈：GSAP / SVG filter
- 官方演示：https://tympanus.net/Development/OnScrollSVGFilterText/
- 原始出处：https://tympanus.net/codrops/2024/08/22/scroll-based-svg-filter-animations-on-text/
- 分册锚点：[on-scroll-svg-filter-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#on-scroll-svg-filter-text)

HTML 标题套用 SVG 滤镜，滚动时出现波纹、碎裂或扭曲，每段标题后可重放。滤镜作用在 HTML 文字上，而不是把标题画进 SVG。

链接：

- [打开 On-Scroll SVG Filter Text 演示](https://tympanus.net/Development/OnScrollSVGFilterText/)（Codrops Demo）
- [阅读 SVG 滤镜字教程](https://tympanus.net/codrops/2024/08/22/scroll-based-svg-filter-animations-on-text/)（Codrops，2024-08-22）

### 提示词

```
【场景】音乐或编辑页章节标题：进入时被 SVG 滤镜短暂扭曲，再恢复清晰。
【触发】滚动进入一次；可提供重放按钮以便细看。
【运动】滤镜参数随滚动或 600–1200ms 时间轴变化，结束时必须回到未扭曲的原字。只用于短标题。
【不要】正文长时间处于扭曲状态；不提供重放就无法看清最终文字；忽略 reduced-motion。
```

## 终端字悬停 / Terminal-like Typography Hover

<a id="terminal-typography-hover"></a>

- 来源：设计站点
- 作者：Manoela Ilic / Codrops
- 日期：2024-06-19
- 子类：终端风格的字符与光标悬停
- 触发：hover
- 技术栈：JavaScript / CSS
- 官方演示：https://tympanus.net/Development/LineTextHoverAnimations/
- 原始出处：https://tympanus.net/codrops/2024/06/19/hover-animations-for-terminal-like-typography/
- 分册锚点：[terminal-typography-hover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#terminal-typography-hover)

受 Jean Dawson 网站启发的终端风列表：悬停时字符洗牌变色、出现光标，或带一层模糊背景。看起来像终端被点亮，而不是普通下划线。

链接：

- [打开 Terminal-like Typography Hover 演示](https://tympanus.net/Development/LineTextHoverAnimations/)（Codrops Demo）
- [阅读终端字悬停教程](https://tympanus.net/codrops/2024/06/19/hover-animations-for-terminal-like-typography/)（Codrops，2024-06-19）

### 提示词

```
【场景】档案或活动列表用等宽字体排成终端风，悬停一行时字符短暂洗牌并变色，可带闪烁光标或一层模糊背景。
【触发】悬停或键盘聚焦。
【运动】洗牌 200–400ms 后落定；光标可短暂闪一下。只动当前行。
【不要】做成普通颜色变化；整表同时闪烁；触屏无法查看同一状态。
```

## 弹拨标题 / Plucked Text

<a id="kokonut-plucked-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：弦上文字的弹拨物理
- 触发：pointer drag / strum
- 技术栈：React / 弦波物理
- 官方演示：https://kokonutui.com/docs/texts/plucked-text
- 分册锚点：[kokonut-plucked-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-plucked-text)

一行标题坐在两端固定的弦上。拖拽会把弦拉成 V 形再放开振铃，光标扫过也可拨弦。字母随弦倾斜，能量耗尽后自动停环。

链接：

- [打开 Kokonut Plucked Text 演示](https://kokonutui.com/docs/texts/plucked-text)（Kokonut UI）

### 提示词

```
【场景】品牌或专辑英雄标题坐在一根弦上，可拨、可扫，让它振铃后再落下。
【触发】按住某点下拉再松开为弹拨；光标横扫也可拨弦。尊重 reduced-motion，改为静止。
【运动】用驻波模态模拟弦：高音迅速衰减，留下较慢的摆动；位移不超过字号的约 0.6 倍；字母沿切线轻微倾斜。静止时停止循环。
【不要】把字母甩离基线；没有读屏原文；在多行段落上使用。
```

## 牛顿摆标题 / Cradle Text

<a id="kokonut-cradle-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：字母如牛顿摆传击
- 触发：pointer / in-view intro
- 技术栈：React / 钟摆物理
- 官方演示：https://kokonutui.com/docs/texts/cradle-text
- 分册锚点：[kokonut-cradle-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-cradle-text)

字母悬挂在横杆上，像牛顿摆：敲击一端，碰撞沿单词传到另一端再甩出。首次进入时可自动抬起首字再松开。

链接：

- [打开 Kokonut Cradle Text 演示](https://kokonutui.com/docs/texts/cradle-text)（Kokonut UI）

### 提示词

```
【场景】产品或工作室标题像牛顿摆一样挂在横杆上，点击或扫过某个字母，撞击会传到另一端。
【触发】进入视口可做一次首字抬起再落下；之后靠拖、点、扫驱动。reduced-motion 时静止悬挂。
【运动】等长钟摆，碰撞保留约 0.95–0.97 的速度；末端字母甩出后再摆回。几秒内阻尼至静止。
【不要】字母互相穿过；没有悬挂关系就只做左右晃；忽略读屏原文。
```

## 日晷阴影字 / Shadow Text

<a id="kokonut-shadow-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：按时钟与指针投射长影
- 触发：clock / pointer proximity
- 技术栈：React / text-shadow
- 官方演示：https://kokonutui.com/docs/texts/shadow-text
- 分册锚点：[kokonut-shadow-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-shadow-text)

标题像日晷：默认按读者本地时间决定阳光方向与影长，指针靠近时变成手持灯。夜间阴影更淡。适合摄影或灯光类产品页。

链接：

- [打开 Kokonut Shadow Text 演示](https://kokonutui.com/docs/texts/shadow-text)（Kokonut UI）

### 提示词

```
【场景】光线或摄影产品英雄标题：每个字母投下长而软的影子。
【触发】默认按本地时钟（约 6 点日出、正午影短、晚 8 点日落）；指针进入标题约 160px 内改为灯源；离开后回到日影。
【运动】影子用多层 text-shadow 连成一条，方向与长度平滑跟随，不要跳变。
【不要】做成生硬的单层灰色阴影；夜间仍用刺眼黑影；把效果用在小字正文上。
```

## 手绘标记字 / Marker Text

<a id="kokonut-marker-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：高亮线框随阅读顺序描出
- 触发：in-view
- 技术栈：React / SVG
- 官方演示：https://kokonutui.com/docs/texts/marker-text
- 分册锚点：[kokonut-marker-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-marker-text)

进入视口时，手绘高亮、下划线、圆圈、方框或删除线按阅读顺序把自己画出来。像有人用马克笔在句子上做笔记。

链接：

- [打开 Kokonut Marker Text 演示](https://kokonutui.com/docs/texts/marker-text)（Kokonut UI）

### 提示词

```
【场景】教程、报价或功能说明里，需要强调的词被手绘高亮、下划线、圆圈或删除线标出。
【触发】该句进入视口一次，按阅读顺序逐条画出。
【运动】笔迹 300–600ms 描完，带轻微手绘抖动；多处标记 stagger 120–200ms。颜色低于正文对比，不挡字。
【不要】用生硬矩形代替笔迹；动画循环不停；忽略 reduced-motion（直接显示最终标记）。
```

## 挤压立体字 / Extruded Text

<a id="kokonut-extruded-text"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-24
- 子类：指针照明的键帽式挤出字
- 触发：pointer move / press
- 技术栈：React / CSS 3D
- 官方演示：https://kokonutui.com/docs/texts/swoosh-text
- 分册锚点：[kokonut-extruded-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#kokonut-extruded-text)

锌色挤出立体字，由指针决定受光面；字母可像键帽一样被按下。挤出由多层叠成，深度可控。

链接：

- [打开 Kokonut Extruded Text 演示](https://kokonutui.com/docs/texts/swoosh-text)（Kokonut UI）

### 提示词

```
【场景】工具或硬件品牌英雄标题做成有厚度的立体字，光线跟手，字母可按下。
【触发】指针移动改变受光面；按下某个字母像键帽沉入，松开弹回。
【运动】挤出约 0.2em，用 6–16 层表现厚度；光照连续，按压 120–200ms。
【不要】做成无法阅读的透视狂欢；触屏没有按下反馈；忽略读屏原文。
```

## 字间展开媒体 / Media Between Text

<a id="fancy-media-between-text"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：两词之间展开图像或视频
- 触发：hover / in-view / ref
- 技术栈：React / Motion layout
- 官方演示：https://www.fancycomponents.dev/docs/components/blocks/media-between-text
- 分册锚点：[fancy-media-between-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-media-between-text)

左右两段文字中间插入图片或视频：媒体从宽度 0 展开，两侧文字用共享布局让开。可悬停、进入视口或外部按钮触发，也可竖排。

链接：

- [打开 Fancy Media Between Text 演示](https://www.fancycomponents.dev/docs/components/blocks/media-between-text)（Fancy Components）

### 提示词

```
【场景】作品标题如「Studio / Reel」中间，悬停或进入时展开一张图或一段视频。
【触发】hover、in-view 一次，或由外部按钮调用。
【运动】媒体宽度从 0 弹到内容宽，约 400ms spring、bounce 为 0；两侧文字用 layout 平滑让位。
【不要】文字跳动换行；视频没有静音与封面；触屏无法触发同一展开。
```

## 呼吸可变字 / Breathing Text

<a id="fancy-breathing-text"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：可变字体的持续呼吸
- 触发：idle loop
- 技术栈：React / Motion / 可变字体
- 官方演示：https://www.fancycomponents.dev/docs/components/text/breathing-text
- 分册锚点：[fancy-breathing-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-breathing-text)

用可变字体的字重或宽度轴做持续的呼吸起伏，字母之间可错开相位。只适用于可变字体。

链接：

- [打开 Fancy Breathing Text 演示](https://www.fancycomponents.dev/docs/components/text/breathing-text)（Fancy Components）

### 提示词

```
【场景】品牌口号用可变字体轻轻呼吸，字重或宽度像吸气呼气一样起伏。
【触发】进入后慢速循环；reduced-motion 时停在中等字重。
【运动】单次呼吸 2–4s，字母 stagger 相位，幅度克制，始终可读。
【不要】在非可变字体上强行缩放模拟；幅度大到闪烁。
```

## 悬停竖向换字 / Letter Swap

<a id="fancy-letter-swap"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：悬停时字母垂直替换
- 触发：hover
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/text/letter-swap
- 分册锚点：[fancy-letter-swap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-letter-swap)

悬停时每个字母沿垂直方向换成另一套字母，像翻过一条细缝。与三维盒换字不同，这是二维的竖向滑动替换。

链接：

- [打开 Fancy Letter Swap 演示](https://www.fancycomponents.dev/docs/components/text/letter-swap)（Fancy Components）

### 提示词

```
【场景】导航或标题悬停时，字母在细缝里向上或向下换成另一组字。
【触发】悬停与键盘聚焦；离开时翻回。
【运动】每字 250–400ms，可轻微 stagger；溢出隐藏，避免字母露出缝外。
【不要】与三维换字或整词旋转做成同一效果；没有第二套文案就空翻。
```

## 乱码落入 / Scramble In

<a id="fancy-scramble-in"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：前方乱码推进的揭示
- 触发：in-view
- 技术栈：React
- 官方演示：https://www.fancycomponents.dev/docs/components/text/scramble-in
- 分册锚点：[fancy-scramble-in](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-scramble-in)

文字揭示时，已落定的字前面还跟一段正在洗牌的乱码，乱码向前推进直到整句清晰。与纯悬停乱码不同，这是入场揭示。

链接：

- [打开 Fancy Scramble In 演示](https://www.fancycomponents.dev/docs/components/text/scramble-in)（Fancy Components）

### 提示词

```
【场景】英雄标题进入时，从左到右落定，未完成的部分仍是乱码。
【触发】in-view 一次。
【运动】已确定的字不再动，乱码窗口向前推进，整句约 0.8–1.4s。保留读屏原文。
【不要】整句同时无序闪到结束；循环播放干扰阅读。
```

## 滚动竖向换字 / Scroll and Swap Text

<a id="fancy-scroll-and-swap"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：滚动进度驱动的竖向换字
- 触发：scroll
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/text/scroll-and-swap
- 分册锚点：[fancy-scroll-and-swap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-scroll-and-swap)

复制一层文字上下叠放，用滚动进度把字母竖直换到下一句。适合章节之间用同一位置完成措辞切换。

链接：

- [打开 Fancy Scroll and Swap Text 演示](https://www.fancycomponents.dev/docs/components/text/scroll-and-swap)（Fancy Components）

### 提示词

```
【场景】粘滞章节头：滚动时，同一位置的标题逐字竖直换成下一句。
【触发】滚动进度（scrub）。
【运动】每个字母在隐藏溢出的槽里垂直滑动，可按字轻微错开；进度与滚动一一对应。
【不要】做成淡入淡出换词；滚动与字不同步。
```

## 下划线扩成底色 / Underline To Background

<a id="fancy-underline-to-background"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：下划线扩张为文字底色
- 触发：hover / in-view
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/text/underline-to-background
- 分册锚点：[fancy-underline-to-background](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-underline-to-background)

一条细下划线展开，变成整词的背景色块。比普通下划线更像在给词涂色，适合链接、标签或引用强调。

链接：

- [打开 Fancy Underline To Background 演示](https://www.fancycomponents.dev/docs/components/text/underline-to-background)（Fancy Components）

### 提示词

```
【场景】文章链接或关键词：悬停或进入时，下划线向上扩张成文字底色。
【触发】hover 或 in-view 一次。
【运动】200–350ms，从底部长高到字高，文字颜色在对比不足时同步切换。
【不要】只加一条静止下划线；底色对比不够导致字看不清。
```

## 方向高亮笔 / Text Highlighter

<a id="fancy-text-highlighter"></a>

- 来源：AI Coding
- 作者：Fancy Components
- 日期：采集于 2026-11-24
- 子类：可指定方向的高亮揭示
- 触发：hover / in-view
- 技术栈：React / Motion
- 官方演示：https://www.fancycomponents.dev/docs/components/text/text-highlighter
- 分册锚点：[fancy-text-highlighter](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#fancy-text-highlighter)

高亮色块按指定方向扫过或揭开文字，支持多种触发。像荧光笔按阅读方向抹过，而不是瞬间变色。

链接：

- [打开 Fancy Text Highlighter 演示](https://www.fancycomponents.dev/docs/components/text/text-highlighter)（Fancy Components）

### 提示词

```
【场景】引言或要点被荧光笔按从左到右（或指定方向）抹亮。
【触发】hover 或 in-view。
【运动】色块沿方向在 300–500ms 内覆盖目标词；可选择进入/离开方向。
【不要】整段同时闪成色块；高亮对比过低或刺眼。
```

## 色带扫过揭示 / Dia Text Reveal

<a id="magic-dia-text-reveal"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-24
- 子类：水平色带扫过后落成主题色
- 触发：in-view / repeat
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/dia-text-reveal
- 分册锚点：[magic-dia-text-reveal](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#magic-dia-text-reveal)

一条水平渐变色带扫过文字，带着光泽揭示，最后落成主题前景色。也可传入词组循环扫换。

链接：

- [打开 Magic UI Dia Text Reveal 演示](https://magicui.design/docs/components/dia-text-reveal)（Magic UI）

### 提示词

```
【场景】英雄标题进入时，一条彩色光带从左扫到右，扫过之处留下最终文字色。
【触发】进入视口一次；若传入多句，可在间隔后循环下一次扫换。不同长度用固定宽度避免布局跳动。
【运动】默认约 1.5s 扫完；结束后文字为实色。reduced-motion 时直接显示最终色。
【不要】一直彩虹闪烁不落定；多句切换时把版面撑来挤去。
```

## 蠕动滤镜字 / Squiggly Text

<a id="aceternity-squiggly-text"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-24
- 子类：SVG 湍流位移的蠕动字
- 触发：idle loop
- 技术栈：React / Motion / SVG filter
- 官方演示：https://ui.aceternity.com/components/squiggly-text
- 分册锚点：[aceternity-squiggly-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#aceternity-squiggly-text)

用 SVG 湍流与位移滤镜让文字轻微蠕动，像手绘或凝胶表面。可通过步数、频率和位移幅度调节，适合短标题。

链接：

- [打开 Aceternity Squiggly Text 演示](https://ui.aceternity.com/components/squiggly-text)（Aceternity UI）

### 提示词

```
【场景】趣味短标题或引用用轻微蠕动的手绘滤镜，而不是静态描边。
【触发】进入后循环；reduced-motion 时关闭滤镜。
【运动】用少量位移帧循环（约 5 步，每步约 80ms），位移 6–8px，频率低，保证字形仍可辨认。
【不要】在长正文或小字上使用；位移过大导致无法阅读。
```

## 画布曲线填字 / Canvas Text

<a id="aceternity-canvas-text"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-24
- 子类：裁切在字形里的彩色曲线
- 触发：idle loop
- 技术栈：React / Canvas
- 官方演示：https://ui.aceternity.com/components/canvas-text
- 分册锚点：[aceternity-canvas-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#aceternity-canvas-text)

在画布上绘制彩色曲线，再用文字形状裁切，使线条只出现在字形内部。适合作为装饰性英雄字，仍需提供可读的 DOM 文本。

链接：

- [打开 Aceternity Canvas Text 演示](https://ui.aceternity.com/components/canvas-text)（Aceternity UI）

### 提示词

```
【场景】品牌英雄字内部流过彩色曲线，字形轮廓保持清晰。
【触发】进入后缓慢循环。
【运动】曲线在字形内缓慢游走，不要冲出轮廓；动画慢而连续。页面上保留同内容的 DOM 文本给读屏。
【不要】只靠画布像素呈现文字；曲线过快或过密导致字形难认。
```

## 路径化字标 / Tech Text

<a id="rb-tech-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-24
- 子类：指针下字母变为虚线路径
- 触发：pointer proximity
- 技术栈：React / SVG
- 官方演示：https://www.reactbits.dev/text-animations/tech-text
- 分册锚点：[rb-tech-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-tech-text)

字标在指针靠近时，实体字母变成虚线矢量路径，离开后再填回。像工程图或电路稿被点亮，适合技术品牌字标。

链接：

- [打开 React Bits Tech Text 演示](https://www.reactbits.dev/text-animations/tech-text)（React Bits）

### 提示词

```
【场景】科技品牌字标：指针靠近时，字母从实心变成虚线路径，离开后再填回。
【触发】指针接近单字时转换，离开后恢复。
【运动】描边与填充在 200–350ms 内切换，路径保持原字形。保留读屏原文。
【不要】整句同时变成难以辨认的线稿；没有实心回填状态。
```

## 折纸展开字 / Fold Text

<a id="rb-fold-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-24
- 子类：纸张折痕式逐行展开
- 触发：in-view
- 技术栈：React / CSS 3D
- 官方演示：https://www.reactbits.dev/text-animations/fold-text
- 分册锚点：[rb-fold-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-fold-text)

标题按行像折纸一样从折痕打开铺平。强调纸面翻转，而不是简单的上下滑入。

链接：

- [打开 React Bits Fold Text 演示](https://www.reactbits.dev/text-animations/fold-text)（React Bits）

### 提示词

```
【场景】章节标题进入时，按行像折纸从折痕翻开铺平。
【触发】in-view 一次。
【运动】每行沿水平折痕做 3D 翻开，200–400ms，行间 stagger 80–120ms，结束时完全平整。
【不要】只做 translateY 滑入却叫折纸；透视过大导致文字变形难认。
```

## 描边填字 / Stroke Text

<a id="rb-stroke-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-24
- 子类：先描边再灌注填色
- 触发：in-view
- 技术栈：React / SVG
- 官方演示：https://www.reactbits.dev/text-animations/stroke-text
- 分册锚点：[rb-stroke-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-stroke-text)

空心字形先把自己的轮廓画出来，再把填色灌进去。适合标志性短标题或片头字，而不是长句。

链接：

- [打开 React Bits Stroke Text 演示](https://www.reactbits.dev/text-animations/stroke-text)（React Bits）

### 提示词

```
【场景】片头或品牌短标题：先画出轮廓，再把填色灌满。
【触发】in-view 一次。
【运动】描边 600–900ms 画完，随后 200–400ms 填充；整句不超过约 1.4s。保留可读文本。
【不要】在段落正文上逐笔描字；描边未完成就开始闪填充。
```

## 回声拖尾字 / Echo Text

<a id="rb-echo-text"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-24
- 子类：多重残影收束成一词
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/text-animations/echo-text
- 分册锚点：[rb-echo-text](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8#rb-echo-text)

标题先拖着几层错位残影进入，残影再收束成一个清晰的词。像回声叠在一起，而不是普通模糊变清。

链接：

- [打开 React Bits Echo Text 演示](https://www.reactbits.dev/text-animations/echo-text)（React Bits）

### 提示词

```
【场景】英雄短词进入时先出现两三层错位残影，再收成一个清晰标题。
【触发】in-view 一次。
【运动】残影沿运动方向错开，400–700ms 内并入正字并消失。正字始终是 DOM 文本。
【不要】残影一直闪个不停；层数多到字不可读。
```
