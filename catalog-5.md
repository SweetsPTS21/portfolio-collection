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

| Library / Tool  | Vai trò chính trong catalog này                                | Nên dùng cho                                                 |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| Framer Motion   | Animation UI React, page transition, card hover, scroll reveal | Section entrance, route transition, shared layout, CTA hover |
| Rive            | Animated 2D mascot/icon/state machine                          | Mascot, CTA state, loading, empty state, tiny reaction       |
| SVGator         | Tạo animation SVG timeline rồi export SVG/CSS/JS               | Cloud drift, petal fall, sparkle, icon động phức tạp         |
| Lenis           | Smooth scroll có kiểm soát                                     | Portfolio nhiều section, scroll reveal, anchor navigation    |
| CSS Keyframes   | Animation nhẹ, idle loop, particle drift                       | Float, sway, twinkle, bounce loop                            |
| Realtime Colors | Tạo và kiểm tra bảng màu sáng pastel, contrast                 | Token màu, theme preview, palette variants                   |
| Blush           | Illustration pack/custom character theo style cute/feminine    | Hero illustration, empty state, about avatar, decor scene    |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; Rive dùng cho interactive micro-animation; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; CSS keyframes cho idle decoration; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration đồng bộ style.

---

## Danh sách phong cách

| ID                         | Tên phong cách                     | Vibe                                                                                | Hợp với                                         |
| -------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `bunny-cloud-garden`       | Bunny Cloud Garden Portfolio       | Mây, thỏ, vườn hoa, mơ mộng, soft cute                                              | Portfolio nữ tính, designer, creative           |
| `candy-arcade-world`       | Candy Arcade World Portfolio       | Kẹo, game, pixel cute, rực rỡ, vui                                                  | Portfolio dev/designer trẻ trung                |
| `sakura-letter-desk`       | Sakura Letter Desk Portfolio       | Hoa anh đào, thư tay, nhẹ nhàng, Nhật                                               | Portfolio tinh tế, nữ tính, minimalist          |
| `fairy-mushroom-forest`    | Fairy Mushroom Forest Portfolio    | Rừng nấm, tiên, fantasy, dreamy cute                                                | Portfolio visual, illustration, art             |
| `kitty-cafe-menu`          | Kitty Café Menu Portfolio          | Mèo, café, bánh, xanh lam nhạt, cozy cute                                           | Portfolio nữ yêu mèo, food, lifestyle           |
| `underwater-world`         | Underwater World Portfolio         | Đại dương, cá, san hô, xanh dương nhạt, dreamy aqua                                 | Portfolio art, creative, ocean lover            |
| `storybook-royal-forest`   | Storybook Royal Forest Portfolio   | Đêm trăng, sao băng, cỗ xe ngựa, cổ tích                                            | Portfolio nữ tính, art, luxury creative         |
| `strawberry-picnic-meadow` | Strawberry Picnic Meadow Portfolio | Picnic dâu, đồng cỏ, caro, ong/bướm, rực rỡ                                         | Portfolio nữ tính, lifestyle, creative          |
| `pastel-magic-boutique`    | Pastel Magic Boutique Portfolio    | Boutique phép thuật pastel, potion, gương, ribbon                                   | Portfolio designer, beauty, creative            |
| `dreamy-flower-train`      | Dreamy Flower Train Portfolio      | Tàu hoa trên mây, sky garden, hành trình mềm mại                                    | Portfolio storytelling, career journey          |
| `mermaid-pearl-lagoon`     | Mermaid Pearl Lagoon Portfolio     | Lagoon ngọc trai, vỏ sò, san hô hồng tím, shimmer                                   | Portfolio art, beauty, ocean fantasy            |
| `kawaii-stationery-room`   | Kawaii Stationery Room Portfolio   | Phòng stationery cute, sticker, bút gel, washi tape                                 | Portfolio học tập, design, handmade             |
| `ballet-swan-lake`         | Ballet Swan Lake Portfolio         | Thiên nga, hồ trăng, ruy băng satin hồng, hoa hồng phấn nhạt, glassmorphic lấp lánh | Portfolio nữ tính, dancer, nghệ thuật, nhạc sĩ  |
| `unicorn-parfait-island`   | Unicorn Parfait Island Portfolio   | Kỳ lân, kem parfait glassmorphic, marshmallow, mây kẹo bông hồng, ngọt ngào         | Portfolio sáng tạo, designer, illustrator       |
| `carousel-dream-palace`    | Carousel Dream Palace Portfolio    | Vòng quay ngựa gỗ đêm, sao lấp lánh, ruy băng voan hồng, sương pha lê               | Portfolio sang trọng, creative, fashion blogger |
| `strawberry-glasshouse`    | Strawberry Glasshouse Portfolio    | Nhà kính dâu tây thủy tinh mờ, giọt sương mai, ong béo, quả dâu hồng mọng           | Portfolio thực vật, lifestyle, food blogger     |
| `angel-perfume-atelier`    | Angel Perfume Atelier Portfolio    | Chai nước hoa thủy tinh phản quang, cánh thiên thần, bong bóng xà cừ                | Portfolio sang xịn, beauty, designer, fashion   |

---

## 1. `bunny-cloud-garden` — Bunny Cloud Garden Portfolio

Portfolio như một khu vườn trên mây: thỏ nhỏ, hoa tulip, cầu vồng mini, mây bông, giọt sương. Theme mơ mộng, soft cute, phù hợp cho nữ muốn portfolio nhẹ nhàng nhưng vẫn đầy màu sắc và sống động.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Mơ mộng, dịu dàng, vui, ấm áp, innocent                          |
| Hình khối   | Cloud card bo 20–24px, petal badge, rainbow arc, soft blob       |
| Không gian  | Nền trắng hồng nhạt, cloud layer, flower field ở dưới            |
| Chuyển động | Cloud drift, bunny hop, petal fall, rainbow fade-in, dew drop    |
| Điểm nhấn   | Bunny mascot SVG, tulip/daisy, cloud bông, rainbow, watering can |

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
| CSS Keyframes   | Cloud idle drift, flower sway, sparkle twinkle, bunny ear wiggle      |
| Realtime Colors | Tạo palette bunny-pink/garden-mint/sky-blue sáng và hài hòa           |
| Blush           | Illustration bunny girl/garden scene cho hero hoặc about              |

### Layout ideas

- **Hero:** Cloud landscape với bunny mascot ở giữa, hoa mọc từ dưới, rainbow arc phía sau.
- **About:** Garden profile card dạng flower pot tag, có bunny avatar.
- **Projects:** Mỗi project là một luống hoa/flower bed card, hover thì hoa nở.
- **Skills:** Watering can tưới ra skill bubbles theo nhóm màu.
- **Contact:** "Plant a message" CTA, seed drop animation → flower grow.

### Animation rules

| Sự kiện          | Effect                                 | Thư viện          |
| ---------------- | -------------------------------------- | ----------------- |
| Page load        | Cloud part reveal + bunny hop in       | Framer Motion     |
| Cloud background | Drift horizontal 15–25s loop           | CSS keyframes     |
| Petal fall       | Fall path diagonal, rotate, fade out   | SVG/CSS animation |
| Bunny idle       | Ear wiggle + blink 4s loop             | Rive / CSS        |
| Flower sway      | Gentle sway 3–5s loop                  | CSS keyframes     |
| Card hover       | Float up + petal burst + soft glow     | CSS transition    |
| Rainbow          | Arc draw stroke-dashoffset 1.5s        | SVG/CSS animation |
| Section entrance | Fade + scale(0.95→1) + sparkle stagger | Framer Motion     |
| Dew drop         | Drop fall + splash ripple              | CSS keyframes     |

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

| File SVG tự tạo          | Nội dung cần vẽ                                       | Dùng cho            | Gợi ý kỹ thuật                                    |
| ------------------------ | ----------------------------------------------------- | ------------------- | ------------------------------------------------- |
| `bunny-mascot-set.svg`   | Bunny nhiều pose: hop, wave, sleep, peek, hold flower | Mascot/decoration   | Tách body parts để animate riêng, fill soft pink  |
| `cloud-shapes.svg`       | Cloud bông nhiều kiểu, có highlight và shadow mềm     | Background/card     | Organic blob path, fill white, shadow bằng filter |
| `garden-flowers.svg`     | Tulip, daisy, sunflower, rose, lavender bunch         | Project cards/decor | Mỗi flower là symbol, stem tách riêng để sway     |
| `rainbow-arc.svg`        | Cầu vồng 5–7 màu pastel, arc mềm                      | Hero/section accent | Arc path, stroke-dasharray cho draw animation     |
| `petal-set.svg`          | Cánh hoa nhiều màu: pink, coral, lavender, yellow     | Falling particles   | Ellipse nhỏ, rotate random, animate fall path     |
| `watering-can-scene.svg` | Watering can, water drops, tiny sprout                | Skills section      | Tách can và drops riêng, animate pour sequence    |
| `garden-icons.svg`       | Flower pot, seed, leaf, butterfly, ladybug, fence     | Nav/badge icons     | Icon 24x24, stroke 2px, currentColor              |
| `dew-sparkle.svg`        | Giọt sương, sparkle star, tiny shine dots             | Particle decoration | Circle + highlight, animate opacity + scale       |

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
| Điểm nhấn   | Lollipop SVG, gummy bear, pixel heart, arcade machine, star coin |

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
| Realtime Colors | Tạo palette candy-pink/gummy-green/coin-gold sáng và vui               |
| Blush           | Illustration candy girl/arcade character cho hero                      |

### Layout ideas

- **Hero:** Arcade machine frame SVG, tên như game title screen, candy rơi từ trên.
- **About:** Player profile card dạng game ID, có level bar và avatar pixel.
- **Projects:** Mỗi project là một game level/stage card, có score badge và star rating.
- **Skills:** Candy jar: mỗi nhóm skill là một loại kẹo khác nhau trong jar.
- **Contact:** "Insert coin" CTA, coin drop animation → message sent.

### Animation rules

| Sự kiện          | Effect                                   | Thư viện       |
| ---------------- | ---------------------------------------- | -------------- |
| Page load        | Arcade boot screen + candy rain entrance | Framer Motion  |
| Coin idle        | Spin Y-axis 3s loop                      | CSS keyframes  |
| Candy decoration | Float up-down nhẹ, rotate ±5deg          | CSS keyframes  |
| Pixel heart      | Pulse scale 1→1.15→1, 2s loop            | CSS keyframes  |
| Card hover       | Bounce + glow + score pop (+1 badge)     | CSS transition |
| Star confetti    | Drift diagonal, rotate, stagger          | CSS keyframes  |
| Level entrance   | Slide-in + pixel dissolve reveal         | Framer Motion  |
| Button press     | Scale down 0.92 → spring back            | Framer Motion  |
| Lollipop spin    | Rotate 360deg 4s loop                    | CSS keyframes  |

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

| File SVG tự tạo            | Nội dung cần vẽ                                        | Dùng cho             | Gợi ý kỹ thuật                                         |
| -------------------------- | ------------------------------------------------------ | -------------------- | ------------------------------------------------------ |
| `arcade-machine-frame.svg` | Khung arcade machine cute, có joystick và buttons      | Hero frame           | Rect rounded, gradient pastel, button circles          |
| `candy-collection.svg`     | Lollipop, gummy bear, candy cane, wrapped candy, donut | Decoration/skills    | Mỗi candy là symbol, fill bright pastel, outline trắng |
| `pixel-heart-set.svg`      | Heart nhiều cỡ, pixel style nhưng bo nhẹ               | Life bar/badge       | Rect grid tạo pixel, bo corner 2px cho soft pixel      |
| `coin-star-set.svg`        | Coin mặt trước/sau, star nhiều cánh, sparkle           | Score/badge/particle | Circle + inner detail, animate rotateY                 |
| `candy-stripe-pattern.svg` | Stripe pattern nhiều màu pastel                        | Border/background    | Rect pattern diagonal, opacity nhẹ                     |
| `game-level-icons.svg`     | Flag, key, door, chest, potion, shield                 | Level cards/nav      | Icon 24x24, fill bright, stroke 2px                    |
| `gummy-bear-poses.svg`     | Gummy bear dance, wave, sit, jump                      | Mascot/decoration    | Tách limbs để animate, fill translucent gradient       |
| `confetti-candy-bits.svg`  | Star, circle, ribbon, candy wrapper bits               | Particle layer       | Nhiều màu, animate drift + rotate                      |

---

## 3. `sakura-letter-desk` — Sakura Letter Desk Portfolio

Portfolio như một bàn viết thư mùa xuân Nhật Bản: hoa anh đào rơi, phong bì washi, bút lông, ink splash nhẹ, chim sẻ. Theme nhẹ nhàng, tinh tế, nữ tính theo phong cách Nhật nhưng vẫn sáng và có nhiều animation mềm mại.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Nhẹ nhàng, tinh tế, thanh lịch, nữ tính, poetic                   |
| Hình khối   | Envelope card, washi seal, ink splash accent, paper fold edge     |
| Không gian  | Nền trắng kem, sakura petal layer, ink wash texture nhẹ           |
| Chuyển động | Sakura fall, envelope open, ink brush stroke draw, bird hop       |
| Điểm nhấn   | Sakura branch SVG, envelope, washi tape seal, ink splash, sparrow |

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
| Realtime Colors | Tạo palette sakura-pink/leaf-green/washi-gold tinh tế và hài hòa       |
| Blush           | Illustration Japanese girl/spring scene cho hero                       |

### Layout ideas

- **Hero:** Sakura branch từ góc trên, petal rơi nhẹ, tên viết như thư pháp mềm trên giấy.
- **About:** Letter card mở ra từ envelope, có washi seal và stamp.
- **Projects:** Mỗi project là một bức thư/postcard với ink illustration nhỏ.
- **Skills:** Ink palette: mỗi nhóm skill là một màu mực trong bộ sumi-e.
- **Contact:** "Write a letter" CTA, envelope seal animation khi gửi.

### Animation rules

| Sự kiện          | Effect                                     | Thư viện          |
| ---------------- | ------------------------------------------ | ----------------- |
| Page load        | Sakura branch grow in + petal scatter      | Framer Motion     |
| Sakura petal     | Fall diagonal, rotate, fade out ở bottom   | SVG/CSS animation |
| Branch sway      | Gentle sway 5–8s loop                      | CSS keyframes     |
| Envelope open    | Flap rotate open + letter slide up         | Framer Motion     |
| Ink stroke       | Stroke-dashoffset draw 1–2s                | SVG/CSS animation |
| Bird idle        | Hop in place, head tilt 3s loop            | Rive / CSS        |
| Card hover       | Paper lift + subtle shadow + petal burst   | CSS transition    |
| Section entrance | Fade + translateY(16px), ink splash accent | Framer Motion     |
| Washi seal       | Stamp press scale 0→1 + rotate nhẹ         | Framer Motion     |

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

| File SVG tự tạo             | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                           |
| --------------------------- | ----------------------------------------------------- | ---------------------- | -------------------------------------------------------- |
| `sakura-branch.svg`         | Cành anh đào có hoa nở, nụ, lá non                    | Hero/corner decoration | Path organic, fill gradient pink, tách hoa riêng         |
| `sakura-petals.svg`         | Cánh hoa anh đào nhiều góc xoay, nhiều shade pink     | Falling particles      | Ellipse nhỏ, 5 petal shape, animate fall + rotate        |
| `envelope-set.svg`          | Envelope đóng/mở, có washi seal, stamp, liner pattern | Project cards          | Tách flap riêng để animate open, liner pattern bên trong |
| `ink-splash-set.svg`        | Ink splash, brush stroke, dot splatter nhiều kiểu     | Section accent/divider | Path organic, opacity 0.15–0.3, nhiều size               |
| `washi-tape-japanese.svg`   | Washi tape pattern: sakura, wave, dot, stripe         | Label/card decoration  | Rect + pattern fill, clip-path cho edge                  |
| `sparrow-poses.svg`         | Chim sẻ đậu, bay, nghiêng đầu, nhảy                   | Decoration/mascot      | Silhouette đơn giản, fill warm brown, tách wing          |
| `desk-stationery-icons.svg` | Bút lông, mực, phong bì, stamp, paper clip, bookmark  | Nav/badge icons        | Icon 24x24, stroke 2px, currentColor                     |
| `paper-texture-pattern.svg` | Texture giấy washi nhẹ, fiber pattern                 | Background/card        | Pattern opacity rất thấp 0.05–0.1, noise nhẹ             |

---

## 4. `fairy-mushroom-forest` — Fairy Mushroom Forest Portfolio

Portfolio như một khu rừng nấm cổ tích enchanted: nấm phát sáng bioluminescent, tiên nhỏ để lại vệt sáng tím, đom đóm lung linh, sương mù huyền bí, ánh trăng xuyên tán lá. Fantasy đậm chất "enchanted forest" — magical, dreamy, có chiều sâu, phù hợp cho portfolio visual/art muốn tạo thế giới riêng đầy mê hoặc.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------- |
| Cảm xúc     | Enchanted, magical, mysterious-cute, whimsical, bioluminescent                           |
| Hình khối   | Mushroom house card, leaf badge, fairy wing accent, wood gate, stepping stone            |
| Không gian  | Nền xanh rừng sâu, parallax 4 layers (sky → trees → mushrooms → fireflies), mist overlay |
| Chuyển động | Firefly glow drift, mushroom glow pulse, fairy trail, gate open, mist drift, moonbeam    |
| Điểm nhấn   | Nấm phát sáng, fairy trail tím, cổng gỗ enchanted, moonbeam rays, bioluminescent moss    |

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

| Library / Tool  | Cách dùng trong theme                                                               |
| --------------- | ----------------------------------------------------------------------------------- |
| Framer Motion   | Gate open reveal, mushroom grow entrance, fairy trail, parallax layers, route magic |
| Rive            | Fairy mascot fly/wave/sprinkle dust, mushroom glow state, firefly swarm             |
| SVGator         | Firefly drift path, leaf fall spiral, fairy wing flutter, mist drift, moonbeam      |
| Lenis           | Smooth scroll + parallax 4 forest depth layers                                      |
| CSS Keyframes   | Firefly glow pulse, mushroom bioluminescent pulse, mist drift, moss shimmer         |
| Realtime Colors | Tạo palette fairy-purple/forest-mint/firefly-gold magical và enchanted              |
| Blush           | Illustration fairy/forest girl cho hero hoặc about                                  |

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

| Sự kiện          | Effect                                                   | Thư viện              |
| ---------------- | -------------------------------------------------------- | --------------------- |
| Hero intro       | Gate open → moonbeam rays → mist clear → forest reveal   | Framer Motion         |
| Scroll parallax  | 4 forest layers di chuyển tốc độ khác nhau               | Lenis + Framer Motion |
| Firefly idle     | Glow pulse + drift random path 5–10s, stagger            | CSS keyframes         |
| Mushroom glow    | Bioluminescent pulse (box-shadow tím/xanh) 3s loop       | CSS keyframes         |
| Fairy trail      | SVG path draw + sparkle particles theo đường bay         | SVGator + CSS         |
| Fairy flutter    | Wing flutter + drift horizontal + dust sprinkle          | Rive / CSS            |
| Mist drift       | Horizontal drift rất chậm (30–40s loop), opacity thấp    | CSS keyframes         |
| Moonbeam         | Subtle ray opacity pulse 8s loop                         | CSS keyframes         |
| Leaf fall        | Spiral fall path, rotate, fade                           | SVG/CSS animation     |
| Card enter       | Mushroom "grow" từ dưới lên (scaleY 0→1 từ bottom)       | Framer Motion         |
| Card hover       | Mushroom glow intensify + fairy dust burst + slight lift | CSS transition        |
| Gate open        | Rotate open từ center + moonbeam ray reveal              | Framer Motion         |
| Section entrance | Fade + translateY(20px) + firefly stagger appear         | Framer Motion         |
| Nav hover        | Stepping stone glow + firefly appear around              | CSS transition        |
| Moss shimmer     | Bioluminescent color shift 6s loop                       | CSS keyframes         |
| Route transition | Fairy dust scatter → mist fade → new scene               | Framer Motion         |

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

