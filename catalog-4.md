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

| Library / Tool  | Vai trò chính trong catalog này                                | Nên dùng cho                                                 |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| Framer Motion   | Animation UI React, page transition, card hover, scroll reveal | Section entrance, route transition, shared layout, CTA hover |
| SVGator         | Tạo animation SVG timeline rồi export SVG/CSS/JS               | Wave, cloud drift, fish swim, plane fly, icon động phức tạp  |
| Lenis           | Smooth scroll có kiểm soát                                     | Portfolio nhiều section, scroll reveal, anchor navigation    |
| CSS Keyframes   | Animation nhẹ, idle loop, particle drift                       | Bubble float, wave sway, cloud drift, sparkle twinkle        |
| Realtime Colors | Tạo và kiểm tra bảng màu xanh-hồng pastel, contrast            | Token màu, theme preview, seasonal variant                   |
| Blush           | Illustration pack theo style summer/travel/beach               | Hero illustration, empty state, about avatar, decor scene    |

Nguyên tắc phân vai: Framer Motion điều khiển UI trong React; SVGator dùng để sản xuất SVG animation có thể tái dùng; Lenis chỉ xử lý scroll; CSS keyframes cho idle decoration; Realtime Colors hỗ trợ chọn palette; Blush hỗ trợ nguồn illustration.

---

## Danh sách phong cách

| ID                       | Tên phong cách                   | Vibe                                                | Hợp với                                     |
| ------------------------ | -------------------------------- | --------------------------------------------------- | ------------------------------------------- |
| `ocean-wave-diary`       | Ocean Wave Diary Portfolio       | Biển, sóng, nhật ký, mát mẻ, dreamy                 | Portfolio nữ yêu biển, creative             |
| `tropical-postcard`      | Tropical Postcard Portfolio      | Du lịch nhiệt đới, postcard, tươi                   | Portfolio travel, photography, design       |
| `sunset-cruise-log`      | Sunset Cruise Log Portfolio      | Hoàng hôn, du thuyền, lãng mạn, ấm                  | Portfolio nữ tính, storytelling             |
| `island-adventure-map`   | Island Adventure Map Portfolio   | Bản đồ, khám phá, vui, năng động                    | Portfolio trải nghiệm, interactive          |
| `coral-reef-gallery`     | Coral Reef Gallery Portfolio     | San hô, đại dương, sâu, huyền bí nhẹ                | Portfolio visual, art, illustration         |
| `seaside-train-ticket`   | Seaside Train Ticket Portfolio   | Tàu ven biển, vé giấy, ga nhỏ, cửa sổ nhìn ra biển  | Portfolio kể chuyện, travel, career journey |
| `lagoon-kayak-adventure` | Lagoon Kayak Adventure Portfolio | Kayak lagoon, nước xanh, bản đồ chèo, hoa nhiệt đới | Portfolio năng động, outdoor, experience    |
| `beach-market-stroll`    | Beach Market Stroll Portfolio    | Chợ ven biển, giỏ cói, trái cây, quầy souvenir      | Portfolio lifestyle, business, creative     |
| `sailboat-regatta-diary` | Sailboat Regatta Diary Portfolio | Thuyền buồm, cờ hiệu, gió biển, nhật ký hành trình  | Portfolio nữ tính, leadership, travel       |
| `lighthouse-photo-trip`  | Lighthouse Photo Trip Portfolio  | Hải đăng, máy ảnh, film strip, chuyến đi ven biển   | Portfolio photography, media, design        |

---

## 1. `ocean-wave-diary` — Ocean Wave Diary Portfolio

Portfolio như một cuốn nhật ký mở ra vào chiều hoàng hôn trên biển: bầu trời xanh dương nhạt chuyển hồng, mặt trời vàng thấp trên đường chân trời, sóng phản chiếu ánh nắng, mây pastel, bờ cát, vỏ sò và những trang diary mềm mại. Theme nhiều cảnh vật, sáng, thơ, nữ tính, phù hợp cho portfolio muốn có cảm giác thư giãn nhưng vẫn chỉn chu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Cảm xúc     | Dịu, mơ mộng, trong trẻo, lãng mạn, cảm giác hoàng hôn bình yên        |
| Hình khối   | Card bo 18–24px, wave edge, diary paper, sun stamp, shell badge        |
| Không gian  | Nền xanh dương nhạt, mây hồng, mặt trời vàng, sóng nhiều lớp, bờ cát   |
| Chuyển động | Wave sway, sun glow, cloud drift, sparkle shimmer, seagull glide       |
| Điểm nhấn   | Sunset hero scene, wave SVG lớn, reflection path, seashell, diary page |
| Chất liệu   | Paper grain nhẹ, sand texture, glassy water highlight, foam dots       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EEF9FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#7CCDF2",
        colorTextBase: "#18384A",
        colorTextSecondary: "#5A7F92",
        colorSuccess: "#7DDEC3",
        colorWarning: "#FFD978",
        colorError: "#FF8EA8",
        colorBorder: "#BFEAF8",
        borderRadius: 20,
        fontFamily: "'Quicksand', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --sky-blue-soft: #EEF9FF;
// --ocean-blue: #7CCDF2;
// --wave-blue: #A7E4FF;
// --sunset-pink: #FFB7C8;
// --blush-cloud: #FFD7E2;
// --sun-gold: #FFD978;
// --sand-warm: #FFEBC7;
// --foam-white: #FBFEFF;
// --seafoam-green: #7DDEC3;
// --deep-navy: #18384A;
```

### Typography

- **Heading:** `Quicksand` tròn, mềm, gợi cảm giác biển và gió.
- **Body:** `Nunito` dễ đọc, thân thiện, hợp với tone nhẹ nhàng.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                          |
| --------------- | ------------------------------------------------------------------------------ |
| Framer Motion   | Hero scene reveal theo lớp, diary page flip, route transition như lật trang    |
| SVGator         | Wave sway loop, sun reflection shimmer, seagull glide path, cloud drift        |
| Lenis           | Smooth scroll giữa diary pages, anchor tới shore/diary/gallery/bottle sections |
| CSS Keyframes   | Wave gentle sway, sparkle twinkle, shell rotate, cloud float, sun glow         |
| Realtime Colors | Tạo palette sky-blue/sunset-pink/sun-gold có contrast tốt                      |
| Blush           | Illustration beach girl, diary writer, seashell picnic cho hero/about section  |

### Layout ideas

- **Hero:** Full-bleed sunset beach scene: sky gradient xanh nhạt → hồng, mặt trời vàng sát đường chân trời, 3–5 lớp sóng, reflection path trên mặt nước, seagull bay ngang.
- **About:** Diary page đặt trên nền cát, có shell, starfish, sun stamp và tape hồng nhạt ở góc.
- **Projects:** Mỗi project là một postcard/diary spread; phía trên có thumbnail cảnh biển khác nhau như bờ cát, mây hồng, thuyền xa, vệt nắng trên nước.
- **Skills:** Seashell collection theo nhóm màu: blue shell, pink shell, gold shell, seafoam shell; hover mở tooltip như note nhỏ.
- **Gallery/Highlights:** Scene strip ngang gồm cloud layer, wave divider, sparkle trên nước và mini lighthouse ở xa.
- **Contact:** Message in a bottle CTA đặt ở mép sóng, nút gửi có bubble trail và ánh vàng phản chiếu.

### Animation rules

| Sự kiện          | Effect                                              | Thư viện          |
| ---------------- | --------------------------------------------------- | ----------------- |
| Page load        | Sky fade in, sun rise nhẹ, wave layer trượt từ dưới | Framer Motion     |
| Wave background  | 3 lớp sóng sway lệch phase 6–12s                    | CSS keyframes     |
| Sun reflection   | Vệt vàng shimmer rất nhẹ trên mặt nước              | SVG/CSS animation |
| Cloud idle       | Mây hồng trôi ngang chậm, opacity thay đổi nhẹ      | CSS keyframes     |
| Sparkle idle     | Sparkle trên nước twinkle không đồng bộ             | CSS keyframes     |
| Card hover       | Lift + shadow xanh nhạt + wave edge dịch 2–4px      | CSS transition    |
| Section entrance | Slide-up + fade, stagger 0.1s giữa items            | Framer Motion     |
| Seagull          | Glide path từ trái sang phải, loop rất chậm         | SVG/CSS animation |
| Shell decoration | Rotate ±5deg chậm                                   | CSS keyframes     |

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
│   │   ├── SunsetSkyLayer.jsx
│   │   ├── SunReflection.jsx
│   │   ├── CloudDriftLayer.jsx
│   │   ├── BubbleLayer.jsx
│   │   ├── SeagullGlide.jsx
│   │   ├── FoamParticles.jsx
│   │   └── ShoreDecorations.jsx
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

| File SVG tự tạo             | Nội dung cần vẽ                                       | Dùng cho                | Gợi ý kỹ thuật                                    |
| --------------------------- | ----------------------------------------------------- | ----------------------- | ------------------------------------------------- |
| `sunset-sky-panorama.svg`   | Bầu trời xanh nhạt, mây hồng, mặt trời vàng trên biển | Hero background         | Linear/radial gradient, layer opacity thấp        |
| `wave-layers-sunset.svg`    | 4–5 lớp sóng xanh nhạt có highlight hồng/vàng         | Background dưới cùng    | Path curve, opacity khác nhau, animate translateX |
| `sun-reflection-ribbon.svg` | Vệt ánh vàng trên mặt nước, sparkle nhỏ               | Hero water highlight    | Narrow paths + small stars, shimmer bằng opacity  |
| `pink-cloud-clusters.svg`   | Cụm mây hồng pastel nhiều kích thước                  | Sky decoration          | Symbol reuse, blur nhẹ, drift theo layer          |
| `shoreline-sand-scene.svg`  | Bờ cát, vỏ sò, starfish, đá nhỏ, nét sóng chạm bờ     | Section divider/footer  | Sand noise pattern + soft shadow                  |
| `seashell-collection.svg`   | Conch, scallop, starfish, sand dollar, coral piece    | Skill badges/decoration | Mỗi shell là symbol, stroke mềm, fill pastel      |
| `seagull-silhouette.svg`    | 2–3 seagull poses bay                                 | Hero animation          | Path đơn giản, animate translateX + slight wave   |
| `foam-dots-pattern.svg`     | Chấm foam nhỏ rải rác                                 | Section divider/bg      | SVG pattern, opacity thấp, random size            |
| `diary-page-frame.svg`      | Khung trang nhật ký có gáy sách, line rule, sun stamp | Project cards           | Rect + line pattern, corner fold nhẹ              |
| `bottle-message.svg`        | Chai thủy tinh, cork, cuộn giấy bên trong             | Contact CTA             | Glass effect bằng opacity gradient                |
| `anchor-rope-icons.svg`     | Anchor, rope knot, compass, helm wheel                | Nav icons/decoration    | Icon 24x24, stroke 2px, currentColor              |

---

## 2. `tropical-postcard` — Tropical Postcard Portfolio

Portfolio như một bộ sưu tập postcard từ các chuyến du lịch nhiệt đới: lá cọ, hoa plumeria, flamingo, cocktail, stamp. Tươi sáng, rực rỡ nhưng chuyển sang tone xanh dương chủ đạo; hồng pastel và coral chỉ làm accent phụ.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                           |
| ----------- | --------------------------------------------------------------- |
| Cảm xúc     | Tươi mới, vui, năng lượng, tropical, nữ tính                    |
| Hình khối   | Postcard card bo 12px, stamp badge, palm leaf frame, pill tag   |
| Không gian  | Nền xanh dương rất nhạt, tropical leaf border, postcard grid    |
| Chuyển động | Leaf sway, flamingo bob, stamp pop, card tilt, plane fly across |
| Điểm nhấn   | Palm leaf SVG, plumeria flower, flamingo, postcard stamp, plane |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EFF8FF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#3FA9F5",
        colorTextBase: "#12324A",
        colorTextSecondary: "#4F718A",
        colorSuccess: "#4DD9B4",
        colorWarning: "#FFD166",
        colorError: "#FF6B7A",
        colorBorder: "#B9E3FF",
        borderRadius: 12,
        fontFamily: "'Josefin Sans', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --tropical-blue: #3FA9F5;
// --palm-green: #4DD9B4;
// --ocean-blue: #5BBBEF;
// --sunset-gold: #FFD166;
// --flamingo-coral: #FF9FB0;
// --sky-light: #EAF7FF;
// --coconut-cream: #FFF8E8;
```

