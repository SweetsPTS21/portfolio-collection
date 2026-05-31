# 🔵 Catalog 7 — Blue Motion Portfolio Themes

> Catalog này phát triển từ cấu trúc của `catalog-4.md`, nhưng giới hạn còn 5 theme mới và lấy xanh dương làm màu chủ đạo tuyệt đối.  
> Các theme không chỉ là biển/du lịch; mỗi theme dùng một bối cảnh xanh riêng để tránh trùng: biển sâu, phòng luật, đài quan sát dữ liệu, sổ tay ngày mưa, kính băng tối giản.  
> Stack dùng: Framer Motion cho UI animation, Rive cho object interaction, SVGator/CSS cho scene animation, Lenis cho smooth scroll.

---

## UI library / design tool stack

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

| Library / Tool  | Vai trò chính                                      | Nên dùng cho                                                |
| --------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| Framer Motion   | Animation UI React, page transition, card hover    | Section entrance, route transition, modal, card interaction |
| Rive            | Animated object/state machine                      | Submarine, legal scale, telescope, pen, prism               |
| SVGator         | Timeline animation cho SVG                         | Sonar, seal, orbit, rain, aurora, glint                     |
| Lenis           | Smooth scroll có kiểm soát                         | Portfolio nhiều section, anchor navigation                  |
| CSS Keyframes   | Idle loop nhẹ                                      | Bubble, star, rain, snow, shimmer                           |
| Realtime Colors | Kiểm palette xanh và contrast                      | Token màu, dark/light variants                              |
| Blush           | Illustration tham khảo                             | Hero scene, profile scene, empty state                      |

---

## Danh sách phong cách

| ID                         | Tên phong cách                    | Vibe                                             | Hợp với                                |
| -------------------------- | --------------------------------- | ------------------------------------------------ | -------------------------------------- |
| `deep-sea-research-log`    | Deep Sea Research Log Portfolio   | Biển sâu, nghiên cứu, trầm, học thuật            | Research, law, science, data           |
| `azure-courtroom-brief`    | Azure Courtroom Brief Portfolio   | Pháp lý, chuyên nghiệp, hồ sơ xanh               | Law, business, consulting              |
| `cobalt-data-observatory`  | Cobalt Data Observatory Portfolio | Đài quan sát, dữ liệu, cobalt, futuristic nhẹ    | Data, AI, dev, analytics               |
| `blue-rain-notebook`       | Blue Rain Notebook Portfolio      | Ngày mưa, sổ tay, yên tĩnh, reflective           | Study, writing, research               |
| `arctic-glass-portfolio`   | Arctic Glass Portfolio            | Kính băng, tối giản, premium, trong suốt         | Design, product, frontend, profile     |

---

## 1. `deep-sea-research-log` — Deep Sea Research Log Portfolio

Portfolio như một cuốn nhật ký nghiên cứu trong khoang tàu lặn: nền xanh biển sâu, bản đồ dòng hải lưu, sonar ring, bubble và logbook kỹ thuật. Theme trầm, có chiều sâu, hợp portfolio cần cảm giác học thuật và tin cậy.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Tĩnh, sâu, học thuật, bí ẩn nhẹ, đáng tin                        |
| Hình khối   | Logbook panel, sonar card, rounded viewport, specimen tag        |
| Không gian  | Biển sâu navy, khoang tàu lặn, sonar, bubble, dòng hải lưu       |
| Chuyển động | Sonar pulse, submarine drift, bubble rise, current flow          |
| Điểm nhấn   | Tàu lặn, kính viewport, sonar circle, log stamp, glow plankton   |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#071D33",
        colorBgContainer: "#F4FBFF",
        colorPrimary: "#2F9BEF",
        colorTextBase: "#102A43",
        colorTextSecondary: "#5B7488",
        colorSuccess: "#5FE0C4",
        colorWarning: "#9FD8FF",
        colorError: "#FF7890",
        colorBorder: "#B8DDF4",
        borderRadius: 14,
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    },
};

