# Bunny Cloud Garden Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build nhi-portfolio as a multi-page React portfolio with the bunny-cloud-garden theme — cute SVG decorations, pastel colors, Framer Motion animations, and Lenis smooth scroll.

**Architecture:** React 19 + Vite 8 SPA with react-router-dom v7 (3 routes). Antd ConfigProvider for theme tokens. Framer Motion for page transitions and scroll reveal. Lenis for smooth scroll. Inline SVG components for all decorations. Tailwind for utility styling.

**Tech Stack:** React 19, Vite 8, react-router-dom 7, antd 6, framer-motion 12, lenis, lucide-react, tailwindcss 3, Playwright

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies and scripts |
| `index.html` | HTML entry point |
| `vite.config.js` | Vite config with PDF asset support |
| `tailwind.config.js` | Custom colors, fonts, border-radius |
| `postcss.config.js` | Tailwind + autoprefixer |
| `eslint.config.js` | ESLint flat config |
| `playwright.config.js` | E2E test config |
| `netlify.toml` | Deploy config |
| `public/favicon.svg` | Bunny favicon |
| `public/_redirects` | SPA redirect |
| `src/main.jsx` | React entry |
| `src/index.css` | Global styles, fonts, CSS variables, keyframes |
| `src/app/theme.js` | Antd theme tokens |
| `src/app/motionConfig.js` | Framer Motion variants |
| `src/app/lenisSetup.js` | Smooth scroll init/destroy |
| `src/app/routes.jsx` | Router config |
| `src/data/portfolioData.js` | All content data |
| `src/assets/bunny-cloud-garden/BunnyMascot.jsx` | Bunny SVG with CSS animation |
| `src/assets/bunny-cloud-garden/CloudShapes.jsx` | Cloud SVG variants |
| `src/assets/bunny-cloud-garden/RainbowArc.jsx` | Rainbow arc SVG |
| `src/assets/bunny-cloud-garden/PetalShapes.jsx` | Petal SVG variants |
| `src/assets/bunny-cloud-garden/FlowerIcons.jsx` | 6 flower icons for projects |
| `src/components/layout/GardenShell.jsx` | App shell with bg layers + nav |
| `src/components/layout/GardenNav.jsx` | Bottom navigation |
| `src/components/ui/PageTransition.jsx` | Framer Motion page wrapper |
| `src/components/ui/CloudButton.jsx` | CTA button styled |
| `src/components/ui/PlantBadge.jsx` | Skill/tool badge |
| `src/features/cloud-scene/CloudBackground.jsx` | Floating clouds layer |
| `src/features/cloud-scene/PetalFallLayer.jsx` | Falling petals layer |
| `src/features/cloud-scene/DewSparkle.jsx` | Sparkle dots layer |
| `src/features/garden-hero/GardenHero.jsx` | Hero section |
| `src/features/garden-hero/GardenAboutCard.jsx` | About profile card |
| `src/features/greenhouse-skills/SkillCluster.jsx` | Skills display |
| `src/features/greenhouse-skills/ToolsetCluster.jsx` | Tools display |
| `src/features/flower-projects/FlowerProjectCard.jsx` | Project card |
| `src/pages/CloudGardenHeroPage.jsx` | Home page |
| `src/pages/FlowerBedProjectsPage.jsx` | Projects page |
| `src/pages/GardenMailboxPage.jsx` | Conclusion page |
| `tests/render-check.spec.js` | E2E render tests |

---

### Task 1: Project Scaffold & Config

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `eslint.config.js`
- Create: `playwright.config.js`
- Create: `netlify.toml`
- Create: `public/favicon.svg`
- Create: `public/_redirects`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "nhi-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1 --port 5190",
    "build": "vite build",
    "lint": "eslint .",
    "test:e2e": "playwright test",
    "preview": "vite preview --host 127.0.0.1 --port 4190"
  },
  "dependencies": {
    "@ant-design/cssinjs": "^2.1.2",
    "antd": "^6.4.3",
    "framer-motion": "^12.39.0",
    "lenis": "^1.3.23",
    "lucide-react": "^1.16.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.15.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@playwright/test": "^1.60.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "postcss": "^8.5.14",
    "tailwindcss": "^3.4.19",
    "vite": "^8.0.12"
  }
}
```

- [ ] **Step 2: Create index.html**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nguyễn Phương Nhi — Bunny Cloud Garden Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create vite.config.js**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
});
```

