# 🌺 Catalog 7 — Kawaii Ocean Summer Portfolio Themes

> Catalog này tập trung vào portfolio nữ theo hướng biển, đại dương, du lịch hè, cute, vui nhộn và nịnh mắt.  
> Vibe chính: xanh biển trong veo, hồng coral, vàng nắng, mint, lavender, nhiều sticker, mascot, wave, bubble, sparkle và assets 2D.  
> Stack dùng: Framer Motion cho UI animation, Rive cho mascot/object micro-animation, SVGator/CSS cho SVG scene animation, Lenis cho smooth scroll.  
> Mỗi theme có bảng màu, typography, layout, animation rules, component notes, asset SVG/Rive nên tự tạo và yêu cầu triển khai bắt buộc.

---

## UI library / design tool stack

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

| Library / Tool  | Vai trò chính trong catalog này                                           | Nên dùng cho                                                         |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Framer Motion   | UI animation, route transition, card hover, scroll reveal                 | Hero entrance, section stagger, project hover, CTA success           |
| Rive            | Mascot/object state machine                                               | Mermaid, dolphin, jellyfish, surf girl, shell pet, beach-bag mascot  |
| SVGator         | Tạo timeline animation SVG export ra SVG/CSS/JS                           | Wave loop, bubble trail, shell shimmer, sun sparkle, fish swim path   |
| Lenis           | Smooth scroll có kiểm soát                                                | Portfolio nhiều section, summer-trip storytelling, anchor navigation  |
| CSS Keyframes   | Idle loop nhẹ và decoration lặp                                           | Bubble float, sparkle twinkle, sticker wiggle, wave sway, cloud drift |
| Realtime Colors | Tạo và kiểm tra bảng màu pastel/rực rỡ đủ contrast                        | Token màu, palette variants, theme preview                           |
| Blush           | Illustration pack/custom character theo style nữ, cute, beach, travel     | Hero girl, ocean mascot, resort scene, cafe scene                     |

Nguyên tắc phân vai: Framer Motion xử lý UI và flow; Rive xử lý mascot/object có state; SVGator tạo animation path/timeline phức tạp; Lenis chỉ lo scroll; CSS keyframes dùng cho decoration idle; SVG assets là trọng tâm visual, không chỉ làm góc trang.

---

## Danh sách phong cách

| ID                              | Tên phong cách                          | Vibe                                                   | Hợp với                                      |
| ------------------------------- | --------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| `kawaii-beach-day`              | Kawaii Beach Day Portfolio              | Bãi biển pastel, phao, dù, nắng, sticker vui           | Portfolio nữ cute, designer, content creator |
| `mermaid-sticker-lagoon`        | Mermaid Sticker Lagoon Portfolio        | Tiên cá, lagoon, vỏ sò, ngọc trai, shimmer             | Portfolio beauty, art, illustration          |
| `dolphin-summer-splash`         | Dolphin Summer Splash Portfolio         | Cá heo, splash, phao tim, năng lượng hè                | Portfolio trẻ trung, product/design          |
| `jellyfish-pastel-dream`        | Jellyfish Pastel Dream Portfolio        | Sứa pastel, ánh phát quang, dreamy underwater          | Portfolio creative, visual, motion           |
| `seashell-resort-diary`         | Seashell Resort Diary Portfolio         | Resort biển, diary, vỏ sò, room key, travel note       | Portfolio travel, lifestyle, storyteller     |
| `tropical-icecream-boardwalk`   | Tropical Ice Cream Boardwalk Portfolio  | Boardwalk, kem, biển, neon pastel ban ngày             | Portfolio food/lifestyle, playful design     |
| `bubble-tea-beach-cafe`         | Bubble Tea Beach Cafe Portfolio         | Trà sữa ven biển, ly cute, trân châu, cafe hè          | Portfolio nữ cute, business, creator         |
| `pink-surf-girl-club`           | Pink Surf Girl Club Portfolio           | Lướt sóng hồng, club sticker, sporty-cute              | Portfolio năng động, fitness, media          |
| `coral-fairy-reef`              | Coral Fairy Reef Portfolio              | Tiên san hô, reef fantasy, cá nhỏ, phép màu biển       | Portfolio art, fantasy, illustration         |
| `sunny-cruise-cute-log`         | Sunny Cruise Cute Log Portfolio         | Du thuyền mini, nhật ký hành trình, cờ cute            | Portfolio leadership, travel, career journey |
| `beach-bag-sticker-room`        | Beach Bag Sticker Room Portfolio        | Túi đi biển, sticker, kính mát, máy ảnh, summer desk   | Portfolio học tập/design, lifestyle          |
| `starfish-summer-postcard`      | Starfish Summer Postcard Portfolio      | Postcard sao biển, tem, ảnh hè, kỷ niệm vui            | Portfolio photography, social, travel        |

---

## Nguyên tắc thiết kế chung cho Catalog 7

| Nguyên tắc              | Mô tả                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Tông màu chủ đạo        | Ocean blue, aqua, mint, coral pink, sunshine yellow, lavender, cream white            |
| Cảm giác chung          | Cute, vui nhộn, nữ tính, mùa hè, biển trong veo, nhiều chi tiết nhỏ đáng yêu          |
| Background-first scene  | Hero phải là cảnh biển/đại dương/du lịch hè rõ ràng, không chỉ gradient               |
| Asset density           | Mỗi theme nên có 8–12 SVG assets, sticker/icon/pattern/particle đầy đủ                |
| Mascot/object driven    | Mỗi theme có ít nhất một mascot hoặc object chính có state animation                  |
| Animation philosophy    | Bouncy, mềm, organic, nhiều idle loop lệch phase nhưng không làm rối nội dung         |
| Card decoration         | Cards phải có frame/sticker/wave/foam/shell/stamp, không dùng card trắng trống        |
| Accessibility           | Text chính là HTML, SVG decoration dùng `aria-hidden`, contrast đạt tối thiểu 4.5:1   |
| Mobile-first decoration | Mobile giảm particle density, giữ mascot/object chính và CTA rõ                      |
| Reusable SVG symbols    | Dùng `<symbol>` và `<use>` để tái dùng shell, bubble, star, fish, sticker             |
| Reduced motion          | Tắt bubble drift, mascot loop, wave sway, sparkle twinkle khi user giảm chuyển động   |
| Performance             | Giới hạn 20–30 animated items visible; lazy load scene SVG và Rive; optimize bằng SVGO |

---

## 1. `kawaii-beach-day` — Kawaii Beach Day Portfolio

Portfolio như một ngày đi biển pastel: dù sọc hồng, phao tim, lâu đài cát, dép xỏ ngón, nước biển trong veo, sticker trái tim và nắng vàng lấp lánh. Theme vui, sáng, nữ tính, hợp portfolio muốn gây thiện cảm ngay từ màn đầu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                     |
| ----------- | ------------------------------------------------------------------------- |
| Cảm xúc     | Cute, tươi, dễ thương, năng lượng hè, thân thiện                          |
| Hình khối   | Card bo 18–24px, sticker badge, wave edge, sun chip, beach towel panel    |
| Không gian  | Bãi cát kem, biển aqua, dù sọc, phao, lâu đài cát, cloud pastel           |
| Chuyển động | Wave sway, umbrella wiggle, floatie bob, sparkle twinkle, sticker bounce  |
| Điểm nhấn   | Beach girl mascot, heart floatie, sandcastle, shell stickers, sun sparkle |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F0FBFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#55C9F6",
    colorTextBase: "#244052",
    colorTextSecondary: "#648497",
    colorSuccess: "#73E6C2",
    colorWarning: "#FFD66E",
    colorError: "#FF7FA8",
    colorBorder: "#BDEFFF",
    borderRadius: 22,
    fontFamily: "'Fredoka', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --beach-sky: #F0FBFF;
