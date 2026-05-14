# 💫 Catalog 3 — Feminine 3D Motion Portfolio Themes

> Catalog này tập trung vào portfolio nữ có màu sáng, UI nịnh mắt, cute, nhiều animation 3D và micro-interaction.  
> Khác `catalog-2`, các theme ở đây ưu tiên trải nghiệm motion-led: hero 3D, scene chuyển động, tương tác theo scroll/cursor, illustration Rive và section transition mượt.

## UI library stack

Các theme trong catalog này mặc định có thể dùng thêm:

```bash
npm install framer-motion gsap @splinetool/react-spline @rive-app/react-canvas
```

| Library       | Vai trò chính trong catalog này                                      | Nên dùng cho                                      |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------- |
| Framer Motion | Page transition, card hover, layout animation, modal/drawer animation | UI layer, route transition, reusable components   |
| GSAP          | ScrollTrigger, timeline nhiều bước, cursor parallax, scene choreography | Scroll storytelling, sequence phức tạp            |
| Spline        | 3D hero/object/room/planet scene                                      | Object 3D chính, background scene, interactive 3D |
| Rive          | 2D animated character/icon/state machine                              | Mascot, icon state, CTA, loading, reaction        |

> Nguyên tắc: Spline/Rive là visual asset runtime; Framer Motion điều khiển UI React; GSAP điều khiển timeline dài, scroll và choreography. Không trộn hết mọi thứ vào một component.

---

## Danh sách phong cách

| ID                    | Tên phong cách                         | Vibe                                | Motion trọng tâm                       |
| --------------------- | -------------------------------------- | ----------------------------------- | -------------------------------------- |
| `pastel-orbit-room`   | Pastel Orbit Room Portfolio            | Căn phòng 3D pastel, cute, dreamy   | Spline room + Framer page transitions  |
| `crystal-bloom-lab`   | Crystal Bloom Lab Portfolio            | Pha lê, hoa, glow, nữ tính          | GSAP scroll + Spline crystal objects   |
| `sweet-ui-arcade`     | Sweet UI Arcade Portfolio              | Game UI cute, candy, vui, pop       | Rive UI reactions + GSAP arcade flow   |
| `cloud-cosmetic-case` | Cloud Cosmetic Case Portfolio          | Beauty case, cloud, clean, glossy   | Spline product-like scene + Rive icons |
| `ribbon-galaxy-stage` | Ribbon Galaxy Stage Portfolio          | Sân khấu thiên hà sáng, idol-cute   | GSAP stage timeline + Framer modals    |

---

## 1. `pastel-orbit-room` — Pastel Orbit Room Portfolio

Portfolio như một căn phòng 3D nhỏ lơ lửng trong không gian pastel. Bàn học, laptop, kệ sách, khung ảnh và các hành tinh mini đại diện cho từng phần của portfolio.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| Cảm xúc     | Dreamy, cute, cá nhân, sáng, cozy                           |
| Hình khối   | 3D rounded, đồ vật nhỏ, orbit ring, card kính mờ nhẹ        |
| Không gian  | Hero là Spline room full-bleed, UI nổi bên trên             |
| Chuyển động | Object orbit, camera drift, card float, page fade/scale     |
| Điểm nhấn   | Mini laptop, moon lamp, pastel planets, floating notes      |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F8F3FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF7AC8",
        colorTextBase: "#30264B",
        colorTextSecondary: "#766A98",
        colorSuccess: "#78E7C6",
        colorWarning: "#FFE37A",
        colorInfo: "#8DBDFF",
        colorBorder: "#E7D8FF",
        borderRadius: 18,
        fontFamily: "'Quicksand', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --orbit-pink: #FF7AC8;