- [ ] **Step 4: Create tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      fontFamily: {
        heading: ['Comfortaa', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        bunny: { pink: '#FF8ABF' },
        cloud: { white: '#FFF5F9' },
        garden: { mint: '#7EEDC8' },
        sunshine: { yellow: '#FFE17A' },
        sky: { blue: '#A8D4FF' },
        lavender: { soft: '#D8B8FF' },
        petal: { coral: '#FFB8C8' },
        rainbow: { orange: '#FFB87A' },
      },
      borderRadius: {
        garden: '22px',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Create postcss.config.js**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 6: Create eslint.config.js**

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
```

- [ ] **Step 7: Create playwright.config.js**

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:5190',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:5190',
    reuseExistingServer: !process.env.CI,
  },
});
```

- [ ] **Step 8: Create netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- [ ] **Step 9: Create public/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="18" r="10" fill="#FFD6E8"/>
  <ellipse cx="12" cy="8" rx="3" ry="7" fill="#FF8ABF"/>
  <ellipse cx="20" cy="8" rx="3" ry="7" fill="#FF8ABF"/>
  <circle cx="13" cy="18" r="2" fill="#3D2244"/>
  <circle cx="19" cy="18" r="2" fill="#3D2244"/>
  <ellipse cx="16" cy="21" rx="1.5" ry="1" fill="#FF8ABF"/>
</svg>
```

- [ ] **Step 10: Create public/_redirects**

```
/*    /index.html   200
```

- [ ] **Step 11: Install dependencies**

Run: `npm install`
Expected: `node_modules` created, `package-lock.json` generated, no errors.

- [ ] **Step 12: Commit**

```bash
git add .
git commit -m "feat(nhi): scaffold project with vite, tailwind, antd, framer-motion"
```

---

### Task 2: App Core (Entry, Theme, Motion, Lenis)

**Files:**
- Create: `src/main.jsx`
- Create: `src/index.css`
- Create: `src/app/theme.js`
- Create: `src/app/motionConfig.js`
- Create: `src/app/lenisSetup.js`

- [ ] **Step 1: Create src/main.jsx**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

- [ ] **Step 2: Create src/index.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bunny-pink: #FF8ABF;
  --cloud-white: #FFF5F9;
  --garden-mint: #7EEDC8;
  --sunshine-yellow: #FFE17A;
  --sky-blue: #A8D4FF;
  --lavender-soft: #D8B8FF;
  --petal-coral: #FFB8C8;
  --rainbow-orange: #FFB87A;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  background: linear-gradient(180deg, #FFF5F9 0%, #FFFFFF 100%);
  color: #3D2244;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }

/* Cloud drift animation */
@keyframes cloudDrift {
  0% { transform: translateX(0); }
  50% { transform: translateX(30px); }
  100% { transform: translateX(0); }
}

/* Petal fall animation */
@keyframes petalFall {
  0% {
    transform: translateY(-20px) translateX(0) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(50vh) translateX(20px) rotate(180deg);
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) translateX(-10px) rotate(360deg);
    opacity: 0;
  }
}

/* Dew sparkle twinkle */
@keyframes dewTwinkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Bunny ear wiggle */
@keyframes bunnyEarWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

/* Bunny blink */
@keyframes bunnyBlink {
  0%, 90%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
}

/* Flower sway */
@keyframes flowerSway {
  0%, 100% { transform: rotate(0deg); }
  33% { transform: rotate(3deg); }
  66% { transform: rotate(-3deg); }
}

/* Rainbow arc draw */
@keyframes rainbowDraw {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}

/* Reduced motion */
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

- [ ] **Step 3: Create src/app/theme.js**

```js
export const theme = {
  token: {
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
  },
};
```

- [ ] **Step 4: Create src/app/motionConfig.js**

```js
/** Framer Motion variants and configuration for bunny-cloud-garden */

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

export const easeTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const pageVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

export const pageTransition = {
  duration: prefersReducedMotion ? 0 : 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
};

export const fadeScale = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
    },
  },
};

export const petalBurst = {
  initial: { opacity: 0, scale: 0, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
};

export const cloudFloat = {
  initial: { y: 0 },
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const isReducedMotion = prefersReducedMotion;
```

- [ ] **Step 5: Create src/app/lenisSetup.js**

```js
import Lenis from 'lenis';

let lenisInstance = null;

export function initLenis() {
  if (typeof window === 'undefined') return null;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) return null;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
```

- [ ] **Step 6: Commit**

```bash
git add src/main.jsx src/index.css src/app/
git commit -m "feat(nhi): add app core - theme, motion config, lenis, entry"
```

---

### Task 3: SVG Assets

**Files:**
- Create: `src/assets/bunny-cloud-garden/BunnyMascot.jsx`
- Create: `src/assets/bunny-cloud-garden/CloudShapes.jsx`
- Create: `src/assets/bunny-cloud-garden/RainbowArc.jsx`
- Create: `src/assets/bunny-cloud-garden/PetalShapes.jsx`
- Create: `src/assets/bunny-cloud-garden/FlowerIcons.jsx`

- [ ] **Step 1: Create BunnyMascot.jsx**

```jsx
export default function BunnyMascot({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left ear */}
      <ellipse
        cx="42" cy="35" rx="10" ry="28"
        fill="#FFD6E8"
        stroke="#FF8ABF"
        strokeWidth="2"
        className="origin-bottom"
        style={{ animation: 'bunnyEarWiggle 4s ease-in-out infinite' }}
      />
      <ellipse cx="42" cy="35" rx="5" ry="18" fill="#FF8ABF" opacity="0.3" />

      {/* Right ear */}
      <ellipse
        cx="78" cy="35" rx="10" ry="28"
        fill="#FFD6E8"
        stroke="#FF8ABF"
        strokeWidth="2"
        className="origin-bottom"
        style={{ animation: 'bunnyEarWiggle 4s ease-in-out infinite 0.5s' }}
      />
      <ellipse cx="78" cy="35" rx="5" ry="18" fill="#FF8ABF" opacity="0.3" />

      {/* Body */}
      <ellipse cx="60" cy="110" rx="30" ry="35" fill="#FFF5F9" stroke="#FFD6E8" strokeWidth="2" />

      {/* Head */}
      <circle cx="60" cy="80" r="28" fill="#FFFFFF" stroke="#FFD6E8" strokeWidth="2" />

      {/* Cheeks */}
      <circle cx="44" cy="85" r="5" fill="#FFD6E8" opacity="0.6" />
      <circle cx="76" cy="85" r="5" fill="#FFD6E8" opacity="0.6" />

      {/* Eyes */}
      <g style={{ animation: 'bunnyBlink 5s ease-in-out infinite' }}>
        <circle cx="50" cy="76" r="4" fill="#3D2244" />
        <circle cx="70" cy="76" r="4" fill="#3D2244" />
        <circle cx="51.5" cy="74.5" r="1.5" fill="#FFFFFF" />
        <circle cx="71.5" cy="74.5" r="1.5" fill="#FFFFFF" />
      </g>

      {/* Nose */}
      <ellipse cx="60" cy="84" rx="3" ry="2" fill="#FF8ABF" />

      {/* Mouth */}
      <path d="M57 87 Q60 90 63 87" stroke="#FF8ABF" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Tiny flower held */}
      <circle cx="85" cy="105" r="4" fill="#FFE17A" />
      <circle cx="82" cy="102" r="2.5" fill="#FF8ABF" />
      <circle cx="88" cy="102" r="2.5" fill="#FF8ABF" />
      <circle cx="82" cy="108" r="2.5" fill="#FF8ABF" />
      <circle cx="88" cy="108" r="2.5" fill="#FF8ABF" />
      <line x1="85" y1="109" x2="85" y2="120" stroke="#7EEDC8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
```

- [ ] **Step 2: Create CloudShapes.jsx**

```jsx
export function Cloud1({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="60" cy="35" rx="40" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="40" cy="30" rx="25" ry="18" fill="white" opacity="0.95" />
      <ellipse cx="80" cy="32" rx="22" ry="16" fill="white" opacity="0.9" />
      <ellipse cx="55" cy="25" rx="20" ry="15" fill="white" />
    </svg>
  );
}

export function Cloud2({ className = '' }) {
  return (
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="50" cy="30" rx="35" ry="16" fill="white" opacity="0.85" />
      <ellipse cx="35" cy="25" rx="20" ry="14" fill="white" opacity="0.9" />
      <ellipse cx="65" cy="27" rx="18" ry="13" fill="white" />
    </svg>
  );
}

export function Cloud3({ className = '' }) {
  return (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="40" cy="24" rx="28" ry="14" fill="white" opacity="0.8" />
      <ellipse cx="28" cy="20" rx="16" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="52" cy="22" rx="14" ry="10" fill="white" />
    </svg>
  );
}
```

- [ ] **Step 3: Create RainbowArc.jsx**

```jsx
export default function RainbowArc({ className = '' }) {
  const colors = ['#FF8ABF', '#FFB87A', '#FFE17A', '#7EEDC8', '#A8D4FF'];
  return (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {colors.map((color, i) => (
        <path
          key={color}
          d={`M ${10 + i * 4} 95 A ${90 - i * 4} ${85 - i * 4} 0 0 1 ${190 - i * 4} 95`}
          stroke={color}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="300"
          style={{ animation: `rainbowDraw 1.5s ease-out ${i * 0.15}s forwards` }}
        />
      ))}
    </svg>
  );
}
```

- [ ] **Step 4: Create PetalShapes.jsx**

```jsx
const petalColors = ['#FF8ABF', '#FFB8C8', '#D8B8FF', '#FFE17A', '#A8D4FF'];

export function Petal({ color = petalColors[0], className = '' }) {
  return (
    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="6" cy="8" rx="4" ry="7" fill={color} opacity="0.7" />
      <ellipse cx="6" cy="6" rx="2" ry="4" fill="white" opacity="0.3" />
    </svg>
  );
}

export function getPetalColor(index) {
  return petalColors[index % petalColors.length];
}
```

- [ ] **Step 5: Create FlowerIcons.jsx**

```jsx
/** 6 flower icons — one per project chapter */

export function TulipIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M16 8 C12 8 10 12 10 16 C10 20 13 22 16 22 C19 22 22 20 22 16 C22 12 20 8 16 8Z" fill="#FF8ABF" />
      <path d="M14 10 C14 6 16 4 16 4 C16 4 18 6 18 10" fill="#FFD6E8" />
      <line x1="16" y1="22" x2="16" y2="30" stroke="#7EEDC8" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 26 Q16 24 19 26" fill="#7EEDC8" opacity="0.6" />
    </svg>
  );
}

export function SunflowerIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse key={angle} cx="16" cy="8" rx="3" ry="5" fill="#FFE17A" transform={`rotate(${angle} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="5" fill="#C8A070" />
      <line x1="16" y1="22" x2="16" y2="30" stroke="#7EEDC8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LavenderIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <line x1="16" y1="12" x2="16" y2="30" stroke="#7EEDC8" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="16" cy="8" rx="3" ry="4" fill="#D8B8FF" />
      <ellipse cx="14" cy="12" rx="2.5" ry="3" fill="#D8B8FF" opacity="0.8" />
      <ellipse cx="18" cy="12" rx="2.5" ry="3" fill="#D8B8FF" opacity="0.8" />
      <ellipse cx="15" cy="16" rx="2" ry="2.5" fill="#D8B8FF" opacity="0.6" />
      <ellipse cx="17" cy="16" rx="2" ry="2.5" fill="#D8B8FF" opacity="0.6" />
    </svg>
  );
}