// --aqua-wave: #55C9F6;
// --foam-blue: #BDEFFF;
// --coral-pink: #FF7FA8;
// --sunny-yellow: #FFD66E;
// --mint-splash: #73E6C2;
// --sand-cream: #FFF0C8;
// --ink-blue: #244052;
```

### Typography

- **Heading:** `Fredoka` tròn, vui, hợp sticker beach day.
- **Body:** `Nunito` mềm, rõ, dễ đọc trên nền pastel sáng.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme                                                  |
| -------------- | ---------------------------------------------------------------------- |
| Framer Motion  | Beach card reveal, towel panel slide, sticker pop, CTA success splash  |
| Rive           | Beach girl wave/blink/jump, floatie bob, sandcastle build reaction     |
| SVGator        | Wave loop, umbrella sway, seagull path, sparkle on water               |
| Lenis          | Smooth scroll qua beach day itinerary                                  |
| CSS Keyframes  | Bubble float, shell wiggle, cloud drift, sun sparkle, towel stripe move |

### Layout ideas

- **Hero:** Full-bleed beach scene: ocean layers, sand foreground, umbrella, heart floatie, beach girl mascot, floating sticker clouds.
- **About:** Profile như beach towel card có shell clips và sun sticker.
- **Projects:** Project cards như beach activity tickets: swim, picnic, photo walk, sunset.
- **Skills:** Skill shells trong xô cát; hover mở tooltip dạng mini sticker note.
- **Contact:** CTA “Send a beach hello”, bottle/shell mail trôi vào bờ với bubble burst.

### Animation rules

| Sự kiện          | Effect                                                | Thư viện          |
| ---------------- | ----------------------------------------------------- | ----------------- |
| Page load        | Sky fade + wave slide-up + mascot bounce-in           | Framer Motion     |
| Wave idle        | 4 wave layers sway lệch phase 8–14s                   | CSS/SVGator       |
| Umbrella idle    | Rotate ±2deg, transform-origin pole top               | CSS keyframes     |
| Floatie          | Bob Y 0→-10px→0, rotate ±1.5deg                       | Rive/CSS          |
| Sticker hover    | Pop scale 1→1.08 + rotate random ±4deg                | Framer Motion     |
| Shell sparkle    | Tiny star opacity/scale stagger                       | CSS keyframes     |
| Card hover       | Lift + foam edge translate + sun chip spin 12deg      | Framer Motion     |
| Contact success  | Shell mail opens + bubble burst + heart sparkle trail | Rive/Framer       |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Kawaii beach day shell
│   ├── routes.js                  ← shore, activities, shell-bucket, beach-mail
│   └── theme.js
├── pages/
│   ├── BeachDayHeroPage.jsx       ← Hero beach scene + mascot
│   ├── ActivityProjectsPage.jsx   ← Projects dạng beach activity tickets
│   ├── ShellBucketSkillsPage.jsx  ← Skills dạng xô cát/vỏ sò
│   └── BeachMailContactPage.jsx   ← Contact shell/bottle mail
├── features/
│   ├── beach-scene/
│   │   ├── OceanWaveLayers.jsx
│   │   ├── UmbrellaSway.jsx
│   │   ├── SunSparkleLayer.jsx
│   │   └── SandForeground.jsx
│   ├── beach-mascot/
│   │   ├── BeachGirlRiveController.jsx
│   │   └── FloatieBobReaction.jsx
│   └── beach-content/
│       ├── ActivityTicketGrid.jsx
│       ├── ShellSkillBucket.jsx
│       └── BeachStickerTooltip.jsx
└── assets/kawaii-beach-day/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                         | Nội dung cần vẽ                                     | Dùng cho              | Gợi ý kỹ thuật                                   |
| ---------------------------------- | --------------------------------------------------- | --------------------- | ------------------------------------------------ |
| `beach-girl-mascot.riv`            | Mascot nữ mặc váy biển, wave/blink/jump states      | Hero/CTA              | 3 states: idle, interact, success                |
| `pastel-beach-hero-scene.svg`      | Bãi biển, sóng, cát, mây, sun sticker               | Hero/background       | Layer sky/wave/sand riêng                        |
| `heart-floatie-set.svg`            | Phao tim, phao donut, beach ball                    | Hero/projects         | Tách shadow để bob                               |
| `umbrella-towel-pattern.svg`       | Dù sọc, khăn beach towel, stripe pattern            | About/cards           | Pattern reuse bằng `<symbol>`                    |
| `sandcastle-shells.svg`            | Lâu đài cát, xẻng, xô, vỏ sò                        | Skills/decor          | Sand noise nhẹ, shell sparkle group              |
| `kawaii-beach-stickers.svg`        | Sun, cloud, heart, starfish, sunglasses, flip-flops | Sticker layer/badges  | CurrentColor + pastel fill                       |
| `foam-bubble-particles.svg`        | Foam dots, bubbles, tiny sparkles                   | Particle layer        | Random delay, opacity thấp                       |
| `shell-mail-bottle.svg`            | Chai thư, shell envelope, pearl seal                 | Contact CTA           | Success open bằng mask/scale                     |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                               |
| --------------- | --------------------------------------------------------------------------------- |
| Theme ID        | Ghi rõ `kawaii-beach-day` trong data/theme config và README                       |
| Pages           | Có đủ hero beach scene, activity projects, shell bucket skills, beach mail contact |
| Visual priority | Hero phải thấy rõ biển, cát, dù, phao tim, mascot và sticker                      |
| Motion          | Nhấn mạnh wave sway, floatie bob, sticker pop, bubble burst                       |
| Assets          | Tạo đủ asset trong `src/assets/kawaii-beach-day/`                                  |

---

## 2. `mermaid-sticker-lagoon` — Mermaid Sticker Lagoon Portfolio

Portfolio như lagoon của nàng tiên cá sticker: vỏ sò hồng, ngọc trai, tóc tím lavender, san hô mềm, cá nhỏ và ánh shimmer lấp lánh. Theme nữ tính, mơ mộng, cute sang nhẹ, hợp portfolio beauty/art/illustration.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Dreamy, nữ tính, magical, cute, lung linh                               |
| Hình khối   | Shell card, pearl badge, scallop divider, lagoon glass panel            |
| Không gian  | Lagoon aqua, reef hồng tím, ngọc trai, bubble, shimmer wave             |
| Chuyển động | Mermaid tail sway, pearl shimmer, bubble float, fish swim, coral wave   |
| Điểm nhấn   | Mermaid mascot, giant shell stage, pearl CTA, coral sticker collection  |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#ECFCFF",
    colorBgContainer: "rgba(255, 255, 255, 0.82)",
    colorPrimary: "#67D7EF",
    colorTextBase: "#2C3659",
    colorTextSecondary: "#71799B",
    colorSuccess: "#7FE8CE",
    colorWarning: "#FFE39A",
    colorError: "#FF9AC7",
    colorBorder: "#C6F2FB",
    borderRadius: 24,
    fontFamily: "'Baloo 2', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --lagoon-aqua: #67D7EF;
// --pearl-white: #FFFDF7;
// --shell-pink: #FF9AC7;
// --coral-lavender: #C8A7FF;
// --seafoam-mint: #7FE8CE;
// --sun-pearl: #FFE39A;
// --deep-lagoon: #2C3659;
```

### Typography

- **Heading:** `Baloo 2` tròn, bouncy, hợp mascot mermaid.
- **Body:** `Nunito` thân thiện, giữ độ đọc tốt trong card glass.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool | Cách dùng trong theme                                                   |
| -------------- | ----------------------------------------------------------------------- |
| Framer Motion  | Shell card open, pearl reveal, project cards float, modal bubble open   |
| Rive           | Mermaid mascot idle/swim/wave, pearl CTA success                        |
| SVGator        | Bubble trails, fish swim path, coral sway, shell shimmer                |
| Lenis          | Smooth scroll như lặn qua lagoon layers                                 |
| CSS Keyframes  | Pearl shine, caustic light drift, bubble wobble, star twinkle           |

### Layout ideas

- **Hero:** Mermaid ngồi trên giant shell, lagoon water caustics, pearl bubbles bay lên, coral border hai bên.
- **About:** Profile trong shell compact mở ra như hộp trang sức.
- **Projects:** Cards là pearl cases; hover hé pearl chứa preview dự án.
- **Skills:** Coral reef skill garden, mỗi nhánh san hô là nhóm skill.
- **Contact:** CTA pearl wish; click gửi làm pearl phát sáng và cá nhỏ bơi vòng.

### Animation rules

| Sự kiện         | Effect                                           | Thư viện      |
| --------------- | ------------------------------------------------ | ------------- |
| Page load       | Lagoon caustics fade + shell open + mascot wave  | Framer/Rive   |
| Tail idle       | Tail sway 4–6s, hair drift 5–8s                  | Rive          |
| Bubble layer    | Bubble float up, wobble, fade at top             | CSS/SVGator   |
| Pearl hover     | Radial shimmer sweep + tiny sparkle burst        | CSS/Framer    |
| Coral idle      | Sway 6–10s lệch phase                            | CSS/SVGator   |
| Fish decoration | Swim path behind cards, pause random             | SVGator       |
| Project hover   | Shell lid rotateX + pearl scale 1.06             | Framer Motion |
| Contact success | Pearl glow expands + fish circle + bubble hearts | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Mermaid lagoon shell
│   ├── routes.js                       ← lagoon, pearl-cases, coral-skills, pearl-wish
│   └── theme.js
├── pages/
│   ├── MermaidLagoonHeroPage.jsx       ← Hero mermaid + giant shell
│   ├── PearlCaseProjectsPage.jsx       ← Projects dạng pearl case cards
│   ├── CoralReefSkillsPage.jsx         ← Skills dạng reef garden
│   └── PearlWishContactPage.jsx        ← Contact pearl wish CTA
├── features/
│   ├── lagoon-scene/
│   │   ├── CausticLightLayer.jsx
│   │   ├── BubbleTrailLayer.jsx
│   │   ├── CoralBorder.jsx
│   │   └── FishSwimPath.jsx
│   ├── mermaid-mascot/
│   │   ├── MermaidRiveController.jsx
│   │   └── TailSwayReaction.jsx
│   └── pearl-content/
│       ├── PearlProjectGrid.jsx
│       ├── ShellOpenCard.jsx
│       └── CoralSkillBranch.jsx
└── assets/mermaid-sticker-lagoon/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                         | Nội dung cần vẽ                                | Dùng cho             | Gợi ý kỹ thuật                         |
| ---------------------------------- | ---------------------------------------------- | -------------------- | -------------------------------------- |
| `mermaid-mascot.riv`               | Mermaid cute, tail, hair, wave, swim states    | Hero/CTA             | Hair/tail bones riêng                  |
| `giant-shell-stage.svg`            | Vỏ sò sân khấu lớn, pearl seat, soft shadow    | Hero/about           | Lid group để open animation            |
| `lagoon-caustics.svg`              | Ánh nước caustic, shimmer ribbons              | Background           | Blend mode/opacity thấp                |
| `pearl-case-cards.svg`             | Shell case, pearl, scallop frame               | Project cards        | Pearl gradient + shine mask            |
| `coral-sticker-reef.svg`           | San hô hồng/tím, rong biển, starfish           | Skills/decor         | Branch symbol reuse                    |
| `tiny-fish-trails.svg`             | Cá nhỏ, heart bubble path                      | Motion layer         | Path animate translate/offset          |
| `mermaid-sticker-icons.svg`        | Shell, pearl, comb, crown, tail, wave, sparkle | Nav/badges           | Icon 24x24, currentColor               |
| `pearl-bubble-particles.svg`       | Bubble, pearl dots, heart sparkle              | Particle/contact     | Scale/opacity random delay             |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                              |
| --------------- | -------------------------------------------------------------------------------- |
| Theme ID        | Ghi rõ `mermaid-sticker-lagoon` trong data/theme config và README                |
| Pages           | Có đủ lagoon hero, pearl case projects, coral reef skills, pearl wish contact    |
| Visual priority | Hero phải thấy rõ mermaid, giant shell, pearl, coral reef và lagoon caustics     |
| Motion          | Nhấn mạnh tail sway, shell open, bubble float, pearl shimmer                     |
| Assets          | Tạo đủ asset trong `src/assets/mermaid-sticker-lagoon/`                          |

