# Tra K-Beauty Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `tra-portfolio` as a standalone React/Vite one-page K-beauty portfolio for Pham Thanh Tra with in-page PDF modal viewing and source-backed content.

**Architecture:** The app is a single React page with small section components, shared K-beauty UI primitives, and a data module extracted from `tra-portfolio/docs/portfolio.md`. Static assets are served from `public/assets` and `public/docs`, while Ant Design supplies modal/button primitives and theme tokens.

**Tech Stack:** React 18, Vite, Ant Design 6, Tailwind CSS 3, Lucide React, React Motion, Playwright.

---

## File Structure

- Create `tra-portfolio/package.json`: project scripts and dependencies.
- Create `tra-portfolio/index.html`: Vite HTML entry.
- Create `tra-portfolio/vite.config.js`: React plugin config.
- Create `tra-portfolio/tailwind.config.js`: Tailwind content and disabled preflight.
- Create `tra-portfolio/postcss.config.js`: Tailwind and Autoprefixer.
- Create `tra-portfolio/eslint.config.js`: ESLint flat config for React.
- Create `tra-portfolio/playwright.config.js`: local server and browser test config.
- Create `tra-portfolio/netlify.toml`: static deployment config.
- Create `tra-portfolio/public/_redirects`: SPA fallback.
- Create `tra-portfolio/public/assets/avatar.png`: copied from `docs/avatar.png`.
- Create `tra-portfolio/public/docs/bt1.pdf` through `bt6.pdf`: copied from `docs/`.
- Create `tra-portfolio/README.md`: project-specific style and run notes.
- Create `tra-portfolio/src/main.jsx`: React entry and Ant Design reset.
- Create `tra-portfolio/src/App.jsx`: one-page composition.
- Create `tra-portfolio/src/theme.js`: Ant Design tokens and palette.
- Create `tra-portfolio/src/index.css`: fonts, CSS variables, responsive layout, K-beauty visuals.
- Create `tra-portfolio/src/data/portfolioData.js`: source-backed portfolio content.
- Create `tra-portfolio/src/components/kbeauty/SoftBackground.jsx`: local 2D pastel background assets.
- Create `tra-portfolio/src/components/kbeauty/GlassCard.jsx`: soft reusable card.
- Create `tra-portfolio/src/components/kbeauty/PastelTag.jsx`: pill tag component.
- Create `tra-portfolio/src/components/ui/ScrollReveal.jsx`: React Motion section entrance.
- Create `tra-portfolio/src/components/ui/PdfViewerModal.jsx`: Ant Design PDF modal.
- Create `tra-portfolio/src/components/sections/HeroSection.jsx`: hero/profile opening.
- Create `tra-portfolio/src/components/sections/BeautyProfileSection.jsx`: about, direction, purpose.
- Create `tra-portfolio/src/components/sections/CapabilitiesSection.jsx`: capabilities, principles, tools.
- Create `tra-portfolio/src/components/sections/ProjectsSection.jsx`: six assignment cards and modal state.
- Create `tra-portfolio/src/components/sections/ConclusionSection.jsx`: reflection and future direction.
- Create `tra-portfolio/tests/render-check.spec.js`: render, responsive, and PDF modal checks.
- Modify `README.md`: add `tra-portfolio` row to the monorepo project list.

## Task 1: Scaffold App, Config, Assets

**Files:**
- Create: `tra-portfolio/package.json`
- Create: `tra-portfolio/index.html`
- Create: `tra-portfolio/vite.config.js`
- Create: `tra-portfolio/tailwind.config.js`
- Create: `tra-portfolio/postcss.config.js`
- Create: `tra-portfolio/eslint.config.js`
- Create: `tra-portfolio/playwright.config.js`
- Create: `tra-portfolio/netlify.toml`
- Create: `tra-portfolio/public/_redirects`
- Create: `tra-portfolio/public/assets/avatar.png`
- Create: `tra-portfolio/public/docs/bt1.pdf`
- Create: `tra-portfolio/public/docs/bt2.pdf`
- Create: `tra-portfolio/public/docs/bt3.pdf`
- Create: `tra-portfolio/public/docs/bt4.pdf`
- Create: `tra-portfolio/public/docs/bt5.pdf`
- Create: `tra-portfolio/public/docs/bt6.pdf`

- [ ] **Step 1: Create Vite and tooling files**

Create `tra-portfolio/package.json`:

```json
{
  "name": "tra-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1 --port 5180",
    "build": "vite build",
    "lint": "eslint .",
    "test:e2e": "playwright test",
    "preview": "vite preview --host 127.0.0.1 --port 4180"
  },
  "dependencies": {
    "@ant-design/cssinjs": "^1.24.0",
    "antd": "^6.1.0",
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-motion": "^0.5.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@playwright/test": "^1.59.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^7.2.4"
  }
}
```

Create `tra-portfolio/index.html`:

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Digital portfolio cua Pham Thanh Tra, sinh vien Luat hoc tai Dai hoc Luat - Dai hoc Quoc gia Ha Noi."
    />
    <title>Pham Thanh Tra | Digital Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Create `tra-portfolio/vite.config.js`:

```js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
});
```

Create `tra-portfolio/tailwind.config.js`:

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
```

Create `tra-portfolio/postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create `tra-portfolio/eslint.config.js`:

```js
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
```

