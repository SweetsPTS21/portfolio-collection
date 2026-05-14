# 🎀 Catalog 2 — Feminine Bright Portfolio Themes

> Tài liệu này khởi tạo thêm 5 theme portfolio cho nữ theo hướng sáng, rực rỡ, cute, nhiều asset SVG 2D và nhiều animation.  
> Mỗi theme có bảng màu, typography, layout, animation rules, component notes và danh sách asset SVG nên tự tạo trong sub-project.
> `src` structure không bị ép theo dạng one-page; mỗi theme có thể dùng multi-page, route theo scene, modal route, gallery route hoặc interactive shell riêng nếu concept cần.

---

## UI library / design tool stack

Các theme trong `catalog-2` mặc định ưu tiên asset SVG 2D, motion mượt và màu sắc sáng. Khi triển khai theme mới, bổ sung stack sau:

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

> `SVGator`, `Realtime Colors` và `Blush` là công cụ thiết kế/asset pipeline, không bắt buộc là runtime package trong app.

| Library / Tool  | Vai trò chính trong catalog này                                      | Nên dùng cho                                                 |
| --------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| Framer Motion   | Animation UI React, page transition, modal/drawer, card hover         | Section entrance, route transition, shared layout, CTA hover |
| Rive            | Animated 2D icon/mascot/state machine                                 | Mascot, CTA state, loading, empty state, tiny reaction       |
| SVGator         | Tạo animation SVG timeline rồi export SVG/CSS/JS                      | Sticker, underline, ribbon, sparkle, icon động phức tạp      |
| Lenis           | Smooth scroll có kiểm soát                                            | Portfolio nhiều section, scroll reveal, anchor navigation    |
| Realtime Colors | Tạo và kiểm tra bảng màu sáng, contrast, palette variants             | Token màu, theme preview, dark/light hoặc seasonal variant   |
| Blush           | Illustration pack/custom character theo style cute/feminine           | Hero illustration, empty state, about avatar, decor scene    |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; Rive dùng cho interactive micro-animation; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration đồng bộ style.

---

## Danh sách phong cách

| ID                    | Tên phong cách                         | Vibe                               | Hợp với                            |
| --------------------- | -------------------------------------- | ---------------------------------- | ---------------------------------- |
| `kawaii-stationery`   | Kawaii Stationery Portfolio            | Cute, học tập, sticker, pastel pop | Portfolio sinh viên, designer, dev |
| `fruit-soda-shop`     | Fruit Soda Shop Portfolio              | Tươi, juicy, rực rỡ, bubbly        | Portfolio trẻ trung, năng lượng    |
| `ribbon-craft-studio` | Ribbon Craft Studio Portfolio          | Girly, handmade, bow, soft-bright  | Portfolio nữ tính, creative        |
| `pop-idol-stage`      | Pop Idol Stage Portfolio               | Sân khấu, star, sparkle, tự tin    | Portfolio nổi bật, cá tính         |
| `magical-girl-ui`     | Magical Girl UI Portfolio              | Fantasy cute, biến hình, dreamy    | Portfolio visual mạnh, đáng nhớ    |

---

## 1. `kawaii-stationery` — Kawaii Stationery Portfolio

Portfolio như một bàn học nhiều sticker: notebook, bút gel, washi tape, sticky notes, icon doodle. Theme này sáng, cute, dễ áp dụng cho portfolio sinh viên hoặc frontend/designer muốn cảm giác gần gũi.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Dễ thương, chăm chỉ, vui, có tổ chức                                |
| Hình khối   | Card bo 14–18px, viền dashed, sticker outline trắng                 |
| Không gian  | Nền giấy sáng, grid notebook, nhiều sticker nhỏ                     |
| Chuyển động | Sticker bounce, bút underline chạy, sticky note flip nhẹ            |
| Điểm nhấn   | Doodle SVG, tape label, icon heart/star, checklist học tập          |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF8FD",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF6FB1",
        colorTextBase: "#392033",
        colorTextSecondary: "#8A6680",
        colorSuccess: "#54D7A0",
        colorWarning: "#FFD166",
        colorInfo: "#6EC6FF",
        colorBorder: "#FFD1E8",
        borderRadius: 16,
        fontFamily: "'Nunito', 'M PLUS Rounded 1c', sans-serif",
    },
};

