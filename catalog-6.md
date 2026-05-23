# 🌊 Catalog 6 — Blue & Brown Motion Portfolio Themes

> Catalog này tập trung vào portfolio có nền xanh dương làm chủ đạo, kết hợp các vật thể màu nâu như gỗ, giấy kraft, da, đồng, sách cũ và đất nung.  
> Thiên về cảm giác calm, grounded, cinematic, có vật thể chuyển động hợp bối cảnh thay vì mascot quá cute.  
> Stack dùng: Framer Motion cho UI animation, Rive cho object/mascot micro-animation, SVGator/CSS cho scene animation, Lenis cho smooth scroll.  
> Mỗi theme có bảng màu, typography, layout, animation rules, component notes và danh sách asset SVG nên tự tạo.

---

## UI library / design tool stack

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

| Library / Tool  | Vai trò chính trong catalog này                                      | Nên dùng cho                                                        |
| --------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Framer Motion   | Animation UI React, page transition, card hover, scroll reveal        | Section reveal, route transition, dock/card hover, object entrance  |
| Rive            | Animated object/vehicle/state machine                                | Boat, train, compass, clockwork, pottery wheel, book interaction    |
| SVGator         | Tạo animation SVG timeline rồi export SVG/CSS/JS                     | Wave loop, pulley swing, train smoke, page flip, gear rotate         |
| Lenis           | Smooth scroll có kiểm soát                                           | Portfolio nhiều section, scroll storytelling, anchor navigation      |
| CSS Keyframes   | Animation nhẹ, idle loop, particle drift                             | Wave shimmer, rope sway, paper float, dust motes, lamp flicker       |
| Realtime Colors | Tạo và kiểm tra bảng màu xanh/nâu có contrast tốt                    | Token màu, palette variants, dark/light balance                      |
| Blush           | Illustration pack/custom character theo style calm/cinematic          | Hero scene, workspace illustration, travel/map illustration          |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; Rive dùng cho vật thể có trạng thái hoặc tương tác; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; CSS keyframes cho idle decoration; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration đồng bộ style.

---

## Danh sách phong cách

| ID                         | Tên phong cách                       | Vibe                                             | Hợp với                                      |
| -------------------------- | ------------------------------------ | ------------------------------------------------ | -------------------------------------------- |
| `blue-harbor-workshop`     | Blue Harbor Workshop Portfolio       | Cảng biển xanh, gỗ nâu, thuyền, dây neo, thủ công | Portfolio luật, business, creative, travel   |
| `azure-study-desk`         | Azure Study Desk Portfolio           | Bàn học gỗ, giấy kraft, xanh học thuật, yên tĩnh | Portfolio học thuật, luật, research, writing |
| `navy-train-journey`       | Navy Train Journey Portfolio         | Chuyến tàu đêm, vali da, vé giấy, chuyển động    | Portfolio kể chuyện, career journey          |
| `blueprint-clockwork`      | Blueprint Clockwork Portfolio        | Bản vẽ kỹ thuật xanh, bánh răng đồng, chính xác  | Portfolio dev, engineering, data, product    |
| `coastal-book-cabin`       | Coastal Book Cabin Portfolio         | Cabin ven biển, sách cũ, gỗ, đèn vàng, sóng xa   | Portfolio writer, education, humanities      |
| `ceramic-rain-studio`      | Ceramic Rain Studio Portfolio        | Xưởng gốm ngày mưa, xanh xám, đất nung nâu       | Portfolio art, craft, design, handmade       |

---


## 1. `blue-harbor-workshop` — Blue Harbor Workshop Portfolio

Portfolio như một xưởng nhỏ cạnh cảng biển: nền xanh dương rộng, sóng nhẹ, bến gỗ nâu, thuyền gỗ lắc theo nước, dây neo đung đưa và biển hiệu sơn tay. Theme có cảm giác bình tĩnh, chắc chắn, giàu chuyển động nhưng không rối.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Cảm xúc     | Calm, chắc chắn, tin cậy, thủ công, có chiều sâu                         |
| Hình khối   | Dock card, wooden sign, rope frame, wave divider, compass badge          |
| Không gian  | Nền xanh biển/xanh trời, bến gỗ nâu, hải đăng, thuyền, mây thấp          |
| Chuyển động | Boat bob, wave shimmer, rope sway, lighthouse sweep, gull path           |
| Điểm nhấn   | Thuyền gỗ nâu, cầu cảng, dây neo, biển hiệu gỗ, bánh lái, la bàn         |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EAF6FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#2379B8",
        colorTextBase: "#17324A",
        colorTextSecondary: "#5D7284",
        colorSuccess: "#5FAE9B",
        colorWarning: "#C58A45",
        colorInfo: "#6BB7E8",
        colorBorder: "#B9D9EC",
        borderRadius: 14,
        fontFamily: "'Nunito Sans', 'Fraunces', sans-serif",
    },
};

