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
| `kitty-cafe-menu`       | Kitty Café Menu Portfolio        | Mèo, café, bánh, ấm áp, cozy cute     | Portfolio nữ yêu mèo, food, lifestyle |

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

Portfolio như một khu rừng nấm cổ tích: nấm nhiều màu, tiên nhỏ, đom đóm, lá rụng, cổng gỗ. Fantasy cute, dreamy nhưng vẫn sáng và rực rỡ, phù hợp cho portfolio visual/art muốn tạo thế giới riêng.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Fantasy, dreamy, magical, whimsical, enchanting                    |
| Hình khối   | Mushroom card, leaf badge, fairy wing accent, wood frame, acorn   |
| Không gian  | Nền xanh lá nhạt, mushroom cluster, firefly dots, moss texture   |
| Chuyển động | Firefly glow drift, mushroom bounce, fairy flutter, leaf fall     |
| Điểm nhấn   | Mushroom SVG nhiều màu, fairy wings, firefly, acorn, wood gate   |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F5FFF5",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF7EB3",
        colorTextBase: "#1E3322",
        colorTextSecondary: "#5A7A5E",
        colorSuccess: "#7AE8A8",
        colorWarning: "#FFE088",
        colorError: "#FF7A7A",
        colorBorder: "#C8F0C8",
        borderRadius: 18,
        fontFamily: "'Baloo 2', 'Quicksand', sans-serif",
    },
};

// CSS Variables
// --fairy-pink: #FF7EB3;
// --mushroom-red: #FF8A7A;
// --forest-mint: #7AE8A8;
// --firefly-gold: #FFE088;
// --moss-green: #A8D8A8;
// --acorn-brown: #C8A070;
// --lilac-wing: #D0A8FF;
// --sky-clearing: #C8E8FF;
```

### Typography

- **Heading:** `Baloo 2` tròn, vui, gợi cảm giác storybook/fairy tale.
- **Body:** `Quicksand` mềm, rounded, dễ đọc trên nền xanh nhạt.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                   |
| --------------- | ----------------------------------------------------------------------- |
| Framer Motion   | Mushroom bounce entrance, fairy flutter, gate open reveal, route magic  |
| Rive            | Fairy mascot fly/wave/sprinkle dust, mushroom grow, firefly glow state  |
| SVGator         | Firefly drift path, leaf fall spiral, fairy wing flutter, gate creak    |
| Lenis           | Smooth scroll qua forest path sections, parallax depth layers           |
| CSS Keyframes   | Firefly glow pulse, mushroom idle bounce, leaf sway, moss shimmer      |
| Realtime Colors | Tạo palette fairy-pink/forest-mint/firefly-gold sáng và magical        |
| Blush           | Illustration fairy/forest girl cho hero hoặc about                      |

### Layout ideas

- **Hero:** Forest clearing với mushroom cluster, fairy bay ngang, firefly dots lung linh.
- **About:** Mushroom house card: profile info bên trong nấm lớn, fairy avatar.
- **Projects:** Forest path: mỗi project là một mushroom stop dọc theo path.
- **Skills:** Acorn collection: mỗi nhóm skill là một loại acorn/seed khác nhau.
- **Contact:** "Ring the fairy bell" CTA, bell chime + fairy dust scatter.

### Animation rules

| Sự kiện          | Effect                                          | Thư viện          |
| ---------------- | ----------------------------------------------- | ----------------- |
| Page load        | Gate open + forest reveal + firefly fade in     | Framer Motion     |
| Firefly idle     | Glow pulse + drift random path 5–10s           | CSS keyframes     |
| Mushroom bounce  | Squash-stretch bounce khi vào viewport          | Framer Motion     |
| Fairy flutter    | Wing flutter + drift horizontal                 | Rive / CSS        |
| Leaf fall        | Spiral fall path, rotate, fade                  | SVG/CSS animation |
| Card hover       | Mushroom grow slightly + fairy dust burst       | CSS transition    |
| Gate open        | Rotate open từ center + light ray reveal        | Framer Motion     |
| Section entrance | Fade + translateY(20px) + firefly stagger       | Framer Motion     |
| Moss shimmer     | Subtle color shift 8s loop                      | CSS keyframes     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                        ← Fairy forest shell
│   ├── routes.js                      ← clearing, path, acorn-tree, fairy-bell
│   └── theme.js
├── pages/
│   ├── ForestClearingHeroPage.jsx     ← Hero forest clearing với mushrooms
│   ├── ForestPathProjectsPage.jsx     ← Projects dọc theo forest path
│   ├── AcornTreeSkillsPage.jsx        ← Skills dạng acorn collection
│   └── FairyBellContactPage.jsx       ← Contact ring the fairy bell
├── features/
│   ├── forest-scene/
│   │   ├── ForestBackground.jsx
│   │   ├── MushroomCluster.jsx
│   │   ├── FireflyLayer.jsx
│   │   ├── LeafFallLayer.jsx
│   │   └── WoodGateReveal.jsx
│   ├── fairy-mascot/
│   │   ├── FairyRiveController.jsx
│   │   ├── FairyDustParticles.jsx
│   │   └── FairyFlutter.jsx
│   ├── mushroom-path/
│   │   ├── ForestPathSVG.jsx
│   │   ├── MushroomStopCard.jsx
│   │   └── PathDrawAnimation.jsx
│   └── acorn-skills/
│       ├── AcornTreeScene.jsx
│       ├── AcornBadge.jsx
│       └── SeedGrowAnimation.jsx
├── components/
│   ├── layout/                        ← Forest nav, gate page transition
│   └── ui/                            ← MushroomButton, LeafCard, FairyBadge, AcornTag
└── assets/fairy-mushroom-forest/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                         | Dùng cho               | Gợi ý kỹ thuật                                         |
| ---------------------------- | ------------------------------------------------------- | ---------------------- | ------------------------------------------------------ |
| `mushroom-collection.svg`    | Nấm nhiều kiểu: đỏ chấm, tím, xanh, vàng, nhỏ/lớn    | Cards/decoration       | Mỗi mushroom là symbol, fill gradient, cap + stem      |
| `fairy-character.svg`        | Fairy nhiều pose: bay, vẫy, rắc bụi, ngồi trên nấm    | Mascot/hero            | Tách wing riêng để flutter, body nhỏ cute              |
| `firefly-dots.svg`           | Firefly glow dots nhiều cỡ, có halo mềm                | Particle layer         | Circle + radialGradient glow, animate opacity          |
| `forest-leaves.svg`          | Lá nhiều loại: oak, maple, round, fern                  | Falling particles/decor| Path organic, fill autumn-green/gold, animate fall     |
| `wood-gate-frame.svg`        | Cổng gỗ fairy tale, có ivy/moss, arch shape             | Hero/page transition   | Tách cánh cổng riêng để animate open                   |
| `acorn-seed-set.svg`         | Acorn, chestnut, pinecone, seed pod, tiny sprout        | Skill badges           | Icon cute, fill warm brown/green, cap detail           |
| `forest-path-elements.svg`   | Stepping stones, moss patch, tiny flower, mushroom mini | Path/map decoration    | Scatter elements, organic placement                    |
| `fairy-icons.svg`            | Wand, bell, potion, crystal, lantern, key              | Nav/badge icons        | Icon 24x24, stroke 2px, fill pastel, currentColor     |

---


## 5. `kitty-cafe-menu` — Kitty Café Menu Portfolio

Portfolio như một quán café mèo dễ thương: mèo ngủ, latte art, bánh macaron, menu board, chuông cửa. Ấm áp, cozy, cute, phù hợp cho nữ yêu mèo và muốn portfolio mang cảm giác thư giãn, gần gũi.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Ấm áp, cozy, dễ thương, thư giãn, gần gũi                        |
| Hình khối   | Menu card, cup badge, paw print accent, chalkboard frame, macaron |
| Không gian  | Nền kem ấm, wood texture nhẹ, steam wisps, paw print trail       |
| Chuyển động | Cat tail sway, steam rise, paw print walk, bell jingle, cup tilt |
| Điểm nhấn   | Cat mascot SVG, latte cup, macaron stack, menu board, paw print  |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF8F2",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF9EB5",
        colorTextBase: "#3D2B22",
        colorTextSecondary: "#8A6B5E",
        colorSuccess: "#8AE0B8",
        colorWarning: "#FFE0A0",
        colorError: "#FF7A6B",
        colorBorder: "#FFE0D0",
        borderRadius: 16,
        fontFamily: "'Nunito', 'Poppins', sans-serif",
    },
};

// CSS Variables
// --kitty-pink: #FF9EB5;
// --latte-cream: #FFF8F2;
// --mocha-brown: #C8A088;
// --macaron-mint: #8AE0B8;
// --caramel-gold: #FFE0A0;
// --berry-jam: #FF7A6B;
// --milk-white: #FFFFFF;
// --choco-dark: #3D2B22;
// --blueberry-muffin: #A8B8E8;
```