Create `tra-portfolio/playwright.config.js`:

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:5180',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:5180',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
```

Create `tra-portfolio/netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Create `tra-portfolio/public/_redirects`:

```text
/* /index.html 200
```

- [ ] **Step 2: Copy source assets into public assets**

Run from repo root:

```powershell
New-Item -ItemType Directory -Force tra-portfolio/public/assets, tra-portfolio/public/docs
Copy-Item -Force tra-portfolio/docs/avatar.png tra-portfolio/public/assets/avatar.png
Copy-Item -Force tra-portfolio/docs/bt1.pdf tra-portfolio/public/docs/bt1.pdf
Copy-Item -Force tra-portfolio/docs/bt2.pdf tra-portfolio/public/docs/bt2.pdf
Copy-Item -Force tra-portfolio/docs/bt3.pdf tra-portfolio/public/docs/bt3.pdf
Copy-Item -Force tra-portfolio/docs/bt4.pdf tra-portfolio/public/docs/bt4.pdf
Copy-Item -Force tra-portfolio/docs/bt5.pdf tra-portfolio/public/docs/bt5.pdf
Copy-Item -Force tra-portfolio/docs/bt6.pdf tra-portfolio/public/docs/bt6.pdf
```

Expected: `tra-portfolio/public/assets/avatar.png` and six files under `tra-portfolio/public/docs/` exist.

- [ ] **Step 3: Install dependencies**

Run:

```powershell
cd tra-portfolio
npm install
```

Expected: `package-lock.json` is created and install exits with code 0.

- [ ] **Step 4: Commit scaffold**

Run:

```powershell
git add tra-portfolio/package.json tra-portfolio/package-lock.json tra-portfolio/index.html tra-portfolio/vite.config.js tra-portfolio/tailwind.config.js tra-portfolio/postcss.config.js tra-portfolio/eslint.config.js tra-portfolio/playwright.config.js tra-portfolio/netlify.toml tra-portfolio/public
git commit -m "feat: scaffold Tra portfolio app"
```

Expected: commit succeeds without staging `ui-styles-catalog.md`.

## Task 2: Add Data, Theme, Entry, And Global Styles

**Files:**
- Create: `tra-portfolio/src/main.jsx`
- Create: `tra-portfolio/src/theme.js`
- Create: `tra-portfolio/src/index.css`
- Create: `tra-portfolio/src/data/portfolioData.js`

- [ ] **Step 1: Create source folders**

Run from repo root:

```powershell
New-Item -ItemType Directory -Force tra-portfolio/src/data, tra-portfolio/src/components/kbeauty, tra-portfolio/src/components/ui, tra-portfolio/src/components/sections
```

Expected: all four directories exist.

- [ ] **Step 2: Add React entry**

Create `tra-portfolio/src/main.jsx`:

```jsx
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 3: Add theme tokens**

Create `tra-portfolio/src/theme.js`:

```js
export const palette = {
  milk: '#FDF9F7',
  surface: '#FFFFFF',
  powderPink: '#E8A0BF',
  text: '#2D2D35',
  textSoft: '#8A8498',
  sky: '#B8D8F5',
  lavender: '#D4C5F9',
  beige: '#F5EDE8',
  peach: '#FFD6C0',
  border: '#F0E6EC',
  mint: '#DFF3EA',
};

export const theme = {
  token: {
    colorBgBase: palette.milk,
    colorBgContainer: palette.surface,
    colorPrimary: palette.powderPink,
    colorTextBase: palette.text,
    colorTextSecondary: palette.textSoft,
    colorInfo: palette.sky,
    colorSuccess: palette.lavender,
    colorBorder: palette.border,
    borderRadius: 24,
    fontFamily: "'Plus Jakarta Sans', 'Noto Sans KR', sans-serif",
    boxShadow: '0 18px 50px rgba(232, 160, 191, 0.16)',
  },
  components: {
    Button: {
      borderRadius: 999,
      controlHeight: 44,
      fontWeight: 700,
    },
    Modal: {
      borderRadiusLG: 28,
    },
    Tag: {
      borderRadiusSM: 999,
    },
  },
};
```

- [ ] **Step 4: Add source-backed data**

Create `tra-portfolio/src/data/portfolioData.js`:

```js
export const personalInfo = {
  name: 'Pham Thanh Tra',
  displayName: 'Pham Thanh Tra',
  major: 'Luat hoc',
  university: 'Dai hoc Luat - Dai hoc Quoc gia Ha Noi',
  interests:
    'Nghe nhac, xem phim, hat, tim hieu ve cong nghe tri tue nhan tao, doc cac noi dung lien quan den phap luat va tam ly hoc.',
  style:
    'Toi gian, hien dai, chu trong su ro rang va tinh tham my trong cach trinh bay.',
  avatar: '/assets/avatar.png',
  footer: '© 2026 • Pham Thanh Tra • Digital Portfolio',
};

export const about = {
  title: 'About me',
  items: [
    { label: 'Ho va ten', value: 'Pham Thanh Tra' },
    { label: 'Nganh hoc', value: 'Luat hoc' },
    { label: 'Truong', value: 'Dai hoc Luat - Dai hoc Quoc gia Ha Noi' },
    { label: 'So thich', value: personalInfo.interests },
    { label: 'Phong cach ca nhan', value: personalInfo.style },
  ],
};