export function CoralFlowerIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="16" cy="9" rx="4" ry="6" fill="#FFB8C8" transform={`rotate(${angle} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="4" fill="#FFE17A" />
      <line x1="16" y1="22" x2="16" y2="30" stroke="#7EEDC8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DaisyIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse key={angle} cx="16" cy="9" rx="3" ry="5" fill="white" stroke="#FFD6E8" strokeWidth="0.5" transform={`rotate(${angle} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="4" fill="#FFE17A" />
      <line x1="16" y1="22" x2="16" y2="30" stroke="#7EEDC8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MintLeafIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M16 4 C8 8 6 16 8 22 C10 26 14 28 16 28 C18 28 22 26 24 22 C26 16 24 8 16 4Z" fill="#7EEDC8" />
      <path d="M16 6 L16 26" stroke="#5ECBA0" strokeWidth="1" opacity="0.6" />
      <path d="M16 12 L12 16" stroke="#5ECBA0" strokeWidth="0.8" opacity="0.5" />
      <path d="M16 16 L20 20" stroke="#5ECBA0" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

/** Array for easy mapping by chapter index (0-based) */
export const flowerIcons = [TulipIcon, SunflowerIcon, LavenderIcon, CoralFlowerIcon, DaisyIcon, MintLeafIcon];
export const flowerColors = ['#FF8ABF', '#FFE17A', '#D8B8FF', '#FFB8C8', '#A8D4FF', '#7EEDC8'];
```

- [ ] **Step 6: Commit**

```bash
git add src/assets/
git commit -m "feat(nhi): add SVG asset components - bunny, clouds, rainbow, petals, flowers"
```

---

### Task 4: Data Layer

**Files:**
- Create: `src/data/portfolioData.js`

- [ ] **Step 1: Create src/data/portfolioData.js**

```js
import avatarUrl from '../../docs/avatar.jpg';
import bt1Pdf from '../../docs/bt1.pdf';
import bt2Pdf from '../../docs/bt2.pdf';
import bt3Pdf from '../../docs/bt3.pdf';
import bt4Pdf from '../../docs/bt4.pdf';
import bt5Pdf from '../../docs/bt5.pdf';
import bt6Pdf from '../../docs/bt6.pdf';

export const personalInfo = {
  name: 'Nguyễn Phương Nhi',
  tagline: 'WELCOME TO MY PORTFOLIO',
  motto: 'Đơn giản, thẳng thắn và luôn sẵn sàng thích nghi.',
  major: 'Luật Học',
  university: 'Đại học Luật — Đại học Quốc gia Hà Nội',
  hobbies: 'Xem phim, nấu ăn, chơi cầu lông, đi du lịch',
  style: 'Đơn giản, thẳng tính, thích nghi nhanh, có tinh thần trách nhiệm',
  avatarUrl,
};

export const orientation = {
  title: 'La Bàn Định Hướng',
  content: [
    'Trở thành người hành nghề luật trong kỷ nguyên số.',
    'Hoàn thiện tư duy pháp lý, đặc biệt mài giũa chuyên sâu trong mảng pháp luật kinh tế quốc tế và bảo vệ quyền lợi người tiêu dùng.',
    'Không chỉ dừng lại ở việc nắm vững các văn bản quy phạm, mà còn làm chủ công nghệ để tối ưu hóa quá trình tra cứu, phân tích và lập luận pháp lý một cách sắc bén, hiện đại.',
  ],
};

export const portfolioMission = {
  title: 'Không gian lưu trữ',
  content:
    'Website này vượt ra khỏi khuôn khổ của một bài báo cáo môn học thông thường. Đây là một không gian lưu trữ tư duy và kỹ năng số, nơi ghi nhận toàn bộ quá trình tiếp nhận dữ liệu, đánh giá tính logic của thông tin, và ứng dụng công nghệ để sáng tạo có trách nhiệm.',
};

export const coreSkills = {
  title: 'Năng lực nổi bật',
  items: [
    {
      title: 'Tư duy số',
      text: 'Biết cách học tập, lưu trữ và xử lý thông tin khoa học hơn trên nền tảng số.',
    },
    {
      title: 'Khai thác AI hiệu quả',
      text: 'Thành thạo trong việc đặt prompt, chọn lọc và kiểm chứng nội dung AI tạo ra.',
    },
    {
      title: 'Kỹ năng học thuật',
      text: 'Nâng cao khả năng tìm kiếm tài liệu, đánh giá nguồn tin và trình bày thông tin logic.',
    },
    {
      title: 'Thiết kế & trình bày',
      text: 'Biết cách xây dựng portfolio rõ ràng, trực quan và có tính hệ thống.',
    },
  ],
};

export const toolsets = {
  title: 'Công cụ sử dụng',
  items: [
    { title: 'Quản lý tài liệu', text: 'Google Drive, OneDrive' },
    { title: 'Nguồn học thuật', text: 'Google Scholar, ResearchGate' },
    { title: 'AI hỗ trợ', text: 'ChatGPT, Claude' },
    { title: 'Thiết kế nội dung', text: 'Figma, Adobe' },
    { title: 'Làm việc nhóm', text: 'Notion, Microsoft' },
  ],
};

export const projects = {
  title: 'Dự án',
  intro:
    'Dưới đây là tập hợp các sản phẩm và quá trình nghiên cứu trong suốt khóa học, thể hiện sự giao thoa giữa kỹ năng số và tư duy học thuật.',
  items: [
    {
      chapter: 1,
      title: 'Máy tính & Thiết bị ngoại vi',
      content: 'Nắm bắt nền tảng vận hành của không gian số.',
      process:
        'Báo cáo hệ thống hóa cấu trúc phần cứng và nguyên lý xử lý dữ liệu. Việc hiểu rõ nền tảng thiết bị giúp tối ưu hóa hiệu suất làm việc với các phần mềm xử lý văn bản.',
      pdf: bt1Pdf,
    },
    {
      chapter: 2,
      title: 'Khai thác dữ liệu và thông tin',
      content: 'Kỹ năng tra cứu, chọn lọc và thẩm định nguồn tài liệu trên Internet.',
      process:
        'Ứng dụng các bộ lọc tìm kiếm nâng cao để tra cứu án lệ và học thuyết pháp lý phức tạp. Rèn luyện thói quen tiếp cận dữ liệu gốc và đánh giá lập luận đa chiều.',
      pdf: bt2Pdf,
    },
    {
      chapter: 3,
      title: 'Tổng quan trí tuệ nhân tạo',
      content: 'Nắm bắt bản chất và xu hướng của làn sóng công nghệ AI.',
      process:
        'Thử nghiệm dùng AI tra cứu thông tin và phân tích các điểm mù logic. AI là cỗ máy tổng hợp dữ liệu xuất sắc, nhưng hoàn toàn vô năng nếu thiếu tư duy phản biện.',
      pdf: bt3Pdf,
    },
    {
      chapter: 4,
      title: 'Giao tiếp trong môi trường số',
      content: 'Xây dựng kỹ năng làm việc và cộng tác trên nền tảng trực tuyến.',
      process:
        'Tham gia phân chia tài liệu, phối hợp chỉnh sửa nội dung nhóm và duy trì trao đổi công việc trên nền tảng số.',
      pdf: bt4Pdf,
    },
    {
      chapter: 5,
      title: 'Sáng tạo nội dung số',
      content: 'Ứng dụng AI tạo sinh trong thiết kế và xây dựng nội dung học tập.',
      process:
        'Tự xây dựng ý tưởng và định hướng nội dung, sử dụng AI để hỗ trợ phản biện, minh họa và tối ưu cách trình bày.',
      pdf: bt5Pdf,
    },
    {
      chapter: 6,
      title: 'An toàn và Liêm chính học thuật',
      content: 'Nâng cao nhận thức về đạo đức số và trách nhiệm khi sử dụng AI.',
      process:
        'Chủ động trích dẫn nguồn minh bạch, kiểm tra lại dữ liệu từ AI và hạn chế chia sẻ thông tin cá nhân trên các nền tảng mở.',
      pdf: bt6Pdf,
    },
  ],
};

export const conclusion = {
  summary:
    'Môn học Nhập môn Công nghệ số và Trí tuệ nhân tạo đã giúp em thay đổi cách nhìn về công nghệ: từ một công cụ hỗ trợ đơn thuần trở thành trợ lý học thuật giúp tối ưu tư duy, nghiên cứu và sáng tạo nội dung số.',
  skills: [
    'Tư duy số: Biết cách học tập, lưu trữ và xử lý thông tin khoa học hơn trên nền tảng số.',
    'Khai thác AI hiệu quả: Thành thạo hơn trong việc đặt prompt, chọn lọc và kiểm chứng nội dung AI tạo ra.',
    'Kỹ năng học thuật: Nâng cao khả năng tìm kiếm tài liệu, đánh giá nguồn tin và trình bày thông tin logic.',
    'Thiết kế & trình bày: Biết cách xây dựng portfolio rõ ràng, trực quan và có tính hệ thống.',
  ],
  insight:
    'AI không thay thế tư duy con người, mà giá trị thật sự nằm ở cách con người sử dụng và kiểm soát công nghệ. Từ việc dùng AI để làm nhanh, em học được cách dùng AI để làm tốt hơn.',
  challenge:
    'Làm quen với nhiều công cụ và nền tảng mới trong thời gian ngắn. Giữ được dấu ấn cá nhân và tư duy phản biện thay vì phụ thuộc hoàn toàn vào nội dung do AI tạo ra.',
  future: [
    'Tiếp tục hoàn thiện portfolio theo hướng chuyên nghiệp và hiện đại hơn.',
    'Ứng dụng AI và công nghệ số vào học tập, nghiên cứu và các hoạt động chuyên môn trong tương lai.',
    'Phát triển tư duy công nghệ đi cùng với trách nhiệm và liêm chính học thuật.',
  ],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/data/
git commit -m "feat(nhi): add portfolio data layer with all content"
```

---

### Task 5: UI Components

**Files:**
- Create: `src/components/ui/PageTransition.jsx`
- Create: `src/components/ui/CloudButton.jsx`
- Create: `src/components/ui/PlantBadge.jsx`

- [ ] **Step 1: Create PageTransition.jsx**

```jsx
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../app/motionConfig';

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create CloudButton.jsx**

```jsx
import { Link } from 'react-router-dom';

export default function CloudButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full
        bg-bunny-pink text-white font-heading font-semibold text-sm
        shadow-md hover:shadow-lg hover:scale-105
        transition-all duration-200 ease-out
        ${className}`}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 3: Create PlantBadge.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeScale } from '../../app/motionConfig';

export default function PlantBadge({ icon: Icon, title, text, color = '#FF8ABF' }) {
  return (
    <motion.div
      variants={fadeScale}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-3 p-4 rounded-garden bg-white/80 border border-[var(--bunny-pink)]/20 shadow-sm"
    >
      {Icon && (
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={20} color={color} />
        </div>
      )}
      <div>
        <h4 className="font-heading font-semibold text-sm text-[#3D2244] mb-0.5">{title}</h4>
        <p className="text-xs text-[#8A6B8F] leading-relaxed m-0">{text}</p>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat(nhi): add UI components - PageTransition, CloudButton, PlantBadge"
```

---

### Task 6: Background Scene Features

**Files:**
- Create: `src/features/cloud-scene/CloudBackground.jsx`
- Create: `src/features/cloud-scene/PetalFallLayer.jsx`
- Create: `src/features/cloud-scene/DewSparkle.jsx`

- [ ] **Step 1: Create CloudBackground.jsx**

```jsx
import { Cloud1, Cloud2, Cloud3 } from '../../assets/bunny-cloud-garden/CloudShapes';

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <Cloud1
        className="absolute top-[8%] left-[5%] w-32 md:w-48 opacity-70"
        style={{ animation: 'cloudDrift 20s ease-in-out infinite' }}
      />
      <Cloud2
        className="absolute top-[15%] right-[10%] w-24 md:w-36 opacity-60"
        style={{ animation: 'cloudDrift 25s ease-in-out infinite 3s' }}
      />
      <Cloud3
        className="absolute top-[35%] left-[60%] w-20 md:w-28 opacity-50"
        style={{ animation: 'cloudDrift 18s ease-in-out infinite 7s' }}
      />
      <Cloud1
        className="absolute top-[55%] left-[15%] w-16 md:w-24 opacity-40 hidden md:block"
        style={{ animation: 'cloudDrift 22s ease-in-out infinite 5s' }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Create PetalFallLayer.jsx**

```jsx
import { Petal, getPetalColor } from '../../assets/bunny-cloud-garden/PetalShapes';

const petals = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 4}s`,
  size: 10 + Math.random() * 8,
  rotation: Math.random() * 360,
}));

export default function PetalFallLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-4"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            animation: `petalFall ${p.duration} linear ${p.delay} infinite`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          <Petal color={getPetalColor(p.id)} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create DewSparkle.jsx**

```jsx
const sparkles = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  top: `${15 + Math.random() * 70}%`,
  left: `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 4}s`,
  duration: `${2 + Math.random() * 2}s`,
  size: 3 + Math.random() * 4,
}));

export default function DewSparkle() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            boxShadow: '0 0 4px 1px rgba(255,138,191,0.4)',
            animation: `dewTwinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/features/cloud-scene/
