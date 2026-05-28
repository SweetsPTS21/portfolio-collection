# 🍓 Natta Portfolio — Strawberry Glasshouse Theme

> Portfolio của **Tống Thị An Na** — Sinh viên ngành Luật Kinh Doanh, Đại học Luật – ĐHQGHN.  
> Theme: **Strawberry Glasshouse** — Nhà kính dâu tây thủy tinh mờ, giọt sương mai, ong béo, quả dâu hồng mọng.

---

## 🎨 Concept & Vibe

Một khu vườn dâu tây nhỏ xinh nằm trong nhà kính thủy tinh mờ (frosted glass greenhouse) ngập tràn nắng mai. Những quả dâu tây chín mọng màu hồng phấn, cành lá xanh non nhạt, giọt sương sớm đọng trên kính trượt dài, chú ong mật tròn mập lướt cánh xung quanh. Thiết kế kính mờ trong suốt (high opacity glassmorphism) bao phủ toàn bộ thẻ bài, đem lại cảm giác tự nhiên, tươi mới nhưng cực kỳ cute và thơ mộng.

**Cảm xúc:** Tươi mát · Bình yên · Trong trẻo · Gần gũi thiên nhiên · Dâu tây ngọt ngào

---

## 🏗️ Tech Stack

| Công nghệ | Phiên bản / Vai trò |
|---|---|
| React | 18.x |
| Framer Motion | UI animation, page transition, scroll reveal, card hover |
| Lenis | Smooth scroll qua garden rows |
| Lucide Icons | Icon hệ thống (nav, badge, UI) |
| Vite | Build tool |

```bash
npm install react@18 react-dom@18 framer-motion lenis lucide-react
```

---

## 🎨 Bảng màu — Pink Pastel Nhạt & Dịu

Palette hồng pastel nhạt, dịu dàng, lấy cảm hứng từ dâu tây chín trong nhà kính sương mai.

```js
export const theme = {
  // Primary palette — Hồng pastel nhạt dịu
  berryPink: '#FFA0AB',        // Hồng dâu chín — primary accent
  berryBlush: '#FFD1D8',       // Hồng phấn nhạt — hover/glow
  berryRose: '#FF8A9A',        // Hồng đậm hơn — CTA/button
  
  // Supporting palette
  leafGreen: '#84E2A8',        // Xanh lá non — success/leaf
  honeyYellow: '#FFE17A',      // Vàng mật ong — warning/bee
  dewBlue: '#9DE4FF',          // Xanh sương — info/dew
  glasshouseMint: '#F2FBF6',   // Xanh bạc hà nhạt — background chính
  
  // Neutral
  bgBase: '#FFF8FA',           // Nền trắng hồng rất nhạt
  bgGlass: 'rgba(255, 255, 255, 0.75)', // Glass card
  textPrimary: '#3D2B33',     // Text chính — nâu hồng đậm
  textSecondary: '#7A5D66',   // Text phụ — nâu hồng nhạt
  border: 'rgba(255, 160, 171, 0.25)', // Border hồng mờ
  
  borderRadius: 22,
};
```

### CSS Variables

```css
:root {
  --berry-pink: #FFA0AB;
  --berry-blush: #FFD1D8;
  --berry-rose: #FF8A9A;
  --leaf-green: #84E2A8;
  --honey-yellow: #FFE17A;
  --dew-blue: #9DE4FF;
  --glasshouse-mint: #F2FBF6;
  --bg-base: #FFF8FA;
  --bg-glass: rgba(255, 255, 255, 0.75);
  --text-primary: #3D2B33;
  --text-secondary: #7A5D66;
  --border-glass: rgba(255, 160, 171, 0.25);
}
```

---

## ✍️ Typography

| Vai trò | Font | Đặc điểm |
|---|---|---|
| Heading | `Comfortaa` | Tròn lịm, ấm áp, gợi tả quả dâu căng tròn |
| Body | `Quicksand` | Trong trẻo, mềm mại, dễ đọc |

```css
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400..700&family=Quicksand:wght@300..700&display=swap');
```

---

## 🗺️ Kiến trúc 3 Routes

