# 💫 Catalog 3 — Feminine 3D Motion Portfolio Themes

> Catalog này tập trung vào portfolio nữ có màu sáng, UI nịnh mắt, cute, nhiều animation 3D và micro-interaction.  
> Phiên bản này chuyển sang stack **free, npm-first, tự chủ trong codebase**: không phụ thuộc Spline/Rive editor hoặc asset runtime đóng. 3D scene được dựng bằng Three.js/React Three Fiber; animation UI dùng Motion; scroll dùng Lenis; icon/mascot animation dùng Lottie hoặc SVG/CSS.

---

## Free npm-first stack

Các package dưới đây đều có sẵn trên npm và license MIT theo `npm view` tại thời điểm cập nhật.

```bash
npm install motion three @react-three/fiber @react-three/drei @react-three/postprocessing lenis lottie-react @use-gesture/react maath
```

| Package                       | Thay cho                    | Vai trò chính                                             |
| ----------------------------- | --------------------------- | --------------------------------------------------------- |
| `motion`                      | Framer Motion / GSAP nhẹ    | UI animation, route transition, scroll-linked transforms  |
| `three`                       | Spline runtime              | Core 3D engine                                            |
| `@react-three/fiber`          | Spline React scene          | React renderer cho Three.js                               |
| `@react-three/drei`           | Spline helpers              | Camera, controls, text, environment, HTML overlay helpers |
| `@react-three/postprocessing` | Spline material/glow preset | Bloom, depth, outline, vignette nhẹ                       |
| `lenis`                       | GSAP smooth scroll setup    | Smooth scroll có cleanup và reduced-motion fallback       |
| `lottie-react`                | Rive runtime                | Animated 2D mascot/icon/CTA bằng JSON                     |
| `@use-gesture/react`          | Rive/Spline interaction     | Drag, hover, pointer gesture                              |
| `maath`                       | GSAP tween helpers          | Damping/easing math cho camera/object trong R3F           |

### Migration map

| Stack cũ trong bản trước | Đề xuất chuyển đổi                                   | Lý do                                     |
| ------------------------ | ---------------------------------------------------- | ----------------------------------------- |
| Framer Motion            | `motion`                                             | Package hiện đại, MIT, import gọn         |
| GSAP                     | `motion` + `lenis` + CSS keyframes                   | Đủ cho portfolio, giảm license risk       |
| Spline                   | `three` + `@react-three/fiber` + `@react-three/drei` | 3D nằm trong code, dễ version control     |
| Rive                     | `lottie-react` + SVG/CSS + React state               | Free npm, asset JSON dễ ship trong repo   |
| Spline/Rive asset files  | `.glb`, `.gltf`, `.json`, `.svg`, texture `.webp`    | Chuẩn web phổ biến, không khóa vào editor |

Nguyên tắc phân vai: `motion` điều khiển UI React; R3F điều khiển 3D scene; Lenis xử lý scroll; Lottie chỉ dùng cho icon/mascot nhỏ; CSS/SVG xử lý decoration nhẹ.

---

## Danh sách phong cách

| ID                    | Tên phong cách                | Vibe                              | Motion trọng tâm                         |
| --------------------- | ----------------------------- | --------------------------------- | ---------------------------------------- |
| `pastel-orbit-room`   | Pastel Orbit Room Portfolio   | Căn phòng 3D pastel, cute, dreamy | R3F room + Motion route transitions      |
| `crystal-bloom-lab`   | Crystal Bloom Lab Portfolio   | Pha lê, hoa, glow, nữ tính        | R3F crystal + Motion/Lenis scroll reveal |
| `sweet-ui-arcade`     | Sweet UI Arcade Portfolio     | Game UI cute, candy, vui, pop     | Lottie UI reactions + Motion arcade flow |
| `cloud-cosmetic-case` | Cloud Cosmetic Case Portfolio | Beauty case, cloud, clean, glossy | R3F product scene + Lottie icons         |
| `ribbon-galaxy-stage` | Ribbon Galaxy Stage Portfolio | Sân khấu thiên hà sáng, idol-cute | R3F star stage + Motion curtain modals   |