| File SVG tự tạo            | Nội dung cần vẽ                                           | Dùng cho                | Gợi ý kỹ thuật                                               |
| -------------------------- | --------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `mushroom-houses.svg`      | Nấm dạng nhà: cửa sổ, cửa ra vào, ống khói, phát sáng     | Project cards           | Cap gradient + glow filter, stem có door/window detail       |
| `mushroom-collection.svg`  | Nấm nhiều kiểu: đỏ chấm, tím glow, xanh, vàng, nhỏ/lớn    | Decoration/background   | Mỗi mushroom là symbol, fill gradient, feGaussianBlur glow   |
| `fairy-character.svg`      | Fairy nhiều pose: bay, vẫy, rắc bụi, ngồi trên nấm        | Mascot/hero             | Tách wing riêng để flutter, body nhỏ cute, trail path        |
| `fairy-trail-path.svg`     | Đường bay cong với sparkle dots dọc theo path             | Page transition/hover   | Path curve + circle dots, animate stroke-dashoffset          |
| `firefly-swarm.svg`        | Firefly glow dots nhiều cỡ, có halo mềm, radial gradient  | Particle layer          | Circle + radialGradient glow vàng, animate opacity + drift   |
| `forest-depth-layers.svg`  | 3–4 layer silhouette cây (xa→gần), tối→sáng               | Hero parallax           | Mỗi layer là path riêng, fill opacity giảm dần               |
| `enchanted-gate.svg`       | Cổng gỗ fairy tale có ivy phát sáng, moss, arch, chi tiết | Hero intro animation    | Tách 2 cánh cổng riêng, ivy có glow, animate rotate open     |
| `moonbeam-rays.svg`        | Tia sáng trăng xuyên tán lá, gradient fade từ trên xuống  | Hero background         | Linear gradient rects, opacity thấp, animate pulse           |
| `enchanted-mist.svg`       | Sương mù nhiều layer, organic blobs, opacity rất thấp     | Foreground parallax     | Blob paths, fill white opacity 0.08–0.15, animate translateX |
| `bioluminescent-moss.svg`  | Rêu phát sáng pattern, dots và patches xanh glow          | Background texture      | Pattern tile, radialGradient glow, opacity 0.1–0.2           |
| `stepping-stones-nav.svg`  | Đá bước chân phát sáng, moss trên đá, nhiều shape         | Navigation              | Rounded rect stones, glow filter on hover state              |
| `enchanted-tree.svg`       | Cây lớn có nhánh phát sáng, lá glow, acorn treo           | Skills section          | Trunk + branches path, glow trên branch tips                 |
| `forest-leaves.svg`        | Lá nhiều loại: oak, maple, round, fern, autumn colors     | Falling particles/decor | Path organic, fill green/gold, animate fall spiral           |
| `acorn-seed-set.svg`       | Acorn, chestnut, pinecone, seed pod, tiny sprout          | Skill badges            | Icon cute, fill warm brown/green, cap detail                 |
| `forest-path-elements.svg` | Stepping stones, moss patch, tiny flower, mushroom mini   | Path/map decoration     | Scatter elements, organic placement                          |
| `fairy-icons.svg`          | Wand, bell, potion, crystal, lantern, key, mushroom       | Nav/badge icons         | Icon 24x24, stroke 2px, fill pastel glow, currentColor       |

---

## 5. `kitty-cafe-menu` — Kitty Café Menu Portfolio

Portfolio như một quán café mèo dễ thương với tone xanh lam nhạt: mèo ngủ, latte art, bánh macaron, menu board, chuông cửa. Mát dịu, cozy, cute, phù hợp cho nữ yêu mèo và muốn portfolio mang cảm giác thư giãn, trong trẻo, gần gũi.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Mát dịu, cozy, dễ thương, thư giãn, trong trẻo                       |
| Hình khối   | Menu card, cup badge, paw print accent, chalkboard frame, macaron    |
| Không gian  | Nền xanh lam nhạt, cloud cream layer, steam wisps, paw print trail   |
| Chuyển động | Cat tail sway, steam rise, paw print walk, bell jingle, cup tilt     |
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
| Realtime Colors | Tạo palette kitty-blue/sky-milk/macaron-mint sáng, mát dịu và cozy       |
| Blush           | Illustration cat café girl/barista cho hero hoặc about                   |

### Layout ideas

- **Hero:** Café counter scene xanh lam nhạt, cat mascot ngủ trên quầy, menu board phía sau, steam từ cup.
- **About:** Barista profile card dạng name tag/apron badge, có cat avatar.
- **Projects:** Café menu: mỗi project là một menu item (Latte, Mocha, Matcha...) với description.
- **Skills:** Macaron tower: mỗi nhóm skill là một tầng macaron màu khác nhau.
- **Contact:** "Ring the bell" CTA, door bell jingle + cat wake up reaction.

### Animation rules

| Sự kiện          | Effect                                     | Thư viện          |
| ---------------- | ------------------------------------------ | ----------------- |
| Page load        | Door open + bell jingle + cat peek         | Framer Motion     |
| Steam idle       | Rise wisp, fade out ở top, 4–6s loop       | CSS keyframes     |
| Cat tail         | Sway side-to-side 3s loop                  | CSS keyframes     |
| Paw print trail  | Fade in sequence along path, then fade out | SVG/CSS animation |
| Card hover       | Cup tilt + steam burst + slight lift       | CSS transition    |
| Menu flip        | Card flip reveal back side (recipe/detail) | Framer Motion     |
| Macaron stack    | Bounce stack build-up, stagger 0.1s        | Framer Motion     |
| Section entrance | Fade + translateY(16px) + paw print accent | Framer Motion     |
| Bell ring        | Rotate swing ±15deg, 0.5s, ease-out        | CSS animation     |

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

| File SVG tự tạo        | Nội dung cần vẽ                                           | Dùng cho               | Gợi ý kỹ thuật                                                      |
| ---------------------- | --------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------- |
| `kitty-mascot-set.svg` | Mèo nhiều pose: ngủ, thức, vẫy, chơi, peek, cuộn tròn     | Mascot/decoration      | Tách tail, ears, eyes riêng để animate, fill soft blue/white colors |
| `latte-cup-set.svg`    | Cup latte, cappuccino, matcha, có latte art trên mặt      | Hero/project cards     | Cup shape + foam layer, art detail bằng path nhỏ                    |
| `macaron-stack.svg`    | Macaron nhiều màu: sky blue, mint, lavender, lemon, berry | Skills section         | Oval shape, filling line, shadow nhẹ, stack arrangement             |
| `steam-wisps.svg`      | Steam/hơi nước nhiều kiểu wisp                            | Particle decoration    | Path wavy, opacity gradient, animate rise + fade                    |
| `paw-print-set.svg`    | Paw print nhiều cỡ, có toe beans detail                   | Trail/decoration       | Circle arrangement, fill soft blue/navy                             |
| `cafe-menu-board.svg`  | Chalkboard frame, có chalk text area, doodle border       | Section frame          | Rect dark + chalk texture pattern, border doodle                    |
| `bakery-icons.svg`     | Croissant, cookie, cake slice, donut, muffin, spoon       | Nav/badge icons        | Icon 24x24, stroke 2px, fill warm pastry colors                     |
| `door-bell-set.svg`    | Chuông cửa, ribbon bow, tiny cat face bell                | Contact CTA/decoration | Tách bell body và clapper để animate swing                          |

---

## 6. `underwater-world` — Underwater World Portfolio

Portfolio như một thế giới đại dương trong trẻo: ánh mặt trời chiếu xuyên qua mặt nước, đàn cá nhiều màu bơi quanh san hô, cua nhỏ đi trên cát, sao biển nằm cạnh vỏ sò, rong rêu biển và các loài thủy sinh tạo thành một hệ sinh thái mềm mại. Theme dùng xanh dương nhạt làm chủ đạo, mát dịu, dreamy, giàu chi tiết nhưng vẫn sáng và cute.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                     |
| ----------- | ------------------------------------------------------------------------- |
| Cảm xúc     | Trong trẻo, mát dịu, dreamy, khám phá, sống động, ocean cute              |
| Hình khối   | Bubble card, wave divider, coral badge, shell tab, starfish accent        |
| Không gian  | Nền xanh dương nhạt, sunbeam từ trên cao, coral reef, seaweed layers      |
| Chuyển động | Fish school swim, bubble rise, seaweed sway, crab walk, sunray shimmer    |
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
| Blush           | Illustration ocean girl/mermaid diver hoặc underwater reef scene cho hero   |

### Layout ideas

- **Hero:** Underwater reef scene xanh dương nhạt, sunbeam chiếu từ trên xuống, đàn cá nhiều màu bơi thành nhóm quanh tên portfolio.
- **About:** Profile card dạng bubble glass, viền sóng nhẹ, có shell badge và avatar nằm trong pearl frame.
- **Projects:** Mỗi project là một coral reef card, hover thì cá nhỏ bơi qua và bubble nổi lên.
- **Skills:** Sea garden: mỗi nhóm skill là một cụm rong biển/san hô, icon thủy sinh làm badge.
- **Contact:** "Send a sea note" CTA trong bottle message, bubble burst + starfish wave khi gửi thành công.

### Animation rules

| Sự kiện          | Effect                                                       | Thư viện           |
| ---------------- | ------------------------------------------------------------ | ------------------ |
| Page load        | Water surface fade-in + sunbeam sweep + fish school entrance | Framer Motion/CSS  |
| Fish school      | Swim ngang theo path cong, stagger, đổi layer depth nhẹ      | SVGator/CSS        |
| Bubble idle      | Bubble rise 5–9s loop, scale/opacity random                  | CSS keyframes      |
| Seaweed          | Sway trái/phải organic, lệch nhịp giữa từng cụm              | CSS keyframes      |
| Crab walk        | Đi ngang ngắn, dừng, giơ càng, lặp 6–8s                      | Rive/CSS           |
| Sunbeam          | Light ray shimmer rất nhẹ, không làm giảm readability        | CSS/SVG filter     |
| Card hover       | Lift + bubble pop + tiny fish pass-through                   | Framer Motion      |
| Section entrance | Fade + translateY(18px) + coral/shell stagger                | Framer Motion      |
| Contact success  | Bottle cork pop + bubble burst + starfish wave               | Rive/Framer Motion |

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

| File SVG tự tạo              | Nội dung cần vẽ                                                | Dùng cho              | Gợi ý kỹ thuật                                           |
| ---------------------------- | -------------------------------------------------------------- | --------------------- | -------------------------------------------------------- |
| `fish-school-set.svg`        | Nhiều loài cá: cá nhỏ, cá nhiệt đới, cá đuôi dài, cá tròn cute | Hero/particles/mascot | Tách thân, vây, đuôi để animate swim; màu pastel đa dạng |
| `coral-reef-scene.svg`       | Cụm san hô nhiều tầng, đá biển, cát, shell, pearl              | Hero/background/cards | Layer parallax, gradient pastel, shadow rất nhẹ          |
| `crab-starfish-set.svg`      | Cua nhiều pose, sao biển, nhím biển cute, ốc biển              | Decoration/contact    | Tách càng cua và chân để walk loop, starfish wave nhẹ    |
| `seaweed-aquatic-plants.svg` | Rong biển, tảo, cỏ biển, thủy sinh nhiều chiều cao             | Skills/background     | Path cong, anchor dưới đáy, animate sway bằng transform  |
| `bubble-particle-set.svg`    | Bubble nhiều kích thước, highlight, sparkle nước               | Particle layer        | Circle + opacity, dùng CSS vars cho duration/delay       |
| `sunbeam-caustics.svg`       | Tia nắng xuyên mặt nước, vệt sáng caustics                     | Hero/background       | Linear/radial gradient, mask mềm, animate opacity/shift  |
| `shell-pearl-icons.svg`      | Vỏ sò, ngọc trai, conch, sand dollar, wave icon                | Nav/badge/icons       | Icon 24x24, currentColor + fill pastel                   |
| `message-bottle-set.svg`     | Chai thư, nút bần, cuộn giấy, ribbon, bubble success           | Contact CTA           | Tách cork, note và bubbles để animate gửi thành công     |
| `aquatic-creature-icons.svg` | Cá ngựa, sứa cute, rùa biển mini, bạch tuộc nhỏ, sao biển      | Skills/project badges | Dùng symbol reuse, stroke 2px, fill aqua/coral/lilac     |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                  |
| --------------- | ------------------------------------------------------------------------------------ |
| Theme ID        | Ghi rõ `underwater-world` trong data/theme config và README của sub-project          |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages           | Có đủ ocean reef hero, fish trail projects, sea garden skills, bottle note contact   |
| Feature folders | Tách `underwater-scene`, `ocean-mascot`, `reef-projects`, `sea-garden-skills`        |
| UI components   | Có `BubbleButton`, `CoralCard`, `ShellTag`, `WaveDivider` dùng lại trong các page    |
| Asset folder    | Tạo `src/assets/underwater-world/` và đủ 9 SVG files trong bảng asset phía trên      |
| Asset usage     | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Visual priority | Hero phải thể hiện rõ thế giới đại dương: đàn cá, cua, sao biển, rong biển, sunbeam  |
| Motion          | Nhấn mạnh fish school swim, bubble rise, seaweed sway, crab walk, sunbeam shimmer    |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive      | Hero, project reef cards, sea garden và contact assets phải về 1 cột ở mobile nhỏ    |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt fish loop, bubble drift và seaweed sway  |
| Performance     | Giới hạn 20–30 bubble/fish particle visible, lazy load scene SVG, optimize bằng SVGO |

---

## 7. `storybook-royal-forest` — Storybook Royal Forest Portfolio

Portfolio như một tranh vẽ cổ tích ban đêm: bầu trời sao lấp lánh, sao băng rơi, ánh trăng phủ lên khu rừng, công chúa và hoàng tử đi dạo cạnh cỗ xe ngựa, cột đèn đường, đom đóm bay và hàng cây tối. Cổ điển, lãng mạn, fantasy, phù hợp cho portfolio nữ tính muốn có cảm giác kể chuyện, sang nhẹ và giàu hình ảnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Cảm xúc     | Cổ điển, tranh vẽ, mơ mộng, lãng mạn, magical ban đêm                    |
| Hình khối   | Moon frame, star trail, lantern post, carriage silhouette, scroll card   |
| Không gian  | Nền xanh đêm, ánh trăng, rừng tối, cột đèn đường, firefly layer          |
| Chuyển động | Sao băng rơi, sao twinkle, đom đóm drift, lantern glow, carriage roll    |
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

| Library / Tool  | Cách dùng trong theme                                                           |
| --------------- | ------------------------------------------------------------------------------- |
| Framer Motion   | Page turn, chapter reveal, carriage entrance, scroll card hover                 |
| Rive            | Princess/prince walk loop, carriage arrival, lantern click glow, letter unlock  |
| SVGator         | Shooting star path, firefly flight, lantern sway, moon glow pulse               |
| Lenis           | Smooth scroll như lật từng chương truyện trong đêm                              |
| CSS Keyframes   | Star twinkle, shooting-star, firefly-drift, lantern-glow, carriage wheel rotate |
| Realtime Colors | Tạo palette midnight-blue/moon-ivory/starlight-gold đủ contrast                 |
| Blush           | Illustration cổ tích kiểu tranh vẽ: royal couple, moonlit road, carriage        |

### Layout ideas

- **Hero:** Moonlit storybook scene, bầu trời sao, sao băng, đường rừng, cột đèn và cỗ xe ngựa.
- **About:** Scroll letter/profile parchment có wax seal, portrait dạng cameo frame.
- **Projects:** Mỗi project là một chapter card, có castle room hoặc quest icon riêng.
- **Skills:** Royal inventory: crown, key, potion, map, sword, wand, book, lantern.
- **Contact:** "Send a royal letter" CTA với envelope seal mở ra, lantern glow và firefly success.

### Animation rules

| Sự kiện         | Effect                                            | Thư viện           |
| --------------- | ------------------------------------------------- | ------------------ |
| Page load       | Night sky fade-in + moon glow + storybook open    | Framer Motion/CSS  |
| Star field      | Star twinkle nhiều nhịp, không đồng bộ            | CSS keyframes      |
| Shooting star   | Sao băng rơi chéo 6–9s loop, trail fade           | CSS/SVGator        |
| Fireflies       | Đom đóm drift organic quanh cây và cột đèn        | CSS/SVG animation  |
| Lantern idle    | Cột đèn glow pulse + sway rất nhẹ                 | CSS keyframes      |
| Carriage        | Cỗ xe ngựa vào cảnh, bánh xe rotate, shadow slide | Framer Motion/Rive |
| Royal couple    | Công chúa/hoàng tử walk loop, cape/dress sway     | Rive/SVGator       |
| Card hover      | Scroll card lift + star sparkle + moon rim light  | CSS transition     |
| Contact success | Wax seal pop + envelope open + firefly burst      | Rive/Framer Motion |

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

| File SVG tự tạo              | Nội dung cần vẽ                                          | Dùng cho               | Gợi ý kỹ thuật                                                              |
| ---------------------------- | -------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------- |
| `open-storybook-scene.svg`   | Sách mở dưới trăng, bầu trời sao, sao băng, forest path  | Hero/background        | Tách page, moon, stars, shooting star để animate riêng                      |
| `castle-silhouette-set.svg`  | Lâu đài đêm nhiều layer: tower, gate, window, flag       | Hero/section divider   | Tách window để twinkle, flag để flutter                                     |
| `royal-mascot-pair.svg`      | Công chúa và hoàng tử đi dạo dưới ánh trăng              | Background scene layer | Tách chân/tay/cape/dress để walk loop và sway; không đặt trong profile card |
| `enchanted-forest-path.svg`  | Đường rừng đêm, cây tối, cột đèn đường, đom đóm          | Background/transition  | Layer parallax, firefly symbols, lamp glow radialGradient                   |
| `crown-key-wand-set.svg`     | Crown, magic key, wand, potion, sword mini, shield       | Skills/badges          | Icon 24x24, stroke 2px, fill moon/royal colors                              |
| `scroll-letter-set.svg`      | Parchment scroll, envelope, wax seal, ribbon             | About/contact/cards    | Seal và ribbon là group riêng để pop/flutter                                |
| `sparkle-dust-particles.svg` | Star, shooting-star trail, glow dot, firefly, tiny heart | Particle layer         | Symbol reuse, opacity/scale/path random bằng CSS vars                       |
| `carriage-lantern-set.svg`   | Cỗ xe ngựa cổ điển, bánh xe, cột đèn, đèn lồng           | Decoration/contact     | Tách horse, wheel, lamp glow để animate riêng                               |
| `storybook-icons.svg`        | Castle, crown, book, rose, key, shield, letter, lantern  | Nav/badge icons        | currentColor + pastel fill, dùng chung trong UI                             |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Theme ID        | Ghi rõ `storybook-royal-forest` trong data/theme config và README của sub-project                   |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes                |
| Pages           | Có đủ hero storybook, chapter projects, royal inventory skills, royal letter contact                |
| Feature folders | Tách `storybook-scene`, `royal-mascot`, `chapter-projects`, `royal-inventory`                       |
| UI components   | Có `CrownButton`, `ScrollCard`, `RibbonTag`, `SealBadge` dùng lại trong các page                    |
| Asset folder    | Tạo `src/assets/storybook-royal-forest/` và đủ 9 SVG files trong bảng asset phía trên               |
| Asset usage     | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục                       |
| Profile card    | `storybook-card` ưu tiên avatar thật từ `docs/avatar.png`; royal couple chỉ là nền/decorative layer |
| Motion          | Nhấn mạnh star twinkle, shooting-star, firefly-drift, lantern-glow, carriage/walk loop              |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ                    |
| Responsive      | Hero, chapter cards, inventory và contact assets phải về 1 cột ở mobile nhỏ                         |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt animation lặp                                           |
| Performance     | SVG tối ưu, không render quá 20–30 particle visible, không nhúng text chính trong SVG               |