export const developmentDirection = {
  title: 'Dinh huong phat trien',
  intro:
    'Trong boi canh cong nghe so ngay cang chi phoi cach con nguoi tiep can tri thuc, dinh huong cua toi la ket hop nen tang phap ly voi tu duy cong nghe.',
  focus:
    'Em huong den viec xay dung mot phuong phap hoc tap va nghien cuu dua tren du lieu so, trong do:',
  points: [
    'Thong tin duoc chon loc ky luong',
    'Quy trinh xu ly co he thong',
    'Ket qua co the kiem chung ro rang',
  ],
  longTerm:
    'Muc tieu dai han la tro thanh mot nguoi lam luat co kha nang tan dung cong nghe, dac biet la AI de nang cao hieu qua cong viec, nhung van dam bao tinh chuan xac va dao duc nghe nghiep.',
};

export const portfolioPurpose = {
  title: 'Muc dich xay dung portfolio',
  intro:
    'Portfolio nay khong chi don thuan la noi luu tru bai tap, ma duoc thiet ke nhu mot he thong the hien qua trinh hoc tap mot cach logic.',
  sequence: 'Xac dinh van de -> Cach tiep can -> Ket qua thuc hien -> Minh chung di kem',
  benefits: [
    'Nhanh chong hieu duoc huong lam bai',
    'De dang theo doi qua trinh tu duy',
    'Co the kiem tra lai thong tin mot cach truc tiep',
  ],
};

export const capabilities = [
  {
    title: 'To chuc thong tin so',
    description:
      'Biet cach xay dung he thong luu tru ro rang, phan loai tai lieu theo tung nhom noi dung, giup viec tim kiem tro nen nhanh chong va chinh xac.',
  },
  {
    title: 'Tim kiem va danh gia nguon thong tin',
    description:
      'Co kha nang lua chon tai lieu phu hop, uu tien nguon chinh thong va co do tin cay cao, dac biet trong linh vuc phap ly.',
  },
  {
    title: 'Su dung AI co kiem soat',
    description:
      'Biet cach dat yeu cau cu the, xac dinh ro dau ra mong muon va kiem tra lai noi dung truoc khi su dung.',
  },
  {
    title: 'Trinh bay va he thong hoa noi dung',
    description:
      'Co kha nang chuyen doi thong tin phuc tap thanh dang de hieu, co bo cuc ro rang va phu hop voi nguoi doc.',
  },
];

export const principles = [
  {
    title: 'Uu tien tinh ro rang',
    description:
      'Noi dung duoc trinh bay theo cau truc de theo doi, giup nguoi doc nam bat nhanh y chinh.',
  },
  {
    title: 'Dam bao tinh minh bach',
    description:
      'Moi noi dung deu co minh chung cu the di kem de nguoi xem co the kiem tra.',
  },
  {
    title: 'Kiem soat viec su dung AI',
    description:
      'AI chi dong vai tro ho tro, toan bo noi dung va lap luan deu duoc kiem tra va dieu chinh boi nguoi thuc hien.',
  },
];

export const tools = [
  { group: 'Luu tru va quan ly tai lieu', items: ['OneDrive', 'Dropbox'] },
  { group: 'Nguon hoc lieu', items: ['Thu vien so', 'Cac cong thong tin phap luat chinh thong'] },
  { group: 'Cong cu AI', items: ['Claude', 'Copilot', 'Gemini'] },
  { group: 'Thiet ke noi dung', items: ['Canva', 'PowerPoint'] },
  { group: 'Lam viec nhom', items: ['Notion', 'Microsoft Teams'] },
];

export const projects = [
  {
    number: '01',
    title: 'May tinh va thiet bi ngoai vi',
    description:
      'Trinh bay cac thanh phan co ban cua may tinh va vai tro cua cac thiet bi ngoai vi trong qua trinh su dung.',
    file: '/docs/bt1.pdf',
  },
  {
    number: '02',
    title: 'Khai thac du lieu va thong tin',
    description:
      'Thuc hanh tim kiem thong tin, danh gia do tin cay cua nguon va cach su dung thong tin mot cach hop ly.',
    file: '/docs/bt2.pdf',
  },
  {
    number: '03',
    title: 'Tri tue nhan tao',
    description:
      'Gioi thieu ve AI, cac ung dung pho bien va nhung van de can luu y khi su dung trong hoc tap.',
    file: '/docs/bt3.pdf',
  },
  {
    number: '04',
    title: 'Giao tiep trong moi truong so',
    description:
      'Tap trung vao ky nang lam viec nhom online va cach tuong tac hieu qua tren nen tang so.',
    file: '/docs/bt4.pdf',
  },
  {
    number: '05',
    title: 'Sang tao noi dung so',
    description:
      'Thuc hanh xay dung noi dung so tu y tuong den thiet ke, dong thoi chu y den yeu to ban quyen.',
    file: '/docs/bt5.pdf',
  },
  {
    number: '06',
    title: 'An toan va liem chinh hoc thuat',
    description:
      'De cap den bao mat thong tin ca nhan va viec su dung tai lieu mot cach trung thuc trong hoc tap.',
    file: '/docs/bt6.pdf',
  },
];