| Route | Page | Mô tả |
|---|---|---|
| `/` | `GreenhouseHeroPage` | Hero nhà kính ngập nắng + About giới thiệu An Na |
| `/projects` | `StrawberryBasketsPage` | 6 bài tập dạng giỏ dâu tây glassmorphic |
| `/conclusion` | `JamFactoryPage` | Kết luận + hướng phát triển, hũ mứt dâu ngọt ngào |

---

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── AnimatedRoutes.jsx          ← Route transition với Framer Motion
│   ├── routeConfig.jsx             ← Cấu hình 3 routes
│   └── theme.js                    ← Bảng màu & design tokens
├── App.jsx                         ← Root component + Lenis smooth scroll
├── main.jsx                        ← Entry point
├── index.css                       ← Global styles + CSS variables
│
├── pages/
│   ├── GreenhouseHeroPage.jsx      ← Hero nhà kính + About section
│   ├── StrawberryBasketsPage.jsx   ← Projects 6 bài tập
│   └── JamFactoryPage.jsx          ← Conclusion + future plans
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx              ← Navigation glassmorphic
│   │   ├── Footer.jsx              ← Footer với dâu tây decoration
│   │   └── PageTransition.jsx      ← Framer Motion page wrapper
│   ├── ui/
│   │   ├── GlassCard.jsx           ← Card glassmorphism chính
│   │   ├── BerryButton.jsx         ← Button hồng dâu tây
│   │   ├── LeafBadge.jsx           ← Badge lá xanh
│   │   └── HoneycombGrid.jsx       ← Grid layout tổ ong
│   └── background/
│       ├── GreenhouseBackground.jsx ← Background nhà kính chính
│       ├── DewDropLayer.jsx         ← Layer giọt sương rơi
│       ├── BeeFloating.jsx          ← Ong béo bay lượn
│       ├── StrawberryVines.jsx      ← Dây dâu tây trang trí
│       ├── SunbeamRays.jsx          ← Tia nắng xuyên kính
│       ├── LeafSwayLayer.jsx        ← Lá đung đưa
│       └── FloatingPetals.jsx       ← Cánh hoa bay nhẹ
│
├── data/
│   └── portfolioData.js            ← Nội dung từ portfolio.md
│
└── assets/
    └── strawberry-glasshouse/
        ├── greenhouse-frame.svg     ← Khung nhà kính thủy tinh mờ
        ├── strawberry-branch.svg    ← Cành dâu tây trĩu quả
        ├── chubby-bee.svg           ← Ong béo mascot
        ├── dew-drops.svg            ← Giọt sương trên kính
        ├── honeycomb-pattern.svg    ← Pattern tổ ong lục giác
        ├── jam-jar.svg              ← Hũ mứt dâu thủy tinh
        ├── strawberry-icons.svg     ← Bộ icon dâu tây, lá, ong
        ├── leaf-cluster.svg         ← Cụm lá xanh non
        ├── sunbeam-caustics.svg     ← Tia nắng khúc xạ qua kính
        ├── flower-white.svg         ← Hoa dâu tây trắng nhỏ
        ├── berry-basket.svg         ← Giỏ đan đựng dâu
        └── glass-pane-texture.svg   ← Texture kính mờ sương