---

## 8. `strawberry-picnic-meadow` — Strawberry Picnic Meadow Portfolio

Portfolio như một buổi picnic dâu giữa đồng cỏ mùa xuân: khăn caro hồng, giỏ mây, bánh kem mini, lọ mứt, hoa cúc, ong nhỏ và bướm bay. Theme rực rỡ, ngọt, nữ tính, background là một meadow scene nhiều lớp để tạo cảm giác sống động ngay từ màn đầu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Ngọt ngào, tươi sáng, vui, handmade, picnic cute                      |
| Hình khối   | Gingham card, berry badge, basket frame, flower sticker, picnic label |
| Không gian  | Đồng cỏ xanh mint, khăn picnic caro hồng, dâu đỏ, hoa vàng, trời sáng |
| Chuyển động | Butterfly drift, bee loop, berry pop, gingham wave, flower sway       |
| Điểm nhấn   | Strawberry basket, picnic blanket, cake slice, jam jar, tiny bees     |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF6F7",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF5F8F",
    colorTextBase: "#3D2434",
    colorTextSecondary: "#8B6474",
    colorSuccess: "#77E6B6",
    colorWarning: "#FFD96F",
    colorInfo: "#9FD9FF",
    colorBorder: "#FFC8D8",
    borderRadius: 18,
    fontFamily: "'Fredoka', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --strawberry-red: #FF5F8F;
// --cream-pink: #FFF6F7;
// --meadow-mint: #77E6B6;
// --butter-yellow: #FFD96F;
// --sky-blue: #9FD9FF;
// --gingham-rose: #FF9FBE;
// --basket-tan: #D89A5B;
// --jam-purple: #B678FF;
// --leaf-green: #4FCB86;
```

### Typography

- **Heading:** `Fredoka` tròn, đáng yêu, hợp cảm giác berry sticker và picnic label.
- **Body:** `Nunito` mềm, dễ đọc, giữ độ thân thiện khi card có nhiều decoration.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                      |
| --------------- | -------------------------------------------------------------------------- |
| Framer Motion   | Card reveal như đặt lên khăn picnic, berry pop, section transition mềm     |
| Rive            | Strawberry mascot wave, bee hover reaction, jam jar success animation      |
| SVGator         | Butterfly path, gingham blanket wave, flower sway, honey sparkle timeline  |
| Lenis           | Smooth scroll qua ba trang about, projects, conclution với meadow parallax |
| CSS Keyframes   | Bee loop, flower sway, grass shimmer, tiny seed sparkle                    |
| Realtime Colors | Tạo palette strawberry/mint/yellow/sky hài hòa và không bị gắt             |
| Blush           | Illustration picnic girl hoặc berry picnic scene cho background phụ        |

### Layout ideas

- **About:** Full-bleed meadow background; profile đặt trên picnic blanket frame, avatar như polaroid kẹp bằng strawberry clip.
- **Projects:** Project cards như các hộp bánh trong giỏ picnic, mỗi card có berry sticker, ribbon, mini flower và patterned corner riêng.
- **Conclution:** Golden-hour picnic scene; reflection card như note viết tay đặt cạnh lọ mứt, có bướm bay qua và berry confetti khi kết thúc.

### Animation rules

| Sự kiện          | Effect                                            | Thư viện          |
| ---------------- | ------------------------------------------------- | ----------------- |
| Page load        | Meadow layer fade-in + blanket unfurl + berry pop | Framer Motion     |
| Background       | Grass shimmer, flower sway, cloud drift chậm      | CSS keyframes     |
| Butterfly        | Bay theo path cong, rotate nhẹ theo hướng         | SVGator/CSS       |
| Bee idle         | Loop quanh flower cluster, wobble nhẹ             | Rive/CSS          |
| Card hover       | Lift + sticker wiggle + berry sparkle burst       | Framer Motion     |
| Gingham pattern  | Wave rất nhẹ ở mép khăn, không làm text rung      | CSS/SVGator       |
| Section entrance | Slide-up + scale 0.96 đến 1, stagger theo card    | Framer Motion     |
| Conclution       | Berry confetti + handwritten underline draw       | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Strawberry picnic meadow shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── PicnicAboutPage.jsx             ← About trên meadow + blanket profile
│   ├── BasketProjectsPage.jsx          ← Projects dạng basket/treat cards
│   └── PicnicConclutionPage.jsx        ← Conclution note cạnh jam jar
├── features/
│   ├── picnic-meadow-scene/
│   │   ├── MeadowBackground.jsx
│   │   ├── GinghamBlanketLayer.jsx
│   │   ├── ButterflyDriftLayer.jsx
│   │   └── FlowerGrassSway.jsx
│   ├── strawberry-mascot/
│   │   ├── StrawberryRiveController.jsx
│   │   ├── BeeHoverReaction.jsx
│   │   └── BerryPopParticles.jsx
│   └── picnic-projects/
│       ├── BasketProjectGrid.jsx
│       ├── TreatProjectCard.jsx
│       └── BerryStickerFrame.jsx
├── components/
│   ├── layout/                         ← Picnic nav, meadow transition wrapper
│   └── ui/                             ← BerryButton, GinghamCard, JamTag, FlowerBadge
└── assets/strawberry-picnic-meadow/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                           |
| ---------------------------- | ----------------------------------------------------- | ---------------------- | -------------------------------------------------------- |
| `meadow-picnic-scene.svg`    | Đồng cỏ, khăn caro, giỏ mây, hoa, mây pastel          | Background chính       | Tách sky, grass, blanket, basket, flowers để parallax    |
| `strawberry-basket-set.svg`  | Giỏ dâu, quả dâu nhiều trạng thái, leaf, seed sparkle | Hero/card decoration   | Dâu là symbol reuse, seed tách để pop sparkle            |
| `gingham-pattern-frames.svg` | Khung caro hồng, ribbon, tape, corner patch           | Card frame             | Pattern fill nhẹ, border nhiều màu, không dùng flat card |
| `picnic-treat-icons.svg`     | Cake slice, macaron, jam jar, lemonade, sandwich cute | Project badges         | Icon 24/32px, fill pastel, stroke trắng mềm              |
| `bee-butterfly-set.svg`      | Ong nhỏ, bướm nhiều màu, trail dotted path            | Motion layer           | Tách cánh để flap, dùng path animation                   |
| `flower-grass-clusters.svg`  | Hoa cúc, tulip mini, cỏ, clover, leaf                 | Background/footer      | Stem group riêng để sway, opacity khác nhau              |
| `berry-confetti.svg`         | Dâu mini, heart seed, star, dot, ribbon bit           | Particle layer         | Random bằng CSS vars, giới hạn số lượng visible          |
| `picnic-note-labels.svg`     | Note viết tay, price tag, sticker label, paper tape   | About/conclution cards | Paper grain nhẹ, tape group riêng để wiggle              |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `strawberry-picnic-meadow` trong data/theme config và README của sub-project  |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Background meadow/blanket/basket là lớp visual chính, không chỉ là decoration nhỏ    |
| Feature folders     | Tách `picnic-meadow-scene`, `strawberry-mascot`, `picnic-projects`                   |
| UI components       | Có `BerryButton`, `GinghamCard`, `JamTag`, `FlowerBadge` dùng lại trong các page     |
| Card decoration     | Project/about cards phải có border caro, sticker, flower/berry accent và nhiều màu   |
| Asset folder        | Tạo `src/assets/strawberry-picnic-meadow/` và đủ 8 SVG files trong bảng asset        |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh butterfly drift, bee loop, berry pop, flower sway, gingham wave            |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ meadow + basket chính, giảm bướm/ong/confetti và card về 1 cột            |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt loop bướm, ong, cỏ và confetti           |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 9. `pastel-magic-boutique` — Pastel Magic Boutique Portfolio

Portfolio như một boutique phép thuật pastel: kệ potion hồng tím, gương trái tim, hộp ribbon, charm lấp lánh và mèo/mascot tiệm nhỏ. Background là storefront/inside-shop scene nhiều lớp, tạo cảm giác bước vào một cửa hàng cute, rực rỡ nhưng vẫn mềm mắt.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Magical, nữ tính, glossy, đáng yêu, boutique fantasy                 |
| Hình khối   | Heart mirror card, potion bottle badge, ribbon frame, charm sticker  |
| Không gian  | Boutique pastel với kệ potion, rèm, gương, đèn sao, hộp quà          |
| Chuyển động | Potion bubble, mirror shimmer, ribbon flutter, charm twinkle         |
| Điểm nhấn   | Potion shelf, heart mirror, magic wand, ribbon box, tiny shop mascot |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF4FF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#D86BFF",
    colorTextBase: "#352246",
    colorTextSecondary: "#80618E",
    colorSuccess: "#79F0D3",
    colorWarning: "#FFE17F",
    colorInfo: "#9CCBFF",
    colorBorder: "#E8C7FF",
    borderRadius: 20,
    fontFamily: "'Baloo 2', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --boutique-pink: #FFF4FF;
// --magic-purple: #D86BFF;
// --ribbon-rose: #FF8CCF;
// --potion-mint: #79F0D3;
// --star-gold: #FFE17F;
// --mirror-blue: #9CCBFF;
// --velvet-violet: #80618E;
// --pearl-white: #FFFFFF;
// --charm-coral: #FF9B9B;
```

### Typography

- **Heading:** `Baloo 2` tròn, vui, tạo cảm giác boutique sign cute.
- **Body:** `Nunito` dễ đọc, giảm độ fantasy để nội dung portfolio vẫn rõ.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Boutique door open, shelf reveal, card hover sparkle, route transition    |
| Rive            | Potion bottle reaction, mirror wink, shop mascot idle/interact/success    |
| SVGator         | Bubble rise trong potion, ribbon flutter, mirror shimmer, star charm path |
| Lenis           | Smooth scroll qua 3 trang như đi qua các quầy trong boutique              |
| CSS Keyframes   | Charm twinkle, curtain sway, bottle glow, ribbon float                    |
| Realtime Colors | Cân bằng tím/hồng/mint/vàng để rực rỡ nhưng không quá neon                |
| Blush           | Illustration magical boutique girl hoặc shop interior cho scene phụ       |

### Layout ideas

- **About:** Profile nằm trong heart mirror lớn; background là boutique shelf với potion bottle và ribbon box ở hai bên.
- **Projects:** Project cards như product display shelf, mỗi card có potion label, charm icon, ribbon corner và sparkle border khác màu.
- **Conclution:** Checkout counter hoặc gift wrapping desk; reflection note như receipt xinh, CTA là charm seal đóng dấu.

### Animation rules

| Sự kiện          | Effect                                             | Thư viện           |
| ---------------- | -------------------------------------------------- | ------------------ |
| Page load        | Boutique door open + shelf lights bật theo stagger | Framer Motion      |
| Potion idle      | Bubble rise trong chai, glow pulse nhẹ             | SVGator/CSS        |
| Mirror shimmer   | Highlight sweep ngang qua gương 5–8s loop          | CSS keyframes      |
| Ribbon           | Flutter nhẹ ở góc card và hộp quà                  | CSS/SVGator        |
| Charm sparkle    | Twinkle không đồng bộ quanh card và nav            | CSS keyframes      |
| Card hover       | Lift + potion label pop + ribbon curl              | Framer Motion      |
| Section entrance | Shelf items slide-in theo tầng, opacity 0 đến 1    | Framer Motion      |
| Conclution       | Gift wrap ribbon tie + star dust burst             | Rive/Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Pastel magic boutique shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── BoutiqueAboutPage.jsx           ← About trong heart mirror + shelf bg
│   ├── PotionProjectsPage.jsx          ← Projects dạng product shelf cards
│   └── GiftWrapConclutionPage.jsx      ← Conclution checkout/gift wrap scene
├── features/
│   ├── boutique-scene/
│   │   ├── BoutiqueInteriorBackground.jsx
│   │   ├── PotionShelfLayer.jsx
│   │   ├── HeartMirrorShimmer.jsx
│   │   └── RibbonCurtainLayer.jsx
│   ├── magic-mascot/
│   │   ├── BoutiqueMascotRive.jsx
│   │   ├── PotionBubbleReaction.jsx
│   │   └── CharmSparkleBurst.jsx
│   └── potion-projects/
│       ├── ProductShelfGrid.jsx
│       ├── PotionProjectCard.jsx
│       └── RibbonLabelHover.jsx
├── components/
│   ├── layout/                         ← Boutique nav, shimmer transition wrapper
│   └── ui/                             ← PotionButton, MirrorCard, RibbonTag, CharmBadge
└── assets/pastel-magic-boutique/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo                | Nội dung cần vẽ                                       | Dùng cho         | Gợi ý kỹ thuật                                         |
| ------------------------------ | ----------------------------------------------------- | ---------------- | ------------------------------------------------------ |
| `boutique-interior-scene.svg`  | Storefront hoặc interior, kệ potion, rèm, counter     | Background chính | Tách wall, shelf, lights, counter để parallax          |
| `potion-bottle-collection.svg` | Potion nhiều hình: heart, star, moon, bow bottle      | Cards/decoration | Liquid/bubble group riêng để animate opacity/translate |
| `heart-mirror-frame.svg`       | Gương trái tim, pearl frame, shine streak             | About hero       | Shine mask riêng, frame nhiều màu không đơn điệu       |
| `ribbon-bow-set.svg`           | Bow, ribbon strip, gift wrap, curl ribbon             | Card frame/CTA   | Tách tail để flutter, dùng gradient hồng/tím           |
| `magic-charm-icons.svg`        | Wand, star charm, moon charm, key, compact mirror     | Nav/badges       | Icon 24x24, currentColor + pastel fill                 |
| `sparkle-star-dust.svg`        | Star, diamond, dot, heart sparkle, glow ring          | Particle layer   | Symbol reuse, random delay, giới hạn visible           |
| `boutique-labels.svg`          | Price label, product tag, seal, shelf nameplate       | Project cards    | Paper + gold trim + small icon accent                  |
| `gift-wrap-counter.svg`        | Hộp quà, wrapping paper, scissors cute, checkout tray | Conclution       | Tách ribbon và seal để animate success                 |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `pastel-magic-boutique` trong data/theme config và README của sub-project     |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Boutique interior/shelf/mirror phải là visual layer chính xuyên suốt app             |
| Feature folders     | Tách `boutique-scene`, `magic-mascot`, `potion-projects`                             |
| UI components       | Có `PotionButton`, `MirrorCard`, `RibbonTag`, `CharmBadge` dùng lại trong các page   |
| Card decoration     | Cards phải có ribbon, charm, potion label, sparkle border và palette nhiều điểm nhấn |
| Asset folder        | Tạo `src/assets/pastel-magic-boutique/` và đủ 8 SVG files trong bảng asset           |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh potion bubbles, mirror shimmer, ribbon flutter, charm twinkle              |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ mirror/shelf chính, giảm charm/sparkle particle và card về 1 cột          |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt sparkle, bubble loop và shimmer sweep    |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 10. `dreamy-flower-train` — Dreamy Flower Train Portfolio

Portfolio như một chuyến tàu hoa chạy qua bầu trời pastel: toa tàu phủ hoa, mây bông, đường ray cầu vồng, smoke là cánh hoa và những trạm dừng nhỏ cho từng phần nội dung. Theme có cảm giác hành trình, nữ tính, giàu storytelling và animation mượt.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Mơ mộng, chuyển động, hopeful, thơ, dịu nhưng rực rỡ                 |
| Hình khối   | Train ticket card, station sign, flower window, rainbow rail badge   |
| Không gian  | Sky garden pastel, tàu hoa foreground, mây, cầu vồng, trạm nhỏ       |
| Chuyển động | Train glide, flower smoke, cloud parallax, rail sparkle, ticket flip |
| Điểm nhấn   | Flower train, cloud station, rainbow rail, petal smoke, tiny luggage |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F4F8FF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF86B7",
    colorTextBase: "#26324F",
    colorTextSecondary: "#6C7898",
    colorSuccess: "#8CE7C1",
    colorWarning: "#FFE27A",
    colorInfo: "#8FCBFF",
    colorBorder: "#CFE2FF",
    borderRadius: 18,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --sky-porcelain: #F4F8FF;