### Typography

- **Heading:** `Nunito` tròn, ấm, gợi cảm giác cozy café.
- **Body:** `Poppins` gọn, hiện đại, dễ đọc trên nền kem.

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
| Realtime Colors | Tạo palette kitty-pink/mocha-brown/macaron-mint ấm và cozy              |
| Blush           | Illustration cat café girl/barista cho hero hoặc about                   |

### Layout ideas

- **Hero:** Café counter scene, cat mascot ngủ trên quầy, menu board phía sau, steam từ cup.
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
| `kitty-mascot-set.svg`       | Mèo nhiều pose: ngủ, thức, vẫy, chơi, peek, cuộn tròn  | Mascot/decoration      | Tách tail, ears, eyes riêng để animate, fill soft colors|
| `latte-cup-set.svg`          | Cup latte, cappuccino, matcha, có latte art trên mặt     | Hero/project cards     | Cup shape + foam layer, art detail bằng path nhỏ        |
| `macaron-stack.svg`          | Macaron nhiều màu: pink, mint, lavender, lemon, berry    | Skills section         | Oval shape, filling line, shadow nhẹ, stack arrangement |
| `steam-wisps.svg`            | Steam/hơi nước nhiều kiểu wisp                           | Particle decoration    | Path wavy, opacity gradient, animate rise + fade        |
| `paw-print-set.svg`          | Paw print nhiều cỡ, có toe beans detail                  | Trail/decoration       | Circle arrangement, fill soft pink/brown                |
| `cafe-menu-board.svg`        | Chalkboard frame, có chalk text area, doodle border      | Section frame          | Rect dark + chalk texture pattern, border doodle        |
| `bakery-icons.svg`           | Croissant, cookie, cake slice, donut, muffin, spoon     | Nav/badge icons        | Icon 24x24, stroke 2px, fill warm pastry colors        |
| `door-bell-set.svg`          | Chuông cửa, ribbon bow, tiny cat face bell               | Contact CTA/decoration | Tách bell body và clapper để animate swing              |

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

_Cập nhật lần cuối: 2026-05-19 — Catalog 5: Cute & Dreamy Feminine themes với tông pastel sáng, nhiều SVG 2D assets, icon cute, mascot và animation phong phú._
