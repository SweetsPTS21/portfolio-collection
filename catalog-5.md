# 🌸 Catalog 5 — Cute & Dreamy Feminine Portfolio Themes

> Catalog này tập trung vào portfolio nữ theo hướng cute, dreamy, nhiều màu sắc sáng và pastel rực rỡ.  
> Thiên về 2D assets SVG phong phú, icon dễ thương, và animation mượt mà.  
> Stack dùng: Framer Motion cho UI animation, Rive cho micro-animation, SVGator/CSS cho SVG animation, Lenis cho smooth scroll.  
> Mỗi theme có bảng màu, typography, layout, animation rules, component notes và danh sách asset SVG nên tự tạo.

---

## UI library / design tool stack

```bash
npm install framer-motion @rive-app/react-canvas lenis
```

| Library / Tool  | Vai trò chính trong catalog này                               | Nên dùng cho                                                 |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| Framer Motion   | Animation UI React, page transition, card hover, scroll reveal | Section entrance, route transition, shared layout, CTA hover |
| Rive            | Animated 2D mascot/icon/state machine                         | Mascot, CTA state, loading, empty state, tiny reaction       |
| SVGator         | Tạo animation SVG timeline rồi export SVG/CSS/JS              | Cloud drift, petal fall, sparkle, icon động phức tạp         |
| Lenis           | Smooth scroll có kiểm soát                                    | Portfolio nhiều section, scroll reveal, anchor navigation     |
| CSS Keyframes   | Animation nhẹ, idle loop, particle drift                      | Float, sway, twinkle, bounce loop                            |
| Realtime Colors | Tạo và kiểm tra bảng màu sáng pastel, contrast                | Token màu, theme preview, palette variants                   |
| Blush           | Illustration pack/custom character theo style cute/feminine    | Hero illustration, empty state, about avatar, decor scene    |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; Rive dùng cho interactive micro-animation; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; CSS keyframes cho idle decoration; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration đồng bộ style.

---

## Danh sách phong cách

| ID                      | Tên phong cách                   | Vibe                                    | Hợp với                                |
| ----------------------- | -------------------------------- | --------------------------------------- | -------------------------------------- |
| `bunny-cloud-garden`    | Bunny Cloud Garden Portfolio     | Mây, thỏ, vườn hoa, mơ mộng, soft cute | Portfolio nữ tính, designer, creative  |
| `candy-arcade-world`    | Candy Arcade World Portfolio     | Kẹo, game, pixel cute, rực rỡ, vui     | Portfolio dev/designer trẻ trung       |
| `sakura-letter-desk`    | Sakura Letter Desk Portfolio     | Hoa anh đào, thư tay, nhẹ nhàng, Nhật  | Portfolio tinh tế, nữ tính, minimalist |
| `fairy-mushroom-forest` | Fairy Mushroom Forest Portfolio  | Rừng nấm, tiên, fantasy, dreamy cute   | Portfolio visual, illustration, art    |
| `kitty-cafe-menu`       | Kitty Café Menu Portfolio        | Mèo, café, bánh, xanh lam nhạt, cozy cute | Portfolio nữ yêu mèo, food, lifestyle |
| `underwater-world`      | Underwater World Portfolio       | Đại dương, cá, san hô, xanh dương nhạt, dreamy aqua | Portfolio art, creative, ocean lover |
| `storybook-royal-forest` | Storybook Royal Forest Portfolio | Đêm trăng, sao băng, cỗ xe ngựa, cổ tích | Portfolio nữ tính, art, luxury creative |

---


## 1. `bunny-cloud-garden` — Bunny Cloud Garden Portfolio

Portfolio như một khu vườn trên mây: thỏ nhỏ, hoa tulip, cầu vồng mini, mây bông, giọt sương. Theme mơ mộng, soft cute, phù hợp cho nữ muốn portfolio nhẹ nhàng nhưng vẫn đầy màu sắc và sống động.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                           |
| ----------- | --------------------------------------------------------------- |
| Cảm xúc     | Mơ mộng, dịu dàng, vui, ấm áp, innocent                        |
| Hình khối   | Cloud card bo 20–24px, petal badge, rainbow arc, soft blob      |
| Không gian  | Nền trắng hồng nhạt, cloud layer, flower field ở dưới          |
| Chuyển động | Cloud drift, bunny hop, petal fall, rainbow fade-in, dew drop   |
| Điểm nhấn   | Bunny mascot SVG, tulip/daisy, cloud bông, rainbow, watering can|

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF5F9",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF8ABF",
        colorTextBase: "#3D2244",
        colorTextSecondary: "#8A6B8F",
        colorSuccess: "#7EEDC8",
        colorWarning: "#FFE17A",
        colorInfo: "#A8D4FF",
        colorBorder: "#FFD6E8",
        borderRadius: 22,
        fontFamily: "'Nunito', 'Comfortaa', sans-serif",
    },
};

// CSS Variables
// --bunny-pink: #FF8ABF;
// --cloud-white: #FFF5F9;
// --garden-mint: #7EEDC8;
// --sunshine-yellow: #FFE17A;
// --sky-blue: #A8D4FF;
// --lavender-soft: #D8B8FF;
// --petal-coral: #FFB8C8;
// --rainbow-orange: #FFB87A;
```

### Typography

- **Heading:** `Comfortaa` tròn, mềm, gợi cảm giác cloud và dreamy.
- **Body:** `Nunito` dễ đọc, thân thiện, hợp với tone cute.

```css
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Cloud card float, garden gate reveal, petal scatter, route transition |
| Rive            | Bunny mascot hop/wave/sleep state, watering can pour, flower bloom    |
| SVGator         | Cloud drift loop, petal fall path, rainbow arc draw, dew drop         |
| Lenis           | Smooth scroll qua garden sections, parallax cloud layers              |
| CSS Keyframes   | Cloud idle drift, flower sway, sparkle twinkle, bunny ear wiggle     |
| Realtime Colors | Tạo palette bunny-pink/garden-mint/sky-blue sáng và hài hòa          |
| Blush           | Illustration bunny girl/garden scene cho hero hoặc about              |

### Layout ideas

- **Hero:** Cloud landscape với bunny mascot ở giữa, hoa mọc từ dưới, rainbow arc phía sau.
- **About:** Garden profile card dạng flower pot tag, có bunny avatar.
- **Projects:** Mỗi project là một luống hoa/flower bed card, hover thì hoa nở.
- **Skills:** Watering can tưới ra skill bubbles theo nhóm màu.
- **Contact:** "Plant a message" CTA, seed drop animation → flower grow.

### Animation rules

| Sự kiện          | Effect                                        | Thư viện          |
| ---------------- | --------------------------------------------- | ----------------- |
| Page load        | Cloud part reveal + bunny hop in              | Framer Motion     |
| Cloud background | Drift horizontal 15–25s loop                  | CSS keyframes     |
| Petal fall       | Fall path diagonal, rotate, fade out          | SVG/CSS animation |
| Bunny idle       | Ear wiggle + blink 4s loop                    | Rive / CSS        |
| Flower sway      | Gentle sway 3–5s loop                         | CSS keyframes     |
| Card hover       | Float up + petal burst + soft glow            | CSS transition    |
| Rainbow          | Arc draw stroke-dashoffset 1.5s               | SVG/CSS animation |
| Section entrance | Fade + scale(0.95→1) + sparkle stagger        | Framer Motion     |
| Dew drop         | Drop fall + splash ripple                     | CSS keyframes     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                      ← Cloud garden shell
│   ├── routes.js                    ← garden, flower-bed, greenhouse, mailbox
│   └── theme.js
├── pages/
│   ├── CloudGardenHeroPage.jsx      ← Hero với cloud landscape và bunny
│   ├── FlowerBedProjectsPage.jsx    ← Projects dạng flower bed cards
│   ├── GreenhouseSkillsPage.jsx     ← Skills dạng watering/greenhouse
│   └── GardenMailboxContactPage.jsx ← Contact plant a message
├── features/
│   ├── cloud-scene/
│   │   ├── CloudBackground.jsx
│   │   ├── RainbowArc.jsx
│   │   ├── PetalFallLayer.jsx
│   │   └── DewDropParticles.jsx
│   ├── bunny-mascot/
│   │   ├── BunnyRiveController.jsx
│   │   ├── BunnyIdleAnimation.jsx
│   │   └── BunnyReaction.jsx
│   ├── flower-garden/
│   │   ├── FlowerBedGrid.jsx
│   │   ├── FlowerProjectCard.jsx
│   │   └── FlowerBloomHover.jsx
│   └── greenhouse-skills/
│       ├── WateringCanAnimation.jsx
│       ├── SkillBubbleGroup.jsx
│       └── PlantGrowBadge.jsx
├── components/
│   ├── layout/                      ← Garden nav, cloud page transition
│   └── ui/                          ← CloudButton, PetalCard, BunnyBadge, RainbowTag
└── assets/bunny-cloud-garden/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                       |
| ---------------------------- | ----------------------------------------------------- | ---------------------- | ---------------------------------------------------- |
| `bunny-mascot-set.svg`       | Bunny nhiều pose: hop, wave, sleep, peek, hold flower | Mascot/decoration      | Tách body parts để animate riêng, fill soft pink     |
| `cloud-shapes.svg`           | Cloud bông nhiều kiểu, có highlight và shadow mềm     | Background/card        | Organic blob path, fill white, shadow bằng filter    |
| `garden-flowers.svg`         | Tulip, daisy, sunflower, rose, lavender bunch         | Project cards/decor    | Mỗi flower là symbol, stem tách riêng để sway       |
| `rainbow-arc.svg`            | Cầu vồng 5–7 màu pastel, arc mềm                     | Hero/section accent    | Arc path, stroke-dasharray cho draw animation        |
| `petal-set.svg`              | Cánh hoa nhiều màu: pink, coral, lavender, yellow    | Falling particles      | Ellipse nhỏ, rotate random, animate fall path        |
| `watering-can-scene.svg`     | Watering can, water drops, tiny sprout               | Skills section         | Tách can và drops riêng, animate pour sequence       |
| `garden-icons.svg`           | Flower pot, seed, leaf, butterfly, ladybug, fence    | Nav/badge icons        | Icon 24x24, stroke 2px, currentColor                |
| `dew-sparkle.svg`            | Giọt sương, sparkle star, tiny shine dots            | Particle decoration    | Circle + highlight, animate opacity + scale          |