// --moon-lilac: #C8A8FF;
// --sky-blue: #8DBDFF;
// --mint-glow: #78E7C6;
// --cream-star: #FFEAC2;
```

### Library usage

| Library       | Cách dùng trong theme                                                   |
| ------------- | ------------------------------------------------------------------------ |
| Spline        | Hero room 3D, camera orbit nhẹ, object hover/click chuyển section        |
| Framer Motion | Route fade, card spring, modal project detail, shared layout highlight   |
| GSAP          | Optional: scroll camera cue hoặc object parallax ngoài Spline            |
| Rive          | Mini assistant/icon reaction ở nav hoặc loading scene                    |

### Layout / flow

- **Home:** Spline room chiếm viewport đầu, các object là entry point.
- **Projects:** Project cards như floating windows quanh laptop.
- **About:** Profile panel như khung ảnh trong phòng.
- **Skills:** Orbit map quanh hành tinh mini.
- **Contact:** Moon lamp CTA, bật sáng khi hover.

### Animation rules

| Sự kiện          | Effect                                            | Tool           |
| ---------------- | ------------------------------------------------- | -------------- |
| Page load        | Spline scene fade-in + UI stagger                 | Framer Motion  |
| Object hover     | Glow ring + object label                          | Spline/Framer  |
| Route change     | Scale 0.98 → 1, blur 6px → 0                      | Framer Motion  |
| Scroll           | Camera/object parallax nhẹ                        | GSAP optional  |
| CTA hover        | Rive icon đổi state + sparkle                     | Rive           |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── motionConfig.js
├── pages/
│   ├── OrbitRoomPage.jsx
│   ├── RoomProjectsPage.jsx
│   ├── OrbitSkillsPage.jsx
│   └── MoonContactPage.jsx
├── features/
│   ├── spline-room/
│   │   ├── OrbitRoomScene.jsx
│   │   ├── sceneEvents.js
│   │   └── cameraPresets.js
│   ├── floating-panels/
│   │   ├── FloatingProjectPanel.jsx
│   │   └── RoomInfoPanel.jsx
│   └── rive-reactions/
│       ├── RiveMascot.jsx
│       └── riveStateMap.js
├── components/
│   ├── layout/
│   └── ui/
└── assets/pastel-orbit-room/
```

### Assets cần chuẩn bị

| Asset                 | Loại   | Dùng cho                    |
| --------------------- | ------ | --------------------------- |
| `orbit-room.spline`   | Spline | Hero room và object hotspot |
| `mini-assistant.riv`  | Rive   | Nav/helper reaction         |
| `orbit-rings.svg`     | SVG    | Background overlay          |
| `pastel-stars.svg`    | SVG    | Floating decoration         |
| `room-ui-icons.svg`   | SVG    | Nav/object labels           |

---

## 2. `crystal-bloom-lab` — Crystal Bloom Lab Portfolio

Theme như một phòng lab pha lê và hoa phát sáng: các project là mẫu pha lê, kỹ năng là hạt sáng, timeline là cành hoa nở theo scroll. Rất hợp portfolio muốn đẹp, sang nhẹ nhưng vẫn cute.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                         |
| ----------- | ------------------------------------------------------------- |
| Cảm xúc     | Glossy, sáng, nữ tính, clean, có chút fantasy                 |
| Hình khối   | Crystal prism, bloom petal, capsule card, glow edge           |
| Không gian  | Nền trắng hồng, gradient aura, crystal 3D làm focal point     |
| Chuyển động | Crystal rotate, bloom reveal, scroll timeline, shimmer border |
| Điểm nhấn   | Pha lê 3D, hoa nở, glow dust, lab label cute                  |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF7FB",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#F45FB4",
        colorTextBase: "#302137",
        colorTextSecondary: "#7A647D",
        colorSuccess: "#67DDB9",
        colorWarning: "#FFD96A",
        colorInfo: "#91C8FF",
        colorBorder: "#FFD6EC",
        borderRadius: 16,
        fontFamily: "'Fraunces', 'DM Sans', serif",
    },
};