### Typography

- **Heading:** `Josefin Sans` thanh lịch, hiện đại, gợi cảm giác travel magazine.
- **Body:** `Nunito` mềm, dễ đọc, cân bằng với decoration nhiều.

```css
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                               |
| --------------- | ------------------------------------------------------------------- |
| Framer Motion   | Postcard tilt hover, stamp pop entrance, route transition slide     |
| SVGator         | Palm leaf sway, flamingo bob, plane fly path, flower bloom          |
| Lenis           | Smooth scroll qua postcard gallery và destination sections          |
| CSS Keyframes   | Leaf gentle sway, cloud drift, flamingo idle bob                    |
| Realtime Colors | Tạo palette tropical-blue/ocean-blue/palm-green/sunset-gold hài hòa |
| Blush           | Illustration tropical girl/travel scene cho hero                    |

### Layout ideas

- **Hero:** Tropical frame với palm leaves hai bên, tên như destination title trên postcard.
- **About:** Passport page card với stamp collection và photo placeholder.
- **Projects:** Postcard grid, mỗi project là một postcard từ destination khác nhau.
- **Skills:** Luggage tag badges, mỗi nhóm skill là một tag màu khác nhau.
- **Contact:** "Send a postcard" CTA với stamp animation và plane fly.

### Animation rules

| Sự kiện          | Effect                                     | Thư viện          |
| ---------------- | ------------------------------------------ | ----------------- |
| Page load        | Postcard slide-in từ các hướng + stamp pop | Framer Motion     |
| Palm leaf        | Gentle sway 5–8s loop                      | CSS keyframes     |
| Flamingo         | Bob up-down nhẹ 3s loop                    | CSS keyframes     |
| Card hover       | Tilt 3D nhẹ (perspective) + shadow lift    | CSS transform     |
| Stamp entrance   | Scale 0→1 + rotate nhẹ, stagger            | Framer Motion     |
| Plane decoration | Fly across viewport, loop 15–20s           | SVG/CSS animation |
| Section entrance | Fade + slide-up, leaf frame grow in        | Framer Motion     |

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

| File SVG tự tạo              | Nội dung cần vẽ                                 | Dùng cho               | Gợi ý kỹ thuật                                  |
| ---------------------------- | ----------------------------------------------- | ---------------------- | ----------------------------------------------- |
| `palm-leaf-frame.svg`        | Lá cọ, monstera, banana leaf tạo frame hai bên  | Hero/section frame     | Path organic, gradient xanh, animate sway nhẹ   |
| `tropical-flowers.svg`       | Plumeria, hibiscus, bird of paradise            | Decoration/corner      | Fill pastel pink/coral, petal layer rõ ràng     |
| `flamingo-set.svg`           | Flamingo đứng, flamingo cúi, flamingo float     | Decoration/about       | Silhouette đơn giản, fill coral-pink gradient   |
| `postcard-stamp-set.svg`     | Stamp nhiều kiểu: circle, rect, wave edge       | Project cards/badges   | Border dashed, text path, màu đổi bằng CSS      |
| `travel-plane-path.svg`      | Máy bay nhỏ + đường bay dashed                  | Hero/section animation | Animate along path, plane rotate theo tangent   |
| `luggage-tag-shapes.svg`     | Tag hành lý nhiều hình: rect, circle, oval      | Skill badges           | Hole punch detail, string line, fill nhiều màu  |
| `passport-page-frame.svg`    | Khung passport page có stamp area và photo slot | About section          | Rect với rounded corner, line pattern bên trong |
| `coconut-cocktail-icons.svg` | Cocktail, coconut, sunglasses, camera, suitcase | Nav icons/decoration   | Icon 24x24, stroke 2px, currentColor            |

### Ảnh gen bằng `imagegen` với transparent background

Ảnh raster dùng cho chi tiết giàu texture hoặc object cutout khó vẽ tay bằng SVG. Sinh bằng skill `imagegen` theo workflow chroma-key: tạo ảnh trên nền phẳng một màu, remove nền bằng helper `remove_chroma_key.py`, lưu final dạng PNG/WebP có alpha trong `assets/tropical-postcard/generated/`.

| File ảnh gen                         | Nội dung cần gen                                              | Dùng cho                | Prompt / kỹ thuật                                                                  |
| ------------------------------------ | ------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| `hero-travel-girl-cutout.png`        | Nhân vật nữ travel cầm postcard, outfit nhiệt đới xanh dương  | Hero foreground         | Illustration polished, blue tropical palette, nền `#00ff00`, no shadow/text        |
| `blue-postcard-stack-cutout.png`     | Chồng postcard du lịch, tem, băng dính giấy, cạnh hơi nghiêng | Projects section        | Isometric paper props, ocean-blue accents, nền `#00ff00`, generous padding         |
| `tropical-suitcase-cutout.png`       | Vali du lịch pastel xanh dương, sticker nhỏ, tag hành lý      | Skills/About decoration | Semi-realistic 3D/illustration hybrid, crisp edges, nền `#00ff00`, no watermark    |
| `plumeria-flower-cluster-cutout.png` | Cụm hoa plumeria/hibiscus có lá, màu trắng-hồng rất nhẹ       | Corners/dividers        | Soft tropical botanical cutout, dùng nền `#ff00ff` để tránh trùng lá xanh          |
| `coconut-cocktail-cutout.png`        | Coconut drink, straw, umbrella nhỏ, highlight xanh biển       | Contact CTA decoration  | Clean product-style illustration, no cast shadow, nền `#00ff00`, transparent final |
| `flamingo-float-cutout.png`          | Phao flamingo nhỏ hoặc flamingo đứng cạnh nước xanh           | About/empty state       | Cute polished cutout, coral as accent only, nền `#00ff00`, avoid flat icon look    |

Prompt base cho mọi ảnh transparent:

```txt
Create the requested subject on a perfectly flat solid chroma-key background for background removal. The background must be one uniform color with no shadows, gradients, texture, reflections, floor plane, or lighting variation. Keep the subject fully separated from the background with crisp edges and generous padding. Do not use the chroma-key color anywhere in the subject. No cast shadow, no contact shadow, no reflection, no watermark, and no text unless explicitly requested. Final style must match the tropical-postcard blue primary palette: tropical blue #3FA9F5, ocean blue #5BBBEF, palm green #4DD9B4, sunset gold #FFD166, coral only as small accent.
```

---

## 3. `sunset-cruise-log` — Sunset Cruise Log Portfolio

Portfolio như một cuốn nhật ký trên du thuyền lúc hoàng hôn: gradient cam-hồng-tím, sóng nhẹ, đèn lồng, dây thừng, la bàn. Lãng mạn, ấm áp nhưng vẫn giữ tone xanh mát ở phần biển và hồng pastel ở phần trời.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                         |
| ----------- | ------------------------------------------------------------- |
| Cảm xúc     | Lãng mạn, ấm áp, dreamy, storytelling, nữ tính                |
| Hình khối   | Card bo 14px, rope border, lantern badge, compass rose accent |
| Không gian  | Gradient sky (hồng-cam-tím nhạt) ở hero, biển xanh mát ở dưới |
| Chuyển động | Wave gentle, lantern glow pulse, compass rotate, cloud drift  |
| Điểm nhấn   | Sunset gradient, lantern SVG, rope knot, compass, ship wheel  |

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

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Log entry reveal, lantern glow, compass spin, route transition fade   |
| SVGator         | Wave loop, cloud drift, lantern swing, rope knot draw                 |
| Lenis           | Smooth scroll cho cruise log timeline dọc                             |
| CSS Keyframes   | Lantern glow pulse, star twinkle, wave gentle sway                    |
| Realtime Colors | Tạo palette sunset-pink/ocean-teal/lantern-gold cân bằng warm và cool |
| Blush           | Illustration cruise/sunset girl cho hero hoặc about                   |

### Layout ideas

- **Hero:** Sunset gradient sky, silhouette du thuyền ở horizon, tên như captain's log title.
- **About:** Captain's profile card với compass rose decoration và rope border.
- **Projects:** Cruise log entries theo timeline dọc, mỗi entry có date stamp và lantern icon.
- **Skills:** Navigation chart: mỗi nhóm skill là một điểm trên bản đồ hải trình.
- **Contact:** "Send a signal" CTA với lantern glow animation.

### Animation rules

| Sự kiện          | Effect                                      | Thư viện       |
| ---------------- | ------------------------------------------- | -------------- |
| Page load        | Sunset gradient reveal top-down + ship fade | Framer Motion  |
| Wave background  | Gentle sway 8–12s loop                      | CSS keyframes  |
| Lantern          | Glow pulse opacity 0.6–1.0, 3s loop         | CSS keyframes  |
| Cloud drift      | TranslateX slow loop 20–30s                 | CSS keyframes  |
| Compass hover    | Rotate 360deg smooth                        | CSS transition |
| Log entry reveal | Slide-left + fade, stagger 0.15s            | Framer Motion  |
| Star twinkle     | Opacity + scale pulse, random delay         | CSS keyframes  |
| Section entrance | Fade + translateY(20px)                     | Framer Motion  |

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

| File SVG tự tạo           | Nội dung cần vẽ                                | Dùng cho                | Gợi ý kỹ thuật                                    |
| ------------------------- | ---------------------------------------------- | ----------------------- | ------------------------------------------------- |
| `sunset-sky-gradient.svg` | Gradient sky hồng-cam-tím, có cloud silhouette | Hero background         | LinearGradient nhiều stop, cloud path opacity nhẹ |
| `ship-silhouette.svg`     | Du thuyền/sailboat silhouette đơn giản         | Hero focal point        | Path đơn sắc, có thể animate translateY nhẹ       |
| `lantern-set.svg`         | Đèn lồng giấy nhiều kiểu, có dây treo          | Decoration/CTA          | Glow bằng radialGradient, animate opacity         |
| `compass-rose.svg`        | Compass rose chi tiết, có N/S/E/W              | About/skills decoration | Tách needle riêng để animate rotate               |
| `rope-knot-borders.svg`   | Rope border, knot corner, rope divider         | Card frame/divider      | Path stroke round cap, pattern repeat             |
| `wave-gentle.svg`         | 2–3 lớp sóng nhẹ, tone xanh mát                | Background bottom       | Path curve, opacity layer, animate translateX     |
| `cruise-log-icons.svg`    | Anchor, helm, telescope, map, flag, bell       | Nav/timeline icons      | Icon 24x24, stroke 2px, currentColor              |
| `star-constellation.svg`  | Chòm sao nhỏ, star dots connected by lines     | Night sky decoration    | Circle + line, animate opacity twinkle            |

---

## 4. `island-adventure-map` — Island Adventure Map Portfolio

Portfolio như một bản đồ kho báu trên đảo: path dẫn qua các điểm, icon landmark, treasure chest, palm tree, volcano mini. Vui, năng động, interactive, phù hợp cho nữ thích khám phá và muốn portfolio mang tính gamified.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                           |
| ----------- | --------------------------------------------------------------- |
| Cảm xúc     | Vui, năng động, khám phá, tò mò, adventurous                    |
| Hình khối   | Map card, treasure badge, path line, island blob, flag marker   |
| Không gian  | Nền xanh biển nhạt, island blobs, dashed path connecting points |
| Chuyển động | Path draw, flag wave, treasure bounce, marker pop, boat sail    |
| Điểm nhấn   | Treasure map path, island blobs, X marks, palm tree, compass    |

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

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Marker pop entrance, treasure bounce, island card spring, route slide |
| SVGator         | Path draw animation, flag wave, boat sail along path, X mark reveal   |
| Lenis           | Smooth scroll dọc theo adventure map                                  |
| CSS Keyframes   | Flag wave loop, palm sway, water ripple, treasure glow pulse          |
| Realtime Colors | Tạo palette map-blue/island-green/treasure-gold tươi và vui           |
| Blush           | Illustration explorer girl/island scene cho hero                      |

### Layout ideas

- **Hero:** Bản đồ đảo lớn bằng SVG, các landmark là entry point tới sections.
- **About:** Explorer profile card dạng adventure ID, có level/XP decoration.
- **Projects:** Island stops trên map path, mỗi project là một đảo/landmark.
- **Skills:** Treasure chest mở ra reveal skill gems/coins theo nhóm.
- **Contact:** "Find the treasure" CTA, X mark animation khi hover.

### Animation rules

| Sự kiện          | Effect                                       | Thư viện          |
| ---------------- | -------------------------------------------- | ----------------- |
| Page load        | Map path draw từ start → end, markers pop in | SVG + Framer      |
| Path draw        | Stroke-dashoffset animate 2–3s               | SVG/CSS animation |
| Flag decoration  | Wave sway 2s loop                            | CSS keyframes     |
| Palm tree        | Gentle sway 4–6s loop                        | CSS keyframes     |
| Marker hover     | Bounce + glow ring                           | CSS transition    |
| Treasure reveal  | Chest open + gems scatter                    | Framer Motion     |
| Island card      | Float idle + spring on hover                 | Framer Motion     |
| Section entrance | Marker pop (scale 0→1) + label fade          | Framer Motion     |

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

| File SVG tự tạo            | Nội dung cần vẽ                                     | Dùng cho           | Gợi ý kỹ thuật                                        |
| -------------------------- | --------------------------------------------------- | ------------------ | ----------------------------------------------------- |
| `island-map-full.svg`      | Bản đồ đảo với path dashed, landmarks, ocean waves  | Hero/main map      | ViewBox lớn, path stroke-dasharray cho draw animation |
| `island-blobs.svg`         | 5–6 island blob shapes khác nhau, có cây và cát     | Project cards      | Organic blob path, fill gradient xanh/beige           |
| `treasure-chest.svg`       | Chest đóng và chest mở, gems bên trong              | Skills section     | Tách lid riêng để animate open, gems là symbols       |
| `landmark-markers.svg`     | Flag, lighthouse, volcano, hut, dock, cave          | Map markers        | Icon 32x32, fill bright, có pin/shadow                |
| `palm-tree-set.svg`        | Palm tree nhiều kiểu, coconut tree, bush            | Decoration         | Tách trunk và leaves để animate sway riêng            |
| `map-path-elements.svg`    | Dashed path, X mark, arrow, footprint trail         | Map connection     | Stroke dashed, animate stroke-dashoffset              |
| `adventure-icons.svg`      | Compass, binoculars, backpack, map scroll, campfire | Nav/badge icons    | Icon 24x24, stroke 2px, currentColor                  |
| `water-ripple-pattern.svg` | Ripple circles, wave lines cho ocean area           | Background texture | Pattern repeat, opacity thấp, animate scale nhẹ       |

---

## 5. `coral-reef-gallery` — Coral Reef Gallery Portfolio