// CSS Variables
// --paper-pink: #FFF8FD;
// --bubble-pink: #FF6FB1;
// --gel-blue: #6EC6FF;
// --mint-check: #54D7A0;
// --sunny-yellow: #FFD166;
// --lavender-note: #CDB4FF;
```

### Typography

- **Heading:** `M PLUS Rounded 1c` cho cảm giác rounded/kawaii.
- **Body:** `Nunito` dễ đọc, mềm và thân thiện.

```css
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                               |
| --------------- | -------------------------------------------------------------------- |
| Framer Motion   | Sticky note flip, flashcard deck, route transition như lật trang vở |
| Rive            | Mascot bút/chú mèo học tập, CTA gửi postcard, loading sticker       |
| SVGator         | Animate doodle underline, washi tape peel, sticker pop sequence     |
| Lenis           | Smooth scroll giữa notebook pages, anchor tới flashcard/projects    |
| Realtime Colors | Tạo palette pastel pop có contrast tốt cho text trên giấy hồng      |
| Blush           | Illustration học tập/avatar cute cho hero hoặc empty state          |

### Layout ideas

- **Hero:** Nền notebook grid, tên như tiêu đề trên bìa vở, sticker bay quanh avatar.
- **About:** Dạng profile card kẹp bằng washi tape.
- **Projects:** Mỗi project là một trang note hoặc flashcard có sticker trạng thái.
- **Skills:** Checklist hoặc pencil case, mỗi nhóm skill là một màu bút.
- **Contact:** Postcard nhỏ với stamp SVG và nút gửi dạng sticker.

### Animation rules

| Sự kiện          | Effect                                      | Thư viện             |
| ---------------- | ------------------------------------------- | -------------------- |
| Page load        | Sticker pop-in theo stagger                 | CSS / React Motion   |
| Section entrance | Fade + translateY(18px) + scale(0.98 → 1)   | IntersectionObserver |
| Card hover       | Lift + rotate ±1.5deg                       | CSS transition       |
| Tape hover       | Tape peel nhẹ bằng rotate/translate         | CSS transition       |
| Doodle underline | Stroke draw dưới heading                    | SVG/CSS animation    |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Routing shell hoặc notebook shell
│   ├── routes.js                   ← home, notebook, projects, contact
│   └── theme.js
├── pages/
│   ├── NotebookHomePage.jsx        ← Trang bìa vở / dashboard cute
│   ├── StudyProfilePage.jsx        ← About dạng profile page
│   ├── FlashcardProjectsPage.jsx   ← Projects dạng flashcard deck
│   └── PostcardContactPage.jsx     ← Contact postcard
├── features/
│   ├── stationery-scene/
│   │   ├── NotebookBackground.jsx
│   │   ├── StickerLayer.jsx
│   │   ├── WashiTapeLabel.jsx
│   │   └── PencilUnderline.jsx
│   ├── flashcards/
│   │   ├── FlashcardDeck.jsx
│   │   └── FlashcardProjectCard.jsx
│   └── checklist/
│       ├── ChecklistBoard.jsx
│       └── SkillChecklistItem.jsx
├── components/
│   ├── layout/                     ← Header, mobile nav, page transition
│   └── ui/                         ← StickerButton, StickyNoteCard, DoodleBadge
└── assets/kawaii-stationery/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                  | Dùng cho                 | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------------ | ------------------------ | --------------------------------------------------- |
| `sticker-sheet.svg`         | Heart, star, smile, flower, bow, cloud sticker   | Floating sticker layer   | Stroke trắng 4px, filter shadow nhẹ                 |
| `notebook-grid.svg`         | Pattern giấy kẻ ô và margin line                 | Background               | Dùng `<pattern>`, opacity thấp để không rối text     |
| `washi-tape-set.svg`        | 5 tape màu có pattern chấm/sọc/checker           | Label, card corner       | Clip-path nhẹ, texture bằng rect opacity thấp        |
| `gel-pen-doodles.svg`       | Underline, arrow, sparkle, circle highlight      | Heading accent           | Stroke round cap, animate stroke-dashoffset         |
| `school-supply-icons.svg`   | Pen, eraser, notebook, ruler, paper clip         | Skill badge, nav icon    | Icon 24x24, dùng `currentColor`                     |
| `cute-stamp-postcard.svg`   | Stamp, envelope, tiny heart mail                 | Contact section          | Tách stamp thành symbol để reuse                    |
| `sticky-note-shapes.svg`    | Note vuông, note tròn, label, bookmark           | Project cards            | Path hơi lệch để có cảm giác handmade               |

---

## 2. `fruit-soda-shop` — Fruit Soda Shop Portfolio

Theme như một quầy nước trái cây mùa hè: màu citrus, dâu, soda xanh, bong bóng trong suốt, icon trái cây 2D. Hợp portfolio muốn rực rỡ và vui nhưng vẫn clean.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| Cảm xúc     | Tươi, juicy, năng lượng, tích cực                           |
| Hình khối   | Bubble card, pill button, circle badge, bo 20px             |
| Không gian  | Nền trắng sáng với bubble layer và fruit slices             |
| Chuyển động | Bubble float, fruit spin nhẹ, soda fizz, card splash hover  |
| Điểm nhấn   | Citrus slice, strawberry, cherry, glass cup, straw, sparkle |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F4FDFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF4F8B",
        colorTextBase: "#243044",
        colorTextSecondary: "#647089",
        colorSuccess: "#20D6A1",
        colorWarning: "#FFCA3A",
        colorError: "#FF6B6B",
        colorBorder: "#BFEFFF",
        borderRadius: 20,
        fontFamily: "'Baloo 2', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --strawberry: #FF4F8B;