---

## 3. `dolphin-summer-splash` — Dolphin Summer Splash Portfolio

Portfolio như công viên nước ngoài biển: cá heo cười, splash xanh trong, cầu trượt mini, phao sao, cờ tam giác và bảng điểm vui nhộn. Theme năng lượng cao nhưng vẫn pastel, rất hợp portfolio trẻ trung, product/design, marketing hoặc social creator.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Vui, nhanh, sảng khoái, friendly, sporty-cute                          |
| Hình khối   | Splash card, wave ribbon, scoreboard badge, floatie tab, rounded ticket |
| Không gian  | Water park trên biển, cá heo, splash arcs, phao sao, cờ hè             |
| Chuyển động | Dolphin jump, splash burst, score pop, flag flutter, water ripple       |
| Điểm nhấn   | Dolphin mascot, splash portal, star floatie, summer scoreboard          |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#EAFBFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#32BDF3",
    colorTextBase: "#183B55",
    colorTextSecondary: "#5F7E92",
    colorSuccess: "#62E6B9",
    colorWarning: "#FFE06F",
    colorError: "#FF7B9D",
    colorBorder: "#B7ECFF",
    borderRadius: 20,
    fontFamily: "'Nunito', 'Fredoka', sans-serif",
  },
};

// --splash-blue: #32BDF3;
// --pool-aqua: #A9F0FF;
// --dolphin-sky: #EAFBFF;
// --coral-pop: #FF7B9D;
// --star-yellow: #FFE06F;
// --mint-wave: #62E6B9;
// --deep-ink: #183B55;
```

### Typography

- **Heading:** `Fredoka` cho chữ lớn bouncy và dễ thương.
- **Body:** `Nunito` cân bằng độ cute với tính đọc tốt.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Cá heo nhảy qua vòng splash, background là water park pastel, tên như bảng điểm mùa hè.
- **About:** Profile card dạng lifeguard board cute, có whistle sticker và wave ribbon.
- **Projects:** Project cards như attraction passes; hover tăng score và phun splash nhỏ.
- **Skills:** Skill scoreboard chia nhóm: build, design, communicate, ship.
- **Contact:** CTA “Make a splash”, click gửi tạo splash ring và cá heo vẫy.

### Animation rules

| Sự kiện         | Effect                                             | Thư viện          |
| --------------- | -------------------------------------------------- | ----------------- |
| Page load       | Splash portal scale in + dolphin jump              | Framer/Rive       |
| Dolphin idle    | Bob + blink + fin wave, occasional mini jump        | Rive              |
| Splash burst    | Droplet scale/opacity stagger 0.4–0.8s              | Framer/CSS        |
| Score pop       | Number/card badge bounce + star sparkle            | Framer Motion     |
| Flag line       | Flutter 3–5s, each flag delay lệch                 | CSS/SVGator       |
| Ripple layer    | Concentric rings expand and fade                   | CSS keyframes     |
| Card hover      | Lift + water shine sweep + sticker wobble          | Framer Motion     |
| Contact success | Dolphin loop jump + splash hearts + score confetti | Rive/Framer       |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Dolphin splash shell
│   ├── routes.js                     ← splash-hero, passes, scoreboard, splash-mail
│   └── theme.js
├── pages/
│   ├── SplashHeroPage.jsx            ← Hero cá heo + splash portal
│   ├── AttractionPassProjectsPage.jsx← Projects dạng water park passes
│   ├── ScoreboardSkillsPage.jsx      ← Skills dạng summer scoreboard
│   └── SplashMailContactPage.jsx     ← Contact make a splash
├── features/
│   ├── splash-scene/
│   ├── dolphin-mascot/
│   ├── attraction-passes/
│   └── scoreboard-skills/
└── assets/dolphin-summer-splash/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                    | Nội dung cần vẽ                                  | Dùng cho        | Gợi ý kỹ thuật                       |
| ----------------------------- | ------------------------------------------------ | --------------- | ------------------------------------ |
| `dolphin-mascot.riv`          | Dolphin idle, jump, wave fin, success loop       | Hero/CTA        | Arc jump path + splash trigger       |
| `splash-portal.svg`           | Vòng nước lớn, droplets, foam, shine             | Hero            | Droplet groups riêng để burst        |
| `water-park-background.svg`   | Cầu trượt, wave pool, mây, cờ tam giác           | Background      | Layer depth parallax                 |
| `star-floatie-set.svg`        | Phao sao, phao tròn, phao tim                    | Cards/decor     | Bob shadow riêng                     |
| `summer-scoreboard.svg`       | Score panels, progress bars, star badges         | Skills          | Text HTML overlay                    |
| `splash-ticket-cards.svg`     | Attraction pass, wristband, stamp, QR sticker    | Projects        | Frame reusable                       |
| `water-confetti-particles.svg`| Droplets, stars, mini hearts, bubbles            | Particle layer  | Max 20 visible                       |
| `dolphin-club-icons.svg`      | Dolphin, whistle, wave, flag, buoy, sparkle      | Nav/badges      | 24x24 currentColor                   |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                                 |
| ------------ | ----------------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `dolphin-summer-splash` trong data/theme config và README                    |
| Pages        | Có hero splash, attraction passes projects, scoreboard skills, splash mail contact  |
| Motion       | Nhấn dolphin jump, splash burst, score pop, flag flutter                            |
| Assets       | Tạo đủ asset trong `src/assets/dolphin-summer-splash/`                              |

---

## 4. `jellyfish-pastel-dream` — Jellyfish Pastel Dream Portfolio

Portfolio như chuyến lặn vào vùng biển pastel có sứa phát sáng: nền aqua-lavender, tentacle mềm, bubble sáng, plankton sparkle và cards bán trong suốt. Theme dreamy, nữ tính, motion đẹp, hợp portfolio motion/visual/art.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Dreamy, nhẹ, magical, underwater, thư giãn                              |
| Hình khối   | Translucent card, jelly cap badge, bubble tab, glowing outline         |
| Không gian  | Nước sâu pastel, jellyfish group, light beam, plankton sparkle         |
| Chuyển động | Tentacle wave, jelly pulse, bubble drift, plankton twinkle, card float |
| Điểm nhấn   | Jellyfish mascot/object, glow ribbons, underwater glass panels         |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F1FBFF",
    colorBgContainer: "rgba(255, 255, 255, 0.72)",
    colorPrimary: "#8DDCFF",
    colorTextBase: "#253756",
    colorTextSecondary: "#6E7EA0",
    colorSuccess: "#9CF0D7",
    colorWarning: "#FFE8A3",
    colorError: "#FFA6D4",
    colorBorder: "rgba(141, 220, 255, 0.42)",
    borderRadius: 24,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

// --jelly-aqua: #8DDCFF;
// --dream-lavender: #C9B6FF;
// --glow-pink: #FFA6D4;
// --mint-light: #9CF0D7;
// --pearl-yellow: #FFE8A3;
// --deep-dream: #253756;
```

### Typography

- **Heading:** `Quicksand` mềm, tròn, hợp underwater dreamy.
- **Body:** `Nunito` rõ trên glass card.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Jellyfish lớn full-bleed, tentacle glow, light beams từ trên, bubble layers phía trước.
- **About:** Glass profile panel như bong bóng trong nước.
- **Projects:** Cards như jelly pods nổi theo dòng nước; hover làm glow pulse.
- **Skills:** Skill plankton constellation, line nối các bubble skill.
- **Contact:** CTA “Send a glow”, message biến thành light trail.

### Animation rules

