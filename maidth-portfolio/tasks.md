# Maidth Portfolio Implementation Tasks

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` before executing this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `maidth-portfolio` as a React 18 portfolio using the `dreamy-flower-train` theme from `README.md`.

**Architecture:** App has exactly 3 routes: `/about`, `/projects`, `/conclution`. A shared glass page shell owns navigation, background scene, route transitions, and Lenis setup. Content is mapped from `docs/portfolio.md`; visual identity comes from large `dreamy-flower-train` assets, glassmorphism, and strong motion.

**Tech Stack:** React 18, Vite latest, Framer Motion, `lucide-react`, Lenis, CSS modules or plain CSS.

---

## Source Requirements

- `README.md` defines theme, architecture, route rules, palette, assets, animation, responsive, accessibility.
- `docs/portfolio.md` is the only content source.
- `docs/avatar.jpg` may be used only for profile/avatar display if needed.
- No route beyond `/about`, `/projects`, `/conclution`.
- Keep route spelling `conclution`.

---

## Task 1: Project Setup

**Files:**

- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/index.css`

- [ ] Create Vite React app inside `maidth-portfolio` without changing README or docs.
- [ ] Install required dependencies:

```bash
npm install react@18 react-dom@18 framer-motion lucide-react lenis
npm install -D @vitejs/plugin-react vite
```

- [ ] Set scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- [ ] Import `src/index.css` from `src/main.jsx`.
- [ ] Render root React app with `createRoot`.
- [ ] Verify setup:

```bash
npm run build
```

Expected: Vite build exits with code 0.

---

## Task 2: Content Mapping

**Files:**

- Read: `docs/portfolio.md`
- Create: `src/features/journey-content/portfolioContent.js`

- [ ] Convert `I. Trang Giới thiệu (About Me)` into `aboutContent`.
- [ ] Convert `II. Trang Dự án (Projects)` into `projectsContent`.
- [ ] Convert `III. Trang Tổng kết (Conclusion)` into `conclusionContent`.
- [ ] Preserve wording from `docs/portfolio.md`; do not add invented skills, projects, achievements, numbers, or claims.
- [ ] Structure project chapters as six project cards matching Chương 1 through Chương 6.
- [ ] Export one object:

```js
export const portfolioContent = {
  about: aboutContent,
  projects: projectsContent,
  conclusion: conclusionContent,
};
```

- [ ] Verify all route content has source text from `docs/portfolio.md`.

---

## Task 3: Theme Tokens And Global CSS

**Files:**

- Create: `src/app/theme.js`
- Modify: `src/index.css`

- [ ] Define theme tokens from README palette:

```js
export const theme = {
  colorBgBase: "#F7F1FF",
  colorBgContainer: "rgba(255, 255, 255, 0.58)",
  colorPrimary: "#B88CFF",
  colorTextBase: "#2E2348",
  colorTextSecondary: "#7B6A9C",
  colorSuccess: "#9FE7D0",
  colorWarning: "#FFE48A",
  colorInfo: "#A7C7FF",
  colorBorder: "rgba(184, 140, 255, 0.34)",
  borderRadius: 20,
  fontFamily: "'Quicksand', 'Nunito', sans-serif",
};
```

- [ ] Add Google Font import for `Quicksand` and `Nunito`.
- [ ] Add CSS variables: `--dream-violet`, `--lilac-mist`, `--amethyst-deep`, `--soft-orchid`, `--cloud-lavender`, `--petal-rose`, `--rail-gold`, `--sky-blue`, `--mint-glow`, `--glass-white`, `--glass-border`.
- [ ] Add reusable glass styles for panel/card/nav:

```css
.glass-surface {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(184, 140, 255, 0.34);
  backdrop-filter: blur(18px) saturate(1.35);
  box-shadow: 0 24px 70px rgba(184, 140, 255, 0.22);
}
```

- [ ] Add reduced motion fallback:

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

---

## Task 4: App Shell And Routing

**Files:**