export const conclusion = {
  intro:
    'Qua trinh hoan thien portfolio khong chi dung lai o viec hoan thanh 6 bai tap, ma con la qua trinh he thong lai toan bo cach hoc va cach tiep can thong tin trong moi truong so.',
  insight:
    'Cong nghe khong thay the tu duy, nhung lai la cong cu giup to chuc tu duy mot cach ro rang va co cau truc hon.',
  skills: [
    {
      title: 'Tu duy lam viec co he thong',
      description:
        'Em da hinh thanh thoi quen xac dinh muc tieu, xay dung cau truc truoc khi trien khai noi dung.',
    },
    {
      title: 'Khai thac va kiem soat AI',
      description:
        'Em chuyen tu viec su dung AI mot cach bi dong sang chu dong dinh huong va kiem tra lai noi dung.',
    },
    {
      title: 'Xu ly va chon loc thong tin',
      description:
        'Em bat dau chu trong viec doi chieu, danh gia va lua chon thong tin dua tren do tin cay va boi canh su dung.',
    },
  ],
  highlight:
    'Su thay doi ro ret nam o cach to chuc ca du lieu lan tu duy. Portfolio khong chi phan anh ket qua hoc tap ma con the hien cach em kiem soat thong tin va phat trien tu duy logic.',
  challenge:
    'Kho khan lon nhat la can bang giua viec su dung AI va viec giu vung tu duy ca nhan.',
  future: [
    'Tinh gon noi dung nhung tang chieu sau',
    'Giam bot phan mo ta dan trai, thay vao do lam noi bat trong tam va gia tri cot loi cua tung bai.',
    'Tang cuong lien ket giua ly thuyet va thuc tien',
    'Hoan thien ky nang kiem chung thong tin',
    'Xay dung quy trinh kiem tra ro rang hon khi su dung AI va tai lieu so, nham dam bao do chinh xac va tinh phap ly.',
  ],
};
```

- [ ] **Step 5: Add global CSS and K-beauty asset layer**

Create `tra-portfolio/src/index.css` with the complete styling used by the app:

```css
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --milk: #fdf9f7;
  --surface: #ffffff;
  --powder-pink: #e8a0bf;
  --text: #2d2d35;
  --text-soft: #8a8498;
  --sky: #b8d8f5;
  --lavender: #d4c5f9;
  --beige: #f5ede8;
  --peach: #ffd6c0;
  --border: #f0e6ec;
  --mint: #dff3ea;
  color: var(--text);
  background: var(--milk);
  font-family: "Noto Sans KR", "Plus Jakarta Sans", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--milk);
}

button,
input,
textarea {
  font: inherit;
}

.kbeauty-app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 4%, rgba(255, 214, 192, 0.44), transparent 28rem),
    radial-gradient(circle at 92% 2%, rgba(184, 216, 245, 0.34), transparent 26rem),
    linear-gradient(180deg, var(--milk) 0%, #fffefe 48%, #fbf5f8 100%);
}

.kbeauty-main {
  position: relative;
  z-index: 1;
}

.section-shell {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 80px 0;
}

.section-kicker {
  margin: 0 0 10px;
  color: var(--powder-pink);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  margin: 0;
  color: var(--text);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 4.4rem);
  line-height: 1;
  letter-spacing: 0;
}

.section-lead {
  max-width: 740px;
  margin: 18px 0 0;
  color: var(--text-soft);
  font-size: 1.04rem;
  line-height: 1.8;
}

.soft-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.soft-blob {
  position: absolute;
  width: var(--blob-size);
  height: var(--blob-size);
  border-radius: 42% 58% 68% 32% / 42% 44% 56% 58%;
  background: var(--blob-color);
  filter: blur(1px);
  opacity: 0.55;
}

.soft-blob.one {
  --blob-size: 280px;
  --blob-color: rgba(232, 160, 191, 0.18);
  left: -80px;
  top: 120px;
}

.soft-blob.two {
  --blob-size: 360px;
  --blob-color: rgba(212, 197, 249, 0.2);
  right: -110px;
  top: 520px;
}

.soft-blob.three {
  --blob-size: 240px;
  --blob-color: rgba(184, 216, 245, 0.2);
  left: 8%;
  bottom: 220px;
}

.beauty-sparkle {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--surface);
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.35), 0 12px 36px rgba(232, 160, 191, 0.22);
}

.beauty-sparkle.a {
  right: 18%;
  top: 170px;
}

.beauty-sparkle.b {
  left: 18%;
  bottom: 140px;
}

.glass-card {
  position: relative;
  border: 1px solid rgba(240, 230, 236, 0.9);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 50px rgba(232, 160, 191, 0.14);
  backdrop-filter: blur(16px);
}

.pastel-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 7px 13px;
  border: 1px solid rgba(240, 230, 236, 0.9);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: var(--text);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  transition: transform 200ms ease, background 200ms ease, box-shadow 200ms ease;
}

.pastel-tag:hover {
  transform: translateY(-2px);
  background: rgba(255, 214, 192, 0.42);
  box-shadow: 0 12px 28px rgba(232, 160, 191, 0.12);
}