---

## 1. `pastel-orbit-room` — Pastel Orbit Room Portfolio

Portfolio như một căn phòng 3D nhỏ lơ lửng trong không gian pastel. Bàn học, laptop, kệ sách, khung ảnh và các hành tinh mini đại diện cho từng phần của portfolio.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                  |
| ----------- | ------------------------------------------------------ |
| Cảm xúc     | Dreamy, cute, cá nhân, sáng, cozy                      |
| Hình khối   | Rounded 3D, mini object, orbit ring, glass UI overlay  |
| Không gian  | Hero là R3F scene full-bleed, text HTML nổi bên trên   |
| Chuyển động | Object orbit, camera drift, card float, route fade     |
| Điểm nhấn   | Mini laptop, moon lamp, pastel planets, floating notes |

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
```

### Library usage

| Package              | Cách dùng trong theme                                 |
| -------------------- | ----------------------------------------------------- |
| `@react-three/fiber` | Canvas room scene, object hotspot, camera drift       |
| `@react-three/drei`  | `Float`, `Html`, `OrbitControls`, `PerspectiveCamera` |
| `motion`             | Route fade, card spring, modal detail, shared layout  |
| `lenis`              | Smooth scroll giữa Home/Projects/About/Contact        |
| `lottie-react`       | Mini assistant/loading icon nếu cần                   |
| `maath`              | Damping camera/object toward pointer                  |

### Layout / flow

- **Home:** R3F room chiếm viewport đầu, các object là entry point.
- **Projects:** Floating windows quanh laptop.
- **About:** Profile panel như khung ảnh trong phòng.
- **Skills:** Orbit map quanh hành tinh mini.
- **Contact:** Moon lamp CTA bật sáng khi hover.

### Animation rules

| Sự kiện      | Effect                            | Tool                 |
| ------------ | --------------------------------- | -------------------- |
| Page load    | 3D scene fade-in + UI stagger     | `motion`             |
| Object hover | Glow ring + HTML label            | R3F + `drei/Html`    |
| Route change | Scale 0.98 → 1, blur 6px → 0      | `motion`             |
| Camera       | Pointer parallax, damped movement | R3F + `maath`        |
| CTA hover    | Lottie sparkle hoặc SVG sparkle   | `lottie-react` / SVG |

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
│   ├── r3f-room/
│   │   ├── OrbitRoomCanvas.jsx
│   │   ├── RoomObjects.jsx
│   │   ├── roomMaterials.js
│   │   └── cameraRig.js
│   ├── floating-panels/
│   │   ├── FloatingProjectPanel.jsx
│   │   └── RoomInfoPanel.jsx
│   └── lottie-reactions/
│       ├── LottieMascot.jsx
│       └── animationMap.js
├── components/
│   ├── layout/
│   └── ui/
└── assets/pastel-orbit-room/
```

### Assets cần chuẩn bị

| Asset                 | Loại        | Dùng cho                    |
| --------------------- | ----------- | --------------------------- |
| `room-objects.glb`    | GLB/GLTF    | Hero room và object hotspot |
| `mini-assistant.json` | Lottie JSON | Nav/helper reaction         |
| `orbit-rings.svg`     | SVG         | Background overlay          |
| `pastel-stars.svg`    | SVG         | Floating decoration         |
| `room-ui-icons.svg`   | SVG         | Nav/object labels           |
| `room-poster.webp`    | Image       | Mobile/fallback poster      |

---

## 2. `crystal-bloom-lab` — Crystal Bloom Lab Portfolio

