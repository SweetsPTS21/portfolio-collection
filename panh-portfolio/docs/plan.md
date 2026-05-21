# Implementation Plan — panh-portfolio

## Phase 1: Project Setup

1. `npm create vite@latest . -- --template react` (hoặc init thủ công)
2. Cài dependencies:
   - `react@19` `react-dom@19` `react-router-dom` `antd` `framer-motion` `lenis` `lucide-react`
3. Cấu hình Vite (alias `@/` → `src/`)
4. Tạo cấu trúc thư mục:
   ```
   src/
   ├── assets/svg/         # SVG decorative assets
   ├── components/         # Shared UI components
   │   ├── Layout.jsx      # App shell (Navbar + Outlet + Footer)
   │   ├── Navbar.jsx
   │   ├── Footer.jsx
   │   └── SectionWrapper.jsx
   ├── pages/
   │   ├── About.jsx       # Trang 1: Hero + About
   │   ├── Projects.jsx    # Trang 2: Project cards
   │   └── Conclusion.jsx  # Trang 3: Tổng kết
   ├── theme.js            # Ant Design theme tokens
   ├── animations.js       # Framer Motion variants
   ├── App.jsx             # Router config
   ├── main.jsx            # Entry point (Lenis + ConfigProvider)
   └── index.css           # Global styles, fonts import
   ```

## Phase 2: Foundation

5. `theme.js` — Ant Design ConfigProvider tokens (colors, radius 0, typography, components)
6. `index.css` — Google Fonts import (Quicksand, Fredoka), CSS variables, global resets
7. `animations.js` — Framer Motion variants (fadeInUp, slideIn, stagger, float, hoverLift)
8. `main.jsx` — Lenis smooth scroll init + Ant ConfigProvider wrap
9. `App.jsx` — React Router setup (3 routes: `/`, `/projects`, `/conclusion`)

## Phase 3: Components

10. `Navbar.jsx` — Fixed top, glassmorphism, gradient logo, nav links
11. `Footer.jsx` — Gradient background, lời nhắn, thank you
12. `SectionWrapper.jsx` — Framer Motion scroll-triggered wrapper (InView)
13. `Layout.jsx` — Navbar + `<Outlet />` + Footer

## Phase 4: Pages

14. `About.jsx` — Hero section (2 cột: text + avatar) + thông tin cá nhân + định hướng
15. `Projects.jsx` — Grid cards (6 chapters), stagger animation, số thứ tự lớn
16. `Conclusion.jsx` — Quote, trải nghiệm, thách thức, lời nhắn nhủ

## Phase 5: SVG Assets & Polish

17. Tạo các SVG chính: square-dots-grid, gradient-blocks, equalizer-bars, frame-border, avatar-frame, hero-bg-shapes
18. Tích hợp SVG vào các page/component tương ứng
19. Responsive check (mobile/tablet/desktop)
20. Build test (`npm run build`) + fix lỗi nếu có

---

**Ước lượng:** ~20 bước, mỗi phase có thể review trước khi sang phase tiếp.