// --deep-navy: #071D33;
// --abyss-blue: #0D3559;
// --sonar-blue: #2F9BEF;
// --current-cyan: #5FE0C4;
// --viewport-white: #F4FBFF;
```

### Typography

- **Heading:** `Space Grotesk` hiện đại, hợp technical log.
- **Body:** `Inter` rõ, ổn cho bảng, mô tả và metadata.

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme                                      |
| -------------- | ---------------------------------------------------------- |
| Framer Motion  | Log card reveal, viewport modal, section stagger           |
| Rive           | Tàu lặn drift/interact, sonar scan state                   |
| SVGator        | Current flow path, sonar pulse, plankton glow              |
| Lenis          | Smooth scroll qua log entry, parallax dòng nước            |
| CSS Keyframes  | Bubble rise, glow pulse, viewport glint                    |

### Layout ideas

- **Hero:** Full-bleed biển sâu với viewport tròn, tàu lặn drift ngang, sonar ring quanh tên.
- **About:** Profile như research log page, có metadata: role, school, focus, tools.
- **Projects:** Mỗi project là một dive log card, có depth badge và specimen tag.
- **Skills:** Sonar radar grid; mỗi skill là dot hoặc blip trong vòng radar.
- **Contact:** Signal beacon CTA; khi gửi thì sonar pulse lan ra.

### Animation rules

| Sự kiện          | Effect                                      | Thư viện      |
| ---------------- | ------------------------------------------- | ------------- |
| Page load        | Dark water fade + viewport open + sonar ping | Framer/Rive   |
| Sonar idle       | Ring scale, opacity fade, 4–6s loop         | CSS/SVGator   |
| Submarine        | Drift 12–18s, rotate ±1deg                  | Rive/CSS      |
| Bubble           | Rise staggered, random size, opacity fade   | CSS keyframes |
| Card hover       | Lift + blue glow + sonar line sweep         | Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js              ← surface, logs, sonar, beacon
│   └── theme.js
├── pages/
│   ├── DeepSeaHeroPage.jsx
│   ├── DiveLogProjectsPage.jsx
│   ├── SonarSkillsPage.jsx
│   └── BeaconContactPage.jsx
├── features/
│   ├── deep-sea-scene/
│   ├── submarine-object/
│   └── dive-logs/
├── components/ui/             ← SonarButton, LogCard, DepthBadge, SignalTag
└── assets/deep-sea-research-log/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo            | Nội dung cần vẽ                         | Dùng cho        |
| -------------------------- | --------------------------------------- | --------------- |
| `abyss-viewport-scene.svg` | Nền biển sâu, viewport, glow plankton   | Hero/background |
| `submarine-set.svg`        | Tàu lặn, đèn, chân vịt, shadow          | Hero/object     |
| `sonar-radar-rings.svg`    | Vòng sonar, scan line, blip dots        | Skills/hero     |
| `current-flow-lines.svg`   | Dòng hải lưu, wave line, bubble path    | Background      |
| `research-log-frame.svg`   | Logbook, grid, stamp, specimen tag      | Project cards   |
| `deep-sea-icons.svg`       | Sonar, oxygen, sample vial, beacon      | Icons/badges    |
| `plankton-particles.svg`   | Dot glow, tiny star, organic speck      | Particle layer  |
| `signal-beacon.svg`        | Beacon, radio wave, light cone          | Contact CTA     |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `deep-sea-research-log` trong data/theme config và README |
| Pages | Có hero biển sâu, dive log projects, sonar skills, beacon contact |
| Feature folders | Tách `deep-sea-scene`, `submarine-object`, `dive-logs` |
| Asset folder | Tạo `src/assets/deep-sea-research-log/` và đủ 8 SVG files |
| Visual priority | Nền xanh navy/blue chiếm ưu thế; cyan chỉ là glow phụ |

---

## 2. `azure-courtroom-brief` — Azure Courtroom Brief Portfolio

Portfolio như một hồ sơ pháp lý được mở trên bàn làm việc xanh azure: paper brief, con dấu, cán cân công lý, tab hồ sơ và highlight pháp lý. Theme chuyên nghiệp, gọn, học thuật.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                        |
| ----------- | ------------------------------------------------------------ |
| Cảm xúc     | Chuyên nghiệp, rõ ràng, tin cậy, bình tĩnh                   |
| Hình khối   | Brief card, legal tab, seal badge, evidence panel            |
| Không gian  | Nền xanh azure sáng, giấy trắng, line rule, con dấu xanh     |
| Chuyển động | Seal stamp, scale balance, underline draw, paper tab slide   |
| Điểm nhấn   | Cán cân công lý, con dấu, folder tab, bút highlight          |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EDF8FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#1E78C8",
        colorTextBase: "#12304A",
        colorTextSecondary: "#5C7284",
        colorSuccess: "#3DAE8B",
        colorWarning: "#8ABBEA",
        colorError: "#D9576A",
        colorBorder: "#C4E2F5",
        borderRadius: 10,
        fontFamily: "'Libre Baskerville', 'Source Sans 3', serif",
    },
};

// --brief-azure: #EDF8FF;
// --legal-blue: #1E78C8;
// --ink-navy: #12304A;
// --paper-white: #FFFFFF;
// --tab-blue: #8ABBEA;
```