---


## 2. `candy-arcade-world` — Candy Arcade World Portfolio

Portfolio như một thế giới game arcade đầy kẹo: lollipop, gummy bear, pixel heart, coin, joystick. Rực rỡ, vui nhộn, năng lượng cao nhưng vẫn giữ tone sáng pastel và cute, không dark/neon.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Vui nhộn, năng lượng, playful, nostalgic cute, rewarding         |
| Hình khối   | Pixel-rounded card, candy pill button, coin badge, joystick knob |
| Không gian  | Nền pastel gradient, candy stripe border, star confetti          |
| Chuyển động | Coin spin, candy bounce, score pop, pixel heart pulse, confetti  |
| Điểm nhấn   | Lollipop SVG, gummy bear, pixel heart, arcade machine, star coin|

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF8FC",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF6BA6",
        colorTextBase: "#2D1B3D",
        colorTextSecondary: "#7A5A8A",
        colorSuccess: "#6FFFB8",
        colorWarning: "#FFE55C",
        colorError: "#FF5C7A",
        colorBorder: "#FFCCE0",
        borderRadius: 16,
        fontFamily: "'Fredoka', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --candy-pink: #FF6BA6;
// --lollipop-purple: #C88AFF;
// --gummy-green: #6FFFB8;
// --coin-gold: #FFE55C;
// --bubblegum-blue: #7AC8FF;
// --strawberry-red: #FF5C7A;
// --cream-bg: #FFF8FC;
// --caramel-orange: #FFB86B;
```

### Typography

- **Heading:** `Fredoka` tròn, vui, gợi cảm giác game/candy.
- **Body:** `Nunito` mềm, dễ đọc, cân bằng với nhiều decoration rực rỡ.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Framer Motion   | Coin flip, candy bounce entrance, score counter, route transition game |
| Rive            | Gummy bear dance, joystick wiggle, heart life CTA, loading candy spin  |
| SVGator         | Lollipop spin, candy stripe scroll, star burst, coin rotate loop       |
| Lenis           | Smooth scroll qua arcade levels/stages                                 |
| CSS Keyframes   | Coin idle spin, candy float, pixel heart pulse, confetti drift         |
| Realtime Colors | Tạo palette candy-pink/gummy-green/coin-gold sáng và vui              |
| Blush           | Illustration candy girl/arcade character cho hero                      |

### Layout ideas

- **Hero:** Arcade machine frame SVG, tên như game title screen, candy rơi từ trên.
- **About:** Player profile card dạng game ID, có level bar và avatar pixel.
- **Projects:** Mỗi project là một game level/stage card, có score badge và star rating.
- **Skills:** Candy jar: mỗi nhóm skill là một loại kẹo khác nhau trong jar.
- **Contact:** "Insert coin" CTA, coin drop animation → message sent.

### Animation rules

| Sự kiện          | Effect                                         | Thư viện          |
| ---------------- | ---------------------------------------------- | ----------------- |
| Page load        | Arcade boot screen + candy rain entrance       | Framer Motion     |
| Coin idle        | Spin Y-axis 3s loop                            | CSS keyframes     |
| Candy decoration | Float up-down nhẹ, rotate ±5deg               | CSS keyframes     |
| Pixel heart      | Pulse scale 1→1.15→1, 2s loop                 | CSS keyframes     |
| Card hover       | Bounce + glow + score pop (+1 badge)           | CSS transition    |
| Star confetti    | Drift diagonal, rotate, stagger               | CSS keyframes     |
| Level entrance   | Slide-in + pixel dissolve reveal               | Framer Motion     |
| Button press     | Scale down 0.92 → spring back                  | Framer Motion     |
| Lollipop spin    | Rotate 360deg 4s loop                          | CSS keyframes     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Candy arcade shell
│   ├── routes.js                     ← title-screen, levels, candy-jar, coin-slot
│   └── theme.js
├── pages/
│   ├── ArcadeTitlePage.jsx           ← Hero arcade machine + candy rain
│   ├── LevelProjectsPage.jsx         ← Projects dạng game levels
│   ├── CandyJarSkillsPage.jsx        ← Skills dạng candy jar collection
│   └── CoinSlotContactPage.jsx       ← Contact insert coin
├── features/
│   ├── arcade-scene/
│   │   ├── ArcadeMachineFrame.jsx
│   │   ├── CandyRainLayer.jsx
│   │   ├── StarConfettiLayer.jsx
│   │   └── PixelHeartPulse.jsx
│   ├── candy-mascot/
│   │   ├── GummyBearRive.jsx
│   │   ├── LollipopSpin.jsx
│   │   └── CandyBounce.jsx
│   ├── game-levels/
│   │   ├── LevelGrid.jsx
│   │   ├── LevelCard.jsx
│   │   ├── ScoreBadge.jsx
│   │   └── StarRating.jsx
│   └── candy-jar/
│       ├── CandyJarScene.jsx
│       ├── CandySkillItem.jsx
│       └── JarFillAnimation.jsx
├── components/
│   ├── layout/                       ← Arcade nav, pixel transition wrapper
│   └── ui/                           ← CoinButton, CandyCard, PixelBadge, LollipopTag
└── assets/candy-arcade-world/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                        | Dùng cho               | Gợi ý kỹ thuật                                        |
| ---------------------------- | ------------------------------------------------------ | ---------------------- | ----------------------------------------------------- |
| `arcade-machine-frame.svg`   | Khung arcade machine cute, có joystick và buttons      | Hero frame             | Rect rounded, gradient pastel, button circles         |
| `candy-collection.svg`       | Lollipop, gummy bear, candy cane, wrapped candy, donut | Decoration/skills      | Mỗi candy là symbol, fill bright pastel, outline trắng|
| `pixel-heart-set.svg`        | Heart nhiều cỡ, pixel style nhưng bo nhẹ               | Life bar/badge         | Rect grid tạo pixel, bo corner 2px cho soft pixel    |
| `coin-star-set.svg`          | Coin mặt trước/sau, star nhiều cánh, sparkle          | Score/badge/particle   | Circle + inner detail, animate rotateY               |
| `candy-stripe-pattern.svg`   | Stripe pattern nhiều màu pastel                        | Border/background      | Rect pattern diagonal, opacity nhẹ                   |
| `game-level-icons.svg`       | Flag, key, door, chest, potion, shield                | Level cards/nav        | Icon 24x24, fill bright, stroke 2px                  |
| `gummy-bear-poses.svg`       | Gummy bear dance, wave, sit, jump                     | Mascot/decoration      | Tách limbs để animate, fill translucent gradient     |
| `confetti-candy-bits.svg`    | Star, circle, ribbon, candy wrapper bits              | Particle layer         | Nhiều màu, animate drift + rotate                    |

---


## 3. `sakura-letter-desk` — Sakura Letter Desk Portfolio

Portfolio như một bàn viết thư mùa xuân Nhật Bản: hoa anh đào rơi, phong bì washi, bút lông, ink splash nhẹ, chim sẻ. Theme nhẹ nhàng, tinh tế, nữ tính theo phong cách Nhật nhưng vẫn sáng và có nhiều animation mềm mại.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Nhẹ nhàng, tinh tế, thanh lịch, nữ tính, poetic                  |
| Hình khối   | Envelope card, washi seal, ink splash accent, paper fold edge    |
| Không gian  | Nền trắng kem, sakura petal layer, ink wash texture nhẹ          |
| Chuyển động | Sakura fall, envelope open, ink brush stroke draw, bird hop      |
| Điểm nhấn   | Sakura branch SVG, envelope, washi tape seal, ink splash, sparrow|

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFFBF7",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#F2A0B8",
        colorTextBase: "#2D2028",
        colorTextSecondary: "#7A6068",
        colorSuccess: "#8AD8B8",
        colorWarning: "#FFE4A0",
        colorInfo: "#A8C8E8",
        colorBorder: "#FFD8E4",
        borderRadius: 12,
        fontFamily: "'Zen Maru Gothic', 'Noto Sans JP', sans-serif",
    },
};

// CSS Variables
// --sakura-pink: #F2A0B8;
// --blossom-white: #FFFBF7;
// --ink-charcoal: #2D2028;
// --washi-gold: #FFE4A0;
// --leaf-green: #8AD8B8;
// --sky-blue: #A8C8E8;
// --plum-accent: #D4A0D8;
// --paper-cream: #FFF5EC;
```

