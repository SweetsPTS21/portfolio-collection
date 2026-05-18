# 🌊 Catalog 4 — Summer Breeze & Travel Portfolio Themes

> Catalog này tập trung vào portfolio nữ theo hướng mùa hè, biển, du lịch, trải nghiệm.  
> Tông màu xanh mát và hồng pastel, sáng tạo độc đáo, nhiều assets 2D bằng SVG và nhiều animation.  
> Stack dùng: Framer Motion cho UI animation, SVGator/CSS cho SVG animation, Lenis cho smooth scroll.  
> Mỗi theme có bảng màu, typography, layout, animation rules, component notes và danh sách asset SVG nên tự tạo.

---

## UI library / design tool stack

```bash
npm install framer-motion lenis
```

| Library / Tool | Vai trò chính trong catalog này                              | Nên dùng cho                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Framer Motion  | Animation UI React, page transition, card hover, scroll reveal | Section entrance, route transition, shared layout, CTA hover  |
| SVGator        | Tạo animation SVG timeline rồi export SVG/CSS/JS             | Wave, cloud drift, fish swim, plane fly, icon động phức tạp   |
| Lenis          | Smooth scroll có kiểm soát                                    | Portfolio nhiều section, scroll reveal, anchor navigation      |
| CSS Keyframes  | Animation nhẹ, idle loop, particle drift                      | Bubble float, wave sway, cloud drift, sparkle twinkle         |
| Realtime Colors| Tạo và kiểm tra bảng màu xanh-hồng pastel, contrast          | Token màu, theme preview, seasonal variant                    |
| Blush          | Illustration pack theo style summer/travel/beach              | Hero illustration, empty state, about avatar, decor scene     |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; CSS keyframes cho idle decoration; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration.

---

## Danh sách phong cách

| ID                     | Tên phong cách                  | Vibe                                  | Hợp với                              |
| ---------------------- | ------------------------------- | ------------------------------------- | ------------------------------------ |
| `ocean-wave-diary`     | Ocean Wave Diary Portfolio      | Biển, sóng, nhật ký, mát mẻ, dreamy  | Portfolio nữ yêu biển, creative      |
| `tropical-postcard`    | Tropical Postcard Portfolio     | Du lịch nhiệt đới, postcard, tươi    | Portfolio travel, photography, design |
| `sunset-cruise-log`    | Sunset Cruise Log Portfolio     | Hoàng hôn, du thuyền, lãng mạn, ấm  | Portfolio nữ tính, storytelling       |
| `island-adventure-map` | Island Adventure Map Portfolio  | Bản đồ, khám phá, vui, năng động     | Portfolio trải nghiệm, interactive   |
| `coral-reef-gallery`   | Coral Reef Gallery Portfolio    | San hô, đại dương, sâu, huyền bí nhẹ | Portfolio visual, art, illustration  |

---


## 1. `ocean-wave-diary` — Ocean Wave Diary Portfolio

Portfolio như một cuốn nhật ký bên bờ biển: sóng nhẹ, vỏ sò, cát trắng, bọt biển, seagull bay. Theme mát mẻ, dreamy, phù hợp cho nữ yêu biển và muốn portfolio mang cảm giác thư giãn nhưng vẫn chuyên nghiệp.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                          |
| ----------- | -------------------------------------------------------------- |
| Cảm xúc     | Thư giãn, mơ mộng, mát mẻ, nhẹ nhàng, nữ tính                 |
| Hình khối   | Card bo 16–20px, wave edge, shell badge, sand texture nhẹ      |
| Không gian  | Nền trắng xanh nhạt, wave layer dưới cùng, foam dots           |
| Chuyển động | Wave sway, bubble float, seagull glide, shell rotate nhẹ       |
| Điểm nhấn   | Wave SVG lớn, seashell sticker, foam dots, diary page, anchor  |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F0FAFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#5BB8E8",
        colorTextBase: "#1B3A4B",
        colorTextSecondary: "#5A7D8F",
        colorSuccess: "#6FD9B5",
        colorWarning: "#FFD88A",
        colorError: "#FF7A8A",
        colorBorder: "#B8E4F8",
        borderRadius: 18,
        fontFamily: "'Quicksand', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --ocean-blue: #5BB8E8;