### Typography

- **Heading:** `Libre Baskerville` tạo cảm giác pháp lý, học thuật.
- **Body:** `Source Sans 3` rõ, hợp nhiều bullet và citation.

```css
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme                           |
| -------------- | ----------------------------------------------- |
| Framer Motion  | Brief reveal, folder tab switch, modal          |
| Rive           | Scale balance interaction, seal stamp click     |
| SVGator        | Underline draw, stamp ring, paper shuffle       |
| Lenis          | Smooth scroll qua hồ sơ                         |
| CSS Keyframes  | Paper float nhẹ, seal ink pulse, tab wiggle     |

### Layout ideas

- **Hero:** Legal brief mở ở giữa, tên như case title, cán cân ở góc phải.
- **About:** Profile dạng counsel card, có student id và field tags.
- **Projects:** Project cards như case files, mỗi bài là một exhibit.
- **Skills:** Citation index hoặc legal toolkit.
- **Contact:** Sign & seal CTA, phong bì legal document.

### Animation rules

| Sự kiện | Effect | Thư viện |
| ------- | ------ | -------- |
| Page load | Brief slide up + seal stamp pop | Framer/Rive |
| Scale object | Balance sway rất nhẹ | Rive/CSS |
| Tab switch | Folder tab slide + blue underline | Framer Motion |
| Card hover | Paper lift + citation chip reveal | Framer Motion |
| Seal action | Scale pop + ink ring fade | Rive/CSS |

### Component notes

```txt
src/
├── app/                         ← App.jsx, routes.js, theme.js
├── pages/                       ← CourtroomBriefHeroPage, CaseFileProjectsPage, LegalIndexSkillsPage, SignSealContactPage
├── features/                    ← legal-brief-scene, case-files, legal-index
├── components/ui/               ← BriefButton, CaseCard, SealBadge, CitationTag
└── assets/azure-courtroom-brief/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo | Nội dung cần vẽ | Dùng cho |
| --------------- | --------------- | -------- |
| `legal-brief-stack.svg` | Giấy brief, tab, line rule, paper shadow | Hero/projects |
| `balance-scale-blue.svg` | Cán cân công lý màu xanh | Hero/object |
| `courtroom-seal-set.svg` | Con dấu, wax seal, stamp ring | Badges/CTA |
| `citation-tab-labels.svg` | Tab hồ sơ, exhibit label, citation chip | Skills/cards |
| `evidence-card-frames.svg` | Case card, folder edge, clip | Project cards |
| `legal-tool-icons.svg` | Gavel, scale, book, pen, shield, folder | Icons |
| `signature-underline.svg` | Bút ký, underline, approval mark | Contact/about |
| `paper-motion-particles.svg` | Paper flecks, ink dots, tiny marks | Decoration |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `azure-courtroom-brief` trong data/theme config và README |
| Pages | Có legal brief hero, case files, legal skills index, sign contact |
| Feature folders | Tách `legal-brief-scene`, `case-files`, `legal-index` |
| Asset folder | Tạo `src/assets/azure-courtroom-brief/` và đủ 8 SVG files |
| Visual priority | Xanh azure/blue là chủ đạo; giấy trắng chỉ hỗ trợ đọc |

---

## 3. `cobalt-data-observatory` — Cobalt Data Observatory Portfolio