| Sự kiện         | Effect                                      | Thư viện      |
| --------------- | ------------------------------------------- | ------------- |
| Page load       | Light beams fade + jellyfish float-in       | Framer Motion |
| Jelly idle      | Cap pulse scale 1→1.03 + tentacle sine wave | Rive/SVGator  |
| Bubble layer    | Vertical drift, wobble, depth blur          | CSS keyframes |
| Plankton        | Twinkle opacity/scale random                | CSS keyframes |
| Card idle       | Float Y 2–6px, rotate ±0.4deg               | CSS keyframes |
| Card hover      | Glow border sweep + bubble pop              | Framer Motion |
| Skill connect   | SVG stroke draw between bubble nodes        | Framer/SVG    |
| Contact success | Light trail path draw + jelly pulse         | Framer/Rive   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Jellyfish dream shell
│   ├── routes.js                  ← glow-sea, jelly-pods, plankton-map, glow-mail
│   └── theme.js
├── pages/
│   ├── GlowSeaHeroPage.jsx        ← Hero jellyfish + light beams
│   ├── JellyPodProjectsPage.jsx   ← Projects dạng floating pods
│   ├── PlanktonMapSkillsPage.jsx  ← Skills dạng bubble constellation
│   └── GlowMailContactPage.jsx    ← Contact light trail
├── features/
│   ├── underwater-glow-scene/
│   ├── jellyfish-object/
│   ├── jelly-pods/
│   └── plankton-skills/
└── assets/jellyfish-pastel-dream/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                    | Nội dung cần vẽ                              | Dùng cho       | Gợi ý kỹ thuật                          |
| ----------------------------- | -------------------------------------------- | -------------- | --------------------------------------- |
| `jellyfish-object.riv`         | Jellyfish pulse, tentacle wave, success glow | Hero/CTA       | Bones/tentacles tách riêng              |
| `underwater-light-beams.svg`   | Beams, caustic ribbons, soft glow            | Background     | Opacity low, blend screen               |
| `jelly-pod-cards.svg`          | Pod frame, bubble glass, glow edge           | Projects       | HTML text overlay                       |
| `plankton-constellation.svg`   | Dots, line paths, mini stars                 | Skills         | Stroke-dash draw                        |
| `pastel-bubble-depth.svg`      | Bubble nhiều size và blur layer              | Particles      | Depth grouping                          |
| `glow-ribbon-trails.svg`       | Light trail, shimmer path, comet dot         | Contact/motion | Path draw + opacity fade                |
| `jellyfish-sticker-icons.svg`  | Jelly, bubble, star, shell, moon, sparkle    | Nav/badges     | CurrentColor + gradient fill            |
| `soft-water-patterns.svg`      | Wave lines, caustics, tiny dots              | Section bg     | SVG pattern tile                        |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                            |
| ------------ | ------------------------------------------------------------------------------ |
| Theme ID     | Ghi rõ `jellyfish-pastel-dream` trong data/theme config và README              |
| Pages        | Có glow sea hero, jelly pod projects, plankton map skills, glow mail contact   |
| Motion       | Nhấn tentacle wave, jelly pulse, bubble drift, light trail draw                |
| Assets       | Tạo đủ asset trong `src/assets/jellyfish-pastel-dream/`                        |

---

## 5. `seashell-resort-diary` — Seashell Resort Diary Portfolio

Portfolio như cuốn nhật ký nghỉ dưỡng ở resort biển: room key pastel, khăn trắng, vỏ sò, bản đồ khu nghỉ, cửa sổ nhìn ra biển và sticker check-in. Theme nữ tính, sạch, nịnh mắt, hợp portfolio travel/lifestyle/storytelling.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Resort, thư giãn, gọn đẹp, cute sang, summer diary                      |
| Hình khối   | Diary card, shell bookmark, room-key badge, postcard tab                |
| Không gian  | Resort pastel, balcony ocean view, shell tray, luggage tag, map         |
| Chuyển động | Page flip, key swing, curtain drift, wave view shimmer, stamp pop       |
| Điểm nhấn   | Seashell diary, room key mascot/object, resort map, shell tray          |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F4FCFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#6ACDF0",
    colorTextBase: "#263D4A",
    colorTextSecondary: "#6D8490",
    colorSuccess: "#80DEC5",
    colorWarning: "#FAD883",
    colorError: "#FF9CB5",
    colorBorder: "#CBEFF8",
    borderRadius: 18,
    fontFamily: "'DM Sans', 'Fraunces', sans-serif",
  },
};

// --resort-sky: #F4FCFF;
// --balcony-blue: #6ACDF0;
// --shell-blush: #FFCAD8;
// --room-key-gold: #FAD883;
// --spa-mint: #80DEC5;
// --diary-ink: #263D4A;
```

### Typography

- **Heading:** `Fraunces` tạo cảm giác resort editorial và nữ tính.
- **Body:** `DM Sans` gọn, hiện đại, dễ scan trong diary layout.

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Layout ideas

- **Hero:** Balcony ocean view, curtain pastel, diary mở, room key treo ở góc, shell tray foreground.
- **About:** Trang check-in diary có avatar, stamp ngày nghỉ, mini resort map.
- **Projects:** Mỗi project là một diary spread hoặc room card có shell bookmark.
- **Skills:** Resort amenity board: spa, cafe, beach, pool tương ứng nhóm skill.
- **Contact:** CTA “Leave a resort note”, card trượt vào envelope kẹp room key.

### Animation rules

| Sự kiện         | Effect                                            | Thư viện      |
| --------------- | ------------------------------------------------- | ------------- |
| Page load       | Curtain open + ocean shimmer + diary page reveal  | Framer/SVG    |
| Room key idle   | Swing 2–4deg from key ring                        | CSS/Rive      |
| Page flip       | RotateY + paper shadow when section changes       | Framer Motion |
| Stamp pop       | Scale 0.8→1 + rotate -6→0deg                      | Framer Motion |
| Wave view       | Subtle horizontal shimmer behind balcony          | CSS/SVGator   |
| Shell hover     | Pearl glint sweep + tiny sparkle                  | CSS keyframes |
| Card hover      | Lift + shell bookmark slide                       | Framer Motion |
| Contact success | Envelope close + room key charm sparkle           | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Seashell resort diary shell
│   ├── routes.js                   ← balcony, diary-spreads, amenities, resort-note
│   └── theme.js
├── pages/
│   ├── ResortBalconyHeroPage.jsx   ← Hero balcony ocean view
│   ├── DiarySpreadProjectsPage.jsx ← Projects dạng diary spreads
│   ├── AmenitySkillsPage.jsx       ← Skills dạng amenity board
│   └── ResortNoteContactPage.jsx   ← Contact resort note
├── features/
│   ├── resort-scene/
│   ├── room-key-object/
│   ├── diary-projects/
│   └── amenity-skills/
└── assets/seashell-resort-diary/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                    | Nội dung cần vẽ                              | Dùng cho        | Gợi ý kỹ thuật                     |
| ----------------------------- | -------------------------------------------- | --------------- | ---------------------------------- |
| `room-key-object.riv`          | Room key swing, sparkle, success seal        | Hero/contact    | Pivot ở key ring                   |
| `resort-balcony-scene.svg`     | Cửa ban công, biển, rèm, ghế, khăn           | Hero/background | Curtain group riêng                |
| `seashell-diary-spreads.svg`   | Diary page, shell bookmark, tape, stamp      | Projects/about  | Page flip frame                    |
| `resort-map-stickers.svg`      | Map mini, pin, path, pool, cafe, beach       | Skills/about    | Path draw cho map route            |
| `room-key-badges.svg`          | Key tag, number charm, ribbon, tiny shell    | Badges/cards    | HTML text overlay                  |
| `shell-tray-set.svg`           | Vỏ sò, pearl, towel, sunscreen, sunglasses   | Foreground      | Soft shadow                        |
| `balcony-wave-shimmer.svg`     | Ocean view wave, sparkle, horizon            | Background      | Shimmer opacity loop               |
| `resort-diary-icons.svg`       | Key, shell, map, bed, pool, suitcase, stamp  | Nav/icons       | CurrentColor + pastel fill         |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                             |
| ------------ | ------------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `seashell-resort-diary` trong data/theme config và README                |
| Pages        | Có resort balcony hero, diary projects, amenity skills, resort note contact     |
| Motion       | Nhấn curtain open, page flip, key swing, wave shimmer                           |
| Assets       | Tạo đủ asset trong `src/assets/seashell-resort-diary/`                          |

---

## 6. `tropical-icecream-boardwalk` — Tropical Ice Cream Boardwalk Portfolio

Portfolio như lối đi gỗ bên biển bán kem mùa hè: xe kem pastel, que kem, dừa, biển hiệu vui, nắng vàng và confetti trái cây. Theme cực nịnh mắt, nhiều màu nhưng vẫn sáng, hợp food/lifestyle/playful design.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Ngọt, vui, tropical, cute, rực rỡ vừa phải                            |
| Hình khối   | Ice cream card, menu board, scoop badge, fruit sticker, waffle frame  |
| Không gian  | Boardwalk ven biển, xe kem, palm, biển hiệu, sóng xa                  |
| Chuyển động | Scoop bounce, icecream drip, palm sway, fruit confetti, menu flip     |
| Điểm nhấn   | Ice cream cart mascot/object, tropical scoops, boardwalk menu cards   |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF9F1",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#45C7F0",
    colorTextBase: "#3B354A",
    colorTextSecondary: "#7C7186",
    colorSuccess: "#71E0B8",
    colorWarning: "#FFD36E",
    colorError: "#FF7EA6",
    colorBorder: "#FFE0B5",
    borderRadius: 18,
    fontFamily: "'Lilita One', 'Nunito', sans-serif",
  },
};

// --icecream-cream: #FFF9F1;
// --boardwalk-blue: #45C7F0;
// --strawberry-scoop: #FF7EA6;
// --mango-yellow: #FFD36E;
// --mint-scoop: #71E0B8;
// --waffle-tan: #E9B86E;
// --ink-plum: #3B354A;
```

### Typography

- **Heading:** `Lilita One` dày, vui, hợp biển hiệu xe kem.
- **Body:** `Nunito` giữ nội dung mềm và dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Ice cream cart trên boardwalk, biển xa, palm, menu board có tên portfolio.
- **About:** Profile như menu đặc biệt trong khung waffle cone.
- **Projects:** Project cards là flavor cards; mỗi dự án là một vị kem.
- **Skills:** Scoop stack: mỗi scoop là nhóm skill, hover chảy topping sparkle.
- **Contact:** CTA “Order a hello”, ticket in ra từ xe kem.

### Animation rules