// CSS Variables
// --harbor-sky: #EAF6FF;
// --deep-blue: #2379B8;
// --navy-ink: #17324A;
// --wave-blue: #6BB7E8;
// --dock-brown: #8A5A32;
// --rope-tan: #C58A45;
// --wood-shadow: #5D3820;
// --foam-white: #FFFFFF;
// --sea-glass: #5FAE9B;
// --mist-border: #B9D9EC;
```

### Typography

- **Heading:** `Fraunces` có độ editorial, hợp biển hiệu gỗ và cảm giác thủ công.
- **Body:** `Nunito Sans` rõ, hiện đại, dễ đọc trên nền xanh sáng.

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Dock card reveal, page transition như mở cửa xưởng, project card hover    |
| Rive            | Boat bob/interact, compass needle spin, lighthouse click sweep             |
| SVGator         | Wave loop, rope sway, gull flight path, lighthouse beam sweep             |
| Lenis           | Smooth scroll qua các khu vực cảng, parallax wave/dock layer              |
| CSS Keyframes   | Boat idle bob, wave shimmer, cloud drift, sign swing                      |
| Realtime Colors | Tạo palette blue/brown đủ contrast, không bị quá pastel hoặc quá dark      |
| Blush           | Illustration harbor/workshop scene cho hero hoặc about                    |

### Layout ideas

- **Hero:** Bến cảng full-width, thuyền gỗ nâu ở foreground lắc nhẹ, hải đăng quét sáng ở nền xa.
- **About:** Profile card như wooden workshop sign treo bằng dây neo.
- **Projects:** Mỗi project là một crate/dock plank card, hover thì rope tag và wave line chuyển động.
- **Skills:** Skill compass hoặc nautical toolkit: anchor, knot, wheel, map, lantern.
- **Contact:** "Send from harbor" CTA, chai thư hoặc phong bì giấy kraft trôi theo sóng.

### Animation rules

| Sự kiện          | Effect                                             | Thư viện          |
| ---------------- | -------------------------------------------------- | ----------------- |
| Page load        | Sky fade-in + dock slide + boat bob entrance       | Framer Motion/CSS |
| Boat idle        | TranslateY 0→-8px→0, rotate ±1.5deg, 4s loop      | CSS/Rive          |
| Wave background  | Stroke/path shimmer, horizontal drift 12–20s loop  | SVG/CSS animation |
| Rope             | Sway từ transform-origin top, 3–5s loop            | CSS keyframes     |
| Lighthouse       | Beam sweep 8–12s loop, opacity pulse nhẹ           | SVGator/CSS       |
| Card hover       | Lift + wood shadow + rope tag tilt                 | Framer Motion     |
| Section entrance | Fade + y(24→0) + staggered dock plank reveal       | Framer Motion     |
| Contact success  | Message bottle float + foam ripple                 | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Harbor workshop shell
│   ├── routes.js                       ← dock, crates, compass, bottle-mail
│   └── theme.js
├── pages/
│   ├── HarborHeroPage.jsx              ← Hero với dock, boat, lighthouse
│   ├── DockProjectsPage.jsx            ← Projects dạng crate/dock cards
│   ├── CompassSkillsPage.jsx           ← Skills dạng compass/toolkit
│   └── BottleMailContactPage.jsx       ← Contact bottle/mail on waves
├── features/
│   ├── harbor-scene/
│   │   ├── HarborSkyBackground.jsx
│   │   ├── WaveLayer.jsx
│   │   ├── WoodenDockLayer.jsx
│   │   └── LighthouseSweep.jsx
│   ├── boat-object/
│   │   ├── BoatRiveController.jsx
│   │   ├── WoodenBoatIdle.jsx
│   │   └── RopeSwayReaction.jsx
│   ├── dock-projects/
│   │   ├── DockProjectGrid.jsx
│   │   ├── CrateProjectCard.jsx
│   │   └── RopeTagHover.jsx
│   └── compass-skills/
│       ├── CompassSkillWheel.jsx
│       ├── NauticalToolBadge.jsx
│       └── MapPinTooltip.jsx
├── components/
│   ├── layout/                         ← Harbor nav, wave page transition
│   └── ui/                             ← DockButton, WoodCard, RopeTag, CompassBadge
└── assets/blue-harbor-workshop/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                           | Dùng cho               | Gợi ý kỹ thuật                                            |
| ----------------------------- | --------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| `harbor-hero-scene.svg`       | Bầu trời xanh, sóng, bến gỗ, hải đăng, mây thấp           | Hero/background        | Tách sky, wave, dock, lighthouse beam để animate riêng    |
| `wooden-boat-set.svg`         | Thuyền gỗ nhiều trạng thái: idle, tilted, loaded, empty   | Hero/decor/object      | Tách thân thuyền, mái chèo, shadow để bob và rotate       |
| `dock-plank-cards.svg`        | Ván gỗ, crate, nail, label giấy kraft                     | Project cards          | Texture line nhẹ, dùng pattern opacity thấp               |
| `rope-knot-set.svg`           | Dây neo, nút thắt, rope frame, hanging sign               | Card frame/nav         | Stroke nâu/tan, transform-origin top cho sway             |
| `lighthouse-beam.svg`         | Hải đăng, beam light, cửa sổ, đá ven biển                 | Background/transition  | Beam là polygon/radialGradient opacity animated           |
| `nautical-icons.svg`          | Anchor, compass, helm, map, lantern, bottle, wave         | Nav/badge/icons        | Icon 24x24, currentColor + fill blue/brown                |
| `wave-foam-pattern.svg`       | Sóng line, foam dot, ripple rings                         | Divider/particle       | Path stroke-dasharray cho shimmer                         |
| `message-bottle-kraft.svg`    | Chai thư, giấy kraft, nút bần, dây buộc                   | Contact CTA            | Tách bottle, cork, note và ripple để animate success      |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu       | Quy định triển khai                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Theme ID           | Ghi rõ `blue-harbor-workshop` trong data/theme config và README của sub-project          |
| App shell          | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes     |
| Pages              | Có đủ harbor hero, dock projects, compass skills, bottle mail contact                    |
| Feature folders    | Tách `harbor-scene`, `boat-object`, `dock-projects`, `compass-skills`                    |
| UI components      | Có `DockButton`, `WoodCard`, `RopeTag`, `CompassBadge` dùng lại trong các page           |
| Asset folder       | Tạo `src/assets/blue-harbor-workshop/` và đủ 8 SVG files trong bảng asset phía trên      |
| Visual priority    | Nền xanh dương phải chiếm ưu thế; vật thể nâu là thuyền/gỗ/dây neo/sign, không lấn nền   |
| Motion             | Nhấn mạnh boat bob, wave shimmer, rope sway, lighthouse sweep                            |
| Accessibility      | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ         |
| Responsive         | Hero, dock cards, compass và contact assets phải về 1 cột ở mobile nhỏ                   |
| Reduced motion     | Có fallback `prefers-reduced-motion` để tắt boat loop, wave drift và rope sway           |
| Performance        | Giới hạn 20–30 particle/wave elements visible, lazy load scene SVG, optimize bằng SVGO    |

---


## 2. `azure-study-desk` — Azure Study Desk Portfolio

Portfolio như một bàn học gỗ đặt cạnh cửa sổ xanh: nền azure dịu, giấy kraft, sổ tay nâu, bút máy, sticky note và ánh sáng buổi sáng. Theme học thuật, gọn, chuyên nghiệp nhưng vẫn có chuyển động tinh tế.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Tập trung, học thuật, gọn gàng, đáng tin, reflective                  |
| Hình khối   | Notebook card, kraft tag, index tab, desk tray, paper stack           |
| Không gian  | Nền xanh azure, bàn gỗ nâu, giấy trắng/kraft, cửa sổ và bóng nắng     |
| Chuyển động | Page flip, pen underline draw, paper float, desk lamp glow             |
| Điểm nhấn   | Notebook nâu, giấy kraft, bút, kẹp giấy đồng, coffee coaster gỗ       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EFF8FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#2E86C1",
        colorTextBase: "#183044",
        colorTextSecondary: "#667989",
        colorSuccess: "#6BAE8F",
        colorWarning: "#B98245",
        colorInfo: "#8DCBF5",
        colorBorder: "#CFE5F4",
        borderRadius: 10,
        fontFamily: "'Source Sans 3', 'Libre Baskerville', sans-serif",
    },
};

// CSS Variables
// --desk-azure: #EFF8FF;
// --study-blue: #2E86C1;
// --ink-navy: #183044;
// --paper-white: #FFFFFF;
// --kraft-brown: #B98245;
// --wood-brown: #7B4D2E;
// --clip-brass: #C49A5A;
// --window-blue: #8DCBF5;
// --sage-check: #6BAE8F;
// --line-border: #CFE5F4;
```