.hero-section {
  width: min(1180px, calc(100% - 32px));
  min-height: min(760px, 100vh);
  margin: 0 auto;
  padding: 56px 0 72px;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(320px, 0.78fr);
  gap: 52px;
  align-items: center;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-title {
  margin: 12px 0 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(3.1rem, 8vw, 7rem);
  line-height: 0.92;
  letter-spacing: 0;
  color: var(--text);
}

.hero-lead {
  max-width: 660px;
  margin: 0 0 28px;
  color: var(--text-soft);
  font-size: 1.08rem;
  line-height: 1.85;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-visual {
  position: relative;
  min-height: 500px;
}

.avatar-frame {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: min(420px, 100%);
  margin-left: auto;
  border: 12px solid rgba(255, 255, 255, 0.78);
  border-radius: 46px;
  background: linear-gradient(145deg, var(--surface), var(--beige));
  box-shadow: 0 28px 70px rgba(45, 45, 53, 0.14);
  transition: transform 400ms ease;
}

.avatar-frame:hover {
  transform: scale(1.03);
}

.avatar-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.beauty-label {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 42px;
  max-width: 270px;
  padding: 18px 20px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 48px rgba(232, 160, 191, 0.18);
  color: var(--text);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
}

.serum-drop {
  position: absolute;
  right: 24px;
  bottom: -22px;
  width: 118px;
  height: 164px;
  border-radius: 58px 58px 46px 46px;
  background: linear-gradient(180deg, rgba(232, 160, 191, 0.24), rgba(255, 255, 255, 0.72));
  border: 1px solid rgba(240, 230, 236, 0.9);
  box-shadow: 0 20px 42px rgba(232, 160, 191, 0.12);
}

.serum-drop::before {
  content: "";
  position: absolute;
  left: 34px;
  right: 34px;
  top: -26px;
  height: 34px;
  border-radius: 14px 14px 6px 6px;
  background: var(--lavender);
}

.profile-grid,
.capability-grid,
.project-grid,
.conclusion-grid {
  display: grid;
  gap: 18px;
}

.profile-grid {
  grid-template-columns: 0.88fr 1.12fr;
  margin-top: 34px;
}

.capability-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 32px;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 32px;
}

.conclusion-grid {
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
}

.content-card {
  padding: 26px;
}

.content-card h3,
.project-card h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.18rem;
}

.content-card p,
.content-card li,
.project-card p {
  color: var(--text-soft);
  font-size: 0.96rem;
  line-height: 1.75;
}

.content-card p {
  margin: 0 0 12px;
}

.content-card ul {
  margin: 12px 0 0;
  padding-left: 20px;
}

.profile-list {
  display: grid;
  gap: 14px;
  margin: 0;
}

.profile-list div {
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(240, 230, 236, 0.8);
}

.profile-list dt {
  color: var(--powder-pink);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.profile-list dd {
  margin: 4px 0 0;
  color: var(--text);
  line-height: 1.7;
}

.tool-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.project-card {
  display: flex;
  min-height: 292px;
  padding: 24px;
  flex-direction: column;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(232, 160, 191, 0.22);
}

.project-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.project-number {
  color: var(--powder-pink);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
}

.project-icon {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 18px;
  background: rgba(212, 197, 249, 0.22);
  color: var(--powder-pink);
}

.project-card button {
  margin-top: auto;
}

.pdf-modal .ant-modal-content {
  overflow: hidden;
}

.pdf-frame {
  width: 100%;
  height: min(74vh, 760px);
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--beige);
}

.pdf-fallback {
  display: inline-flex;
  margin-top: 12px;
  color: var(--powder-pink);
  font-weight: 800;
}

.kbeauty-footer {
  position: relative;
  z-index: 1;
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 34px 0 50px;
  color: var(--text-soft);
  font-size: 0.92rem;
  text-align: center;
}

@media (max-width: 960px) {
  .hero-section,
  .profile-grid,
  .conclusion-grid {
    grid-template-columns: 1fr;
  }

  .hero-section {
    min-height: auto;
    padding-top: 34px;
  }

  .hero-visual {
    min-height: auto;
  }

  .avatar-frame {
    margin: 0 auto;
  }

  .capability-grid,
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .section-shell {
    width: min(100% - 24px, 1120px);
    padding: 56px 0;
  }

  .hero-section {
    width: min(100% - 24px, 1180px);
    gap: 34px;
  }

  .hero-title {
    font-size: clamp(3rem, 18vw, 4.4rem);
  }

  .beauty-label {
    position: relative;
    left: auto;
    bottom: auto;
    margin: -24px auto 0;
  }

  .serum-drop {
    display: none;
  }

  .capability-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .content-card,
  .project-card {
    padding: 20px;
  }

  .pdf-frame {
    height: 70vh;
  }
}
```

- [ ] **Step 6: Commit data/theme/styles**

Run:

```powershell
git add tra-portfolio/src/main.jsx tra-portfolio/src/theme.js tra-portfolio/src/index.css tra-portfolio/src/data/portfolioData.js
git commit -m "feat: add Tra portfolio data and theme"
```

Expected: commit succeeds.

## Task 3: Add Shared UI Components And App Shell

**Files:**
- Create: `tra-portfolio/src/components/kbeauty/SoftBackground.jsx`
- Create: `tra-portfolio/src/components/kbeauty/GlassCard.jsx`
- Create: `tra-portfolio/src/components/kbeauty/PastelTag.jsx`
- Create: `tra-portfolio/src/components/ui/ScrollReveal.jsx`
- Create: `tra-portfolio/src/components/ui/PdfViewerModal.jsx`
- Create: `tra-portfolio/src/App.jsx`

- [ ] **Step 1: Add K-beauty background**

Create `tra-portfolio/src/components/kbeauty/SoftBackground.jsx`:

```jsx
export default function SoftBackground() {
  return (
    <div className="soft-background" aria-hidden="true">
      <div className="soft-blob one" />
      <div className="soft-blob two" />
      <div className="soft-blob three" />
      <div className="beauty-sparkle a" />
      <div className="beauty-sparkle b" />
    </div>
  );
}
```

- [ ] **Step 2: Add soft card primitive**

Create `tra-portfolio/src/components/kbeauty/GlassCard.jsx`:

```jsx
export default function GlassCard({ as: Component = 'article', className = '', children }) {
  return <Component className={`glass-card ${className}`.trim()}>{children}</Component>;
}
```

- [ ] **Step 3: Add pastel tag primitive**

Create `tra-portfolio/src/components/kbeauty/PastelTag.jsx`:

```jsx
export default function PastelTag({ icon: Icon, children }) {
  return (
    <span className="pastel-tag">
      {Icon ? <Icon size={15} strokeWidth={2} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
```

- [ ] **Step 4: Add ScrollReveal**

Create `tra-portfolio/src/components/ui/ScrollReveal.jsx`:

```jsx
import { Motion, spring } from 'react-motion';

export default function ScrollReveal({ children, className = '' }) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 12 }}
      style={{ opacity: spring(1, { stiffness: 120, damping: 22 }), y: spring(0) }}
    >
      {({ opacity, y }) => (
        <div className={className} style={{ opacity, transform: `translateY(${y}px)` }}>
          {children}
        </div>
      )}
    </Motion>
  );
}
```

- [ ] **Step 5: Add PDF modal**

Create `tra-portfolio/src/components/ui/PdfViewerModal.jsx`:

```jsx
import { Modal } from 'antd';