### Typography

- **Heading:** `Zen Maru Gothic` tròn, Nhật Bản, gợi cảm giác thư tay và mùa xuân.
- **Body:** `Noto Sans JP` clean, dễ đọc, hợp với aesthetic Nhật.

```css
@import url("https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Framer Motion   | Envelope open reveal, letter slide out, route transition paper fold    |
| Rive            | Sparrow hop/fly, ink brush write, sakura branch sway state             |
| SVGator         | Sakura petal fall path, ink stroke draw, washi seal stamp, branch sway |
| Lenis           | Smooth scroll qua letter pages, parallax sakura depth                  |
| CSS Keyframes   | Petal drift idle, branch gentle sway, ink splash fade, bird idle       |
| Realtime Colors | Tạo palette sakura-pink/leaf-green/washi-gold tinh tế và hài hòa      |
| Blush           | Illustration Japanese girl/spring scene cho hero                       |

### Layout ideas

- **Hero:** Sakura branch từ góc trên, petal rơi nhẹ, tên viết như thư pháp mềm trên giấy.
- **About:** Letter card mở ra từ envelope, có washi seal và stamp.
- **Projects:** Mỗi project là một bức thư/postcard với ink illustration nhỏ.
- **Skills:** Ink palette: mỗi nhóm skill là một màu mực trong bộ sumi-e.
- **Contact:** "Write a letter" CTA, envelope seal animation khi gửi.

### Animation rules

| Sự kiện          | Effect                                         | Thư viện          |
| ---------------- | ---------------------------------------------- | ----------------- |
| Page load        | Sakura branch grow in + petal scatter          | Framer Motion     |
| Sakura petal     | Fall diagonal, rotate, fade out ở bottom       | SVG/CSS animation |
| Branch sway      | Gentle sway 5–8s loop                          | CSS keyframes     |
| Envelope open    | Flap rotate open + letter slide up             | Framer Motion     |
| Ink stroke       | Stroke-dashoffset draw 1–2s                    | SVG/CSS animation |
| Bird idle        | Hop in place, head tilt 3s loop                | Rive / CSS        |
| Card hover       | Paper lift + subtle shadow + petal burst       | CSS transition    |
| Section entrance | Fade + translateY(16px), ink splash accent     | Framer Motion     |
| Washi seal       | Stamp press scale 0→1 + rotate nhẹ            | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Sakura letter desk shell
│   ├── routes.js                     ← desk, letters, palette, mailbox
│   └── theme.js
├── pages/
│   ├── SakuraDeskHeroPage.jsx        ← Hero với sakura branch và desk scene
│   ├── LetterProjectsPage.jsx        ← Projects dạng letter/postcard
│   ├── InkPaletteSkillsPage.jsx      ← Skills dạng ink palette
│   └── LetterMailboxContactPage.jsx  ← Contact write a letter
├── features/
│   ├── sakura-scene/
│   │   ├── SakuraBranch.jsx
│   │   ├── PetalFallLayer.jsx
│   │   ├── InkSplashAccent.jsx
│   │   └── SparrowBird.jsx
│   ├── letter-desk/
│   │   ├── EnvelopeCard.jsx
│   │   ├── LetterReveal.jsx
│   │   ├── WashiSealStamp.jsx
│   │   └── PostcardProjectCard.jsx
│   └── ink-palette/
│       ├── InkPaletteGrid.jsx
│       ├── InkColorBadge.jsx
│       └── BrushStrokeDraw.jsx
├── components/
│   ├── layout/                       ← Paper nav, fold page transition
│   └── ui/                           ← SealButton, EnvelopeCard, InkBadge, PetalTag
└── assets/sakura-letter-desk/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                        | Dùng cho               | Gợi ý kỹ thuật                                        |
| ---------------------------- | ------------------------------------------------------ | ---------------------- | ----------------------------------------------------- |
| `sakura-branch.svg`          | Cành anh đào có hoa nở, nụ, lá non                     | Hero/corner decoration | Path organic, fill gradient pink, tách hoa riêng      |
| `sakura-petals.svg`          | Cánh hoa anh đào nhiều góc xoay, nhiều shade pink      | Falling particles      | Ellipse nhỏ, 5 petal shape, animate fall + rotate     |
| `envelope-set.svg`           | Envelope đóng/mở, có washi seal, stamp, liner pattern  | Project cards          | Tách flap riêng để animate open, liner pattern bên trong|
| `ink-splash-set.svg`         | Ink splash, brush stroke, dot splatter nhiều kiểu      | Section accent/divider | Path organic, opacity 0.15–0.3, nhiều size            |
| `washi-tape-japanese.svg`    | Washi tape pattern: sakura, wave, dot, stripe          | Label/card decoration  | Rect + pattern fill, clip-path cho edge               |
| `sparrow-poses.svg`          | Chim sẻ đậu, bay, nghiêng đầu, nhảy                   | Decoration/mascot      | Silhouette đơn giản, fill warm brown, tách wing       |
| `desk-stationery-icons.svg`  | Bút lông, mực, phong bì, stamp, paper clip, bookmark  | Nav/badge icons        | Icon 24x24, stroke 2px, currentColor                 |
| `paper-texture-pattern.svg`  | Texture giấy washi nhẹ, fiber pattern                  | Background/card        | Pattern opacity rất thấp 0.05–0.1, noise nhẹ         |

---


## 4. `fairy-mushroom-forest` — Fairy Mushroom Forest Portfolio

Portfolio như một khu rừng nấm cổ tích enchanted: nấm phát sáng bioluminescent, tiên nhỏ để lại vệt sáng tím, đom đóm lung linh, sương mù huyền bí, ánh trăng xuyên tán lá. Fantasy đậm chất "enchanted forest" — magical, dreamy, có chiều sâu, phù hợp cho portfolio visual/art muốn tạo thế giới riêng đầy mê hoặc.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Cảm xúc     | Enchanted, magical, mysterious-cute, whimsical, bioluminescent           |
| Hình khối   | Mushroom house card, leaf badge, fairy wing accent, wood gate, stepping stone |
| Không gian  | Nền xanh rừng sâu, parallax 4 layers (sky → trees → mushrooms → fireflies), mist overlay |
| Chuyển động | Firefly glow drift, mushroom glow pulse, fairy trail, gate open, mist drift, moonbeam |
| Điểm nhấn   | Nấm phát sáng, fairy trail tím, cổng gỗ enchanted, moonbeam rays, bioluminescent moss |

### Concept chính: Bioluminescent Enchanted Forest

Theme xây dựng trên ý tưởng **rừng phát quang** — mọi thứ trong rừng đều tỏa sáng nhẹ: nấm glow tím/xanh, rêu phát quang, đom đóm vàng, fairy trail tím. Tạo cảm giác bước vào một thế giới khác khi truy cập portfolio.

**Parallax depth layers:**
```
Layer 1 (xa nhất): Bầu trời đêm xanh tím + trăng lưỡi liềm
Layer 2: Tán cây silhouette tối, moonbeam rays xuyên qua
Layer 3: Nấm lớn phát sáng, cổng gỗ, cây trung cảnh
Layer 4: Foreground — đom đóm, sương mù, fairy dust, lá rơi
Layer 5: UI content (mushroom house cards, text)
```

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F0FFF0",
        colorBgContainer: "#F8FFF8",
        colorPrimary: "#34D399",
        colorTextBase: "#1A2E1A",
        colorTextSecondary: "#4A6B4A",
        colorSuccess: "#4ADE80",
        colorWarning: "#FBBF24",
        colorError: "#FB7185",
        colorBorder: "#A7D8A7",
        borderRadius: 18,
        fontFamily: "'Baloo 2', 'Quicksand', sans-serif",
    },
};

// CSS Variables
// --forest-primary: #34D399;        ← Primary — xanh lá mint sáng, chủ đạo
// --forest-light: #6EE7B7;          ← Xanh lá nhạt cho hover/glow
// --fairy-purple: #A855F7;          ← Tím fairy cho accent/trail effects
// --fairy-glow: #C084FC;            ← Tím sáng cho fairy dust
// --mushroom-red: #EF4444;          ← Đỏ nấm đậm, nổi bật
// --mushroom-coral: #FF8A7A;        ← Cam nấm phụ
// --forest-deep: #166534;           ← Xanh rừng sâu cho depth/silhouette
// --forest-mint: #4ADE80;           ← Xanh lá phát sáng, bioluminescent
// --firefly-gold: #FBBF24;          ← Vàng đom đóm đậm, rõ ràng
// --moss-glow: #86EFAC;             ← Rêu phát quang
// --acorn-brown: #92400E;           ← Nâu đất đậm, earthy
// --lilac-wing: #C084FC;            ← Tím cánh tiên (accent)
// --enchanted-teal: #2DD4BF;        ← Xanh ngọc enchanted
// --moonlight: #FEF9C3;             ← Ánh trăng vàng nhạt
// --mist-white: rgba(255,255,255,0.15); ← Sương mù
// --leaf-canopy: #BBF7D0;           ← Xanh lá tán cây sáng
```