// --foam-white: #F0FAFF;
// --coral-pink: #FF9FB8;
// --sand-warm: #FFE8C8;
// --seafoam-green: #6FD9B5;
// --deep-navy: #1B3A4B;
// --shell-lavender: #C8B8FF;
```

### Typography

- **Heading:** `Quicksand` tròn, mềm, gợi cảm giác biển và gió.
- **Body:** `Nunito` dễ đọc, thân thiện, hợp với tone nhẹ nhàng.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                |
| --------------- | -------------------------------------------------------------------- |
| Framer Motion   | Wave card hover, diary page flip, route transition như lật trang      |
| SVGator         | Wave sway loop, seagull glide path, bubble rise, foam particle       |
| Lenis           | Smooth scroll giữa diary pages, anchor tới sections                  |
| CSS Keyframes   | Bubble idle float, wave gentle sway, shell rotate nhẹ                |
| Realtime Colors | Tạo palette ocean-blue/coral-pink/seafoam có contrast tốt            |
| Blush           | Illustration beach girl/seashell cho hero hoặc about section         |

### Layout ideas

- **Hero:** Wave SVG lớn ở dưới viewport, tên nằm như tiêu đề nhật ký, seagull bay ngang.
- **About:** Diary page card với sand texture nhẹ, shell decoration ở góc.
- **Projects:** Mỗi project là một trang nhật ký có wave divider giữa các entry.
- **Skills:** Seashell collection: mỗi nhóm skill là một loại vỏ sò khác nhau.
- **Contact:** Message in a bottle CTA, nút gửi có bubble trail animation.

### Animation rules

| Sự kiện          | Effect                                      | Thư viện             |
| ---------------- | ------------------------------------------- | -------------------- |
| Page load        | Wave rise từ dưới + content fade in         | Framer Motion        |
| Wave background  | Gentle sway loop 6–10s                      | CSS keyframes        |
| Bubble idle      | Float lên chậm, opacity fade out ở top      | CSS keyframes        |
| Card hover       | Lift + subtle wave shadow                   | CSS transition       |
| Section entrance | Slide-up + fade, stagger 0.1s giữa items   | Framer Motion        |
| Seagull          | Glide path từ trái sang phải, loop          | SVG/CSS animation    |
| Shell decoration | Rotate ±5deg chậm                          | CSS keyframes        |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                     ← Ocean diary shell
│   ├── routes.js                   ← shore, diary, collection, bottle
│   └── theme.js
├── pages/
│   ├── OceanShorePage.jsx          ← Hero với wave và seagull
│   ├── DiaryProjectsPage.jsx       ← Projects dạng diary entries
│   ├── ShellCollectionPage.jsx     ← Skills dạng seashell grid
│   └── BottleContactPage.jsx       ← Contact message in a bottle
├── features/
│   ├── ocean-scene/
│   │   ├── WaveBackground.jsx
│   │   ├── BubbleLayer.jsx
│   │   ├── SeagullGlide.jsx
│   │   └── FoamParticles.jsx
│   ├── diary-entries/
│   │   ├── DiaryEntryCard.jsx
│   │   ├── DiaryPageFlip.jsx
│   │   └── WaveDivider.jsx
│   └── shell-skills/
│       ├── ShellGrid.jsx
│       └── ShellBadge.jsx
├── components/
│   ├── layout/                     ← Nav dạng anchor bar, page transition
│   └── ui/                         ← WaveButton, ShellCard, FoamBadge, DiaryTag
└── assets/ocean-wave-diary/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo            | Nội dung cần vẽ                                    | Dùng cho               | Gợi ý kỹ thuật                                     |
| -------------------------- | -------------------------------------------------- | ---------------------- | -------------------------------------------------- |
| `wave-layers.svg`          | 3–4 lớp sóng chồng nhau, màu xanh gradient        | Background dưới cùng   | Dùng path curve, opacity khác nhau mỗi layer       |
| `seashell-collection.svg`  | Conch, scallop, starfish, sand dollar, coral piece | Skill badges/decoration| Mỗi shell là symbol, stroke mềm, fill pastel       |
| `bubble-set.svg`           | Bubble nhiều cỡ, có highlight trắng                | Floating particles     | Circle + ellipse highlight, opacity 0.3–0.6        |
| `seagull-silhouette.svg`   | 2–3 seagull poses bay                              | Hero animation         | Path đơn giản, animate translateX + slight wave    |
| `foam-dots-pattern.svg`    | Chấm foam nhỏ rải rác                             | Section divider/bg     | SVG pattern, opacity thấp, random size             |
| `diary-page-frame.svg`     | Khung trang nhật ký có gáy sách và line rule       | Project cards          | Rect + line pattern, corner fold nhẹ               |
| `bottle-message.svg`       | Chai thủy tinh, cork, cuộn giấy bên trong          | Contact CTA            | Glass effect bằng opacity gradient                 |
| `anchor-rope-icons.svg`    | Anchor, rope knot, compass, helm wheel             | Nav icons/decoration   | Icon 24x24, stroke 2px, currentColor              |

---


## 2. `tropical-postcard` — Tropical Postcard Portfolio

Portfolio như một bộ sưu tập postcard từ các chuyến du lịch nhiệt đới: lá cọ, hoa plumeria, flamingo, cocktail, stamp. Tươi sáng, rực rỡ nhưng vẫn giữ tone xanh mát và hồng pastel chủ đạo.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                           |
| ----------- | --------------------------------------------------------------- |
| Cảm xúc     | Tươi mới, vui, năng lượng, tropical, nữ tính                    |
| Hình khối   | Postcard card bo 12px, stamp badge, palm leaf frame, pill tag   |
| Không gian  | Nền trắng ấm, tropical leaf border, postcard grid               |
| Chuyển động | Leaf sway, flamingo bob, stamp pop, card tilt, plane fly across |
| Điểm nhấn   | Palm leaf SVG, plumeria flower, flamingo, postcard stamp, plane |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F5FDFC",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF85A8",
        colorTextBase: "#1A3C3A",
        colorTextSecondary: "#4D7A78",
        colorSuccess: "#4DD9B4",
        colorWarning: "#FFD166",
        colorError: "#FF6B7A",
        colorBorder: "#B8F0E8",
        borderRadius: 12,
        fontFamily: "'Josefin Sans', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --tropical-pink: #FF85A8;
// --palm-green: #4DD9B4;
// --ocean-teal: #5BC8C0;
// --sunset-gold: #FFD166;
// --flamingo-coral: #FF9FB0;
// --sky-light: #E0F7FA;
// --coconut-cream: #FFF8E8;
```