| Sự kiện         | Effect                                         | Thư viện      |
| --------------- | ---------------------------------------------- | ------------- |
| Page load       | Cart roll-in + menu board flip + scoop bounce  | Framer/Rive   |
| Scoop idle      | Bounce nhẹ 3s, topping sparkle                 | CSS/Rive      |
| Drip            | Ice cream drip path scaleY + fade              | SVGator/CSS   |
| Palm            | Sway 5–8s lệch phase                           | CSS keyframes |
| Fruit confetti  | Drift down + rotate, max density mobile giảm   | CSS keyframes |
| Flavor hover    | Scoop pop + label slide + shine sweep          | Framer Motion |
| Menu flip       | RotateX card menu when changing section        | Framer Motion |
| Contact success | Receipt print + bell ding visual sparkle       | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Ice cream boardwalk shell
│   ├── routes.js                     ← cart, flavors, scoop-stack, order-note
│   └── theme.js
├── pages/
│   ├── BoardwalkCartHeroPage.jsx     ← Hero cart + ocean boardwalk
│   ├── FlavorProjectsPage.jsx        ← Projects dạng flavor cards
│   ├── ScoopStackSkillsPage.jsx      ← Skills dạng scoop stack
│   └── OrderNoteContactPage.jsx      ← Contact receipt/order note
├── features/
│   ├── boardwalk-scene/
│   ├── icecream-cart-object/
│   ├── flavor-projects/
│   └── scoop-skills/
└── assets/tropical-icecream-boardwalk/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                      | Nội dung cần vẽ                                | Dùng cho       | Gợi ý kỹ thuật                  |
| ------------------------------- | ---------------------------------------------- | -------------- | ------------------------------- |
| `icecream-cart-object.riv`       | Cart roll, bell, receipt print, mascot face    | Hero/contact   | Wheel rotate + receipt trigger  |
| `boardwalk-ocean-scene.svg`      | Lối gỗ, biển, palm, clouds, sun sign           | Background     | Parallax layers                 |
| `tropical-scoop-set.svg`         | Strawberry, mango, mint, coconut, blueberry    | Skills/cards   | Scoop symbols                   |
| `waffle-menu-frames.svg`         | Menu board, waffle cone frame, price tag       | About/projects | HTML text overlay               |
| `fruit-confetti.svg`             | Dứa, dâu, cam, cherry, mint leaf, star         | Particles      | Random delay                    |
| `icecream-drips.svg`             | Drip path, topping, chocolate line             | Hover effects  | ScaleY from top                 |
| `receipt-ticket-set.svg`         | Receipt, order ticket, stamp, sticker          | Contact        | Print animation mask            |
| `boardwalk-icecream-icons.svg`   | Cone, cart, palm, wave, bell, spoon, ticket    | Nav/badges     | CurrentColor                    |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                                       |
| ------------ | ----------------------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `tropical-icecream-boardwalk` trong data/theme config và README                    |
| Pages        | Có cart hero, flavor projects, scoop stack skills, order note contact                     |
| Motion       | Nhấn cart roll-in, scoop bounce, drip, fruit confetti, receipt print                      |
| Assets       | Tạo đủ asset trong `src/assets/tropical-icecream-boardwalk/`                              |

---

## 7. `bubble-tea-beach-cafe` — Bubble Tea Beach Cafe Portfolio

Portfolio như quán trà sữa nhỏ nhìn ra biển: ly trà sữa pastel, trân châu bay như bubble, mái hiên sọc, menu cute, biển xanh sau cửa kính. Theme ngọt, nữ tính, vui, hợp creator/business/designer thích cafe aesthetic.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Cảm xúc     | Ngọt, cozy, cute, summer cafe, thân thiện                                |
| Hình khối   | Cup card, straw badge, menu sticker, boba dot pattern, awning frame      |
| Không gian  | Beach cafe, cửa kính nhìn biển, quầy order, ly trà sữa, palm ngoài cửa   |
| Chuyển động | Boba bounce, straw wiggle, drink swirl, steam/cloud drift, receipt slide |
| Điểm nhấn   | Bubble tea cup mascot/object, cafe menu board, boba skill grid           |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF7FB",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#70D5F2",
    colorTextBase: "#3D2F46",
    colorTextSecondary: "#7D6D86",
    colorSuccess: "#8BE6C4",
    colorWarning: "#FFD989",
    colorError: "#FF91B8",
    colorBorder: "#FFD7E8",
    borderRadius: 22,
    fontFamily: "'M PLUS Rounded 1c', 'Nunito', sans-serif",
  },
};

// --boba-pink: #FFF7FB;
// --sea-window: #70D5F2;
// --milk-tea: #D9A76C;
// --strawberry-milk: #FF91B8;
// --matcha-mint: #8BE6C4;
// --pudding-yellow: #FFD989;
// --ink-plum: #3D2F46;
```

### Typography

- **Heading:** `M PLUS Rounded 1c` rounded, kawaii, hợp menu cafe.
- **Body:** `Nunito` thân thiện, dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Quầy trà sữa ven biển, cup mascot ở foreground, cửa kính có wave shimmer.
- **About:** Profile như loyalty card, có stamp boba và sticker trái tim.
- **Projects:** Menu cards theo vị đồ uống; mỗi project là một cup flavor.
- **Skills:** Boba pearls trong cup grid; hover pearl nảy lên và hiện label.
- **Contact:** CTA “Order a message”, receipt in ra với bubble hearts.

### Animation rules

| Sự kiện         | Effect                                         | Thư viện      |
| --------------- | ---------------------------------------------- | ------------- |
| Page load       | Awning drop + cup bounce + window wave shimmer | Framer/Rive   |
| Cup idle        | Straw wiggle + face blink + drink swirl        | Rive/CSS      |
| Boba pearls     | Bounce stagger, collide-like playful motion    | CSS keyframes |
| Menu hover      | Flavor sticker pop + cup tilt                  | Framer Motion |
| Receipt         | Slide down from register                       | Framer Motion |
| Window ocean    | Wave shimmer behind glass                      | SVGator/CSS   |
| Stamp           | Loyalty stamp pop + ink ring                   | Framer Motion |
| Contact success | Receipt print + boba heart burst               | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                   ← Bubble tea beach cafe shell
│   ├── routes.js                 ← cafe-window, drink-menu, boba-cup, order-message
│   └── theme.js
├── pages/
│   ├── CafeWindowHeroPage.jsx    ← Hero cafe + sea window + cup mascot
│   ├── DrinkMenuProjectsPage.jsx ← Projects dạng menu flavors
│   ├── BobaCupSkillsPage.jsx     ← Skills dạng boba pearls
│   └── OrderMessageContactPage.jsx
├── features/
│   ├── cafe-scene/
│   ├── boba-cup-mascot/
│   ├── drink-menu/
│   └── boba-skills/
└── assets/bubble-tea-beach-cafe/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                      | Nội dung cần vẽ                             | Dùng cho       | Gợi ý kỹ thuật                     |
| ------------------------------- | ------------------------------------------- | -------------- | ---------------------------------- |
| `boba-cup-mascot.riv`            | Cup face, straw wiggle, swirl, success      | Hero/contact   | State: idle, sip, print            |
| `beach-cafe-window.svg`          | Quầy cafe, cửa kính, biển, palm, awning     | Hero           | Window wave shimmer                |
| `drink-menu-cards.svg`           | Menu board, flavor card, sticker price      | Projects       | HTML text overlay                  |
| `boba-pearl-grid.svg`            | Pearls, cup base, jelly cubes, topping      | Skills         | Pearl symbols                      |
| `loyalty-card-stamps.svg`        | Loyalty card, stamp, coupon, smile sticker  | About/badges   | Stamp pop group                    |
| `receipt-printer-set.svg`        | Register, receipt, ticket, seal             | Contact        | Mask reveal receipt                |
| `boba-heart-particles.svg`       | Pearls, hearts, bubbles, tiny stars         | Particles      | Bounce/fade                        |
| `beach-cafe-icons.svg`           | Cup, straw, pearl, wave, palm, menu, stamp   | Nav/icons      | CurrentColor                       |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                             |
| ------------ | ------------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `bubble-tea-beach-cafe` trong data/theme config và README                |
| Pages        | Có cafe window hero, drink menu projects, boba cup skills, order message contact|
| Motion       | Nhấn cup bounce, boba bounce, straw wiggle, receipt print                       |
| Assets       | Tạo đủ asset trong `src/assets/bubble-tea-beach-cafe/`                          |

---

## 8. `pink-surf-girl-club` — Pink Surf Girl Club Portfolio

Portfolio như club lướt sóng hồng pastel: ván surf sticker, sóng xanh, bikini/t-shirt sporty cute, huy hiệu club và ảnh polaroid. Theme năng động, nữ tính, rực rỡ, hợp media/sport/lifestyle hoặc personal brand mạnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Sporty-cute, tự tin, vui, sunny, năng lượng cao                         |
| Hình khối   | Surfboard card, club badge, wave ribbon, polaroid sticker, wax stamp    |
| Không gian  | Bãi surf, wave tunnel, boards rack, beach club flags                    |
| Chuyển động | Surfboard glide, wave curl, sticker slap, flag flutter, polaroid shake  |
| Điểm nhấn   | Surf girl mascot, pink surfboard, club badge wall, wave tunnel hero     |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F2FCFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#48C8F4",
    colorTextBase: "#26374D",
    colorTextSecondary: "#657892",
    colorSuccess: "#66E2BE",
    colorWarning: "#FFD66B",
    colorError: "#FF6FA8",
    colorBorder: "#BEEFFF",
    borderRadius: 16,
    fontFamily: "'Bricolage Grotesque', 'Nunito', sans-serif",
  },
};

// --surf-blue: #48C8F4;
// --pink-board: #FF6FA8;
// --club-yellow: #FFD66B;
// --seafoam: #66E2BE;
// --foam-white: #FFFFFF;
// --deep-board: #26374D;
```

### Typography

- **Heading:** `Bricolage Grotesque` cá tính, hơi editorial, hợp club badge.
- **Body:** `Nunito` làm tổng thể mềm và cute hơn.