### Typography

- **Heading:** `Libre Baskerville` tạo cảm giác học thuật, phù hợp portfolio luật/research.
- **Body:** `Source Sans 3` rõ, hiện đại, đọc tốt ở mật độ nội dung cao.

```css
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                           |
| --------------- | --------------------------------------------------------------- |
| Framer Motion   | Page stack reveal, notebook card hover, tab switch transition   |
| Rive            | Pen write interaction, lamp toggle glow, page corner flip        |
| SVGator         | Underline draw, paper float path, clock hand movement            |
| Lenis           | Smooth scroll như đọc từng trang notebook                       |
| CSS Keyframes   | Dust mote drift, paper lift, lamp glow, tab wiggle              |
| Realtime Colors | Kiểm contrast xanh azure/nâu kraft trên nền sáng                |
| Blush           | Study desk illustration, writing hand, window workspace          |

### Layout ideas

- **Hero:** Bàn gỗ nhìn từ trên xuống, notebook mở, bút vẽ underline dưới tên.
- **About:** Profile như trang đầu sổ tay, có tab thông tin cá nhân.
- **Projects:** Mỗi project là một research note hoặc folder card có kraft label.
- **Skills:** Skill index tabs theo nhóm: research, AI, writing, teamwork.
- **Contact:** Note card được kẹp vào clipboard, pen ký gửi message.

### Animation rules

| Sự kiện          | Effect                                             | Thư viện          |
| ---------------- | -------------------------------------------------- | ----------------- |
| Page load        | Desk shadow fade + notebook open + pen draw line   | Framer Motion/Rive|
| Paper idle       | Float 2–4px, rotate ±0.5deg, 5s loop               | CSS keyframes     |
| Page flip        | Corner fold rotateY nhẹ khi đổi section            | Framer Motion     |
| Pen underline    | Stroke-dashoffset draw 0.8–1.2s                    | SVG/CSS           |
| Lamp glow        | Warm brown/yellow glow pulse rất nhẹ               | CSS keyframes     |
| Card hover       | Lift + paper shadow + clip rotate                  | Framer Motion     |
| Tab active       | Slide indicator xanh + kraft tab pop               | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Azure study desk shell
│   ├── routes.js                     ← cover, notes, index-tabs, clipboard
│   └── theme.js
├── pages/
│   ├── StudyDeskHeroPage.jsx         ← Hero notebook + pen underline
│   ├── ResearchNotesProjectsPage.jsx ← Projects dạng research notes
│   ├── IndexTabsSkillsPage.jsx       ← Skills dạng tab/index cards
│   └── ClipboardContactPage.jsx      ← Contact clipboard + pen
├── features/
│   ├── desk-scene/
│   │   ├── DeskSurface.jsx
│   │   ├── WindowLightLayer.jsx
│   │   ├── PaperStackLayer.jsx
│   │   └── LampGlow.jsx
│   ├── writing-object/
│   │   ├── PenRiveController.jsx
│   │   ├── UnderlineDraw.jsx
│   │   └── PageFlipCorner.jsx
│   ├── research-notes/
│   │   ├── NoteProjectGrid.jsx
│   │   ├── ResearchNoteCard.jsx
│   │   └── CitationTag.jsx
│   └── index-skills/
│       ├── SkillIndexTabs.jsx
│       ├── PaperSkillBadge.jsx
│       └── DeskTooltip.jsx
├── components/
│   ├── layout/                       ← Desk nav, page stack transition
│   └── ui/                           ← NotebookCard, KraftTag, ClipButton, IndexTab
└── assets/azure-study-desk/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                | Dùng cho               | Gợi ý kỹ thuật                                      |
| --------------------------- | ---------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `study-desk-top.svg`        | Bàn gỗ, notebook, paper stack, window light    | Hero/background        | Tách shadow, light, notebook để parallax            |
| `notebook-pages.svg`        | Trang sổ, tab, margin line, corner fold        | About/projects         | Corner fold group riêng để flip                     |
| `kraft-paper-tags.svg`      | Label giấy kraft, tape, sticky note, folder tab| Badges/cards           | Texture noise nhẹ bằng pattern opacity thấp         |
| `pen-writing-set.svg`       | Bút máy, underline path, ink dot               | Hero/contact           | Stroke path dùng dashoffset                         |
| `desk-tool-icons.svg`       | Book, pen, clip, folder, magnifier, citation   | Nav/badge icons        | Icon 24x24, currentColor + fill brown/blue          |
| `lamp-window-light.svg`     | Đèn bàn, cửa sổ, tia sáng, dust mote           | Decoration             | RadialGradient và particle opacity loop             |
| `clipboard-contact.svg`     | Clipboard gỗ, paper form, brass clip           | Contact CTA            | Clip rotate nhẹ khi success                         |
| `paper-dust-particles.svg`  | Dust mote, paper scrap, tiny ink sparkle       | Particle layer         | Random CSS vars cho delay/path                      |

---


## 3. `navy-train-journey` — Navy Train Journey Portfolio

Portfolio như một chuyến tàu đêm chạy qua nền xanh navy: toa tàu xanh, vali da nâu, vé giấy, đồng hồ ga và khói tàu. Theme có storytelling mạnh, hợp trình bày hành trình học tập/nghề nghiệp theo từng ga.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Đi xa, trưởng thành, cinematic, có nhịp, nostalgic                   |
| Hình khối   | Ticket card, luggage tag, station board, rail divider, timeline track |
| Không gian  | Nền navy/blue dusk, ga tàu, ray, vali da, ánh đèn vàng nâu            |
| Chuyển động | Train slide, wheel rotate, smoke drift, ticket punch, lamp flicker    |
| Điểm nhấn   | Vali da nâu, vé giấy kraft, bánh xe tàu, đồng hồ ga, biển ga gỗ       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#10263F",
        colorBgContainer: "#17395C",
        colorPrimary: "#6FB6E8",
        colorTextBase: "#F3F8FC",
        colorTextSecondary: "#B9CADA",
        colorSuccess: "#8BC6A5",
        colorWarning: "#C18A4B",
        colorInfo: "#A8D7FF",
        colorBorder: "#315777",
        borderRadius: 12,
        fontFamily: "'Space Grotesk', 'Nunito Sans', sans-serif",
    },
};

// CSS Variables
// --station-navy: #10263F;
// --train-blue: #17395C;
// --signal-blue: #6FB6E8;
// --ticket-cream: #F3F8FC;
// --platform-mist: #B9CADA;
// --luggage-brown: #8A5B38;
// --brass-light: #C18A4B;
// --rail-border: #315777;
// --window-glow: #A8D7FF;
```