// --train-rose: #FF86B7;
// --cloud-blue: #8FCBFF;
// --garden-mint: #8CE7C1;
// --rail-gold: #FFE27A;
// --luggage-lilac: #C8A8FF;
// --petal-coral: #FFAD9F;
// --ink-indigo: #26324F;
// --station-border: #CFE2FF;
```

### Typography

- **Heading:** `Quicksand` mềm, tròn, hợp mây và flower train.
- **Body:** `Nunito` rõ, cân bằng phần storytelling và project detail.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Train entrance, ticket card flip, station reveal, page transition         |
| Rive            | Train conductor mascot, whistle reaction, luggage success animation       |
| SVGator         | Train glide along rail, flower smoke path, cloud drift, rainbow rail draw |
| Lenis           | Smooth scroll như đi qua từng station của hành trình                      |
| CSS Keyframes   | Cloud parallax, petal smoke float, rail sparkle, wheel rotate             |
| Realtime Colors | Tạo palette rose/sky/mint/gold có độ tươi nhưng đọc rõ                    |
| Blush           | Illustration train girl hoặc sky station cho hero/background phụ          |

### Layout ideas

- **About:** Cloud station đầu tiên; profile như train ticket hoặc window cabin, nền có flower train chạy ngang phía dưới.
- **Projects:** Mỗi project là một toa tàu hoặc station stop, card có ticket stamp, flower window, ribbon rail và icon hành lý riêng.
- **Conclution:** Trạm cuối lúc hoàng hôn pastel; reflection như arrival board, flower smoke chuyển thành heart/sparkle trail.

### Animation rules

| Sự kiện          | Effect                                            | Thư viện          |
| ---------------- | ------------------------------------------------- | ----------------- |
| Page load        | Sky fade + rail draw + train glide vào foreground | Framer/SVGator    |
| Train idle       | TranslateX rất nhẹ, wheel rotate, body bob 2–4px  | CSS/Rive          |
| Flower smoke     | Petal cloud drift từ ống khói, fade out mềm       | CSS/SVGator       |
| Cloud background | Parallax nhiều lớp, drift 18–30s loop             | CSS keyframes     |
| Card hover       | Ticket flip nhỏ + stamp pop + rail sparkle        | Framer Motion     |
| Section entrance | Station sign drop-in + card stagger               | Framer Motion     |
| Conclution       | Arrival board flip + petal trail sweep            | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Dreamy flower train shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── CloudStationAboutPage.jsx       ← About station + ticket profile
│   ├── TrainCarProjectsPage.jsx        ← Projects dạng train cars/stations
│   └── ArrivalConclutionPage.jsx       ← Conclution final station
├── features/
│   ├── flower-train-scene/
│   │   ├── SkyGardenBackground.jsx
│   │   ├── FlowerTrainLayer.jsx
│   │   ├── RainbowRailDraw.jsx
│   │   └── PetalSmokeLayer.jsx
│   ├── train-mascot/
│   │   ├── ConductorMascotRive.jsx
│   │   ├── WhistleReaction.jsx
│   │   └── LuggageSuccess.jsx
│   └── station-projects/
│       ├── StationProjectGrid.jsx
│       ├── TrainCarProjectCard.jsx
│       └── TicketStampHover.jsx
├── components/
│   ├── layout/                         ← Train nav, station transition wrapper
│   └── ui/                             ← TicketButton, StationCard, RailTag, FlowerWindowBadge
└── assets/dreamy-flower-train/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                     | Dùng cho         | Gợi ý kỹ thuật                                    |
| --------------------------- | --------------------------------------------------- | ---------------- | ------------------------------------------------- |
| `sky-garden-panorama.svg`   | Nền trời pastel, mây, vườn hoa trên mây, sun glow   | Background chính | Layer xa/gần để parallax, opacity mềm             |
| `flower-train-set.svg`      | Đầu tàu, toa hoa, bánh xe, cửa sổ, conductor mascot | Hero/background  | Tách wheel, smoke pipe, car body để animate riêng |
| `rainbow-rail-path.svg`     | Đường ray cầu vồng, sleepers, sparkle, station path | Scene connection | Stroke-dasharray cho rail draw                    |
| `cloud-station-set.svg`     | Trạm mây, signboard, bench, clock, ticket booth     | About/conclution | Sign group riêng để drop-in                       |
| `train-ticket-frames.svg`   | Ticket card, stamp, punched corner, ribbon strip    | Project cards    | Multi-color edge, stamp pop hover                 |
| `petal-smoke-particles.svg` | Petal smoke, flower puff, tiny heart, sparkle trail | Particle layer   | Random delay/scale, giới hạn visible              |
| `luggage-flower-icons.svg`  | Suitcase, flower bag, camera, ticket, map, bow      | Badges/nav       | Icon 24x24, currentColor + pastel fill            |
| `arrival-board-labels.svg`  | Arrival board, station labels, flip panels          | Conclution       | Panel tách riêng để flip animation                |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                   |
| ------------------- | ------------------------------------------------------------------------------------- |
| Theme ID            | Ghi rõ `dreamy-flower-train` trong data/theme config và README của sub-project        |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes  |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                             |
| Background priority | Flower train, sky garden và rail path là background scene chính của toàn app          |
| Feature folders     | Tách `flower-train-scene`, `train-mascot`, `station-projects`                         |
| UI components       | Có `TicketButton`, `StationCard`, `RailTag`, `FlowerWindowBadge` dùng lại             |
| Card decoration     | Cards phải có ticket stamp, rail border, flower window, luggage icon và màu đa lớp    |
| Asset folder        | Tạo `src/assets/dreamy-flower-train/` và đủ 8 SVG files trong bảng asset              |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục         |
| Motion              | Nhấn mạnh train glide, wheel rotate, flower smoke, cloud parallax, rail sparkle       |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ      |
| Responsive          | Mobile giữ train và station chính, giảm smoke/cloud particles và card về 1 cột        |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt train loop, smoke drift và cloud parallax |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO      |

---

## 11. `mermaid-pearl-lagoon` — Mermaid Pearl Lagoon Portfolio

Portfolio như một lagoon ngọc trai dành cho nàng tiên cá: nước xanh ngọc, san hô hồng tím, vỏ sò mở, pearl shimmer, sao biển và ánh caustics trên nền. Theme fantasy nữ tính, sáng, lấp lánh, dùng background lagoon làm lớp chính để tạo chiều sâu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Lấp lánh, mềm mại, nữ tính, ocean fantasy, sang nhẹ                     |
| Hình khối   | Shell card, pearl badge, coral frame, scale pattern, wave ribbon        |
| Không gian  | Lagoon xanh ngọc, san hô hồng tím, vỏ sò, pearl, light caustics         |
| Chuyển động | Pearl shimmer, shell open, water caustics, seahorse drift, coral sway   |
| Điểm nhấn   | Pearl shell, mermaid silhouette accent, coral arch, starfish, sea glass |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F0FCFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF83C7",
    colorTextBase: "#18364A",
    colorTextSecondary: "#5B7E90",
    colorSuccess: "#66E7D2",
    colorWarning: "#FFE088",
    colorInfo: "#73D4FF",
    colorBorder: "#AFEFFF",
    borderRadius: 22,
    fontFamily: "'DM Sans', 'Quicksand', sans-serif",
  },
};

// CSS Variables
// --lagoon-mist: #F0FCFF;
// --pearl-pink: #FF83C7;
// --aqua-glow: #73D4FF;
// --seafoam-mint: #66E7D2;
// --shell-ivory: #FFFFFF;
// --coral-lilac: #C9A7FF;
// --sun-pearl: #FFE088;
// --deep-teal: #18364A;
// --sea-glass-border: #AFEFFF;
```

### Typography

- **Heading:** `Quicksand` tạo cảm giác mềm, tròn, phù hợp pearl/shell.
- **Body:** `DM Sans` hiện đại, rõ ràng trên background có nhiều shimmer.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Shell card open, pearl reveal, coral frame entrance, route transition |
| Rive            | Pearl shell interaction, seahorse mascot, lagoon success bubble       |
| SVGator         | Water caustics sweep, shell open timeline, pearl shimmer, coral sway  |
| Lenis           | Smooth scroll qua 3 trang với lagoon depth parallax                   |
| CSS Keyframes   | Bubble rise, seaweed sway, pearl glow, caustic shimmer                |
| Realtime Colors | Cân palette aqua/pink/lilac/gold để vừa sáng vừa đủ contrast          |
| Blush           | Illustration mermaid lagoon hoặc pearl girl cho hero/about accent     |

### Layout ideas

- **About:** About nằm trong shell mở hoặc pearl frame; background lagoon có coral arch và sunbeam caustics.
- **Projects:** Project cards như pearl specimens trong reef gallery, mỗi card có coral corner, scale pattern, shell tag và starfish icon riêng.
- **Conclution:** Lagoon reflection scene; pearl rơi vào nước tạo ripple, lời kết nằm trên sea-glass note nhiều lớp màu.

### Animation rules

| Sự kiện           | Effect                                                | Thư viện          |
| ----------------- | ----------------------------------------------------- | ----------------- |
| Page load         | Lagoon gradient fade + coral grow + shell open reveal | Framer/SVGator    |
| Water caustics    | Light sweep rất chậm, opacity 0.25–0.55               | CSS/SVGator       |
| Pearl idle        | Glow pulse + small shimmer star                       | CSS keyframes     |
| Shell interaction | Shell halves rotate open, pearl scale 0.8 đến 1       | Rive/Framer       |
| Coral background  | Gentle sway 5–9s loop, phase lệch nhau                | CSS keyframes     |
| Card hover        | Lift + bubble burst + coral rim light                 | Framer Motion     |
| Section entrance  | Fade + y 24 đến 0 + pearl stagger                     | Framer Motion     |
| Conclution        | Pearl drop + ripple ring + shimmer trail              | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Mermaid pearl lagoon shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── PearlLagoonAboutPage.jsx        ← About shell/pearl profile
│   ├── ReefPearlProjectsPage.jsx       ← Projects dạng pearl reef cards
│   └── LagoonConclutionPage.jsx        ← Conclution pearl ripple scene
├── features/
│   ├── pearl-lagoon-scene/
│   │   ├── LagoonBackground.jsx
│   │   ├── CoralArchLayer.jsx
│   │   ├── WaterCausticsOverlay.jsx
│   │   └── BubblePearlLayer.jsx
│   ├── lagoon-mascot/
│   │   ├── SeahorseMascotRive.jsx
│   │   ├── ShellOpenReaction.jsx
│   │   └── PearlDropSuccess.jsx
│   └── reef-projects/
│       ├── PearlProjectGrid.jsx
│       ├── ShellProjectCard.jsx
│       └── CoralFrameHover.jsx
├── components/
│   ├── layout/                         ← Lagoon nav, water transition wrapper
│   └── ui/                             ← PearlButton, ShellCard, CoralTag, SeaGlassBadge
└── assets/mermaid-pearl-lagoon/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                    | Dùng cho              | Gợi ý kỹ thuật                                    |
| ----------------------------- | -------------------------------------------------- | --------------------- | ------------------------------------------------- |
| `pearl-lagoon-background.svg` | Lagoon, nước xanh ngọc, đá, sand bed, sunbeam      | Background chính      | Tách water, caustics, sand, rocks để parallax     |
| `coral-shell-arch.svg`        | Coral hồng tím, shell arch, seaweed, starfish      | Hero/section frame    | Coral branch group riêng để sway                  |
| `pearl-shell-set.svg`         | Shell mở/đóng, pearl, shimmer star, shell shadow   | About/CTA             | Shell halves tách riêng, pearl radialGradient     |
| `mermaid-accent-set.svg`      | Mermaid silhouette mềm, tail scale, hair ribbon    | Background accent     | Chỉ dùng decorative layer, không thay avatar thật |
| `sea-glass-cards.svg`         | Sea glass note, translucent frame, wave ribbon     | Cards                 | Border nhiều màu, shimmer overlay nhẹ             |
| `lagoon-creature-icons.svg`   | Seahorse, fish, turtle mini, crab, starfish, shell | Nav/badges            | Icon 24x24, currentColor + aqua/pink fill         |
| `bubble-pearl-particles.svg`  | Bubble, pearl dot, sparkle, ripple ring            | Particle layer        | Random delay, fade top, giới hạn 20–30 visible    |
| `scale-pattern-ribbons.svg`   | Mermaid scale pattern, wave ribbon, pearl divider  | Decoration/card frame | Pattern opacity thấp, không làm text khó đọc      |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `mermaid-pearl-lagoon` trong data/theme config và README của sub-project      |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Lagoon, coral arch, caustics và pearl shell là visual layer chính                    |
| Feature folders     | Tách `pearl-lagoon-scene`, `lagoon-mascot`, `reef-projects`                          |
| UI components       | Có `PearlButton`, `ShellCard`, `CoralTag`, `SeaGlassBadge` dùng lại trong các page   |
| Card decoration     | Cards phải có coral frame, pearl badge, shell tag, wave/scale pattern đa màu         |
| Asset folder        | Tạo `src/assets/mermaid-pearl-lagoon/` và đủ 8 SVG files trong bảng asset            |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh pearl shimmer, shell open, water caustics, coral sway, bubble rise         |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ shell/lagoon chính, giảm caustics/bubble/coral density và card về 1 cột   |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt caustics, bubble loop và coral sway      |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 12. `kawaii-stationery-room` — Kawaii Stationery Room Portfolio

Portfolio như một căn phòng stationery cute: bàn học pastel, sticker sheet, bút gel, washi tape, sticky note, kẹp giấy trái tim và ánh sáng cửa sổ mềm. Theme thân thiện, nữ tính, giàu chi tiết handmade, dùng background room/desk làm lớp chính thay vì chỉ trang trí ở góc.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Cute, chăm chỉ, gọn gàng, handmade, học tập sáng tạo                   |
| Hình khối   | Notebook card, sticker badge, washi frame, memo tab, gel pen underline |
| Không gian  | Bàn stationery pastel, cửa sổ, sticker board, notebook, hộp bút        |
| Chuyển động | Sticker peel, pen doodle draw, paper float, washi curl, desk sparkle   |
| Điểm nhấn   | Sticker sheet, gel pen, sticky notes, washi tape, heart paperclip      |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF9FD",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF75B8",
    colorTextBase: "#30283F",
    colorTextSecondary: "#756981",
    colorSuccess: "#78E8C6",
    colorWarning: "#FFE06F",
    colorInfo: "#91D7FF",
    colorBorder: "#FFD1EA",
    borderRadius: 16,
    fontFamily: "'Nunito', 'Patrick Hand', sans-serif",
  },
};

// CSS Variables
// --stationery-blush: #FFF9FD;
// --marker-pink: #FF75B8;
// --mint-note: #78E8C6;
// --sunny-sticky: #FFE06F;
// --pen-blue: #91D7FF;
// --lavender-paper: #C9B3FF;
// --coral-sticker: #FF9A9A;
// --ink-soft: #30283F;
// --washi-border: #FFD1EA;
```

### Typography

- **Heading:** `Patrick Hand` dùng nhẹ cho accent/label để có cảm giác note viết tay.
- **Body:** `Nunito` là font chính để portfolio vẫn rõ, ổn định và dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Sticker peel, note reveal, project card drag-like hover, route transition |
| Rive            | Gel pen doodle interaction, sticker mascot, paperclip success animation   |
| SVGator         | Pen stroke draw, washi curl, paper float path, sticker peel timeline      |
| Lenis           | Smooth scroll như lướt qua desk board và notebook pages                   |
| CSS Keyframes   | Paper float, desk sparkle, tape flutter, pencil wiggle                    |
| Realtime Colors | Kiểm palette pink/mint/yellow/blue/lavender rực rỡ nhưng đủ contrast      |
| Blush           | Illustration stationery room, study desk, cute note character             |

### Layout ideas

- **About:** Background là desk room; profile như notebook mở, avatar dán bằng washi tape và sticker corner nhiều màu.
- **Projects:** Project cards như sticker sheet hoặc assignment memo, mỗi card có tab, clip, doodle icon, washi strip và patterned border khác nhau.
- **Conclution:** Reflection như trang cuối notebook; pen tự vẽ underline, sticker peel hiện quote/kết luận và paperclip success.

### Animation rules

| Sự kiện          | Effect                                               | Thư viện           |
| ---------------- | ---------------------------------------------------- | ------------------ |
| Page load        | Desk background fade + notebook open + stickers pop  | Framer Motion      |
| Sticker peel     | Corner rotate + shadow change + small elastic settle | Framer/SVGator     |
| Pen doodle       | Stroke-dashoffset draw line, heart, star, underline  | SVG/CSS/Rive       |
| Paper idle       | Sticky notes float 2–4px, rotate rất nhẹ             | CSS keyframes      |
| Washi tape       | Tape tail curl/flutter ở card corners                | CSS/SVGator        |
| Card hover       | Lift + doodle sparkle + paperclip wiggle             | Framer Motion      |
| Section entrance | Notes pop in theo grid, stagger 0.06–0.1s            | Framer Motion      |
| Conclution       | Pen underline + sticker reveal + confetti dot burst  | Rive/Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Kawaii stationery room shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── StationeryAboutPage.jsx         ← About notebook trên desk background
│   ├── StickerProjectsPage.jsx         ← Projects dạng sticker/memo cards
│   └── NotebookConclutionPage.jsx      ← Conclution final notebook page
├── features/
│   ├── stationery-room-scene/
│   │   ├── DeskRoomBackground.jsx
│   │   ├── StickerBoardLayer.jsx
│   │   ├── WashiTapeLayer.jsx
│   │   └── PaperFloatLayer.jsx
│   ├── stationery-mascot/
│   │   ├── GelPenRiveController.jsx
│   │   ├── StickerPeelReaction.jsx
│   │   └── PaperclipSuccess.jsx
│   └── sticker-projects/
│       ├── StickerProjectGrid.jsx
│       ├── MemoProjectCard.jsx
│       └── DoodleFrameHover.jsx
├── components/
│   ├── layout/                         ← Stationery nav, notebook transition wrapper
│   └── ui/                             ← GelPenButton, NotebookCard, WashiTag, StickerBadge
└── assets/kawaii-stationery-room/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                      | Dùng cho         | Gợi ý kỹ thuật                                          |
| ---------------------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------- |
| `stationery-desk-room.svg`   | Bàn học, cửa sổ, notebook, hộp bút, sticker board    | Background chính | Tách wall, desk, window light, notebook để parallax     |
| `sticker-sheet-set.svg`      | Sticker heart, star, flower, bow, cat face, label    | Cards/particles  | Sticker shadow riêng, corner peel group                 |
| `washi-tape-frames.svg`      | Washi tape nhiều pattern: caro, heart, cloud, flower | Card frame       | Pattern nhiều màu, tape tail tách để flutter            |
| `gel-pen-doodle-set.svg`     | Gel pen, underline, heart doodle, star doodle        | About/conclution | Stroke paths cho draw animation                         |
| `sticky-note-memo-cards.svg` | Sticky note, notebook page, memo tab, index label    | Project cards    | Paper grain nhẹ, tab group nhiều màu                    |
| `paperclip-charm-icons.svg`  | Heart clip, push pin, binder clip, charm, eraser     | Badges/nav       | Icon 24x24, currentColor + pastel fill                  |
| `desk-sparkle-particles.svg` | Tiny sparkle, dot, paper fleck, mini sticker bit     | Particle layer   | Random delay/position, giới hạn visible                 |
| `stationery-tool-icons.svg`  | Pen, pencil, scissors, ruler, glue, notebook, stamp  | UI icons         | Stroke 2px, fill pastel, dùng chung trong buttons/cards |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                   |
| ------------------- | ------------------------------------------------------------------------------------- |
| Theme ID            | Ghi rõ `kawaii-stationery-room` trong data/theme config và README của sub-project     |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes  |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                             |
| Background priority | Desk room/sticker board/notebook là lớp background chính, luôn thấy rõ personality    |
| Feature folders     | Tách `stationery-room-scene`, `stationery-mascot`, `sticker-projects`                 |
| UI components       | Có `GelPenButton`, `NotebookCard`, `WashiTag`, `StickerBadge` dùng lại trong các page |
| Card decoration     | Cards phải có washi tape, sticker, memo tab, doodle border và màu accent khác nhau    |
| Asset folder        | Tạo `src/assets/kawaii-stationery-room/` và đủ 8 SVG files trong bảng asset           |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục         |
| Motion              | Nhấn mạnh sticker peel, pen doodle draw, paper float, washi curl, paperclip wiggle    |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ      |
| Responsive          | Mobile giữ notebook/sticker board chính, giảm paper/sparkle density và card về 1 cột  |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt paper float, sparkle và sticker loop      |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO      |

---

## 13. `strawberry-picnic-meadow` — Strawberry Picnic Meadow Portfolio

Portfolio như một buổi picnic dâu giữa đồng cỏ mùa xuân: khăn caro hồng, giỏ mây, bánh kem mini, lọ mứt, hoa cúc, ong nhỏ và bướm bay. Theme rực rỡ, ngọt, nữ tính, background là một meadow scene nhiều lớp để tạo cảm giác sống động ngay từ màn đầu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Ngọt ngào, tươi sáng, vui, handmade, picnic cute                      |
| Hình khối   | Gingham card, berry badge, basket frame, flower sticker, picnic label |
| Không gian  | Đồng cỏ xanh mint, khăn picnic caro hồng, dâu đỏ, hoa vàng, trời sáng |
| Chuyển động | Butterfly drift, bee loop, berry pop, gingham wave, flower sway       |
| Điểm nhấn   | Strawberry basket, picnic blanket, cake slice, jam jar, tiny bees     |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF6F7",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF5F8F",
    colorTextBase: "#3D2434",
    colorTextSecondary: "#8B6474",
    colorSuccess: "#77E6B6",
    colorWarning: "#FFD96F",
    colorInfo: "#9FD9FF",
    colorBorder: "#FFC8D8",
    borderRadius: 18,
    fontFamily: "'Fredoka', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --strawberry-red: #FF5F8F;
// --cream-pink: #FFF6F7;
// --meadow-mint: #77E6B6;
// --butter-yellow: #FFD96F;
// --sky-blue: #9FD9FF;
// --gingham-rose: #FF9FBE;
// --basket-tan: #D89A5B;
// --jam-purple: #B678FF;
// --leaf-green: #4FCB86;
```