```css
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Surf girl đứng trên board, wave curl sau lưng, sticker club bay quanh.
- **About:** Member card của surf club, có polaroid avatar và badge level.
- **Projects:** Project cards là surfboards trên rack; hover board trượt ra.
- **Skills:** Badge wall chia nhóm skill bằng club patches.
- **Contact:** CTA “Catch a wave”, message lướt theo wave line vào inbox.

### Animation rules

| Sự kiện         | Effect                                        | Thư viện      |
| --------------- | --------------------------------------------- | ------------- |
| Page load       | Wave curl draw + surf girl glide-in           | Framer/Rive   |
| Surf idle       | Board bob + hair/headband flutter             | Rive          |
| Wave curl       | Path morph/sway 6–10s                         | SVGator/CSS   |
| Sticker slap    | Sticker scale/rotate pop on section entrance  | Framer Motion |
| Board hover     | Board slides out + wax shine sweep            | Framer Motion |
| Flag line       | Flutter stagger                               | CSS keyframes |
| Polaroid hover  | Shake 1–2deg + caption reveal                 | CSS/Framer    |
| Contact success | Message rides wave + club badge sparkle       | Framer/Rive   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Pink surf girl club shell
│   ├── routes.js                  ← wave-club, board-rack, badge-wall, catch-wave
│   └── theme.js
├── pages/
│   ├── SurfClubHeroPage.jsx       ← Hero surf girl + wave curl
│   ├── BoardRackProjectsPage.jsx  ← Projects dạng surfboards
│   ├── ClubBadgeSkillsPage.jsx    ← Skills dạng badge wall
│   └── CatchWaveContactPage.jsx   ← Contact wave message
├── features/
│   ├── surf-scene/
│   ├── surf-girl-mascot/
│   ├── board-projects/
│   └── badge-skills/
└── assets/pink-surf-girl-club/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                   | Nội dung cần vẽ                             | Dùng cho       | Gợi ý kỹ thuật                 |
| ---------------------------- | ------------------------------------------- | -------------- | ------------------------------ |
| `surf-girl-mascot.riv`        | Surf girl idle, glide, wave, success pose   | Hero/contact   | Board bob + hair flutter       |
| `pink-surfboard-set.svg`      | Ván surf nhiều pattern, leash, wax shine    | Projects       | Board slide group              |
| `wave-curl-hero.svg`          | Sóng curl, foam, splash, horizon            | Hero           | Path morph/sway                |
| `surf-club-badges.svg`        | Patches, club crest, stars, level badges    | Skills/about   | Badge symbols                  |
| `polaroid-beach-frames.svg`   | Polaroid, tape, caption strip, film corner  | About/projects | Text HTML overlay              |
| `club-flag-line.svg`          | Cờ tam giác, dây, knots, shell charms       | Divider/nav    | Flutter per flag               |
| `wave-message-trail.svg`      | Message envelope, wave line, foam hearts    | Contact        | Path draw                      |
| `surf-sticker-icons.svg`      | Board, wave, sun, wax, shell, glasses       | Nav/icons      | CurrentColor                   |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                            |
| ------------ | ------------------------------------------------------------------------------ |
| Theme ID     | Ghi rõ `pink-surf-girl-club` trong data/theme config và README                 |
| Pages        | Có surf club hero, board rack projects, badge wall skills, catch wave contact  |
| Motion       | Nhấn surf glide, wave curl, sticker slap, board hover                          |
| Assets       | Tạo đủ asset trong `src/assets/pink-surf-girl-club/`                           |

---

## 9. `coral-fairy-reef` — Coral Fairy Reef Portfolio

Portfolio như khu rừng san hô có tiên biển nhỏ: cánh trong suốt, san hô hồng, cá con, sao biển, bụi phép lấp lánh dưới nước. Theme fantasy cute, nhiều assets nhỏ, hợp portfolio art/illustration/creative.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Fantasy, magical, cute, mềm, nữ tính                                |
| Hình khối   | Coral card, fairy wing badge, reef arch, potion pearl, ribbon tag   |
| Không gian  | Reef hồng/cam/mint, fairy glow, cá nhỏ, shell house, sea flowers    |
| Chuyển động | Fairy flutter, coral sway, fish circle, sparkle dust, wing shimmer  |
| Điểm nhấn   | Coral fairy mascot, reef arch hero, shell houses, magic pearl trail |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#EFFDFF",
    colorBgContainer: "rgba(255, 255, 255, 0.78)",
    colorPrimary: "#6BD8F2",
    colorTextBase: "#2E3457",
    colorTextSecondary: "#747A9B",
    colorSuccess: "#8DE8C6",
    colorWarning: "#FFE28A",
    colorError: "#FF8DAF",
    colorBorder: "#C9F0F8",
    borderRadius: 24,
    fontFamily: "'Cherry Bomb One', 'Nunito', sans-serif",
  },
};

// --fairy-aqua: #6BD8F2;
// --coral-pink: #FF8DAF;
// --reef-mint: #8DE8C6;
// --magic-yellow: #FFE28A;
// --wing-lavender: #BFAEFF;
// --deep-violet: #2E3457;
```

### Typography

- **Heading:** `Cherry Bomb One` siêu cute, hợp fantasy sticker.
- **Body:** `Nunito` giảm độ nghịch, giữ nội dung rõ.

```css
@import url("https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Reef arch mở như cổng phép, coral fairy bay cạnh pearl trail, cá nhỏ vòng quanh.
- **About:** Shell house profile, cánh fairy làm tab decoration.
- **Projects:** Cards là coral treasure plaques; hover hiện magic dust và cá bơi qua.
- **Skills:** Sea flower garden, mỗi flower là nhóm skill.
- **Contact:** CTA “Send reef magic”, pearl trail chạy đến shell mailbox.

### Animation rules

| Sự kiện         | Effect                                        | Thư viện      |
| --------------- | --------------------------------------------- | ------------- |
| Page load       | Reef arch grow + fairy flutter-in             | Framer/Rive   |
| Fairy idle      | Wing flutter + body float + blink             | Rive          |
| Coral idle      | Slow sway 6–12s, phase per branch             | CSS/SVGator   |
| Magic dust      | Sparkle drift following curved path           | CSS/SVGator   |
| Fish circle     | Orbit path around reef cards                  | SVGator       |
| Project hover   | Treasure plaque lift + pearl glint            | Framer Motion |
| Skill flower    | Bloom scale + label fade                      | Framer Motion |
| Contact success | Pearl trail draw + shell mailbox glow         | Framer/Rive   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Coral fairy reef shell
│   ├── routes.js                  ← reef-gate, treasure-plaques, sea-flowers, shell-mailbox
│   └── theme.js
├── pages/
│   ├── ReefGateHeroPage.jsx       ← Hero reef arch + coral fairy
│   ├── TreasureProjectsPage.jsx   ← Projects dạng coral treasure cards
│   ├── SeaFlowerSkillsPage.jsx    ← Skills dạng sea flower garden
│   └── ShellMailboxContactPage.jsx
├── features/
│   ├── fairy-reef-scene/
│   ├── coral-fairy-mascot/
│   ├── treasure-projects/
│   └── sea-flower-skills/
└── assets/coral-fairy-reef/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                 | Nội dung cần vẽ                               | Dùng cho       | Gợi ý kỹ thuật              |
| -------------------------- | --------------------------------------------- | -------------- | --------------------------- |
| `coral-fairy-mascot.riv`    | Fairy biển, wing flutter, wand, success spell | Hero/contact   | Wing bones riêng            |
| `reef-arch-gate.svg`        | Cổng san hô, shell, sea flowers, glow         | Hero           | Branch sway groups          |
| `shell-house-profile.svg`   | Shell house, window, pearl door, ribbon       | About          | Door open group             |
| `coral-treasure-cards.svg`  | Plaque, pearl, coral frame, gem stickers      | Projects       | Shine mask                  |
| `sea-flower-skill-set.svg`  | Hoa biển, leaves, bubbles, labels             | Skills         | Bloom transform             |
| `magic-pearl-trails.svg`    | Pearl path, sparkles, comet dust              | Motion/contact | Stroke draw                 |
| `tiny-reef-fish.svg`        | Cá nhỏ, seahorse, starfish cute               | Particles      | Path swim                   |
| `fairy-reef-icons.svg`      | Wing, wand, pearl, coral, shell, fish, star   | Nav/icons      | CurrentColor                |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                           |
| ------------ | ----------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `coral-fairy-reef` trong data/theme config và README                   |
| Pages        | Có reef gate hero, treasure projects, sea flower skills, shell mailbox contact|
| Motion       | Nhấn fairy flutter, coral sway, magic dust, fish orbit                        |
| Assets       | Tạo đủ asset trong `src/assets/coral-fairy-reef/`                             |

---

## 10. `sunny-cruise-cute-log` — Sunny Cruise Cute Log Portfolio

Portfolio như nhật ký du thuyền mini mùa hè: tàu trắng nhỏ, cờ pastel, vé boarding pass, nhật ký hành trình, mây và biển xanh. Theme travel-career journey, vui nhưng gọn, hợp portfolio leadership/product/storytelling.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Vui, tự tin, travel, hành trình, sáng sủa                              |
| Hình khối   | Boarding pass card, cruise log panel, flag badge, wave divider         |
| Không gian  | Mini cruise, deck, horizon, flag line, map route, passport stamps      |
| Chuyển động | Ship bob, flag flutter, route draw, wave shimmer, stamp pop            |
| Điểm nhấn   | Cute cruise ship object, route map, captain log cards, flag sticker    |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F0FAFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#4DBCEB",
    colorTextBase: "#1E3C52",
    colorTextSecondary: "#657F91",
    colorSuccess: "#75DFC1",
    colorWarning: "#FFD46F",
    colorError: "#FF89A7",
    colorBorder: "#C6EAF8",
    borderRadius: 16,
    fontFamily: "'Josefin Sans', 'Nunito', sans-serif",
  },
};

// --cruise-sky: #F0FAFF;
// --ship-blue: #4DBCEB;
// --flag-pink: #FF89A7;
// --sunny-gold: #FFD46F;
// --deck-mint: #75DFC1;
// --captain-ink: #1E3C52;
```