### Typography

- **Heading:** `Baloo 2` tròn, vui, gợi cảm giác storybook/fairy tale.
- **Body:** `Quicksand` mềm, rounded, dễ đọc trên nền xanh nhạt.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                          |
| --------------- | ------------------------------------------------------------------------------ |
| Framer Motion   | Gate open reveal, mushroom grow entrance, fairy trail, parallax layers, route magic |
| Rive            | Fairy mascot fly/wave/sprinkle dust, mushroom glow state, firefly swarm        |
| SVGator         | Firefly drift path, leaf fall spiral, fairy wing flutter, mist drift, moonbeam |
| Lenis           | Smooth scroll + parallax 4 forest depth layers                                 |
| CSS Keyframes   | Firefly glow pulse, mushroom bioluminescent pulse, mist drift, moss shimmer    |
| Realtime Colors | Tạo palette fairy-purple/forest-mint/firefly-gold magical và enchanted         |
| Blush           | Illustration fairy/forest girl cho hero hoặc about                             |

### Layout ideas

- **Hero:** "Bước vào khu rừng" — Cổng gỗ enchanted mở ra (gate animation) → reveal parallax forest scene. Moonbeam xuyên tán lá, nấm phát sáng ở foreground, fairy bay ngang để lại trail tím, đom đóm lung linh. Sương mù nhẹ drift ở foreground.
- **About:** Mushroom house card — profile info bên trong ngôi nhà nấm lớn phát sáng, fairy avatar, bioluminescent moss decoration.
- **Projects:** Forest path với mushroom house stops — mỗi project là một ngôi nhà nấm dọc theo con đường rừng. Card có cap nấm làm header (gradient tím/đỏ/xanh), thân nấm là body, hover thì glow + fairy dust burst.
- **Skills:** Enchanted tree — mỗi nhóm skill là một nhánh cây phát sáng, acorn/seed badges treo trên cành.
- **Contact:** "Ring the fairy bell" CTA — bell chime + fairy dust scatter + forest glow intensify.

### Navigation — Forest stepping stones

- Nav là một **con đường đá bước chân** nằm ngang
- Mỗi nav item là một **stepping stone** phát sáng khi hover/active
- Active item có đom đóm bay quanh (CSS animation)
- Transition giữa pages: fairy dust scatter → mist → new scene reveal

### Animation rules

| Sự kiện          | Effect                                                    | Thư viện          |
| ---------------- | --------------------------------------------------------- | ----------------- |
| Hero intro       | Gate open → moonbeam rays → mist clear → forest reveal   | Framer Motion     |
| Scroll parallax  | 4 forest layers di chuyển tốc độ khác nhau               | Lenis + Framer Motion |
| Firefly idle     | Glow pulse + drift random path 5–10s, stagger            | CSS keyframes     |
| Mushroom glow    | Bioluminescent pulse (box-shadow tím/xanh) 3s loop       | CSS keyframes     |
| Fairy trail      | SVG path draw + sparkle particles theo đường bay         | SVGator + CSS     |
| Fairy flutter    | Wing flutter + drift horizontal + dust sprinkle          | Rive / CSS        |
| Mist drift       | Horizontal drift rất chậm (30–40s loop), opacity thấp    | CSS keyframes     |
| Moonbeam         | Subtle ray opacity pulse 8s loop                         | CSS keyframes     |
| Leaf fall        | Spiral fall path, rotate, fade                           | SVG/CSS animation |
| Card enter       | Mushroom "grow" từ dưới lên (scaleY 0→1 từ bottom)      | Framer Motion     |
| Card hover       | Mushroom glow intensify + fairy dust burst + slight lift | CSS transition    |
| Gate open        | Rotate open từ center + moonbeam ray reveal              | Framer Motion     |
| Section entrance | Fade + translateY(20px) + firefly stagger appear         | Framer Motion     |
| Nav hover        | Stepping stone glow + firefly appear around              | CSS transition    |
| Moss shimmer     | Bioluminescent color shift 6s loop                       | CSS keyframes     |
| Route transition | Fairy dust scatter → mist fade → new scene              | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                        ← Enchanted fairy forest shell
│   ├── routes.js                      ← gate, clearing, path, enchanted-tree, fairy-bell
│   └── theme.js
├── pages/
│   ├── EnchantedGateHeroPage.jsx      ← Hero: gate open → parallax forest reveal
│   ├── ForestPathProjectsPage.jsx     ← Projects: mushroom house stops along path
│   ├── EnchantedTreeSkillsPage.jsx    ← Skills: glowing tree branches + acorn badges
│   └── FairyBellContactPage.jsx       ← Contact: ring the fairy bell
├── features/
│   ├── forest-scene/
│   │   ├── ForestParallaxLayers.jsx   ← 4-layer parallax (sky, trees, mushrooms, fireflies)
│   │   ├── EnchantedGateReveal.jsx    ← Gate open animation + moonbeam
│   │   ├── MoonbeamRays.jsx           ← Light rays through canopy
│   │   ├── EnchantedMistLayer.jsx     ← Foreground mist drift
│   │   ├── MushroomCluster.jsx        ← Bioluminescent mushroom group
│   │   ├── FireflySwarmLayer.jsx      ← Firefly glow + drift particles
│   │   └── LeafFallLayer.jsx          ← Falling leaves
│   ├── fairy-mascot/
│   │   ├── FairyRiveController.jsx    ← Fairy state machine
│   │   ├── FairyTrailEffect.jsx       ← Purple trail following fairy path
│   │   ├── FairyDustParticles.jsx     ← Sparkle dust burst
│   │   └── FairyFlutter.jsx           ← Wing flutter animation
│   ├── mushroom-path/
│   │   ├── ForestPathSVG.jsx          ← Winding path SVG
│   │   ├── MushroomHouseCard.jsx      ← Project card shaped as mushroom house
│   │   ├── SteppingStoneNav.jsx       ← Navigation as glowing stones
│   │   └── PathDrawAnimation.jsx      ← Path reveal on scroll
│   └── enchanted-tree/
│       ├── EnchantedTreeScene.jsx     ← Glowing tree with branches
│       ├── GlowBranchSkillGroup.jsx   ← Skill group on glowing branch
│       ├── AcornBadge.jsx             ← Individual skill badge
│       └── BioluminescentMoss.jsx     ← Moss glow background
├── components/
│   ├── layout/                        ← Forest nav (stepping stones), gate page transition
│   └── ui/                            ← MushroomButton, GlowCard, FairyBadge, StoneTag
└── assets/fairy-mushroom-forest/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                                | Dùng cho               | Gợi ý kỹ thuật                                              |
| ---------------------------- | -------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `mushroom-houses.svg`        | Nấm dạng nhà: cửa sổ, cửa ra vào, ống khói, phát sáng        | Project cards          | Cap gradient + glow filter, stem có door/window detail       |
| `mushroom-collection.svg`    | Nấm nhiều kiểu: đỏ chấm, tím glow, xanh, vàng, nhỏ/lớn      | Decoration/background  | Mỗi mushroom là symbol, fill gradient, feGaussianBlur glow  |
| `fairy-character.svg`        | Fairy nhiều pose: bay, vẫy, rắc bụi, ngồi trên nấm           | Mascot/hero            | Tách wing riêng để flutter, body nhỏ cute, trail path       |
| `fairy-trail-path.svg`       | Đường bay cong với sparkle dots dọc theo path                  | Page transition/hover  | Path curve + circle dots, animate stroke-dashoffset          |
| `firefly-swarm.svg`          | Firefly glow dots nhiều cỡ, có halo mềm, radial gradient      | Particle layer         | Circle + radialGradient glow vàng, animate opacity + drift  |
| `forest-depth-layers.svg`    | 3–4 layer silhouette cây (xa→gần), tối→sáng                   | Hero parallax          | Mỗi layer là path riêng, fill opacity giảm dần              |
| `enchanted-gate.svg`         | Cổng gỗ fairy tale có ivy phát sáng, moss, arch, chi tiết     | Hero intro animation   | Tách 2 cánh cổng riêng, ivy có glow, animate rotate open   |
| `moonbeam-rays.svg`          | Tia sáng trăng xuyên tán lá, gradient fade từ trên xuống      | Hero background        | Linear gradient rects, opacity thấp, animate pulse          |
| `enchanted-mist.svg`         | Sương mù nhiều layer, organic blobs, opacity rất thấp         | Foreground parallax    | Blob paths, fill white opacity 0.08–0.15, animate translateX|
| `bioluminescent-moss.svg`    | Rêu phát sáng pattern, dots và patches xanh glow              | Background texture     | Pattern tile, radialGradient glow, opacity 0.1–0.2          |
| `stepping-stones-nav.svg`    | Đá bước chân phát sáng, moss trên đá, nhiều shape             | Navigation             | Rounded rect stones, glow filter on hover state             |
| `enchanted-tree.svg`         | Cây lớn có nhánh phát sáng, lá glow, acorn treo              | Skills section         | Trunk + branches path, glow trên branch tips                |
| `forest-leaves.svg`          | Lá nhiều loại: oak, maple, round, fern, autumn colors         | Falling particles/decor| Path organic, fill green/gold, animate fall spiral           |
| `acorn-seed-set.svg`         | Acorn, chestnut, pinecone, seed pod, tiny sprout              | Skill badges           | Icon cute, fill warm brown/green, cap detail                |
| `forest-path-elements.svg`   | Stepping stones, moss patch, tiny flower, mushroom mini       | Path/map decoration    | Scatter elements, organic placement                         |
| `fairy-icons.svg`            | Wand, bell, potion, crystal, lantern, key, mushroom           | Nav/badge icons        | Icon 24x24, stroke 2px, fill pastel glow, currentColor     |