Portfolio như một gallery dưới đại dương: san hô, cá nhiệt đới, bong bóng, ánh sáng xuyên nước, rong biển. Huyền bí nhẹ nhưng vẫn sáng và nữ tính, phù hợp cho portfolio visual/art muốn tạo ấn tượng mạnh.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                            |
| ----------- | ---------------------------------------------------------------- |
| Cảm xúc     | Huyền bí nhẹ, sáng, nữ tính, visual, immersive                   |
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

| Library / Tool  | Cách dùng trong theme                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Framer Motion   | Fish card swim entrance, coral frame grow, gallery modal, route fade   |
| SVGator         | Fish swim path, jellyfish pulse, coral sway, light ray shimmer         |
| Lenis           | Smooth scroll cho underwater gallery, parallax depth layers            |
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

| Sự kiện          | Effect                                      | Thư viện          |
| ---------------- | ------------------------------------------- | ----------------- |
| Page load        | Light rays fade in + coral grow from bottom | Framer Motion     |
| Bubble idle      | Rise slow, wobble nhẹ, fade out ở top       | CSS keyframes     |
| Fish swim        | Swim path horizontal, slight up-down wave   | SVG/CSS animation |
| Jellyfish        | Pulse body + tentacle trail, drift slow     | CSS keyframes     |
| Coral sway       | Gentle sway 5–8s loop                       | CSS keyframes     |
| Light rays       | Shimmer opacity 0.3–0.7, slow sweep         | CSS keyframes     |
| Card hover       | Bubble burst + card lift + glow border      | CSS transition    |
| Section entrance | Fade + scale(0.96→1) + bubble pop stagger   | Framer Motion     |
| Pearl CTA        | Pearl drop + ripple ring expand             | Framer Motion     |

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

| File SVG tự tạo            | Nội dung cần vẽ                                       | Dùng cho              | Gợi ý kỹ thuật                                          |
| -------------------------- | ----------------------------------------------------- | --------------------- | ------------------------------------------------------- |
| `coral-reef-frame.svg`     | Coral branches, fan coral, brain coral tạo frame      | Hero/section frame    | Path organic, gradient hồng-tím, nhiều layer depth      |
| `tropical-fish-set.svg`    | 5–6 loại cá nhiệt đới: clownfish, tang, angel, puffer | Decoration/cards      | Mỗi fish là symbol, fill bright, animate swim path      |
| `jellyfish-collection.svg` | Jellyfish nhiều kiểu: bell, moon, comb                | Floating decoration   | Body translucent (opacity), tentacle path wavy          |
| `bubble-variety.svg`       | Bubble nhiều cỡ, có light reflection highlight        | Particle layer        | Circle + ellipse highlight, opacity gradient            |
| `light-ray-overlay.svg`    | Tia sáng xuyên nước, cone shape từ trên xuống         | Background overlay    | LinearGradient white→transparent, opacity animate       |
| `sea-anemone-set.svg`      | Anemone nhiều màu: pink, purple, teal, gold           | Skill clusters        | Tentacle paths, animate sway, fill gradient             |
| `pearl-shell.svg`          | Shell mở/đóng, pearl bên trong, có shimmer            | Contact CTA/about     | Tách shell halves để animate open, pearl radialGradient |
| `seaweed-kelp.svg`         | Rong biển, kelp, sea grass nhiều kiểu                 | Background decoration | Path wavy, animate sway, opacity layer                  |
| `underwater-icons.svg`     | Anchor, diving mask, trident, seahorse, starfish      | Nav/badge icons       | Icon 24x24, stroke 2px, currentColor                    |

---

## 6. `seaside-train-ticket` — Seaside Train Ticket Portfolio

Portfolio như một chuyến tàu chạy dọc bờ biển: cửa sổ toa tàu nhìn ra sóng xanh, vé giấy, biển ga nhỏ, vali pastel, hoa giấy và nắng phản chiếu trên mặt nước. Theme kể chuyện nhẹ nhàng, hợp portfolio muốn thể hiện hành trình phát triển cá nhân hoặc career journey qua từng điểm dừng.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                   |
| ----------- | ----------------------------------------------------------------------- |
| Cảm xúc     | Hoài niệm, mát mẻ, chuyển động, travel diary, nữ tính                   |
| Hình khối   | Ticket card, window frame, station sign, luggage tag, rail line divider |
| Không gian  | Tàu ven biển, nền sky-blue, sóng xa, ga nhỏ, vali và vé giấy            |
| Chuyển động | Train glide, window parallax, ticket flip, seagull glide, wave shimmer  |
| Điểm nhấn   | Train window, paper ticket, station board, suitcase, coastal rail       |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#EFFAFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#4BB8E8",
        colorTextBase: "#1D3A4F",
        colorTextSecondary: "#5D8195",
        colorSuccess: "#65DDBF",
        colorWarning: "#FFD37A",
        colorError: "#FF8AA6",
        colorBorder: "#BFE9F7",
        borderRadius: 16,
        fontFamily: "'Quicksand', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --train-sky: #EFFAFF;
// --coastal-blue: #4BB8E8;
// --wave-aqua: #A6E7FF;
// --ticket-cream: #FFF8E6;
// --sun-gold: #FFD37A;
// --coral-pink: #FF8AA6;
// --seafoam: #65DDBF;
// --rail-navy: #1D3A4F;
```

### Typography

- **Heading:** `Quicksand` mềm, tròn, hợp travel diary và cửa sổ tàu.
- **Body:** `Nunito` rõ ràng, thân thiện, dễ đọc trên nền sáng nhiều chi tiết.

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Ticket flip, station card reveal, train-window transition, card hover |
| SVGator         | Train glide path, seagull fly, rail line draw, wave shimmer           |
| Lenis           | Smooth scroll qua các station section                                 |
| CSS Keyframes   | Window parallax, luggage float, ticket flutter, sea sparkle           |
| Realtime Colors | Kiểm palette sky/aqua/ticket cream đủ sáng và đủ contrast             |
| Blush           | Illustration travel girl, train cabin, coastal station cho hero/about |

### Layout ideas

- **Hero:** Full-width train cabin window, biển chạy parallax phía ngoài, vé giấy đóng dấu tên portfolio.
- **About:** Profile như ticket/passenger card, có station stamp và luggage tag.
- **Projects:** Mỗi project là một stop card trên tuyến ven biển; hover thì ticket stamp pop.
- **Skills:** Suitcase packing grid: mỗi skill group là một luggage sticker màu khác nhau.
- **Contact:** "Send from next station" CTA, postcard/ticket trượt vào mail slot.

### Animation rules

| Sự kiện          | Effect                                                 | Thư viện       |
| ---------------- | ------------------------------------------------------ | -------------- |
| Page load        | Train window fade-in + rail line draw + wave reveal    | Framer/SVGator |
| Background       | Sea/window parallax 12–20s loop                        | CSS keyframes  |
| Train motion     | Cabin/rail translate rất nhẹ để tạo cảm giác di chuyển | CSS/SVGator    |
| Ticket hover     | Flip 3D nhẹ + stamp pop + paper shadow                 | Framer Motion  |
| Seagull          | Glide ngang qua cửa sổ, loop chậm                      | SVG/CSS        |
| Section entrance | Station sign slide-up + cards stagger                  | Framer Motion  |
| Contact success  | Ticket slide + wave sparkle + stamp seal               | Framer Motion  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                      ← Seaside train shell
│   ├── routes.js                    ← cabin, stops, suitcase, station-mail
│   └── theme.js
├── pages/
│   ├── TrainCabinHeroPage.jsx       ← Hero cửa sổ tàu nhìn ra biển
│   ├── StationStopsProjectsPage.jsx ← Projects dạng các trạm dừng
│   ├── SuitcaseSkillsPage.jsx       ← Skills dạng luggage stickers
│   └── StationMailContactPage.jsx   ← Contact ticket/postcard mail slot
├── features/
│   ├── train-scene/
│   │   ├── TrainWindowBackground.jsx
│   │   ├── CoastalRailLayer.jsx
│   │   ├── SeaParallaxLayer.jsx
│   │   └── SeagullGlide.jsx
│   ├── ticket-system/
│   │   ├── TicketCard.jsx
│   │   ├── TicketStampPop.jsx
│   │   └── StationBoard.jsx
│   └── luggage-skills/
│       ├── SuitcaseGrid.jsx
│       └── LuggageStickerBadge.jsx
├── components/
│   ├── layout/                      ← Train nav, station transition wrapper
│   └── ui/                          ← TicketButton, WindowCard, StationTag, LuggageBadge
└── assets/seaside-train-ticket/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo             | Nội dung cần vẽ                               | Dùng cho              | Gợi ý kỹ thuật                            |
| --------------------------- | --------------------------------------------- | --------------------- | ----------------------------------------- |
| `train-window-coast.svg`    | Khung cửa sổ tàu, biển, mây, rail ven biển    | Hero/background       | Tách window, sea, cloud, rail để parallax |
| `coastal-train-set.svg`     | Đầu tàu/toa tàu cute, bánh xe, shadow         | Decoration/transition | Wheel group riêng để rotate               |
| `paper-ticket-stamps.svg`   | Vé giấy, stamp, punched corner, barcode decor | Cards/nav             | Paper grain nhẹ, stamp pop bằng scale     |
| `station-signs.svg`         | Bảng ga, mốc km, platform sign, timetable     | Section headings      | Dùng text HTML overlay, SVG chỉ làm frame |
| `luggage-sticker-set.svg`   | Vali, tag, sticker biển, shell, camera, heart | Skills/cards          | Nhiều màu pastel, symbol reuse            |
| `rail-wave-divider.svg`     | Rail line, wave line, dashed route            | Divider/background    | Stroke-dashoffset cho line draw           |
| `seagull-cloud-set.svg`     | Seagull poses, cloud cluster, wind line       | Motion layer          | Animate translateX + slight y wave        |
| `station-mail-postcard.svg` | Postcard, mail slot, envelope, ticket seal    | Contact CTA           | Tách postcard để slide                    |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                  |
| --------------- | ------------------------------------------------------------------------------------ |
| Theme ID        | Ghi rõ `seaside-train-ticket` trong data/theme config và README của sub-project      |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages           | Có đủ train cabin hero, station projects, suitcase skills, station mail contact      |
| Feature folders | Tách `train-scene`, `ticket-system`, `luggage-skills`                                |
| UI components   | Có `TicketButton`, `WindowCard`, `StationTag`, `LuggageBadge` dùng lại trong page    |
| Asset folder    | Tạo `src/assets/seaside-train-ticket/` và đủ 8 SVG files trong bảng asset            |
| Visual priority | Hero phải thể hiện rõ cửa sổ tàu ven biển, sóng, rail, vé giấy và station sign       |
| Motion          | Nhấn mạnh train glide, window parallax, ticket flip, rail draw, seagull glide        |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive      | Mobile chuyển station/cards về 1 cột, giữ window hero và giảm parallax layer         |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt train glide, seagull và sea parallax     |
| Performance     | Giới hạn 20–30 animated elements visible, lazy load scene SVG, optimize bằng SVGO    |

---

## 7. `lagoon-kayak-adventure` — Lagoon Kayak Adventure Portfolio

Portfolio như một chuyến chèo kayak qua lagoon xanh ngọc: bản đồ nước, mái chèo, hoa nhiệt đới, cá nhỏ, lá cọ và những điểm dừng khám phá. Theme năng động nhưng vẫn mềm, sáng, nhiều chuyển động nước và phù hợp portfolio trải nghiệm/outdoor.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                             |
| ----------- | ----------------------------------------------------------------- |
| Cảm xúc     | Năng động, tươi mới, khám phá, tự do, playful travel              |
| Hình khối   | Kayak card, paddle divider, map marker, ripple badge, lagoon blob |
| Không gian  | Lagoon xanh ngọc, đảo nhỏ, hoa nhiệt đới, kayak foreground        |
| Chuyển động | Kayak bob, paddle stroke, ripple expand, fish dart, leaf sway     |
| Điểm nhấn   | Kayak SVG, paddle, water map path, tropical flower, fish ripple   |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#ECFFFB",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#27C6C2",
        colorTextBase: "#123E48",
        colorTextSecondary: "#4F7D86",
        colorSuccess: "#70E6A8",
        colorWarning: "#FFD86B",
        colorError: "#FF7F9E",
        colorBorder: "#B9F3EE",
        borderRadius: 18,
        fontFamily: "'Fredoka', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --lagoon-mint: #ECFFFB;
// --kayak-teal: #27C6C2;
// --water-aqua: #7CEAFF;
// --leaf-green: #70E6A8;
// --flower-pink: #FF7F9E;
// --sun-yellow: #FFD86B;
// --deep-lagoon: #123E48;
// --sand-soft: #FFF0C9;
```

