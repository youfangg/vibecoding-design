# 光影与材质

本类共 21 条，来自分册「[三维与光影材质](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2)」。在 `data/cases.json` 中对应 `category` 为 `material`。复制下方提示词即可用于 AI Coding。

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
