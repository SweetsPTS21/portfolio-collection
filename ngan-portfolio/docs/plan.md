# Implementation Plan — ngan-portfolio (fairy-mushroom-forest)

> Cấu trúc tham khảo yenvi-portfolio. Theme: Enchanted Bioluminescent Forest.

---

## Cấu trúc dự án

```
ngan-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── docs/
├── public/
│   └── assets/         # avatar, pdf bài tập
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css       # Global CSS, fonts, keyframes, CSS variables
│   ├── app/
│   │   ├── AnimatedRoutes.jsx
│   │   └── routeConfig.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ForestScene.jsx      # Background parallax layers + fireflies + mist
│   │   │   ├── Navbar.jsx           # Stepping stones navigation
│   │   │   └── PageShell.jsx        # Page wrapper + entrance animation
│   │   ├── about/
│   │   │   ├── HeroSection.jsx
│   │   │   └── InfoCards.jsx
│   │   ├── projects/
│   │   │   ├── MushroomCard.jsx
│   │   │   └── ForestPath.jsx
│   │   ├── conclusion/
│   │   │   └── ConclusionBlock.jsx
│   │   └── ui/
│   │       ├── GlowButton.jsx
│   │       ├── LeafBadge.jsx
│   │       └── FireflyParticles.jsx
│   ├── assets/fairy-mushroom-forest/
│   │   ├── mushroom-collection.svg
│   │   ├── firefly-dots.svg
│   │   ├── forest-leaves.svg
│   │   ├── forest-bg-layers.svg
│   │   └── fairy-icons.svg
│   └── pages/
│       ├── AboutPage.jsx
│       ├── ProjectsPage.jsx
│       └── ConclusionPage.jsx
```

---

## Tasks

### Phase 1: Setup (3 tasks)

1. **Init project** — package.json (react, react-dom, react-router-dom, framer-motion, lenis, lucide-react, vite, @vitejs/plugin-react), vite.config.js, index.html (Google Fonts: Baloo 2 + Quicksand)
2. **index.css** — CSS variables (palette fairy-mushroom-forest), global reset, font import, keyframes (firefly-glow, mist-drift, mushroom-pulse, leaf-fall, moss-shimmer)
3. **portfolioData.js** — Dữ liệu từ portfolio.md (about info, 6 projects, conclusion)

### Phase 2: App Shell (3 tasks)

4. **main.jsx + App.jsx** — BrowserRouter, app shell với ForestScene + Navbar + AnimatedRoutes
5. **AnimatedRoutes.jsx + routeConfig.jsx** — 3 routes (/, /projects, /conclusion), framer-motion page transition (fairy dust fade)
6. **ForestScene.jsx** — Fixed background: parallax layers (sky gradient, tree silhouettes, mushroom glow, firefly dots, mist). CSS keyframes cho firefly + mist drift

### Phase 3: Layout Components (2 tasks)

7. **Navbar.jsx** — Stepping stones nav: 3 items (About, Projects, Conclusion), active stone glow, fixed top, glass background
8. **PageShell.jsx** — Wrapper cho mỗi page: Lenis smooth scroll init, framer-motion entrance (fadeInUp + firefly stagger)

### Phase 4: UI Components (3 tasks)

9. **GlowButton.jsx** — Button với bioluminescent glow on hover, xanh lá primary
10. **LeafBadge.jsx** — Tag/badge hình lá, dùng cho skills/tools
11. **FireflyParticles.jsx** — Animated firefly dots (CSS), dùng làm decoration trong sections

### Phase 5: Pages (3 tasks)

12. **AboutPage.jsx** — Hero (tên lớn + avatar trong mushroom frame + fairy dust), info cards (chuyên ngành, sở thích, phong cách), định hướng, công cụ (LeafBadge grid)
13. **ProjectsPage.jsx** — Forest path layout: 6 MushroomCard (cap = header gradient, stem = content), zigzag/stagger, số thứ tự lớn
14. **ConclusionPage.jsx** — Quote block (enchanted glow), điểm tâm đắc, thách thức, lời nhắn nhủ

### Phase 6: SVG Assets + Polish (2 tasks)

15. **Tạo SVG assets** — mushroom-collection, firefly-dots, forest-leaves, forest-bg-layers (silhouette layers), fairy-icons
16. **Build + responsive test** — npm run build, fix lỗi, check mobile 375px/768px/1280px

---

## Tổng: 16 tasks, 6 phases
