# Bunny Cloud Garden Portfolio — Design Spec

> **Project:** nhi-portfolio  
> **Theme:** `bunny-cloud-garden` (Catalog 5)  
> **Approach:** Pragmatic — Framer Motion + Lenis + Antd, SVG-only mascot  
> **Date:** 2025-05-19

---

## 1. Architecture

### Routes (Multi-page, React Router v7)

| Path | Page | Content |
|------|------|---------|
| `/` | CloudGardenHeroPage | Hero + About + Skills |
| `/projects` | FlowerBedProjectsPage | 6 chương dạng flower cards |
| `/conclusion` | GardenMailboxPage | Conclusion + Contact |

### Shell: `GardenShell`

- Wraps all routes via `<Outlet />`
- Antd `ConfigProvider` with theme tokens
- Lenis smooth scroll init/destroy
- Background decoration layers (clouds, petals, sparkles)
- Bottom navigation `GardenNav`
- `AnimatePresence` for page transitions

### Tech Stack

| Package | Version | Role |
|---------|---------|------|
| react | ^19.x | UI framework |
| react-dom | ^19.x | DOM renderer |
| react-router-dom | ^7.x | Routing |
| antd | ^6.x | UI components + theme |
| @ant-design/cssinjs | ^2.x | Antd CSS-in-JS |
| framer-motion | ^12.x | Animation |
| lenis | ^1.x | Smooth scroll |
| lucide-react | ^1.x | Icon set |
| vite | ^8.x | Build tool |
| tailwindcss | ^3.x | Utility CSS |
| @playwright/test | ^1.x | E2E testing |

---

## 2. Theme & Styling

### Antd Theme Tokens

```js
{
  colorBgBase: '#FFF5F9',
  colorBgContainer: '#FFFFFF',
  colorPrimary: '#FF8ABF',
  colorTextBase: '#3D2244',
  colorTextSecondary: '#8A6B8F',
  colorSuccess: '#7EEDC8',
  colorWarning: '#FFE17A',
  colorInfo: '#A8D4FF',
  colorBorder: '#FFD6E8',
  borderRadius: 22,
  fontFamily: "'Comfortaa', 'Nunito', sans-serif",
}
```

### CSS Variables

```css
--bunny-pink: #FF8ABF;
--cloud-white: #FFF5F9;
--garden-mint: #7EEDC8;
--sunshine-yellow: #FFE17A;
--sky-blue: #A8D4FF;
--lavender-soft: #D8B8FF;
--petal-coral: #FFB8C8;
--rainbow-orange: #FFB87A;
```

### Typography

- Heading: `Comfortaa` (500, 600, 700)
- Body: `Nunito` (400, 600, 700, 800)
- Import via Google Fonts

### Tailwind Extend

- Custom colors from CSS variables
- `fontFamily.heading: ['Comfortaa', 'sans-serif']`
- `fontFamily.body: ['Nunito', 'sans-serif']`
- `borderRadius.garden: '22px'`

### Body Background

`linear-gradient(180deg, #FFF5F9 0%, #FFFFFF 100%)`

---

## 3. Pages & Components

### Page 1: CloudGardenHeroPage (`/`)

**GardenHero section:**
- Cloud landscape SVG background
- Bunny SVG mascot center (CSS idle animation: ear wiggle + blink)
- Rainbow arc SVG behind bunny (stroke-dashoffset draw animation)
- Flowers growing from bottom edge
- Name "Nguyễn Phương Nhi" in Comfortaa heading
- Tagline: "Đơn giản, thẳng thắn và luôn sẵn sàng thích nghi."
- CTA button "Khám phá vườn hoa" → `/projects`

**GardenAboutCard section:**
- Profile card with flower pot tag styling
- Avatar (from docs/avatar.jpg), name, major, university, hobbies
- Định hướng: trở thành người hành nghề luật trong kỷ nguyên số
- Cloud decoration at corners
- Framer Motion fadeUp entrance