export default function PdfViewerModal({ project, open, onClose }) {
  return (
    <Modal
      centered
      className="pdf-modal"
      footer={null}
      open={open}
      title={project ? `Bai ${project.number} - ${project.title}` : 'Bai tap'}
      width="min(1040px, calc(100vw - 24px))"
      onCancel={onClose}
    >
      {project ? (
        <>
          <iframe className="pdf-frame" src={project.file} title={`PDF ${project.title}`} />
          <a className="pdf-fallback" href={project.file} target="_blank" rel="noreferrer">
            Mo PDF trong tab moi
          </a>
        </>
      ) : null}
    </Modal>
  );
}
```

- [ ] **Step 6: Add temporary App shell**

Create `tra-portfolio/src/App.jsx`:

```jsx
import { ConfigProvider } from 'antd';
import SoftBackground from './components/kbeauty/SoftBackground.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="kbeauty-app">
        <SoftBackground />
        <main className="kbeauty-main" aria-label="Tra portfolio">
          <section className="section-shell">
            <p className="section-kicker">Digital portfolio</p>
            <h1 className="section-title">{personalInfo.displayName}</h1>
            <p className="section-lead">{personalInfo.style}</p>
          </section>
        </main>
        <footer className="kbeauty-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
```

- [ ] **Step 7: Run lint**

Run:

```powershell
cd tra-portfolio
npm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 8: Commit shared UI shell**

Run:

```powershell
git add tra-portfolio/src/App.jsx tra-portfolio/src/components/kbeauty tra-portfolio/src/components/ui
git commit -m "feat: add k-beauty UI shell"
```

Expected: commit succeeds.

## Task 4: Add One-Page Sections

**Files:**
- Create: `tra-portfolio/src/components/sections/HeroSection.jsx`
- Create: `tra-portfolio/src/components/sections/BeautyProfileSection.jsx`
- Create: `tra-portfolio/src/components/sections/CapabilitiesSection.jsx`
- Create: `tra-portfolio/src/components/sections/ProjectsSection.jsx`
- Create: `tra-portfolio/src/components/sections/ConclusionSection.jsx`
- Modify: `tra-portfolio/src/App.jsx`

- [ ] **Step 1: Add HeroSection**

Create `tra-portfolio/src/components/sections/HeroSection.jsx`:

```jsx
import { Brain, GraduationCap, Sparkles } from 'lucide-react';
import PastelTag from '../kbeauty/PastelTag.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { personalInfo } from '../../data/portfolioData.js';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <ScrollReveal className="hero-copy">
        <p className="section-kicker">Digital portfolio</p>
        <h1 className="hero-title">{personalInfo.displayName}</h1>
        <p className="hero-lead">{personalInfo.style}</p>
        <div className="hero-tags">
          <PastelTag icon={GraduationCap}>{personalInfo.major}</PastelTag>
          <PastelTag icon={Brain}>AI co kiem soat</PastelTag>
          <PastelTag icon={Sparkles}>Toi gian va ro rang</PastelTag>
        </div>
      </ScrollReveal>

      <ScrollReveal className="hero-visual">
        <div className="avatar-frame">
          <img src={personalInfo.avatar} alt={personalInfo.displayName} />
        </div>
        <div className="beauty-label">{personalInfo.university}</div>
        <div className="serum-drop" aria-hidden="true" />
      </ScrollReveal>
    </section>
  );
}
```

- [ ] **Step 2: Add BeautyProfileSection**

Create `tra-portfolio/src/components/sections/BeautyProfileSection.jsx`:

