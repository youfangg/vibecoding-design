# 光影与材质

本类共 34 条，来自分册「[三维与光影材质](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2)」。在 `data/cases.json` 中对应 `category` 为 `material`。复制下方提示词即可用于 AI Coding。

- [抖动揭示幕 / Dither Veil](#rb-dither-veil)
- [电流边框 / Electric Border](#rb-electric-border)
- [闪电标识 / Electric Logo](#rb-electric-logo)
- [液态金属涂覆 / Metallic Paint](#rb-metallic-paint)
- [灰度回彩网格 / Chroma Grid](#rb-chroma-grid)
- [溶蚀卡片 / Decay Card](#rb-decay-card)
- [流体玻璃折射 / Fluid Glass](#rb-fluid-glass)
- [镜面身份卡 / Reflective Card](#rb-reflective-card)
- [油漆旋涡背景 / Balatro](#rb-balatro)
- [沿边走的光梁 / Border Beam](#magic-border-beam)
- [像素画布畸变 / Pixelated Canvas](#aceternity-pixelated-canvas)
- [自适应发光边 / Glowing Effect](#aceternity-glowing-effect)
## 目录

- [时装 Lookbook 悬停覆盖 / Lookbook Hover Effects](#lookbook-hover)
- [HAOQI.DESIGN 玻璃与双栈同步](#haoqi)
- [丝绸背景 / Silk](#rb-silk)
- [极光 / Aurora](#rb-aurora)
- [超空间 / Hyperspeed](#rb-hyperspeed)
- [液态玻璃 / Liquid Glass](#aceternity-liquid-glass)
- [聚光灯 / Spotlight](#aceternity-spotlight)
- [全息卡 / Holo Card](#rb-holo-card)
- [碰撞光束 / Background Beams With Collision](#beams-collision)
- [涡流背景 / Vortex Background](#aceternity-vortex)
- [Gemini 式光效 / Google Gemini Effect](#gemini-effect)
- [SVG 遮罩揭示 / SVG Mask Effect](#svg-mask-effect)
- [加密视觉卡 / Evervault Card](#evervault-card)
- [长槽玻璃 / Fluted Glass](#cult-fluted-glass)
- [变形表面 / Morph Surface](#cult-morph-surface)
- [拜耳抖动 / Bayer Dithering](#bayer-dithering)
- [PS1 抖动着色器 / PS1 Jitter Shader](#ps1-jitter-shader)
- [深度扫描 / Scan Effect](#scan-effect)
- [GSAP 驱动着色器 / Shader Animation GSAP](#shader-animation-gsap)
- [网格到全幅预览 / Grid To Full Preview](#grid-to-full-preview)
- [SDF 镜头模糊 / SDF Lens Blur](#sdf-lens-blur)
- [色差位移图 / Chromatic Image](#aceternity-chromatic-image)

## 时装 Lookbook 悬停覆盖 / Lookbook Hover Effects

<a id="lookbook-hover"></a>

- 来源：X
- 作者：Codrops
- 日期：2026-10-31
- 子类：液态玻璃与材质覆盖
- 触发：hover
- 技术栈：WebGL / GSAP
- 官方演示：https://tympanus.net/Demos/LookbookHoverEffects/
- 原始出处：https://x.com/codrops/status/2116466349337706878
- 分册锚点：[lookbook-hover](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#lookbook-hover)

时装看板网格：悬停成衣照时，商品信息卡以熔化、剥落、液态玻璃或频道闪烁等材质感覆盖整张照片，而不是简单 fade。

链接：

- [查看 Codrops 的 X 原帖](https://x.com/codrops/status/2116466349337706878)（X，2026-10-31）
- [打开 Lookbook Hover Effects 演示](https://tympanus.net/Demos/LookbookHoverEffects/)（Codrops Demo）

### 提示词

```
【场景】时装电商看板：悬停后出现款名与价格，以材质感覆盖整张照。
【触发】hover；触屏改为点击。
【运动】不要 fade，而用熔化、剥落、液态玻璃或频道闪烁，500–700ms。同一时刻只展开一张。
【不要】所有卡用同一种淡入；在小屏强制 hover。
```

## HAOQI.DESIGN 玻璃与双栈同步

<a id="haoqi"></a>

- 来源：设计站点
- 作者：Haoqi Wen
- 日期：Codrops 拆解 2026-08-15
- 子类：DOM 与 WebGL 同步的玻璃折射
- 触发：scroll / pointer
- 技术栈：Next.js / Lenis / Motion / R3F / shader
- 官方演示：https://haoqi.design/
- 原始出处：https://tympanus.net/codrops/2026/08/15/inside-haoqi-design-letting-dom-and-webgl-share-a-retro-futurist-stage/
- 分册锚点：[haoqi](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#haoqi)

排版交给 DOM，玻璃模型与图像特效交给固定 WebGL 画布。关键是让 Lenis 与 R3F 共用同一帧滚动快照，避免画布落后一帧。

链接：

- [打开 HAOQI.DESIGN](https://haoqi.design/)（haoqi.design）
- [阅读 DOM 与 WebGL 同步拆解](https://tympanus.net/codrops/2026/08/15/inside-haoqi-design-letting-dom-and-webgl-share-a-retro-futurist-stage/)（Codrops，2026-08-15）

### 提示词

```
【场景】个人站：排版用 DOM，固定画布里是玻璃物体，两者必须跟同一个滚动。
【触发】滚动与指针。
【运动】由渲染循环驱动滚动库，当帧共享快照；玻璃随滚动移位，指针近时微倾。文字不要只画在画布里。
【不要】让画布和窗口滚动各跑一套循环。
```

## 丝绸背景 / Silk

<a id="rb-silk"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：丝绸光泽着色器
- 触发：idle
- 技术栈：React / WebGL shader
- 官方演示：https://www.reactbits.dev/backgrounds/silk
- 分册锚点：[rb-silk](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-silk)

一层缓慢流动的丝绸或织物光泽背景。适合时尚、美妆或高端品牌首屏，对比度要低。

链接：

- [打开 React Bits Silk 演示](https://www.reactbits.dev/backgrounds/silk)（React Bits）

### 提示词

```
【场景】时尚或美妆首屏：低对比丝绸光泽缓慢流动。
【触发】空闲演化。
【运动】流动慢，不抢标题。reduced-motion 时改为静态材质。
【不要】高对比闪烁。
```

## 极光 / Aurora

<a id="rb-aurora"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：极光色带背景
- 触发：idle
- 技术栈：React / WebGL shader
- 官方演示：https://www.reactbits.dev/backgrounds/aurora
- 分册锚点：[rb-aurora](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-aurora)

缓慢漂移的极光色带背景。适合品牌花絮或夜色产品页，饱和度要克制。

链接：

- [打开 React Bits Aurora 演示](https://www.reactbits.dev/backgrounds/aurora)（React Bits）

### 提示词

```
【场景】夜色或品牌首屏：极光色带缓慢漂移。
【触发】空闲循环。
【运动】移动慢，与正文保持对比。
【不要】高饱和频闪。
```

## 超空间 / Hyperspeed

<a id="rb-hyperspeed"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：超空间速度线
- 触发：idle
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/backgrounds/hyperspeed
- 分册锚点：[rb-hyperspeed](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-hyperspeed)

向前冲的速度线或隧道感背景。适合科技、汽车或速度相关的英雄区，注意不要过亮。

链接：

- [打开 React Bits Hyperspeed 演示](https://www.reactbits.dev/backgrounds/hyperspeed)（React Bits）

### 提示词

```
【场景】汽车或科技英雄区：向前冲的速度线。
【触发】空闲循环；可见时才渲染。
【运动】速度感要稳，不要频闪。正文对比要够。
【不要】做成眩晕隧道。
```

## 液态玻璃 / Liquid Glass

<a id="aceternity-liquid-glass"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：液态玻璃界面
- 触发：idle / pointer
- 技术栈：React / CSS 或 shader
- 官方演示：https://ui.aceternity.com/components/liquid-glass
- 分册锚点：[aceternity-liquid-glass](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-liquid-glass)

界面或卡片带液态玻璃折射与模糊。适合现代桌面风或品牌控件，但文字对比必须足够。

链接：

- [打开 Aceternity Liquid Glass 演示](https://ui.aceternity.com/components/liquid-glass)（Aceternity UI）

### 提示词

```
【场景】卡片或工具栏使用液态玻璃材质。
【触发】空闲微动；指针可轻微扰动。
【运动】折射弱，文字始终可读。
【不要】把正文衬在高扰动玻璃上。
```

## 聚光灯 / Spotlight

<a id="aceternity-spotlight"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：跟随光标的聚光
- 触发：pointer move
- 技术栈：React / CSS
- 官方演示：https://ui.aceternity.com/components/spotlight
- 分册锚点：[aceternity-spotlight](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-spotlight)

一道聚光灯跟随光标，照亮卡片或英雄区。适合深色界面里的局部强调。

链接：

- [打开 Aceternity Spotlight 演示](https://ui.aceternity.com/components/spotlight)（Aceternity UI）

### 提示词

```
【场景】深色英雄区或卡片：一道柔和聚光跟随光标。
【触发】pointermove，带滞后；触屏可改为静态光斑。
【运动】光斑柔、对比低，不要曝白文字。
【不要】强光扫过整页。
```

## 全息卡 / Holo Card

<a id="rb-holo-card"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-23
- 子类：全息彩虹卡
- 触发：pointer move
- 技术栈：React / CSS 或 shader
- 官方演示：https://www.reactbits.dev/components/holo-card
- 分册锚点：[rb-holo-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-holo-card)

卡片随光标呈现全息彩虹或棱镜反光，像收藏卡。适合会员卡、票券或限定商品。

链接：

- [打开 React Bits Holo Card 演示](https://www.reactbits.dev/components/holo-card)（React Bits）

### 提示词

```
【场景】会员卡或限定商品卡：随光标出现全息彩虹反光。
【触发】桌面 pointermove。
【运动】反光跟倾斜走，不要过饱和。文字要可读。
【不要】触屏强制依赖悬停。
```

## 碰撞光束 / Background Beams With Collision

<a id="beams-collision"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：会碰撞的背景光束
- 触发：idle loop
- 技术栈：React / Canvas 或 SVG
- 官方演示：https://ui.aceternity.com/components/background-beams-with-collision
- 分册锚点：[beams-collision](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#beams-collision)

背景里的光束会相遇、碰撞或爆开。比单向光束更有事件感，适合科技英雄区。

链接：

- [打开 Aceternity Background Beams With Collision 演示](https://ui.aceternity.com/components/background-beams-with-collision)（Aceternity UI）

### 提示词

```
【场景】科技英雄区：背景光束会相遇并轻爆。
【触发】空闲循环。
【运动】事件稀疏，不要连续爆炸；对比要低。
【不要】光束穿过正文中央。
```

## 涡流背景 / Vortex Background

<a id="aceternity-vortex"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：涡流着色器
- 触发：idle
- 技术栈：React / WebGL 或 Canvas
- 官方演示：https://ui.aceternity.com/components/vortex
- 分册锚点：[aceternity-vortex](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-vortex)

一层缓慢旋转或吸入的涡流背景。适合深色科技或宇宙感首屏。

链接：

- [打开 Aceternity Vortex 演示](https://ui.aceternity.com/components/vortex)（Aceternity UI）

### 提示词

```
【场景】深色科技首屏：缓慢涡流背景。
【触发】空闲循环。
【运动】旋转慢，中心不要过亮。
【不要】快速旋转导致眩晕。
```

## Gemini 式光效 / Google Gemini Effect

<a id="gemini-effect"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：滚动驱动的光场
- 触发：scroll
- 技术栈：React / shader 或 Canvas
- 官方演示：https://ui.aceternity.com/components/google-gemini-effect
- 分册锚点：[gemini-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#gemini-effect)

一种随滚动展开的彩色光场，常被用于 AI 产品英雄区。要把光场当氛围，而不是唯一内容。

链接：

- [打开 Aceternity Google Gemini Effect 演示](https://ui.aceternity.com/components/google-gemini-effect)（Aceternity UI）

### 提示词

```
【场景】AI 产品英雄区：彩色光场随滚动展开。
【触发】滚动进度。
【运动】展开要顺，颜色克制；标题保持对比。
【不要】光场盖住主要文案。
```

## SVG 遮罩揭示 / SVG Mask Effect

<a id="svg-mask-effect"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：遮罩擦除揭示
- 触发：pointer / scroll
- 技术栈：React / SVG mask
- 官方演示：https://ui.aceternity.com/components/svg-mask-effect
- 分册锚点：[svg-mask-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#svg-mask-effect)

用 SVG 遮罩把下层图像或文字揭示出来，常跟随光标或滚动。适合编辑封面或交互式海报。

链接：

- [打开 Aceternity SVG Mask Effect 演示](https://ui.aceternity.com/components/svg-mask-effect)（Aceternity UI）

### 提示词

```
【场景】编辑封面：光标移过处揭示下层图像。
【触发】指针或滚动。
【运动】遮罩边缘要柔，揭示范围可控。
【不要】留下挡住点击的透明层。
```

## 加密视觉卡 / Evervault Card

<a id="evervault-card"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：加密网格与光标扰动
- 触发：pointer move
- 技术栈：React / Canvas
- 官方演示：https://ui.aceternity.com/components/evervault-card
- 分册锚点：[evervault-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#evervault-card)

卡片上有加密字符或网格，光标靠近时被扰动或解密出一块区域。适合安全、隐私或加密产品。

链接：

- [打开 Aceternity Evervault Card 演示](https://ui.aceternity.com/components/evervault-card)（Aceternity UI）

### 提示词

```
【场景】安全产品卡：网格或乱码在光标附近被扰动或局部解密。
【触发】pointermove。
【运动】扰动半径有限，离开后恢复。关键信息仍要可读。
【不要】整卡都不可读。
```

## 长槽玻璃 / Fluted Glass

<a id="cult-fluted-glass"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-23
- 子类：长槽玻璃折射
- 触发：idle / pointer
- 技术栈：React / CSS 或 shader
- 官方演示：https://www.cult-ui.com/docs/components/fluted-glass
- 分册锚点：[cult-fluted-glass](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#cult-fluted-glass)

模拟长槽或压花玻璃的折射条纹。适合把照片或界面衬在一层有触感的玻璃后。

链接：

- [打开 Cult UI Fluted Glass 演示](https://www.cult-ui.com/docs/components/fluted-glass)（Cult UI）

### 提示词

```
【场景】品牌或产品图衬在长槽玻璃后。
【触发】空闲或轻微随光标。
【运动】条纹折射弱而稳；重要文字不要放在玻璃后。
【不要】折射强到主体不可辨。
```

## 变形表面 / Morph Surface

<a id="cult-morph-surface"></a>

- 来源：AI Coding
- 作者：Cult UI
- 日期：采集于 2026-11-23
- 子类：表面形态变化
- 触发：state change / hover
- 技术栈：React
- 官方演示：https://www.cult-ui.com/docs/components/morph-surface
- 分册锚点：[cult-morph-surface](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#cult-morph-surface)

一块表面在状态之间变形，像材质本身在改形状。适合卡片、容器或背景板的状态切换。

链接：

- [打开 Cult UI Morph Surface 演示](https://www.cult-ui.com/docs/components/morph-surface)（Cult UI）

### 提示词

```
【场景】容器或卡片在两个状态之间变形表面。
【触发】悬停或状态切换。
【运动】形态插值 400–700ms，边缘要连续。
【不要】突然换成另一块形状。
```

## 拜耳抖动 / Bayer Dithering

<a id="bayer-dithering"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：采集于 2026-11-23
- 子类：抖动网点材质
- 触发：idle / hover
- 技术栈：WebGL / shader
- 官方演示：https://tympanus.net/Tutorials/BayerDithering/
- 分册锚点：[bayer-dithering](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#bayer-dithering)

用拜耳抖动把图像或场景处理成网点印刷感。适合复古、印刷或游戏审美。

链接：

- [打开 Bayer Dithering 演示](https://tympanus.net/Tutorials/BayerDithering/)（Codrops Demo）

### 提示词

```
【场景】复古或印刷感海报：图像以拜耳抖动网点呈现。
【触发】空闲或悬停加重/减轻抖动。
【运动】网点粒度稳定，不要闪。
【不要】细字也强制抖动到不可读。
```

## PS1 抖动着色器 / PS1 Jitter Shader

<a id="ps1-jitter-shader"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2024-09-03
- 子类：复古主机顶点抖动
- 触发：idle / pointer
- 技术栈：React Three Fiber / shader
- 官方演示：https://tympanus.net/Tutorials/ps1-jitter-shader/
- 原始出处：https://tympanus.net/codrops/2024/09/03/how-to-create-a-ps1-inspired-jitter-shader-with-react-three-fiber/
- 分册锚点：[ps1-jitter-shader](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#ps1-jitter-shader)

用 React Three Fiber 做的 PS1 风格顶点抖动与仿古着色。适合复古游戏或怀旧产品页。

链接：

- [打开 PS1-inspired Jitter Shader 演示](https://tympanus.net/Tutorials/ps1-jitter-shader/)（Codrops Demo）
- [阅读 PS1 着色器教程](https://tympanus.net/codrops/2024/09/03/how-to-create-a-ps1-inspired-jitter-shader-with-react-three-fiber/)（Codrops，2024-09-03）

### 提示词

```
【场景】复古游戏或怀旧产品页：三维模型带 PS1 式顶点抖动。
【触发】空闲或轻微交互。
【运动】抖动粒度稳定，像低精度主机，不要随机乱抖。
【不要】重要 UI 文字也做顶点抖动。
```

## 深度扫描 / Scan Effect

<a id="scan-effect"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-03-31
- 子类：WebGPU 深度图扫描
- 触发：scroll / pointer / auto
- 技术栈：WebGPU / depth map
- 官方演示：https://tympanus.net/Development/ScanEffect/
- 原始出处：https://tympanus.net/codrops/2025/03/31/webgpu-scanning-effect-with-depth-maps/
- 分册锚点：[scan-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#scan-effect)

用深度图做扫描线揭示，像一道扫描光剖开三维表面。适合产品剖视或科技演示。

链接：

- [打开 Scanning effect 演示](https://tympanus.net/Development/ScanEffect/)（Codrops Demo）
- [阅读 WebGPU 扫描教程](https://tympanus.net/codrops/2025/03/31/webgpu-scanning-effect-with-depth-maps/)（Codrops，2025-03-31）

### 提示词

```
【场景】产品剖视：一道扫描光沿表面揭示深度。
【触发】滚动、指针或自动循环。
【运动】扫描速度稳，扫描带有清晰的前缘。无 WebGPU 时提供静态回退。
【不要】扫描过快看不清结构。
```

## GSAP 驱动着色器 / Shader Animation GSAP

<a id="shader-animation-gsap"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2025-10-08
- 子类：滚动与点击驱动的着色器
- 触发：click / scroll / drag
- 技术栈：WebGL / GSAP
- 官方演示：https://tympanus.net/Tutorials/ShaderAnimationGSAP/
- 原始出处：https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/
- 分册锚点：[shader-animation-gsap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#shader-animation-gsap)

用 GSAP 去动画 WebGL 着色器：涟漪、揭示与动态模糊。把时间轴和 shader uniform 连在一起，是可复用的实现范式。

链接：

- [打开 Animating Shaders with GSAP 演示](https://tympanus.net/Tutorials/ShaderAnimationGSAP/)（Codrops Demo）
- [阅读着色器与 GSAP 教程](https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/)（Codrops，2025-10-08）

### 提示词

```
【场景】图像网格：点击出涟漪，滚动或拖拽时做揭示与动态模糊。
【触发】点击、滚动、拖拽分别驱动不同 uniform。
【运动】时间轴与 shader 参数同步，过渡要连续。
【不要】把 shader 动画和滚动各跑一套时钟。
```

## 网格到全幅预览 / Grid To Full Preview

<a id="grid-to-full-preview"></a>

- 来源：设计站点
- 作者：Gwen Bogaert / Codrops
- 日期：2025-05-27
- 子类：clip-path 拼图式预览
- 触发：hover
- 技术栈：GSAP / clip-path
- 官方演示：https://tympanus.net/Tutorials/GridToFullPreview/
- 原始出处：https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/
- 分册锚点：[grid-to-full-preview](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#grid-to-full-preview)

商品网格悬停时，周围卡片像拼图一样让开，用 clip-path 把一张预览图揭示到全幅。这是网格到预览的材质/裁切手法。

链接：

- [打开 GridToFullPreview 演示](https://tympanus.net/Tutorials/GridToFullPreview/)（Codrops Demo）
- [阅读 clip-path 预览教程](https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/)（Codrops，2025-05-27）

### 提示词

```
【场景】商品网格悬停时，周围卡向内让开，预览图以 clip-path 揭示。
【触发】hover；触屏改为点击。快速移入邻格时要防抖。
【运动】clip-path 与卡片位移同步，约 500–700ms。提供键盘与 reduced-motion 回退。
【不要】只靠 hover、没有焦点路径。
```

## SDF 镜头模糊 / SDF Lens Blur

<a id="sdf-lens-blur"></a>

- 来源：设计站点
- 作者：Codrops
- 日期：2024-06-12
- 子类：形状镜头模糊
- 触发：pointer / scroll
- 技术栈：WebGL / SDF
- 官方演示：https://tympanus.net/Tutorials/SDFLensBlur/
- 原始出处：https://tympanus.net/codrops/2024/06/12/shape-lens-blur-effect-with-sdfs-and-webgl/
- 分册锚点：[sdf-lens-blur](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#sdf-lens-blur)

用 SDF 与 WebGL 做形状镜头模糊：模糊区域由形状场定义，而不是简单高斯。适合焦点转移或材质揭示。

链接：

- [打开 SDF Lens Blur 演示](https://tympanus.net/Tutorials/SDFLensBlur/)（Codrops Demo）
- [阅读 SDF 镜头模糊教程](https://tympanus.net/codrops/2024/06/12/shape-lens-blur-effect-with-sdfs-and-webgl/)（Codrops，2024-06-12）

### 提示词

```
【场景】作品或产品图：焦点区域清晰，周围按形状场模糊。
【触发】光标或滚动移动焦点。
【运动】模糊过渡连续，焦点形状可读。
【不要】整图过度模糊到主体不清。
```

## 色差位移图 / Chromatic Image

<a id="aceternity-chromatic-image"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-24
- 子类：指针驱动的色差、位移与倾斜
- 触发：pointer move
- 技术栈：React / CSS 或 WebGL
- 官方演示：https://ui.aceternity.com/components/chromatic-image
- 分册锚点：[aceternity-chromatic-image](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-chromatic-image)

图像随指针产生色彩分离、位移、倾斜或轻微缩放，像镜头色差。适合英雄图或作品特写，幅度要克制。

链接：

- [打开 Aceternity Chromatic Image 演示](https://ui.aceternity.com/components/chromatic-image)（Aceternity UI）

### 提示词

```
【场景】英雄图或作品图随指针出现轻微 RGB 分离、位移和倾斜。
【触发】指针在图上移动；离开后 200–300ms 回正。触屏可改为跟随触摸或关闭。
【运动】色差与倾斜跟手但有短滞后，幅度小到主体仍可辨认。
【不要】分离过大导致图像破碎；对所有配图都启用。
```

## 抖动揭示幕 / Dither Veil

<a id="rb-dither-veil"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：光标把一位抖动图烧回彩色
- 触发：pointer move / idle
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/animations/dither-veil
- 分册锚点：[rb-dither-veil](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-dither-veil)

照片先呈现为一位抖动的黑白网点，光标经过处像被烧掉一层纱，露出全彩，离开后又逐格织回去。

链接：

- [打开 React Bits Dither Veil 演示](https://www.reactbits.dev/animations/dither-veil)（React Bits）

### 提示词

```
【场景】「青浦影像」专题封面是一张码头铁索的照片，默认是粗颗粒的黑白抖动。光标走过的地方烧回彩色：锈、湿木和傍晚的水。离开后网点从边缘一格格织回来。左下角标题「铁索 · 2019」。
【触发】指针移动揭示；静止数秒后慢慢织回。点击可把全图锁定为彩色。
【运动】揭示半径跟手，边缘是硬边网点而不是高斯模糊；织回要慢（1–1.5s）且按格。
【不要】默认就全彩只加一层滤镜；WebGL 失败时没有静态原图；把效果铺在正文上。reduced-motion 时直接显示彩色原图。
```

## 电流边框 / Electric Border

<a id="rb-electric-border"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：沿边缘窜动并在近处跳火的电流
- 触发：pointer proximity / idle
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/electric-border
- 分册锚点：[rb-electric-border](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-electric-border)

任何卡片或按钮的轮廓上爬着细电流，靠近光标时更密、更亮，偶尔向外迸出火花。

链接：

- [打开 React Bits Electric Border 演示](https://www.reactbits.dev/animations/electric-border)（React Bits）

### 提示词

```
【场景】音乐节「灯塔将亮」票种卡「内场通票 ¥680」，深色底，边框有细电流缓缓爬行。光标靠近右上角时该处电流加密，偶尔迸出一两点火花。卡上写「含 12 月 4 日全部场次 · 剩余 126 张」。
【触发】空闲时低频游走；指针靠近加强；点击可短促放电一次。
【运动】电流沿路径连续，不要一闪一闪的 PNG 循环；火花粒子立即消失。性能上只在可见时绘制。
【不要】电流粗到盖住文字；整页每个元素都带电；忽略 reduced-motion（改为静态细边）。
```

## 闪电标识 / Electric Logo

<a id="rb-electric-logo"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：从标识轮廓上跃出的电弧
- 触发：idle / pointer
- 技术栈：React / Canvas
- 官方演示：https://www.reactbits.dev/animations/electric-logo
- 分册锚点：[rb-electric-logo](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-electric-logo)

把 Logo 或短词变成活的闪电轮廓，电弧沿边缘流动，并会从尖角处向外跃出。

链接：

- [打开 React Bits Electric Logo 演示](https://www.reactbits.dev/animations/electric-logo)（React Bits）

### 提示词

```
【场景】户外品牌「原野」导航栏左侧标识是一个简化的山形与「原野」二字，深色顶栏上，细电沿着山脊和笔画走，偶尔从山尖跃出短弧。旁边是「霜降配色 · 限量 200」。
【触发】空闲循环；指针靠近时电弧更活跃。
【运动】电弧贴合 SVG 轮廓，跃出短、收得快；不要把标识本身扭曲变形。
【不要】对比不足导致标识不可认；在大段文字上使用；reduced-motion 时显示静态线稿标识。
```

## 液态金属涂覆 / Metallic Paint

<a id="rb-metallic-paint"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：液态铬在标识上流动
- 触发：pointer / idle
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/animations/metallic-paint
- 分册锚点：[rb-metallic-paint](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-metallic-paint)

一层液态铬或液态金属在 Logo 或短标题上流过，表面有高光和黏滞，可被指针搅动。

链接：

- [打开 React Bits Metallic Paint 演示](https://www.reactbits.dev/animations/metallic-paint)（React Bits）

### 提示词

```
【场景】钟表品牌「流光」发布页，单词「LUMINA」被一层液态铬缓缓涂满，高光从左上滑到右下。指针可以轻轻搅动金属表面。下方是「1964 手动上链 · 限量 50」。
【触发】进入后自动涂覆一次；此后指针搅动；离开后表面慢慢抚平。
【运动】金属有黏滞与反射，不要像纯色渐变扫过。涂覆约 1–1.5s，搅动阻尼明显。
【不要】用在长段落；WebGL 不可用时没有纯色字回退；闪烁或摩尔纹过强。
```

## 灰度回彩网格 / Chroma Grid

<a id="rb-chroma-grid"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：聚光灯把灰照片唤回彩色
- 触发：pointer move
- 技术栈：React / Motion
- 官方演示：https://www.reactbits.dev/components/chroma-grid
- 分册锚点：[rb-chroma-grid](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-chroma-grid)

网格里的照片默认是灰度，一束聚光随光标移动，被照到的卡片恢复彩色，离开后慢慢退回灰度。

链接：

- [打开 React Bits Chroma Grid 演示](https://www.reactbits.dev/components/chroma-grid)（React Bits）

### 提示词

```
【场景】「候鸟旅馆」房源网格：青岛蓝窗、大理天井、京都窄梯、海边晒被。默认都是灰度。光标移到「青岛蓝窗」上，这张恢复蓝色窗框与橙瓦，标题「青岛 · 蓝窗房 / 从 ¥480 晚」显现。
【触发】指针移动更新聚光；触屏点按锁定一张。
【运动】颜色恢复 200–350ms，退回更慢一点。聚光边缘柔软，一次主要照亮一张，邻近可有弱光。
【不要】全部同时彩色；灰度对比差到看不清构图；没有标题的纯图网格。reduced-motion 时始终彩色，只用边框表示焦点。
```

## 溶蚀卡片 / Decay Card

<a id="rb-decay-card"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：指针把图像撕开再自行缝合
- 触发：pointer move / leave
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/components/decay-card
- 分册锚点：[rb-decay-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-decay-card)

一张图片卡在指针经过时像被撕开或熔化，露出底层或破口，离开后自行拉回完整。

链接：

- [打开 React Bits Decay Card 演示](https://www.reactbits.dev/components/decay-card)（React Bits）

### 提示词

```
【场景】时尚看片「白潮」中间季形象卡：一张人物靠在生锈铁门上的照片。指针划过时，画面像湿颜料被撕开一道口，底下隐约是同一场景的反转片。离开后破口在 600–900ms 内缝合。
【触发】指针在卡上移动产生破口；离开后自动修复。
【运动】撕裂跟手，边缘有黏连，不要马赛克方块。修复用弹性而不是硬切。
【不要】破口常驻导致主体不可认；在文字卡上使用；无 WebGL 时整卡空白。reduced-motion 时关闭撕裂，只保留静止照片。
```

## 流体玻璃折射 / Fluid Glass

<a id="rb-fluid-glass"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：可变形的玻璃体折射后方内容
- 触发：pointer / idle
- 技术栈：React / Three
- 官方演示：https://www.reactbits.dev/components/fluid-glass
- 分册锚点：[rb-fluid-glass](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-fluid-glass)

一枚三维玻璃体放在标题、图片或视频前方，折射后方内容，跟随指针，并可在几种形状之间融化切换。

链接：

- [打开 React Bits Fluid Glass 演示](https://www.reactbits.dev/components/fluid-glass)（React Bits）

### 提示词

```
【场景】护肤品牌「白潮」英雄区：标题「把海里的盐，放进洗手台」上方悬浮一滴玻璃，折射后方的浪与瓶子。指针移动时玻璃体跟随并拉长，点击在「水滴 / 薄片 / 卵石」三种形状间融化切换。
【触发】指针移动跟随；点击或按钮切换形状；空闲时缓慢呼吸。
【运动】折射真实、边缘有厚度；形变 500–800ms 融化，不要瞬间换 mesh。
【不要】玻璃挡住全部标题无法阅读；高性能消耗时没有降级；reduced-motion 时改为静止玻璃。
```

## 镜面身份卡 / Reflective Card

<a id="rb-reflective-card"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：倾斜时反射环境或循环影像
- 触发：pointer move
- 技术栈：React / WebGL
- 官方演示：https://www.reactbits.dev/components/reflective-card
- 分册锚点：[rb-reflective-card](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-reflective-card)

一张金属质感的身份卡或会员卡，倾斜时反射摄像头画面或一段循环视频，并在边缘打出高光。

链接：

- [打开 React Bits Reflective Card 演示](https://www.reactbits.dev/components/reflective-card)（React Bits）

### 提示词

```
【场景】「流光」会员卡预览：金属卡面写「LUMINA CLUB · 林夏 · MEMBER 026」，右下有小型表盘纹样。指针倾斜卡片时，卡面反射一段工坊循环影像（齿轮、光源），边缘打出一条白光。
【触发】指针移动改变倾角与高光；无摄像头时只用循环视频或环境贴图，不要向用户强要权限。
【运动】倾斜跟手、阻尼短；反射与高光同步。松开或离开后 300–500ms 回正。
【不要】未经说明就打开摄像头；反射强到文字读不清；移动端没有等价的轻倾效果。reduced-motion 时保持平视静止卡面。
```

## 油漆旋涡背景 / Balatro

<a id="rb-balatro"></a>

- 来源：AI Coding
- 作者：React Bits
- 日期：采集于 2026-11-25
- 子类：可被光标搅动的油漆着色器
- 触发：pointer / click
- 技术栈：React / OGL
- 官方演示：https://www.reactbits.dev/backgrounds/balatro
- 分册锚点：[rb-balatro](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#rb-balatro)

一层像素感的油漆旋涡铺在背景，光标可以搅动颜料，点击激起漩涡，风格鲜明但不应当抢走前景文字。

链接：

- [打开 React Bits Balatro 演示](https://www.reactbits.dev/backgrounds/balatro)（React Bits）

### 提示词

```
【场景】独立游戏「灯塔将亮」预告页：背景是深红与金的油漆在旋，像素边缘清晰。光标搅动颜料，点击激起一小涡。前景是清晰的标题「灯塔将亮」与日期「12 月 4 日，南窗书局隔壁的旧仓库」。
【触发】指针移动搅动；点击激涡；离开视口暂停着色器。
【运动】油漆黏滞、像素感保留；不要高频率闪烁。前景文字与按钮始终高对比。
【不要】把背景对比做到字不可读；低端设备没有降帧或静态回退；reduced-motion 时冻结一帧油漆。
```

## 沿边走的光梁 / Border Beam

<a id="magic-border-beam"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-25
- 子类：一束光沿容器边框旅行
- 触发：idle loop
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/border-beam
- 分册锚点：[magic-border-beam](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#magic-border-beam)

一束短光沿着卡片或按钮的边框循环旅行，用于强调定价卡、高亮功能或进行中的容器，而不是满屏扫光。

链接：

- [打开 Magic UI Border Beam 演示](https://magicui.design/docs/components/border-beam)（Magic UI）

### 提示词

```
【场景】「云帆出行」定价区三张卡，中间「企业包车」被标为「团队在用」。一条浅青的短光沿该卡圆角边框缓缓走一圈。卡上写「含司机与发票 · 起 ¥680 / 趟」。
【触发】进入视口后循环；非推荐卡无光梁。
【运动】光梁 2.5–4s 走完一圈，亮度克制，经过圆角时不要断裂。
【不要】三张卡同时走光；光梁粗到像霓虹广告；reduced-motion 时改为静态描边。
```

## 像素画布畸变 / Pixelated Canvas

<a id="aceternity-pixelated-canvas"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-25
- 子类：把图像打成可被指针搅动的像素
- 触发：pointer move
- 技术栈：React / Canvas
- 官方演示：https://ui.aceternity.com/components/pixelated-canvas
- 分册锚点：[aceternity-pixelated-canvas](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-pixelated-canvas)

把任意图片转成像素画布，指针在上面搅动会产生局部畸变，类似某些设计系统站点的交互封面。

链接：

- [打开 Aceternity Pixelated Canvas 演示](https://ui.aceternity.com/components/pixelated-canvas)（Aceternity UI）

### 提示词

```
【场景】「织光工作室」作品封面用一张办公室窗边的照片，被打成粗像素。指针经过时局部像素被搅开又弹回，像在拨动马赛克。下方「为南窗书局做的季节海报」。
【触发】指针移动扰动；离开后 300–500ms 复位。
【运动】像素块有黏滞弹性，不要整图随机闪烁。像素尺寸保证主体仍可辨认。
【不要】默认分辨率低到完全抽象却无原图入口；性能上全屏无节流。reduced-motion 时显示未扰动的像素图或原图。
```

## 自适应发光边 / Glowing Effect

<a id="aceternity-glowing-effect"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-25
- 子类：贴合任意容器的游走辉光
- 触发：pointer / idle
- 技术栈：React / Motion
- 官方演示：https://ui.aceternity.com/components/glowing-effect
- 分册锚点：[aceternity-glowing-effect](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2#aceternity-glowing-effect)

一道辉光贴合卡片或按钮的真实轮廓游走或随指针滑动，可套在任意容器上，而不是固定矩形贴图。

链接：

- [打开 Aceternity Glowing Effect 演示](https://ui.aceternity.com/components/glowing-effect)（Aceternity UI）

### 提示词

```
【场景】协作工具「墨蓝」功能卡「从会议里长出任务」，圆角容器边有一道柔和白青辉光随指针在边缘滑动，像光在金属包边上走。卡内是三条真实任务和一段 42:18 的会议时长。
【触发】指针在卡上时辉光跟随最近点；离开后回到缓慢沿边循环或熄灭。
【运动】辉光贴合圆角，不要在拐角断开；跟随 80–150ms。亮度克制，深浅主题都要可见但不刺眼。
【不要】与电流边框简单地重复成同一套火花；辉光泄漏到邻卡。reduced-motion 时改为静态细边，不再游走。
```