### Typography

- **Heading:** `Josefin Sans` travel magazine nhẹ, nữ tính.
- **Body:** `Nunito` mềm và thân thiện.

```css
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Mini cruise ship trên sóng, cờ pastel, route line từ horizon vào title.
- **About:** Captain log profile với boarding pass và stamp.
- **Projects:** Project cards là trip stops trên cruise route.
- **Skills:** Flag signal board, mỗi flag là nhóm skill.
- **Contact:** CTA “Send from deck”, postcard được thả vào mail buoy.

### Animation rules

| Sự kiện         | Effect                                      | Thư viện      |
| --------------- | ------------------------------------------- | ------------- |
| Page load       | Ship sail-in + route draw + flag reveal     | Framer/Rive   |
| Ship idle       | Bob Y 0→-7px→0 + rotate ±1deg               | Rive/CSS      |
| Flag line       | Flutter stagger 4–6s                        | CSS/SVGator   |
| Route map       | Stroke-dash path draw on scroll             | Framer/SVG    |
| Stamp pop       | Scale/rotate pop on project entrance        | Framer Motion |
| Wave shimmer    | Horizontal drift, foam opacity              | CSS keyframes |
| Card hover      | Boarding pass lift + ticket perforation wiggle | Framer Motion |
| Contact success | Postcard slide to buoy + signal sparkle     | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Sunny cruise cute log shell
│   ├── routes.js                  ← deck, trip-stops, flag-board, deck-mail
│   └── theme.js
├── pages/
│   ├── CruiseDeckHeroPage.jsx     ← Hero mini cruise + route line
│   ├── TripStopProjectsPage.jsx   ← Projects dạng trip stops
│   ├── SignalFlagSkillsPage.jsx   ← Skills dạng flag board
│   └── DeckMailContactPage.jsx    ← Contact deck postcard
├── features/
│   ├── cruise-scene/
│   ├── cruise-ship-object/
│   ├── route-projects/
│   └── flag-skills/
└── assets/sunny-cruise-cute-log/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                  | Nội dung cần vẽ                              | Dùng cho       | Gợi ý kỹ thuật                    |
| --------------------------- | -------------------------------------------- | -------------- | --------------------------------- |
| `cute-cruise-ship.riv`       | Ship bob, sail-in, flag wave, success signal | Hero/contact   | Hull shadow riêng                 |
| `cruise-horizon-scene.svg`   | Biển, horizon, mây, deck, foam               | Background     | Wave layers                       |
| `boarding-pass-cards.svg`    | Ticket, perforation, stamp, route label      | Projects/about | HTML text overlay                 |
| `pastel-signal-flags.svg`    | Flag alphabet cute, rope, knots              | Skills/nav     | Per-flag flutter                  |
| `cruise-route-map.svg`       | Route line, stops, compass, pin              | Projects       | Stroke-dash draw                  |
| `captain-logbook.svg`        | Logbook, tabs, paper clips, sticker          | About          | Page flip group                   |
| `mail-buoy-postcard.svg`     | Buoy, postcard, shell stamp, wave trail      | Contact        | Slide path                        |
| `cruise-sticker-icons.svg`   | Ship, anchor, flag, route, sun, wave, stamp  | Nav/icons      | CurrentColor                      |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                         |
| ------------ | --------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `sunny-cruise-cute-log` trong data/theme config và README            |
| Pages        | Có cruise deck hero, trip stop projects, signal flag skills, deck mail      |
| Motion       | Nhấn ship bob, route draw, flag flutter, stamp pop                          |
| Assets       | Tạo đủ asset trong `src/assets/sunny-cruise-cute-log/`                      |

---

## 11. `beach-bag-sticker-room` — Beach Bag Sticker Room Portfolio

Portfolio như căn phòng chuẩn bị đi biển: túi canvas đầy đồ cute, kính mát, kem chống nắng, máy ảnh, khăn sọc, sticker sheet và checklist du lịch. Theme playful nhưng thực dụng, hợp portfolio học tập/design/lifestyle.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Cute, organized, cozy, summer prep, nhiều đồ nhỏ đáng yêu              |
| Hình khối   | Sticker sheet card, canvas bag panel, checklist tab, product-tag badge |
| Không gian  | Desk/room sáng, beach bag mở, cửa sổ biển, đồ đi biển bày gọn          |
| Chuyển động | Bag wiggle, item pop-out, sticker peel, checklist tick, camera flash   |
| Điểm nhấn   | Beach bag mascot/object, sticker sheet, packing checklist, mini camera |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF8F3",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#67CFF1",
    colorTextBase: "#34404C",
    colorTextSecondary: "#74808A",
    colorSuccess: "#79DDBA",
    colorWarning: "#FFD177",
    colorError: "#FF8AAE",
    colorBorder: "#FFE0C9",
    borderRadius: 18,
    fontFamily: "'Nunito', 'Quicksand', sans-serif",
  },
};

// --room-cream: #FFF8F3;
// --window-blue: #67CFF1;
// --sticker-pink: #FF8AAE;
// --check-mint: #79DDBA;
// --tag-yellow: #FFD177;
// --canvas-tan: #EBCB9B;
// --desk-ink: #34404C;
```

### Typography

- **Heading:** `Quicksand` rounded, neat, hợp checklist/sticker room.
- **Body:** `Nunito` rõ, friendly, dùng tốt cho list và tags.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Beach bag mở ở foreground, items bật lên theo stagger, cửa sổ nhìn biển phía sau.
- **About:** Packing checklist profile, có các tick cute và tag cá nhân.
- **Projects:** Project cards như sticker sheets hoặc item tags trong túi.
- **Skills:** Bag inventory grid: sunglasses, camera, sunscreen, shell, notebook.
- **Contact:** CTA “Pack a message”, note rơi vào beach bag và zipper đóng.

### Animation rules

| Sự kiện         | Effect                                       | Thư viện      |
| --------------- | -------------------------------------------- | ------------- |
| Page load       | Bag open + items pop-out stagger             | Framer/Rive   |
| Bag idle        | Tiny wiggle + zipper charm sway              | Rive/CSS      |
| Sticker peel    | Corner peel rotate + shadow                  | Framer Motion |
| Checklist tick  | Check path draw + small star pop             | SVG/Framer    |
| Camera flash    | Quick radial flash + sparkle dots            | CSS/Framer    |
| Item hover      | Lift + label tag slide                       | Framer Motion |
| Window wave     | Soft ocean shimmer through window            | SVGator/CSS   |
| Contact success | Note drops into bag + zipper close + hearts  | Rive/Framer   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                    ← Beach bag sticker room shell
│   ├── routes.js                  ← packing-room, sticker-sheets, inventory, pack-message
│   └── theme.js
├── pages/
│   ├── PackingRoomHeroPage.jsx    ← Hero beach bag + items
│   ├── StickerSheetProjectsPage.jsx
│   ├── InventorySkillsPage.jsx    ← Skills dạng bag inventory
│   └── PackMessageContactPage.jsx
├── features/
│   ├── packing-room-scene/
│   ├── beach-bag-object/
│   ├── sticker-projects/
│   └── inventory-skills/
└── assets/beach-bag-sticker-room/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                    | Nội dung cần vẽ                               | Dùng cho       | Gợi ý kỹ thuật              |
| ----------------------------- | --------------------------------------------- | -------------- | --------------------------- |
| `beach-bag-object.riv`         | Bag open/close, zipper, item pop, success     | Hero/contact   | Items as separate slots     |
| `summer-room-window.svg`       | Desk, window sea view, curtain, sunlight      | Background     | Window shimmer              |
| `beach-bag-items.svg`          | Sunglasses, sunscreen, camera, towel, shell   | Hero/skills    | Item symbols                 |
| `sticker-sheet-frames.svg`     | Sticker sheet, peel corner, label strips      | Projects       | Peel group                  |
| `packing-checklist.svg`        | Checklist, ticks, paperclip, washi tape       | About/skills   | Check path draw             |
| `canvas-tags-badges.svg`       | Product tags, bag labels, charms, ribbons     | Badges/cards   | HTML text overlay           |
| `camera-flash-particles.svg`   | Flash, sparkle, heart, tiny dots              | Motion layer   | Scale/opacity               |
| `summer-room-icons.svg`        | Bag, camera, glasses, towel, shell, checklist | Nav/icons      | CurrentColor                |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                            |
| ------------ | ------------------------------------------------------------------------------ |
| Theme ID     | Ghi rõ `beach-bag-sticker-room` trong data/theme config và README              |
| Pages        | Có packing room hero, sticker projects, inventory skills, pack message contact |
| Motion       | Nhấn bag open, item pop, sticker peel, checklist tick                          |
| Assets       | Tạo đủ asset trong `src/assets/beach-bag-sticker-room/`                        |

---

## 12. `starfish-summer-postcard` — Starfish Summer Postcard Portfolio

