# 数据可视化动效

本类共 20 条，来自分册「[加载与数据可视化](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a)」。在 `data/cases.json` 中对应 `category` 为 `dataviz`。复制下方提示词即可用于 AI Coding。

- [环形百分比 / Circular Progress](#magic-circular-progress)
- [Nivo 雷达图展开](#nivo-radar)
- [Nivo 日历热力 / Calendar](#nivo-calendar)
- [Nivo 矩形树图 / Treemap](#nivo-treemap)
## 目录

- [数值滚动 / Number Ticker](#number-ticker)
- [集成关系光束 / Animated Beam](#animated-beam)
- [Nivo 柱状图弹簧生长](#nivo-bar)
- [动画世界地图 / World Map](#world-map)
- [Nivo 折线图描绘](#nivo-line)
- [Nivo 流图涌入](#nivo-stream)
- [Nivo 饼图扇区入场](#nivo-pie)
- [Nivo 等值区域图渐现](#nivo-choropleth)
- [Nivo 桑基图流入](#nivo-sankey)
- [Nivo 日晒图层层展开](#nivo-sunburst)
- [点阵地图 / Dotted Map](#magic-dotted-map)
- [滑动数字 / Sliding Number](#animate-sliding-number)
- [液体仪表 / Liquid Gauge](#kokonut-liquid-gauge)
- [花销环 / Spending Ring](#kokonut-spending-ring)
- [图标云 / Icon Cloud](#magic-icon-cloud)
- [轨道环绕 / Orbiting Circles](#magic-orbiting-circles)

## 数值滚动 / Number Ticker

<a id="number-ticker"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-21
- 子类：指标记数
- 触发：in-view
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/number-ticker
- 分册锚点：[number-ticker](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#number-ticker)

数字从起点滚到目标值。适合放进店铺成交面板：销售额、订单量与复购率进入视口时再开始记数，并与图表生长同步。

链接：

- [打开 Magic UI Number Ticker 演示](https://magicui.design/docs/components/number-ticker)（Magic UI）

### 提示词

```
【场景】仪表盘顶部三个指标从 0 记到实值。
【触发】in-view 一次。
【运动】800–1200ms，easing cubic-bezier(0.16, 1, 0.3, 1)；保留货币与小数位格式；三项可 stagger 80–120ms。
【不要】无限循环跳数或做成老式槽机。
```

## 集成关系光束 / Animated Beam

<a id="animated-beam"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：节点间流动光束
- 触发：in-view / loop
- 技术栈：React / SVG
- 官方演示：https://magicui.design/docs/components/animated-beam
- 分册锚点：[animated-beam](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animated-beam)

一道发光沿弯曲路径在节点之间移动，官方用它展示产品集成关系。把静态架构图变成可观看的连线。

链接：

- [打开 Magic UI Animated Beam 演示](https://magicui.design/docs/components/animated-beam)（Magic UI）

### 提示词

```
【场景】SaaS 集成页：中央是产品，四周是第三方服务，光束沿弯曲路径汇入。
【触发】进入视口后循环，条与条延迟 100–300ms。
【运动】单次 4–6s 无缝循环；路径常住、光斑更亮；窗口变化时重算路径。
【不要】把光束当唯一信息层；节点要有文字名称。
```

## Nivo 柱状图弹簧生长

<a id="nivo-bar"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：柱状图弹簧生长
- 触发：data load / change
- 技术栈：React / @nivo/bar
- 官方演示：https://nivo.rocks/bar/
- 分册锚点：[nivo-bar](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-bar)

Nivo 柱状图默认带 spring：数据进入或切换时，柱子从基线长到真实值，而不是瞬间贴上去。

链接：

- [打开 nivo 柱状图演示](https://nivo.rocks/bar/)（nivo）

### 提示词

```
【场景】仪表盘分类对比柱状图。
【触发】数据就绪或筛选变化。
【运动】柱子用偏收敛的 spring 从 0 长到目标；切换时从当前高度过渡，不要先归零。可选 stagger 40–80ms。
【不要】弹跳过头；忽略 reduced-motion。
```

## 动画世界地图 / World Map

<a id="world-map"></a>

- 来源：AI Coding
- 作者：Aceternity UI
- 日期：采集于 2026-11-23
- 子类：地图连线
- 触发：in-view
- 技术栈：React / SVG
- 官方演示：https://ui.aceternity.com/components/world-map
- 分册锚点：[world-map](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#world-map)

程序生成的世界地图上，城市点之间用动画弧线连起来。适合展示网点、物流或远程团队。

链接：

- [打开 Aceternity World Map 演示](https://ui.aceternity.com/components/world-map)（Aceternity UI）

### 提示词

```
【场景】远程团队或物流页：城市点之间逐条画出弧线。
【触发】进入视口后依次播放。
【运动】端点先扩散 160–240ms；连线描边 600–900ms，stagger 120–200ms。点要有地名。
【不要】把地图当纯装饰背景。
```

## Nivo 折线图描绘

<a id="nivo-line"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：折线入场描绘
- 触发：data load / change
- 技术栈：React / @nivo/line
- 官方演示：https://nivo.rocks/line/
- 分册锚点：[nivo-line](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-line)

折线图在数据到达时沿路径描出，而不是整条线突然出现。适合趋势、收入或活跃度面板。

链接：

- [打开 nivo 折线图演示](https://nivo.rocks/line/)（nivo）

### 提示词

```
【场景】月度趋势折线图。
【触发】数据就绪或筛选变化。
【运动】线沿路径描边 600–900ms；多系列 stagger 80–120ms。切换时从当前曲线过渡到新曲线。
【不要】先清空再重画；说明文案要可被读屏读到。
```

## Nivo 流图涌入

<a id="nivo-stream"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：堆叠流图入场
- 触发：data load
- 技术栈：React / @nivo/stream
- 官方演示：https://nivo.rocks/stream/
- 分册锚点：[nivo-stream](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-stream)

Stream 图把多系列随时间堆成柔性带状。入场时带状像浪一样长开，适合展示份额或渠道组成的演变。

链接：

- [打开 nivo Stream 演示](https://nivo.rocks/stream/)（nivo）

### 提示词

```
【场景】内容渠道份额随时间变化的流图。
【触发】进入视口后播一次。
【运动】带状从基线长开，800–1200ms，带轻微 spring。切换筛选时插值到新形状。
【不要】颜色超过可辨识的系列数；要有图例。
```

## Nivo 饼图扇区入场

<a id="nivo-pie"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：饼图扇区弹入
- 触发：data load / change
- 技术栈：React / @nivo/pie
- 官方演示：https://nivo.rocks/pie/
- 分册锚点：[nivo-pie](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-pie)

饼图或环图的扇区依次弹到真实角度。适合份额、分类占比等数量不多的整体关系。

链接：

- [打开 nivo 饼图演示](https://nivo.rocks/pie/)（nivo）

### 提示词

```
【场景】订单状态或品类份额饼图。
【触发】数据就绪一次。
【运动】扇区从 0 角弹到目标角，stagger 40–80ms，600–800ms。切换时从当前角度过渡。
【不要】超过 5–6 块还不归并；扇区上要有可读数值或图例。
```

## Nivo 等值区域图渐现

<a id="nivo-choropleth"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：区域着色渐现
- 触发：data load
- 技术栈：React / @nivo/geo
- 官方演示：https://nivo.rocks/choropleth/
- 分册锚点：[nivo-choropleth](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-choropleth)

等值区域图在数据到达时让各地区填色渐现出来。适合销售分布、覆盖率或风险地图。

链接：

- [打开 nivo Choropleth 演示](https://nivo.rocks/choropleth/)（nivo）

### 提示词

```
【场景】区域销售热力地图。
【触发】进入视口后播一次。
【运动】区域填色从空值色过渡到真实色阶，600–900ms；可按值从低到高 stagger。
【不要】只靠颜色不给图例或数值；小区域要能被选中读出。
```

## Nivo 桑基图流入

<a id="nivo-sankey"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：能流与转化
- 触发：data load
- 技术栈：React / @nivo/sankey
- 官方演示：https://nivo.rocks/sankey/
- 分册锚点：[nivo-sankey](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-sankey)

桑基图把流量从一组节点送到另一组。入场时带状逐段长开，适合转化漏斗、预算流向或用户路径。

链接：

- [打开 nivo Sankey 演示](https://nivo.rocks/sankey/)（nivo）

### 提示词

```
【场景】获客到付费的转化漏斗。
【触发】进入视口后播一次。
【运动】节点先落定，带状再从源到宿拉开，800–1200ms，层级间可 stagger 80ms。
【不要】节点没有文字标签；带状交叉到不可读。
```

## Nivo 日晒图层层展开

<a id="nivo-sunburst"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-23
- 子类：层级环状展开
- 触发：data load / click drill
- 技术栈：React / @nivo/sunburst
- 官方演示：https://nivo.rocks/sunburst/
- 分册锚点：[nivo-sunburst](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-sunburst)

日晒图从内环往外展开层级。适合费用结构、文件目录或品类层级，让层级关系被看见。

链接：

- [打开 nivo Sunburst 演示](https://nivo.rocks/sunburst/)（nivo）

### 提示词

```
【场景】费用或品类层级日晒图。
【触发】首次入场；点击环区可钻取。
【运动】从内环往外展开，stagger 60–100ms，700–1000ms。钻取时内环变为新根，450–600ms。
【不要】层级过深还不提供钻取或面包屑。
```

## 点阵地图 / Dotted Map

<a id="magic-dotted-map"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：点阵地图与标记
- 触发：in-view
- 技术栈：React / SVG
- 官方演示：https://magicui.design/docs/components/dotted-map
- 分册锚点：[magic-dotted-map](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#magic-dotted-map)

用点阵构成的世界或区域地图，可标记城市或网点。比实线地图更偏品牌感，适合首屏或覆盖率展示。

链接：

- [打开 Magic UI Dotted Map 演示](https://magicui.design/docs/components/dotted-map)（Magic UI）

### 提示词

```
【场景】品牌站首屏：一张点阵地图上标出办事处或客户城市。
【触发】进入视口后，点阵先出现，标记再依次点亮。
【运动】点阵可微弱淡入 400ms；标记扩散 200ms，stagger 80–120ms。要有地名。
【不要】点密到看不清轮廓。
```

## 滑动数字 / Sliding Number

<a id="animate-sliding-number"></a>

- 来源：AI Coding
- 作者：Animate UI
- 日期：采集于 2026-11-23
- 子类：滚轮式数位切换
- 触发：value change
- 技术栈：React / Motion
- 官方演示：https://animate-ui.com/docs/primitives/animate-ui/sliding-number
- 分册锚点：[animate-sliding-number](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#animate-sliding-number)

数字按位像滚轮一样滑到新值，与连续记数不同。适合价格、倒计时、积分或仪表盘里要强调「位数变了」的场景。

链接：

- [打开 Animate UI Sliding Number 演示](https://animate-ui.com/docs/primitives/animate-ui/sliding-number)（Animate UI）

### 提示词

```
【场景】订单金额或积分：数字变化时按位滑动。
【触发】数值更新。
【运动】每位像滚轮向上或向下滑到新数，350–500ms spring；只动变化的位。使用等宽数字。
【不要】把整串当一个数做 fade；忽略读屏最终值。
```

## 液体仪表 / Liquid Gauge

<a id="kokonut-liquid-gauge"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：液面进度
- 触发：value change / in-view
- 技术栈：React / SVG 或 Canvas
- 官方演示：https://kokonutui.com/docs/cards/liquid-gauge
- 分册锚点：[kokonut-liquid-gauge](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#kokonut-liquid-gauge)

用波动液面表示占比或进度，而不是硬边环状条。适合额度、储备或目标完成度等要有触感的指标。

链接：

- [打开 Kokonut Liquid Gauge 演示](https://kokonutui.com/docs/cards/liquid-gauge)（Kokonut UI）

### 提示词

```
【场景】储备或目标完成度：一个圆形里液面升到实际百分比。
【触发】进入视口或数值更新。
【运动】液面 700–1000ms 升到位，带轻微波纹循环；中央是可读百分比。
【不要】波纹过大影响读数；忽略 reduced-motion（改为静态液面）。
```

## 花销环 / Spending Ring

<a id="kokonut-spending-ring"></a>

- 来源：AI Coding
- 作者：Kokonut UI
- 日期：采集于 2026-11-23
- 子类：分类占比环
- 触发：in-view
- 技术栈：React / SVG
- 官方演示：https://kokonutui.com/docs/cards/spending-ring
- 分册锚点：[kokonut-spending-ring](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#kokonut-spending-ring)

活动环式的分类花销或指标环：环段依次描边到占比。适合钱包、健康或目标追踪。

链接：

- [打开 Kokonut Spending Ring 演示](https://kokonutui.com/docs/cards/spending-ring)（Kokonut UI）

### 提示词

```
【场景】钱包本月花销分类环。
【触发】进入视口一次。
【运动】各环段依次描边 600–900ms，stagger 80ms；中央是总额记数。
【不要】环段没有图例或类别名。
```

## 图标云 / Icon Cloud

<a id="magic-icon-cloud"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：三维标签云
- 触发：pointer / idle rotate
- 技术栈：React
- 官方演示：https://magicui.design/docs/components/icon-cloud
- 分册锚点：[magic-icon-cloud](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#magic-icon-cloud)

图标或标签在一个球面上缓慢旋转，可随光标微偏。适合技能堆栈、合作品牌或标签集，是关系型数据的一种轻量展示。

链接：

- [打开 Magic UI Icon Cloud 演示](https://magicui.design/docs/components/icon-cloud)（Magic UI）

### 提示词

```
【场景】技能或合作品牌页：图标在球面上缓慢自转。
【触发】空闲自转；光标可微调角度。
【运动】旋转慢而稳；面向相机的图标略大，背面的缩小降不透明度。图标要有名称。
【不要】转得眼花；触屏上强制依赖 hover。
```

## 轨道环绕 / Orbiting Circles

<a id="magic-orbiting-circles"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-23
- 子类：中心与轨道图标
- 触发：idle loop
- 技术栈：React / CSS 或 Motion
- 官方演示：https://magicui.design/docs/components/orbiting-circles
- 分册锚点：[magic-orbiting-circles](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#magic-orbiting-circles)

图标在一条或多条轨道上缓慢环绕中央图标。常用来展示产品与工具、整合或生态的关系，比静态 logo 墙更有中心感。

链接：

- [打开 Magic UI Orbiting Circles 演示](https://magicui.design/docs/components/orbiting-circles)（Magic UI）

### 提示词

```
【场景】产品生态页：中央是产品，工具图标在轨道上缓慢公转。
【触发】进入视口后慢速循环；可暂停以便读取名称。
【运动】多轨道速度微差，单圈 12–20s。图标要有文字名称。
【不要】转得太快；忽略 reduced-motion（改为静止排布）。
```

## 环形百分比 / Circular Progress

<a id="magic-circular-progress"></a>

- 来源：AI Coding
- 作者：Magic UI
- 日期：采集于 2026-11-25
- 子类：圆轨上行走的百分比仪表
- 触发：value change / in-view
- 技术栈：React / Motion
- 官方演示：https://magicui.design/docs/components/animated-circular-progress-bar
- 分册锚点：[magic-circular-progress](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#magic-circular-progress)

圆环仪表把百分比从 0 走到目标值，用于配额、完成度或存储，数字与弧应同步，并有明确的总量含义。

链接：

- [打开 Magic UI Circular Progress 演示](https://magicui.design/docs/components/animated-circular-progress-bar)（Magic UI）

### 提示词

```
【场景】「云帆」企业后台的「本月包车额度」：环形仪表走到 72%，中央写「72% · 已用 36 / 50 趟」。弧是青绿，剩余是浅灰。旁注「额度将于 12 月 1 日重置」。
【触发】进入视口从 0 走到当前值；数值更新时从旧值补间到新值。
【运动】弧与数字同步，600–900ms，缓出。不要数字跳变而弧还在走。
【不要】没有总量与单位；颜色作为唯一状态（还需文字）；减动效时直接显示终值。
```

## Nivo 雷达图展开

<a id="nivo-radar"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-25
- 子类：坐标轴与多边形同步长出
- 触发：data load / change
- 技术栈：React / nivo
- 官方演示：https://nivo.rocks/radar/
- 分册锚点：[nivo-radar](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-radar)

雷达图在数据到达后，轴、网格与多边形一同展开或变形到新的值，适合能力模型或对比评分，需要清晰图例与数值。

链接：

- [打开 nivo Radar 演示](https://nivo.rocks/radar/)（nivo）

### 提示词

```
【场景】「山海科考」公开课反馈：「课程评分」雷达对比两门课。轴为「内容深度、可操作性、材料完整、节奏、答疑」。绿色多边形是「海岸线测量」，琥珀是「潮汐观测入门」，分数例如 4.6 / 4.1 / 4.8 / 3.9 / 4.7。
【触发】数据到达或筛选切换时，从中心或上一组形态补间到新多边形。
【运动】网格先或同时出现，多边形 500–800ms 变形，点上的数值延迟显现。
【不要】没有图例和数值只靠颜色；多系列完全重叠无法读；忽略减动效。
```

## Nivo 日历热力 / Calendar

<a id="nivo-calendar"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-25
- 子类：按日格子渐现的贡献热力
- 触发：data load / hover
- 技术栈：React / nivo
- 官方演示：https://nivo.rocks/calendar/
- 分册锚点：[nivo-calendar](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-calendar)

年或月的日历热力在加载后按日或按周渐现，悬停给出当天的准确数值与日期，适合活跃度、训练或供稿记录。

链接：

- [打开 nivo Calendar 演示](https://nivo.rocks/calendar/)（nivo）

### 提示词

```
【场景】「青浦影像」投稿日历：2026 年每日投稿量热力。深青格子是多投日，浅格是空档。悬停 11 月 24 日显示「11 月 24 日 · 3 件 / 码头铁索、湿窗、河面黄昏」。图例从 0 到 5+。
【触发】数据到达后按周 stagger 显现；悬停出准确值；可切年份。
【运动】格子 20–40ms 错开淡入或亮度升起，整年不超过约 1s。
【不要】只用颜色不给数值；把无数据与零值混为一谈；移动端无法查看某日详情。reduced-motion 时取消错开入场，直接显示全年格子。
```

## Nivo 矩形树图 / Treemap

<a id="nivo-treemap"></a>

- 来源：AI Coding
- 作者：nivo
- 日期：采集于 2026-11-25
- 子类：占比矩形分区展开
- 触发：data load / click drill
- 技术栈：React / nivo
- 官方演示：https://nivo.rocks/treemap/
- 分册锚点：[nivo-treemap](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a#nivo-treemap)

矩形树图按占比展开分区，可下钻到子类，适合预算、空间或流量构成，矩形上要有可读标签与数值。

链接：

- [打开 nivo Treemap 演示](https://nivo.rocks/treemap/)（nivo）

### 提示词

```
【场景】「云帆」运营月报：「11 月行程构成」。最大块「通勤班线 62% · 1,240 趟」，其次「跨城拼车 23% · 460 趟」，「企业包车 15% · 300 趟」。点击「企业包车」下钻到「机场 / 会议 / 景区」。
【触发】数据到达时分区从 0 面积或透明度展开；点击下钻，返回键回到上层。
【运动】布局 500–800ms 重新分配，标签在面积稳定后出现，过小块放到 tooltip。
【不要】小块上硬塞看不清的字；下钻无路径面包屑；颜色无图例。reduced-motion 时取消面积补间，直接切到新布局。
```