### Typography

- **Heading:** `Fredoka` tròn, đáng yêu, hợp cảm giác berry sticker và picnic label.
- **Body:** `Nunito` mềm, dễ đọc, giữ độ thân thiện khi card có nhiều decoration.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                      |
| --------------- | -------------------------------------------------------------------------- |
| Framer Motion   | Card reveal như đặt lên khăn picnic, berry pop, section transition mềm     |
| Rive            | Strawberry mascot wave, bee hover reaction, jam jar success animation      |
| SVGator         | Butterfly path, gingham blanket wave, flower sway, honey sparkle timeline  |
| Lenis           | Smooth scroll qua ba trang about, projects, conclution với meadow parallax |
| CSS Keyframes   | Bee loop, flower sway, grass shimmer, tiny seed sparkle                    |
| Realtime Colors | Tạo palette strawberry/mint/yellow/sky hài hòa và không bị gắt             |
| Blush           | Illustration picnic girl hoặc berry picnic scene cho background phụ        |

### Layout ideas

- **About:** Full-bleed meadow background; profile đặt trên picnic blanket frame, avatar như polaroid kẹp bằng strawberry clip.
- **Projects:** Project cards như các hộp bánh trong giỏ picnic, mỗi card có berry sticker, ribbon, mini flower và patterned corner riêng.
- **Conclution:** Golden-hour picnic scene; reflection card như note viết tay đặt cạnh lọ mứt, có bướm bay qua và berry confetti khi kết thúc.

### Animation rules

| Sự kiện          | Effect                                            | Thư viện          |
| ---------------- | ------------------------------------------------- | ----------------- |
| Page load        | Meadow layer fade-in + blanket unfurl + berry pop | Framer Motion     |
| Background       | Grass shimmer, flower sway, cloud drift chậm      | CSS keyframes     |
| Butterfly        | Bay theo path cong, rotate nhẹ theo hướng         | SVGator/CSS       |
| Bee idle         | Loop quanh flower cluster, wobble nhẹ             | Rive/CSS          |
| Card hover       | Lift + sticker wiggle + berry sparkle burst       | Framer Motion     |
| Gingham pattern  | Wave rất nhẹ ở mép khăn, không làm text rung      | CSS/SVGator       |
| Section entrance | Slide-up + scale 0.96 đến 1, stagger theo card    | Framer Motion     |
| Conclution       | Berry confetti + handwritten underline draw       | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Strawberry picnic meadow shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── PicnicAboutPage.jsx             ← About trên meadow + blanket profile
│   ├── BasketProjectsPage.jsx          ← Projects dạng basket/treat cards
│   └── PicnicConclutionPage.jsx        ← Conclution note cạnh jam jar
├── features/
│   ├── picnic-meadow-scene/
│   │   ├── MeadowBackground.jsx
│   │   ├── GinghamBlanketLayer.jsx
│   │   ├── ButterflyDriftLayer.jsx
│   │   └── FlowerGrassSway.jsx
│   ├── strawberry-mascot/
│   │   ├── StrawberryRiveController.jsx
│   │   ├── BeeHoverReaction.jsx
│   │   └── BerryPopParticles.jsx
│   └── picnic-projects/
│       ├── BasketProjectGrid.jsx
│       ├── TreatProjectCard.jsx
│       └── BerryStickerFrame.jsx
├── components/
│   ├── layout/                         ← Picnic nav, meadow transition wrapper
│   └── ui/                             ← BerryButton, GinghamCard, JamTag, FlowerBadge
└── assets/strawberry-picnic-meadow/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                           |
| ---------------------------- | ----------------------------------------------------- | ---------------------- | -------------------------------------------------------- |
| `meadow-picnic-scene.svg`    | Đồng cỏ, khăn caro, giỏ mây, hoa, mây pastel          | Background chính       | Tách sky, grass, blanket, basket, flowers để parallax    |
| `strawberry-basket-set.svg`  | Giỏ dâu, quả dâu nhiều trạng thái, leaf, seed sparkle | Hero/card decoration   | Dâu là symbol reuse, seed tách để pop sparkle            |
| `gingham-pattern-frames.svg` | Khung caro hồng, ribbon, tape, corner patch           | Card frame             | Pattern fill nhẹ, border nhiều màu, không dùng flat card |
| `picnic-treat-icons.svg`     | Cake slice, macaron, jam jar, lemonade, sandwich cute | Project badges         | Icon 24/32px, fill pastel, stroke trắng mềm              |
| `bee-butterfly-set.svg`      | Ong nhỏ, bướm nhiều màu, trail dotted path            | Motion layer           | Tách cánh để flap, dùng path animation                   |
| `flower-grass-clusters.svg`  | Hoa cúc, tulip mini, cỏ, clover, leaf                 | Background/footer      | Stem group riêng để sway, opacity khác nhau              |
| `berry-confetti.svg`         | Dâu mini, heart seed, star, dot, ribbon bit           | Particle layer         | Random bằng CSS vars, giới hạn số lượng visible          |
| `picnic-note-labels.svg`     | Note viết tay, price tag, sticker label, paper tape   | About/conclution cards | Paper grain nhẹ, tape group riêng để wiggle              |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `strawberry-picnic-meadow` trong data/theme config và README của sub-project  |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Background meadow/blanket/basket là lớp visual chính, không chỉ là decoration nhỏ    |
| Feature folders     | Tách `picnic-meadow-scene`, `strawberry-mascot`, `picnic-projects`                   |
| UI components       | Có `BerryButton`, `GinghamCard`, `JamTag`, `FlowerBadge` dùng lại trong các page     |
| Card decoration     | Project/about cards phải có border caro, sticker, flower/berry accent và nhiều màu   |
| Asset folder        | Tạo `src/assets/strawberry-picnic-meadow/` và đủ 8 SVG files trong bảng asset        |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh butterfly drift, bee loop, berry pop, flower sway, gingham wave            |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ meadow + basket chính, giảm bướm/ong/confetti và card về 1 cột            |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt loop bướm, ong, cỏ và confetti           |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 14. `pastel-magic-boutique` — Pastel Magic Boutique Portfolio

Portfolio như một boutique phép thuật pastel: kệ potion hồng tím, gương trái tim, hộp ribbon, charm lấp lánh và mèo/mascot tiệm nhỏ. Background là storefront/inside-shop scene nhiều lớp, tạo cảm giác bước vào một cửa hàng cute, rực rỡ nhưng vẫn mềm mắt.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Magical, nữ tính, glossy, đáng yêu, boutique fantasy                 |
| Hình khối   | Heart mirror card, potion bottle badge, ribbon frame, charm sticker  |
| Không gian  | Boutique pastel với kệ potion, rèm, gương, đèn sao, hộp quà          |
| Chuyển động | Potion bubble, mirror shimmer, ribbon flutter, charm twinkle         |
| Điểm nhấn   | Potion shelf, heart mirror, magic wand, ribbon box, tiny shop mascot |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF4FF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#D86BFF",
    colorTextBase: "#352246",
    colorTextSecondary: "#80618E",
    colorSuccess: "#79F0D3",
    colorWarning: "#FFE17F",
    colorInfo: "#9CCBFF",
    colorBorder: "#E8C7FF",
    borderRadius: 20,
    fontFamily: "'Baloo 2', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --boutique-pink: #FFF4FF;
// --magic-purple: #D86BFF;
// --ribbon-rose: #FF8CCF;
// --potion-mint: #79F0D3;
// --star-gold: #FFE17F;
// --mirror-blue: #9CCBFF;
// --velvet-violet: #80618E;
// --pearl-white: #FFFFFF;
// --charm-coral: #FF9B9B;
```

### Typography

- **Heading:** `Baloo 2` tròn, vui, tạo cảm giác boutique sign cute.
- **Body:** `Nunito` dễ đọc, giảm độ fantasy để nội dung portfolio vẫn rõ.

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Boutique door open, shelf reveal, card hover sparkle, route transition    |
| Rive            | Potion bottle reaction, mirror wink, shop mascot idle/interact/success    |
| SVGator         | Bubble rise trong potion, ribbon flutter, mirror shimmer, star charm path |
| Lenis           | Smooth scroll qua 3 trang như đi qua các quầy trong boutique              |
| CSS Keyframes   | Charm twinkle, curtain sway, bottle glow, ribbon float                    |
| Realtime Colors | Cân bằng tím/hồng/mint/vàng để rực rỡ nhưng không quá neon                |
| Blush           | Illustration magical boutique girl hoặc shop interior cho scene phụ       |

### Layout ideas

- **About:** Profile nằm trong heart mirror lớn; background là boutique shelf với potion bottle và ribbon box ở hai bên.
- **Projects:** Project cards như product display shelf, mỗi card có potion label, charm icon, ribbon corner và sparkle border khác màu.
- **Conclution:** Checkout counter hoặc gift wrapping desk; reflection note như receipt xinh, CTA là charm seal đóng dấu.

### Animation rules

| Sự kiện          | Effect                                             | Thư viện           |
| ---------------- | -------------------------------------------------- | ------------------ |
| Page load        | Boutique door open + shelf lights bật theo stagger | Framer Motion      |
| Potion idle      | Bubble rise trong chai, glow pulse nhẹ             | SVGator/CSS        |
| Mirror shimmer   | Highlight sweep ngang qua gương 5–8s loop          | CSS keyframes      |
| Ribbon           | Flutter nhẹ ở góc card và hộp quà                  | CSS/SVGator        |
| Charm sparkle    | Twinkle không đồng bộ quanh card và nav            | CSS keyframes      |
| Card hover       | Lift + potion label pop + ribbon curl              | Framer Motion      |
| Section entrance | Shelf items slide-in theo tầng, opacity 0 đến 1    | Framer Motion      |
| Conclution       | Gift wrap ribbon tie + star dust burst             | Rive/Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Pastel magic boutique shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── BoutiqueAboutPage.jsx           ← About trong heart mirror + shelf bg
│   ├── PotionProjectsPage.jsx          ← Projects dạng product shelf cards
│   └── GiftWrapConclutionPage.jsx      ← Conclution checkout/gift wrap scene
├── features/
│   ├── boutique-scene/
│   │   ├── BoutiqueInteriorBackground.jsx
│   │   ├── PotionShelfLayer.jsx
│   │   ├── HeartMirrorShimmer.jsx
│   │   └── RibbonCurtainLayer.jsx
│   ├── magic-mascot/
│   │   ├── BoutiqueMascotRive.jsx
│   │   ├── PotionBubbleReaction.jsx
│   │   └── CharmSparkleBurst.jsx
│   └── potion-projects/
│       ├── ProductShelfGrid.jsx
│       ├── PotionProjectCard.jsx
│       └── RibbonLabelHover.jsx
├── components/
│   ├── layout/                         ← Boutique nav, shimmer transition wrapper
│   └── ui/                             ← PotionButton, MirrorCard, RibbonTag, CharmBadge
└── assets/pastel-magic-boutique/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo                | Nội dung cần vẽ                                       | Dùng cho         | Gợi ý kỹ thuật                                         |
| ------------------------------ | ----------------------------------------------------- | ---------------- | ------------------------------------------------------ |
| `boutique-interior-scene.svg`  | Storefront hoặc interior, kệ potion, rèm, counter     | Background chính | Tách wall, shelf, lights, counter để parallax          |
| `potion-bottle-collection.svg` | Potion nhiều hình: heart, star, moon, bow bottle      | Cards/decoration | Liquid/bubble group riêng để animate opacity/translate |
| `heart-mirror-frame.svg`       | Gương trái tim, pearl frame, shine streak             | About hero       | Shine mask riêng, frame nhiều màu không đơn điệu       |
| `ribbon-bow-set.svg`           | Bow, ribbon strip, gift wrap, curl ribbon             | Card frame/CTA   | Tách tail để flutter, dùng gradient hồng/tím           |
| `magic-charm-icons.svg`        | Wand, star charm, moon charm, key, compact mirror     | Nav/badges       | Icon 24x24, currentColor + pastel fill                 |
| `sparkle-star-dust.svg`        | Star, diamond, dot, heart sparkle, glow ring          | Particle layer   | Symbol reuse, random delay, giới hạn visible           |
| `boutique-labels.svg`          | Price label, product tag, seal, shelf nameplate       | Project cards    | Paper + gold trim + small icon accent                  |
| `gift-wrap-counter.svg`        | Hộp quà, wrapping paper, scissors cute, checkout tray | Conclution       | Tách ribbon và seal để animate success                 |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `pastel-magic-boutique` trong data/theme config và README của sub-project     |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Boutique interior/shelf/mirror phải là visual layer chính xuyên suốt app             |
| Feature folders     | Tách `boutique-scene`, `magic-mascot`, `potion-projects`                             |
| UI components       | Có `PotionButton`, `MirrorCard`, `RibbonTag`, `CharmBadge` dùng lại trong các page   |
| Card decoration     | Cards phải có ribbon, charm, potion label, sparkle border và palette nhiều điểm nhấn |
| Asset folder        | Tạo `src/assets/pastel-magic-boutique/` và đủ 8 SVG files trong bảng asset           |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh potion bubbles, mirror shimmer, ribbon flutter, charm twinkle              |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ mirror/shelf chính, giảm charm/sparkle particle và card về 1 cột          |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt sparkle, bubble loop và shimmer sweep    |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 15. `dreamy-flower-train` — Dreamy Flower Train Portfolio

Portfolio như một chuyến tàu hoa chạy qua bầu trời pastel: toa tàu phủ hoa, mây bông, đường ray cầu vồng, smoke là cánh hoa và những trạm dừng nhỏ cho từng phần nội dung. Theme có cảm giác hành trình, nữ tính, giàu storytelling và animation mượt.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                |
| ----------- | -------------------------------------------------------------------- |
| Cảm xúc     | Mơ mộng, chuyển động, hopeful, thơ, dịu nhưng rực rỡ                 |
| Hình khối   | Train ticket card, station sign, flower window, rainbow rail badge   |
| Không gian  | Sky garden pastel, tàu hoa foreground, mây, cầu vồng, trạm nhỏ       |
| Chuyển động | Train glide, flower smoke, cloud parallax, rail sparkle, ticket flip |
| Điểm nhấn   | Flower train, cloud station, rainbow rail, petal smoke, tiny luggage |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F4F8FF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF86B7",
    colorTextBase: "#26324F",
    colorTextSecondary: "#6C7898",
    colorSuccess: "#8CE7C1",
    colorWarning: "#FFE27A",
    colorInfo: "#8FCBFF",
    colorBorder: "#CFE2FF",
    borderRadius: 18,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

// CSS Variables
// --sky-porcelain: #F4F8FF;
// --train-rose: #FF86B7;
// --cloud-blue: #8FCBFF;
// --garden-mint: #8CE7C1;
// --rail-gold: #FFE27A;
// --luggage-lilac: #C8A8FF;
// --petal-coral: #FFAD9F;
// --ink-indigo: #26324F;
// --station-border: #CFE2FF;
```

### Typography

- **Heading:** `Quicksand` mềm, tròn, hợp mây và flower train.
- **Body:** `Nunito` rõ, cân bằng phần storytelling và project detail.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Train entrance, ticket card flip, station reveal, page transition         |
| Rive            | Train conductor mascot, whistle reaction, luggage success animation       |
| SVGator         | Train glide along rail, flower smoke path, cloud drift, rainbow rail draw |
| Lenis           | Smooth scroll như đi qua từng station của hành trình                      |
| CSS Keyframes   | Cloud parallax, petal smoke float, rail sparkle, wheel rotate             |
| Realtime Colors | Tạo palette rose/sky/mint/gold có độ tươi nhưng đọc rõ                    |
| Blush           | Illustration train girl hoặc sky station cho hero/background phụ          |

### Layout ideas

- **About:** Cloud station đầu tiên; profile như train ticket hoặc window cabin, nền có flower train chạy ngang phía dưới.
- **Projects:** Mỗi project là một toa tàu hoặc station stop, card có ticket stamp, flower window, ribbon rail và icon hành lý riêng.
- **Conclution:** Trạm cuối lúc hoàng hôn pastel; reflection như arrival board, flower smoke chuyển thành heart/sparkle trail.

### Animation rules

| Sự kiện          | Effect                                            | Thư viện          |
| ---------------- | ------------------------------------------------- | ----------------- |
| Page load        | Sky fade + rail draw + train glide vào foreground | Framer/SVGator    |
| Train idle       | TranslateX rất nhẹ, wheel rotate, body bob 2–4px  | CSS/Rive          |
| Flower smoke     | Petal cloud drift từ ống khói, fade out mềm       | CSS/SVGator       |
| Cloud background | Parallax nhiều lớp, drift 18–30s loop             | CSS keyframes     |
| Card hover       | Ticket flip nhỏ + stamp pop + rail sparkle        | Framer Motion     |
| Section entrance | Station sign drop-in + card stagger               | Framer Motion     |
| Conclution       | Arrival board flip + petal trail sweep            | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Dreamy flower train shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── CloudStationAboutPage.jsx       ← About station + ticket profile
│   ├── TrainCarProjectsPage.jsx        ← Projects dạng train cars/stations
│   └── ArrivalConclutionPage.jsx       ← Conclution final station
├── features/
│   ├── flower-train-scene/
│   │   ├── SkyGardenBackground.jsx
│   │   ├── FlowerTrainLayer.jsx
│   │   ├── RainbowRailDraw.jsx
│   │   └── PetalSmokeLayer.jsx
│   ├── train-mascot/
│   │   ├── ConductorMascotRive.jsx
│   │   ├── WhistleReaction.jsx
│   │   └── LuggageSuccess.jsx
│   └── station-projects/
│       ├── StationProjectGrid.jsx
│       ├── TrainCarProjectCard.jsx
│       └── TicketStampHover.jsx
├── components/
│   ├── layout/                         ← Train nav, station transition wrapper
│   └── ui/                             ← TicketButton, StationCard, RailTag, FlowerWindowBadge
└── assets/dreamy-flower-train/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                     | Dùng cho         | Gợi ý kỹ thuật                                    |
| --------------------------- | --------------------------------------------------- | ---------------- | ------------------------------------------------- |
| `sky-garden-panorama.svg`   | Nền trời pastel, mây, vườn hoa trên mây, sun glow   | Background chính | Layer xa/gần để parallax, opacity mềm             |
| `flower-train-set.svg`      | Đầu tàu, toa hoa, bánh xe, cửa sổ, conductor mascot | Hero/background  | Tách wheel, smoke pipe, car body để animate riêng |
| `rainbow-rail-path.svg`     | Đường ray cầu vồng, sleepers, sparkle, station path | Scene connection | Stroke-dasharray cho rail draw                    |
| `cloud-station-set.svg`     | Trạm mây, signboard, bench, clock, ticket booth     | About/conclution | Sign group riêng để drop-in                       |
| `train-ticket-frames.svg`   | Ticket card, stamp, punched corner, ribbon strip    | Project cards    | Multi-color edge, stamp pop hover                 |
| `petal-smoke-particles.svg` | Petal smoke, flower puff, tiny heart, sparkle trail | Particle layer   | Random delay/scale, giới hạn visible              |
| `luggage-flower-icons.svg`  | Suitcase, flower bag, camera, ticket, map, bow      | Badges/nav       | Icon 24x24, currentColor + pastel fill            |
| `arrival-board-labels.svg`  | Arrival board, station labels, flip panels          | Conclution       | Panel tách riêng để flip animation                |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                   |
| ------------------- | ------------------------------------------------------------------------------------- |
| Theme ID            | Ghi rõ `dreamy-flower-train` trong data/theme config và README của sub-project        |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes  |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                             |
| Background priority | Flower train, sky garden và rail path là background scene chính của toàn app          |
| Feature folders     | Tách `flower-train-scene`, `train-mascot`, `station-projects`                         |
| UI components       | Có `TicketButton`, `StationCard`, `RailTag`, `FlowerWindowBadge` dùng lại             |
| Card decoration     | Cards phải có ticket stamp, rail border, flower window, luggage icon và màu đa lớp    |
| Asset folder        | Tạo `src/assets/dreamy-flower-train/` và đủ 8 SVG files trong bảng asset              |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục         |
| Motion              | Nhấn mạnh train glide, wheel rotate, flower smoke, cloud parallax, rail sparkle       |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ      |
| Responsive          | Mobile giữ train và station chính, giảm smoke/cloud particles và card về 1 cột        |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt train loop, smoke drift và cloud parallax |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO      |