// --lemon: #FFCA3A;
// --lime: #8BE05E;
// --soda-blue: #6DDCFF;
// --orange-pop: #FF9F1C;
// --grape-pop: #B892FF;
```

### Typography

- **Heading:** `Baloo 2` tạo cảm giác bubbly, tròn, vui.
- **Body:** `Nunito` cho đoạn mô tả dài.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                              |
| --------------- | ------------------------------------------------------------------- |
| Framer Motion   | Bubble card hover, flavor drawer, menu item stagger, CTA bounce     |
| Rive            | Ly soda/icon fruit đổi state khi hover hoặc khi gửi contact         |
| SVGator         | Bubble fizz, fruit slice spin, straw wiggle, splash blob animation  |
| Lenis           | Smooth scroll cho flavor menu dài và section reveal mềm            |
| Realtime Colors | Tạo combo citrus/strawberry/soda-blue có độ tương phản ổn           |
| Blush           | Illustration quầy nước/nhân vật cute cho about hoặc order section   |

### Layout ideas

- **Hero:** Ly soda lớn bằng SVG 2D ở một bên, tên nằm trong bubble headline.
- **Projects:** Project card như flavor menu: Strawberry App, Lemon Dashboard, Mint Tool.
- **Skills:** Fruit chips theo nhóm tech stack.
- **About:** Story dạng receipt/order ticket cute.
- **Contact:** "Order a collab" CTA với button pill và bubble trail.

### Animation rules

| Sự kiện          | Effect                                  | Thư viện           |
| ---------------- | --------------------------------------- | ------------------ |
| Bubble idle      | Float lên xuống lệch pha                | CSS keyframes      |
| Fruit decoration | Rotate 3–8deg chậm                      | CSS keyframes      |
| Card hover       | Splash blob scale từ góc card           | CSS pseudo-element |
| Button hover     | Bubble trail chạy ngang                 | CSS keyframes      |
| Section entrance | Slide-up + sparkle fade                 | React Motion       |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Soda shop shell
│   ├── routes.js                   ← counter, menu, flavors, order
│   └── theme.js
├── pages/
│   ├── SodaCounterPage.jsx         ← Hero + flavor highlights
│   ├── FlavorMenuPage.jsx          ← Project menu dạng multi-page
│   ├── AboutRecipePage.jsx         ← About như recipe/order ticket
│   └── OrderContactPage.jsx        ← Contact như quầy order
├── features/
│   ├── soda-scene/
│   │   ├── BubbleBackground.jsx
│   │   ├── FruitStickerLayer.jsx
│   │   ├── SodaCupHero.jsx
│   │   └── FizzParticles.jsx
│   ├── flavor-menu/
│   │   ├── FlavorMenuGrid.jsx
│   │   ├── FlavorCard.jsx
│   │   └── FlavorDetailDrawer.jsx
│   └── soda-order/
│       ├── OrderTicket.jsx
│       └── BubbleCTA.jsx
├── components/
│   ├── layout/                     ← Shop nav, animated route container
│   └── ui/                         ← BubbleButton, FruitChip, SplashBadge
└── assets/fruit-soda-shop/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                      | Dùng cho              | Gợi ý kỹ thuật                                      |
| --------------------------- | ---------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `soda-cup-hero.svg`         | Ly soda, đá viên, straw, bubble, trái cây trang trí  | Hero                  | Dùng gradient trong suốt, giữ shape rõ trên mobile  |
| `fruit-sticker-sheet.svg`   | Lemon, orange, strawberry, cherry, kiwi, blueberry   | Sticker decoration    | Mỗi fruit có outline trắng và shadow nhẹ            |
| `bubble-pattern.svg`        | Bubble nhiều cỡ                                      | Background            | SVG pattern opacity 0.12–0.22                       |
| `splash-blobs.svg`          | Blob splash nhiều màu                                | Hover layer/card      | Dùng CSS mask hoặc absolute SVG                     |
| `menu-ticket-frame.svg`     | Khung receipt/order ticket                           | About/project card    | Viền dashed, góc bo nhẹ, notch ở cạnh               |
| `fizz-particles.svg`        | Dot, sparkle, mini bubble                            | Animation particle    | Reuse `<symbol>`, animate bằng CSS                  |
| `fruit-icons-24.svg`        | Icon line fruit đơn giản                             | Skill chips/nav       | `currentColor`, stroke 2px, round cap               |

---

## 3. `ribbon-craft-studio` — Ribbon Craft Studio Portfolio

Portfolio như một studio handmade với ribbon, bow, thread, charm và nhãn vải. Theme nữ tính nhưng sáng, không quá nhạt; dùng màu hồng san hô, xanh mint, vàng butter và tím lilac.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                        |
| ----------- | ------------------------------------------------------------ |
| Cảm xúc     | Handmade, mềm mại, cute, tinh tế                             |
| Hình khối   | Card như label vải, bow sticker, scallop edge, border stitch |
| Không gian  | Nền sáng với pattern chỉ may và charm nhỏ                    |
| Chuyển động | Ribbon wave, bow wiggle, stitch line draw                    |
| Điểm nhấn   | Bow SVG lớn, label tag, thread line, charm heart/star        |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF9F4",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF7A8A",
        colorTextBase: "#3B2734",
        colorTextSecondary: "#8A6578",
        colorSuccess: "#6FE7C4",
        colorWarning: "#FFE27A",
        colorInfo: "#B99CFF",
        colorBorder: "#FFC8D2",
        borderRadius: 14,
        fontFamily: "'Fraunces', 'Nunito Sans', serif",
    },
};

// CSS Variables
// --coral-ribbon: #FF7A8A;
// --mint-thread: #6FE7C4;
// --butter: #FFE27A;
// --lilac-charm: #B99CFF;
// --cream-fabric: #FFF9F4;
// --rose-stitch: #FFC8D2;
```