### Typography

- **Heading:** `Fredoka` tạo cảm giác adventure vui và gần gũi.
- **Body:** `Nunito` mềm, rõ, hợp UI nhiều marker và badge.

```css
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                           |
| --------------- | --------------------------------------------------------------- |
| Framer Motion   | Kayak entrance, marker pop, route reveal, project card hover    |
| SVGator         | Paddle stroke, water ripple, fish dart path, route line draw    |
| Lenis           | Smooth scroll theo hành trình trên lagoon map                   |
| CSS Keyframes   | Kayak bob, leaf sway, ripple pulse, bubble float                |
| Realtime Colors | Cân palette teal/mint/pink/yellow rực nhưng vẫn mát             |
| Blush           | Illustration kayak girl, tropical lagoon hoặc island stop scene |

### Layout ideas

- **Hero:** Lagoon map full-bleed với kayak ở foreground, paddle stroke tạo ripple.
- **About:** Explorer profile card như waterproof map/pass, có marker và flower clip.
- **Projects:** Mỗi project là một checkpoint trên đường chèo, card dạng island/water blob.
- **Skills:** Paddle toolkit: paddle, compass, waterproof bag, sunscreen, map marker.
- **Contact:** "Send a signal" CTA, bottle/marker ripple lan ra trên mặt nước.

### Animation rules

| Sự kiện          | Effect                                           | Thư viện          |
| ---------------- | ------------------------------------------------ | ----------------- |
| Page load        | Lagoon fade-in + kayak bob entrance + route draw | Framer/SVGator    |
| Kayak idle       | TranslateY 0→-6px→0, rotate ±1deg, 4–6s loop     | CSS keyframes     |
| Paddle stroke    | Paddle rotate + ripple expand theo nhịp          | SVGator/CSS       |
| Fish decoration  | Dart path ngắn, opacity fade                     | CSS/SVG animation |
| Marker hover     | Bounce + ripple ring + label reveal              | Framer Motion     |
| Section entrance | Map marker pop + cards slide-up                  | Framer Motion     |
| Contact success  | Signal ripple + tropical flower burst            | Framer Motion     |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Lagoon kayak shell
│   ├── routes.js                       ← lagoon, checkpoints, toolkit, signal
│   └── theme.js
├── pages/
│   ├── LagoonHeroPage.jsx              ← Hero kayak + lagoon route
│   ├── CheckpointProjectsPage.jsx      ← Projects dạng checkpoints
│   ├── PaddleToolkitSkillsPage.jsx     ← Skills dạng paddle/toolkit
│   └── LagoonSignalContactPage.jsx     ← Contact signal ripple
├── features/
│   ├── lagoon-scene/
│   │   ├── LagoonMapBackground.jsx
│   │   ├── KayakBobLayer.jsx
│   │   ├── PaddleStrokeRipple.jsx
│   │   └── FishDartLayer.jsx
│   ├── checkpoint-projects/
│   │   ├── CheckpointGrid.jsx
│   │   ├── LagoonProjectCard.jsx
│   │   └── MapMarkerHover.jsx
│   └── paddle-toolkit/
│       ├── ToolkitGrid.jsx
│       └── PaddleSkillBadge.jsx
├── components/
│   ├── layout/                         ← Lagoon nav, ripple transition wrapper
│   └── ui/                             ← KayakButton, LagoonCard, PaddleTag, RippleBadge
└── assets/lagoon-kayak-adventure/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo              | Nội dung cần vẽ                                 | Dùng cho         | Gợi ý kỹ thuật                         |
| ---------------------------- | ----------------------------------------------- | ---------------- | -------------------------------------- |
| `lagoon-map-scene.svg`       | Lagoon, đảo nhỏ, route line, water blobs        | Hero/background  | ViewBox lớn, route stroke-dasharray    |
| `kayak-paddle-set.svg`       | Kayak nhiều màu, paddle, shadow, splash         | Hero/object      | Tách paddle và splash để animate riêng |
| `water-ripple-bubbles.svg`   | Ripple rings, bubble, splash dot                | Particle layer   | Scale + opacity, random delay          |
| `tropical-flower-leaves.svg` | Hibiscus, plumeria, palm leaf, monstera         | Decoration/cards | Leaf group sway, flower pop            |
| `checkpoint-markers.svg`     | Marker, flag, buoy, dock, mini island           | Projects/nav     | Icon 32px, glow ring hover             |
| `fish-dart-set.svg`          | Cá nhỏ nhiều màu, tail, dotted trail            | Motion layer     | Path animation ngắn, loop lệch nhịp    |
| `paddle-toolkit-icons.svg`   | Paddle, compass, dry bag, sunscreen, binoculars | Skills           | Icon 24x24, currentColor + fill pastel |
| `signal-bottle-ripple.svg`   | Bottle, floating note, ripple, flower success   | Contact CTA      | Tách bottle/note/ripple để animate     |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                  |
| --------------- | ------------------------------------------------------------------------------------ |
| Theme ID        | Ghi rõ `lagoon-kayak-adventure` trong data/theme config và README của sub-project    |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages           | Có đủ lagoon hero, checkpoint projects, paddle toolkit skills, signal contact        |
| Feature folders | Tách `lagoon-scene`, `checkpoint-projects`, `paddle-toolkit`                         |
| UI components   | Có `KayakButton`, `LagoonCard`, `PaddleTag`, `RippleBadge` dùng lại trong page       |
| Asset folder    | Tạo `src/assets/lagoon-kayak-adventure/` và đủ 8 SVG files trong bảng asset          |
| Visual priority | Hero phải thể hiện rõ kayak, nước lagoon, route line, island markers và ripple       |
| Motion          | Nhấn mạnh kayak bob, paddle stroke, ripple expand, fish dart, marker pop             |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive      | Lagoon route và checkpoint cards về 1 cột ở mobile, giảm fish/bubble density         |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt kayak bob, fish dart, ripple loop        |
| Performance     | Giới hạn 20–30 animated elements visible, lazy load scene SVG, optimize bằng SVGO    |

---

## 8. `beach-market-stroll` — Beach Market Stroll Portfolio

Portfolio như một buổi dạo chợ ven biển: quầy trái cây nhiệt đới, giỏ cói, bảng giá viết tay, vỏ sò souvenir, mái che sọc và nắng biển. Theme tươi sáng, gần gũi, hợp portfolio lifestyle, business, marketing hoặc creative muốn có cảm giác vui và nhiều màu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                               |
| ----------- | ------------------------------------------------------------------- |
| Cảm xúc     | Vui, rực rỡ, thân thiện, summer lifestyle, handmade                 |
| Hình khối   | Market stall card, woven basket frame, price tag, fruit sticker     |
| Không gian  | Chợ biển, quầy mái sọc, trái cây, souvenir, biển xanh phía sau      |
| Chuyển động | Awning sway, fruit bounce, shell sparkle, basket lift, flag flutter |
| Điểm nhấn   | Market stall, woven basket, citrus, coconut, shell souvenir, flags  |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#FFFDF2",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#FF8FA3",
        colorTextBase: "#243C3A",
        colorTextSecondary: "#5D7A77",
        colorSuccess: "#4ED9B4",
        colorWarning: "#FFD166",
        colorError: "#FF6B7A",
        colorBorder: "#B7EFE8",
        borderRadius: 14,
        fontFamily: "'Josefin Sans', 'Nunito', sans-serif",
    },
};

// CSS Variables
// --market-cream: #FFFDF2;
// --stall-pink: #FF8FA3;
// --sea-teal: #4ED9B4;
// --citrus-gold: #FFD166;
// --coral-red: #FF6B7A;
// --basket-tan: #D6A25F;
// --ocean-mint: #B7EFE8;
// --ink-green: #243C3A;
```