---

## 16. `mermaid-pearl-lagoon` — Mermaid Pearl Lagoon Portfolio

Portfolio như một lagoon ngọc trai dành cho nàng tiên cá: nước xanh ngọc, san hô hồng tím, vỏ sò mở, pearl shimmer, sao biển và ánh caustics trên nền. Theme fantasy nữ tính, sáng, lấp lánh, dùng background lagoon làm lớp chính để tạo chiều sâu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Lấp lánh, mềm mại, nữ tính, ocean fantasy, sang nhẹ                     |
| Hình khối   | Shell card, pearl badge, coral frame, scale pattern, wave ribbon        |
| Không gian  | Lagoon xanh ngọc, san hô hồng tím, vỏ sò, pearl, light caustics         |
| Chuyển động | Pearl shimmer, shell open, water caustics, seahorse drift, coral sway   |
| Điểm nhấn   | Pearl shell, mermaid silhouette accent, coral arch, starfish, sea glass |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F0FCFF",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF83C7",
    colorTextBase: "#18364A",
    colorTextSecondary: "#5B7E90",
    colorSuccess: "#66E7D2",
    colorWarning: "#FFE088",
    colorInfo: "#73D4FF",
    colorBorder: "#AFEFFF",
    borderRadius: 22,
    fontFamily: "'DM Sans', 'Quicksand', sans-serif",
  },
};

// CSS Variables
// --lagoon-mist: #F0FCFF;
// --pearl-pink: #FF83C7;
// --aqua-glow: #73D4FF;
// --seafoam-mint: #66E7D2;
// --shell-ivory: #FFFFFF;
// --coral-lilac: #C9A7FF;
// --sun-pearl: #FFE088;
// --deep-teal: #18364A;
// --sea-glass-border: #AFEFFF;
```

### Typography

- **Heading:** `Quicksand` tạo cảm giác mềm, tròn, phù hợp pearl/shell.
- **Body:** `DM Sans` hiện đại, rõ ràng trên background có nhiều shimmer.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Shell card open, pearl reveal, coral frame entrance, route transition |
| Rive            | Pearl shell interaction, seahorse mascot, lagoon success bubble       |
| SVGator         | Water caustics sweep, shell open timeline, pearl shimmer, coral sway  |
| Lenis           | Smooth scroll qua 3 trang với lagoon depth parallax                   |
| CSS Keyframes   | Bubble rise, seaweed sway, pearl glow, caustic shimmer                |
| Realtime Colors | Cân palette aqua/pink/lilac/gold để vừa sáng vừa đủ contrast          |
| Blush           | Illustration mermaid lagoon hoặc pearl girl cho hero/about accent     |

### Layout ideas

- **About:** About nằm trong shell mở hoặc pearl frame; background lagoon có coral arch và sunbeam caustics.
- **Projects:** Project cards như pearl specimens trong reef gallery, mỗi card có coral corner, scale pattern, shell tag và starfish icon riêng.
- **Conclution:** Lagoon reflection scene; pearl rơi vào nước tạo ripple, lời kết nằm trên sea-glass note nhiều lớp màu.

### Animation rules

| Sự kiện           | Effect                                                | Thư viện          |
| ----------------- | ----------------------------------------------------- | ----------------- |
| Page load         | Lagoon gradient fade + coral grow + shell open reveal | Framer/SVGator    |
| Water caustics    | Light sweep rất chậm, opacity 0.25–0.55               | CSS/SVGator       |
| Pearl idle        | Glow pulse + small shimmer star                       | CSS keyframes     |
| Shell interaction | Shell halves rotate open, pearl scale 0.8 đến 1       | Rive/Framer       |
| Coral background  | Gentle sway 5–9s loop, phase lệch nhau                | CSS keyframes     |
| Card hover        | Lift + bubble burst + coral rim light                 | Framer Motion     |
| Section entrance  | Fade + y 24 đến 0 + pearl stagger                     | Framer Motion     |
| Conclution        | Pearl drop + ripple ring + shimmer trail              | Framer Motion/CSS |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Mermaid pearl lagoon shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── PearlLagoonAboutPage.jsx        ← About shell/pearl profile
│   ├── ReefPearlProjectsPage.jsx       ← Projects dạng pearl reef cards
│   └── LagoonConclutionPage.jsx        ← Conclution pearl ripple scene
├── features/
│   ├── pearl-lagoon-scene/
│   │   ├── LagoonBackground.jsx
│   │   ├── CoralArchLayer.jsx
│   │   ├── WaterCausticsOverlay.jsx
│   │   └── BubblePearlLayer.jsx
│   ├── lagoon-mascot/
│   │   ├── SeahorseMascotRive.jsx
│   │   ├── ShellOpenReaction.jsx
│   │   └── PearlDropSuccess.jsx
│   └── reef-projects/
│       ├── PearlProjectGrid.jsx
│       ├── ShellProjectCard.jsx
│       └── CoralFrameHover.jsx
├── components/
│   ├── layout/                         ← Lagoon nav, water transition wrapper
│   └── ui/                             ← PearlButton, ShellCard, CoralTag, SeaGlassBadge
└── assets/mermaid-pearl-lagoon/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                    | Dùng cho              | Gợi ý kỹ thuật                                    |
| ----------------------------- | -------------------------------------------------- | --------------------- | ------------------------------------------------- |
| `pearl-lagoon-background.svg` | Lagoon, nước xanh ngọc, đá, sand bed, sunbeam      | Background chính      | Tách water, caustics, sand, rocks để parallax     |
| `coral-shell-arch.svg`        | Coral hồng tím, shell arch, seaweed, starfish      | Hero/section frame    | Coral branch group riêng để sway                  |
| `pearl-shell-set.svg`         | Shell mở/đóng, pearl, shimmer star, shell shadow   | About/CTA             | Shell halves tách riêng, pearl radialGradient     |
| `mermaid-accent-set.svg`      | Mermaid silhouette mềm, tail scale, hair ribbon    | Background accent     | Chỉ dùng decorative layer, không thay avatar thật |
| `sea-glass-cards.svg`         | Sea glass note, translucent frame, wave ribbon     | Cards                 | Border nhiều màu, shimmer overlay nhẹ             |
| `lagoon-creature-icons.svg`   | Seahorse, fish, turtle mini, crab, starfish, shell | Nav/badges            | Icon 24x24, currentColor + aqua/pink fill         |
| `bubble-pearl-particles.svg`  | Bubble, pearl dot, sparkle, ripple ring            | Particle layer        | Random delay, fade top, giới hạn 20–30 visible    |
| `scale-pattern-ribbons.svg`   | Mermaid scale pattern, wave ribbon, pearl divider  | Decoration/card frame | Pattern opacity thấp, không làm text khó đọc      |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Theme ID            | Ghi rõ `mermaid-pearl-lagoon` trong data/theme config và README của sub-project      |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                            |
| Background priority | Lagoon, coral arch, caustics và pearl shell là visual layer chính                    |
| Feature folders     | Tách `pearl-lagoon-scene`, `lagoon-mascot`, `reef-projects`                          |
| UI components       | Có `PearlButton`, `ShellCard`, `CoralTag`, `SeaGlassBadge` dùng lại trong các page   |
| Card decoration     | Cards phải có coral frame, pearl badge, shell tag, wave/scale pattern đa màu         |
| Asset folder        | Tạo `src/assets/mermaid-pearl-lagoon/` và đủ 8 SVG files trong bảng asset            |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục        |
| Motion              | Nhấn mạnh pearl shimmer, shell open, water caustics, coral sway, bubble rise         |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive          | Mobile giữ shell/lagoon chính, giảm caustics/bubble/coral density và card về 1 cột   |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt caustics, bubble loop và coral sway      |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO     |

---

## 17. `kawaii-stationery-room` — Kawaii Stationery Room Portfolio

Portfolio như một căn phòng stationery cute: bàn học pastel, sticker sheet, bút gel, washi tape, sticky note, kẹp giấy trái tim và ánh sáng cửa sổ mềm. Theme thân thiện, nữ tính, giàu chi tiết handmade, dùng background room/desk làm lớp chính thay vì chỉ trang trí ở góc.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Cute, chăm chỉ, gọn gàng, handmade, học tập sáng tạo                   |
| Hình khối   | Notebook card, sticker badge, washi frame, memo tab, gel pen underline |
| Không gian  | Bàn stationery pastel, cửa sổ, sticker board, notebook, hộp bút        |
| Chuyển động | Sticker peel, pen doodle draw, paper float, washi curl, desk sparkle   |
| Điểm nhấn   | Sticker sheet, gel pen, sticky notes, washi tape, heart paperclip      |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF9FD",
    colorBgContainer: "#FFFFFF",
    colorPrimary: "#FF75B8",
    colorTextBase: "#30283F",
    colorTextSecondary: "#756981",
    colorSuccess: "#78E8C6",
    colorWarning: "#FFE06F",
    colorInfo: "#91D7FF",
    colorBorder: "#FFD1EA",
    borderRadius: 16,
    fontFamily: "'Nunito', 'Patrick Hand', sans-serif",
  },
};

// CSS Variables
// --stationery-blush: #FFF9FD;
// --marker-pink: #FF75B8;
// --mint-note: #78E8C6;
// --sunny-sticky: #FFE06F;
// --pen-blue: #91D7FF;
// --lavender-paper: #C9B3FF;
// --coral-sticker: #FF9A9A;
// --ink-soft: #30283F;
// --washi-border: #FFD1EA;
```

### Typography

- **Heading:** `Patrick Hand` dùng nhẹ cho accent/label để có cảm giác note viết tay.
- **Body:** `Nunito` là font chính để portfolio vẫn rõ, ổn định và dễ đọc.

```css
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Framer Motion   | Sticker peel, note reveal, project card drag-like hover, route transition |
| Rive            | Gel pen doodle interaction, sticker mascot, paperclip success animation   |
| SVGator         | Pen stroke draw, washi curl, paper float path, sticker peel timeline      |
| Lenis           | Smooth scroll như lướt qua desk board và notebook pages                   |
| CSS Keyframes   | Paper float, desk sparkle, tape flutter, pencil wiggle                    |
| Realtime Colors | Kiểm palette pink/mint/yellow/blue/lavender rực rỡ nhưng đủ contrast      |
| Blush           | Illustration stationery room, study desk, cute note character             |

### Layout ideas

- **About:** Background là desk room; profile như notebook mở, avatar dán bằng washi tape và sticker corner nhiều màu.
- **Projects:** Project cards như sticker sheet hoặc assignment memo, mỗi card có tab, clip, doodle icon, washi strip và patterned border khác nhau.
- **Conclution:** Reflection như trang cuối notebook; pen tự vẽ underline, sticker peel hiện quote/kết luận và paperclip success.

### Animation rules

| Sự kiện          | Effect                                               | Thư viện           |
| ---------------- | ---------------------------------------------------- | ------------------ |
| Page load        | Desk background fade + notebook open + stickers pop  | Framer Motion      |
| Sticker peel     | Corner rotate + shadow change + small elastic settle | Framer/SVGator     |
| Pen doodle       | Stroke-dashoffset draw line, heart, star, underline  | SVG/CSS/Rive       |
| Paper idle       | Sticky notes float 2–4px, rotate rất nhẹ             | CSS keyframes      |
| Washi tape       | Tape tail curl/flutter ở card corners                | CSS/SVGator        |
| Card hover       | Lift + doodle sparkle + paperclip wiggle             | Framer Motion      |
| Section entrance | Notes pop in theo grid, stagger 0.06–0.1s            | Framer Motion      |
| Conclution       | Pen underline + sticker reveal + confetti dot burst  | Rive/Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Kawaii stationery room shell
│   ├── routes.js                       ← about, projects, conclution
│   └── theme.js
├── pages/
│   ├── StationeryAboutPage.jsx         ← About notebook trên desk background
│   ├── StickerProjectsPage.jsx         ← Projects dạng sticker/memo cards
│   └── NotebookConclutionPage.jsx      ← Conclution final notebook page
├── features/
│   ├── stationery-room-scene/
│   │   ├── DeskRoomBackground.jsx
│   │   ├── StickerBoardLayer.jsx
│   │   ├── WashiTapeLayer.jsx
│   │   └── PaperFloatLayer.jsx
│   ├── stationery-mascot/
│   │   ├── GelPenRiveController.jsx
│   │   ├── StickerPeelReaction.jsx
│   │   └── PaperclipSuccess.jsx
│   └── sticker-projects/
│       ├── StickerProjectGrid.jsx
│       ├── MemoProjectCard.jsx
│       └── DoodleFrameHover.jsx
├── components/
│   ├── layout/                         ← Stationery nav, notebook transition wrapper
│   └── ui/                             ← GelPenButton, NotebookCard, WashiTag, StickerBadge
└── assets/kawaii-stationery-room/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                      | Dùng cho         | Gợi ý kỹ thuật                                          |
| ---------------------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------- |
| `stationery-desk-room.svg`   | Bàn học, cửa sổ, notebook, hộp bút, sticker board    | Background chính | Tách wall, desk, window light, notebook để parallax     |
| `sticker-sheet-set.svg`      | Sticker heart, star, flower, bow, cat face, label    | Cards/particles  | Sticker shadow riêng, corner peel group                 |
| `washi-tape-frames.svg`      | Washi tape nhiều pattern: caro, heart, cloud, flower | Card frame       | Pattern nhiều màu, tape tail tách để flutter            |
| `gel-pen-doodle-set.svg`     | Gel pen, underline, heart doodle, star doodle        | About/conclution | Stroke paths cho draw animation                         |
| `sticky-note-memo-cards.svg` | Sticky note, notebook page, memo tab, index label    | Project cards    | Paper grain nhẹ, tab group nhiều màu                    |
| `paperclip-charm-icons.svg`  | Heart clip, push pin, binder clip, charm, eraser     | Badges/nav       | Icon 24x24, currentColor + pastel fill                  |
| `desk-sparkle-particles.svg` | Tiny sparkle, dot, paper fleck, mini sticker bit     | Particle layer   | Random delay/position, giới hạn visible                 |
| `stationery-tool-icons.svg`  | Pen, pencil, scissors, ruler, glue, notebook, stamp  | UI icons         | Stroke 2px, fill pastel, dùng chung trong buttons/cards |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu        | Quy định triển khai                                                                   |
| ------------------- | ------------------------------------------------------------------------------------- |
| Theme ID            | Ghi rõ `kawaii-stationery-room` trong data/theme config và README của sub-project     |
| App shell           | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes  |
| Pages               | Chỉ dùng 3 trang chính: `about`, `projects`, `conclution`                             |
| Background priority | Desk room/sticker board/notebook là lớp background chính, luôn thấy rõ personality    |
| Feature folders     | Tách `stationery-room-scene`, `stationery-mascot`, `sticker-projects`                 |
| UI components       | Có `GelPenButton`, `NotebookCard`, `WashiTag`, `StickerBadge` dùng lại trong các page |
| Card decoration     | Cards phải có washi tape, sticker, memo tab, doodle border và màu accent khác nhau    |
| Asset folder        | Tạo `src/assets/kawaii-stationery-room/` và đủ 8 SVG files trong bảng asset           |
| Asset usage         | SVG assets phải được import vào UI/feature layer, không chỉ nằm trong thư mục         |
| Motion              | Nhấn mạnh sticker peel, pen doodle draw, paper float, washi curl, paperclip wiggle    |
| Accessibility       | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ      |
| Responsive          | Mobile giữ notebook/sticker board chính, giảm paper/sparkle density và card về 1 cột  |
| Reduced motion      | Có fallback `prefers-reduced-motion` để tắt paper float, sparkle và sticker loop      |
| Performance         | Không render quá 20–30 particle visible, lazy load scene SVG, optimize bằng SVGO      |

---

## 18. `ballet-swan-lake` — Ballet Swan Lake Portfolio

Giao diện mềm mại, thanh tao như hồ thiên nga dưới trăng. Kết hợp chuyển động của ruy băng satin bay nhẹ, mặt nước phản chiếu lung linh dạng kính mờ (glassmorphism) lấp lánh xà cừ, lông vũ trắng rơi lơ lửng, và những bông hồng phấn nhạt nở trên mặt hồ.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Cảm xúc     | Nhẹ nhàng, quý phái, thanh tao, lãng mạn, yên bình                                                           |
| Hình khối   | Oval-rounded card, satin ribbon border, swan outline frame, water drop badge                                 |
| Không gian  | Nền trắng kem sữa, hồng phấn ballet nhạt, mặt nước hồ gợn sóng lấp lánh phía sau các ô kính glassmorphism mờ |
| Chuyển động | Swan swim glide, feather fall, ribbon flutter, ripple wave expand, star twinkle                              |
| Điểm nhấn   | Swan mascot SVG đội vương miện nhỏ, satin ribbon bay quanh, ballet shoes, floating rose petals               |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FFF9FA",
    colorBgContainer: "rgba(255, 255, 255, 0.72)",
    colorPrimary: "#FFAEC9",
    colorTextBase: "#4A3338",
    colorTextSecondary: "#9E7D84",
    colorSuccess: "#BCEFD0",
    colorWarning: "#FFF0B3",
    colorInfo: "#DCE6FF",
    colorBorder: "rgba(255, 174, 201, 0.28)",
    borderRadius: 24,
    fontFamily: "'Playfair Display', 'Nunito', serif",
  },
};

// CSS Variables
// --ballet-pink: #FFAEC9;
// --swan-white: #FFFDFE;
// --lake-shimmer: #DCE6FF;
// --gold-tiara: #FFF0B3;
// --rose-petal: #FFD2DC;
// --glass-bg: rgba(255, 255, 255, 0.42);
// --glass-border: rgba(255, 255, 255, 0.6);
```

### Typography

- **Heading:** `Playfair Display` kiêu sa, sang trọng.
- **Body:** `Nunito` mềm mại, bay bổng.

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Nunito:wght@400;600;700;800&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                                    |
| --------------- | ---------------------------------------------------------------------------------------- |
| Framer Motion   | Feather falling drift, ribbon path draw, glass card tilt, page glide transition          |
| Rive            | Swan mascot swimming with wind, tiara sparkle glow on mouse over, ballet dancer spinning |
| SVGator         | Water ripple wave expanding, ribbon winding loop, feather landing splash                 |
| Lenis           | Smooth vertical scroll with parallax lake depth layers                                   |
| CSS Keyframes   | Lake sparkle twinkle, rose petal float, swan gentle bobbing                              |
| Realtime Colors | Tạo palette ballet-pink/lake-shimmer/gold-tiara thanh tao và bay bổng                    |
| Blush           | Illustration ballet dancer / swan princess                                               |