// CSS Variables
// --crystal-pink: #F45FB4;
// --aura-blue: #91C8FF;
// --leaf-mint: #67DDB9;
// --lab-yellow: #FFD96A;
// --glass-border: rgba(255, 214, 236, 0.75);
```

### Library usage

| Library       | Cách dùng trong theme                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Spline        | Crystal cluster 3D, hover material/glow states                        |
| GSAP          | ScrollTrigger cho bloom timeline, pin section, stagger particles       |
| Framer Motion | Card entrance, tabs, project detail modal, layoutId transition         |
| Rive          | Animated flower/gem icon cho loading, CTA và empty state               |

### Layout / flow

- **Hero:** Crystal 3D xoay rất chậm, title overlay lệch một bên.
- **Projects:** Lab samples; mỗi sample mở modal detail.
- **Skills:** Glow particle map theo nhóm kỹ năng.
- **About:** Bloom timeline: hoa/cành nở dọc theo scroll.
- **Contact:** "Send a signal" capsule CTA với Rive gem sparkle.

### Animation rules

| Sự kiện          | Effect                                      | Tool          |
| ---------------- | ------------------------------------------- | ------------- |
| Scroll timeline  | Stem draw + petals scale in                 | GSAP          |
| Crystal hover    | Material glow + rotate toward pointer       | Spline        |
| Card hover       | Border shimmer + glass lift                 | Framer Motion |
| Project open     | Shared layout card → modal                  | Framer Motion |
| CTA state        | Gem sparkle state machine                   | Rive          |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── gsapSetup.js
├── pages/
│   ├── CrystalLabHomePage.jsx
│   ├── LabSamplesProjectsPage.jsx
│   ├── BloomTimelinePage.jsx
│   └── SignalContactPage.jsx
├── features/
│   ├── crystal-scene/
│   │   ├── CrystalSplineScene.jsx
│   │   └── crystalHotspots.js
│   ├── bloom-timeline/
│   │   ├── BloomTimeline.jsx
│   │   ├── useBloomScroll.js
│   │   └── timelineData.js
│   └── lab-samples/
│       ├── SampleCard.jsx
│       └── SampleDetailModal.jsx
├── components/
│   ├── layout/
│   └── ui/
└── assets/crystal-bloom-lab/
```

### Assets cần chuẩn bị

| Asset                    | Loại   | Dùng cho                         |
| ------------------------ | ------ | -------------------------------- |
| `crystal-cluster.spline` | Spline | Hero object, project sample area |
| `gem-flower.riv`         | Rive   | CTA/loading/icon state           |
| `bloom-stem.svg`         | SVG    | Scroll timeline                  |
| `glow-particles.svg`     | SVG    | Background aura                  |
| `lab-labels.svg`         | SVG    | Project cards, tags              |

---

## 3. `sweet-ui-arcade` — Sweet UI Arcade Portfolio

Portfolio như một arcade mini nhưng dùng bảng màu sáng, candy, cute. Các project là machine/card game, skills là power-up, contact là ticket booth.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                      |
| ----------- | ---------------------------------------------------------- |
| Cảm xúc     | Vui, cute, pop, interactive, high-energy                   |
| Hình khối   | Rounded arcade cabinet, pixel sticker, candy button        |
| Không gian  | Nền sáng, checker pastel, UI có depth và bóng mềm          |
| Chuyển động | Button press, score counter, ticket roll, Rive reactions   |
| Điểm nhấn   | Mini game-like hero, progress bars, badges, animated icons |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF9F1",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF5FA2",
        colorTextBase: "#2B2845",
        colorTextSecondary: "#706B8D",
        colorSuccess: "#39DCA6",
        colorWarning: "#FFD447",
        colorInfo: "#5FB7FF",
        colorBorder: "#FFD2E4",
        borderRadius: 14,
        fontFamily: "'Baloo 2', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --arcade-pink: #FF5FA2;