---


## 5. `kitty-cafe-menu` — Kitty Café Menu Portfolio

Portfolio như một quán café mèo dễ thương với tone xanh lam nhạt: mèo ngủ, latte art, bánh macaron, menu board, chuông cửa. Mát dịu, cozy, cute, phù hợp cho nữ yêu mèo và muốn portfolio mang cảm giác thư giãn, trong trẻo, gần gũi.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Mát dịu, cozy, dễ thương, thư giãn, trong trẻo                   |
| Hình khối   | Menu card, cup badge, paw print accent, chalkboard frame, macaron |
| Không gian  | Nền xanh lam nhạt, cloud cream layer, steam wisps, paw print trail |
| Chuyển động | Cat tail sway, steam rise, paw print walk, bell jingle, cup tilt |
| Điểm nhấn   | Cat mascot SVG, blue latte cup, macaron stack, menu board, paw print |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F2FAFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#8ECDF6",
        colorTextBase: "#24384A",
        colorTextSecondary: "#6B879D",
        colorSuccess: "#9FE3D0",
        colorWarning: "#FFE3A8",
        colorError: "#FF8E9E",
        colorBorder: "#CFEAFF",
        borderRadius: 16,
        fontFamily: "'Nunito', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --kitty-blue: #8ECDF6;
// --cloud-cream: #F2FAFF;
// --sky-milk: #CFEAFF;
// --macaron-mint: #9FE3D0;
// --honey-foam: #FFE3A8;
// --berry-coral: #FF8E9E;
// --milk-white: #FFFFFF;
// --soft-navy: #24384A;
// --blueberry-lavender: #B9C8F6;
```

### Typography

- **Heading:** `Nunito` tròn, mềm, gợi cảm giác cozy café xanh lam nhạt.
- **Body:** `Poppins` gọn, hiện đại, dễ đọc trên nền xanh rất nhạt.

```css
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Poppins:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                    |
| --------------- | ------------------------------------------------------------------------ |
| Framer Motion   | Menu card flip, cup tilt hover, cat peek entrance, route transition door |
| Rive            | Cat mascot sleep/wake/purr/play state, latte art pour, bell jingle       |
| SVGator         | Steam rise loop, paw print walk path, tail sway, macaron stack bounce    |
| Lenis           | Smooth scroll qua café menu sections                                     |
| CSS Keyframes   | Steam idle rise, tail sway loop, paw print fade trail, cup wobble        |
| Realtime Colors | Tạo palette kitty-blue/sky-milk/macaron-mint sáng, mát dịu và cozy      |
| Blush           | Illustration cat café girl/barista cho hero hoặc about                   |

### Layout ideas

- **Hero:** Café counter scene xanh lam nhạt, cat mascot ngủ trên quầy, menu board phía sau, steam từ cup.
- **About:** Barista profile card dạng name tag/apron badge, có cat avatar.
- **Projects:** Café menu: mỗi project là một menu item (Latte, Mocha, Matcha...) với description.
- **Skills:** Macaron tower: mỗi nhóm skill là một tầng macaron màu khác nhau.
- **Contact:** "Ring the bell" CTA, door bell jingle + cat wake up reaction.

### Animation rules