Portfolio như hộp postcard kỷ niệm mùa hè: sao biển, tem cute, ảnh polaroid, vệt sóng, bút gel, dây kẹp ảnh và stamp travel. Theme sáng, vui, dễ thương, hợp photography/social/travel portfolio.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Kỷ niệm hè, vui, warm, cute, nostalgic nhẹ                          |
| Hình khối   | Postcard card, stamp badge, starfish pin, photo strip, tape corner  |
| Không gian  | Bàn postcard cạnh biển, dây ảnh, sao biển, bút, tem, envelope       |
| Chuyển động | Stamp pop, postcard flip, photo sway, starfish wiggle, wave divider |
| Điểm nhấn   | Starfish mascot/object, postcard stack, stamp collection, photo line|

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF9ED",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#58C7EC",
    colorTextBase: "#31404E",
    colorTextSecondary: "#758390",
    colorSuccess: "#79D8BB",
    colorWarning: "#FFD47C",
    colorError: "#FF8EAA",
    colorBorder: "#F9D8B9",
    borderRadius: 16,
    fontFamily: "'Pacifico', 'Nunito', cursive",
  },
};

// --postcard-cream: #FFF9ED;
// --stamp-blue: #58C7EC;
// --starfish-coral: #FF8EAA;
// --sunset-gold: #FFD47C;
// --seafoam: #79D8BB;
// --photo-ink: #31404E;
```

### Typography

- **Heading:** `Pacifico` cho logotype/postcard headline, dùng tiết chế.
- **Body:** `Nunito` đọc tốt cho caption và mô tả dự án.

```css
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;600;700;800&display=swap");
```

### Layout ideas

- **Hero:** Stack postcard trên nền cát, starfish mascot kẹp ở góc, dây ảnh và tem xung quanh.
- **About:** Postcard giới thiệu bản thân, mặt sau có handwriting accent nhưng text chính vẫn HTML.
- **Projects:** Gallery như photo postcards; hover flip mặt sau để xem mô tả.
- **Skills:** Stamp collection theo nhóm skill, mỗi stamp có màu và icon riêng.
- **Contact:** CTA “Send summer postcard”, stamp dán lên envelope rồi postcard bay đi.

### Animation rules

| Sự kiện         | Effect                                      | Thư viện      |
| --------------- | ------------------------------------------- | ------------- |
| Page load       | Postcard stack fan-out + stamp pop          | Framer Motion |
| Starfish idle   | Wiggle arms + blink face                    | Rive/CSS      |
| Photo line      | Sway 3–6s with clip rotation                | CSS keyframes |
| Postcard hover  | Flip 180deg + shadow + tape curl            | Framer Motion |
| Stamp           | Pop scale + perforation shimmer             | CSS/Framer    |
| Wave divider    | Line drift + foam dots                      | SVGator/CSS   |
| Skill stamp     | Ink stamp press visual + sparkle            | Framer Motion |
| Contact success | Stamp seal + postcard fly path + trail      | Framer/Rive   |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                      ← Starfish postcard shell
│   ├── routes.js                    ← postcard-desk, photo-postcards, stamp-book, send-card
│   └── theme.js
├── pages/
│   ├── PostcardDeskHeroPage.jsx     ← Hero postcard stack + starfish
│   ├── PhotoPostcardsProjectsPage.jsx
│   ├── StampBookSkillsPage.jsx      ← Skills dạng stamp collection
│   └── SendCardContactPage.jsx
├── features/
│   ├── postcard-desk-scene/
│   ├── starfish-object/
│   ├── postcard-projects/
│   └── stamp-skills/
└── assets/starfish-summer-postcard/
```

### Tự tạo Assets 2D bằng SVG/Rive

| File asset                    | Nội dung cần vẽ                              | Dùng cho       | Gợi ý kỹ thuật                 |
| ----------------------------- | -------------------------------------------- | -------------- | ------------------------------ |
| `starfish-object.riv`          | Starfish blink, wiggle, stamp success        | Hero/contact   | Arm wiggle bones               |
| `postcard-desk-scene.svg`      | Cát, desk, ocean edge, postcard stack        | Hero           | Fan-out cards                  |
| `photo-postcard-frames.svg`    | Postcard front/back, photo corner, tape      | Projects       | Flip card frame                |
| `summer-stamp-collection.svg`  | Tem wave, shell, sun, camera, starfish       | Skills/badges  | Perforation pattern            |
| `photo-clip-line.svg`          | Dây kẹp ảnh, clips, polaroids, mini shells   | Background     | Clip sway group                |
| `envelope-send-set.svg`        | Envelope, stamp seal, flying postcard        | Contact        | Flight path                    |
| `gel-pen-handwriting.svg`      | Bút gel, underline, heart scribble           | Accent/about   | Stroke-dash draw               |
| `postcard-icons.svg`           | Stamp, camera, shell, starfish, pen, wave    | Nav/icons      | CurrentColor                   |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu | Quy định triển khai                                                              |
| ------------ | -------------------------------------------------------------------------------- |
| Theme ID     | Ghi rõ `starfish-summer-postcard` trong data/theme config và README              |
| Pages        | Có postcard desk hero, photo postcard projects, stamp book skills, send contact  |
| Motion       | Nhấn postcard flip, stamp pop, photo sway, postcard fly path                     |
| Assets       | Tạo đủ asset trong `src/assets/starfish-summer-postcard/`                        |

---

## Quy chuẩn triển khai cho Catalog 7

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer Motion variants, easing, spring, reduced motion helpers
│   ├── riveSetup.js          ← Rive state machine config, preload hero mascot/object
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-scene>/        ← SVG scene, background layers, parallax/depth layers
│   ├── <theme-mascot>/       ← Rive/SVG mascot or object, states, reactions
│   ├── <theme-animation>/    ← Bubble, wave, sparkle, sticker, route/path animation
│   └── <theme-content>/      ← Project cards, skill board, contact CTA
├── components/
│   ├── layout/               ← App shell, nav, page transition wrapper
│   └── ui/                   ← Buttons, cards, badges, stickers, tags, modal/drawer
└── assets/<theme-id>/        ← SVG files, Rive files, pattern files, icon sets
```

### Phân vai tool rõ ràng

| Việc cần làm                    | Tool nên dùng                            | Ghi chú triển khai                                  |
| ------------------------------- | ---------------------------------------- | --------------------------------------------------- |
| Page/route transition           | Framer Motion                            | Dùng `AnimatePresence`, variants, shared easing     |
| Hover/tap card, modal, drawer   | Framer Motion                            | Giữ interaction gần component React                 |
| Mascot/object state machine     | Rive                                     | Ít nhất `idle`, `interact`, `success/special`       |
| Smooth scroll                   | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion         |
| Scroll progress/parallax        | Framer Motion `useScroll`/`useTransform` | Scene depth, route map, wave layer, sticker reveal  |
| SVG scene animation             | SVGator export hoặc CSS keyframes        | Wave, fish path, flag flutter, coral sway, curtain  |
| Particle/decoration idle        | CSS keyframes                            | Bubble, sparkle, foam dot, fruit confetti, sticker  |
| Icon/badge micro-interaction    | CSS transition hoặc Framer Motion        | Hover lift, pop, wiggle, shine sweep                |
| Complex path animation          | SVG stroke-dashoffset + CSS/Framer       | Route line, gel pen underline, pearl trail          |
| Success animation               | Rive + Framer Motion                     | Contact submit, order receipt, postcard send        |

### Asset rules

| Nhóm asset          | Quy định                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| Hero scene          | Phải có SVG scene chính rõ bối cảnh biển/đại dương/du lịch hè            |
| Mascot/object       | Có Rive hoặc SVG object chính có ít nhất 3 states                        |
| Sticker set         | Mỗi theme có sticker/icon set riêng, không dùng icon generic đơn điệu     |
| Particle set        | Bubble/foam/sparkle/confetti phải tách file hoặc component riêng          |
| Card frame          | Project cards có frame theo bối cảnh: shell, postcard, board, cup, ticket |
| Text                | Text chính luôn là HTML, không embed text nội dung trong SVG              |
| Optimization        | Optimize SVG bằng SVGO, giữ `viewBox`, bỏ metadata thừa                   |
| Reuse               | Dùng `<symbol>` và `<use>` cho sticker/icon lặp lại                       |

### Animation density rules

| Viewport     | Quy định                                                                 |
| ------------ | ------------------------------------------------------------------------- |
| Desktop      | Tối đa 20–30 animated decorative items visible cùng lúc                   |
| Tablet       | Giảm 25–35% particle, giữ hero mascot/object và card hover                |
| Mobile       | Giảm 50% particle, tắt background path phức tạp, ưu tiên content rõ       |
| Reduced motion | Tắt idle loop, particle drift, mascot/object bob; giữ state change tức thời |

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
- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js`, `src/app/riveSetup.js`, `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa đủ SVG/Rive theo bảng asset.
- [ ] Tự vẽ/generate assets chính: hero scene, mascot/object, sticker icons, particle set, card frames, contact CTA.
- [ ] Tách scene, mascot/object, animation và content feature thành folder riêng.
- [ ] Hero phải render asset chính ngay first viewport, không chỉ dùng gradient/background color.
- [ ] Cards phải có decoration rõ theme: shell, sticker, wave, ticket, postcard, cup, board hoặc stamp.
- [ ] Text chính, form, button, nav dùng HTML/CSS với contrast đủ.
- [ ] Dùng lazy load cho scene nặng và Rive file ngoài hero.
- [ ] Cleanup Lenis, RAF loop, observer, timeout khi component unmount.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra `prefers-reduced-motion`.
- [ ] Kiểm tra color contrast ratio ≥ 4.5:1 cho text quan trọng trên nền pastel.
- [ ] Optimize SVG bằng SVGO trước khi commit.

---

_Cập nhật lần cuối: 2026-06-01 — Catalog 7: Kawaii Ocean Summer themes với biển/đại dương/du lịch hè, phong cách nữ cute vui nhộn, nhiều SVG/Rive assets, mascot/object animation, sticker density cao và motion nịnh mắt._