Theme như một phòng lab pha lê và hoa phát sáng: project là mẫu pha lê, kỹ năng là hạt sáng, timeline là cành hoa nở theo scroll.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                     |
| ----------- | --------------------------------------------------------- |
| Cảm xúc     | Glossy, sáng, nữ tính, clean, fantasy nhẹ                 |
| Hình khối   | Crystal prism, bloom petal, capsule card, glow edge       |
| Không gian  | Nền trắng hồng, aura gradient, crystal 3D làm focal point |
| Chuyển động | Crystal rotate, bloom reveal, shimmer border              |
| Điểm nhấn   | Pha lê 3D, hoa nở, glow dust, lab label cute              |

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
```

### Library usage

| Package                       | Cách dùng trong theme                              |
| ----------------------------- | -------------------------------------------------- |
| `@react-three/fiber`          | Crystal cluster, hover material/glow states        |
| `@react-three/postprocessing` | Bloom nhẹ cho crystal, không lạm dụng              |
| `motion`                      | Scroll reveal, card entrance, project detail modal |
| `lenis`                       | Smooth scroll cho bloom timeline                   |
| `lottie-react`                | Gem/flower icon cho CTA và loading                 |
| `@use-gesture/react`          | Drag/tilt sample card hoặc rotate crystal          |

### Layout / flow

- **Hero:** Crystal 3D xoay chậm, title HTML overlay.
- **Projects:** Lab samples; mỗi sample mở modal detail.
- **Skills:** Glow particle map theo nhóm kỹ năng.
- **About:** Bloom timeline nở dọc theo scroll.
- **Contact:** Capsule CTA với Lottie gem sparkle.

### Animation rules

| Sự kiện         | Effect                       | Tool             |
| --------------- | ---------------------------- | ---------------- |
| Scroll timeline | Stem draw + petals scale in  | `motion` + Lenis |
| Crystal hover   | Glow + rotate toward pointer | R3F + `maath`    |
| Card hover      | Border shimmer + glass lift  | `motion`         |
| Project open    | Shared layout card → modal   | `motion`         |
| CTA state       | Gem sparkle loop/click       | `lottie-react`   |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── motionConfig.js
├── pages/
│   ├── CrystalLabHomePage.jsx
│   ├── LabSamplesProjectsPage.jsx
│   ├── BloomTimelinePage.jsx
│   └── SignalContactPage.jsx
├── features/
│   ├── crystal-scene/
│   │   ├── CrystalCanvas.jsx
│   │   ├── CrystalCluster.jsx
│   │   └── crystalMaterials.js
│   ├── bloom-timeline/
│   │   ├── BloomTimeline.jsx
│   │   ├── useBloomScroll.js
│   │   └── timelineData.js
│   └── lab-samples/
│       ├── SampleCard.jsx
│       └── SampleDetailModal.jsx
└── assets/crystal-bloom-lab/
```

### Assets cần chuẩn bị

| Asset                 | Loại        | Dùng cho                         |
| --------------------- | ----------- | -------------------------------- |
| `crystal-cluster.glb` | GLB/GLTF    | Hero object, project sample area |
| `gem-flower.json`     | Lottie JSON | CTA/loading/icon state           |
| `bloom-stem.svg`      | SVG         | Scroll timeline                  |
| `glow-particles.svg`  | SVG         | Background aura                  |
| `lab-labels.svg`      | SVG         | Project cards, tags              |

---

## 3. `sweet-ui-arcade` — Sweet UI Arcade Portfolio