### Typography

- **Heading:** `Josefin Sans` cho cảm giác travel magazine và biển mùa hè.
- **Body:** `Nunito` mềm, rõ, hợp bảng giá và card nhiều chi tiết.

```css
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                         |
| --------------- | ------------------------------------------------------------- |
| Framer Motion   | Stall reveal, fruit bounce, basket card hover, tag pop        |
| SVGator         | Awning sway, flag flutter, shell sparkle, fruit crate bounce  |
| Lenis           | Smooth scroll qua các quầy market và postcard sections        |
| CSS Keyframes   | Awning idle, sea shimmer, fruit float, price tag wiggle       |
| Realtime Colors | Kiểm palette pink/teal/gold/coral đủ rực nhưng không chói     |
| Blush           | Illustration beach market, vendor girl, summer shopping scene |

### Layout ideas

- **Hero:** Beach market street với 2–3 quầy hàng, biển xanh phía sau, mái che sọc chuyển động nhẹ.
- **About:** Profile như vendor card hoặc woven basket label, có fruit sticker và shell clip.
- **Projects:** Mỗi project là một stall card: fruit stand, souvenir booth, drink bar, flower basket.
- **Skills:** Market basket collection, mỗi nhóm skill là một item trong giỏ.
- **Contact:** "Send a seaside order" CTA, price tag stamp và receipt slide.

### Animation rules

| Sự kiện          | Effect                                        | Thư viện       |
| ---------------- | --------------------------------------------- | -------------- |
| Page load        | Stall awning unfurl + sea background fade-in  | Framer/SVGator |
| Awning idle      | Sway nhẹ 5–8s, transform-origin top           | CSS keyframes  |
| Fruit decoration | Bounce nhỏ khi card enter hoặc hover          | Framer Motion  |
| Price tag        | Wiggle + stamp pop                            | CSS/Framer     |
| Shell sparkle    | Tiny star twinkle quanh souvenir              | CSS keyframes  |
| Card hover       | Basket lift + fruit sticker pop + shadow warm | Framer Motion  |
| Contact success  | Receipt slide + flag flutter + shell sparkle  | Framer Motion  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Beach market shell
│   ├── routes.js                       ← market, stalls, basket, order
│   └── theme.js
├── pages/
│   ├── BeachMarketHeroPage.jsx         ← Hero beach market street
│   ├── MarketStallProjectsPage.jsx     ← Projects dạng market stalls
│   ├── BasketSkillsPage.jsx            ← Skills dạng basket collection
│   └── SeasideOrderContactPage.jsx     ← Contact order/receipt
├── features/
│   ├── market-scene/
│   │   ├── BeachMarketBackground.jsx
│   │   ├── AwningSwayLayer.jsx
│   │   ├── FlagFlutterLayer.jsx
│   │   └── SeaBehindMarket.jsx
│   ├── market-stalls/
│   │   ├── StallProjectGrid.jsx
│   │   ├── MarketStallCard.jsx
│   │   └── PriceTagPop.jsx
│   └── basket-skills/
│       ├── BasketSkillGrid.jsx
│       └── MarketItemBadge.jsx
├── components/
│   ├── layout/                         ← Market nav, stall transition wrapper
│   └── ui/                             ← MarketButton, StallCard, PriceTag, BasketBadge
└── assets/beach-market-stroll/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo            | Nội dung cần vẽ                                  | Dùng cho            | Gợi ý kỹ thuật                            |
| -------------------------- | ------------------------------------------------ | ------------------- | ----------------------------------------- |
| `beach-market-street.svg`  | Quầy hàng, biển phía sau, mái che sọc, sand path | Hero/background     | Tách awning, stall, sea, flags để animate |
| `market-stall-frames.svg`  | Stall frame, table, crate, striped awning        | Project cards       | Frame nhiều màu, awning group riêng       |
| `tropical-fruit-set.svg`   | Pineapple, orange, coconut, mango, watermelon    | Decoration/skills   | Fruit sticker style, bounce hover         |
| `woven-basket-tags.svg`    | Giỏ cói, luggage tag, price tag, receipt         | About/contact/cards | Woven pattern opacity thấp                |
| `souvenir-shell-icons.svg` | Shell, starfish, sunglasses, postcard, bracelet  | Nav/badges          | Icon 24x24, currentColor + fill pastel    |
| `market-flag-bunting.svg`  | Cờ dây, ribbon, mini banner                      | Header/divider      | Flutter bằng rotate nhẹ                   |
| `receipt-order-set.svg`    | Receipt, stamp, paper bag, order ticket          | Contact CTA         | Receipt slide, stamp pop                  |
| `sun-sea-sparkles.svg`     | Sparkle, sun dot, sea shimmer, sand fleck        | Particle layer      | Random opacity, giới hạn visible          |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                  |
| --------------- | ------------------------------------------------------------------------------------ |
| Theme ID        | Ghi rõ `beach-market-stroll` trong data/theme config và README của sub-project       |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages           | Có đủ beach market hero, market stall projects, basket skills, seaside order contact |
| Feature folders | Tách `market-scene`, `market-stalls`, `basket-skills`                                |
| UI components   | Có `MarketButton`, `StallCard`, `PriceTag`, `BasketBadge` dùng lại trong page        |
| Asset folder    | Tạo `src/assets/beach-market-stroll/` và đủ 8 SVG files trong bảng asset             |
| Visual priority | Hero phải thể hiện rõ beach market: quầy, awning, trái cây, souvenir, biển phía sau  |
| Motion          | Nhấn mạnh awning sway, fruit bounce, price tag pop, flag flutter, sea shimmer        |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive      | Market stalls về 1 cột ở mobile, giảm flag/sparkle density                           |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt awning sway, sea shimmer và sparkle      |
| Performance     | Giới hạn 20–30 animated elements visible, lazy load scene SVG, optimize bằng SVGO    |

---

## 9. `sailboat-regatta-diary` — Sailboat Regatta Diary Portfolio

Portfolio như nhật ký một ngày regatta ven biển: thuyền buồm trắng, cờ hiệu nhiều màu, gió biển, sóng lấp lánh, la bàn và bản ghi hành trình. Theme sáng, thanh lịch, có năng lượng lãnh đạo/định hướng, phù hợp portfolio muốn kể câu chuyện phát triển qua các chặng.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                              |
| ----------- | ------------------------------------------------------------------ |
| Cảm xúc     | Tự do, tự tin, trong trẻo, elegant summer, journey-driven          |
| Hình khối   | Sail card, signal flag, compass badge, logbook panel, rope divider |
| Không gian  | Biển sáng, thuyền buồm, cờ hiệu, la bàn, logbook trên boong        |
| Chuyển động | Sail billow, flag flutter, boat tilt, compass spin, wave sparkle   |
| Điểm nhấn   | Sailboat fleet, signal flags, rope knot, compass, sea logbook      |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F2FBFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#3FA9F5",
        colorTextBase: "#183A54",
        colorTextSecondary: "#5E7E92",
        colorSuccess: "#62D9B3",
        colorWarning: "#FFD36E",
        colorError: "#FF7A91",
        colorBorder: "#B9E5F7",
        borderRadius: 16,
        fontFamily: "'DM Sans', 'Playfair Display', sans-serif",
    },
};

// CSS Variables
// --regatta-sky: #F2FBFF;
// --sail-blue: #3FA9F5;
// --foam-white: #FFFFFF;
// --flag-coral: #FF7A91;
// --signal-yellow: #FFD36E;
// --seafoam-green: #62D9B3;
// --navy-log: #183A54;
// --rope-sand: #E8C88D;
```