| Sự kiện          | Effect                                          | Thư viện          |
| ---------------- | ----------------------------------------------- | ----------------- |
| Page load        | Door open + bell jingle + cat peek              | Framer Motion     |
| Steam idle       | Rise wisp, fade out ở top, 4–6s loop            | CSS keyframes     |
| Cat tail         | Sway side-to-side 3s loop                       | CSS keyframes     |
| Paw print trail  | Fade in sequence along path, then fade out      | SVG/CSS animation |
| Card hover       | Cup tilt + steam burst + slight lift            | CSS transition    |
| Menu flip        | Card flip reveal back side (recipe/detail)      | Framer Motion     |
| Macaron stack    | Bounce stack build-up, stagger 0.1s             | Framer Motion     |
| Section entrance | Fade + translateY(16px) + paw print accent      | Framer Motion     |
| Bell ring        | Rotate swing ±15deg, 0.5s, ease-out             | CSS animation     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                        ← Kitty café shell
│   ├── routes.js                      ← counter, menu, macaron-tower, bell
│   └── theme.js
├── pages/
│   ├── CafeCounterHeroPage.jsx        ← Hero café counter với cat
│   ├── CafeMenuProjectsPage.jsx       ← Projects dạng café menu items
│   ├── MacaronTowerSkillsPage.jsx     ← Skills dạng macaron tower
│   └── DoorBellContactPage.jsx        ← Contact ring the bell
├── features/
│   ├── cafe-scene/
│   │   ├── CafeCounterBackground.jsx
│   │   ├── SteamWispLayer.jsx
│   │   ├── PawPrintTrail.jsx
│   │   └── MenuBoardFrame.jsx
│   ├── kitty-mascot/
│   │   ├── KittyRiveController.jsx
│   │   ├── KittySleepWake.jsx
│   │   ├── KittyTailSway.jsx
│   │   └── KittyPeekAnimation.jsx
│   ├── cafe-menu/
│   │   ├── MenuGrid.jsx
│   │   ├── MenuItemCard.jsx
│   │   ├── MenuFlipDetail.jsx
│   │   └── LatteArtBadge.jsx
│   └── macaron-skills/
│       ├── MacaronTower.jsx
│       ├── MacaronLayer.jsx
│       └── MacaronSkillBadge.jsx
├── components/
│   ├── layout/                        ← Café nav, door transition wrapper
│   └── ui/                            ← PawButton, CupCard, MacaronBadge, BellTag
└── assets/kitty-cafe-menu/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                          | Dùng cho               | Gợi ý kỹ thuật                                          |
| ---------------------------- | -------------------------------------------------------- | ---------------------- | ------------------------------------------------------- |
| `kitty-mascot-set.svg`       | Mèo nhiều pose: ngủ, thức, vẫy, chơi, peek, cuộn tròn  | Mascot/decoration      | Tách tail, ears, eyes riêng để animate, fill soft blue/white colors |
| `latte-cup-set.svg`          | Cup latte, cappuccino, matcha, có latte art trên mặt     | Hero/project cards     | Cup shape + foam layer, art detail bằng path nhỏ        |
| `macaron-stack.svg`          | Macaron nhiều màu: sky blue, mint, lavender, lemon, berry | Skills section         | Oval shape, filling line, shadow nhẹ, stack arrangement |
| `steam-wisps.svg`            | Steam/hơi nước nhiều kiểu wisp                           | Particle decoration    | Path wavy, opacity gradient, animate rise + fade        |
| `paw-print-set.svg`          | Paw print nhiều cỡ, có toe beans detail                  | Trail/decoration       | Circle arrangement, fill soft blue/navy                 |
| `cafe-menu-board.svg`        | Chalkboard frame, có chalk text area, doodle border      | Section frame          | Rect dark + chalk texture pattern, border doodle        |
| `bakery-icons.svg`           | Croissant, cookie, cake slice, donut, muffin, spoon     | Nav/badge icons        | Icon 24x24, stroke 2px, fill warm pastry colors        |
| `door-bell-set.svg`          | Chuông cửa, ribbon bow, tiny cat face bell               | Contact CTA/decoration | Tách bell body và clapper để animate swing              |

---


## 6. `underwater-world` — Underwater World Portfolio

Portfolio như một thế giới đại dương trong trẻo: ánh mặt trời chiếu xuyên qua mặt nước, đàn cá nhiều màu bơi quanh san hô, cua nhỏ đi trên cát, sao biển nằm cạnh vỏ sò, rong rêu biển và các loài thủy sinh tạo thành một hệ sinh thái mềm mại. Theme dùng xanh dương nhạt làm chủ đạo, mát dịu, dreamy, giàu chi tiết nhưng vẫn sáng và cute.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Trong trẻo, mát dịu, dreamy, khám phá, sống động, ocean cute          |
| Hình khối   | Bubble card, wave divider, coral badge, shell tab, starfish accent     |
| Không gian  | Nền xanh dương nhạt, sunbeam từ trên cao, coral reef, seaweed layers   |
| Chuyển động | Fish school swim, bubble rise, seaweed sway, crab walk, sunray shimmer |
| Điểm nhấn   | Đàn cá nhiều loài, cua, sao biển, rong biển, san hô, vỏ sò, sinh vật biển |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EAF9FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#68C7F5",
        colorTextBase: "#17364D",
        colorTextSecondary: "#5E8298",
        colorSuccess: "#7FE3C6",
        colorWarning: "#FFE08A",
        colorInfo: "#9DDCFF",
        colorError: "#FF8AA8",
        colorBorder: "#BDEBFF",
        borderRadius: 18,
        fontFamily: "'Nunito', 'Quicksand', sans-serif",
    },
};