Portfolio như một đài quan sát dữ liệu trong đêm cobalt: sky map, telescope, data orbit, dashboard glass và star nodes. Theme hiện đại, hợp portfolio công nghệ, AI, data hoặc phân tích.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
| ------ | ---- |
| Cảm xúc | Futuristic nhẹ, chính xác, rộng, thông minh |
| Hình khối | Orbit card, glass dashboard, star node, telescope panel |
| Không gian | Nền cobalt/navy, grid sky, star map, observatory dome |
| Chuyển động | Orbit path, star twinkle, telescope rotate, data stream |
| Điểm nhấn | Telescope, orbit graph, constellation line, dashboard metrics |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#081A3A",
        colorBgContainer: "#F7FBFF",
        colorPrimary: "#3B82F6",
        colorTextBase: "#0F2440",
        colorTextSecondary: "#60728A",
        colorSuccess: "#38D6C2",
        colorWarning: "#9FC7FF",
        colorError: "#FF6F8E",
        colorBorder: "#C8DCF8",
        borderRadius: 12,
        fontFamily: "'Sora', 'Inter', sans-serif",
    },
};
```

### Typography

- **Heading:** `Sora` có cảm giác tech nhưng không quá lạnh.
- **Body:** `Inter` sạch, hợp dashboard và long-form text.

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme |
| -------------- | --------------------- |
| Framer Motion | Dashboard reveal, metric count, orbit card hover |
| Rive | Telescope rotate, data scanner state, contact signal |
| SVGator | Orbit path, constellation draw, star twinkle |
| Lenis | Smooth scroll + parallax star field |
| CSS Keyframes | Star twinkle, grid drift, orbit rotate |

### Layout ideas

- **Hero:** Observatory dome dưới trời cobalt, telescope hướng vào tên.
- **About:** Glass profile dashboard với timeline và metadata.
- **Projects:** Project cards như data observation panels, có metric strip.
- **Skills:** Constellation skill map; mỗi nhóm skill là chòm sao.
- **Contact:** Transmission panel, gửi message như signal tới node.

### Animation rules

| Sự kiện | Effect | Thư viện |
| ------- | ------ | -------- |
| Page load | Star field fade + telescope align | Framer/Rive |
| Orbit idle | Slow rotate, line shimmer | CSS/SVGator |
| Constellation | Stroke draw khi vào viewport | SVG/CSS |
| Metric card | Count up + blue glow | Framer Motion |
| Contact success | Signal line travel to star node | Rive/SVGator |

### Component notes

```txt
src/
├── app/                              ← App.jsx, routes.js, theme.js
├── pages/                            ← ObservatoryHeroPage, DataPanelProjectsPage, ConstellationSkillsPage, TransmissionContactPage
├── features/                         ← observatory-scene, data-panels, constellation-skills
├── components/ui/                    ← OrbitButton, DataPanel, StarBadge, MetricChip
└── assets/cobalt-data-observatory/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo | Nội dung cần vẽ | Dùng cho |
| --------------- | --------------- | -------- |
| `observatory-dome-scene.svg` | Dome, horizon, cobalt sky, telescope base | Hero/background |
| `telescope-object.svg` | Telescope, tripod, lens glow | Hero/object |
| `orbit-data-grid.svg` | Orbit rings, data paths, graph nodes | Background/cards |
| `constellation-map.svg` | Star nodes, line graph, labels | Skills |
| `dashboard-panel-frames.svg` | Glass panels, metric strip, chart frame | Projects |
| `data-icons.svg` | AI, chart, database, code, radar, spark | Icons |
| `star-particles.svg` | Stars, glow dots, tiny meteors | Particle layer |
| `signal-transmission.svg` | Signal beam, node, antenna, wave rings | Contact CTA |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `cobalt-data-observatory` trong data/theme config và README |
| Pages | Có observatory hero, data panels projects, constellation skills, contact |
| Feature folders | Tách `observatory-scene`, `data-panels`, `constellation-skills` |
| Asset folder | Tạo `src/assets/cobalt-data-observatory/` và đủ 8 SVG files |
| Performance | Giảm star particles trên mobile, không quá 30 node animate cùng lúc |

---

## 4. `blue-rain-notebook` — Blue Rain Notebook Portfolio