- Create: `src/app/App.jsx`
- Create: `src/app/routes.js`
- Create: `src/components/layout/GlassPageShell.jsx`
- Create: `src/components/layout/TrainNav.jsx`
- Create: `src/components/layout/StationTransition.jsx`

- [ ] Define routes in `src/app/routes.js`:

```js
export const routes = [
  { path: "/about", label: "Giới thiệu", page: "about" },
  { path: "/projects", label: "Dự án", page: "projects" },
  { path: "/conclution", label: "Tổng kết", page: "conclution" },
];
```

- [ ] Redirect unknown paths to `/about`.
- [ ] Build `GlassPageShell` so background scene sits behind route content.
- [ ] Build `TrainNav` with Lucide icons and text labels.
- [ ] Build `StationTransition` with Framer Motion `AnimatePresence`.
- [ ] Verify only 3 route entries render in nav.

---

## Task 5: Lenis Smooth Scroll

**Files:**

- Create: `src/app/lenisSetup.js`
- Modify: `src/app/App.jsx`

- [ ] Create Lenis setup function with cleanup.
- [ ] Disable heavy smooth-scroll behavior when `prefers-reduced-motion: reduce` matches.
- [ ] Mount Lenis once inside app shell.
- [ ] Stop animation frame loop on unmount.
- [ ] Verify route navigation still scrolls to top or intended station start.

---

## Task 6: Background Scene Assets

**Files:**

- Create folder: `src/assets/dreamy-flower-train/`
- Create: `src/features/flower-train-scene/SkyGardenBackground.jsx`
- Create: `src/features/flower-train-scene/FlowerTrainLayer.jsx`
- Create: `src/features/flower-train-scene/RainbowLilacRailDraw.jsx`
- Create: `src/features/flower-train-scene/PetalSmokeLayer.jsx`

- [ ] Add or generate these assets:

```txt
sky-garden-panorama.svg
flower-train-set.svg
rainbow-lilac-rail-path.svg
cloud-station-set.svg
train-ticket-frames.svg
petal-smoke-particles.svg
luggage-flower-icons.svg
arrival-board-labels.svg
```

- [ ] Make `SkyGardenBackground` full viewport, not inside card.
- [ ] Make `FlowerTrainLayer` large foreground/background accent.
- [ ] Make `RainbowLilacRailDraw` connect route visual flow.
- [ ] Make `PetalSmokeLayer` render 20-30 visible particles maximum.
- [ ] Mark purely decorative SVG layers with `aria-hidden="true"`.

---

## Task 7: Reusable UI Components

**Files:**

- Create: `src/components/ui/TicketButton.jsx`
- Create: `src/components/ui/StationCard.jsx`
- Create: `src/components/ui/RailTag.jsx`
- Create: `src/components/ui/FlowerWindowBadge.jsx`
- Create: `src/components/ui/SparkleDivider.jsx`

- [ ] `TicketButton` uses ticket shape, glass highlight, Framer Motion hover/tap.
- [ ] `StationCard` uses `.glass-surface`, lilac border, top highlight, responsive padding.
- [ ] `RailTag` renders small labels such as chapter, goal, tool, principle.
- [ ] `FlowerWindowBadge` renders Lucide icon or small SVG asset with text.
- [ ] `SparkleDivider` renders lightweight decorative separation between content groups.
- [ ] Ensure cards include at least one decoration: ticket stamp, rail border, flower window, luggage icon, or sparkle frame.

---

## Task 8: About Route

**Files:**

- Create: `src/pages/CloudStationAboutPage.jsx`
- Create: `src/features/journey-content/AboutJourneyPanel.jsx`

- [ ] Render `/about` as first cloud station.
- [ ] Use content from `portfolioContent.about` only.
- [ ] Display profile as train ticket or train window glass panel.
- [ ] Use `docs/avatar.jpg` if profile image appears.
- [ ] Add station sign entrance animation.
- [ ] Keep text readable over glass panel at desktop and mobile sizes.