### Typography

- **Heading:** `Space Grotesk` rõ, có cảm giác hệ thống biển ga/timeline hiện đại.
- **Body:** `Nunito Sans` mềm hơn, giữ độ đọc trên nền navy.

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                          |
| --------------- | -------------------------------------------------------------- |
| Framer Motion   | Train entrance, station timeline reveal, ticket card hover     |
| Rive            | Train wheel loop, suitcase latch open, clock hand tick         |
| SVGator         | Smoke drift, lamp flicker, rail parallax, ticket punch         |
| Lenis           | Smooth scroll theo các ga/timeline                             |
| CSS Keyframes   | Wheel rotate, smoke rise, platform light flicker               |
| Realtime Colors | Kiểm contrast nền navy và text sáng                            |
| Blush           | Train station/travel illustration cho hero                     |

### Layout ideas

- **Hero:** Train chạy ngang qua foreground, tên xuất hiện như station board.
- **About:** Boarding pass profile, avatar như ảnh trên travel card.
- **Projects:** Timeline theo ga; mỗi project là ticket/card của một station.
- **Skills:** Luggage carousel hoặc suitcase compartments.
- **Contact:** Ticket booth CTA, vé được punch rồi gửi.

### Animation rules

| Sự kiện          | Effect                                               | Thư viện          |
| ---------------- | ---------------------------------------------------- | ----------------- |
| Page load        | Train slide-in + station board flip                  | Framer Motion     |
| Train idle       | Wheel rotate + small carriage vibration              | Rive/CSS          |
| Smoke            | Drift upward, scale, fade, random delay              | CSS/SVGator       |
| Timeline reveal  | Track line draw + station dots stagger               | Framer Motion/SVG |
| Ticket hover     | Lift + punch mark pop + paper shadow                 | CSS/Framer Motion |
| Lamp             | Flicker opacity 0.85–1 with warm glow                | CSS keyframes     |
| Contact success  | Ticket stamp + suitcase latch click                  | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Navy train shell
│   ├── routes.js                     ← platform, stations, luggage, ticket-booth
│   └── theme.js
├── pages/
│   ├── TrainHeroPage.jsx             ← Hero train + station board
│   ├── StationProjectsPage.jsx       ← Projects dạng station timeline
│   ├── LuggageSkillsPage.jsx         ← Skills dạng suitcase compartments
│   └── TicketBoothContactPage.jsx    ← Contact ticket punch
├── features/
│   ├── train-scene/
│   │   ├── PlatformBackground.jsx
│   │   ├── TrainCarriage.jsx
│   │   ├── SmokeTrailLayer.jsx
│   │   └── StationLampFlicker.jsx
│   ├── journey-timeline/
│   │   ├── RailTimeline.jsx
│   │   ├── StationProjectCard.jsx
│   │   └── TicketPunchHover.jsx
│   └── luggage-skills/
│       ├── SuitcaseSkillGrid.jsx
│       ├── LuggageTagBadge.jsx
│       └── ClockTooltip.jsx
├── components/
│   ├── layout/                       ← Station nav, rail transition
│   └── ui/                           ← TicketCard, LuggageTag, StationButton, RailDivider
└── assets/navy-train-journey/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                              | Dùng cho               | Gợi ý kỹ thuật                                      |
| ---------------------------- | -------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `train-carriage-set.svg`     | Đầu tàu, toa, bánh xe, cửa sổ, đèn           | Hero/scene             | Bánh xe group riêng để rotate                       |
| `station-platform.svg`       | Ga tàu, ray, đèn, biển station board         | Background             | Layer parallax và lamp glow                         |
| `ticket-luggage-set.svg`     | Vé giấy, vali da, luggage tag, passport      | Cards/contact          | Paper texture + brown leather highlight             |
| `smoke-steam-particles.svg`  | Khói tàu, hơi nước, dust particles           | Particle layer         | Animate scale/fade/drift                            |
| `rail-timeline-icons.svg`    | Station dot, rail, clock, signal, bell       | Timeline/nav           | Stroke currentColor, fill blue/brown                |
| `ticket-punch-stamp.svg`     | Punch mark, stamp, ink pad, brass clip       | Hover/contact success  | Stamp pop + punch mask                              |
| `suitcase-compartment.svg`   | Vali mở, ngăn kỹ năng, dây da                | Skills section         | Lid rotateX nhẹ nếu dùng Rive                       |
| `station-window-glow.svg`    | Cửa sổ tàu, light reflection, rain streak    | Background detail      | Opacity shimmer                                     |