Portfolio như một cuốn sổ tay mở cạnh cửa sổ ngày mưa: nền xanh dịu, hạt mưa trượt trên kính, bút mực xanh, giấy note và ánh sáng lạnh. Theme yên tĩnh, nhiều chữ, hợp portfolio học tập và viết lách.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
| ------ | ---- |
| Cảm xúc | Tĩnh, tập trung, reflective, học thuật, mềm |
| Hình khối | Notebook card, ruled paper, margin note, blue ink tag |
| Không gian | Cửa sổ mưa xanh, sổ tay, paper stack, bút, bookmark |
| Chuyển động | Rain slide, ink underline, page turn, paper float |
| Điểm nhấn | Sổ tay, bút mực xanh, kính mưa, bookmark, note label |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EAF5FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#2D8BD8",
        colorTextBase: "#18324A",
        colorTextSecondary: "#617789",
        colorSuccess: "#62BFA8",
        colorWarning: "#8EC5F2",
        colorError: "#E86D82",
        colorBorder: "#C8E4F7",
        borderRadius: 12,
        fontFamily: "'Nunito Sans', 'Lora', sans-serif",
    },
};
```

### Typography

- **Heading:** `Lora` tạo cảm giác nhật ký và suy tư.
- **Body:** `Nunito Sans` dễ đọc, cân bằng độ mềm của heading.

```css
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme |
| -------------- | --------------------- |
| Framer Motion | Notebook page reveal, tab transition, project card hover |
| Rive | Pen write interaction, page corner flip, contact signature |
| SVGator | Rain streak, ink underline, bookmark slide |
| Lenis | Smooth scroll như đọc từng trang |
| CSS Keyframes | Rain slide, paper float, ink glow, cursor blink |

### Layout ideas

- **Hero:** Notebook mở chiếm trung tâm, tên nằm như title trang đầu, mưa ngoài cửa sổ.
- **About:** Profile dạng intro page, có margin note cho sở thích/định hướng.
- **Projects:** Project pages dạng notebook entries, có date tab và blue ink mark.
- **Skills:** Index tabs theo nhóm kỹ năng.
- **Contact:** Signature card; khi gửi thì bút ký một underline xanh.

### Animation rules

| Sự kiện | Effect | Thư viện |
| ------- | ------ | -------- |
| Page load | Notebook open + rain fade | Framer/Rive |
| Rain | Drops slide down, stagger | CSS/SVGator |
| Ink underline | Stroke draw dưới heading | SVG/CSS |
| Page hover | Corner fold + paper shadow | Framer Motion |
| Contact success | Pen signature + check mark | Rive/Framer |

### Component notes

```txt
src/
├── app/                         ← App.jsx, routes.js, theme.js
├── pages/                       ← RainNotebookHeroPage, NotebookEntriesProjectsPage, IndexTabSkillsPage, SignatureContactPage
├── features/                    ← rain-notebook-scene, writing-object, notebook-entries
├── components/ui/               ← NotebookCard, InkButton, MarginNote, IndexTab
└── assets/blue-rain-notebook/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo | Nội dung cần vẽ | Dùng cho |
| --------------- | --------------- | -------- |
| `rain-window-blue.svg` | Cửa sổ, mưa, sky blue, streak | Hero/background |
| `notebook-spread-frame.svg` | Sổ mở, ruled paper, margin, bookmark | Hero/cards |
| `blue-pen-set.svg` | Bút máy, cap, nib, ink trail | Hero/contact |
| `index-tabs-labels.svg` | Tab, sticky note, paper clip | Skills/nav |
| `notebook-entry-cards.svg` | Entry card, date label, note frame | Projects |
| `rain-ink-icons.svg` | Pen, book, cloud, drop, quote, check | Icons |
| `paper-float-particles.svg` | Tiny paper flecks, rain dots, ink dot | Particle layer |
| `signature-check.svg` | Signature line, check mark, stamp | Contact CTA |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `blue-rain-notebook` trong data/theme config và README |
| Pages | Có rain notebook hero, notebook projects, index skills, signature CTA |
| Feature folders | Tách `rain-notebook-scene`, `writing-object`, `notebook-entries` |
| Asset folder | Tạo `src/assets/blue-rain-notebook/` và đủ 8 SVG files |
| Responsive | Notebook spread/cards về 1 cột, giảm rain density trên mobile |

---

## 5. `arctic-glass-portfolio` — Arctic Glass Portfolio

Portfolio như một không gian kính băng ở Bắc Cực: nền xanh băng, glass panels, aurora line, prism highlight và card tối giản. Theme premium, sạch, phù hợp portfolio thiết kế/product/frontend.

### Đặc điểm nhận dạng

| Yếu tố | Mô tả |
| ------ | ---- |
| Cảm xúc | Tối giản, premium, lạnh sạch, sắc nét |
| Hình khối | Glass card, prism panel, ice edge, frosted badge |
| Không gian | Arctic blue, băng trong suốt, aurora xanh, snow mist |
| Chuyển động | Glass glint, aurora drift, snow mote, prism split |
| Điểm nhấn | Prism, ice shard, aurora ribbon, frosted navigation |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EAF8FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#1D9FE8",
        colorTextBase: "#102B40",
        colorTextSecondary: "#5D7182",
        colorSuccess: "#4DD7C8",
        colorWarning: "#B9E6FF",
        colorError: "#F26D86",
        colorBorder: "#C6E7F6",
        borderRadius: 8,
        fontFamily: "'DM Sans', 'Manrope', sans-serif",
    },
};
```