### Typography

- **Heading:** `Josefin Sans` thanh lịch, hiện đại, gợi cảm giác travel magazine.
- **Body:** `Nunito` mềm, dễ đọc, cân bằng với decoration nhiều.

```css
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Postcard tilt hover, stamp pop entrance, route transition slide       |
| SVGator         | Palm leaf sway, flamingo bob, plane fly path, flower bloom            |
| Lenis           | Smooth scroll qua postcard gallery và destination sections            |
| CSS Keyframes   | Leaf gentle sway, cloud drift, flamingo idle bob                      |
| Realtime Colors | Tạo palette tropical-pink/palm-green/sunset-gold hài hòa             |
| Blush           | Illustration tropical girl/travel scene cho hero                      |

### Layout ideas

- **Hero:** Tropical frame với palm leaves hai bên, tên như destination title trên postcard.
- **About:** Passport page card với stamp collection và photo placeholder.
- **Projects:** Postcard grid, mỗi project là một postcard từ destination khác nhau.
- **Skills:** Luggage tag badges, mỗi nhóm skill là một tag màu khác nhau.
- **Contact:** "Send a postcard" CTA với stamp animation và plane fly.

### Animation rules

| Sự kiện          | Effect                                       | Thư viện          |
| ---------------- | -------------------------------------------- | ----------------- |
| Page load        | Postcard slide-in từ các hướng + stamp pop   | Framer Motion     |
| Palm leaf        | Gentle sway 5–8s loop                        | CSS keyframes     |
| Flamingo         | Bob up-down nhẹ 3s loop                      | CSS keyframes     |
| Card hover       | Tilt 3D nhẹ (perspective) + shadow lift      | CSS transform     |
| Stamp entrance   | Scale 0→1 + rotate nhẹ, stagger             | Framer Motion     |
| Plane decoration | Fly across viewport, loop 15–20s             | SVG/CSS animation |
| Section entrance | Fade + slide-up, leaf frame grow in          | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                      ← Tropical postcard shell
│   ├── routes.js                    ← destinations, postcards, passport, send
│   └── theme.js
├── pages/
│   ├── TropicalHeroPage.jsx         ← Hero với palm frame và destination title
│   ├── PostcardProjectsPage.jsx     ← Projects dạng postcard gallery
│   ├── PassportAboutPage.jsx        ← About dạng passport/stamp page
│   └── SendPostcardContactPage.jsx  ← Contact send postcard
├── features/
│   ├── tropical-scene/
│   │   ├── PalmLeafFrame.jsx
│   │   ├── FlamingoDecoration.jsx
│   │   ├── TropicalFlowerLayer.jsx
│   │   └── PlaneFlyAcross.jsx
│   ├── postcard-gallery/
│   │   ├── PostcardGrid.jsx
│   │   ├── PostcardCard.jsx
│   │   └── PostcardDetailModal.jsx
│   └── passport-stamps/
│       ├── PassportPage.jsx
│       ├── StampBadge.jsx
│       └── LuggageTag.jsx
├── components/
│   ├── layout/                      ← Tropical nav, page transition wrapper
│   └── ui/                          ← StampButton, PostcardFrame, LeafDivider, TagBadge
└── assets/tropical-postcard/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                      | Dùng cho               | Gợi ý kỹ thuật                                      |
| ---------------------------- | ---------------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `palm-leaf-frame.svg`        | Lá cọ, monstera, banana leaf tạo frame hai bên       | Hero/section frame     | Path organic, gradient xanh, animate sway nhẹ       |
| `tropical-flowers.svg`       | Plumeria, hibiscus, bird of paradise                 | Decoration/corner      | Fill pastel pink/coral, petal layer rõ ràng          |
| `flamingo-set.svg`           | Flamingo đứng, flamingo cúi, flamingo float          | Decoration/about       | Silhouette đơn giản, fill coral-pink gradient        |
| `postcard-stamp-set.svg`     | Stamp nhiều kiểu: circle, rect, wave edge            | Project cards/badges   | Border dashed, text path, màu đổi bằng CSS          |
| `travel-plane-path.svg`      | Máy bay nhỏ + đường bay dashed                       | Hero/section animation | Animate along path, plane rotate theo tangent       |
| `luggage-tag-shapes.svg`     | Tag hành lý nhiều hình: rect, circle, oval           | Skill badges           | Hole punch detail, string line, fill nhiều màu      |
| `passport-page-frame.svg`    | Khung passport page có stamp area và photo slot      | About section          | Rect với rounded corner, line pattern bên trong     |
| `coconut-cocktail-icons.svg` | Cocktail, coconut, sunglasses, camera, suitcase      | Nav icons/decoration   | Icon 24x24, stroke 2px, currentColor               |

---


## 3. `sunset-cruise-log` — Sunset Cruise Log Portfolio

Portfolio như một cuốn nhật ký trên du thuyền lúc hoàng hôn: gradient cam-hồng-tím, sóng nhẹ, đèn lồng, dây thừng, la bàn. Lãng mạn, ấm áp nhưng vẫn giữ tone xanh mát ở phần biển và hồng pastel ở phần trời.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Lãng mạn, ấm áp, dreamy, storytelling, nữ tính                   |
| Hình khối   | Card bo 14px, rope border, lantern badge, compass rose accent    |
| Không gian  | Gradient sky (hồng-cam-tím nhạt) ở hero, biển xanh mát ở dưới   |
| Chuyển động | Wave gentle, lantern glow pulse, compass rotate, cloud drift     |
| Điểm nhấn   | Sunset gradient, lantern SVG, rope knot, compass, ship wheel     |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFF5F0",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#F2789F",
        colorTextBase: "#2D2040",
        colorTextSecondary: "#6B5A7A",
        colorSuccess: "#5EC4B8",
        colorWarning: "#FFD08A",
        colorError: "#FF6B6B",
        colorBorder: "#FCCDE0",
        borderRadius: 14,
        fontFamily: "'Playfair Display', 'Nunito', serif",
    },
};

// CSS Variables
// --sunset-pink: #F2789F;
// --horizon-orange: #FFB088;
// --twilight-purple: #C8A8E8;
// --ocean-teal: #5EC4B8;
// --lantern-gold: #FFD08A;
// --deep-plum: #2D2040;
// --cloud-blush: #FFF0F5;
```