### Layout ideas

- **Hero:** Hồ thiên nga lung linh trăng rằm, thiên nga nhỏ lướt nhẹ từ cánh màn nhung/ruy băng rủ xuống, tiêu đề dập nổi kính mờ.
- **About:** Thiệp mời ballet bằng giấy lụa mờ (glassmorphism), thắt ruy băng nơ hồng, có hình vẽ thiên nga và chữ thư pháp thanh nhã.
- **Projects:** Mỗi project là một cỗ kịch nghệ thu nhỏ (theatre stage frame), hover vào thì ruy băng cuộn tròn bay lên tiết lộ chi tiết dự án.
- **Skills:** Các phím đàn piano/cánh thiên nga sắp xếp nhịp nhàng dạng glassmorphic chips.
- **Contact:** "Gửi cánh thư lụa" (Send a satin note), ruy băng thắt nút nơ đóng gói và thiên nga cất cánh mang thư đi.

### Animation rules

| Sự kiện        | Effect                                    | Thư viện      |
| -------------- | ----------------------------------------- | ------------- |
| Page load      | Feather flutter in + curtain slide open   | Framer Motion |
| Feather fall   | Fall diagonal slow, wobble sway, fade out | CSS keyframes |
| Ribbon flutter | Smooth wave distortion loop               | SVGator / CSS |
| Swan glide     | TranslateX drift slowly, float up/down    | CSS keyframes |
| Lake shimmer   | Refraction light glow, opacity pulse 6s   | CSS keyframes |
| Card hover     | Glass shine swipe + tilt + ribbon loosen  | Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Ballet swan lake shell
│   ├── routes.js                     ← lake-stage, invitations, playhouse, backstage, satin-post
│   └── theme.js
├── pages/
│   ├── SwanLakeHeroPage.jsx          ← Hero hồ thiên nga lung linh
│   ├── PlayhouseProjectsPage.jsx     ← Projects dạng sân khấu cổ điển
│   ├── BackstageSkillsPage.jsx       ← Skills dạng phím đàn/cánh thiên nga
│   └── SatinMailboxContactPage.jsx   ← Contact gửi thư thắt ruy băng
├── features/
│   ├── lake-scene/
│   │   ├── LakeWaterShimmer.jsx
│   │   ├── CurtainSlideReveal.jsx
│   │   ├── FeatherFallLayer.jsx
│   │   └── FloatingRosePetals.jsx
│   ├── swan-mascot/
│   │   ├── SwanRiveController.jsx
│   │   ├── SwanSwimAnimation.jsx
│   │   └── TiaraSparkleGlow.jsx
│   ├── theater-stage/
│   │   ├── StageFrameGrid.jsx
│   │   ├── StageProjectCard.jsx
│   │   └── RibbonUnrollHover.jsx
│   └── satin-mailbox/
│       ├── RibbonBowTying.jsx
│       ├── MailboxCard.jsx
│       └── SwanTakeoffAnimation.jsx
├── components/
│   ├── layout/                       ← Swan lake nav, curtain page transition
│   └── ui/                           ← RibbonButton, GlassCard, SwanBadge, TiaraTag
└── assets/ballet-swan-lake/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo           | Nội dung cần vẽ                                       | Dùng cho                | Gợi ý kỹ thuật                                        |
| ------------------------- | ----------------------------------------------------- | ----------------------- | ----------------------------------------------------- |
| `swan-mascot-set.svg`     | Thiên nga nhỏ đội vương miện, bơi, cúi đầu, vỗ cánh   | Mascot/decoration       | Tách cánh và đầu để animate, fill soft white gradient |
| `satin-ribbon-curves.svg` | Ruy băng lụa cuốn tròn, thắt nơ, bay nhẹ              | Border/card deco        | Path lượn sóng mềm, gradient hồng xà cừ               |
| `feather-particles.svg`   | Lông vũ trắng muốt, mềm mại nhiều góc độ              | Falling particles       | Path nét mảnh, fill semi-transparent white, blur      |
| `theatre-stage-frame.svg` | Khung sân khấu cổ điển, rèm nhung xếp ly              | Project card frame      | Rect rounded, drape path, drop-shadow sâu             |
| `rose-petal-set.svg`      | Cánh hoa hồng phấn rơi, trôi trên nước                | Particle layer          | Ellipse biến dạng nhẹ, fill soft rose gradient        |
| `lake-water-ripples.svg`  | Gợn sóng tròn đồng tâm phát sáng                      | Background/hover effect | Circle paths, stroke-width giảm dần, animate scale    |
| `ballet-icons.svg`        | Giày múa, tiara, đàn cầm, nơ lụa, khóa nhạc, hoa hồng | Nav/badge icons         | Icon 24x24, nét mảnh 1.5px, fill pink/gold            |

---

## 9. `unicorn-parfait-island` — Unicorn Parfait Island Portfolio

Một hòn đảo bay kỳ ảo được làm bằng thạch kem parfait ngọt ngào: thạch thủy tinh nhiều tầng lấp lánh ánh kim, mây kẹo bông màu hồng bay lơ lửng, bánh macaron nhiều màu, kỳ lân nhỏ thích kẹo dẻo. Thiết kế card dạng ly kem thủy tinh glassmorphic mờ sương chứa thạch trái cây màu sắc, vô cùng mơ mộng và đáng yêu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| Cảm xúc     | Ngọt ngào, đáng yêu, trẻ trung, rực rỡ, giàu trí tưởng tượng                                              |
| Hình khối   | Parfait glass outline, star badge, cloud pill button, marshmallow grid                                    |
| Không gian  | Nền trắng kem sữa pha tím oải hương nhạt, mây cotton candy bồng bềnh, dải thạch thủy tinh phát sáng xà cừ |
| Chuyển động | Unicorn bounce hop, parfait layer shimmer, star fall splash, marshmallow float, rainbow draw              |
| Điểm nhấn   | Unicorn mascot Rive, parfait glass container, marshmallow cloud, pastel stars, bubble pop                 |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FCF5FF",
    colorBgContainer: "rgba(255, 255, 255, 0.76)",
    colorPrimary: "#FFA3DF",
    colorTextBase: "#441D35",
    colorTextSecondary: "#8A5477",
    colorSuccess: "#8EECD4",
    colorWarning: "#FFE893",
    colorInfo: "#A3D8FF",
    colorBorder: "rgba(255, 163, 223, 0.3)",
    borderRadius: 20,
    fontFamily: "'Fredoka', 'Quicksand', sans-serif",
  },
};

// CSS Variables
// --unicorn-pink: #FFA3DF;
// --marshmallow-yellow: #FFE893;
// --cotton-candy-blue: #A3D8FF;
// --parfait-mint: #8EECD4;
// --jelly-purple: #D5B3FF;
// --cream-white: #FCF5FF;
```

### Typography

- **Heading:** `Fredoka` siêu đáng yêu, bầu bĩnh.
- **Body:** `Quicksand` bo tròn mềm mịn, cực kỳ cute.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                                  |
| --------------- | -------------------------------------------------------------------------------------- |
| Framer Motion   | Parfait ingredients drop bounce, jelly layer scale, bubble scatter, cotton candy float |
| Rive            | Unicorn eating jelly candy, horn shining on hover, sleeping on cotton candy cloud      |
| SVGator         | Rainbow bridge path draw, star sparkle scale, parfait glass fog-up / condensate drops  |
| Lenis           | Smooth scroll down through dessert layers                                              |
| CSS Keyframes   | Marshmallow sway, jelly shine reflection, sparkle twinkling                            |
| Realtime Colors | Palette marshmallow-pink/parfait-mint/cotton-candy-blue ngọt ngào và năng động         |
| Blush           | Illustration cute unicorn girl / dreamy dessert island                                 |

### Layout ideas

- **Hero:** Hòn đảo bay làm bằng ly kem khổng lồ, mây kẹo bông trôi lững lờ, kỳ lân chào đón bằng sừng phát sáng cầu vồng.
- **About:** Ly parfait thủy tinh mờ sương, mỗi lớp thạch hiển thị thông tin học vấn/sở thích của Phương với icon thạch trái cây siêu dễ thương.
- **Projects:** Mỗi dự án là một hộp kẹo dẻo/macaron glassmorphic nhiều sắc màu, hover thì hộp mở nắp và kẹo nảy tưng bừng.
- **Skills:** Chiếc máy gắp kẹo bông (candy grabber), kỹ năng nằm trong quả bóng gắp thủy tinh mờ lung linh.
- **Contact:** "Gửi viên kẹo ước nguyện" (Send a sweet wish), viên kẹo dẻo rơi vào ly thạch parfait phát nổ đom đóm rực rỡ.

### Animation rules

| Sự kiện        | Effect                                          | Thư viện       |
| -------------- | ----------------------------------------------- | -------------- |
| Page load      | Parfait toppings drop bounce in                 | Framer Motion  |
| Rainbow bridge | Draw stroke-dashoffset + shine sweep 1.8s       | SVGator / CSS  |
| Unicorn mascot | Bounce, wag tail, head tilt loop                | Rive / CSS     |
| Jelly glow     | Color shimmer (hue-rotate ±15deg)               | CSS keyframes  |
| Glass fog      | Fade in soft white fog + tiny dew drops sliding | CSS transition |
| Card hover     | Bubble pop + jelly wobble + gold star spin      | Framer Motion  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Unicorn parfait island shell
│   ├── routes.js                     ← parfait-diner, jelly-layers, candy-grabber, wish-fountain
│   └── theme.js
├── pages/
│   ├── DessertIslandHeroPage.jsx     ← Hero đảo parfait bồng bềnh
│   ├── JellyProjectsPage.jsx         ← Projects dạng lớp thạch ngọt ngào
│   ├── CandyGrabberSkillsPage.jsx    ← Skills dạng máy gắp kẹo bông
│   └── WishFountainContactPage.jsx   ← Contact giếng ước kẹo dẻo
├── features/
│   ├── parfait-scene/
│   │   ├── ParfaitGlassIsland.jsx
│   │   ├── CottonCandyClouds.jsx
│   │   ├── RainbowBridge.jsx
│   │   └── JellyShimmerBg.jsx
│   ├── unicorn-mascot/
│   │   ├── UnicornRiveController.jsx
│   │   ├── SweetEatingAnimation.jsx
│   │   └── HornGlowEffect.jsx
│   ├── jelly-toppings/
│   │   ├── ToppingsGrid.jsx
│   │   ├── JellyProjectCard.jsx
│   │   └── CondensationEffect.jsx
│   └── candy-grabber/
│       ├── GrabberMachine.jsx
│       ├── SkillGlassSphere.jsx
│       └── PrizeClawAction.jsx
├── components/
│   ├── layout/                       ← Parfait nav, rainbow transition wrapper
│   └── ui/                           ← JellyButton, ParfaitCard, StarBadge, MarshmallowTag
└── assets/unicorn-parfait-island/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                       | Dùng cho             | Gợi ý kỹ thuật                                       |
| --------------------------- | ----------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| `unicorn-character-set.svg` | Kỳ lân tròn trịa, mắt to lấp lánh, sừng cầu vồng      | Mascot/hero          | Tách đuôi/sừng để animate, fill bright pastel pink   |
| `parfait-glass-island.svg`  | Ly thủy tinh parfait lớn chứa thạch nhiều màu, cherry | Hero/background      | Multi-layered path, linear gradient với opacity thấp |
| `cotton-candy-clouds.svg`   | Mây kẹo bông tròn trịa xốp mềm, có màu hồng xanh tím  | Background clouds    | Đè nhiều đường tròn mềm, stroke-width dày, blur      |
| `marshmallow-shapes.svg`    | Kẹo xoắn, kẹo dẻo hình thỏ/tim/sao dễ thương          | Decoration/bullets   | Path lượn sóng mềm, màu trắng/vàng/hồng pastel       |
| `bubble-pop-particles.svg`  | Bong bóng nước xà cừ phát nổ thành các tia sao nhỏ    | Hover particle layer | Cicle + tiny lines, animate scale + opacity          |
| `star-candy-sprinkles.svg`  | Hạt đường sao nhỏ lấp lánh nhiều màu                  | Particle rain        | Path star 4 cánh, animate fall + spin                |
| `parfait-icons.svg`         | Kem, cherry, kẹo dẻo, cốc parfait, star wand, cup     | Nav/badge icons      | Icon 24x24, nét dày 2px, fill bright pastel          |

---

## 19. `carousel-dream-palace` — Carousel Dream Palace Portfolio

Khung cảnh cỗ xe vòng quay ngựa gỗ lung linh dưới trăng lãng mạn. Thiết kế sử dụng các tấm kính glassmorphism lớn được mài vát cạnh lấp lánh ánh trăng, thắt dải ruy băng voan hồng xếp lớp mềm mại, có sao đêm lấp lánh và màn sương pha lê mờ ảo phía sau.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                   |
| ----------- | --------------------------------------------------------------------------------------- |
| Cảm xúc     | Mơ mộng, hoàng gia cổ tích, ấm áp, lộng lẫy, kỳ ảo                                      |
| Hình khối   | Octagonal glass card vát cạnh, starburst frame, ribbon bow divider, golden crown badge  |
| Không gian  | Nền xanh tím đêm huyền bí lãng mạn, mặt trăng vàng kem khổng lồ, sương pha lê trôi nhẹ  |
| Chuyển động | Carousel spin, horse swing, shooting star, lantern glow pulse, ribbon curtain sway      |
| Điểm nhấn   | Carousel horse mascot Rive, giant moon, crystal carriage, gold bells, voan ribbon drape |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#140A24",
    colorBgContainer: "rgba(34, 18, 54, 0.72)",
    colorPrimary: "#FF9EB5",
    colorTextBase: "#FFF2E6",
    colorTextSecondary: "#D8C5B3",
    colorSuccess: "#84E296",
    colorWarning: "#FFDE7D",
    colorInfo: "#9BC1FF",
    colorBorder: "rgba(255, 158, 181, 0.28)",
    borderRadius: 26,
    fontFamily: "'Cinzel', 'Quicksand', serif",
  },
};

// CSS Variables
// --carousel-pink: #FF9EB5;
// --night-violet: #140A24;
// --gold-bell: #FFDE7D;
// --sky-mist: #9BC1FF;
// --moon-crème: #FFF2E6;
// --voan-rose: #FFAEC9;
```

### Typography

- **Heading:** `Cinzel` mang nét cổ điển, sang trọng và kiêu sa của hoàng gia.
- **Body:** `Quicksand` mềm mại, bo tròn dễ thương để giữ độ cute.

```css
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Quicksand:wght@300..700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                              |
| --------------- | ---------------------------------------------------------------------------------- |
| Framer Motion   | Carousel horse entrance swing, gold stars stagger rise, parchment fold card        |
| Rive            | Carousel horse mascot gallop loop, lantern click to glow, gold bell chime sequence |
| SVGator         | Carousel roof spinning effect, shooting star drop diagonal, ribbon curtain part    |
| Lenis           | Smooth scroll như lật từng chương truyện trong đêm                                 |
| CSS Keyframes   | Moon glow pulse, star twinkle shimmer, gold bell gentle sway                       |
| Realtime Colors | Palette night-violet/carousel-pink/gold-bell sang trọng mà lộng lẫy mơ mộng        |
| Blush           | Illustration vintage carousel / carriage palace                                    |

### Layout ideas

- **Hero:** Một vòng quay ngựa gỗ khổng lồ dưới ánh trăng vàng, các chú ngựa gỗ dạng thủy tinh mờ phát sáng nhẹ khi hover.
- **About:** Khung cỗ xe ngựa pha lê mờ (glassmorphism frame), chứa bức chân dung vintage của Phương thắt nơ lụa voan.
- **Projects:** Mỗi dự án là một chiếc vé vào cửa vòng quay (carousel ticket card) làm bằng kính mờ viền vàng rực rỡ, hover thì vé xoay góc lấp lánh ánh kim.
- **Skills:** Các cột phát sáng giữ ngựa carousel, mỗi skill là một chiếc chuông vàng đung đưa trên cột.
- **Contact:** "Gửi cánh thư trăng" (Send a moonlight mail), thả vào hộp thư cỗ xe ngựa, cỗ xe chạy nhanh dần bay lên trời sao.

### Animation rules

| Sự kiện       | Effect                                    | Thư viện      |
| ------------- | ----------------------------------------- | ------------- |
| Page load     | Carriage slide-in + stars twinkle stagger | Framer Motion |
| Shooting star | Diagonal stroke path sweep + fade-out 8s  | CSS keyframes |
| Carousel spin | Slow background rotation 3D effect        | SVGator       |
| Bell chime    | Rotate swing ±12deg on hover              | CSS keyframes |
| Crystal glass | Sparkle glint sweep reflection            | CSS keyframes |
| Ticket hover  | Card flip + edge shine + gold dust burst  | Framer Motion |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Carousel dream palace shell
│   ├── routes.js                     ← royal-gate, crystal-carriage, gold-columns, starlight-post
│   └── theme.js
├── pages/
│   ├── CarouselHeroPage.jsx          ← Hero vòng quay khổng lồ dưới trăng
│   ├── CrystalCarriageProjectsPage.jsx ← Projects dạng cỗ xe kính mờ
│   ├── GoldColumnsSkillsPage.jsx     ← Skills dạng cột giữ ngựa carousel
│   └── StarlightMailContactPage.jsx  ← Contact gửi thư trăng bay cỗ xe
├── features/
│   ├── carousel-scene/
│   │   ├── SpinningCarousel.jsx
│   │   ├── GiantMoonlitSky.jsx
│   │   ├── CrystalCarriageFrame.jsx
│   │   └── VoanRibbonCurtains.jsx
│   ├── horse-mascot/
│   │   ├── HorseRiveController.jsx
│   │   ├── HorseSwingAction.jsx
│   │   └── BellChimeSound.jsx
│   ├── royal-tickets/
│   │   ├── TicketGrid.jsx
│   │   ├── GlassTicketCard.jsx
│   │   └── GoldGlintHover.jsx
│   └── gold-columns/
│       ├── CarouselPillars.jsx
│       ├── GoldenBellSkill.jsx
│       └── SkillLightBeam.jsx
├── components/
│   ├── layout/                       ← Palace nav, carriage page transition
│   └── ui/                           ← CrownButton, TicketCard, BellBadge, VoanTag
└── assets/carousel-dream-palace/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                      | Dùng cho              | Gợi ý kỹ thuật                                         |
| ----------------------------- | ---------------------------------------------------- | --------------------- | ------------------------------------------------------ |
| `carousel-horse-set.svg`      | Ngựa vòng quay trạm trổ tinh xảo, đính ngọc, đuôi nơ | Mascot/hero scene     | Tách thân ngựa và cột sắt để animate nhịp nhàng        |
| `octagonal-glass-tickets.svg` | Vé kính 8 cạnh vát góc, viền ren vàng, thắt nơ voan  | Project cards         | Path phức tạp, vát cạnh gradient trắng/vàng, viền vàng |
| `crystal-carriage-frame.svg`  | Cỗ xe ngựa pha lê hoàng gia có bánh xe lấp lánh      | About frame           | Tách khung xe và 4 bánh để animate xoay nhẹ            |
| `voan-ribbon-swags.svg`       | Ruy băng lụa voan xếp lớp xếp nếp, thắt nơ rủ bay    | Page dividers/borders | Path mềm xếp ly, fill hồng phấn trong suốt mờ          |
| `starburst-particles.svg`     | Sao chổi lấp lánh 8 cánh, cụm bụi sao lơ lửng        | Starry sky layer      | Path starburst, animate opacity + spin nhấp nháy       |
| `gold-carriage-bell.svg`      | Chuông vàng quả lắc đính hạt pha lê                  | Skills badges         | Tách bell body và clapper để animate swing đung đưa    |
| `carousel-palace-icons.svg`   | Ngựa, xe, lâu đài, chuông, vé, vương miện, nơ, trăng | Nav/badge icons       | Icon 24x24, nét mảnh 1.5px, màu gold/pink              |

---

## 11. `strawberry-glasshouse` — Strawberry Glasshouse Portfolio

Một khu vườn dâu tây nhỏ xinh nằm trong nhà kính thủy tinh mờ (frosted glass greenhouse) ngập tràn nắng mai. Những quả dâu tây chín mọng màu hồng phấn, những cành lá xanh non nhạt, giọt sương sớm đọng trên kính trượt dài, chú ong mật tròn mập lướt cánh xung quanh. Thiết kế kính mờ trong suốt (high opacity glassmorphism) bao phủ toàn bộ thẻ bài, đem lại cảm giác tự nhiên, tươi mới nhưng cực kỳ cute và thơ mộng.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------ |
| Cảm xúc     | Tươi mát, bình yên, trong trẻo, gần gũi thiên nhiên, dâu tây ngọt ngào                     |
| Hình khối   | Greenhouse window pane, strawberry leaf badge, water drop card, honeycomb grid             |
| Không gian  | Nền trắng bạc hà nhạt, cửa sổ nhà kính thủy tinh mờ phản chiếu những chùm dâu tây trĩu quả |
| Chuyển động | Dew drop slide, bee flutter fly, strawberry growth bloom, leaf sway, steam rise            |
| Điểm nhấn   | Chubby bee mascot Rive, red/pink strawberries, glass greenhouse frame, honeycomb, dew drop |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#F2FBF6",
    colorBgContainer: "rgba(255, 255, 255, 0.8)",
    colorPrimary: "#FFA0AB",
    colorTextBase: "#1D3E2F",
    colorTextSecondary: "#527D68",
    colorSuccess: "#84E2A8",
    colorWarning: "#FFE17A",
    colorInfo: "#9DE4FF",
    colorBorder: "rgba(132, 226, 168, 0.3)",
    borderRadius: 22,
    fontFamily: "'Comfortaa', 'Quicksand', sans-serif",
  },
};

// CSS Variables
// --berry-pink: #FFA0AB;
// --berry-red: #FF6B7D;
// --leaf-green: #84E2A8;
// --honey-yellow: #FFE17A;
// --dew-blue: #9DE4FF;
// --glasshouse-mint: #F2FBF6;
```