### Typography

- **Heading:** `Manrope` gọn, hiện đại, hợp premium UI.
- **Body:** `DM Sans` rõ ràng, mềm hơn một chút để dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme |
| -------------- | --------------------- |
| Framer Motion | Glass panel entrance, parallax, project modal, button hover |
| Rive | Prism interactive split, aurora trigger, CTA state |
| SVGator | Aurora ribbon drift, glass glint sweep, snow mote |
| Lenis | Smooth scroll + subtle parallax panels |
| CSS Keyframes | Frost shimmer, snow drift, light sweep |

### Layout ideas

- **Hero:** Full viewport arctic glass scene, name lớn trên nền, aurora ribbon phía sau.
- **About:** Frosted profile panel với avatar hoặc initials, data chips xanh.
- **Projects:** Glass slab cards, hover tạo glint và depth shadow.
- **Skills:** Prism grid; mỗi skill nhóm theo mặt kính khác nhau.
- **Contact:** Ice prism CTA; gửi message thì light splits qua prism.

### Animation rules

| Sự kiện | Effect | Thư viện |
| ------- | ------ | -------- |
| Page load | Aurora fade + glass panels rise | Framer/SVGator |
| Glass glint | Light sweep, opacity thấp | CSS/SVGator |
| Prism hover | Split highlight + tiny rotation | Rive/Framer |
| Snow mist | Slow drift, low density | CSS keyframes |
| Contact success | Prism beam split + check line | Rive/SVGator |

### Component notes

```txt
src/
├── app/                         ← App.jsx, routes.js, theme.js
├── pages/                       ← ArcticGlassHeroPage, GlassSlabProjectsPage, PrismSkillsPage, BeamContactPage
├── features/                    ← arctic-scene, prism-object, glass-projects
├── components/ui/               ← GlassButton, FrostCard, PrismBadge, IceTag
└── assets/arctic-glass-portfolio/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo | Nội dung cần vẽ | Dùng cho |
| --------------- | --------------- | -------- |
| `arctic-glass-scene.svg` | Ice floor, blue sky, glass planes | Hero/background |
| `aurora-ribbon.svg` | Aurora cyan/blue ribbon | Background |
| `prism-object-set.svg` | Prism, beam, split highlight | Hero/contact |
| `frosted-panel-frames.svg` | Glass cards, borders, blur masks | Cards/layout |
| `ice-shard-decor.svg` | Ice shards, snow ridge, crystals | Decoration |
| `arctic-ui-icons.svg` | Prism, snowflake, grid, sparkle, send | Icons/badges |
| `snow-mist-particles.svg` | Snow dots, mist strokes, frost specks | Particle layer |
| `glass-glint-lines.svg` | Light sweeps, diagonal glint, thin lines | Hover/idle |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai |
| ------------ | ------------------- |
| Theme ID | Ghi rõ `arctic-glass-portfolio` trong data/theme config và README |
| Pages | Có arctic hero, glass slab projects, prism skills, beam contact |
| Feature folders | Tách `arctic-scene`, `prism-object`, `glass-projects` |
| Asset folder | Tạo `src/assets/arctic-glass-portfolio/` và đủ 8 SVG files |
| Accessibility | Không đặt text trong glass nếu contrast thấp; dùng overlay hoặc text dark |

---

## Quy chuẩn triển khai cho Catalog 7

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer Motion variants, spring, easing, reduced motion
│   ├── riveSetup.js          ← Rive state machine config, asset preload
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-scene>/        ← SVG scene, background layers, decoration components
│   ├── <theme-object>/       ← Rive/SVG object, state controller, interaction hooks
│   └── <theme-content>/      ← Content-specific cards, grids, tabs, modals
├── components/
│   ├── layout/               ← App shell, nav, route transition wrapper
│   └── ui/                   ← Buttons, cards, badges, tags, modal
└── assets/<theme-id>/        ← SVG files, Rive files, icon sets, pattern files
```