### Typography

- **Heading:** `Playfair Display` thanh lịch, có chất editorial/journal.
- **Body:** `Nunito` mềm, dễ đọc, cân bằng với heading serif.

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Framer Motion   | Log entry reveal, lantern glow, compass spin, route transition fade    |
| SVGator         | Wave loop, cloud drift, lantern swing, rope knot draw                  |
| Lenis           | Smooth scroll cho cruise log timeline dọc                              |
| CSS Keyframes   | Lantern glow pulse, star twinkle, wave gentle sway                     |
| Realtime Colors | Tạo palette sunset-pink/ocean-teal/lantern-gold cân bằng warm và cool |
| Blush           | Illustration cruise/sunset girl cho hero hoặc about                    |

### Layout ideas

- **Hero:** Sunset gradient sky, silhouette du thuyền ở horizon, tên như captain's log title.
- **About:** Captain's profile card với compass rose decoration và rope border.
- **Projects:** Cruise log entries theo timeline dọc, mỗi entry có date stamp và lantern icon.
- **Skills:** Navigation chart: mỗi nhóm skill là một điểm trên bản đồ hải trình.
- **Contact:** "Send a signal" CTA với lantern glow animation.

### Animation rules

| Sự kiện          | Effect                                        | Thư viện          |
| ---------------- | --------------------------------------------- | ----------------- |
| Page load        | Sunset gradient reveal top-down + ship fade   | Framer Motion     |
| Wave background  | Gentle sway 8–12s loop                        | CSS keyframes     |
| Lantern          | Glow pulse opacity 0.6–1.0, 3s loop           | CSS keyframes     |
| Cloud drift      | TranslateX slow loop 20–30s                   | CSS keyframes     |
| Compass hover    | Rotate 360deg smooth                          | CSS transition    |
| Log entry reveal | Slide-left + fade, stagger 0.15s              | Framer Motion     |
| Star twinkle     | Opacity + scale pulse, random delay           | CSS keyframes     |
| Section entrance | Fade + translateY(20px)                       | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                      ← Cruise log shell
│   ├── routes.js                    ← deck, log, chart, signal
│   └── theme.js
├── pages/
│   ├── SunsetDeckPage.jsx           ← Hero sunset với ship silhouette
│   ├── CruiseLogProjectsPage.jsx    ← Projects dạng log timeline
│   ├── NavigationChartPage.jsx      ← Skills dạng navigation chart
│   └── SignalContactPage.jsx        ← Contact send signal
├── features/
│   ├── sunset-scene/
│   │   ├── SunsetGradientSky.jsx
│   │   ├── ShipSilhouette.jsx
│   │   ├── WaveLayer.jsx
│   │   ├── CloudDrift.jsx
│   │   └── StarTwinkle.jsx
│   ├── cruise-log/
│   │   ├── LogTimeline.jsx
│   │   ├── LogEntryCard.jsx
│   │   └── DateStampBadge.jsx
│   └── navigation/
│       ├── CompassRose.jsx
│       ├── ChartSkillMap.jsx
│       └── LanternCTA.jsx
├── components/
│   ├── layout/                      ← Ship deck nav, page transition
│   └── ui/                          ← LanternButton, RopeCard, CompassBadge, LogTag
└── assets/sunset-cruise-log/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                                       | Dùng cho               | Gợi ý kỹ thuật                                       |
| --------------------------- | ----------------------------------------------------- | ---------------------- | ---------------------------------------------------- |
| `sunset-sky-gradient.svg`   | Gradient sky hồng-cam-tím, có cloud silhouette        | Hero background        | LinearGradient nhiều stop, cloud path opacity nhẹ    |
| `ship-silhouette.svg`       | Du thuyền/sailboat silhouette đơn giản                | Hero focal point       | Path đơn sắc, có thể animate translateY nhẹ          |
| `lantern-set.svg`           | Đèn lồng giấy nhiều kiểu, có dây treo                | Decoration/CTA         | Glow bằng radialGradient, animate opacity            |
| `compass-rose.svg`          | Compass rose chi tiết, có N/S/E/W                     | About/skills decoration| Tách needle riêng để animate rotate                  |
| `rope-knot-borders.svg`     | Rope border, knot corner, rope divider                | Card frame/divider     | Path stroke round cap, pattern repeat                |
| `wave-gentle.svg`           | 2–3 lớp sóng nhẹ, tone xanh mát                      | Background bottom      | Path curve, opacity layer, animate translateX        |
| `cruise-log-icons.svg`      | Anchor, helm, telescope, map, flag, bell              | Nav/timeline icons     | Icon 24x24, stroke 2px, currentColor                |
| `star-constellation.svg`    | Chòm sao nhỏ, star dots connected by lines            | Night sky decoration   | Circle + line, animate opacity twinkle              |