---


## 4. `blueprint-clockwork` — Blueprint Clockwork Portfolio

Portfolio như một bản vẽ kỹ thuật xanh với các bánh răng đồng/nâu đang vận hành. Theme chính xác, thông minh, phù hợp portfolio dev, engineering, data hoặc product.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Logic, chính xác, technical, tập trung, có hệ thống                   |
| Hình khối   | Blueprint grid, gear badge, brass dial, ruler card, schematic panel   |
| Không gian  | Nền xanh blueprint, line grid, annotations, bánh răng đồng/nâu        |
| Chuyển động | Gear rotate, dial sweep, ruler slide, blueprint line draw             |
| Điểm nhấn   | Bánh răng đồng, thước gỗ, đồng hồ cơ, pin, label giấy nâu             |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#0E3557",
        colorBgContainer: "#F5FBFF",
        colorPrimary: "#2F9AE0",
        colorTextBase: "#10263D",
        colorTextSecondary: "#5D7080",
        colorSuccess: "#54B59A",
        colorWarning: "#B77935",
        colorInfo: "#9ED8FF",
        colorBorder: "#9EC7E4",
        borderRadius: 8,
        fontFamily: "'IBM Plex Sans', 'IBM Plex Mono', sans-serif",
    },
};

// CSS Variables
// --blueprint-deep: #0E3557;
// --blueprint-line: #9ED8FF;
// --panel-white: #F5FBFF;
// --tech-blue: #2F9AE0;
// --ink-blue: #10263D;
// --gear-brass: #B77935;
// --wood-ruler: #8A5A2E;
// --success-teal: #54B59A;
// --grid-border: #9EC7E4;
```

### Typography

- **Heading:** `IBM Plex Sans` gọn, kỹ thuật nhưng không lạnh.
- **Body/Code:** `IBM Plex Mono` cho labels, coordinates, metric chips.

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                              |
| --------------- | ------------------------------------------------------------------ |
| Framer Motion   | Blueprint panel reveal, schematic line draw, card hover            |
| Rive            | Gear train interaction, dial calibration, switch toggle            |
| SVGator         | Gear rotation, ruler slide, coordinate ping, circuit path draw     |
| Lenis           | Smooth scroll qua schematic sections                               |
| CSS Keyframes   | Grid shimmer, dial sweep, gear idle rotate                         |
| Realtime Colors | Kiểm contrast blueprint dark và panel light                        |
| Blush           | Technical workspace/diagram illustration                           |

### Layout ideas

- **Hero:** Blueprint grid với tên như title block, bánh răng đồng quay chậm ở góc.
- **About:** Specification sheet/profile panel.
- **Projects:** Mỗi project là schematic card có metric, status, blueprint preview.
- **Skills:** Gear system; mỗi gear là một nhóm kỹ năng.
- **Contact:** Brass switch hoặc calibration dial gửi message.

### Animation rules

| Sự kiện          | Effect                                           | Thư viện          |
| ---------------- | ------------------------------------------------ | ----------------- |
| Page load        | Grid draw + title block slide + gear start       | Framer Motion/CSS |
| Gear idle        | Rotate 10–18s loop, alternating direction        | CSS/Rive          |
| Blueprint line   | Stroke-dashoffset draw                           | SVG/CSS           |
| Card hover       | Blueprint zoom + brass corner marker             | Framer Motion     |
| Dial             | Sweep 0→180deg then settle                       | Rive/SVGator      |
| Skill reveal     | Gear teeth stagger + label fade                  | Framer Motion     |
| Reduced motion   | Tắt gear rotate, giữ static schematic            | CSS media query   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Blueprint clockwork shell
│   ├── routes.js                   ← schematic, modules, gear-system, calibrate
│   └── theme.js
├── pages/
│   ├── BlueprintHeroPage.jsx       ← Hero blueprint grid + gears
│   ├── SchematicProjectsPage.jsx   ← Projects dạng schematic panels
│   ├── GearSkillsPage.jsx          ← Skills dạng gear train
│   └── CalibrationContactPage.jsx  ← Contact dial/switch
├── features/
│   ├── blueprint-scene/
│   │   ├── BlueprintGrid.jsx
│   │   ├── CoordinateMarkers.jsx
│   │   ├── SchematicLineLayer.jsx
│   │   └── BrassGearCluster.jsx
│   ├── clockwork-object/
│   │   ├── GearRiveController.jsx
│   │   ├── DialSweep.jsx
│   │   └── RulerSlide.jsx
│   └── schematic-projects/
│       ├── SchematicGrid.jsx
│       ├── ProjectSpecPanel.jsx
│       └── StatusMetricBadge.jsx
├── components/
│   ├── layout/                     ← Blueprint nav, schematic transition
│   └── ui/                         ← SpecCard, GearBadge, BrassButton, GridDivider
└── assets/blueprint-clockwork/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                             | Dùng cho               | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `blueprint-grid.svg`        | Grid, axis, title block, measurement lines  | Background             | Pattern SVG reusable, opacity thấp                  |
| `brass-gear-set.svg`        | Gear nhiều cỡ, axle, washer, screw          | Hero/skills/object     | Group center đúng để rotate                         |
| `schematic-lines.svg`       | Circuit/path lines, arrows, labels          | Projects/transition    | Stroke-dasharray cho line draw                      |
| `ruler-compass-set.svg`     | Thước gỗ, compass, protractor, pencil       | Decoration/about       | Brown objects làm điểm nhấn                         |
| `dial-switch-controls.svg`  | Dial, toggle, brass switch, indicator       | Contact/settings       | Tách needle/switch để animate                       |
| `technical-icons.svg`       | Module, database, code, chip, bolt, graph   | Nav/badge icons        | Icon 24x24, mono stroke                             |
| `coordinate-particles.svg`  | Dots, crosshair, ping rings                 | Particle layer         | Ping scale/fade loop                                |
| `spec-label-tags.svg`       | Label paper, pin, annotation card           | Cards/tooltips         | Kraft/brown labels trên nền xanh                    |

---


## 5. `coastal-book-cabin` — Coastal Book Cabin Portfolio

Portfolio như một cabin đọc sách ven biển: nền xanh biển dịu, gỗ nâu, sách cũ, đèn vàng và sóng xa ngoài cửa sổ. Theme ấm, trí thức, hợp portfolio viết, giáo dục, luật, humanities.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Ấm áp, suy tư, trưởng thành, văn chương, coastal calm              |
| Hình khối   | Book card, wooden shelf, window frame, bookmark tag, warm lamp      |
| Không gian  | Cabin gỗ, nền xanh biển ngoài cửa, sách nâu, giấy kem              |
| Chuyển động | Page turn, curtain sway, sea shimmer, lamp flicker, bookmark slide  |
| Điểm nhấn   | Kệ gỗ, sách cũ, bookmark da nâu, đèn bàn, khung cửa sổ              |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#E8F4FA",
        colorBgContainer: "#FFFDF7",
        colorPrimary: "#2F7FA8",
        colorTextBase: "#243847",
        colorTextSecondary: "#6C7B83",
        colorSuccess: "#6E9F8A",
        colorWarning: "#B9814C",
        colorInfo: "#8AC5E5",
        colorBorder: "#D7C5A8",
        borderRadius: 12,
        fontFamily: "'Lora', 'Nunito Sans', serif",
    },
};

// CSS Variables
// --cabin-sky: #E8F4FA;
// --coastal-blue: #2F7FA8;
// --book-ink: #243847;
// --paper-cream: #FFFDF7;
// --shelf-brown: #7A4E2D;
// --bookmark-leather: #B9814C;
// --lamp-gold: #E6BD75;
// --sea-blue: #8AC5E5;
// --sage-book: #6E9F8A;
// --aged-border: #D7C5A8;
```