### Typography

- **Heading:** `Comfortaa` tròn lịm, ấm áp gợi tả quả dâu căng tròn.
- **Body:** `Quicksand` trong trẻo, mềm mại.

```css
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400..700&family=Quicksand:wght@300..700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                                       |
| --------------- | ------------------------------------------------------------------------------------------- |
| Framer Motion   | Strawberry grow zoom in, greenhouse pane wipe reveal, dew drop falling path                 |
| Rive            | Chubby bee flying around mouse pointer, strawberry flower blooming on hover, honey dripping |
| SVGator         | Sunbeam caustics through glass, water pipe flowing, leaf sway loop                          |
| Lenis           | Smooth scroll through garden rows                                                           |
| CSS Keyframes   | Bee wing buzz, leaf sway gentle, strawberry bobbing, sun ray shimmer                        |
| Realtime Colors | Palette glasshouse-mint/berry-pink/honey-yellow mát xanh tươi trẻ và trong lành             |
| Blush           | Illustration greenhouse garden girl / strawberry field                                      |

### Layout ideas

- **Hero:** Khung cảnh nhà kính thủy tinh mờ ngập nắng, ong béo lượn lờ vẽ đường bay lấp lánh xung quanh tên Phương bằng dâu tây.
- **About:** Khung ô cửa kính trong suốt của nhà kính (glass window pane card), có đọng nước sương mờ và lá dâu quấn quanh.
- **Projects:** Mỗi dự án là một hộp dâu tây tươi mọng thắt nơ rơm (strawberry basket glass card), hover dâu tây chín toả sáng lấp lánh.
- **Skills:** Cây dâu tây sum suê quả, mỗi cụm dâu chín là một nhóm kỹ năng với hạt dâu lấp lánh xà cừ.
- **Contact:** "Gửi hũ mứt dâu ngọt ngào" (Send a sweet jam jar), hũ jam glassmorphic đóng nắp lấp lánh và bay theo chú ong mật mang đi.

### Animation rules

| Sự kiện         | Effect                                      | Thư viện      |
| --------------- | ------------------------------------------- | ------------- |
| Page load       | Glass fog clear + bee hop flight path       | Framer Motion |
| Dew drop        | Slide down greenhouse window pane slowly 4s | SVGator / CSS |
| Leaf sway       | Pendulum wave oscillation loop              | CSS keyframes |
| Bee wing buzz   | High frequency shake rotation ±3deg 0.05s   | CSS keyframes |
| Jam jar seal    | Jar lid rotate close + sticker pop          | Framer Motion |
| Strawberry glow | Bioluminescent berry heart pulse 2.5s       | CSS keyframes |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Strawberry glasshouse shell
│   ├── routes.js                     ← sun-greenhouse, strawberry-baskets, berry-branches, jam-factory
│   └── theme.js
├── pages/
│   ├── GreenhouseHeroPage.jsx        ← Hero nhà kính thủy tinh mờ ngập nắng
│   ├── StrawberryBasketsPage.jsx     ← Projects dạng giỏ dâu tây đan
│   ├── BerryBranchesPage.jsx         ← Skills dạng cành dâu trĩu quả
│   └── JamFactoryContactPage.jsx     ← Contact làm hũ mứt ước nguyện
├── features/
│   ├── greenhouse-scene/
│   │   ├── FrostedGlassHouse.jsx
│   │   ├── SunbeamCaustics.jsx
│   │   ├── DewSlideLayer.jsx
│   │   └── StrawberryBushes.jsx
│   ├── bee-mascot/
│   │   ├── BeeRiveController.jsx
│   │   ├── FlightPathDraw.jsx
│   │   └── HoneycombReaction.jsx
│   ├── berry-baskets/
│   │   ├── BasketGrid.jsx
│   │   ├── StrawberryCard.jsx
│   │   └── SeedSparkleHover.jsx
│   └── jam-factory/
│       ├── GlassJamJar.jsx
│       ├── BoilingJamParticles.jsx
│       └── JamLabelCustomize.jsx
├── components/
│   ├── layout/                       ← Greenhouse nav, window page transition
│   └── ui/                           ← BerryButton, GreenhouseCard, LeafBadge, JamTag
└── assets/strawberry-glasshouse/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo           | Nội dung cần vẽ                                        | Dùng cho             | Gợi ý kỹ thuật                                      |
| ------------------------- | ------------------------------------------------------ | -------------------- | --------------------------------------------------- |
| `chubby-bee-mascot.svg`   | Chú ong tròn béo vàng đen, cánh trong suốt, phấn hoa   | Mascot/hero scene    | Tách cánh để buzz rung nhanh, fill pastel yellow    |
| `strawberry-branches.svg` | Quả dâu tây treo lơ lửng, hoa trắng, lá 3 thùy xanh    | Projects/background  | Tách cành, quả dâu chín đỏ/hồng để animate đung đưa |
| `greenhouse-panes.svg`    | Khung ô cửa nhà kính lớn bằng kính mờ, đọng sương      | About board/card     | Path ô vuông, fill gradient trong suốt, mờ mịn      |
| `jam-jars.svg`            | Hũ mứt thủy tinh tròn béo thắt dây cói, dán nhãn       | Contact form         | Tách dây cói, nhãn dán dâu tây làm group riêng      |
| `honeycomb-cells.svg`     | Tổ ong lục giác xếp xen kẽ phát sáng màu mật ong       | Skills grid          | Path hexagon pattern tile, radial gradient          |
| `dew-drop-fluid.svg`      | Giọt nước chảy dẹt trên kính mờ trơn trượt             | Background particles | Path dẹt giọt nước rơi, animate scaleY dẹt dài      |
| `strawberry-icons.svg`    | Ong, dâu, lá, hũ mứt, tổ ong, kính mờ, xẻng vườn, bình | Nav/badge icons      | Icon 24x24, nét mảnh 2px, màu berry-pink/leaf-green |

---

## 20. `angel-perfume-atelier` — Angel Perfume Atelier Portfolio

Một xưởng nước hoa phép thuật của thiên thần nhỏ lãng mạn. Những chai nước hoa làm bằng thủy tinh mài tinh xảo phát ra làn sương ma thuật lấp lánh ánh ngọc trai/aurora (holographic glassmorphism), đôi cánh thiên thần trắng muốt xếp lớp bay nhẹ, những sợi lông vũ và cánh hoa hồng rơi tự do dưới ánh trăng. Thiết kế kính mờ phản quang cầu vồng (aurora glassmorphism) mang đến một vẻ đẹp cực kỳ thời thượng, sang xịn và quyến rũ cho portfolio.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Cảm xúc     | Sang xịn mịn, phép thuật mơ mộng, thanh khiết, thời thượng, ngọt ngào                             |
| Hình khối   | Crystal perfume bottle card, angel wing tab, gold ribbon badge, feather capsule tag               |
| Không gian  | Bầu trời hoàng hôn tím hồng xà cừ, các chai nước hoa thủy tinh khúc xạ ánh sáng lộng lẫy          |
| Chuyển động | Angel wing hover sway, perfume mist scatter, feather drift fall, bubble shine, bottle click spray |
| Điểm nhấn   | Angel mascot Rive, crystal perfume bottle, pearl bubble, pink rose, gold ribbon                   |

### Bảng màu

```js
export const theme = {
  token: {
    colorBgBase: "#FDF6FF",
    colorBgContainer: "rgba(255, 255, 255, 0.68)",
    colorPrimary: "#E0B3FF",
    colorTextBase: "#3A214E",
    colorTextSecondary: "#866D9F",
    colorSuccess: "#8EECCD",
    colorWarning: "#FFEFA8",
    colorInfo: "#FFB0E0",
    colorBorder: "rgba(224, 179, 255, 0.28)",
    borderRadius: 24,
    fontFamily: "'Cinzel Decorative', 'Poppins', serif",
  },
};

// CSS Variables
// --angel-purple: #E0B3FF;
// --sweet-pink: #FFB0E0;
// --aurora-gold: #FFEFA8;
// --pearl-mint: #8EECCD;
// --feather-white: #FFFFFF;
// --perfume-violet: #3A214E;
```

### Typography

- **Heading:** `Cinzel Decorative` siêu lộng lẫy, đầy những nét thắt nghệ thuật cổ tích.
- **Body:** `Poppins` hiện đại, tinh tế, giữ bố cục gọn gàng sang xịn.

```css
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                                        |
| --------------- | -------------------------------------------------------------------------------------------- |
| Framer Motion   | Perfume bottle spray animation, feather falling loop, mist expand reveal, glass cards ripple |
| Rive            | Little angel flying/posing, spray bottle mist button, potion cooking magic                   |
| SVGator         | Wing flutter loop, glass crystal reflection refraction, aurora rainbow flow                  |
| Lenis           | Smooth scroll down through atelier perfume racks                                             |
| CSS Keyframes   | Feather float drift, perfume mist flow, pearl bubble shine                                   |
| Realtime Colors | Palette sweet-pink/angel-purple/aurora-gold sang xịn mịn và vô cùng thơ mộng                 |
| Blush           | Illustration angel girl / magic potion dresser                                               |

### Layout ideas

- **Hero:** Chiếc bàn trang điểm đầy chai nước hoa pha lê lấp lánh ánh xà cừ dưới trăng hoàng hôn hồng tím, lông vũ bay lãng mạn.
- **About:** Chai nước hoa pha lê khổng lồ dạng aurora glassmorphism cực kỳ lấp lánh khúc xạ ánh sáng, hiển thị profile ở trung tâm.
- **Projects:** Mỗi dự án là một mùi hương nước hoa đặc sắc (fragrance vial card), hover thì chai phun ra làn sương lấp lánh chứa thông tin dự án.
- **Skills:** Kệ tủ nước hoa pha lê, mỗi tầng kệ là một tầng hương skill khác nhau (top notes, heart notes, base notes).
- **Contact:** "Xịt sương ước nguyện" (Spray a wish), xịt một chai nước hoa phép thuật, làn sương kết thành bướm bay lên cao.

### Animation rules

| Sự kiện        | Effect                                       | Thư viện          |
| -------------- | -------------------------------------------- | ----------------- |
| Page load      | Mist puff in + angel feather float entrance  | Framer Motion     |
| Wing flutter   | Dual wing rotate wave (left/right opposite)  | SVGator           |
| Perfume spray  | Puff organic particle spray from nozzle 1.2s | Framer Motion/CSS |
| Aurora shimmer | Linear gradient angles rotation loop         | CSS keyframes     |
| Bubble glide   | Vertical drift + wobble sway, opacity glow   | CSS keyframes     |
| Bottle hover   | Refraction glint sweep + slight float        | CSS transition    |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Angel perfume atelier shell
│   ├── routes.js                     ← angel-boudoir, fragrance-racks, notes-shelf, magic-dresser
│   └── theme.js
├── pages/
│   ├── BoudoirHeroPage.jsx           ← Hero bàn trang điểm lấp lánh ngọc trai
│   ├── FragranceRacksPage.jsx        ← Projects dạng kệ chai nước hoa
│   ├── NotesShelfSkillsPage.jsx      ← Skills chia theo 3 tầng hương thơm
│   └── DresserContactPage.jsx        ← Contact xịt sương nước hoa phép thuật
├── features/
│   ├── boudoir-scene/
│   │   ├── DressingTableMirror.jsx
│   │   ├── AuroraRefractionLayer.jsx
│   │   ├── FeatherFloatingLayer.jsx
│   │   └── PearlBubblesDrift.jsx
│   ├── angel-mascot/
│   │   ├── AngelRiveController.jsx
│   │   ├── WingFlutterAnimation.jsx
│   │   └── MagicSprayReaction.jsx
│   ├── fragrance-racks/
│   │   ├── RacksGrid.jsx
│   │   ├── CrystalBottleCard.jsx
│   │   └── MistPuffHover.jsx
│   └── notes-shelf/
│       ├── PotionShelves.jsx
│       ├── FragranceNoteSkill.jsx
│       └── ScentCloudTooltip.jsx
├── components/
│   ├── layout/                       ← Atelier nav, perfume mist transition
│   └── ui/                           ← SprayButton, CrystalCard, WingBadge, PearlTag
└── assets/angel-perfume-atelier/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                      |
| ----------------------------- | ----------------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `angel-mascot-set.svg`        | Thiên thần nhỏ có cánh trắng, áo đầm lụa, cầm chai    | Mascot/hero scene      | Tách đôi cánh bay lượn để animate, fill soft lilac  |
| `crystal-perfume-bottles.svg` | Chai nước hoa pha lê nhiều hình dạng mài vát lộng lẫy | Projects/decor         | Khúc xạ gradient đa sắc (aurora), glow xà cừ filter |
| `feather-drift-capsules.svg`  | Sợi lông tơ tơi mềm màu trắng rơi rải rác             | Background particles   | Path lông vũ nét tơ siêu mảnh, opacity thấp 0.3–0.5 |
| `magic-dresser-mirror.svg`    | Gương bàn trang điểm viền kim loại vàng nghệ thuật    | Hero border            | Oval path, fill gradient gương soi mờ phản quang    |
| `pearl-glow-bubbles.svg`      | Hạt bong bóng xà cừ phát quang óng ánh tròn vo        | Particle layer         | Circle + radialGradient ngọc trai, glow drop-shadow |
| `perfume-spray-mist.svg`      | Làn sương phun ra dạng dải mây lấp lánh ánh sao       | Page transition/effect | Path cloud rải rác sao, animate scaleX/fade out     |
| `perfume-atelier-icons.svg`   | Chai nước hoa, cánh, lông vũ, gương, ngọc, giọt sương | Nav/badge icons        | Icon 24x24, nét mảnh 1.5px, màu gold/purple         |

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

| Việc cần làm                  | Tool nên dùng                            | Ghi chú triển khai                          |
| ----------------------------- | ---------------------------------------- | ------------------------------------------- |
| Page/route transition         | Framer Motion                            | Dùng variants/AnimatePresence               |
| Hover/tap card, modal, drawer | Framer Motion                            | Giữ UI animation gần component React        |
| Mascot state machine          | Rive                                     | Sleep/wake/interact states, preload asset   |
| Smooth scroll                 | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion |
| Scroll progress transform     | Framer Motion `useScroll`/`useTransform` | Parallax, scale, progress indicator         |
| SVG scene animation           | SVGator export hoặc CSS keyframes        | Idle loop, decoration sway, path draw       |
| Particle/decoration idle      | CSS keyframes                            | Petal, firefly, steam, sparkle loop         |
| Icon/badge micro-interaction  | CSS transition                           | Hover lift, rotate, glow, bounce            |
| Complex SVG path animation    | SVG stroke-dashoffset + CSS              | Rainbow draw, path reveal, ink stroke       |
| Interactive micro-animation   | Rive                                     | CTA reaction, form success, loading state   |

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

| Nguyên tắc              | Mô tả                                                                             |
| ----------------------- | --------------------------------------------------------------------------------- |
| Tông màu chủ đạo        | Hồng pastel + mint/xanh lá nhạt + vàng ấm + tím lavender                          |
| Cảm giác chung          | Cute, dreamy, ấm áp, nữ tính, nhiều chi tiết dễ thương                            |
| Background-first scene  | Background là lớp asset/animation chính, có chiều sâu và personality rõ           |
| Three-page flow         | Với theme yêu cầu 3 trang, dùng đúng flow `about` → `projects` → `conclution`     |
| SVG-first approach      | Ưu tiên SVG 2D cho mọi decoration, icon, scene, background, mascot                |
| Mascot-driven           | Mỗi theme có mascot/character chính tạo personality riêng                         |
| Animation philosophy    | Mềm, bouncy, organic, gợi cảm giác sống động nhưng không quá nhanh                |
| Icon density            | Nhiều icon nhỏ cute rải rác tạo cảm giác phong phú, handmade                      |
| Card decoration         | Card phải có frame/sticker/pattern/icon/accent nhiều màu, không dùng nền đơn điệu |
| Accessibility           | Text luôn là HTML, contrast đủ trên nền pastel, reduced motion ready              |
| Mobile-first decoration | Giảm decoration trên mobile, giữ mascot và content rõ ràng                        |
| Reusable SVG symbols    | Dùng `<symbol>` và `<use>` để tái sử dụng elements trong SVG                      |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `@rive-app/react-canvas`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js`, `src/app/riveSetup.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa tất cả SVG files và Rive files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Thiết kế mascot Rive file với ít nhất 3 states (idle, interact, special).
- [ ] Tách scene, mascot, animation và content features thành folder riêng.
- [ ] Với theme 3 trang, route/content chính phải là `about`, `projects`, `conclution`.
- [ ] Background scene phải được import/render như layer chính, không chỉ là decorative corner.
- [ ] Card project/about/conclution phải có frame, sticker, pattern, icon hoặc animated accent nhiều màu.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền pastel.
- [ ] Preload Rive files cho hero section, lazy load cho sections khác.

---

_Cập nhật lần cuối: 2026-05-25 — Catalog 5: Cute & Dreamy Feminine themes với tông pastel sáng, nhiều SVG 2D assets, icon cute, mascot, background-first scenes, layout 3 trang about-projects-conclution và animation phong phú._