---


## 4. `island-adventure-map` — Island Adventure Map Portfolio

Portfolio như một bản đồ kho báu trên đảo: path dẫn qua các điểm, icon landmark, treasure chest, palm tree, volcano mini. Vui, năng động, interactive, phù hợp cho nữ thích khám phá và muốn portfolio mang tính gamified.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Vui, năng động, khám phá, tò mò, adventurous                     |
| Hình khối   | Map card, treasure badge, path line, island blob, flag marker    |
| Không gian  | Nền xanh biển nhạt, island blobs, dashed path connecting points |
| Chuyển động | Path draw, flag wave, treasure bounce, marker pop, boat sail     |
| Điểm nhấn   | Treasure map path, island blobs, X marks, palm tree, compass     |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F0F9FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#38BDF8",
        colorTextBase: "#1E3A5F",
        colorTextSecondary: "#5A8BA8",
        colorSuccess: "#6EE7B7",
        colorWarning: "#FCD34D",
        colorError: "#FB7185",
        colorBorder: "#BAE6FD",
        borderRadius: 16,
        fontFamily: "'Fredoka', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --map-blue: #38BDF8;
// --island-green: #6EE7B7;
// --treasure-gold: #FCD34D;
// --coral-pink: #FB7185;
// --sand-beige: #FEF3C7;
// --deep-ocean: #1E3A5F;
// --palm-emerald: #34D399;
```

### Typography

- **Heading:** `Fredoka` tròn, vui, gợi cảm giác adventure/game.
- **Body:** `Nunito` mềm, dễ đọc, hợp với nhiều icon và decoration.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Framer Motion   | Marker pop entrance, treasure bounce, island card spring, route slide  |
| SVGator         | Path draw animation, flag wave, boat sail along path, X mark reveal   |
| Lenis           | Smooth scroll dọc theo adventure map                                   |
| CSS Keyframes   | Flag wave loop, palm sway, water ripple, treasure glow pulse           |
| Realtime Colors | Tạo palette map-blue/island-green/treasure-gold tươi và vui           |
| Blush           | Illustration explorer girl/island scene cho hero                       |

### Layout ideas

- **Hero:** Bản đồ đảo lớn bằng SVG, các landmark là entry point tới sections.
- **About:** Explorer profile card dạng adventure ID, có level/XP decoration.
- **Projects:** Island stops trên map path, mỗi project là một đảo/landmark.
- **Skills:** Treasure chest mở ra reveal skill gems/coins theo nhóm.
- **Contact:** "Find the treasure" CTA, X mark animation khi hover.

### Animation rules

| Sự kiện          | Effect                                         | Thư viện          |
| ---------------- | ---------------------------------------------- | ----------------- |
| Page load        | Map path draw từ start → end, markers pop in   | SVG + Framer      |
| Path draw        | Stroke-dashoffset animate 2–3s                 | SVG/CSS animation |
| Flag decoration  | Wave sway 2s loop                              | CSS keyframes     |
| Palm tree        | Gentle sway 4–6s loop                          | CSS keyframes     |
| Marker hover     | Bounce + glow ring                             | CSS transition    |
| Treasure reveal  | Chest open + gems scatter                      | Framer Motion     |
| Island card      | Float idle + spring on hover                   | Framer Motion     |
| Section entrance | Marker pop (scale 0→1) + label fade            | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Adventure map shell
│   ├── routes.js                     ← map, islands, treasure, signal-fire
│   └── theme.js
├── pages/
│   ├── AdventureMapPage.jsx          ← Hero bản đồ với path và landmarks
│   ├── IslandProjectsPage.jsx        ← Projects dạng island stops
│   ├── TreasureSkillsPage.jsx        ← Skills dạng treasure chest
│   └── SignalFireContactPage.jsx     ← Contact signal fire
├── features/
│   ├── map-scene/
│   │   ├── IslandMapSVG.jsx
│   │   ├── MapPathDraw.jsx
│   │   ├── LandmarkMarker.jsx
│   │   ├── PalmTreeDecoration.jsx
│   │   └── FlagWave.jsx
│   ├── island-projects/
│   │   ├── IslandGrid.jsx
│   │   ├── IslandCard.jsx
│   │   └── IslandDetailModal.jsx
│   └── treasure-skills/
│       ├── TreasureChest.jsx
│       ├── SkillGemBadge.jsx
│       └── ChestOpenAnimation.jsx
├── components/
│   ├── layout/                       ← Map nav, compass indicator, page transition
│   └── ui/                           ← MarkerButton, IslandBlob, TreasureBadge, FlagTag
└── assets/island-adventure-map/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                        | Dùng cho               | Gợi ý kỹ thuật                                        |
| ---------------------------- | ------------------------------------------------------ | ---------------------- | ----------------------------------------------------- |
| `island-map-full.svg`        | Bản đồ đảo với path dashed, landmarks, ocean waves     | Hero/main map          | ViewBox lớn, path stroke-dasharray cho draw animation |
| `island-blobs.svg`           | 5–6 island blob shapes khác nhau, có cây và cát        | Project cards          | Organic blob path, fill gradient xanh/beige           |
| `treasure-chest.svg`         | Chest đóng và chest mở, gems bên trong                 | Skills section         | Tách lid riêng để animate open, gems là symbols       |
| `landmark-markers.svg`       | Flag, lighthouse, volcano, hut, dock, cave             | Map markers            | Icon 32x32, fill bright, có pin/shadow                |
| `palm-tree-set.svg`          | Palm tree nhiều kiểu, coconut tree, bush               | Decoration             | Tách trunk và leaves để animate sway riêng            |
| `map-path-elements.svg`      | Dashed path, X mark, arrow, footprint trail            | Map connection         | Stroke dashed, animate stroke-dashoffset              |
| `adventure-icons.svg`        | Compass, binoculars, backpack, map scroll, campfire    | Nav/badge icons        | Icon 24x24, stroke 2px, currentColor                 |
| `water-ripple-pattern.svg`   | Ripple circles, wave lines cho ocean area              | Background texture     | Pattern repeat, opacity thấp, animate scale nhẹ      |

---


## 5. `coral-reef-gallery` — Coral Reef Gallery Portfolio

Portfolio như một gallery dưới đại dương: san hô, cá nhiệt đới, bong bóng, ánh sáng xuyên nước, rong biển. Huyền bí nhẹ nhưng vẫn sáng và nữ tính, phù hợp cho portfolio visual/art muốn tạo ấn tượng mạnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Huyền bí nhẹ, sáng, nữ tính, visual, immersive                    |
| Hình khối   | Coral frame, bubble badge, fish card, anemone border, pearl dot  |
| Không gian  | Gradient xanh biển sáng → trắng, light ray overlay, coral frame  |
| Chuyển động | Fish swim, bubble rise, coral sway, light ray shimmer, jellyfish |
| Điểm nhấn   | Coral reef SVG, tropical fish, jellyfish, pearl, sea anemone     |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F0FBFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF8EC6",
        colorTextBase: "#152D3B",
        colorTextSecondary: "#4A7A8F",
        colorSuccess: "#5EEBC4",
        colorWarning: "#FFE08A",
        colorError: "#FF7A8A",
        colorBorder: "#A8E8F8",
        borderRadius: 20,
        fontFamily: "'Quicksand', 'DM Sans', sans-serif",
    },
};

// CSS Variables
// --coral-pink: #FF8EC6;
// --reef-teal: #5EEBC4;
// --deep-aqua: #38B2D8;
// --pearl-white: #F8FDFF;
// --anemone-purple: #C8A8FF;
// --fish-gold: #FFE08A;
// --ocean-deep: #152D3B;
// --jellyfish-pink: #FFB8D8;
```