### Typography

- **Heading:** `Lora` văn chương, phù hợp sách và cabin.
- **Body:** `Nunito Sans` cân bằng sự hiện đại và dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                           |
| --------------- | --------------------------------------------------------------- |
| Framer Motion   | Page turn, shelf reveal, book card hover, modal open            |
| Rive            | Book open interaction, lamp click, bookmark slide               |
| SVGator         | Curtain sway, sea shimmer, page flip timeline                   |
| Lenis           | Smooth scroll như đọc từng chương                              |
| CSS Keyframes   | Lamp glow, sea shimmer, dust drift, curtain sway                |
| Realtime Colors | Tạo palette xanh biển/nâu sách đủ ấm và đủ contrast             |
| Blush           | Cabin reading nook illustration                                 |

### Layout ideas

- **Hero:** Cửa sổ cabin nhìn ra biển, book stack foreground, title như tên chương.
- **About:** Profile như trang sách mở, avatar trong bookplate.
- **Projects:** Kệ sách; mỗi project là một spine/card rút ra khi hover.
- **Skills:** Bookmark hoặc library card catalog.
- **Contact:** Gửi postcard từ cabin, đèn sáng và sóng shimmer.

### Animation rules

| Sự kiện          | Effect                                       | Thư viện          |
| ---------------- | -------------------------------------------- | ----------------- |
| Page load        | Window light fade + book open + wave shimmer | Framer Motion/Rive|
| Book hover       | Spine lift + bookmark slide                  | Framer Motion     |
| Curtain          | Sway nhẹ 5–7s loop                           | CSS/SVGator       |
| Sea outside      | Horizontal shimmer and tiny wave line drift  | CSS keyframes     |
| Lamp             | Warm glow pulse, random flicker rất nhẹ      | CSS keyframes     |
| Page turn        | RotateY with paper shadow                    | Framer Motion     |
| Contact success  | Postcard slide into envelope                 | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Coastal book cabin shell
│   ├── routes.js                     ← window, bookshelf, bookmarks, postcard
│   └── theme.js
├── pages/
│   ├── CabinWindowHeroPage.jsx       ← Hero cabin window + sea
│   ├── BookshelfProjectsPage.jsx     ← Projects dạng bookshelf
│   ├── BookmarkSkillsPage.jsx        ← Skills dạng bookmarks/library card
│   └── PostcardContactPage.jsx       ← Contact postcard/envelope
├── features/
│   ├── cabin-scene/
│   │   ├── WindowSeaView.jsx
│   │   ├── CurtainSway.jsx
│   │   ├── LampGlowLayer.jsx
│   │   └── DustMoteLayer.jsx
│   ├── book-object/
│   │   ├── BookRiveController.jsx
│   │   ├── PageTurn.jsx
│   │   └── BookmarkSlide.jsx
│   └── bookshelf-projects/
│       ├── BookshelfGrid.jsx
│       ├── BookProjectCard.jsx
│       └── BookplateBadge.jsx
├── components/
│   ├── layout/                       ← Cabin nav, chapter transition
│   └── ui/                           ← BookCard, BookmarkTag, ShelfButton, PostcardPanel
└── assets/coastal-book-cabin/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                         | Dùng cho               | Gợi ý kỹ thuật                                      |
| --------------------------- | --------------------------------------- | ---------------------- | --------------------------------------------------- |
| `cabin-window-sea.svg`      | Cửa sổ, biển xanh, mây, sóng xa         | Hero/background        | Sea layer shimmer, curtain group riêng              |
| `old-book-stack.svg`        | Sách cũ, spine, page, bookmark          | Hero/projects          | Tách book spine để hover lift                       |
| `wooden-bookshelf.svg`      | Kệ gỗ, ngăn sách, label holder          | Projects layout        | Wood grain line opacity thấp                        |
| `bookmark-library-tags.svg` | Bookmark da, library card, bookplate    | Skills/about           | Brown accents trên paper cream                      |
| `warm-lamp-set.svg`         | Đèn bàn, glow, pull chain               | Decoration/contact     | Glow radialGradient pulse                           |
| `postcard-envelope.svg`     | Postcard, stamp, envelope, seal         | Contact CTA            | Slide postcard into envelope                        |
| `reading-icons.svg`         | Book, pen, quote, shell, cup, star      | Nav/badge icons        | currentColor + fill blue/brown                      |
| `dust-wave-particles.svg`   | Dust motes, tiny wave, paper flecks     | Particle layer         | Animate drift with random delay                     |