// --coin-yellow: #FFD447;
// --screen-blue: #5FB7FF;
// --mint-power: #39DCA6;
// --soft-cream: #FFF9F1;
```

### Library usage

| Library       | Cách dùng trong theme                                               |
| ------------- | -------------------------------------------------------------------- |
| Rive          | Animated buttons, mascot-free UI reactions, score badge, ticket roll |
| GSAP          | Arcade intro timeline, score count-up, scroll snap choreography      |
| Framer Motion | Pressable cards/buttons, project drawers, achievement badges         |
| Spline        | Optional 3D arcade cabinet hoặc candy joystick hero                  |

### Layout / flow

- **Home:** Arcade cabinet 3D hoặc 2.5D, title như game start screen.
- **Projects:** Game select menu, mỗi project là một cartridge/ticket.
- **Skills:** Power-up grid, level meters.
- **About:** Player card/profile stats.
- **Contact:** Ticket booth CTA với ticket print animation.

### Animation rules

| Sự kiện          | Effect                                  | Tool          |
| ---------------- | --------------------------------------- | ------------- |
| Start button     | Press down + screen flash               | Framer/Rive   |
| Score counter    | Count-up khi section enter              | GSAP          |
| Project select   | Cartridge slide + drawer reveal         | Framer Motion |
| Ticket CTA       | Ticket print looping state              | Rive          |
| Scroll sections  | Snap + arcade marquee movement          | GSAP          |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── motionConfig.js
├── pages/
│   ├── ArcadeHomePage.jsx
│   ├── GameSelectProjectsPage.jsx
│   ├── PlayerStatsPage.jsx
│   └── TicketBoothContactPage.jsx
├── features/
│   ├── arcade-flow/
│   │   ├── ArcadeIntroTimeline.jsx
│   │   ├── useScoreCounter.js
│   │   └── arcadeGsapTimeline.js
│   ├── rive-ui/
│   │   ├── RiveStartButton.jsx
│   │   ├── RiveTicketPrinter.jsx
│   │   └── riveInputs.js
│   └── game-select/
│       ├── GameProjectCard.jsx
│       └── ProjectCartridgeDrawer.jsx
├── components/
│   ├── layout/
│   └── ui/
└── assets/sweet-ui-arcade/
```

### Assets cần chuẩn bị

| Asset                    | Loại   | Dùng cho                           |
| ------------------------ | ------ | ---------------------------------- |
| `arcade-cabinet.spline`  | Spline | Optional hero 3D                   |
| `arcade-ui-controls.riv` | Rive   | Button, score, ticket interactions |
| `candy-checker.svg`      | SVG    | Background                         |
| `power-up-icons.svg`     | SVG    | Skills                             |
| `ticket-frame.svg`       | SVG    | Project/contact cards              |

---

## 4. `cloud-cosmetic-case` — Cloud Cosmetic Case Portfolio

Theme như một hộp mỹ phẩm/beauty case đặt trên mây. UI sáng, glossy, clean, nhiều 3D product feel nhưng vẫn cute. Hợp portfolio nữ muốn tinh tế, hiện đại, nịnh mắt.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| Cảm xúc     | Beauty, glossy, clean, mềm, sang nhẹ                        |
| Hình khối   | Cosmetic compact, pill, pearl, cloud panel, glass surface   |
| Không gian  | Spline cosmetic case hero, cloud layers sáng                |
| Chuyển động | Case open, pearl float, cloud drift, glossy highlight sweep |
| Điểm nhấn   | Compact mirror, lip tint capsule, pearl dots, cloud nav     |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F8FCFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF8AC7",
        colorTextBase: "#28314A",
        colorTextSecondary: "#70809A",
        colorSuccess: "#7BE6D3",
        colorWarning: "#FFE1A3",
        colorInfo: "#9BD5FF",
        colorBorder: "#DCEEFF",
        borderRadius: 20,
        fontFamily: "'Manrope', 'Nunito Sans', sans-serif",
    },
};

// CSS Variables
// --gloss-pink: #FF8AC7;
// --cloud-blue: #9BD5FF;
// --pearl-white: #FFFFFF;
// --aqua-shine: #7BE6D3;
// --champagne: #FFE1A3;
```

### Library usage

| Library       | Cách dùng trong theme                                                |
| ------------- | --------------------------------------------------------------------- |
| Spline        | Cosmetic case 3D, compact mirror open/close, product-like hero        |
| Framer Motion | Glass panels, drawers, tabs, page reveal, hover polish                |
| GSAP          | Cloud parallax, glossy sweep, scroll-triggered product steps          |
| Rive          | Animated beauty icons, cloud CTA, form success state                  |

### Layout / flow

- **Home:** 3D beauty case mở ra, các item đại diện section.
- **Projects:** Product shelf; mỗi project là một compact/capsule.
- **Skills:** Ingredient list như beauty formula.
- **About:** Mirror profile card với soft reflection.
- **Contact:** Cloud form, Rive success icon.

### Animation rules

| Sự kiện          | Effect                                  | Tool          |
| ---------------- | --------------------------------------- | ------------- |
| Hero interaction | Cosmetic case open/close                | Spline        |
| Cloud layer      | Slow parallax theo scroll/cursor        | GSAP          |
| Panel hover      | Gloss highlight sweep                   | Framer/GSAP   |
| Project open     | Product card → detail drawer            | Framer Motion |
| Form success     | Rive cloud/check sparkle                | Rive          |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── motionConfig.js
├── pages/
│   ├── CosmeticCaseHomePage.jsx
│   ├── ProductShelfProjectsPage.jsx
│   ├── BeautyFormulaSkillsPage.jsx
│   └── CloudContactPage.jsx
├── features/
│   ├── cosmetic-scene/
│   │   ├── CosmeticCaseScene.jsx
│   │   ├── productHotspots.js
│   │   └── splineActions.js
│   ├── cloud-motion/
│   │   ├── CloudParallaxLayer.jsx
│   │   └── useCloudGsap.js
│   └── product-shelf/
│       ├── ProductProjectCard.jsx
│       └── ProductDetailDrawer.jsx
├── components/
│   ├── layout/
│   └── ui/
└── assets/cloud-cosmetic-case/
```