### Typography

- **Heading:** `Quicksand` tròn, mềm, gợi cảm giác nước và flow.
- **Body:** `DM Sans` clean, hiện đại, dễ đọc trên nền gradient.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                   |
| --------------- | ----------------------------------------------------------------------- |
| Framer Motion   | Fish card swim entrance, coral frame grow, gallery modal, route fade    |
| SVGator         | Fish swim path, jellyfish pulse, coral sway, light ray shimmer         |
| Lenis           | Smooth scroll cho underwater gallery, parallax depth layers             |
| CSS Keyframes   | Bubble rise loop, coral gentle sway, light ray flicker, fish idle swim |
| Realtime Colors | Tạo palette coral-pink/reef-teal/deep-aqua sáng nhưng có depth         |
| Blush           | Illustration underwater/mermaid girl cho hero hoặc about               |

### Layout ideas

- **Hero:** Underwater scene với light rays từ trên, coral frame hai bên, fish swim ngang.
- **About:** Pearl shell card mở ra reveal profile, có bubble decoration.
- **Projects:** Gallery dạng aquarium: mỗi project là một fish/coral specimen card.
- **Skills:** Sea anemone clusters: mỗi nhóm skill là một cụm anemone màu khác nhau.
- **Contact:** "Drop a pearl" CTA, pearl drop animation vào shell.