```jsx
import { CheckCircle2 } from 'lucide-react';
import GlassCard from '../kbeauty/GlassCard.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { about, developmentDirection, portfolioPurpose } from '../../data/portfolioData.js';

export default function BeautyProfileSection() {
  return (
    <section className="section-shell" id="profile">
      <ScrollReveal>
        <p className="section-kicker">Beauty profile</p>
        <h2 className="section-title">Ho so hoc tap ro rang</h2>
        <p className="section-lead">{developmentDirection.intro}</p>
      </ScrollReveal>

      <div className="profile-grid">
        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>{about.title}</h3>
            <dl className="profile-list">
              {about.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>{developmentDirection.title}</h3>
            <p>{developmentDirection.focus}</p>
            <ul>
              {developmentDirection.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{developmentDirection.longTerm}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal className="profile-grid-span">
          <GlassCard className="content-card">
            <h3>{portfolioPurpose.title}</h3>
            <p>{portfolioPurpose.intro}</p>
            <PastelSequence value={portfolioPurpose.sequence} />
            <ul>
              {portfolioPurpose.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PastelSequence({ value }) {
  return (
    <p>
      <CheckCircle2 size={17} strokeWidth={2} aria-hidden="true" /> {value}
    </p>
  );
}
```

- [ ] **Step 3: Add missing CSS for profile span and icon paragraph**

Append to `tra-portfolio/src/index.css`:

```css
.profile-grid-span {
  grid-column: 1 / -1;
}

.content-card p svg {
  margin-right: 8px;
  color: var(--powder-pink);
  vertical-align: -3px;
}
```

- [ ] **Step 4: Add CapabilitiesSection**

Create `tra-portfolio/src/components/sections/CapabilitiesSection.jsx`:

```jsx
import { Bot, Database, FileSearch, FolderOpen, Layers3, ShieldCheck } from 'lucide-react';
import GlassCard from '../kbeauty/GlassCard.jsx';
import PastelTag from '../kbeauty/PastelTag.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { capabilities, principles, tools } from '../../data/portfolioData.js';

const capabilityIcons = [FolderOpen, FileSearch, Bot, Layers3];

export default function CapabilitiesSection() {
  return (
    <section className="section-shell" id="capabilities">
      <ScrollReveal>
        <p className="section-kicker">Soft skills system</p>
        <h2 className="section-title">Nang luc va cong cu</h2>
        <p className="section-lead">
          Cac noi dung trong phan nay duoc rut truc tiep tu nang luc noi bat, nguyen tac thuc hien bai tap va cong cu trong portfolio.
        </p>
      </ScrollReveal>

      <div className="capability-grid">
        {capabilities.map((capability, index) => {
          const Icon = capabilityIcons[index] || ShieldCheck;
          return (
            <ScrollReveal key={capability.title}>
              <GlassCard className="content-card">
                <PastelTag icon={Icon}>{capability.title}</PastelTag>
                <p>{capability.description}</p>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="conclusion-grid">
        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>Nguyen tac thuc hien bai tap</h3>
            <ul>
              {principles.map((principle) => (
                <li key={principle.title}>
                  <strong>{principle.title}:</strong> {principle.description}
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>Cong cu va nen tang su dung</h3>
            {tools.map((tool) => (
              <div key={tool.group}>
                <p>
                  <strong>{tool.group}</strong>
                </p>
                <div className="tool-cloud">
                  {tool.items.map((item) => (
                    <PastelTag key={item}>{item}</PastelTag>
                  ))}
                </div>
              </div>
            ))}
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Add ProjectsSection**

Create `tra-portfolio/src/components/sections/ProjectsSection.jsx`:

```jsx
import { Button } from 'antd';
import { FileText, Sparkle } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../kbeauty/GlassCard.jsx';
import PdfViewerModal from '../ui/PdfViewerModal.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { projects } from '../../data/portfolioData.js';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section-shell" id="projects">
      <ScrollReveal>
        <p className="section-kicker">Product showcase</p>
        <h2 className="section-title">Danh muc bai tap</h2>
        <p className="section-lead">
          Danh sach bai tap duoc trinh bay day du kem theo noi dung va minh chung PDF de xem truc tiep trong trang.
        </p>
      </ScrollReveal>

      <div className="project-grid">
        {projects.map((project) => (
          <ScrollReveal key={project.number}>
            <GlassCard className="project-card">
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                <span className="project-icon">
                  <Sparkle size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button type="primary" icon={<FileText size={17} />} onClick={() => setActiveProject(project)}>
                Mo PDF
              </Button>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <PdfViewerModal
        open={Boolean(activeProject)}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
```

- [ ] **Step 6: Add ConclusionSection**

Create `tra-portfolio/src/components/sections/ConclusionSection.jsx`:

```jsx
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import GlassCard from '../kbeauty/GlassCard.jsx';
import PastelTag from '../kbeauty/PastelTag.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { conclusion } from '../../data/portfolioData.js';

export default function ConclusionSection() {
  return (
    <section className="section-shell" id="conclusion">
      <ScrollReveal>
        <p className="section-kicker">Reflection</p>
        <h2 className="section-title">Ket luan va dinh huong</h2>
        <p className="section-lead">{conclusion.intro}</p>
      </ScrollReveal>

      <div className="conclusion-grid">
        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>Nhung ky nang cot loi da phat trien</h3>
            {conclusion.skills.map((skill) => (
              <div key={skill.title}>
                <PastelTag icon={CircleCheck}>{skill.title}</PastelTag>
                <p>{skill.description}</p>
              </div>
            ))}
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="content-card">
            <h3>Diem tam dac va thach thuc</h3>
            <p>{conclusion.insight}</p>
            <p>{conclusion.highlight}</p>
            <p>{conclusion.challenge}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal className="profile-grid-span">
          <GlassCard className="content-card">
            <h3>Dinh huong phat trien trong thoi gian toi</h3>
            <div className="tool-cloud">
              {conclusion.future.map((item) => (
                <PastelTag key={item} icon={ArrowUpRight}>
                  {item}
                </PastelTag>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Replace App shell with one-page composition**

Replace `tra-portfolio/src/App.jsx`:

```jsx
import { ConfigProvider } from 'antd';
import SoftBackground from './components/kbeauty/SoftBackground.jsx';
import BeautyProfileSection from './components/sections/BeautyProfileSection.jsx';
import CapabilitiesSection from './components/sections/CapabilitiesSection.jsx';
import ConclusionSection from './components/sections/ConclusionSection.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="kbeauty-app">
        <SoftBackground />
        <main className="kbeauty-main" aria-label="Tra portfolio">
          <HeroSection />
          <BeautyProfileSection />
          <CapabilitiesSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="kbeauty-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
```

- [ ] **Step 8: Run lint**

Run:

```powershell
cd tra-portfolio
npm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 9: Commit sections**

Run:

```powershell
git add tra-portfolio/src/App.jsx tra-portfolio/src/index.css tra-portfolio/src/components/sections
git commit -m "feat: build Tra one-page portfolio sections"
```

Expected: commit succeeds.

## Task 5: Add Render Tests And Project Docs

**Files:**
- Create: `tra-portfolio/tests/render-check.spec.js`
- Create: `tra-portfolio/README.md`
- Modify: `README.md`

- [ ] **Step 1: Add Playwright render check**

Create `tra-portfolio/tests/render-check.spec.js`:

```js
import { expect, test } from '@playwright/test';

test.describe('Tra portfolio render', () => {
  test('renders one-page content and opens a PDF modal on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Pham Thanh Tra' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh muc bai tap' })).toBeVisible();
    await expect(page.getByText('May tinh va thiet bi ngoai vi')).toBeVisible();

    await page.getByRole('button', { name: 'Mo PDF' }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('.pdf-frame')).toHaveAttribute('src', '/docs/bt1.pdf');
  });

  test('keeps content readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Pham Thanh Tra' })).toBeVisible();
    await expect(page.getByText('Toi gian, hien dai')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Mo PDF' }).first()).toBeVisible();
  });
});
```

- [ ] **Step 2: Add project README**

Create `tra-portfolio/README.md`:

```markdown
# Tra Portfolio

One-page React portfolio for Pham Thanh Tra.

## UI Style

`k-beauty` / Korean aesthetic portfolio:
- milk-white and pastel surfaces
- powder pink, lavender, sky pastel, warm beige accents
- soft cards with 20-28px radius
- local 2D pastel blob assets and skincare-inspired UI accents
- PDF assignments open inside an Ant Design modal

## Source Content

Visible content is sourced from `docs/portfolio.md`. The avatar and six assignment PDFs come from `docs/` and are served from:
- `public/assets/avatar.png`
- `public/docs/bt1.pdf` through `public/docs/bt6.pdf`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run test:e2e
```
```

- [ ] **Step 3: Add Tra to monorepo README**

In root `README.md`, add this row under `## 7. Danh sach du an con`:

```markdown
| `tra-portfolio` | Pham Thanh Tra | K-Beauty / Korean Aesthetic Portfolio | ✅ Hoan thanh |
```

Use the same table format as the existing rows.

- [ ] **Step 4: Run e2e test to verify it passes**

Run:

```powershell
cd tra-portfolio
npm run test:e2e
```

Expected: two Playwright tests pass in Chromium.

- [ ] **Step 5: Commit tests and docs**

Run:

```powershell
git add tra-portfolio/tests/render-check.spec.js tra-portfolio/README.md README.md
git commit -m "test: add Tra portfolio render checks"
```

Expected: commit succeeds.

## Task 6: Build, Visual Verification, And Dev Server

**Files:**
- Modify only if verification exposes defects in files created above.

- [ ] **Step 1: Run production build**

Run:

```powershell
cd tra-portfolio
npm run build
```

Expected: Vite build completes and writes `dist/`.

- [ ] **Step 2: Run lint**

Run:

```powershell
cd tra-portfolio
npm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 3: Run Playwright**

Run:

```powershell
cd tra-portfolio
npm run test:e2e
```

Expected: PASS with desktop and mobile checks.

- [ ] **Step 4: Start dev server for user review**

Run:

```powershell
cd tra-portfolio
npm run dev
```

Expected: Vite serves at `http://127.0.0.1:5180/`. Keep the server running when handing off to the user.

- [ ] **Step 5: Commit verification fixes if any were needed**

If Step 1, 2, or 3 required a code fix, run:

```powershell
git add tra-portfolio
git commit -m "fix: polish Tra portfolio verification"
```

Expected: commit includes only verification fixes for `tra-portfolio`.

## Self-Review

- Spec coverage: scaffold, one-page architecture, source-backed content, copied avatar/PDF assets, K-beauty palette, 2D pastel assets, PDF modal, animations, responsive rules, tests, and root README update are covered.
- Placeholder scan: no unresolved markers or deferred implementation notes remain in this plan.
- Type consistency: component names, data exports, CSS class names, and project file paths match across tasks.