### Assets cần chuẩn bị

| Asset                       | Loại   | Dùng cho                 |
| --------------------------- | ------ | ------------------------ |
| `cosmetic-case.spline`      | Spline | Hero/product interaction |
| `beauty-cloud-icons.riv`    | Rive   | CTA/form/icon states     |
| `cloud-layer.svg`           | SVG    | Parallax background      |
| `pearl-particles.svg`       | SVG    | Floating decoration      |
| `cosmetic-label-frames.svg` | SVG    | Cards/tabs               |

---

## 5. `ribbon-galaxy-stage` — Ribbon Galaxy Stage Portfolio

Theme như một sân khấu thiên hà pastel: ribbon bay, star platform 3D, spotlight sáng, UI idol nhưng mềm và cute. Hợp portfolio muốn tạo ấn tượng mạnh ở hero.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                        |
| ----------- | ------------------------------------------------------------ |
| Cảm xúc     | Rực rỡ, tự tin, magical, cute, sân khấu                      |
| Hình khối   | 3D star platform, ribbon trail, stage card, ticket badge     |
| Không gian  | Nền galaxy sáng, không tối; dùng hồng, vàng, xanh pastel     |
| Chuyển động | Spotlight sweep, ribbon orbit, stage reveal, star confetti   |
| Điểm nhấn   | Star stage, ribbon wave, galaxy dust, ticket detail modal    |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF6FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF63D8",
        colorTextBase: "#2C2854",
        colorTextSecondary: "#756FA0",
        colorSuccess: "#64EAC8",
        colorWarning: "#FFE45C",
        colorInfo: "#7BB5FF",
        colorBorder: "#F4C7FF",
        borderRadius: 16,
        fontFamily: "'Fredoka', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --stage-pink: #FF63D8;
// --galaxy-blue: #7BB5FF;
// --star-yellow: #FFE45C;
// --mint-laser: #64EAC8;
// --soft-galaxy: #FFF6FF;
```

### Library usage

| Library       | Cách dùng trong theme                                                |
| ------------- | --------------------------------------------------------------------- |
| Spline        | 3D star platform, floating ribbons, stage props                       |
| GSAP          | Stage intro timeline, spotlight sweep, scroll-pinned performance flow |
| Framer Motion | Ticket modal, project card hover, route curtain reveal                |
| Rive          | Animated star/ribbon icon, CTA reaction, loading sparkle              |

### Layout / flow

- **Home:** 3D star stage, title như show intro, spotlight chạy.
- **Projects:** Setlist/ticket grid; project detail mở như VIP pass.
- **Skills:** Galaxy badges theo constellation ring.
- **About:** Performer profile card, timeline như show chapters.
- **Contact:** Encore CTA với Rive star burst.

### Animation rules

| Sự kiện          | Effect                                  | Tool          |
| ---------------- | --------------------------------------- | ------------- |
| Stage intro      | Spotlight → title → ribbon → CTA        | GSAP          |
| 3D scene         | Platform float + ribbons orbit          | Spline        |
| Project hover    | Ticket lift + star burst                | Framer Motion |
| Detail open      | Curtain reveal modal                    | Framer Motion |
| CTA click        | Rive star burst state                   | Rive          |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── gsapSetup.js
├── pages/
│   ├── GalaxyStageHomePage.jsx
│   ├── SetlistProjectsPage.jsx
│   ├── PerformerProfilePage.jsx
│   └── EncoreContactPage.jsx
├── features/
│   ├── galaxy-stage/
│   │   ├── GalaxyStageScene.jsx
│   │   ├── StageIntroTimeline.jsx
│   │   └── spotlightTimeline.js
│   ├── tickets/
│   │   ├── TicketProjectGrid.jsx
│   │   ├── TicketProjectCard.jsx
│   │   └── VipProjectModal.jsx
│   └── rive-stars/
│       ├── RiveStarBurst.jsx
│       └── riveInputs.js
├── components/
│   ├── layout/
│   └── ui/
└── assets/ribbon-galaxy-stage/
```