### Phân vai tool rõ ràng

| Việc cần làm                  | Tool nên dùng                            | Ghi chú triển khai                              |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------- |
| Page/route transition         | Framer Motion                            | Dùng variants/AnimatePresence                   |
| Hover/tap card, modal         | Framer Motion                            | Giữ UI animation gần component React            |
| Moving object state machine   | Rive                                     | Submarine, scale, telescope, pen, prism         |
| Smooth scroll                 | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion     |
| Scroll progress/parallax      | Framer Motion `useScroll`/`useTransform` | Scene depth, progress indicator, soft reveal    |
| SVG scene animation           | SVGator export hoặc CSS keyframes        | Sonar, seal, orbit, rain, aurora                |
| Particle/decoration idle      | CSS keyframes                            | Bubble, star, rain, snow, mist                  |
| Complex SVG path animation    | SVG stroke-dashoffset + CSS              | Underline, constellation line, signal path      |

### Performance rules

- Lazy load SVG scene components và Rive files bằng `React.lazy` + `Suspense`.
- Không render quá 20–30 animated decorative elements visible cùng lúc.
- Mobile giảm particle density ít nhất 50%.
- Text chính phải là HTML/CSS, không đặt trong SVG.
- Lenis, requestAnimationFrame và interval phải cleanup khi component unmount.
- Tôn trọng `prefers-reduced-motion`: tắt idle loop, particle drift, object bob/rotate, sonar/orbit/rain/aurora loop.
- SVG files optimize bằng SVGO trước khi commit.

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Nguyên tắc thiết kế chung cho Catalog 7

| Nguyên tắc              | Mô tả                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| Tông màu chủ đạo        | Xanh dương là nền và nhận diện chính: ocean, azure, cobalt, rain, arctic |
| Accent có kiểm soát     | Cyan/teal/ice/soft red chỉ dùng cho trạng thái, glow, warning hoặc CTA   |
| Background-first scene  | Hero phải thể hiện rõ bối cảnh xanh bằng scene hoặc object chính         |
| SVG-first approach      | Ưu tiên SVG 2D cho scene, background, pattern, icons và decoration        |
| Moving-object driven    | Mỗi theme có một object tương tác chính thay vì mascot bắt buộc           |
| Animation philosophy    | Chậm, sạch, hợp vật lý: sonar lan, giấy trượt, mưa rơi, kính glint       |
| Accessibility           | Text HTML, contrast đủ, focus state rõ, reduced motion ready             |
| Mobile-first decoration | Giảm particle/object phụ trên mobile, giữ content dễ đọc                 |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js`, `src/app/riveSetup.js`, `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa SVG files và Rive files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Thiết kế moving object Rive file có ít nhất 3 states: `idle`, `interact`, `success`.
- [ ] Tách scene, object animation và content features thành folder riêng.
- [ ] Background/hero scene phải import và render asset chính, không chỉ dùng gradient nền.
- [ ] Cards dùng decoration theo bối cảnh: logbook, legal brief, observatory panel, notebook, glass slab.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền xanh.
- [ ] Đảm bảo màu xanh dương chiếm vai trò nhận diện chính ở hero, nav, CTA và key surfaces.

---

_Cập nhật lần cuối: 2026-05-31 — Catalog 7: Blue Motion Portfolio Themes với 5 phong cách xanh dương chủ đạo, scene SVG-first, moving-object interaction và animation sạch, chậm, có kiểm soát._