---

## Task 9: Projects Route

**Files:**

- Create: `src/pages/TrainCarProjectsPage.jsx`
- Create: `src/features/station-projects/StationProjectGrid.jsx`
- Create: `src/features/station-projects/TrainCarProjectCard.jsx`
- Create: `src/features/station-projects/TicketStampHover.jsx`

- [ ] Render `/projects` as journey through project train cars.
- [ ] Render exactly six chapter cards from `docs/portfolio.md`.
- [ ] Each card includes chapter title, goal, process summary from source content.
- [ ] Each card has ticket stamp, rail border, flower window, and luggage icon.
- [ ] Use Framer Motion stagger reveal for train cars.
- [ ] Use hover animation: ticket flip, stamp pop, flower window shine, rail border glow.

---

## Task 10: Conclution Route

**Files:**

- Create: `src/pages/ArrivalConclutionPage.jsx`
- Create: `src/features/journey-content/ConclusionArrivalPanel.jsx`

- [ ] Render `/conclution` as final pastel-lilac arrival station.
- [ ] Use content from `portfolioContent.conclusion` only.
- [ ] Show arrival board style for experience, takeaways, highlights, challenges, future direction.
- [ ] Add arrival board flip animation.
- [ ] Add petal smoke to sparkle trail transition.
- [ ] Keep route path spelling `conclution` in code and navigation.

---

## Task 11: Motion System

**Files:**

- Create: `src/app/motionConfig.js`
- Modify: scene, route, card components from previous tasks

- [ ] Define shared variants: `pageTransition`, `stationDrop`, `cardStagger`, `ticketHover`, `sparkleSweep`.
- [ ] Use Framer Motion for page transition, route reveal, card hover, project stagger.
- [ ] Use CSS keyframes for idle train bob, wheel rotate, cloud drift, sparkle twinkle.
- [ ] Keep animation on `transform` and `opacity` where possible.
- [ ] Respect reduced motion across Framer Motion and CSS.

---

## Task 12: Responsive And Accessibility Pass

**Files:**

- Modify: `src/index.css`
- Modify: page/layout/scene components as needed

- [ ] Desktop: full scene, foreground train large, layered parallax.
- [ ] Tablet: keep train and station, reduce particles.
- [ ] Mobile: one-column cards, train as header/anchor, no text overlap.
- [ ] Decorative SVG elements use `aria-hidden="true"`.
- [ ] Navigation links have visible text and accessible labels.
- [ ] Main text contrast reaches at least 4.5:1 on glass panels.

---

## Task 13: Verification

**Files:**

- Check: all created source files
- Check: `README.md`
- Check: `tasks.md`

- [ ] Run build:

```bash
npm run build
```

Expected: build exits with code 0.

- [ ] Run dev server:

```bash
npm run dev
```

Expected: app loads locally without console crash.

- [ ] Manually verify routes:

```txt
/about
/projects
/conclution
```

Expected: each route renders its matching source section.

- [ ] Verify no extra route appears in nav.
- [ ] Verify palette uses purple dreamy tokens, not hardcoded random colors.
- [ ] Verify background is main visual layer on every route.
- [ ] Verify glass panels show blur over real background assets.
- [ ] Verify mobile width 375px has no text overlap with train, smoke, sparkle, or nav.
- [ ] Verify reduced motion disables idle loops and particles.

---

## Done Criteria

- [ ] Theme ID `dreamy-flower-train` visible in project docs/config.
- [ ] App uses React 18, Vite latest, Framer Motion, `lucide-react`, Lenis.
- [ ] Only 3 routes exist: `/about`, `/projects`, `/conclution`.
- [ ] Content comes from `docs/portfolio.md` only.
- [ ] Background uses large sky/train/rail/petal visual system.
- [ ] Glassmorphism appears in nav, panels, cards, badges.
- [ ] Project cards are decorated and animated.
- [ ] Build passes.
- [ ] Responsive and reduced-motion checks pass.