### Animation rules

| Sự kiện          | Effect                                          | Thư viện          |
| ---------------- | ----------------------------------------------- | ----------------- |
| Page load        | Light rays fade in + coral grow from bottom     | Framer Motion     |
| Bubble idle      | Rise slow, wobble nhẹ, fade out ở top           | CSS keyframes     |
| Fish swim        | Swim path horizontal, slight up-down wave       | SVG/CSS animation |
| Jellyfish        | Pulse body + tentacle trail, drift slow         | CSS keyframes     |
| Coral sway       | Gentle sway 5–8s loop                           | CSS keyframes     |
| Light rays       | Shimmer opacity 0.3–0.7, slow sweep             | CSS keyframes     |
| Card hover       | Bubble burst + card lift + glow border          | CSS transition    |
| Section entrance | Fade + scale(0.96→1) + bubble pop stagger       | Framer Motion     |
| Pearl CTA        | Pearl drop + ripple ring expand                 | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                       ← Coral reef gallery shell
│   ├── routes.js                     ← reef, aquarium, anemone, pearl-drop
│   └── theme.js
├── pages/
│   ├── CoralReefHeroPage.jsx         ← Hero underwater scene
│   ├── AquariumProjectsPage.jsx      ← Projects dạng aquarium gallery
│   ├── AnemoneSkillsPage.jsx         ← Skills dạng anemone clusters
│   └── PearlDropContactPage.jsx      ← Contact pearl drop
├── features/
│   ├── underwater-scene/
│   │   ├── UnderwaterBackground.jsx
│   │   ├── LightRayOverlay.jsx
│   │   ├── BubbleRiseLayer.jsx
│   │   ├── CoralFrameGrow.jsx
│   │   └── FishSwimLayer.jsx
│   ├── aquarium-gallery/
│   │   ├── AquariumGrid.jsx
│   │   ├── SpecimenCard.jsx
│   │   └── SpecimenDetailModal.jsx
│   ├── jellyfish-decoration/
│   │   ├── JellyfishFloat.jsx
│   │   └── JellyfishPulse.jsx
│   └── anemone-skills/
│       ├── AnemoneCluster.jsx
│       └── AnemoneSkillBadge.jsx
├── components/
│   ├── layout/                       ← Underwater nav, depth parallax wrapper
│   └── ui/                           ← PearlButton, CoralCard, BubbleBadge, FishTag
└── assets/coral-reef-gallery/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                         | Dùng cho               | Gợi ý kỹ thuật                                         |
| ---------------------------- | ------------------------------------------------------- | ---------------------- | ------------------------------------------------------ |
| `coral-reef-frame.svg`       | Coral branches, fan coral, brain coral tạo frame        | Hero/section frame     | Path organic, gradient hồng-tím, nhiều layer depth     |
| `tropical-fish-set.svg`      | 5–6 loại cá nhiệt đới: clownfish, tang, angel, puffer  | Decoration/cards       | Mỗi fish là symbol, fill bright, animate swim path     |
| `jellyfish-collection.svg`   | Jellyfish nhiều kiểu: bell, moon, comb                  | Floating decoration    | Body translucent (opacity), tentacle path wavy         |
| `bubble-variety.svg`         | Bubble nhiều cỡ, có light reflection highlight          | Particle layer         | Circle + ellipse highlight, opacity gradient           |
| `light-ray-overlay.svg`      | Tia sáng xuyên nước, cone shape từ trên xuống          | Background overlay     | LinearGradient white→transparent, opacity animate      |
| `sea-anemone-set.svg`        | Anemone nhiều màu: pink, purple, teal, gold            | Skill clusters         | Tentacle paths, animate sway, fill gradient            |
| `pearl-shell.svg`            | Shell mở/đóng, pearl bên trong, có shimmer             | Contact CTA/about      | Tách shell halves để animate open, pearl radialGradient|
| `seaweed-kelp.svg`           | Rong biển, kelp, sea grass nhiều kiểu                  | Background decoration  | Path wavy, animate sway, opacity layer                 |
| `underwater-icons.svg`       | Anchor, diving mask, trident, seahorse, starfish       | Nav/badge icons        | Icon 24x24, stroke 2px, currentColor                  |