### Typography

- **Heading:** `Playfair Display` tạo cảm giác diary thanh lịch và trưởng thành.
- **Body:** `DM Sans` hiện đại, rõ, cân bằng với hình ảnh regatta nhiều chi tiết.

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                              |
| --------------- | ------------------------------------------------------------------ |
| Framer Motion   | Sail card reveal, logbook page transition, project card hover      |
| SVGator         | Sail billow, flag flutter, boat tilt path, compass needle movement |
| Lenis           | Smooth scroll như đọc sea logbook từng chặng                       |
| CSS Keyframes   | Wave sparkle, rope sway, flag idle, compass glint                  |
| Realtime Colors | Kiểm palette blue/white/coral/yellow đủ sáng và chuyên nghiệp      |
| Blush           | Illustration sailing girl, regatta scene hoặc dock logbook         |

### Layout ideas

- **Hero:** Fleet thuyền buồm trên biển sáng, signal flags làm navigation accent.
- **About:** Logbook profile panel trên boong, có compass badge và rope corner.
- **Projects:** Mỗi project là một sail card/route entry với flag code riêng.
- **Skills:** Signal flag board, mỗi nhóm skill là một flag color set.
- **Contact:** "Send a harbor signal" CTA, flag raise và compass sparkle success.

### Animation rules

| Sự kiện          | Effect                                        | Thư viện       |
| ---------------- | --------------------------------------------- | -------------- |
| Page load        | Sea fade + sailboats slide-in + flags stagger | Framer/SVGator |
| Sail idle        | Sail billow bằng scale/skew nhẹ               | SVGator/CSS    |
| Boat motion      | Bob + tilt ±1.5deg, shadow move theo sóng     | CSS keyframes  |
| Signal flags     | Flutter 2–4s loop, delay lệch                 | CSS/SVGator    |
| Card hover       | Sail lift + flag code pop + compass glint     | Framer Motion  |
| Section entrance | Logbook page slide + rope divider draw        | Framer Motion  |
| Contact success  | Flag raise + compass needle spin + sparkle    | Framer Motion  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Sailboat regatta shell
│   ├── routes.js                       ← regatta, routes, flags, signal
│   └── theme.js
├── pages/
│   ├── RegattaHeroPage.jsx             ← Hero sailboat fleet + flags
│   ├── SailRouteProjectsPage.jsx       ← Projects dạng route/logbook entries
│   ├── SignalFlagsSkillsPage.jsx       ← Skills dạng flag board
│   └── HarborSignalContactPage.jsx     ← Contact flag/signal CTA
├── features/
│   ├── regatta-scene/
│   │   ├── SailboatFleetLayer.jsx
│   │   ├── SignalFlagLine.jsx
│   │   ├── WaveSparkleLayer.jsx
│   │   └── CompassGlint.jsx
│   ├── sail-projects/
│   │   ├── SailProjectGrid.jsx
│   │   ├── SailRouteCard.jsx
│   │   └── FlagCodeBadge.jsx
│   └── signal-skills/
│       ├── SignalFlagBoard.jsx
│       └── FlagSkillBadge.jsx
├── components/
│   ├── layout/                         ← Regatta nav, logbook transition wrapper
│   └── ui/                             ← SailButton, LogbookCard, FlagTag, CompassBadge
└── assets/sailboat-regatta-diary/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo            | Nội dung cần vẽ                                | Dùng cho            | Gợi ý kỹ thuật                         |
| -------------------------- | ---------------------------------------------- | ------------------- | -------------------------------------- |
| `sailboat-fleet-scene.svg` | Biển sáng, nhiều thuyền buồm, horizon, foam    | Hero/background     | Tách sail, hull, shadow, wave layer    |
| `signal-flag-line.svg`     | Dây cờ hiệu nhiều màu, flags, rope knots       | Nav/divider         | Flag group riêng để flutter            |
| `sea-logbook-frame.svg`    | Logbook, ruled paper, route line, date stamp   | About/projects      | Paper texture nhẹ, route line draw     |
| `compass-rope-icons.svg`   | Compass, rope, anchor, knot, helm, buoy        | Skills/nav          | Icon 24x24, currentColor + fill pastel |
| `sail-card-frames.svg`     | Card hình sail/window, rope corner, flag strip | Project cards       | Multi-color trim, shadow mềm           |
| `wave-sparkle-pattern.svg` | Wave lines, sparkle, foam dot                  | Background/particle | Opacity/translate loop                 |
| `harbor-signal-set.svg`    | Flag pole, raised flag, signal light, postcard | Contact CTA         | Flag raise transform, light glow       |
| `regatta-stamp-labels.svg` | Stamp, route label, number badge, ribbon       | Badges/cards        | SVG frame, text HTML overlay           |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                  |
| --------------- | ------------------------------------------------------------------------------------ |
| Theme ID        | Ghi rõ `sailboat-regatta-diary` trong data/theme config và README của sub-project    |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes |
| Pages           | Có đủ regatta hero, sail route projects, signal flags skills, harbor signal contact  |
| Feature folders | Tách `regatta-scene`, `sail-projects`, `signal-skills`                               |
| UI components   | Có `SailButton`, `LogbookCard`, `FlagTag`, `CompassBadge` dùng lại trong page        |
| Asset folder    | Tạo `src/assets/sailboat-regatta-diary/` và đủ 8 SVG files trong bảng asset          |
| Visual priority | Hero phải thể hiện rõ sailboat fleet, signal flags, sea logbook và wave sparkle      |
| Motion          | Nhấn mạnh sail billow, boat tilt, flag flutter, wave sparkle, compass glint          |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ     |
| Responsive      | Fleet/cards/flag board về 1 cột ở mobile, giảm wave sparkle và flag density          |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt sail billow, flag flutter, boat tilt     |
| Performance     | Giới hạn 20–30 animated elements visible, lazy load scene SVG, optimize bằng SVGO    |

---

## 10. `lighthouse-photo-trip` — Lighthouse Photo Trip Portfolio

Portfolio như một chuyến đi chụp ảnh ven biển: hải đăng trắng đỏ, máy ảnh film, postcard, film strip, mây sáng và sóng dịu. Theme thiên photography/media/design, có cảm giác ghi lại khoảnh khắc, sáng tạo và chỉn chu.

### Đặc điểm nhận dạng

| Yếu tố      | Mô tả                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Cảm xúc     | Sáng tạo, ký ức mùa hè, cinematic nhẹ, trong trẻo, coastal photo trip |
| Hình khối   | Film card, viewfinder frame, postcard panel, lighthouse badge         |
| Không gian  | Hải đăng ven biển, cliff, camera foreground, film strip, postcard     |
| Chuyển động | Lighthouse beam, shutter blink, film slide, cloud drift, wave glow    |
| Điểm nhấn   | Lighthouse, camera, film strip, photo frame, postcard stamps          |

### Bảng màu

```js
export const theme = {
    token: {
        colorBgBase: "#F1FAFF",
        colorBgContainer: "#FFFFFF",
        colorPrimary: "#5BBBEF",
        colorTextBase: "#1D3445",
        colorTextSecondary: "#60798A",
        colorSuccess: "#6FE0BD",
        colorWarning: "#FFD276",
        colorError: "#FF7C91",
        colorBorder: "#C3E8F8",
        borderRadius: 12,
        fontFamily: "'DM Sans', 'Fraunces', sans-serif",
    },
};

// CSS Variables
// --photo-sky: #F1FAFF;
// --lighthouse-blue: #5BBBEF;
// --film-ink: #1D3445;
// --beam-gold: #FFD276;
// --postcard-coral: #FF7C91;
// --seafoam: #6FE0BD;
// --cloud-white: #FFFFFF;
// --mist-border: #C3E8F8;
```

### Typography