### Assets cần chuẩn bị

| Asset                    | Loại   | Dùng cho                       |
| ------------------------ | ------ | ------------------------------ |
| `galaxy-stage.spline`    | Spline | Hero 3D stage                  |
| `star-ribbon-burst.riv`  | Rive   | CTA/loading/icon reactions     |
| `ribbon-trails.svg`      | SVG    | Overlay/background             |
| `galaxy-confetti.svg`    | SVG    | Floating particles             |
| `ticket-star-frame.svg`  | SVG    | Project cards/detail modal     |

---

## Quy chuẩn triển khai cho Catalog 3

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer defaults: spring, easing, reduced motion
│   └── gsapSetup.js          ← Register plugin/timeline helpers nếu dùng GSAP
├── features/
│   ├── <theme-scene>/        ← Spline scene wrapper + hotspot mapping
│   ├── <theme-rive>/         ← Rive components + state machine input mapping
│   └── <theme-motion>/       ← GSAP timelines, scroll hooks, choreography
├── components/
│   ├── layout/               ← Route/page shell, navigation, transition wrapper
│   └── ui/                   ← Buttons, cards, badges, modal, drawer
└── assets/<theme-id>/        ← .spline, .riv, SVG, texture files
```

### Phân vai tool rõ ràng

| Việc cần làm                         | Tool nên dùng       | Ghi chú triển khai                                        |
| ------------------------------------ | ------------------- | --------------------------------------------------------- |
| Page/route transition                | Framer Motion       | Dùng `AnimatePresence`, variants, shared motion config    |
| Hover/tap card, modal, drawer        | Framer Motion       | Giữ tương tác UI gần component React                      |
| Scroll storytelling nhiều bước       | GSAP                | Tách timeline vào hook/file riêng                         |
| Camera/object 3D chính               | Spline              | Không đặt text quan trọng bên trong Spline scene          |
| Animated icon/state machine          | Rive                | Dùng cho CTA/loading/reaction, không lạm dụng cho layout  |
| Particle nhẹ                         | CSS/SVG hoặc GSAP   | Chỉ dùng canvas nếu thật sự cần                           |

### Performance rules

- Lazy load Spline và Rive bằng route-level hoặc component-level suspense.
- Không render nhiều scene Spline cùng lúc trong một page.
- Với mobile, dùng fallback poster/SVG nếu Spline scene nặng hoặc frame rate thấp.
- Text chính phải là HTML/CSS, không đặt trong Spline/Rive để giữ accessibility và responsive.
- GSAP timeline phải cleanup khi component unmount.
- Tôn trọng `prefers-reduced-motion`: tắt idle loop, particle drift, camera orbit và scroll pin phức tạp.

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

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài Framer Motion, GSAP, Spline React và Rive React nếu theme dùng đủ stack.
- [ ] Tạo `src/app/motionConfig.js` và `src/app/gsapSetup.js` nếu có timeline/route transition.
- [ ] Tạo `src/assets/<theme-id>/` chứa `.spline`, `.riv`, SVG và poster fallback.
- [ ] Tách Spline wrapper, Rive wrapper và GSAP timeline thành feature riêng.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi 3D asset chưa load.

---

_Cập nhật lần cuối: 2026-05-14 — Khởi tạo 5 theme portfolio nữ sáng, cute, tập trung animation 3D với Framer Motion, GSAP, Spline và Rive._