```

---

## 🌿 Background — Điểm nhấn chính

Background là yếu tố quan trọng nhất, tạo nên không gian nhà kính dâu tây sống động với nhiều layers animation chồng lên nhau.

### Cấu trúc layers (từ xa → gần)

```
Layer 1: Nền gradient mint nhạt (#F2FBF6 → #FFF8FA)
Layer 2: Khung nhà kính thủy tinh mờ (greenhouse-frame.svg) — tĩnh
Layer 3: Tia nắng xuyên kính (SunbeamRays) — shimmer chậm 8-12s
Layer 4: Dây dâu tây treo lơ lửng (StrawberryVines) — sway nhẹ 5-7s
Layer 5: Giọt sương trượt trên kính (DewDropLayer) — slide down 4-6s
Layer 6: Ong béo bay lượn (BeeFloating) — path curve random 10-15s
Layer 7: Lá xanh đung đưa (LeafSwayLayer) — pendulum 3-5s
Layer 8: Cánh hoa trắng bay (FloatingPetals) — drift diagonal 8s
Layer 9: UI Content (cards, text)
```

### Animation rules cho background

| Element | Animation | Duration | Thư viện |
|---|---|---|---|
| Greenhouse frame | Fade in + scale(0.95→1) khi load | 1.2s | Framer Motion |
| Sunbeam rays | Shimmer opacity 0.3↔0.7, translateX nhẹ | 8-12s loop | CSS keyframes |
| Strawberry vines | Sway pendulum ±3deg | 5-7s loop | CSS keyframes |
| Dew drops | Slide down kính, stretch dẹt, fade ở bottom | 4-6s stagger | Framer Motion |
| Chubby bee | Fly path curve bézier, wing buzz ±3deg 0.05s | 10-15s path | Framer Motion + CSS |
| Leaf sway | Pendulum wave oscillation | 3-5s loop | CSS keyframes |
| Floating petals | Drift diagonal, rotate nhẹ, fade out | 8s stagger | CSS keyframes |
| Strawberry glow | Pulse opacity 0.6↔1, subtle scale | 2.5s loop | CSS keyframes |
| Glass fog | Blur overlay fade in/out theo scroll | Scroll-based | Framer Motion |

### Hiệu ứng đặc biệt

- **Glassmorphism toàn bộ card:** `backdrop-filter: blur(12px); background: rgba(255,255,255,0.75); border: 1px solid rgba(255,160,171,0.25);`
- **Bee follows cursor:** Ong béo bay theo hướng cursor với delay mượt (Framer Motion spring)
- **Dew drop on hover:** Khi hover card, giọt sương nhỏ rơi từ cạnh trên card
- **Strawberry ripen:** Dâu tây chuyển từ xanh → hồng → đỏ khi scroll qua section
- **Parallax depth:** Background layers di chuyển với tốc độ khác nhau khi scroll

---

## 🃏 Card Design — Độc đáo

### Strawberry Basket Glass Card

Card chính cho projects — kết hợp glassmorphism + hình dáng giỏ dâu tây:

```
┌─────────────────────────────────┐
│  🍓 ~~~ ribbon bow ~~~ 🍓      │  ← Nơ rơm trang trí trên cùng
├─────────────────────────────────┤
│                                 │
│  ┌───────────────────────────┐  │
│  │   ░░ frosted glass ░░    │  │  ← Glassmorphism panel
│  │                           │  │
│  │   📋 Tên bài tập         │  │
│  │   📝 Mô tả ngắn          │  │
│  │                           │  │
│  │   🍃 leaf badge: chương   │  │  ← LeafBadge component
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  ╲___basket weave pattern___╱   │  ← Pattern đan giỏ ở bottom
└─────────────────────────────────┘
```

**Hover effects:**
- Card float up 6px + shadow mở rộng hồng nhạt
- Dâu tây trong card phát sáng (glow pulse)
- Hạt dâu lấp lánh xà cừ (seed sparkle particles)
- Lá xanh xung quanh sway mạnh hơn
- Giọt sương nhỏ rơi từ cạnh trên

### Glass Window Pane Card (About)

Card giới thiệu dạng ô cửa kính nhà kính:

```
╔═══════════╦═══════════╗
║  ░ dew ░  ║  ░ dew ░  ║  ← Ô kính với giọt sương
║           ║           ║
║  Avatar   ║  Thông    ║
║  An Na    ║  tin cá   ║
║           ║  nhân     ║
╠═══════════╬═══════════╣
║           ║           ║
║  Kỹ năng  ║  Nguyên   ║
║  nổi bật  ║  tắc      ║
║           ║           ║
╚═══════════╩═══════════╝
    🐝 bee flying around
```

### Jam Jar Card (Conclusion)

Card kết luận dạng hũ mứt dâu:

```
      ___cap___
     /  cork  \
    │ ~~~~~~~~ │  ← Nắp cork + dây cói
    ├──────────┤
    │          │
    │  Glass   │  ← Thân hũ glassmorphic
    │  Jar     │
    │  Content │
    │          │
    │  🍓🍓🍓  │  ← Dâu tây decoration
    │          │
    └──────────┘
      ~ label ~   ← Nhãn dán cute
```

---

## 📄 Nội dung Portfolio

### Route 1: Hero + About (`/`)

**Hero section:**
- Tên: Tống Thị An Na
- Tagline: Sinh viên ngành Luật Kinh Doanh — Đại học Luật – ĐHQGHN
- Mô tả: "Hồ sơ được thiết lập dựa trên nguyên tắc Tối ưu hóa trải nghiệm người xem"

**About section:**
- Phong cách: Gọn · Rõ · Có hệ thống
- Sở thích: Chơi cầu lông · Đọc truyện · Xem phim · Du lịch
- Năng lực nổi bật:
  - Quản lý và tổ chức dữ liệu số
  - Khai thác tài liệu học thuật
  - Prompt Engineering
  - Tái cấu trúc và trình bày thông tin
- Công cụ: File Explorer, Google Scholar, ChatGPT, Gemini, Canva, Midjourney, Trello, Google Docs, Slack

### Route 2: Projects (`/projects`)

6 bài tập, mỗi bài là một Strawberry Basket Card:

| # | Tên bài | Chương | Mô tả ngắn |
|---|---|---|---|
| 1 | Máy tính và thiết bị ngoại vi | Chương 1 | Tổng quan máy tính, thành phần cơ bản và thiết bị ngoại vi |
| 2 | Khai thác dữ liệu và thông tin | Chương 2 | Tìm kiếm, thu thập, tổ chức thông tin, đánh giá nguồn |
| 3 | Tổng quan về trí tuệ nhân tạo | Chương 3 | AI: khái niệm, ứng dụng, lợi ích – rủi ro |
| 4 | Giao tiếp và hợp tác môi trường số | Chương 4 | Kỹ năng giao tiếp số, làm việc nhóm online |
| 5 | Sáng tạo nội dung số | Chương 5 | Lên ý tưởng, công cụ, biên tập, bản quyền |
| 6 | An toàn và liêm chính học thuật | Chương 6 | An toàn số, bảo mật, quyền riêng tư, liêm chính |

### Route 3: Conclusion (`/conclusion`)

- Tổng kết quá trình học
- Những thay đổi nhận thấy (có kế hoạch hơn, chủ động hơn, nhận thức AI rõ hơn)
- Kinh nghiệm rút ra
- Đánh giá chung portfolio
- Hướng phát triển tương lai

---

## 🎬 Animation Mạnh — Chi tiết

### Page Transitions (Framer Motion)

```jsx
// Route transition: Glass fog wipe
const pageVariants = {
  initial: { opacity: 0, filter: 'blur(8px)', scale: 0.96 },
  animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  exit: { opacity: 0, filter: 'blur(4px)', scale: 1.02 },
};
// transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
```

### Section Entrances (Framer Motion + Scroll)

```jsx
// Stagger children khi scroll vào viewport
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};
```

### Background Animations (CSS Keyframes)

```css
@keyframes beeFly {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(40px, -20px) rotate(5deg); }
  50% { transform: translate(80px, 10px) rotate(-3deg); }
  75% { transform: translate(30px, 30px) rotate(4deg); }
}