- **Heading:** `Fraunces` có chất editorial/photo essay.
- **Body:** `DM Sans` hiện đại, đọc tốt trong layout gallery và caption.

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap");
```

### Library usage

| Library / Tool  | Cách dùng trong theme                                                 |
| --------------- | --------------------------------------------------------------------- |
| Framer Motion   | Film slide gallery, viewfinder reveal, card hover, modal transition   |
| SVGator         | Lighthouse beam sweep, shutter blink, wave glow, cloud drift          |
| Lenis           | Smooth scroll qua photo trip journal và gallery cards                 |
| CSS Keyframes   | Film strip drift, cloud float, beam pulse, sparkle on water           |
| Realtime Colors | Kiểm palette sky/blue/coral/gold cho ảnh giả lập và caption           |
| Blush           | Illustration photographer girl, lighthouse trip, coastal camera scene |

### Layout ideas

- **Hero:** Hải đăng trên cliff, beam quét nhẹ qua sky, camera viewfinder frame overlay.
- **About:** Profile như camera info card, có film border và postcard stamp.
- **Projects:** Project cards như photo prints/film frames; hover thì shutter blink và caption reveal.
- **Skills:** Camera bag toolkit: lens, film roll, tripod, map, notebook, editing spark.
- **Contact:** "Send photo postcard" CTA, postcard slide vào envelope với stamp pop.

### Animation rules

| Sự kiện         | Effect                                           | Thư viện       |
| --------------- | ------------------------------------------------ | -------------- |
| Page load       | Lighthouse fade + beam sweep + viewfinder reveal | Framer/SVGator |
| Lighthouse beam | Sweep 8–12s loop, opacity nhẹ                    | SVGator/CSS    |
| Shutter         | Blink 0.2s + small flash on card hover           | Framer/CSS     |
| Film strip      | Slide horizontal chậm, parallax theo scroll      | CSS/Framer     |
| Wave glow       | Sparkle on water, opacity lệch nhịp              | CSS keyframes  |
| Card hover      | Photo lift + caption reveal + stamp pop          | Framer Motion  |
| Contact success | Postcard slide + stamp seal + tiny flash         | Framer Motion  |

### Component notes

```txt
src/
├── app/
│   ├── App.jsx                         ← Lighthouse photo trip shell
│   ├── routes.js                       ← lighthouse, gallery, camera-bag, postcard
│   └── theme.js
├── pages/
│   ├── LighthouseHeroPage.jsx          ← Hero lighthouse + camera viewfinder
│   ├── PhotoGalleryProjectsPage.jsx    ← Projects dạng photo/film cards
│   ├── CameraBagSkillsPage.jsx         ← Skills dạng camera bag toolkit
│   └── PhotoPostcardContactPage.jsx    ← Contact postcard/envelope
├── features/
│   ├── lighthouse-scene/
│   │   ├── LighthouseBackground.jsx
│   │   ├── BeamSweepLayer.jsx
│   │   ├── ViewfinderOverlay.jsx
│   │   └── CoastalCloudDrift.jsx
│   ├── photo-gallery/
│   │   ├── FilmProjectGrid.jsx
│   │   ├── PhotoPrintCard.jsx
│   │   └── ShutterHoverReveal.jsx
│   └── camera-toolkit/
│       ├── CameraBagGrid.jsx
│       └── LensSkillBadge.jsx
├── components/
│   ├── layout/                         ← Photo trip nav, film transition wrapper
│   └── ui/                             ← ShutterButton, FilmCard, PostcardTag, LighthouseBadge
└── assets/lighthouse-photo-trip/
```

### Tự tạo Assets 2D bằng SVG

| File SVG tự tạo               | Nội dung cần vẽ                                     | Dùng cho              | Gợi ý kỹ thuật                          |
| ----------------------------- | --------------------------------------------------- | --------------------- | --------------------------------------- |
| `lighthouse-coast-scene.svg`  | Hải đăng, cliff, biển, mây, beam cone               | Hero/background       | Beam polygon/radialGradient tách riêng  |
| `camera-viewfinder-frame.svg` | Camera, viewfinder corners, focus dot, shutter icon | Hero/UI overlay       | Text HTML overlay, frame SVG responsive |
| `film-strip-frames.svg`       | Film strip, photo print, caption label              | Project cards/gallery | Frame reusable, hover reveal caption    |
| `postcard-stamp-photo.svg`    | Postcard, stamp, envelope, tape, photo corner       | Contact/about         | Postcard slide group riêng              |
| `camera-bag-icons.svg`        | Lens, tripod, film roll, SD card, map, notebook     | Skills/nav            | Icon 24x24, currentColor + pastel fill  |
| `coastal-cloud-wave.svg`      | Mây, wave line, sea sparkle, gull                   | Background/particle   | Cloud drift, sparkle twinkle            |
| `lighthouse-badges.svg`       | Lighthouse badge, compass rose, location pin        | Cards/badges          | Badge nhiều màu, currentColor support   |
| `shutter-flash-particles.svg` | Flash burst, sparkle, focus ring, tiny dot          | Motion layer          | Scale/opacity, không quá nhiều visible  |

### Yêu cầu triển khai bắt buộc

| Nhóm yêu cầu    | Quy định triển khai                                                                      |
| --------------- | ---------------------------------------------------------------------------------------- |
| Theme ID        | Ghi rõ `lighthouse-photo-trip` trong data/theme config và README của sub-project         |
| App shell       | Tách `src/app/App.jsx`, `src/app/routes.js`, `src/app/theme.js` theo component notes     |
| Pages           | Có đủ lighthouse hero, photo gallery projects, camera bag skills, photo postcard contact |
| Feature folders | Tách `lighthouse-scene`, `photo-gallery`, `camera-toolkit`                               |
| UI components   | Có `ShutterButton`, `FilmCard`, `PostcardTag`, `LighthouseBadge` dùng lại trong page     |
| Asset folder    | Tạo `src/assets/lighthouse-photo-trip/` và đủ 8 SVG files trong bảng asset               |
| Visual priority | Hero phải thể hiện rõ lighthouse, beam, camera viewfinder, film strip và biển            |
| Motion          | Nhấn mạnh lighthouse beam, shutter blink, film slide, cloud drift, wave glow             |
| Accessibility   | Text chính là HTML, SVG decoration dùng `alt=""` hoặc `aria-hidden`, contrast đủ         |
| Responsive      | Gallery/card layout về 1 cột ở mobile, giảm film strip và flash particle                 |
| Reduced motion  | Có fallback `prefers-reduced-motion` để tắt beam sweep, film slide và cloud drift        |
| Performance     | Giới hạn 20–30 animated elements visible, lazy load scene SVG, optimize bằng SVGO        |

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

| Việc cần làm                  | Tool nên dùng                            | Ghi chú triển khai                          |
| ----------------------------- | ---------------------------------------- | ------------------------------------------- |
| Page/route transition         | Framer Motion                            | Dùng variants/AnimatePresence               |
| Hover/tap card, modal, drawer | Framer Motion                            | Giữ UI animation gần component React        |
| Smooth scroll                 | Lenis                                    | Cleanup khi unmount, tắt khi reduced motion |
| Scroll progress transform     | Framer Motion `useScroll`/`useTransform` | Parallax, scale, progress indicator         |
| SVG scene animation           | SVGator export hoặc CSS keyframes        | Idle loop, decoration sway, path draw       |
| Particle/decoration idle      | CSS keyframes                            | Bubble, wave, cloud, fish swim loop         |
| Icon/badge micro-interaction  | CSS transition                           | Hover lift, rotate, glow                    |
| Complex SVG path animation    | SVG stroke-dashoffset + CSS              | Map path draw, underline, rope draw         |

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

| Nguyên tắc              | Mô tả                                                                     |
| ----------------------- | ------------------------------------------------------------------------- |
| Tông màu chủ đạo        | Xanh mát (ocean/teal/sky) + hồng pastel (coral/blush/rose)                |
| Cảm giác chung          | Mùa hè, biển, du lịch, trải nghiệm, tự do, nữ tính                        |
| Background-first scene  | Hero/background phải thể hiện rõ bối cảnh biển hoặc hành trình du lịch    |
| SVG-first approach      | Ưu tiên SVG 2D cho mọi decoration, icon, scene, background                |
| Animation philosophy    | Mềm, organic, gợi cảm giác nước/gió/tự nhiên, không quá nhanh             |
| Travel object driven    | Mỗi theme nên có vật thể chính: tàu, kayak, quầy chợ, thuyền buồm, camera |
| Accessibility           | Text luôn là HTML, contrast đủ trên nền pastel, reduced motion ready      |
| Mobile-first decoration | Giảm decoration trên mobile, giữ content rõ ràng                          |
| Reusable SVG symbols    | Dùng `<symbol>` và `<use>` để tái sử dụng elements trong SVG              |

### Checklist khi áp dụng theme

- [ ] Chọn theme ID và ghi vào `README.md` của sub-project.
- [ ] Cài stack: `framer-motion`, `lenis`.
- [ ] Tạo `src/app/motionConfig.js` và `src/app/lenisSetup.js`.
- [ ] Tạo `src/assets/<theme-id>/` chứa tất cả SVG files theo bảng asset.
- [ ] Tự vẽ hoặc generate tất cả SVG assets theo spec trong bảng "Tự tạo Assets 2D".
- [ ] Tách scene, animation và content features thành folder riêng.
- [ ] Background/hero scene phải import và render asset chính, không chỉ dùng gradient nền.
- [ ] Cards dùng decoration theo bối cảnh: ticket, marker, basket, flag, film frame, shell hoặc travel stamp.
- [ ] Dùng HTML/CSS cho text chính, form, button và navigation.
- [ ] Optimize SVG bằng SVGO trước khi commit.
- [ ] Kiểm tra desktop/mobile ở 375px, 768px, 1280px.
- [ ] Kiểm tra reduced motion và fallback khi SVG animation bị tắt.
- [ ] Đảm bảo color contrast ratio ≥ 4.5:1 cho text trên nền pastel.

---

_Cập nhật lần cuối: 2026-05-25 — Catalog 4: Summer Breeze & Travel themes với tông xanh mát, hồng pastel, nhiều SVG 2D assets, background-first travel scenes và animation biển/du lịch phong phú._