Portfolio như một arcade mini dùng bảng màu sáng, candy, cute. Project là machine/card game, skills là power-up, contact là ticket booth.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                   |
| ----------- | ------------------------------------------------------- |
| Cảm xúc     | Vui, cute, pop, interactive, high-energy                |
| Hình khối   | Rounded arcade cabinet, pixel sticker, candy button     |
| Không gian  | Nền sáng, checker pastel, UI có depth và bóng mềm       |
| Chuyển động | Button press, score counter, ticket roll, icon reaction |
| Điểm nhấn   | Mini game hero, progress bars, badges, animated icons   |

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
```

### Library usage

| Package              | Cách dùng trong theme                                  |
| -------------------- | ------------------------------------------------------ |
| `lottie-react`       | Start button, score badge, ticket print, success state |
| `motion`             | Pressable cards/buttons, drawers, achievement badges   |
| `lenis`              | Smooth scroll + section snap feel                      |
| `@react-three/fiber` | Optional candy joystick hoặc arcade cabinet 3D         |
| `@use-gesture/react` | Drag cartridge, joystick interaction                   |

### Layout / flow

- **Home:** Arcade cabinet 2.5D/R3F optional, title như game start screen.
- **Projects:** Game select menu, mỗi project là cartridge/ticket.
- **Skills:** Power-up grid, level meters.
- **About:** Player card/profile stats.
- **Contact:** Ticket booth CTA với ticket print animation.

### Animation rules

| Sự kiện        | Effect                          | Tool            |
| -------------- | ------------------------------- | --------------- |
| Start button   | Press down + screen flash       | `motion`/Lottie |
| Score counter  | Count-up khi section enter      | `motion`        |
| Project select | Cartridge slide + drawer reveal | `motion`        |
| Ticket CTA     | Ticket print loop               | `lottie-react`  |
| Optional 3D    | Cabinet/joystick float          | R3F + Drei      |

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
│   │   ├── ArcadeIntro.jsx
│   │   ├── useScoreCounter.js
│   │   └── arcadeVariants.js
│   ├── lottie-ui/
│   │   ├── LottieStartButton.jsx
│   │   ├── LottieTicketPrinter.jsx
│   │   └── animationMap.js
│   └── game-select/
│       ├── GameProjectCard.jsx
│       └── ProjectCartridgeDrawer.jsx
└── assets/sweet-ui-arcade/
```

### Assets cần chuẩn bị

| Asset                     | Loại        | Dùng cho                           |
| ------------------------- | ----------- | ---------------------------------- |
| `arcade-cabinet.glb`      | GLB/GLTF    | Optional hero 3D                   |
| `arcade-ui-controls.json` | Lottie JSON | Button, score, ticket interactions |
| `candy-checker.svg`       | SVG         | Background                         |
| `power-up-icons.svg`      | SVG         | Skills                             |
| `ticket-frame.svg`        | SVG         | Project/contact cards              |

---

## 4. `cloud-cosmetic-case` — Cloud Cosmetic Case Portfolio

Theme như một hộp mỹ phẩm/beauty case đặt trên mây. UI sáng, glossy, clean, nhiều 3D product feel nhưng vẫn cute.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                     |
| ----------- | --------------------------------------------------------- |
| Cảm xúc     | Beauty, glossy, clean, mềm, sang nhẹ                      |
| Hình khối   | Cosmetic compact, pill, pearl, cloud panel, glass surface |
| Không gian  | R3F cosmetic case hero, cloud layers sáng                 |
| Chuyển động | Case open, pearl float, cloud drift, gloss sweep          |
| Điểm nhấn   | Compact mirror, lip tint capsule, pearl dots, cloud nav   |

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
```

### Library usage

| Package              | Cách dùng trong theme                                   |
| -------------------- | ------------------------------------------------------- |
| `@react-three/fiber` | Cosmetic case 3D, compact mirror open/close             |
| `@react-three/drei`  | `Float`, `ContactShadows`, `Environment`, `Html` labels |
| `motion`             | Glass panels, drawers, tabs, page reveal, hover polish  |
| `lenis`              | Cloud parallax theo scroll                              |
| `lottie-react`       | Beauty icons, cloud CTA, form success state             |

### Layout / flow

- **Home:** 3D beauty case mở ra, các item đại diện section.
- **Projects:** Product shelf; mỗi project là compact/capsule.
- **Skills:** Ingredient list như beauty formula.
- **About:** Mirror profile card với soft reflection.
- **Contact:** Cloud form, Lottie success icon.

### Animation rules

| Sự kiện          | Effect                       | Tool           |
| ---------------- | ---------------------------- | -------------- |
| Hero interaction | Cosmetic case open/close     | R3F            |
| Cloud layer      | Slow parallax theo scroll    | Lenis + Motion |
| Panel hover      | Gloss highlight sweep        | `motion` / CSS |
| Project open     | Product card → detail drawer | `motion`       |
| Form success     | Cloud/check sparkle          | `lottie-react` |

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
│   │   ├── CosmeticCaseCanvas.jsx
│   │   ├── CosmeticCaseModel.jsx
│   │   └── productHotspots.js
│   ├── cloud-motion/
│   │   ├── CloudParallaxLayer.jsx
│   │   └── useCloudScroll.js
│   └── product-shelf/
│       ├── ProductProjectCard.jsx
│       └── ProductDetailDrawer.jsx
└── assets/cloud-cosmetic-case/
```