---


## Quy chuẩn triển khai cho Catalog 4

### Motion architecture

```txt
src/
├── app/
│   ├── motionConfig.js       ← Framer Motion variants, spring, easing, reduced motion
│   └── lenisSetup.js         ← Smooth scroll setup + cleanup
├── features/
│   ├── <theme-scene>/        ← SVG scene, background layers, decoration components
│   ├── <theme-animation>/    ← SVG animated elements, particle layers
│   └── <theme-content>/      ← Content-specific features (gallery, timeline, map...)
├── components/
│   ├── layout/               ← Route/page shell, navigation, transition wrapper
│   └── ui/                   ← Buttons, cards, badges, modal, drawer
└── assets/<theme-id>/        ← SVG files, pattern files, icon sets
```

### Phân vai tool rõ ràng

| Việc cần làm                  | Tool nên dùng                         | Ghi chú triển khai                             |
| ----------------------------- | ------------------------------------- | ---------------------------------------------- |
| Page/route transition         | Framer Motion                         | Dùng variants/AnimatePresence                  |
| Hover/tap card, modal, drawer | Framer Motion                         | Giữ UI animation gần component React           |
| Smooth scroll                 | Lenis                                 | Cleanup khi unmount, tắt khi reduced motion    |
| Scroll progress transform     | Framer Motion `useScroll`/`useTransform` | Parallax, scale, progress indicator         |
| SVG scene animation           | SVGator export hoặc CSS keyframes     | Idle loop, decoration sway, path draw          |
| Particle/decoration idle      | CSS keyframes                         | Bubble, wave, cloud, fish swim loop            |
| Icon/badge micro-interaction  | CSS transition                        | Hover lift, rotate, glow                       |
| Complex SVG path animation    | SVG stroke-dashoffset + CSS           | Map path draw, underline, rope draw            |

### Performance rules

- Lazy load SVG scene components bằng React.lazy + Suspense.
- Không render quá nhiều animated SVG elements cùng lúc (giới hạn 20–30 animated items visible).
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

### Nguyên tắc thiết kế chung cho Catalog 4

| Nguyên tắc                | Mô tả                                                                |
| ------------------------- | -------------------------------------------------------------------- |
| Tông màu chủ đạo          | Xanh mát (ocean/teal/sky) + hồng pastel (coral/blush/rose)          |
| Cảm giác chung            | Mùa hè, biển, du lịch, trải nghiệm, tự do, nữ tính                  |
| SVG-first approach        | Ưu tiên SVG 2D cho mọi decoration, icon, scene, background          |
| Animation philosophy      | Mềm, organic, gợi cảm giác nước/gió/tự nhiên, không quá nhanh      |
| Accessibility             | Text luôn là HTML, contrast đủ trên nền pastel, reduced motion ready |
| Mobile-first decoration   | Giảm decoration trên mobile, giữ content rõ ràng                     |
| Reusable SVG symbols      | Dùng `<symbol>` và `<use>` để tái sử dụng elements trong SVG        |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa tất cả SVG files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Tách scene, animation và content features thành folder riêng.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi SVG animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền pastel.

---

_Cập nhật lần cuối: 2026-05-18 — Catalog 4: Summer Breeze & Travel themes với tông xanh mát, hồng pastel, nhiều SVG 2D assets và animation._
