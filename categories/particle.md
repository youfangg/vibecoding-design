# 粒子与流体

本类共 20 条，来自分册「[粒子、流体与光标](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9)」。在 `data/cases.json` 中对应 `category` 为 `particle`。复制下方提示词即可用于 AI Coding。

## 目录

- [黏性粘滞菜单 / Gooey Sticky Menu](#gooey-sticky-menu)
- [超球粒子 / Meta Balls](#rb-meta-balls)
- [流继线带 / Ribbons](#rb-ribbons)
- [激光流 / Laser Flow](#rb-laser-flow)
- [粒子场 / Particles](#rb-particles)
- [乙醚液体 / Liquid Ether](#rb-liquid-ether)
- [等离子体 / Plasma](#rb-plasma)
- [波波池 / Ballpit](#rb-ballpit)
- [磁流体 / Ferrofluid](#rb-ferrofluid)
- [鸟群系统 / Boids Ecosystem](#animata-boids)
- [梦境粒子 / Dreamy Particles](#dreamy-particles)
- [漂流拖尾 / A Drift](#codrops-adrift)
- [墨水背景 / Ink Background](#kokonut-ink)
- [焦散光珠 / Caustics Background](#kokonut-caustics)
- [玻璃雨滴 / Rain Glass Background](#kokonut-rain-glass)
- [彩带祝贺 / Confetti](#magic-confetti)
- [点击粒子 / Cool Mode](#magic-cool-mode)
- [点击视觉效果 / Click](#animate-click)
- [弹性网格 / Elastic Mesh](#rb-elastic-mesh)
- [字形矩阵 / Glyph Matrix](#magic-glyph-matrix)

## 黏性粘滞菜单 / Gooey Sticky Menu

<a id="gooey-sticky-menu"></a>

- 来源：X
- 作者：Codrops
- 日期：2026-11-13
- 子类：液态粘滞菜单
- 触发：scroll
- 技术栈：WebGL / GSAP
- 官方演示：https://tympanus.net/Demos/GooeyStickyMenu/
- 原始出处：https://x.com/codrops/status/2121227055073230916
- 分册锚点：[gooey-sticky-menu](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#gooey-sticky-menu)

一条红色果冻质感的液态菜单在滚动时贴在它跨越的图片与字母上，拉出会拉伸、收紧再弹断的粘性丝线。官方演示还提供果冻、蜂蜜、芦荔与焦糖等材质变体。

链接：

- [查看 Codrops 的 X 原帖](https://x.com/codrops/status/2121227055073230916)（X，2026-11-13）
- [打开 Gooey Sticky Menu 官方演示](https://tympanus.net/Demos/GooeyStickyMenu/)（Codrops Demo）

### 提示词

```
【场景】作品集或编辑站：一条液态竖向菜单在滚动时贴在它跨越的图与大号字母上。
【触发】滚动驱动；菜单与页面轮廓取交集。
【运动】本体如果冻/蜂蜜，贴上时拉出粘性丝线，超过阈值后缩颈、弹断并弹回。可切换粘度。
【不要】全屏粘液当导航；忽略 reduced-motion。菜单文字保留可读 DOM。
```

## 超球粒子 / Meta Balls

<a id="rb-meta-balls"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：融合超球
- 触发：idle / pointer
- 技术栈：React / WebGL 或 Canvas
- 官方演示：https://www.reactbits.dev/animations/meta-balls
- 分册锚点：[rb-meta-balls](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-meta-balls)

多个超球在画布上渐近、融合再拉丝分开，像流体贴一样。适合品牌首屏或背景装饰，但不要盖掉正文。

链接：

- [打开 React Bits Meta Balls 演示](https://www.reactbits.dev/animations/meta-balls)（React Bits）

### 提示词

```
【场景】品牌首屏背景：几颗超球缓慢渐近并融合。
【触发】空闲游动；光标可轻微吸引。
【运动】贴近时拉丝融合，拉远时缩颈分开；运动慢而重。正文保留在 DOM。
【不要】超球盖掉文字；弱设备改为静态渐变。
```

## 流继线带 / Ribbons

<a id="rb-ribbons"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：高光丝带
- 触发：idle / pointer
- 技术栈：React / WebGL 或 Canvas
- 官方演示：https://www.reactbits.dev/animations/ribbons
- 分册锚点：[rb-ribbons](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-ribbons)

一条或多条带状线条在空闲或光标影响下缓慢流动，像继带或光带。适合时尚、音乐或品牌花续背景。

链接：

- [打开 React Bits Ribbons 演示](https://www.reactbits.dev/animations/ribbons)（React Bits）

### 提示词

```
【场景】音乐或时尚首屏：几条光泽线带缓慢流过。
【触发】空闲流动；光标可轻微掀动。
【运动】带状起伏慢，不要抖动；不要穿过正文。
【不要】把线带当成主信息层。
```

## 激光流 / Laser Flow

<a id="rb-laser-flow"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：辅向激光流
- 触发：idle / pointer
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/animations/laser-flow
- 分册锚点：[rb-laser-flow](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-laser-flow)

一道或几道尖细的发光辅向流线在画布上走动，带点状尾迹。适合科技、音乐可视化或高能产品首屏。

链接：

- [打开 React Bits Laser Flow 演示](https://www.reactbits.dev/animations/laser-flow)（React Bits）

### 提示词

```
【场景】科技产品首屏：几道发光辅向流线空闲走动。
【触发】循环播放；可被光标轻微吸引。
【运动】线条细、尾迹短；势头要稳。正文保留在 DOM。
【不要】光束过亮打在文字上。
```

## 粒子场 / Particles

<a id="rb-particles"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：可交互粒子背景
- 触发：pointer / idle
- 技术栈：React / Canvas 或 WebGL
- 官方演示：https://www.reactbits.dev/backgrounds/particles
- 分册锚点：[rb-particles](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-particles)

一片可交互的粒子场，可随光标轻微排斥或连线。这是粒子背景的基础范式，要克制数量与对比度，不要让它抢戏。

链接：

- [打开 React Bits Particles 演示](https://www.reactbits.dev/backgrounds/particles)（React Bits）

### 提示词

```
【场景】产品首屏淡色背景：稀疏粒子缓慢漂浮，光标附近轻微连线。
【触发】空闲漂浮；光标在一定半径内吸引。
【运动】粒子少而稳；移动端降为静态或更少。
【不要】千万粒子加满幏连线；忽略 reduced-motion。
```

## 乙醚液体 / Liquid Ether

<a id="rb-liquid-ether"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：流体色场背景
- 触发：idle / pointer
- 技术栈：React / WebGL shader
- 官方演示：https://www.reactbits.dev/backgrounds/liquid-ether
- 分册锚点：[rb-liquid-ether](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-liquid-ether)

一片像乙酲或油墨的流体色场，随时间或光标缓慢扰动。适合艺术、音乐或品牌花续背景。

链接：

- [打开 React Bits Liquid Ether 演示](https://www.reactbits.dev/backgrounds/liquid-ether)（React Bits）

### 提示词

```
【场景】音乐或艺术站首屏：淡色流体色场缓慢流动。
【触发】空闲演化；光标可在局部搅出漩涡。
【运动】流动慢，对比不要太强；正文要可读。
【不要】高频闪动或过饱和色彩。
```

## 等离子体 / Plasma

<a id="rb-plasma"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：等离子色场
- 触发：idle
- 技术栈：React / WebGL shader
- 官方演示：https://www.reactbits.dev/backgrounds/plasma
- 分册锚点：[rb-plasma](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-plasma)

经典等离子色场背景：颜色岛与波峰缓慢漂移。要控制饱和与对比，否则容易变成纯装饰。

链接：

- [打开 React Bits Plasma 演示](https://www.reactbits.dev/backgrounds/plasma)（React Bits）

### 提示词

```
【场景】深色科技或音乐首屏的低对比等离子背景。
【触发】缓慢自发演化。
【运动】波峰移动要慢；与正文要有足够对比。
【不要】高饱和闪烁；忽略 reduced-motion。
```

## 波波池 / Ballpit

<a id="rb-ballpit"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：物理球体池
- 触发：pointer / physics
- 技术栈：React / 3D 或 2D 物理
- 官方演示：https://www.reactbits.dev/backgrounds/ballpit
- 分册锚点：[rb-ballpit](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-ballpit)

一块可被光标或重力扰动的彩球池。适合儿童、娱乐或品牌彩蛋页，是少数把粒子当成可玩的物理系的范式。

链接：

- [打开 React Bits Ballpit 演示](https://www.reactbits.dev/backgrounds/ballpit)（React Bits）

### 提示词

```
【场景】品牌游戏或娱乐页：一池彩球可被光标拨动。
【触发】光标或触控推挤；松手后重力回落。
【运动】碰撞与轮廓要贴；能量要耗尽，不要永远乱轧。
【不要】在正文阅读区内强制物理玩具。
```

## 磁流体 / Ferrofluid

<a id="rb-ferrofluid"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：磁性流体
- 触发：pointer / idle
- 技术栈：React / WebGL shader
- 官方演示：https://www.reactbits.dev/backgrounds/ferrofluid
- 分册锚点：[rb-ferrofluid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-ferrofluid)

像磁流体一样的黑色或金属质感液面，可被力场或光标吸起尖刺。适合科技、音乐或材质感强的品牌背景。

链接：

- [打开 React Bits Ferrofluid 演示](https://www.reactbits.dev/backgrounds/ferrofluid)（React Bits）

### 提示词

```
【场景】科技或音乐首屏：一团磁流体随光标拉出尖刺。
【触发】光标近似磁极；离开后液面平恢。
【运动】尖刺起落要有重量感，不要瞬间贴光标。
【不要】把正文压在液面上不可读。
```

## 鸟群系统 / Boids Ecosystem

<a id="animata-boids"></a>

- 来源：AI Coding
- 作者：Animata
- 日期：采集于 2026-11-23
- 子类：群体仿真
- 触发：idle / pointer avoid
- 技术栈：React / Canvas
- 官方演示：https://animata.design/docs/background/boids-ecosystem
- 分册锚点：[animata-boids](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#animata-boids)

一群按 Boids 规则飞行的智能体：齐聚、分离与对齐。比随机粒子更有群体意志，适合科技、自然或生慈题材的背景。

链接：

- [打开 Animata Boids Ecosystem 演示](https://animata.design/docs/background/boids-ecosystem)（Animata）

### 提示词

```
【场景】科技或自然题材首屏：一小群体缓慢飞过。
【触发】空闲飞行；光标可作为排斥点。
【运动】遵守齐聚/分离/对齐；数量要克制，运动要慢。
【不要】群体穿过正文或数量过多掉帧。
```

## 梦境粒子 / Dreamy Particles

<a id="dreamy-particles"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2024-12-19
- 子类：GPGPU 互动粒子
- 触发：pointer
- 技术栈：Three.js / GPGPU / shader
- 官方演示：https://tympanus.net/Tutorials/DreamyParticles/
- 原始出处：https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/
- 分册锚点：[dreamy-particles](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#dreamy-particles)

Codrops 教程里的梦境粒子：用 Three.js 与 GPGPU 让大量粒子在 GPU 上运算，可随光标响应，并带后处理光晕。适合要高密度、仍保持流畅的花续花绪背景。

链接：

- [打开 Dreamy Particles 演示](https://tympanus.net/Tutorials/DreamyParticles/)（Codrops Demo）
- [阅读 GPGPU 粒子教程](https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/)（Codrops，2024-12-19）

### 提示词

```
【场景】品牌或音乐花续页：一团发光粒子随光标涌动。
【触发】光标或触控推挤；空闲时缓慢流动。
【运动】粒子运算走 GPU；响应要贴但不要抖；可加轻微光晕。
【不要】在 CPU 里逐颗更新成千上万粒子；忽略 reduced-motion。
```

## 漂流拖尾 / A Drift

<a id="codrops-adrift"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：流动与拖尾
- 触发：pointer / scroll
- 技术栈：Canvas / WebGL
- 官方演示：https://tympanus.net/Demos/ADrift/
- 分册锚点：[codrops-adrift](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#codrops-adrift)

Codrops 演示 A Drift：画面里的形象或质点像被水流拖着走，带浪涌或歪曲拖尾。适合要把光标或滚动编成流体感的编辑页。

链接：

- [打开 A Drift 演示](https://tympanus.net/Demos/ADrift/)（Codrops Demo）

### 提示词

```
【场景】编辑或影集首屏：形象与拖尾像被水流搬着走。
【触发】光标或滚动驱动乱流。
【运动】拖尾有惯性，停下后涌流逐渐平恢。
【不要】让歪曲影响正文可读性。
```

## 墨水背景 / Ink Background

<a id="kokonut-ink"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：墨水渲染
- 触发：idle / pointer
- 技术栈：React / Canvas 或 WebGL
- 官方演示：https://kokonutui.com/docs/backgrounds/ink-background
- 分册锚点：[kokonut-ink](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#kokonut-ink)

墨水在画布里慢慢渲开或渐渲的背景。适合出版、文化或东亚审美题材的品牌首屏。

链接：

- [打开 Kokonut Ink Background 演示](https://kokonutui.com/docs/backgrounds/ink-background)（Kokonut UI）

### 提示词

```
【场景】文化或出版品牌首屏：墨水缓慢在纸面上渲开。
【触发】空闲渲染；光标可引出新的墨渲。
【运动】渲开要慢、带羽化边缘；不要盖掉标题。
【不要】墨点爆炸式铺开。
```

## 焦散光珠 / Caustics Background

<a id="kokonut-caustics"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：水面焦散光
- 触发：idle
- 技术栈：React / WebGL 或 Canvas
- 官方演示：https://kokonutui.com/docs/backgrounds/caustics-background
- 分册锚点：[kokonut-caustics](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#kokonut-caustics)

模拟水面焦散光珠在底部摆动的背景。适合浴品、饮品或清凉题材的品牌首屏。

链接：

- [打开 Kokonut Caustics Background 演示](https://kokonutui.com/docs/backgrounds/caustics-background)（Kokonut UI）

### 提示词

```
【场景】浴品或饮品品牌首屏：底部有缓慢摆动的水面光珠。
【触发】空闲循环。
【运动】光珠缓慢流动，强度低，不争夺产品图。
【不要】高频闪烁；忽略 reduced-motion。
```

## 玻璃雨滴 / Rain Glass Background

<a id="kokonut-rain-glass"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：玻璃上的雨滴
- 触发：idle
- 技术栈：React / Canvas 或 WebGL
- 官方演示：https://kokonutui.com/docs/backgrounds/rain-glass-background
- 分册锚点：[kokonut-rain-glass](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#kokonut-rain-glass)

玻璃上缓慢滑落的雨滴背景，带折射感。适合天气、窗户或季节性产品页。

链接：

- [打开 Kokonut Rain Glass 演示](https://kokonutui.com/docs/backgrounds/rain-glass-background)（Kokonut UI）

### 提示词

```
【场景】季节性或天气题材首屏：玻璃上滑落雨滴。
【触发】空闲循环。
【运动】滴落速度不一，有聚合与拆分；不要挡住正文。
【不要】滴数过多导致屏輑或掉帧。
```

## 彩带祝贺 / Confetti

<a id="magic-confetti"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：成功态彩带
- 触发：success event
- 技术栈：React / Canvas
- 官方演示：https://magicui.design/docs/components/confetti
- 分册锚点：[magic-confetti](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#magic-confetti)

完成付款、打卡或达成成就时爆出一阵彩带。这是庆祝性微反馈里常见的粒子手法，关键是只播一次、不要过长。

链接：

- [打开 Magic UI Confetti 演示](https://magicui.design/docs/components/confetti)（Magic UI）

### 提示词

```
【场景】订单成功页或打卡成功：爆出一阵彩带。
【触发】成功状态达成时播一次。
【运动】爆发 0.8–1.4s，然后掉落清场；数量克制。
【不要】循环爆炸；忽略 reduced-motion（改为静态成功文案）。
```

## 点击粒子 / Cool Mode

<a id="magic-cool-mode"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：点击爆出粒子
- 触发：click
- 技术栈：React / Canvas
- 官方演示：https://magicui.design/docs/components/cool-mode
- 分册锚点：[magic-cool-mode](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#magic-cool-mode)

点击时在落点爆出一小播粒子。比 Confetti 更轻，适合按钮、点赞或资源位的瞬间反馈。

链接：

- [打开 Magic UI Cool Mode 演示](https://magicui.design/docs/components/cool-mode)（Magic UI）

### 提示词

```
【场景】点赞或主要按钮：点击时在按下处爆出一小播粒子。
【触发】点击一次播一次。
【运动】粒子少、弹射 400–700ms 后消失。
【不要】每次点击都开成彩带礼花。
```

## 点击视觉效果 / Click

<a id="animate-click"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：落点波纹与粒子
- 触发：click
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/click
- 分册锚点：[animate-click](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#animate-click)

在光标点击处播一段视觉效果：环、波纹、十字线、爆裂或粒子。把「点到了」变成可见的瞬间反馈。

链接：

- [打开 Animate UI Click 演示](https://animate-ui.com/docs/primitives/animate-ui/click)（Animate UI）

### 提示词

```
【场景】工具面板或画布：点击处出现短暂的环或粒子。
【触发】点击落点。
【运动】效果 300–550ms 内消失；同屏限制实例数。
【不要】效果停留或遗留 DOM 节点。
```

## 弹性网格 / Elastic Mesh

<a id="rb-elastic-mesh"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：可揠的弹性网
- 触发：pointer
- 技术栈：React / Canvas 或 WebGL
- 官方演示：https://www.reactbits.dev/animations/elastic-mesh
- 分册锚点：[rb-elastic-mesh](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#rb-elastic-mesh)

一张弹性网格，光标揠起时会拉出阴影并回弹。它把背景变成可触摸的材质，适合科技或实验室感的品牌页。

链接：

- [打开 React Bits Elastic Mesh 演示](https://www.reactbits.dev/animations/elastic-mesh)（React Bits）

### 提示词

```
【场景】科技品牌首屏：光标移过时网格被轻轻揠起。
【触发】光标近似受力点；离开后 spring 回弹。
【运动】受力有半径衰减；回弹要收敛，不要长期抖动。
【不要】网格穿透正文。
```

## 字形矩阵 / Glyph Matrix

<a id="magic-glyph-matrix"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-24
- 子类：画布上缓慢突变的字符格
- 触发：idle loop
- 技术栈：React / Canvas
- 官方演示：https://magicui.design/docs/components/glyph-matrix
- 分册锚点：[magic-glyph-matrix](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9#magic-glyph-matrix)

画布上的字符网格缓慢随机突变，颜色跟随主题，底部可做渐隐。像低密度的终端雨或装置背景，而不是具体标题动效。

链接：

- [打开 Magic UI Glyph Matrix 演示](https://magicui.design/docs/components/glyph-matrix)（Magic UI）

### 提示词

```
【场景】技术或装置页的背景是一片字符网格，格子以很低的概率慢慢换成其他符号。
【触发】进入后以固定节拍循环（约 90ms 一拍，突变率约 4%）。reduced-motion 时显示静止一帧。
【运动】突变要稀、要慢，底部可渐隐。颜色由页面主题驱动。
【不要】密度高到喧宾夺主；把这类背景当作正文。
```