### Assets cần chuẩn bị

| Asset                       | Loại        | Dùng cho                 |
| --------------------------- | ----------- | ------------------------ |
| `cosmetic-case.glb`         | GLB/GLTF    | Hero/product interaction |
| `beauty-cloud-icons.json`   | Lottie JSON | CTA/form/icon states     |
| `cloud-layer.svg`           | SVG         | Parallax background      |
| `pearl-particles.svg`       | SVG         | Floating decoration      |
| `cosmetic-label-frames.svg` | SVG         | Cards/tabs               |

---

## 5. `ribbon-galaxy-stage` — Ribbon Galaxy Stage Portfolio

Theme như một sân khấu thiên hà pastel: ribbon bay, star platform 3D, spotlight sáng, UI idol nhưng mềm và cute.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                    |
| ----------- | -------------------------------------------------------- |
| Cảm xúc     | Rực rỡ, tự tin, magical, cute, sân khấu                  |
| Hình khối   | 3D star platform, ribbon trail, stage card, ticket badge |
| Không gian  | Galaxy sáng, dùng hồng, vàng, xanh pastel                |
| Chuyển động | Spotlight sweep, ribbon orbit, stage reveal, confetti    |
| Điểm nhấn   | Star stage, ribbon wave, galaxy dust, ticket modal       |

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
```

### Library usage

| Package                       | Cách dùng trong theme                             |
| ----------------------------- | ------------------------------------------------- |
| `@react-three/fiber`          | Star platform, floating ribbons, stage props      |
| `@react-three/postprocessing` | Bloom nhẹ cho star/ribbon                         |
| `motion`                      | Ticket modal, project hover, route curtain reveal |
| `lenis`                       | Scroll-pinned-feel bằng section progress nhẹ      |
| `lottie-react`                | Star/ribbon CTA reaction, loading sparkle         |

### Layout / flow

- **Home:** 3D star stage, title như show intro, spotlight chạy bằng CSS/SVG.
- **Projects:** Setlist/ticket grid; project detail mở như VIP pass.
- **Skills:** Galaxy badges theo constellation ring.
- **About:** Performer profile card, timeline như show chapters.
- **Contact:** Encore CTA với Lottie star burst.

### Animation rules

| Sự kiện       | Effect                           | Tool           |
| ------------- | -------------------------------- | -------------- |
| Stage intro   | Spotlight → title → ribbon → CTA | `motion` + CSS |
| 3D scene      | Platform float + ribbons orbit   | R3F + Drei     |
| Project hover | Ticket lift + star burst         | `motion`       |
| Detail open   | Curtain reveal modal             | `motion`       |
| CTA click     | Star burst reaction              | `lottie-react` |

### Src structure

```txt
src/
├── app/
│   ├── App.jsx
│   ├── routes.js
│   └── motionConfig.js
├── pages/
│   ├── GalaxyStageHomePage.jsx
│   ├── SetlistProjectsPage.jsx
│   ├── PerformerProfilePage.jsx
│   └── EncoreContactPage.jsx
├── features/
│   ├── galaxy-stage/
│   │   ├── GalaxyStageCanvas.jsx
│   │   ├── StarPlatform.jsx
│   │   └── RibbonOrbit.jsx
│   ├── tickets/
│   │   ├── TicketProjectGrid.jsx
│   │   ├── TicketProjectCard.jsx
│   │   └── VipProjectModal.jsx
│   └── lottie-stars/
│       ├── LottieStarBurst.jsx
│       └── animationMap.js
└── assets/ribbon-galaxy-stage/
```

### Assets cần chuẩn bị

| Asset                    | Loại        | Dùng cho                   |
| ------------------------ | ----------- | -------------------------- |
| `galaxy-stage.glb`       | GLB/GLTF    | Hero 3D stage              |
| `star-ribbon-burst.json` | Lottie JSON | CTA/loading/icon reactions |
| `ribbon-trails.svg`      | SVG         | Overlay/background         |
| `galaxy-confetti.svg`    | SVG         | Floating particles         |
| `ticket-star-frame.svg`  | SVG         | Project cards/detail modal |

---

## Quy chuẩn triển khai cho Catalog 3

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Motion variants, spring, easing, reduced motion
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-r3f-scene>/    ← Canvas, 3D models, camera rig, materials
│   ├── <theme-lottie>/       ← Lottie wrappers + animation map
│   └── <theme-motion>/       ← Scroll hooks, Motion variants, choreography
├── components/
│   ├── layout/               ← Route/page shell, navigation, transition wrapper
│   └── ui/                   ← Buttons, cards, badges, modal, drawer
└── assets/<theme-id>/        ← .glb/.gltf, .json, SVG, texture, poster fallback
```