### Typography

- **Heading:** `Fraunces` mềm, cá tính, có chất boutique.
- **Body:** `Nunito Sans` dễ đọc, cân bằng với nhiều decoration.

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Craft kit modal, label card lift, route transition như mở hộp quà    |
| Rive            | Bow/charm CTA, form success, tiny sewing mascot reaction              |
| SVGator         | Ribbon wave, stitch line draw, charm swing, bow wiggle timeline       |
| Lenis           | Smooth scroll theo atelier/process pages                              |
| Realtime Colors | Kiểm thử palette coral/mint/butter/lilac tránh quá nhạt hoặc mờ text  |
| Blush           | Illustration handmade/craft girl cho hero hoặc profile page           |

### Layout ideas

- **Hero:** Một ribbon uốn ngang qua viewport, tên nằm như nhãn boutique.
- **About:** Fabric label card có stitch border.
- **Projects:** Mỗi project như một craft kit với charm/bow riêng.
- **Skills:** Thread spool list: mỗi nhóm skill là một cuộn chỉ.
- **Contact:** Gift tag CTA, nút dạng bow.

### Animation rules

| Sự kiện          | Effect                                    | Thư viện        |
| ---------------- | ----------------------------------------- | --------------- |
| Hero ribbon      | Wave path nhẹ bằng transform              | CSS keyframes   |
| Bow decoration   | Wiggle khi hover hoặc khi vào viewport    | CSS keyframes   |
| Stitch border    | Stroke-dashoffset draw quanh card         | SVG/CSS         |
| Section entrance | Fade + clip-path reveal như mở hộp quà    | CSS / Motion    |
| Project hover    | Charm swing + card lift                   | CSS transition  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Craft studio shell
│   ├── routes.js                   ← atelier, kits, process, gift-tag
│   └── theme.js
├── pages/
│   ├── AtelierHomePage.jsx         ← Hero dạng ribbon atelier
│   ├── CraftKitProjectsPage.jsx    ← Project kits, có detail route/modal
│   ├── FabricProfilePage.jsx       ← About + timeline như nhãn vải
│   └── GiftTagContactPage.jsx      ← Contact gift tag
├── features/
│   ├── ribbon-scene/
│   │   ├── RibbonHeroWave.jsx
│   │   ├── BowStickerLayer.jsx
│   │   ├── StitchFrame.jsx
│   │   └── CharmSwing.jsx
│   ├── craft-kits/
│   │   ├── CraftKitGrid.jsx
│   │   ├── CraftKitCard.jsx
│   │   └── CraftKitDetail.jsx
│   └── thread-skills/
│       ├── ThreadSpoolList.jsx
│       └── ThreadBadge.jsx
├── components/
│   ├── layout/                     ← Studio nav, route/page wrapper
│   └── ui/                         ← BowButton, FabricLabelCard, CharmBadge
└── assets/ribbon-craft-studio/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                  | Dùng cho             | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------------ | -------------------- | --------------------------------------------------- |
| `ribbon-wave-hero.svg`      | Ribbon dài uốn sóng, highlight và shadow mềm    | Hero background      | Path fill coral, thêm linearGradient nhẹ            |
| `bow-sticker-set.svg`       | Bow nhiều kiểu: classic, tiny, double, charm bow | Decoration/card      | Stroke trắng, có thể rotate/scale bằng CSS          |
| `stitch-border-frame.svg`   | Khung stitch, scallop edge, dashed thread        | Card frame           | Path stroke-dasharray để animate draw               |
| `craft-charms.svg`          | Heart, star, pearl, flower charm                 | Hover decoration     | Gắn vào card bằng absolute, animation swing         |
| `thread-spool-icons.svg`    | Cuộn chỉ, kim, kéo, pin cushion                  | Skills/nav icon      | Icon đơn nét, màu đổi bằng CSS                      |
| `fabric-pattern.svg`        | Pattern sợi vải/chấm nhỏ                         | Background/card      | Dùng `feTurbulence` nhẹ hoặc pattern line opacity   |
| `gift-tag-shapes.svg`       | Gift tag, label, price tag, tiny ribbon          | Contact/project meta | Tạo nhiều symbol để reuse                           |