git commit -m "feat(nhi): add background scene - clouds, petals, sparkles"
```

---

### Task 7: Layout Shell & Navigation

**Files:**
- Create: `src/components/layout/GardenShell.jsx`
- Create: `src/components/layout/GardenNav.jsx`
- Create: `src/app/routes.jsx`

- [ ] **Step 1: Create GardenNav.jsx**

```jsx
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Vườn hoa', emoji: '🏡' },
  { to: '/projects', label: 'Dự án', emoji: '🌷' },
  { to: '/conclusion', label: 'Tổng kết', emoji: '💌' },
];

export default function GardenNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm
        border-t border-[var(--bunny-pink)]/20 shadow-[0_-2px_12px_rgba(255,138,191,0.1)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex justify-center items-center gap-1 py-2 px-4 m-0 list-none max-w-md mx-auto">
        {navItems.map(({ to, label, emoji }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-xl text-center
                no-underline transition-all duration-200
                ${isActive
                  ? 'text-[var(--bunny-pink)] scale-105 bg-[var(--bunny-pink)]/10'
                  : 'text-[#8A6B8F] hover:text-[var(--bunny-pink)]'
                }`
              }
            >
              <span className="text-lg" role="img" aria-hidden="true">{emoji}</span>
              <span className="text-xs font-body font-semibold">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 2: Create GardenShell.jsx**

```jsx
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { theme } from '../../app/theme';
import { initLenis, destroyLenis } from '../../app/lenisSetup';
import GardenNav from './GardenNav';
import CloudBackground from '../../features/cloud-scene/CloudBackground';
import PetalFallLayer from '../../features/cloud-scene/PetalFallLayer';
import DewSparkle from '../../features/cloud-scene/DewSparkle';

export default function GardenShell() {
  const location = useLocation();

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background scene layers */}
        <CloudBackground />
        <PetalFallLayer />
        <DewSparkle />

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <main className="flex-1 px-4 md:px-8 lg:px-16 py-8 pb-24">
            <AnimatePresence mode="wait">
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </main>
          <GardenNav />
        </div>
      </div>
    </ConfigProvider>
  );
}
```

- [ ] **Step 3: Create routes.jsx**

```jsx
import { createBrowserRouter } from 'react-router-dom';
import GardenShell from '../components/layout/GardenShell';
import CloudGardenHeroPage from '../pages/CloudGardenHeroPage';
import FlowerBedProjectsPage from '../pages/FlowerBedProjectsPage';
import GardenMailboxPage from '../pages/GardenMailboxPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GardenShell />,
    children: [
      { index: true, element: <CloudGardenHeroPage /> },
      { path: 'projects', element: <FlowerBedProjectsPage /> },
      { path: 'conclusion', element: <GardenMailboxPage /> },
    ],
  },
]);
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/ src/app/routes.jsx
git commit -m "feat(nhi): add GardenShell, GardenNav, and routes"
```

---

### Task 8: Hero & About Features

**Files:**
- Create: `src/features/garden-hero/GardenHero.jsx`
- Create: `src/features/garden-hero/GardenAboutCard.jsx`

- [ ] **Step 1: Create GardenHero.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeUp, cloudFloat } from '../../app/motionConfig';
import BunnyMascot from '../../assets/bunny-cloud-garden/BunnyMascot';
import RainbowArc from '../../assets/bunny-cloud-garden/RainbowArc';
import CloudButton from '../../components/ui/CloudButton';
import { personalInfo } from '../../data/portfolioData';

export default function GardenHero() {
  return (
    <section className="relative flex flex-col items-center text-center pt-8 pb-16 min-h-[70vh] justify-center">
      {/* Rainbow behind bunny */}
      <div className="absolute top-[10%] w-64 md:w-80 opacity-60">
        <RainbowArc className="w-full" />
      </div>

      {/* Bunny mascot */}
      <motion.div
        variants={cloudFloat}
        initial="initial"
        animate="animate"
        className="relative z-10 w-32 md:w-40 mb-6"
      >
        <BunnyMascot className="w-full h-auto" />
      </motion.div>

      {/* Name & tagline */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#3D2244] mb-2">
          {personalInfo.name}
        </h1>
        <blockquote className="text-base md:text-lg text-[#8A6B8F] italic max-w-md mx-auto mb-6 border-none p-0">
          &ldquo;{personalInfo.motto}&rdquo;
        </blockquote>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <CloudButton to="/projects">
          🌷 Khám phá vườn hoa
        </CloudButton>
      </motion.div>

      {/* Bottom flowers decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 opacity-40">
        <svg viewBox="0 0 20 30" className="w-5 h-8" style={{ animation: 'flowerSway 4s ease-in-out infinite' }}>
          <line x1="10" y1="12" x2="10" y2="30" stroke="#7EEDC8" strokeWidth="2" />
          <circle cx="10" cy="8" r="6" fill="#FF8ABF" opacity="0.6" />
        </svg>
        <svg viewBox="0 0 20 30" className="w-4 h-7" style={{ animation: 'flowerSway 5s ease-in-out infinite 1s' }}>
          <line x1="10" y1="14" x2="10" y2="30" stroke="#7EEDC8" strokeWidth="2" />
          <circle cx="10" cy="10" r="5" fill="#FFE17A" opacity="0.6" />
        </svg>
        <svg viewBox="0 0 20 30" className="w-5 h-8" style={{ animation: 'flowerSway 4.5s ease-in-out infinite 0.5s' }}>
          <line x1="10" y1="12" x2="10" y2="30" stroke="#7EEDC8" strokeWidth="2" />
          <circle cx="10" cy="8" r="6" fill="#D8B8FF" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create GardenAboutCard.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeUp } from '../../app/motionConfig';
import { personalInfo, orientation } from '../../data/portfolioData';

export default function GardenAboutCard() {
  return (
    <motion.section
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto mb-16"
    >
      <div className="relative bg-white/90 backdrop-blur-sm rounded-garden p-6 md:p-8
        border border-[var(--bunny-pink)]/20 shadow-md">
        {/* Cloud decoration top-right */}
        <div className="absolute -top-3 -right-3 w-12 h-8 opacity-40">
          <svg viewBox="0 0 50 30" fill="none" aria-hidden="true">
            <ellipse cx="25" cy="18" rx="20" ry="10" fill="white" />
            <ellipse cx="18" cy="14" rx="12" ry="9" fill="white" />
          </svg>
        </div>

        {/* Avatar + info */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={personalInfo.avatarUrl}
            alt={`Avatar của ${personalInfo.name}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-[var(--bunny-pink)]/30"
          />
          <div>
            <h2 className="text-lg font-heading font-bold text-[#3D2244] m-0">
              {personalInfo.name}
            </h2>
            <p className="text-sm text-[#8A6B8F] m-0">
              {personalInfo.major} • {personalInfo.university}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-[#3D2244]">
          <p className="m-0">
            <span className="font-semibold">Sở thích:</span> {personalInfo.hobbies}
          </p>
          <p className="m-0">
            <span className="font-semibold">Phong cách:</span> {personalInfo.style}
          </p>
        </div>

        {/* Orientation */}
        <div className="mt-4 pt-4 border-t border-[var(--bunny-pink)]/10">
          <h3 className="text-sm font-heading font-semibold text-[var(--bunny-pink)] mb-2">
            🧭 {orientation.title}
          </h3>
          <ul className="list-none p-0 m-0 space-y-1.5">
            {orientation.content.map((item, i) => (
              <li key={i} className="text-xs text-[#8A6B8F] leading-relaxed pl-4 relative before:content-['🌱'] before:absolute before:left-0 before:top-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/features/garden-hero/
git commit -m "feat(nhi): add GardenHero and GardenAboutCard features"
```

---

### Task 9: Skills Features

**Files:**
- Create: `src/features/greenhouse-skills/SkillCluster.jsx`
- Create: `src/features/greenhouse-skills/ToolsetCluster.jsx`

- [ ] **Step 1: Create SkillCluster.jsx**

```jsx
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../app/motionConfig';
import { Brain, Sparkles, BookOpen, Palette } from 'lucide-react';
import PlantBadge from '../../components/ui/PlantBadge';
import { coreSkills } from '../../data/portfolioData';

const skillIcons = [Brain, Sparkles, BookOpen, Palette];
const skillColors = ['#FF8ABF', '#D8B8FF', '#A8D4FF', '#7EEDC8'];

export default function SkillCluster() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-40px' }}
      className="max-w-lg mx-auto mb-12"
    >
      <motion.h2
        variants={fadeUp}
        className="text-xl font-heading font-bold text-[#3D2244] mb-4 text-center"
      >
        🌱 {coreSkills.title}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coreSkills.items.map((item, i) => (
          <PlantBadge
            key={item.title}
            icon={skillIcons[i]}
            title={item.title}
            text={item.text}
            color={skillColors[i]}
          />
        ))}
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 2: Create ToolsetCluster.jsx**

```jsx
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../app/motionConfig';
import { FolderOpen, GraduationCap, Bot, PenTool, Users } from 'lucide-react';
import PlantBadge from '../../components/ui/PlantBadge';
import { toolsets } from '../../data/portfolioData';

const toolIcons = [FolderOpen, GraduationCap, Bot, PenTool, Users];
const toolColors = ['#FFE17A', '#A8D4FF', '#D8B8FF', '#FF8ABF', '#7EEDC8'];

export default function ToolsetCluster() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-40px' }}
      className="max-w-lg mx-auto mb-12"
    >
      <motion.h2
        variants={fadeUp}
        className="text-xl font-heading font-bold text-[#3D2244] mb-4 text-center"
      >
        🛠 {toolsets.title}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toolsets.items.map((item, i) => (
          <PlantBadge
            key={item.title}
            icon={toolIcons[i]}
            title={item.title}
            text={item.text}
            color={toolColors[i]}
          />
        ))}
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/features/greenhouse-skills/
git commit -m "feat(nhi): add SkillCluster and ToolsetCluster features"
```

---

### Task 10: Flower Project Card Feature

**Files:**
- Create: `src/features/flower-projects/FlowerProjectCard.jsx`

- [ ] **Step 1: Create FlowerProjectCard.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeScale } from '../../app/motionConfig';
import { flowerIcons, flowerColors } from '../../assets/bunny-cloud-garden/FlowerIcons';
import { ExternalLink } from 'lucide-react';

export default function FlowerProjectCard({ project, index }) {
  const FlowerIcon = flowerIcons[index % flowerIcons.length];
  const color = flowerColors[index % flowerColors.length];

  return (
    <motion.article
      variants={fadeScale}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-garden p-5
        border border-[var(--bunny-pink)]/15 shadow-sm
        hover:shadow-md hover:scale-[1.03] hover:-translate-y-1
        transition-all duration-300 ease-out"
    >
      {/* Flower icon */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <FlowerIcon className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-body font-semibold text-[#8A6B8F]">
            Chương {project.chapter}
          </span>
          <h3 className="text-sm font-heading font-bold text-[#3D2244] m-0 leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <p className="text-xs text-[#3D2244] leading-relaxed mb-2 m-0">
        {project.content}
      </p>
      <p className="text-xs text-[#8A6B8F] leading-relaxed mb-3 m-0">
        {project.process}
      </p>

      {/* PDF link */}
      <a
        href={project.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold
          text-[var(--bunny-pink)] hover:underline no-underline"
      >
        <ExternalLink size={12} />
        Xem bài tập
      </a>

      {/* Hover petal decoration */}
      <div
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full opacity-0
          group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
    </motion.article>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/flower-projects/
git commit -m "feat(nhi): add FlowerProjectCard feature"
```

---

### Task 11: Pages

**Files:**
- Create: `src/pages/CloudGardenHeroPage.jsx`
- Create: `src/pages/FlowerBedProjectsPage.jsx`
- Create: `src/pages/GardenMailboxPage.jsx`

- [ ] **Step 1: Create CloudGardenHeroPage.jsx**

```jsx
import PageTransition from '../components/ui/PageTransition';
import GardenHero from '../features/garden-hero/GardenHero';
import GardenAboutCard from '../features/garden-hero/GardenAboutCard';
import SkillCluster from '../features/greenhouse-skills/SkillCluster';
import ToolsetCluster from '../features/greenhouse-skills/ToolsetCluster';

export default function CloudGardenHeroPage() {
  return (
    <PageTransition>
      <div className="pb-12">
        <GardenHero />
        <GardenAboutCard />
        <SkillCluster />
        <ToolsetCluster />
      </div>
    </PageTransition>
  );
}
```

- [ ] **Step 2: Create FlowerBedProjectsPage.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../app/motionConfig';
import PageTransition from '../components/ui/PageTransition';
import FlowerProjectCard from '../features/flower-projects/FlowerProjectCard';
import { projects } from '../data/portfolioData';

export default function FlowerBedProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto pb-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#3D2244] mb-2">
            🌷 {projects.title}
          </h1>
          <p className="text-sm text-[#8A6B8F] max-w-md mx-auto">
            {projects.intro}
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.items.map((project, i) => (
            <FlowerProjectCard key={project.chapter} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
```

- [ ] **Step 3: Create GardenMailboxPage.jsx**

```jsx
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../app/motionConfig';
import PageTransition from '../components/ui/PageTransition';
import { conclusion } from '../data/portfolioData';

export default function GardenMailboxPage() {
  return (
    <PageTransition>
      <div className="max-w-lg mx-auto pb-12">
        {/* Summary */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#3D2244] mb-3 text-center">
            💌 Tổng kết
          </h1>
          <p className="text-sm text-[#3D2244] leading-relaxed bg-white/80 rounded-garden p-5 border border-[var(--bunny-pink)]/15">
            {conclusion.summary}
          </p>
        </motion.section>

        {/* Skills achieved */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.h2 variants={fadeUp} className="text-lg font-heading font-bold text-[#3D2244] mb-3">
            🌱 Kỹ năng đạt được
          </motion.h2>
          <ul className="space-y-2 list-none p-0 m-0">
            {conclusion.skills.map((skill, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="text-xs text-[#3D2244] leading-relaxed bg-white/70 rounded-xl p-3
                  border border-[var(--garden-mint)]/20"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Insight */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-lg font-heading font-bold text-[#3D2244] mb-2">
            ✨ Điều tâm đắc nhất
          </h2>
          <p className="text-sm text-[#8A6B8F] leading-relaxed italic">
            &ldquo;{conclusion.insight}&rdquo;
          </p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-lg font-heading font-bold text-[#3D2244] mb-2">
            🌧 Thách thức lớn nhất
          </h2>
          <p className="text-sm text-[#8A6B8F] leading-relaxed">
            {conclusion.challenge}
          </p>
        </motion.section>

        {/* Future */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-lg font-heading font-bold text-[#3D2244] mb-3">
            🌈 Định hướng phát triển
          </motion.h2>
          <ul className="space-y-2 list-none p-0 m-0">
            {conclusion.future.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="text-xs text-[#3D2244] leading-relaxed pl-5 relative
                  before:content-['🌸'] before:absolute before:left-0"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-xs text-[#8A6B8F] pt-6 border-t border-[var(--bunny-pink)]/10">
          © 2026 • Nguyễn Phương Nhi • Bunny Cloud Garden Portfolio
        </footer>
      </div>
    </PageTransition>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/
git commit -m "feat(nhi): add all 3 pages - hero, projects, conclusion"
```

---

### Task 12: E2E Tests

**Files:**
- Create: `tests/render-check.spec.js`

- [ ] **Step 1: Create render-check.spec.js**

```js
import { test, expect } from '@playwright/test';

test.describe('Bunny Cloud Garden Portfolio - Render Check', () => {
  test('Home page renders hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
    await expect(page.locator('blockquote')).toContainText('Đơn giản, thẳng thắn');
  });

  test('Home page shows skills and toolsets', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Năng lực nổi bật')).toBeVisible();
    await expect(page.getByText('Công cụ sử dụng')).toBeVisible();
    await page.getByText('Năng lực nổi bật').scrollIntoViewIfNeeded();
    await expect(page.getByText('Tư duy số')).toBeVisible();
  });

  test('Projects page renders all 6 cards', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();
    await expect(page.getByText('Máy tính & Thiết bị ngoại vi')).toBeVisible();
    await expect(page.getByText('An toàn và Liêm chính học thuật')).toBeVisible();
    const cards = page.locator('article');
    await expect(cards).toHaveCount(6);
  });

  test('Projects page has PDF links', async ({ page }) => {
    await page.goto('/projects');
    const pdfLinks = page.locator('a[target="_blank"]');
    await expect(pdfLinks.first()).toBeVisible();
    await expect(pdfLinks.first()).toContainText('Xem bài tập');
  });

  test('Conclusion page renders content', async ({ page }) => {
    await page.goto('/conclusion');
    await expect(page.getByRole('heading', { name: 'Tổng kết' })).toBeVisible();
    await expect(page.getByText('Kỹ năng đạt được')).toBeVisible();
    await expect(page.getByText('Điều tâm đắc nhất')).toBeVisible();
    await expect(page.getByText('Thách thức lớn nhất')).toBeVisible();
    await expect(page.getByText('Định hướng phát triển')).toBeVisible();
  });

  test('Navigation between pages works', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');

    // Navigate to Projects
    await page.getByRole('link', { name: 'Dự án' }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();

    // Navigate to Conclusion
    await page.getByRole('link', { name: 'Tổng kết' }).click();
    await expect(page).toHaveURL('/conclusion');
    await expect(page.getByRole('heading', { name: 'Tổng kết' })).toBeVisible();

    // Navigate back to Home
    await page.getByRole('link', { name: 'Vườn hoa' }).click();
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
  });

  test('Responsive: mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Nguyễn Phương Nhi');
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('Footer shows copyright', async ({ page }) => {
    await page.goto('/conclusion');
    await expect(page.getByText('© 2026')).toBeVisible();
    await expect(page.getByText('Nguyễn Phương Nhi')).toBeVisible();
  });
});
```

- [ ] **Step 2: Commit**

```bash
git add tests/
git commit -m "test(nhi): add e2e render check tests"
```

---

### Task 13: Build Verification

**Files:** None (verification only)

- [ ] **Step 1: Run build**

Run: `npm run build`
Expected: Build succeeds, `dist/` folder created with `index.html` and JS/CSS bundles.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No errors. Warnings are acceptable.

- [ ] **Step 3: Start dev server and verify manually**

Run: `npm run dev`
Expected: Server starts at `http://127.0.0.1:5190`. Open in browser:
- `/` shows bunny mascot, name, tagline, CTA button, skills, tools
- `/projects` shows 6 flower cards with PDF links
- `/conclusion` shows summary, skills, insight, challenge, future
- Bottom nav works for all 3 routes
- Background clouds drift, petals fall, sparkles twinkle

- [ ] **Step 4: Run e2e tests**

Run: `npx playwright test`
Expected: All 8 tests pass.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat(nhi): complete bunny-cloud-garden portfolio implementation"
```

---

_End of implementation plan._