**GreenhouseSkills section:**
- Năng lực nổi bật (4 items): plant badge with icon
  - Tư duy số
  - Khai thác AI hiệu quả
  - Kỹ năng học thuật
  - Thiết kế & trình bày
- Công cụ sử dụng (5 items): seed badge
  - Google Drive/OneDrive
  - Google Scholar/ResearchGate
  - ChatGPT/Claude
  - Figma/Adobe
  - Notion/Microsoft

### Page 2: FlowerBedProjectsPage (`/projects`)

- Intro text
- Grid: 2 columns desktop, 1 column mobile
- 6 flower cards, each with:
  - Flower SVG icon (unique per chapter)
  - Chapter number + title
  - Description (content + process merged)
  - "Xem bài tập" button → opens PDF
- Flower color mapping:
  - Ch1: Tulip pink (#FF8ABF)
  - Ch2: Sunflower gold (#FFE17A)
  - Ch3: Lavender (#D8B8FF)
  - Ch4: Petal coral (#FFB8C8)
  - Ch5: Sky blue (#A8D4FF)
  - Ch6: Garden mint (#7EEDC8)
- Hover: scale(1.03) + petal burst pseudo-element
- Entrance: stagger fadeUp 0.1s

### Page 3: GardenMailboxPage (`/conclusion`)

**Conclusion section:**
- Tổng kết môn học
- Kỹ năng đạt được (4 items)
- Điều tâm đắc nhất
- Thách thức lớn nhất
- Định hướng phát triển

**Footer:**
- "© 2026 • Nguyễn Phương Nhi • Bunny Cloud Garden Portfolio"

---

## 4. Background Layers (GardenShell)

| Layer | Component | Animation | Count |
|-------|-----------|-----------|-------|
| 1 | CloudBackground | Drift horizontal 15–25s loop, CSS keyframes | 3–4 clouds |
| 2 | PetalFallLayer | Fall diagonal + rotate + fade, CSS keyframes | 8–12 petals |
| 3 | DewSparkle | Twinkle opacity pulse 2–4s, CSS keyframes | 5–8 dots |

All layers: `position: fixed`, `pointer-events: none`, `z-index: 0`.
Content sits at `z-index: 10`.

---

## 5. Navigation: GardenNav

- Position: fixed bottom
- 3 items with emoji + label:
  - 🏡 Vườn hoa → `/`
  - 🌷 Dự án → `/projects`
  - 💌 Tổng kết → `/conclusion`
- Active: bunny-pink color + slight scale bounce
- Background: white with soft shadow, border-radius top
- Mobile-friendly: full width, centered items

---

## 6. Animation System

### Motion Config (Framer Motion variants)

| Variant | Use | Values |
|---------|-----|--------|
| `pageVariants` | Route transition | opacity 0→1, scale 0.96→1 |
| `fadeUp` | Section entrance | opacity 0→1, y 24→0 |
| `fadeScale` | Card entrance | opacity 0→1, scale 0.92→1 |
| `staggerContainer` | Parent for stagger | staggerChildren: 0.1 |
| `petalBurst` | Card hover | scale 0→1, opacity burst |
| `cloudFloat` | Bunny idle | y ±4px, 3s loop |
| `rainbowDraw` | Hero rainbow | strokeDashoffset animate |

### CSS Keyframes

| Animation | Duration | Use |
|-----------|----------|-----|
| `cloudDrift` | 15–25s | Background clouds |
| `petalFall` | 8–12s | Falling petals |
| `dewTwinkle` | 2–4s | Sparkle dots |
| `bunnyEarWiggle` | 4s | Mascot ears |
| `bunnyBlink` | 5s | Mascot eyes |
| `flowerSway` | 3–5s | Hero flowers |
| `rainbowArcDraw` | 1.5s | Hero rainbow |

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce` — durations set to 0.01ms.

---

## 7. SVG Assets (Inline Components)

All SVGs are React components in `src/assets/bunny-cloud-garden/`:

| Component | Content | Used in |
|-----------|---------|---------|
| `BunnyMascot.jsx` | Bunny with animatable ears + eyes | Hero |
| `CloudShapes.jsx` | 3–4 cloud variants | Background |
| `GardenFlowers.jsx` | Tulip, daisy, sunflower, rose, lavender, mint | Hero + cards |
| `RainbowArc.jsx` | 5-color pastel arc | Hero |
| `PetalShapes.jsx` | Petal variants for falling | Background |
| `DewSparkles.jsx` | Sparkle dots | Background |
| `FlowerIcons.jsx` | 6 flower icons for project cards | Projects |
| `GardenIcons.jsx` | Flower pot, seed, leaf, butterfly | Nav/badges |

---

## 8. Data Structure

`src/data/portfolioData.js` — single file exporting:

```js
export const personalInfo = { name, tagline, motto, major, university, hobbies, style, avatarUrl };
export const orientation = { title, content[] };
export const portfolioMission = { title, content, skills[], principles[] };
export const coreSkills = { title, items[{title, text}] };
export const toolsets = { title, items[{title, text}] };
export const projects = { title, intro, items[{chapter, title, content, process, pdf}] };
export const conclusion = { summary, skills[], insight, challenge, future[] };
```

PDF imports: `import bt1Pdf from '../../docs/bt1.pdf'` (Vite assetsInclude).

---

## 9. File Structure

```txt
nhi-portfolio/
├── docs/
│   ├── avatar.jpg
│   ├── bt1.pdf – bt6.pdf
│   ├── portfolio.md
│   └── specs/
│       └── 2025-05-19-bunny-cloud-garden-design.md
├── public/
│   ├── favicon.svg
│   └── _redirects
├── src/
│   ├── app/
│   │   ├── motionConfig.js
│   │   ├── lenisSetup.js
│   │   ├── routes.jsx
│   │   └── theme.js
│   ├── assets/
│   │   └── bunny-cloud-garden/
│   │       ├── BunnyMascot.jsx
│   │       ├── CloudShapes.jsx
│   │       ├── GardenFlowers.jsx
│   │       ├── RainbowArc.jsx
│   │       ├── PetalShapes.jsx
│   │       ├── DewSparkles.jsx
│   │       ├── FlowerIcons.jsx
│   │       └── GardenIcons.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GardenShell.jsx
│   │   │   └── GardenNav.jsx
│   │   └── ui/
│   │       ├── PageTransition.jsx
│   │       ├── CloudButton.jsx
│   │       └── PlantBadge.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── features/
│   │   ├── cloud-scene/
│   │   │   ├── CloudBackground.jsx
│   │   │   ├── PetalFallLayer.jsx
│   │   │   └── DewSparkle.jsx
│   │   ├── garden-hero/
│   │   │   ├── GardenHero.jsx
│   │   │   └── GardenAboutCard.jsx
│   │   ├── greenhouse-skills/
│   │   │   ├── SkillCluster.jsx
│   │   │   └── ToolsetCluster.jsx
│   │   └── flower-projects/
│   │       └── FlowerProjectCard.jsx
│   ├── pages/
│   │   ├── CloudGardenHeroPage.jsx
│   │   ├── FlowerBedProjectsPage.jsx
│   │   └── GardenMailboxPage.jsx
│   ├── index.css
│   └── main.jsx
├── tests/
│   └── render-check.spec.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── playwright.config.js
├── netlify.toml
└── README.md
```

---

## 10. Performance & Accessibility

- Lazy load: không cần (app nhỏ, 3 pages)
- Background layers: `position: fixed`, `pointer-events: none`
- Mobile: giảm petal count từ 12 → 6, cloud từ 4 → 2 (via CSS media query)
- Text: luôn HTML, không trong SVG
- Contrast: tất cả text trên nền #FFF5F9 hoặc #FFFFFF đều ≥ 4.5:1 (đã verify #3D2244 trên #FFF5F9 = 11.2:1)
- Reduced motion: tắt tất cả animation
- PDF links: `target="_blank" rel="noopener noreferrer"`
- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`
- Nav: aria-current cho active route

---

_End of spec._