// CSS Variables
// --ocean-blue: #68C7F5;
// --aqua-bg: #EAF9FF;
// --sunbeam-cream: #FFF4C8;
// --reef-coral: #FF9DB4;
// --seaweed-mint: #7FE3C6;
// --shell-lilac: #CDB8FF;
// --starfish-peach: #FFB785;
// --bubble-white: #FFFFFF;
// --deep-text: #17364D;
// --foam-border: #BDEBFF;
```

### Typography

- **Heading:** `Quicksand` tròn, nhẹ, hợp cảm giác bubble và đại dương trong trẻo.
- **Body:** `Nunito` mềm, dễ đọc, giữ tone cute và thân thiện.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                       |
| --------------- | --------------------------------------------------------------------------- |
| Framer Motion   | Fish school entrance, bubble card hover, reef section reveal, route wave    |
| Rive            | Fish mascot swim/blink/wave, crab walk state, starfish reaction, CTA bubble |
| SVGator         | Sunbeam shimmer, fish swim path, seaweed sway, bubble rise loop             |
| Lenis           | Smooth scroll qua các tầng đại dương với parallax coral/seaweed             |
| CSS Keyframes   | Bubble rise, seaweed sway, tiny fish idle swim, light caustics shimmer      |
| Realtime Colors | Tạo palette ocean-blue/aqua-bg/reef-coral sáng, mát và đủ contrast          |
| Blush           | Illustration ocean girl/mermaid diver hoặc underwater reef scene cho hero    |

### Layout ideas

- **Hero:** Underwater reef scene xanh dương nhạt, sunbeam chiếu từ trên xuống, đàn cá nhiều màu bơi thành nhóm quanh tên portfolio.
- **About:** Profile card dạng bubble glass, viền sóng nhẹ, có shell badge và avatar nằm trong pearl frame.
- **Projects:** Mỗi project là một coral reef card, hover thì cá nhỏ bơi qua và bubble nổi lên.
- **Skills:** Sea garden: mỗi nhóm skill là một cụm rong biển/san hô, icon thủy sinh làm badge.
- **Contact:** "Send a sea note" CTA trong bottle message, bubble burst + starfish wave khi gửi thành công.

### Animation rules

| Sự kiện          | Effect                                                       | Thư viện          |
| ---------------- | ------------------------------------------------------------ | ----------------- |
| Page load        | Water surface fade-in + sunbeam sweep + fish school entrance | Framer Motion/CSS |
| Fish school      | Swim ngang theo path cong, stagger, đổi layer depth nhẹ      | SVGator/CSS       |
| Bubble idle      | Bubble rise 5–9s loop, scale/opacity random                  | CSS keyframes     |
| Seaweed          | Sway trái/phải organic, lệch nhịp giữa từng cụm              | CSS keyframes     |
| Crab walk        | Đi ngang ngắn, dừng, giơ càng, lặp 6–8s                      | Rive/CSS          |
| Sunbeam          | Light ray shimmer rất nhẹ, không làm giảm readability        | CSS/SVG filter    |
| Card hover       | Lift + bubble pop + tiny fish pass-through                   | Framer Motion     |
| Section entrance | Fade + translateY(18px) + coral/shell stagger                | Framer Motion     |
| Contact success  | Bottle cork pop + bubble burst + starfish wave               | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Underwater world shell
│   ├── routes.js                       ← reef, fish-trail, sea-garden, bottle-note
│   └── theme.js
├── pages/
│   ├── OceanReefHeroPage.jsx           ← Hero reef với sunbeam và đàn cá
│   ├── FishTrailProjectsPage.jsx       ← Projects dạng coral reef cards
│   ├── SeaGardenSkillsPage.jsx         ← Skills dạng seaweed/coral garden
│   └── BottleNoteContactPage.jsx       ← Contact bottle message + bubble success
├── features/
│   ├── underwater-scene/
│   │   ├── OceanGradientBackground.jsx
│   │   ├── SunbeamLayer.jsx
│   │   ├── BubbleParticleLayer.jsx
│   │   └── CoralReefBase.jsx
│   ├── ocean-mascot/
│   │   ├── FishRiveController.jsx
│   │   ├── FishSchoolSwim.jsx
│   │   ├── CrabWalkAnimation.jsx
│   │   └── StarfishReaction.jsx
│   ├── reef-projects/
│   │   ├── ReefProjectGrid.jsx
│   │   ├── CoralProjectCard.jsx
│   │   ├── ShellProjectBadge.jsx
│   │   └── FishPassHover.jsx
│   └── sea-garden-skills/
│       ├── SeaGardenScene.jsx
│       ├── SeaweedSkillGroup.jsx
│       ├── CoralSkillBadge.jsx
│       └── AquaticIconTooltip.jsx
├── components/
│   ├── layout/                         ← Ocean nav, wave transition wrapper
│   └── ui/                             ← BubbleButton, CoralCard, ShellTag, WaveDivider
└── assets/underwater-world/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                                  | Dùng cho               | Gợi ý kỹ thuật                                            |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| `fish-school-set.svg`        | Nhiều loài cá: cá nhỏ, cá nhiệt đới, cá đuôi dài, cá tròn cute | Hero/particles/mascot  | Tách thân, vây, đuôi để animate swim; màu pastel đa dạng |
| `coral-reef-scene.svg`       | Cụm san hô nhiều tầng, đá biển, cát, shell, pearl              | Hero/background/cards  | Layer parallax, gradient pastel, shadow rất nhẹ           |
| `crab-starfish-set.svg`      | Cua nhiều pose, sao biển, nhím biển cute, ốc biển              | Decoration/contact     | Tách càng cua và chân để walk loop, starfish wave nhẹ     |
| `seaweed-aquatic-plants.svg` | Rong biển, tảo, cỏ biển, thủy sinh nhiều chiều cao             | Skills/background      | Path cong, anchor dưới đáy, animate sway bằng transform   |
| `bubble-particle-set.svg`    | Bubble nhiều kích thước, highlight, sparkle nước               | Particle layer         | Circle + opacity, dùng CSS vars cho duration/delay        |
| `sunbeam-caustics.svg`       | Tia nắng xuyên mặt nước, vệt sáng caustics                     | Hero/background        | Linear/radial gradient, mask mềm, animate opacity/shift   |
| `shell-pearl-icons.svg`      | Vỏ sò, ngọc trai, conch, sand dollar, wave icon                | Nav/badge/icons        | Icon 24x24, currentColor + fill pastel                    |
| `message-bottle-set.svg`     | Chai thư, nút bần, cuộn giấy, ribbon, bubble success           | Contact CTA            | Tách cork, note và bubbles để animate gửi thành công      |
| `aquatic-creature-icons.svg` | Cá ngựa, sứa cute, rùa biển mini, bạch tuộc nhỏ, sao biển      | Skills/project badges  | Dùng symbol reuse, stroke 2px, fill aqua/coral/lilac      |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu       | Quy định triển khai                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| Theme ID           | Ghi rõ `underwater-world` trong data/theme config và README của sub-project           |
| App shell          | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes  |
| Pages              | Có đủ ocean reef hero, fish trail projects, sea garden skills, bottle note contact    |
| Feature folders    | Tách `underwater-scene`, `ocean-mascot`, `reef-projects`, `sea-garden-skills`         |
| UI components      | Có `BubbleButton`, `CoralCard`, `ShellTag`, `WaveDivider` dùng lại trong các page      |
| Asset folder       | Tạo `src/assets/underwater-world/` và đủ 9 SVG files trong bảng asset phía trên        |
| Asset usage        | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục          |
| Visual priority    | Hero phải thể hiện rõ thế giới đại dương: đàn cá, cua, sao biển, rong biển, sunbeam   |
| Motion             | Nhấn mạnh fish school swim, bubble rise, seaweed sway, crab walk, sunbeam shimmer      |
| Accessibility      | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ      |
| Responsive         | Hero, project reef cards, sea garden và contact assets phải về 1 cột ở mobile nhỏ     |
| Reduced motion     | Có fallback `prefers-reduced-motion` để tắt fish loop, bubble drift và seaweed sway    |
| Performance        | Giới hạn 20–30 bubble/fish particle visible, lazy load scene SVG, optimize bằng SVGO   |

---


## 7. `storybook-royal-forest` — Storybook Royal Forest Portfolio

Portfolio như một tranh vẽ cổ tích ban đêm: bầu trời sao lấp lánh, sao băng rơi, ánh trăng phủ lên khu rừng, công chúa và hoàng tử đi dạo cạnh cỗ xe ngựa, cột đèn đường, đom đóm bay và hàng cây tối. Cổ điển, lãng mạn, fantasy, phù hợp cho portfolio nữ tính muốn có cảm giác kể chuyện, sang nhẹ và giàu hình ảnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Cổ điển, tranh vẽ, mơ mộng, lãng mạn, magical ban đêm                 |
| Hình khối   | Moon frame, star trail, lantern post, carriage silhouette, scroll card |
| Không gian  | Nền xanh đêm, ánh trăng, rừng tối, cột đèn đường, firefly layer       |
| Chuyển động | Sao băng rơi, sao twinkle, đom đóm drift, lantern glow, carriage roll |
| Điểm nhấn   | Moonlit storybook hero, royal couple, horse carriage, street lamp, trees |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#0D1638",
        colorBgContainer: "#182450",
        colorPrimary: "#D8C7FF",
        colorTextBase: "#F8F0D8",
        colorTextSecondary: "#C9C1DC",
        colorSuccess: "#9ED8B4",
        colorWarning: "#F6D77B",
        colorInfo: "#9BC8FF",
        colorBorder: "#4A3F74",
        borderRadius: 18,
        fontFamily: "'Cormorant Garamond', 'Nunito', serif",
    },
};

// CSS Variables
// --midnight-blue: #0D1638;
// --deep-indigo: #182450;
// --moon-ivory: #F8F0D8;
// --starlight-gold: #F6D77B;
// --royal-lavender: #D8C7FF;
// --castle-violet: #4A3F74;
// --forest-sage: #9ED8B4;
// --rose-petal: #E9A9C6;
// --sky-spell: #9BC8FF;
// --parchment-border: #4A3F74;
```

### Typography

- **Heading:** `Cormorant Garamond` thanh lịch, cổ điển, hợp phong cách tranh vẽ cổ tích.
- **Body:** `Nunito` mềm, dễ đọc, giữ độ thân thiện trên nền xanh đêm.

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                            |
| --------------- | -------------------------------------------------------------------------------- |
| Framer Motion   | Page turn, chapter reveal, carriage entrance, scroll card hover                 |
| Rive            | Princess/prince walk loop, carriage arrival, lantern click glow, letter unlock  |
| SVGator         | Shooting star path, firefly flight, lantern sway, moon glow pulse               |
| Lenis           | Smooth scroll như lật từng chương truyện trong đêm                              |
| CSS Keyframes   | Star twinkle, shooting-star, firefly-drift, lantern-glow, carriage wheel rotate |
| Realtime Colors | Tạo palette midnight-blue/moon-ivory/starlight-gold đủ contrast                |
| Blush           | Illustration cổ tích kiểu tranh vẽ: royal couple, moonlit road, carriage        |

### Layout ideas

- **Hero:** Moonlit storybook scene, bầu trời sao, sao băng, đường rừng, cột đèn và cỗ xe ngựa.
- **About:** Scroll letter/profile parchment có wax seal, portrait dạng cameo frame.
- **Projects:** Mỗi project là một chapter card, có castle room hoặc quest icon riêng.
- **Skills:** Royal inventory: crown, key, potion, map, sword, wand, book, lantern.
- **Contact:** "Send a royal letter" CTA với envelope seal mở ra, lantern glow và firefly success.

### Animation rules

