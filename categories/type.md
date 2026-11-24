# 文字动效

本类共 32 条，来自分册「[文字动效与进入离场](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8)」。在 `data/cases.json` 中对应 `category` 为 `type`。复制下方提示词即可用于 AI Coding。

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