### Phân vai tool rõ ràng

| Việc cần làm                  | Tool nên dùng                         | Ghi chú triển khai                           |
| ----------------------------- | ------------------------------------- | -------------------------------------------- |
| Page/route transition         | `motion`                              | Dùng variants/shared layout, không cần GSAP  |
| Hover/tap card, modal, drawer | `motion`                              | Giữ UI animation gần component React         |
| Smooth scroll                 | `lenis`                               | Cleanup khi unmount, tắt khi reduced motion  |
| Scroll progress transform     | `motion` `useScroll` / `useTransform` | Dùng cho parallax, scale, progress indicator |
| Camera/object 3D chính        | R3F + Drei + `maath`                  | Text chính vẫn là HTML/CSS                   |
| Animated icon/mascot          | `lottie-react`                        | Dùng JSON nhỏ, tránh autoplay quá nhiều      |
| Pointer/drag interaction      | `@use-gesture/react`                  | Dùng cho joystick, card drag, object tilt    |
| Glow/postprocessing           | `@react-three/postprocessing`         | Dùng tiết chế, có fallback mobile            |
| Particle nhẹ                  | SVG/CSS hoặc R3F instancing           | Không thêm canvas riêng nếu R3F scene đã có  |

### Performance rules

- Lazy load R3F scene và Lottie animation bằng route-level hoặc component-level suspense.
- Không render nhiều `<Canvas>` nặng cùng lúc trong một page.
- Với mobile, dùng poster `.webp` hoặc SVG fallback nếu 3D scene nặng.
- Text chính phải là HTML/CSS, không đặt trong GLB/Lottie để giữ accessibility và responsive.
- Lenis và animation loop phải cleanup khi component unmount.
- Tôn trọng `prefers-reduced-motion`: tắt idle loop, particle drift, camera orbit và parallax phức tạp.
- Dùng compressed GLB/texture nhỏ; tránh model quá chi tiết cho portfolio sinh viên.

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
- [ ] Cài stack npm-first: `motion`, `three`, `@react-three/fiber`, `@react-three/drei`, `lenis`, `lottie-react`.
- [ ] Chỉ cài `@react-three/postprocessing`, `@use-gesture/react`, `maath` nếu theme thật sự cần.
- [ ] Tạo `src/app/motionConfig.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa `.glb/.gltf`, Lottie `.json`, SVG và poster fallback.
- [ ] Tách R3F scene, Lottie wrapper và Motion choreography thành feature riêng.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi 3D asset chưa load.

---

_Cập nhật lần cuối: 2026-05-14 — Chuyển Catalog 3 sang stack free, npm-first: Motion, Three.js, React Three Fiber, Drei, Lenis, Lottie React, use-gesture, maath._