---

## 4. `pop-idol-stage` — Pop Idol Stage Portfolio

Theme như một sân khấu pop idol ban ngày: star, spotlight pastel, confetti, microphone, ticket, light stick. Màu sáng và rực, không dùng nền tối cyberpunk.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                        |
| ----------- | ------------------------------------------------------------ |
| Cảm xúc     | Tự tin, lấp lánh, nổi bật, energetic                         |
| Hình khối   | Star card, ticket card, pill badge, stage panel              |
| Không gian  | Nền sáng, radial spotlight pastel, confetti layer            |
| Chuyển động | Spotlight sweep, sparkle twinkle, confetti drift, star pulse |
| Điểm nhấn   | Star frame, mic SVG, ticket, marquee dots, light stick       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF7FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF4FD8",
        colorTextBase: "#2E2448",
        colorTextSecondary: "#746A91",
        colorSuccess: "#45E6B3",
        colorWarning: "#FFE45E",
        colorInfo: "#5CA8FF",
        colorBorder: "#F6B8FF",
        borderRadius: 12,
        fontFamily: "'Fredoka', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --idol-pink: #FF4FD8;
// --stage-blue: #5CA8FF;
// --mint-lightstick: #45E6B3;
// --star-yellow: #FFE45E;
// --spot-lilac: #D7B5FF;
// --ticket-border: #F6B8FF;
```

### Typography

- **Heading:** `Fredoka` cho headline tròn, vui, nổi bật.
- **Body:** `Poppins` gọn, hiện đại, hợp CTA và nav.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                               |
| --------------- | -------------------------------------------------------------------- |
| Framer Motion   | Ticket hover, curtain/modal reveal, star badge spring, route motion |
| Rive            | Light stick, star burst, fan-letter CTA, loading sparkle             |
| SVGator         | Spotlight sweep, marquee dots, confetti drift, sparkle burst         |
| Lenis           | Smooth scroll qua stage/setlist/backstage/fan-letter sections        |
| Realtime Colors | Tạo palette idol-pink/stage-blue/star-yellow sáng nhưng không chói   |
| Blush           | Illustration performer/fan-letter cute cho backstage/about           |

### Layout ideas

- **Hero:** Stage hero với spotlight SVG, tên nằm trong star marquee.
- **About:** Backstage pass card, có QR-style decoration SVG.
- **Projects:** Concert tickets hoặc setlist cards, mỗi project là một track.
- **Skills:** Light stick badges và star meters.
- **Contact:** Fan-letter CTA hoặc "Book the show" ticket button.

### Animation rules

| Sự kiện          | Effect                                   | Thư viện           |
| ---------------- | ---------------------------------------- | ------------------ |
| Spotlight        | Sweep qua hero 8–12s loop                | CSS keyframes      |
| Sparkles         | Twinkle opacity + scale                  | CSS keyframes      |
| Confetti         | Drift chậm, lệch pha từng item           | CSS keyframes      |
| Ticket hover     | Tear notch shadow + translateY(-6px)     | CSS transition     |
| Star marquee     | Marquee dot pulse stagger                | CSS animation      |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Stage shell, có thể dùng route transition
│   ├── routes.js                   ← stage, setlist, backstage, fan-mail
│   └── theme.js
├── pages/
│   ├── IdolStagePage.jsx           ← Hero sân khấu + CTA
│   ├── SetlistProjectsPage.jsx     ← Project như concert setlist/tickets
│   ├── BackstageProfilePage.jsx    ← About như backstage pass
│   └── FanLetterContactPage.jsx    ← Contact fan-letter
├── features/
│   ├── stage-scene/
│   │   ├── StageSpotlight.jsx
│   │   ├── ConfettiLayer.jsx
│   │   ├── StarMarquee.jsx
│   │   └── MarqueeLightController.jsx
│   ├── setlist/
│   │   ├── SetlistBoard.jsx
│   │   ├── TicketCard.jsx
│   │   └── TrackProjectDetail.jsx
│   └── light-stick-skills/
│       ├── LightStickBadge.jsx
│       └── SkillEncorePanel.jsx
├── components/
│   ├── layout/                     ← Stage nav, page curtain transition
│   └── ui/                         ← StarButton, SparkleHeading, TicketPill
└── assets/pop-idol-stage/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                  | Dùng cho             | Gợi ý kỹ thuật                                      |
| --------------------------- | ------------------------------------------------ | -------------------- | --------------------------------------------------- |
| `stage-spotlights.svg`      | Cone light pastel, stage arcs, glow circles      | Hero background      | Dùng radialGradient, opacity 0.35–0.6               |
| `star-marquee-frame.svg`    | Khung star với bóng đèn tròn                     | Hero title/project   | Dot lights tách class để pulse stagger              |
| `idol-confetti.svg`         | Star, ribbon, circle, triangle confetti          | Floating layer       | Tạo symbol nhiều màu, animate translate/rotate      |
| `microphone-lightstick.svg` | Mic, light stick, headphone, music note          | Icon set             | Stroke round, fill bright, dễ đổi màu bằng CSS      |
| `concert-ticket-card.svg`   | Ticket frame có notch hai bên                    | Project card         | ViewBox rộng, border dashed hoặc perforation dots   |
| `sparkle-burst.svg`         | Burst, twinkle, shine lines                      | Button/heading       | Animate scale + opacity                             |
| `backstage-pass.svg`        | ID pass, lanyard, mini QR block                  | About section        | Dùng rect grid đơn giản thay QR thật                |

---

## 5. `magical-girl-ui` — Magical Girl UI Portfolio

Theme fantasy cute lấy cảm hứng từ wand, compact, star, moon, transformation card. Phù hợp portfolio muốn cực kỳ visual, nhiều animation nhưng vẫn đọc được nếu giữ section rõ ràng.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                        |
| ----------- | ------------------------------------------------------------ |
| Cảm xúc     | Mơ mộng, cute, rực rỡ, có cảm giác biến hình                 |
| Hình khối   | Starburst, oval gem, card bo lớn, magic circle, ribbon       |
| Không gian  | Nền sáng gradient hồng-vàng-xanh, star dust SVG              |
| Chuyển động | Wand trail, star orbit, magic circle rotate, card transform  |
| Điểm nhấn   | Wand SVG, compact badge, moon/star, gem button, sparkle dust |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF5FE",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF5BC8",
        colorTextBase: "#33234A",
        colorTextSecondary: "#776995",
        colorSuccess: "#6DF2D6",
        colorWarning: "#FFE66D",
        colorInfo: "#8CB8FF",
        colorBorder: "#FFC7F2",
        borderRadius: 18,
        fontFamily: "'Coiny', 'Quicksand', sans-serif",
    },
};

// CSS Variables
// --magic-pink: #FF5BC8;
// --moon-yellow: #FFE66D;
// --aqua-gem: #6DF2D6;
// --sky-gem: #8CB8FF;
// --dream-lilac: #C7A8FF;
// --soft-white: #FFF5FE;
```