---


## 6. `ceramic-rain-studio` — Ceramic Rain Studio Portfolio

Portfolio như một xưởng gốm trong ngày mưa: nền xanh xám, giọt mưa trên cửa kính, bàn gỗ, đất nung nâu và bàn xoay gốm chuyển động. Theme handmade, mềm, phù hợp art/craft/design.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Tĩnh, thủ công, chậm rãi, tinh tế, handmade                          |
| Hình khối   | Ceramic bowl card, clay tag, rain glass panel, wood tray             |
| Không gian  | Xanh mưa/blue gray, đất nung nâu, bàn gỗ, cửa kính, glaze highlight  |
| Chuyển động | Pottery wheel spin, rain drop slide, clay shape morph, steam drift    |
| Điểm nhấn   | Chén gốm đất nung, bàn xoay, dụng cụ gỗ, vệt men, giọt mưa            |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#E7F0F4",
        colorBgContainer: "#FBFCFA",
        colorPrimary: "#4F8EAD",
        colorTextBase: "#263B45",
        colorTextSecondary: "#6D7E84",
        colorSuccess: "#7FA68D",
        colorWarning: "#A66A43",
        colorInfo: "#9CC7DA",
        colorBorder: "#C9D9DD",
        borderRadius: 16,
        fontFamily: "'Quicksand', 'Nunito Sans', sans-serif",
    },
};

// CSS Variables
// --rain-blue: #E7F0F4;
// --studio-blue: #4F8EAD;
// --wet-ink: #263B45;
// --ceramic-white: #FBFCFA;
// --clay-brown: #A66A43;
// --wood-tool: #7B5032;
// --sage-glaze: #7FA68D;
// --glass-blue: #9CC7DA;
// --rain-border: #C9D9DD;
```

### Typography

- **Heading:** `Quicksand` tròn, mềm, hợp handmade/craft.
- **Body:** `Nunito Sans` rõ ràng, không làm theme quá trẻ con.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                             |
| --------------- | ----------------------------------------------------------------- |
| Framer Motion   | Ceramic card reveal, clay morph section, tray hover               |
| Rive            | Pottery wheel spin, clay forming, tool interaction                |
| SVGator         | Rain drop slide, steam drift, glaze shine sweep                   |
| Lenis           | Smooth scroll chậm như đi qua studio                              |
| CSS Keyframes   | Rain slide, wheel slow rotate, steam drift, glaze shimmer         |
| Realtime Colors | Kiểm palette xanh mưa/nâu đất nung đủ dịu và đủ contrast          |
| Blush           | Ceramic studio illustration                                       |

### Layout ideas

- **Hero:** Cửa sổ mưa xanh, pottery wheel ở foreground với chén đất nung xoay nhẹ.
- **About:** Profile như ceramic maker mark/card trên clay tag.
- **Projects:** Mỗi project là một ceramic tile/bowl card trên wooden tray.
- **Skills:** Tool rack: sponge, ribbon tool, brush, kiln, glaze.
- **Contact:** Clay stamp CTA; nhấn gửi thì stamp in lên tag.

### Animation rules

| Sự kiện          | Effect                                           | Thư viện          |
| ---------------- | ------------------------------------------------ | ----------------- |
| Page load        | Rain glass fade + pottery wheel spin-in          | Framer Motion/Rive|
| Wheel idle       | Rotate 12–18s loop rất chậm                      | CSS/Rive          |
| Rain drops       | Slide downward, stagger delay, opacity fade      | CSS/SVGator       |
| Clay morph       | Shape scale/path morph khi hover hoặc scroll     | Rive/SVGator      |
| Glaze highlight  | Shine sweep trên ceramic card                    | CSS keyframes     |
| Card hover       | Lift + clay shadow + tiny tool nudge             | Framer Motion     |
| Contact success  | Stamp press + clay mark reveal                   | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Ceramic rain studio shell
│   ├── routes.js                       ← rain-window, tray, tool-rack, clay-stamp
│   └── theme.js
├── pages/
│   ├── RainStudioHeroPage.jsx          ← Hero rain window + pottery wheel
│   ├── CeramicTrayProjectsPage.jsx     ← Projects dạng ceramic tiles
│   ├── ToolRackSkillsPage.jsx          ← Skills dạng tool rack
│   └── ClayStampContactPage.jsx        ← Contact clay stamp
├── features/
│   ├── rain-studio-scene/
│   │   ├── RainWindowLayer.jsx
│   │   ├── PotteryWheel.jsx
│   │   ├── SteamDriftLayer.jsx
│   │   └── WoodenTableLayer.jsx
│   ├── clay-object/
│   │   ├── ClayRiveController.jsx
│   │   ├── ClayShapeMorph.jsx
│   │   └── GlazeShineSweep.jsx
│   └── ceramic-projects/
│       ├── CeramicTileGrid.jsx
│       ├── BowlProjectCard.jsx
│       └── MakerMarkBadge.jsx
├── components/
│   ├── layout/                         ← Studio nav, rain transition
│   └── ui/                             ← CeramicCard, ClayTag, ToolButton, RainPanel
└── assets/ceramic-rain-studio/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                            | Dùng cho               | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------ | ---------------------- | --------------------------------------------------- |
| `rain-window-studio.svg`    | Cửa kính mưa, bàn gỗ, ánh sáng xanh        | Hero/background        | Rain streak group riêng để slide                    |
| `pottery-wheel-set.svg`     | Bàn xoay, đất sét, chén, shadow            | Hero/object            | Wheel center đúng để rotate                         |
| `ceramic-bowl-tiles.svg`    | Bowl, cup, tile, glaze mark, clay plate    | Project cards          | Shine overlay riêng                                 |
| `wooden-tool-rack.svg`      | Dụng cụ gỗ, brush, sponge, ribbon tool     | Skills section         | Tool hover nudge                                    |
| `clay-tags-stamps.svg`      | Clay tag, stamp, maker mark, label         | About/contact          | Stamp mark reveal bằng mask                         |
| `rain-steam-particles.svg`  | Giọt mưa, steam, wet sparkle               | Particle layer         | Drop slide + steam drift                            |
| `ceramic-icons.svg`         | Kiln, bowl, brush, hand, droplet, tray     | Nav/badge icons        | currentColor + fill blue/clay                       |
| `glaze-patterns.svg`        | Vệt men xanh, speckle, imperfect line      | Decoration/cards       | Pattern fill opacity thấp                           |

---


## Quy chuẩn triển khai cho Catalog 6

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer Motion variants, spring, easing, reduced motion
│   ├── riveSetup.js          ← Rive state machine config, asset preload
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-scene>/        ← SVG scene, background layers, decoration components
│   ├── <theme-object>/       ← Rive/SVG moving object, state controller, reactions
│   ├── <theme-animation>/    ← SVG animated elements, particle layers
│   └── <theme-content>/      ← Content-specific features (timeline, cards, toolkit...)
├── components/
│   ├── layout/               ← Route/page shell, navigation, transition wrapper
│   └── ui/                   ← Buttons, cards, badges, modal, drawer
└── assets/<theme-id>/        ← SVG files, Rive files, pattern files, icon sets
```

