# AI Coding 交互动效资料库

这是一份可检索、可复用的交互动效案例库，服务对象是 AI Coding：当你想要某种运动感觉但说不清时，先在库里找到接近的案例，把提示词复制进 AI 编程工具里使用。

本目录整理自 Cursor Pages「采集案例」总目及六个分册，并收入 2026-11-24 核验的一批新增案例，共 **250** 条独立案例。统计截至 **2026-11-24（Asia/Shanghai）**。第一批采于 2026-11-21，2026-11-23 大幅扩编后因篇幅拆成总目加六个分册；2026-11-24 再增补 48 条（见 [NEW-BATCH.md](NEW-BATCH.md)）。既有 202 条的提示词与措辞保持原文。日期与提示词以各条原文为准。

对应的 GitHub 仓库 [youfangg/vibecoding-design](https://github.com/youfangg/vibecoding-design) 为**私有仓库**。下面列出的 Cursor Pages 是这份资料库的编辑原件，需要相应访问权限。对外浏览用仓库里的静态站点，见下一节。

案例尚待标记保留、修改或删除，还没有写进正式范式库。本导出只转录已有的案例卡片与可复制中文提示词，不另行增补或改写。

## 浏览站点

静态站点在 [`docs/`](docs/)，用浏览器即可打开，不需要安装依赖，也不需要构建。

本地预览：

- 直接用浏览器打开 [`docs/index.html`](docs/index.html)。案例数据写在 [`docs/library.js`](docs/library.js) 里，因此不依赖服务器。
- 或者在仓库根目录启动一个静态服务器：

```bash
python3 -m http.server 4173
```

然后访问 http://127.0.0.1:4173/docs/

站点是中文界面，可以按关键词检索，并按主类、来源筛选。每条案例给出标题、说明、主类、来源、触发与技术栈、页内预览、官方演示、原始出处（若有）和可复制提示词。

页内预览有三种状态，打开案例即可看到：

- 官方页面允许被嵌入时，预览舞台用 iframe 打开该演示，下方仍保留官方演示链接。
- 不允许嵌入、但已经做了站内复刻时，舞台里是按该条中文提示词重做的可交互场景。
- 两者都有时，舞台默认嵌入官方页面，并可以改切到站内复刻。
- 两者都没有时，舞台写明「暂无站内预览」，不留空白框。官方演示链接照常可用。

允许嵌入的地址记在 [`docs/assets/embed-allowlist.js`](docs/assets/embed-allowlist.js)，由 [`scripts/probe-embeds.py`](scripts/probe-embeds.py) 根据响应头和页面里的 `X-Frame-Options`、`frame-ancestors` 生成。站内复刻登记在 [`docs/previews/registry.js`](docs/previews/registry.js)，每个复刻是同名的静态 HTML。

新增一条复刻：在 `docs/previews/` 下新建 `<案例 id>.html`（可引用同目录的 `base.css` 与 `kit.js`），再把这个 id 写进 `registry.js`。复刻要做成有文案、数据和图像的完整场景，尊重 `prefers-reduced-motion`，装饰效果不能挡住内容。官方演示若已在允许列表里，舞台仍优先嵌入官方页面。

重新探测嵌入许可：

```bash
python3 scripts/probe-embeds.py
```

GitHub Pages 的发布源是 `main` 分支上的 `/docs` 目录。仓库可以公开访问之后，地址是：

https://youfangg.github.io/vibecoding-design/

此仓库目前是私有仓库。GitHub Free 不会为私有仓库发布 Pages。把仓库改为公开，或改用包含私有仓库 Pages 的方案之后，上述地址才会生效。

## 怎么用

1. 打开上面的静态站点检索；也可以在 [`data/cases.json`](data/cases.json) 里按标题、主类、来源、作者、技术栈或提示词搜索，分类索引见 [`data/taxonomy.json`](data/taxonomy.json)。
2. 也可以直接阅读 [`categories/`](categories/) 下按主类拆分的 Markdown。
3. 复制案例中的「提示词」代码块，粘贴到 AI Coding 工具。提示词一般包含【场景】【触发】【运动】【不要】四段，请保持原文，不要改写后再喂给模型。
4. 需要核对运动效果时，打开该条的官方演示或原始出处链接。总目说明：每条都指向已核验的官方演示；因预览图上限，多数新条目没有截图，请直接打开官方演示。

使用时请同时尊重各分册写明的约束，例如：长正文不要逐字动画；手势类要提供键盘或非拖拽替代；钉住滚动要保留锚点导航；转场中要锁点击；三维、着色器或粒子背景不要挡住正文，并给弱设备准备回退；自定义光标默认只给桌面并保留点击可访问性；骨架要把占位块落地成「数据到达后的布局变形」，而不是瞬间换掉；一律尊重 `reduced-motion`。

## 规模

| 主类 | 标识 | 条数 | 所属分册 | 文件 |
| --- | --- | --- | --- | --- |
| 文字动效 | `type` | 57 | 文字动效与进入离场 | [categories/type.md](categories/type.md) |
| 进入与离场 | `enter` | 8 | 文字动效与进入离场 | [categories/enter.md](categories/enter.md) |
| 滚动叙事 | `scroll` | 22 | 滚动叙事与页面转场 | [categories/scroll.md](categories/scroll.md) |
| 过渡与页面切换 | `transition` | 9 | 滚动叙事与页面转场 | [categories/transition.md](categories/transition.md) |
| 手势与拖拽 | `gesture` | 17 | 手势、导航与微交互 | [categories/gesture.md](categories/gesture.md) |
| 导航与布局变形 | `layout` | 20 | 手势、导航与微交互 | [categories/layout.md](categories/layout.md) |
| 微交互反馈 | `micro` | 16 | 手势、导航与微交互 | [categories/micro.md](categories/micro.md) |
| 翻转与 3D | `flip3d` | 19 | 三维与光影材质 | [categories/flip3d.md](categories/flip3d.md) |
| 光影与材质 | `material` | 22 | 三维与光影材质 | [categories/material.md](categories/material.md) |
| 粒子与流体 | `particle` | 20 | 粒子、流体与光标 | [categories/particle.md](categories/particle.md) |
| 指针与光标 | `cursor` | 10 | 粒子、流体与光标 | [categories/cursor.md](categories/cursor.md) |
| 加载与骨架 | `loading` | 14 | 加载与数据可视化 | [categories/loading.md](categories/loading.md) |
| 数据可视化动效 | `dataviz` | 16 | 加载与数据可视化 | [categories/dataviz.md](categories/dataviz.md) |

| 来源 | 标识 | 条数 |
| --- | --- | --- |
| X | `x` | 8 |
| AI Coding | `ai` | 199 |
| 设计站点 | `design` | 43 |

合计 **250** 条。2026-11-24 新增 48 条的分册、来源与主类计数见 [NEW-BATCH.md](NEW-BATCH.md)。

| 分册 | 条数 | Cursor Page |
| --- | --- | --- |
| 文字动效与进入离场 | 65 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8 |
| 滚动叙事与页面转场 | 31 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a |
| 手势、导航与微交互 | 53 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f |
| 三维与光影材质 | 41 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2 |
| 粒子、流体与光标 | 30 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9 |
| 加载与数据可视化 | 30 | https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a |

总目上仍保留 20 条已上传预览图的原案例（`gooey-sticky-menu`、`lookbook-hover`、`parallel-transitions`、`do-not-scroll`、`physics-about-me`、`page-slide-drawer`、`scroll-3d-carousel`、`motion-trail`、`split-text`、`circular-gallery`、`macbook-scroll`、`expandable-card`、`tracing-beam`、`shared-layout`、`savor`、`und-ny`、`haoqi`、`artists-247`、`ink-games`、`elastic-grid`）。完整提示词仍以对应分册为准。

2026-11-23 的扩编新增了「指针与光标」主类，并补上了骨架到真实内容的布局变形。2026-11-24 的 48 条增补没有新主类。

## 分类与来源

主类按总目使用的 13 个分类组织，子类（`subcategory`）来自分册卡片上的短标签。来源为总目与分册共同使用的三类：

- **X**：社媒原帖及配套演示
- **AI Coding**：可直接参考的组件或库演示（如 React Bits、Aceternity UI、Motion、Animata、Cult UI 等，以各条作者与链接为准）
- **设计站点**：Codrops 及其他设计站点上的演示与教程

分册是按主类打包后的阅读单位，不是另一套分类。

## 源页面（Cursor Pages）

这些是 Cursor 里的 Pages，需要相应访问权限，不能当作公开网站引用。

- 总目「采集案例」：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/5039b50a-b160-4379-9fde-508ebd275a2f
- 文字动效与进入离场：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/284a2469-eac6-4b3a-aab2-a19e4546c8a8
- 滚动叙事与页面转场：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/0997f84d-dc82-4e9c-8b53-87bd4e3f697a
- 手势、导航与微交互：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/babcb897-a18b-4b1a-82ec-8b5a06c1f21f
- 三维与光影材质：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/ba239dfa-f2ef-4a20-8370-28cb9aca4bc2
- 粒子、流体与光标：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/51a8953b-ee93-4e24-ad7d-13911f879ce9
- 加载与数据可视化：https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/673e7354-127e-4d15-a31c-4b219a01ee8a

## 相关页面（仅作背景，不是本数据集）

下面两页帮助理解资料库的目标和早期预览形态，**不是** `cases.json` 的数据来源，也未计入上述 250 条。

- [第一批可预览范式](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/cfa40336-0a3b-41ac-a3af-c36a4af340e7)：用完整的商品、民宿、课程和文章片段做了约 20 个可交互预览（如卡片翻转、透视倾斜、错落入场、骨架流光等），方便先看效果再复制描述。
- [结构规划](https://cursor.com/canvas/store-1cd43420-43a9-43f1-9c13-da70c2d85a9f/b6e47be6-2234-4775-99a2-15e7257579c5)：说明资料库要做可检索、可复用、可落地的交互与动效语言；规划了「主类 → 子类 → 范式」分层、范式卡片字段，以及可复制给 AI 的中文提示词模板。

## 文件结构

```
README.md
NEW-BATCH.md                        # 2026-11-24 增补说明
data/cases.json                     # 全部 250 条案例（UTF-8，带缩进）
data/new-cases-2026-11-24.json      # 本批新增的 48 条原文
data/taxonomy.json                  # 来源、主类、分册索引与条数
categories/<主类>.md                # 按主类拆分，含可复制提示词代码块
docs/                               # 静态站点，GitHub Pages 从 /docs 发布
docs/library.js                     # 由 data/cases.json 与 taxonomy.json 生成，供站点使用
```

## 案例字段

`data/cases.json` 中每条包含：

| 字段 | 说明 |
| --- | --- |
| `id` | 稳定标识，与分册锚点一致 |
| `title` | 分册中的完整标题 |
| `category` / `categoryLabel` | 主类标识与中文名 |
| `subcategory` | 分册卡片上的子类短标签 |
| `source` / `sourceLabel` | `x` / `ai` / `design`，以及 X、AI Coding、设计站点 |
| `author` | 作者或来源方，以分册为准 |
| `date` | 分册上的日期或「采集于 …」 |
| `trigger` | 触发方式 |
| `stack` | 技术栈 |
| `description` | 分册中的案例说明 |
| `prompt` | 可复制中文提示词原文 |
| `links` | 分册列出的全部链接（标题、地址，以及可选的站点与日期） |
| `officialDemoUrl` | 从链接标题或站点名里识别出的官方演示地址；无法从原文判断时为 `null`，请看 `links` |
| `originalUrl` | 从链接里识别出的原帖或教程地址；无法判断时为 `null` |
| `volume` / `volumeTitle` / `volumeUrl` | 所属分册 |
| `canvasAnchor` | 分册 Page 上该条的锚点链接 |

本导出为文本优先，不附预览图。