### Typography

- **Display:** `Coiny` cho tiêu đề vui, fantasy, rất nhận diện.
- **Body:** `Quicksand` rounded, nhẹ và dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Coiny&family=Quicksand:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                               |
| --------------- | -------------------------------------------------------------------- |
| Framer Motion   | Spell card flip, compact modal, transformation route reveal          |
| Rive            | Wand/gem CTA, star companion, compact mirror open state              |
| SVGator         | Magic circle rotate, wand trail draw, constellation line animation   |
| Lenis           | Smooth scroll cho spellbook/constellation pages                      |
| Realtime Colors | Tạo palette magic-pink/moon-yellow/aqua-gem đủ sáng và dễ đọc        |
| Blush           | Illustration magical girl/fantasy character cho hero/profile         |

### Layout ideas

- **Hero:** Magic circle sau avatar/tên, wand trail dẫn mắt tới CTA.
- **About:** Transformation card: mặt trước là profile, mặt sau là timeline/values.
- **Projects:** Spell cards, mỗi project có icon gem và power level.
- **Skills:** Constellation map, mỗi nhóm skill là một chòm sao.
- **Contact:** Compact mirror CTA mở ra form/link liên hệ.

### Animation rules

| Sự kiện          | Effect                                      | Thư viện             |
| ---------------- | ------------------------------------------- | -------------------- |
| Magic circle     | Rotate rất chậm + counter-rotate icon       | CSS keyframes        |
| Wand trail       | Sparkle path follow pointer hoặc load path  | SVG/CSS/JS nhẹ       |
| Card hover       | Flip/transform nhẹ, không lật text quá dài  | CSS transform        |
| Star orbit       | Orbit quanh hero/avatar                     | CSS keyframes        |
| Section entrance | Starburst reveal + fade                     | React Motion / CSS   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Magical shell / transformation flow
│   ├── routes.js                   ← home, spellbook, constellation, compact
│   └── theme.js
├── pages/
│   ├── MagicalHomePage.jsx         ← Hero với magic circle
│   ├── SpellbookProjectsPage.jsx   ← Project spellbook, có detail pages
│   ├── TransformationProfilePage.jsx
│   ├── ConstellationSkillsPage.jsx
│   └── CompactContactPage.jsx
├── features/
│   ├── magical-scene/
│   │   ├── MagicCircle.jsx
│   │   ├── WandTrail.jsx
│   │   ├── StarOrbitLayer.jsx
│   │   └── SparkleDust.jsx
│   ├── spellbook/
│   │   ├── SpellbookLayout.jsx
│   │   ├── SpellCard.jsx
│   │   └── SpellDetailPage.jsx
│   └── constellation/
│       ├── ConstellationMap.jsx
│       └── SkillStarNode.jsx
├── components/
│   ├── layout/                     ← Magic nav, route reveal, modal portal
│   └── ui/                         ← GemButton, StarBadge, SparkleDivider
└── assets/magical-girl-ui/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                      | Dùng cho              | Gợi ý kỹ thuật                                      |
| ---------------------------- | ---------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `magic-circle.svg`           | Vòng phép, star ticks, orbit dots, moon marks        | Hero/about background | Tách layer để rotate ngược chiều nhau               |
| `wand-and-trail.svg`         | Wand, ribbon trail, sparkle path                     | Hero/CTA animation    | Path có stroke-dasharray để tạo trail draw          |
| `gem-button-shapes.svg`      | Gem oval, heart gem, star gem                        | CTA/button/badge      | Dùng linearGradient và highlight nhỏ                |
| `spell-card-frame.svg`       | Card frame starburst, corner ornament                | Project cards         | Giữ vùng content sạch, ornament ở góc               |
| `moon-star-stickers.svg`     | Moon, star, planet, bow, tiny wing                   | Floating decoration   | Outline trắng, drop shadow nhẹ                      |
| `constellation-map.svg`      | Chòm sao, node, line nối, tiny sparkle               | Skills section        | Animate line draw bằng stroke-dashoffset            |
| `compact-mirror.svg`         | Compact mirror, blush circle, shine                  | Contact/about         | Có thể animate open/close bằng rotate               |
| `sparkle-dust-pattern.svg`   | Star dust pattern nhiều cỡ                           | Background overlay    | Opacity thấp, không che text                        |