@keyframes dewSlide {
  0% { transform: translateY(-10px) scaleY(0.8); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateY(100vh) scaleY(1.4); opacity: 0; }
}

@keyframes leafSway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes sunbeamShimmer {
  0%, 100% { opacity: 0.3; transform: translateX(0); }
  50% { opacity: 0.7; transform: translateX(5px); }
}

@keyframes strawberryGlow {
  0%, 100% { filter: brightness(1) drop-shadow(0 0 0px #FFA0AB); }
  50% { filter: brightness(1.1) drop-shadow(0 0 8px #FFA0AB); }
}

@keyframes wingBuzz {
  0%, 100% { transform: rotate(-3deg) scaleY(1); }
  50% { transform: rotate(3deg) scaleY(0.9); }
}

@keyframes floatPetal {
  0% { transform: translate(0, -20px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(60px, 100vh) rotate(180deg); opacity: 0; }
}
```

### Interactive Animations

| Interaction | Animation | Chi tiết |
|---|---|---|
| Card hover | Float + glow + seed sparkle | translateY(-6px), box-shadow expand, particles |
| Button click | Berry squish | scale(0.92) → spring back 1.05 → 1 |
| Nav link hover | Leaf grow | Icon lá scale(1→1.2) + rotate(5deg) |
| Scroll progress | Strawberry ripen | Dâu chuyển màu theo scroll position |
| Page load | Greenhouse reveal | Glass fog clear + bee entrance flight |
| Project card click | Basket open | Card expand + content slide up |

---

## 🖼️ Assets SVG cần tạo

| File | Nội dung | Dùng cho | Kỹ thuật |
|---|---|---|---|
| `greenhouse-frame.svg` | Khung nhà kính lớn, ô cửa kính mờ, đọng sương | Background chính | Path ô vuông, fill gradient trong suốt |
| `strawberry-branch.svg` | Cành dâu trĩu quả hồng/đỏ, hoa trắng, lá 3 thùy | Decoration/cards | Tách cành, quả, lá riêng để animate |
| `chubby-bee.svg` | Ong tròn béo vàng đen, cánh trong suốt | Mascot bay lượn | Tách cánh để buzz, fill pastel yellow |
| `dew-drops.svg` | Giọt sương nhiều kích cỡ, phản chiếu ánh sáng | Background layer | Path giọt nước, gradient highlight |
| `honeycomb-pattern.svg` | Tổ ong lục giác xếp tile, phát sáng mật ong | Skills grid | Hexagon pattern, radial gradient |
| `jam-jar.svg` | Hũ mứt thủy tinh tròn béo, nắp cork, dây cói | Conclusion section | Tách nắp, thân, nhãn riêng |
| `strawberry-icons.svg` | Bộ icon: dâu, lá, ong, hũ, tổ ong, kính, xẻng | Nav/badge 24x24 | Stroke 2px, berry-pink/leaf-green |
| `leaf-cluster.svg` | Cụm lá xanh non 3 thùy nhiều góc | Decoration corners | Organic path, fill gradient xanh |
| `sunbeam-caustics.svg` | Tia nắng khúc xạ qua kính mờ | Background overlay | Path diagonal, opacity thấp |
| `flower-white.svg` | Hoa dâu tây trắng 5 cánh nhỏ xinh | Floating particles | Simple petal shape, fill white |
| `berry-basket.svg` | Giỏ đan mây/rơm đựng dâu | Project card bottom | Weave pattern, fill warm brown |
| `glass-pane-texture.svg` | Texture kính mờ có vân sương | Card overlay | Pattern opacity rất thấp 0.05 |
| `ribbon-bow.svg` | Nơ rơm/ribbon buộc giỏ | Card top decoration | Tách 2 cánh nơ để animate |
| `vine-border.svg` | Dây leo dâu tây viền trang trí | Page border/divider | Path curve organic, lá nhỏ dọc theo |

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `≥1200px` | 3 columns grid, full background animations |
| `768–1199px` | 2 columns, giảm bớt particles |
| `<768px` | 1 column, tắt bee follow cursor, giảm dew drops |

---

## ⚡ Performance Notes

- Lazy load background layers khi scroll vào viewport
- Dùng `will-change: transform` cho animated elements
- SVG assets dùng `<symbol>` + `<use>` để tái sử dụng
- Giảm particle count trên mobile (matchMedia)
- Framer Motion `useReducedMotion()` cho accessibility
- Lenis chỉ init trên desktop, mobile dùng native scroll

---

## 📋 Checklist triển khai

- [ ] Setup Vite + React 18 + routing
- [ ] Cấu hình theme.js với bảng màu hồng pastel
- [ ] Tạo 3 routes với AnimatedRoutes
- [ ] Tạo bộ SVG assets (12-14 files)
- [ ] Build GreenhouseBackground với đầy đủ layers
- [ ] Implement GlassCard component (glassmorphism)
- [ ] Build StrawberryBasketCard cho projects
- [ ] Implement tất cả CSS keyframe animations
- [ ] Framer Motion page transitions + scroll reveals
- [ ] Lenis smooth scroll integration
- [ ] Bee floating animation (follow cursor on desktop)
- [ ] Responsive adjustments
- [ ] Performance optimization
- [ ] Deploy

---

© 2026 • Tống Thị An Na • Strawberry Glasshouse Portfolio