| Sự kiện          | Effect                                             | Thư viện          |
| ---------------- | -------------------------------------------------- | ----------------- |
| Page load        | Night sky fade-in + moon glow + storybook open      | Framer Motion/CSS |
| Star field       | Star twinkle nhiều nhịp, không đồng bộ              | CSS keyframes     |
| Shooting star    | Sao băng rơi chéo 6–9s loop, trail fade             | CSS/SVGator       |
| Fireflies        | Đom đóm drift organic quanh cây và cột đèn          | CSS/SVG animation |
| Lantern idle     | Cột đèn glow pulse + sway rất nhẹ                   | CSS keyframes     |
| Carriage         | Cỗ xe ngựa vào cảnh, bánh xe rotate, shadow slide    | Framer Motion/Rive|
| Royal couple     | Công chúa/hoàng tử walk loop, cape/dress sway        | Rive/SVGator      |
| Card hover       | Scroll card lift + star sparkle + moon rim light     | CSS transition    |
| Contact success  | Wax seal pop + envelope open + firefly burst         | Rive/Framer Motion|

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Storybook royal forest shell
│   ├── routes.js                       ← prologue, chapters, inventory, royal-letter
│   └── theme.js
├── pages/
│   ├── StorybookHeroPage.jsx           ← Open book + forest path + castle
│   ├── ChapterProjectsPage.jsx         ← Projects dạng chapter cards
│   ├── RoyalInventorySkillsPage.jsx    ← Skills dạng inventory items
│   └── RoyalLetterContactPage.jsx      ← Contact envelope/wax seal
├── features/
│   ├── storybook-scene/
│   │   ├── OpenBookBackground.jsx
│   │   ├── ForestPathLayer.jsx
│   │   ├── CastleSilhouette.jsx
│   │   └── SparkleDustLayer.jsx
│   ├── royal-mascot/
│   │   ├── RoyalMascotRiveController.jsx
│   │   ├── PrincessPrinceIdle.jsx
│   │   ├── CrownSparkle.jsx
│   │   └── MagicKeyReaction.jsx
│   ├── chapter-projects/
│   │   ├── ChapterCardGrid.jsx
│   │   ├── ChapterCard.jsx
│   │   ├── QuestIconBadge.jsx
│   │   └── PageTurnDetail.jsx
│   └── royal-inventory/
│       ├── InventoryShelf.jsx
│       ├── InventoryItemBadge.jsx
│       └── SkillScrollTooltip.jsx
├── components/
│   ├── layout/                         ← Storybook nav, chapter transition wrapper
│   └── ui/                             ← CrownButton, ScrollCard, RibbonTag, SealBadge
└── assets/storybook-royal-forest/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo                | Nội dung cần vẽ                                           | Dùng cho               | Gợi ý kỹ thuật                                           |
| ------------------------------ | --------------------------------------------------------- | ---------------------- | -------------------------------------------------------- |
| `open-storybook-scene.svg`     | Sách mở dưới trăng, bầu trời sao, sao băng, forest path   | Hero/background        | Tách page, moon, stars, shooting star để animate riêng   |
| `castle-silhouette-set.svg`    | Lâu đài đêm nhiều layer: tower, gate, window, flag        | Hero/section divider   | Tách window để twinkle, flag để flutter                  |
| `royal-mascot-pair.svg`        | Công chúa và hoàng tử đi dạo dưới ánh trăng               | Background scene layer | Tách chân/tay/cape/dress để walk loop và sway; không đặt trong profile card |
| `enchanted-forest-path.svg`    | Đường rừng đêm, cây tối, cột đèn đường, đom đóm           | Background/transition  | Layer parallax, firefly symbols, lamp glow radialGradient|
| `crown-key-wand-set.svg`       | Crown, magic key, wand, potion, sword mini, shield        | Skills/badges          | Icon 24x24, stroke 2px, fill moon/royal colors           |
| `scroll-letter-set.svg`        | Parchment scroll, envelope, wax seal, ribbon              | About/contact/cards    | Seal và ribbon là group riêng để pop/flutter             |
| `sparkle-dust-particles.svg`   | Star, shooting-star trail, glow dot, firefly, tiny heart  | Particle layer         | Symbol reuse, opacity/scale/path random bằng CSS vars    |
| `carriage-lantern-set.svg`     | Cỗ xe ngựa cổ điển, bánh xe, cột đèn, đèn lồng            | Decoration/contact     | Tách horse, wheel, lamp glow để animate riêng            |
| `storybook-icons.svg`          | Castle, crown, book, rose, key, shield, letter, lantern   | Nav/badge icons        | currentColor + pastel fill, dùng chung trong UI          |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu       | Quy định triển khai                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| Theme ID           | Ghi rõ `storybook-royal-forest` trong data/theme config và README của sub-project    |
| App shell          | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages              | Có đủ hero storybook, chapter projects, royal inventory skills, royal letter contact |
| Feature folders    | Tách `storybook-scene`, `royal-mascot`, `chapter-projects`, `royal-inventory`        |
| UI components      | Có `CrownButton`, `ScrollCard`, `RibbonTag`, `SealBadge` dùng lại trong các page      |
| Asset folder       | Tạo `src/assets/storybook-royal-forest/` và đủ 9 SVG files trong bảng asset phía trên |
| Asset usage        | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục         |
| Profile card       | `storybook-card` ưu tiên avatar thật từ `docs/avatar.png`; royal couple chỉ là nền/decorative layer |
| Motion             | Nhấn mạnh star twinkle, shooting-star, firefly-drift, lantern-glow, carriage/walk loop |
| Accessibility      | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive         | Hero, chapter cards, inventory và contact assets phải về 1 cột ở mobile nhỏ          |
| Reduced motion     | Có fallback `prefers-reduced-motion` để tắt animation lặp                            |
| Performance        | SVG tối ưu, không render quá 20–30 particle visible, không nhúng text chính trong SVG |

---


## Quy chuẩn triển khai cho Catalog 5

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer Motion variants, spring, easing, reduced motion
│   ├── riveSetup.js          ← Rive state machine config, asset preload
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-scene>/        ← SVG scene, background layers, decoration components
│   ├── <theme-mascot>/       ← Rive/SVG mascot, state controller, reactions
│   ├── <theme-animation>/    ← SVG animated elements, particle layers
│   └── <theme-content>/      ← Content-specific features (gallery, menu, path...)
├── components/
│   ├── layout/               ← Route/page shell, navigation, transition wrapper
│   └── ui/                   ← Buttons, cards, badges, modal, drawer
└── assets/<theme-id>/        ← SVG files, Rive files, pattern files, icon sets
```

### Phân vai tool rõ ràng

| Việc cần làm                    | Tool nên dùng                            | Ghi chú triển khai                             |
| ------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| Page/route transition           | Framer Motion                            | Dùng variants/AnimatePresence                  |
| Hover/tap card, modal, drawer   | Framer Motion                            | Giữ UI animation gần component React           |
| Mascot state machine            | Rive                                     | Sleep/wake/interact states, preload asset       |
| Smooth scroll                   | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion    |
| Scroll progress transform       | Framer Motion `useScroll`/`useTransform` | Parallax, scale, progress indicator            |
| SVG scene animation             | SVGator export hoặc CSS keyframes        | Idle loop, decoration sway, path draw          |
| Particle/decoration idle        | CSS keyframes                            | Petal, firefly, steam, sparkle loop            |
| Icon/badge micro-interaction    | CSS transition                           | Hover lift, rotate, glow, bounce               |
| Complex SVG path animation      | SVG stroke-dashoffset + CSS              | Rainbow draw, path reveal, ink stroke          |
| Interactive micro-animation     | Rive                                     | CTA reaction, form success, loading state      |

### Performance rules

- Lazy load SVG scene components và Rive files bằng React.lazy + Suspense.
- Không render quá nhiều animated SVG elements cùng lúc (giới hạn 20–30 animated items visible).
- Rive files nên dưới 100KB mỗi file, preload cho hero mascot.
- Với mobile, giảm số particle/decoration hoặc tắt idle animation.
- Text chính phải là HTML/CSS, không đặt trong SVG để giữ accessibility và responsive.
- Lenis và animation loop phải cleanup khi component unmount.
- Tôn trọng `prefers-reduced-motion`: tắt idle loop, particle drift, và decoration sway.
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

### Nguyên tắc thiết kế chung cho Catalog 5

| Nguyên tắc                | Mô tả                                                                  |
| ------------------------- | ---------------------------------------------------------------------- |
| Tông màu chủ đạo          | Hồng pastel + mint/xanh lá nhạt + vàng ấm + tím lavender              |
| Cảm giác chung            | Cute, dreamy, ấm áp, nữ tính, nhiều chi tiết dễ thương                 |
| SVG-first approach        | Ưu tiên SVG 2D cho mọi decoration, icon, scene, background, mascot    |
| Mascot-driven             | Mỗi theme có mascot/character chính tạo personality riêng              |
| Animation philosophy      | Mềm, bouncy, organic, gợi cảm giác sống động nhưng không quá nhanh   |
| Icon density              | Nhiều icon nhỏ cute rải rác tạo cảm giác phong phú, handmade          |
| Accessibility             | Text luôn là HTML, contrast đủ trên nền pastel, reduced motion ready   |
| Mobile-first decoration   | Giảm decoration trên mobile, giữ mascot và content rõ ràng             |
| Reusable SVG symbols      | Dùng `<symbol>` và `<use>` để tái sử dụng elements trong SVG          |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js`, `src/app/riveSetup.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa tất cả SVG files và Rive files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Thiết kế mascot Rive file với ít nhất 3 states (idle, interact, special).
- [ ] Tách scene, mascot, animation và content features thành folder riêng.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền pastel.
- [ ] Preload Rive files cho hero section, lazy load cho sections khác.

---

_Cập nhật lần cuối: 2026-05-21 — Catalog 5: Cute & Dreamy Feminine themes với tông pastel sáng, nhiều SVG 2D assets, icon cute, mascot, underwater world, storybook fantasy và animation phong phú._