---

## Quy chuẩn chung cho 5 theme

### Src structure linh hoạt

Không bắt buộc giữ cấu trúc one-page `App.jsx` + nhiều section như các portfolio trước. Chọn cấu trúc theo trải nghiệm của theme:

| Trải nghiệm theme                   | Cấu trúc nên dùng                                         | Khi nào dùng                                      |
| ----------------------------------- | --------------------------------------------------------- | ------------------------------------------------- |
| Landing đơn giản                    | `pages/HomePage.jsx` + `sections/`                        | Portfolio ít project, muốn scroll nhanh          |
| Multi-page theo chủ đề              | `app/routes.js` + `pages/*Page.jsx`                       | Theme có concept mạnh như shop, stage, spellbook |
| Scene/interactive shell             | `features/<theme>-scene/` + `components/layout/`          | Cần background động, sticker layer, canvas/SVG    |
| Project detail riêng                | `pages/ProjectDetailPage.jsx` hoặc `features/*/Detail.jsx` | Project cần nhiều ảnh, PDF, write-up, demo link   |
| Modal/drawer route                  | `features/*/*Drawer.jsx` + route state                    | Muốn mở chi tiết mà không rời bối cảnh chính      |
| Asset-heavy theme                   | `assets/<theme-id>/` + `features/*/assetMap.js`           | Có nhiều SVG cần map tên, variant, màu, motion    |