### Phân vai tool rõ ràng

| Việc cần làm                    | Tool nên dùng                            | Ghi chú triển khai                                |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| Page/route transition           | Framer Motion                            | Dùng variants/AnimatePresence                     |
| Hover/tap card, modal, drawer   | Framer Motion                            | Giữ UI animation gần component React              |
| Moving object state machine     | Rive                                     | Boat, train, compass, gear, wheel, book states    |
| Smooth scroll                   | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion       |
| Scroll progress transform       | Framer Motion `useScroll`/`useTransform` | Parallax, scene depth, progress indicator         |
| SVG scene animation             | SVGator export hoặc CSS keyframes        | Wave, smoke, rain, page turn, gear rotate         |
| Particle/decoration idle        | CSS keyframes                            | Dust, rain, foam, smoke, paper flecks             |
| Icon/badge micro-interaction    | CSS transition                           | Hover lift, rotate, glow, nudge                   |
| Complex SVG path animation      | SVG stroke-dashoffset + CSS              | Blueprint line draw, underline, rail draw         |
| Interactive micro-animation     | Rive                                     | CTA reaction, form success, loading state         |

### Performance rules

- Lazy load SVG scene components và Rive files bằng React.lazy + Suspense.
- Không render quá nhiều animated SVG elements cùng lúc (giới hạn 20–30 animated items visible).
- Rive files nên dưới 100KB mỗi file, preload cho hero moving object.
- Với mobile, giảm số particle/decoration hoặc tắt idle animation.
- Text chính phải là HTML/CSS, không đặt trong SVG để giữ accessibility và responsive.
- Lenis và animation loop phải cleanup khi component unmount.
- Tôn trọng `prefers-reduced-motion`: tắt idle loop, particle drift, object bob/rotate, rain/smoke/wave loops.
- SVG files nên được optimize bằng SVGO trước khi ship.
- Dùng `will-change` có chọn lọc, chỉ cho elements thật sự animate liên tục.

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

### Nguyên tắc thiết kế chung cho Catalog 6

| Nguyên tắc                | Mô tả                                                                  |
| ------------------------- | ---------------------------------------------------------------------- |
| Tông màu chủ đạo          | Xanh dương làm nền chính: sky, azure, navy, blueprint, rain blue       |
| Điểm nhấn nâu             | Nâu xuất hiện qua vật thể: gỗ, giấy kraft, da, đồng, sách, đất nung    |
| Cảm giác chung            | Calm, grounded, cinematic, tin cậy, có chiều sâu                       |
| SVG-first approach        | Ưu tiên SVG 2D cho scene, background, object, pattern, icon            |
| Moving-object driven      | Mỗi theme có vật chuyển động chính thay cho mascot bắt buộc            |
| Animation philosophy      | Chậm, tự nhiên, có trọng lượng, hợp vật lý của vật thể                 |
| Icon density              | Vừa phải, dùng icon chức năng và vật thể theo bối cảnh                 |
| Accessibility             | Text luôn là HTML, contrast đủ trên nền xanh, reduced motion ready     |
| Mobile-first decoration   | Giảm particle trên mobile, giữ object chính và content rõ ràng         |
| Reusable SVG symbols      | Dùng `<symbol>` và `<use>` để tái sử dụng elements trong SVG           |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js`, `src/app/riveSetup.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa tất cả SVG files và Rive files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Thiết kế moving object Rive file với ít nhất 3 states (idle, interact, success/special).
- [ ] Tách scene, object animation và content features thành folder riêng.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền xanh.
- [ ] Preload Rive files cho hero object, lazy load cho sections khác.
- [ ] Kiểm tra điểm nhấn nâu không lấn át nền xanh dương chủ đạo.

---

_Cập nhật lần cuối: 2026-05-23 — Catalog 6: Blue & Brown motion themes với nền xanh dương chủ đạo, vật thể nâu chuyển động tự nhiên, SVG 2D assets và animation calm/cinematic._