Gợi ý tổ chức mặc định:

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   ├── motionConfig.js
│   ├── lenisSetup.js
│   └── theme.js
├── pages/
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   ├── ProjectDetailPage.jsx
│   └── ContactPage.jsx
├── features/
│   └── <theme-feature>/
│       ├── components/
│       ├── hooks/
│       ├── data.js
│       └── assetMap.js
├── components/
│   ├── layout/
│   └── ui/
├── assets/<theme-id>/
│   ├── svgator/
│   ├── rive/
│   ├── blush/
│   └── svg/
└── data/portfolioData.js
```

Nguyên tắc: layout/page quyết định trải nghiệm điều hướng; feature giữ logic và animation riêng của chủ đề; `ui/` chỉ chứa component dùng lại được. Nếu theme giống một "thế giới nhỏ" như soda shop, idol stage hoặc spellbook, nên tách `pages/` và `features/` thay vì nhồi tất cả vào section one-page.

### Motion / asset pipeline

| Layer              | Cách tổ chức                                                         |
| ------------------ | -------------------------------------------------------------------- |
| Framer Motion      | Đặt variants dùng chung trong `src/app/motionConfig.js`              |
| Lenis              | Khởi tạo ở layout/root app, cleanup khi unmount, tắt khi reduce motion |
| Rive               | Đặt `.riv` trong `src/assets/<theme-id>/rive/`, wrapper trong feature |
| SVGator            | Export SVG/CSS/JS vào `src/assets/<theme-id>/svgator/`               |
| Realtime Colors    | Lưu palette/token đã chọn vào `src/app/theme.js` hoặc CSS variables  |
| Blush              | Export illustration vào `src/assets/<theme-id>/blush/` và tối ưu SVG |

Runtime nên chỉ giữ những gì app cần. Realtime Colors dùng ở giai đoạn thiết kế palette; Blush và SVGator dùng để xuất asset; Framer Motion, Rive và Lenis là phần có thể chạy trong app.

### Mật độ asset SVG

- Mỗi theme nên có ít nhất 6–8 file SVG tự tạo trong `src/assets/<theme-id>/`.
- Nếu dùng Blush, vẫn cần đồng bộ lại màu theo palette theme, tránh asset lệch tone.
- Nếu dùng SVGator, export theo từng component nhỏ thay vì một file SVG khổng lồ khó responsive.
- Ưu tiên SVG dạng symbol/icon sheet để reuse trong React component.
- Không dùng asset tải ngoài nếu có thể tự vẽ bằng path, rect, circle, ellipse, polygon.
- Asset lớn nên có viewBox rõ ràng, không hardcode width/height để responsive dễ hơn.

### Motion style

| Nhóm animation        | Khuyến nghị                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Entrance              | Stagger 60–120ms, opacity + translateY + scale nhẹ                               |
| Idle decoration       | Loop 4–12s, lệch delay từng item, tránh chuyển động cùng nhịp                    |
| Hover                 | 180–300ms, lift/rotate/sparkle ngắn, không làm text nhảy layout                  |
| SVG draw              | Dùng `stroke-dasharray` + `stroke-dashoffset` cho underline, stitch, constellation |
| Reduced motion        | Tắt idle loop, giữ opacity/transform transition ngắn hoặc bỏ animation           |
| Smooth scroll         | Lenis chỉ bật cho scroll trải nghiệm; không dùng nếu page có form/modal dài      |
| Rive state            | Dùng state machine cho hover/click/success, tránh autoplay liên tục quá nhiều    |

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

### Cấu trúc asset gợi ý

```txt
src/assets/<theme-id>/
├── background-pattern.svg
├── hero-illustration.svg
├── sticker-sheet.svg
├── icon-set.svg
├── card-frame.svg
├── divider.svg
├── particles.svg
├── decorative-badges.svg
├── svgator/
│   ├── animated-stickers.svg
│   └── animated-divider.svg
├── rive/
│   └── mascot-or-cta.riv
└── blush/
    └── character-illustration.svg
```

### Checklist khi áp dụng theme

- [ ] Khai báo theme ID trong `README.md` của sub-project.
- [ ] Cài `framer-motion`, `@rive-app/react-canvas`, `lenis` nếu theme dùng motion stack.
- [ ] Chọn structure phù hợp: one-page, multi-page, route scene, modal/drawer hoặc project detail.
- [ ] Copy bảng màu vào `src/theme.js` hoặc CSS variables.
- [ ] Dùng Realtime Colors để kiểm tra contrast và tạo palette variant trước khi code.
- [ ] Import đúng Google Fonts trong `src/index.css`.
- [ ] Tạo thư mục `src/assets/<theme-id>/` và thêm SVG tự tạo.
- [ ] Đặt asset SVGator trong `src/assets/<theme-id>/svgator/`.
- [ ] Đặt asset Rive trong `src/assets/<theme-id>/rive/` và tạo wrapper component riêng.
- [ ] Đặt illustration Blush trong `src/assets/<theme-id>/blush/`, tối ưu màu và viewBox.
- [ ] Tạo component nền/decor riêng để không trộn animation vào section content.
- [ ] Kiểm tra `prefers-reduced-motion`.
- [ ] Tắt hoặc giảm Lenis/idle animation khi người dùng bật reduced motion.
- [ ] Kiểm tra responsive ở 375px, 768px, 1280px.
- [ ] Đảm bảo text không bị sticker/particle che trên mobile.

---

_Cập nhật lần cuối: 2026-05-14 — Bổ sung motion/design stack: Framer Motion, Rive, SVGator, Lenis, Realtime Colors và Blush cho 5 theme portfolio nữ sáng, rực rỡ, cute._
