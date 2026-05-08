# Linh Candy Pop Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `linh-portfolio` as a standalone clone of `trang-portfolio`'s tech/data structure with a fully distinct candy-pop Bubblegum App visual system.

**Architecture:** Copy `trang-portfolio` into `linh-portfolio`, keep the same Vite React app shape and static `src/data/portfolioData.js` contract, then replace summer/postcard components and CSS with candy-specific components/classes. The app remains standalone; no shared packages or markdown parsing are introduced.

**Tech Stack:** Vite, React 18, Ant Design 6, Tailwind CSS, lucide-react, react-motion, Playwright.

---

## File Structure

- Create directory: `linh-portfolio/` copied from `trang-portfolio/`.
- Modify: `linh-portfolio/package.json` and `linh-portfolio/package-lock.json` for package name.
- Modify: `linh-portfolio/index.html` for the browser title.
- Modify: `linh-portfolio/README.md` for project name and candy-pop description.
- Modify: `linh-portfolio/src/theme.js` for Ant Design candy-pop tokens.
- Modify: `linh-portfolio/src/data/portfolioData.js` for Linh starter identity and footer.
- Modify: `linh-portfolio/src/App.jsx` to use candy app/background classes and imports.
- Create: `linh-portfolio/src/components/candy/CandyBackground.jsx`.
- Create: `linh-portfolio/src/components/candy/BubblePanel.jsx`.
- Delete after replacement: `linh-portfolio/src/components/summer/SummerSky.jsx`, `linh-portfolio/src/components/summer/WaveLayer.jsx`, `linh-portfolio/src/components/summer/PostcardFrame.jsx`.
- Modify: `linh-portfolio/src/components/sections/HeroSection.jsx`, `AboutSection.jsx`, `SkillsSection.jsx`, `ProjectsSection.jsx`, `ConclusionSection.jsx` to use candy copy/classes/icons.
- Create: `linh-portfolio/src/components/ui/CandyProjectCard.jsx`.
- Keep/modify: `linh-portfolio/src/components/ui/StickerBadge.jsx` and `ScrollReveal.jsx`.
- Delete after replacement: `linh-portfolio/src/components/ui/PostcardCard.jsx`.
- Replace: `linh-portfolio/src/index.css` with the candy-pop visual system.
- Modify: `linh-portfolio/tests/render-check.spec.js` for candy selectors and Linh starter identity.

### Task 1: Scaffold `linh-portfolio`

**Files:**
- Create: `linh-portfolio/**`
- Modify: `linh-portfolio/package.json`
- Modify: `linh-portfolio/package-lock.json`
- Modify: `linh-portfolio/index.html`
- Modify: `linh-portfolio/README.md`

- [ ] **Step 1: Copy the source project**

Run:

```powershell
Copy-Item -Recurse -LiteralPath .\trang-portfolio -Destination .\linh-portfolio
```

Expected: `linh-portfolio` exists with the same file tree as `trang-portfolio`.

- [ ] **Step 2: Rename package metadata**

Edit `linh-portfolio/package.json`:

```json
{
  "name": "linh-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "test:e2e": "playwright test",
    "preview": "vite preview"
  }
}
```

Keep the existing `dependencies` and `devDependencies` blocks unchanged.

- [ ] **Step 3: Rename lockfile package fields**

Edit the top package entries in `linh-portfolio/package-lock.json`:

```json
{
  "name": "linh-portfolio",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "linh-portfolio",
      "version": "0.0.0",
      "dependencies": {
```

Keep dependency versions unchanged.

- [ ] **Step 4: Update title and README**

Set `linh-portfolio/index.html` title to:

```html
<title>Linh - Digital Portfolio</title>
```

Replace `linh-portfolio/README.md` with:

```markdown
# Linh - Candy Pop Portfolio

Standalone React portfolio app for `linh-portfolio`.

## UI Style

- Catalog style: `candy-pop`
- Direction: Bubblegum App
- Structure: candy hero, bubble About, sticker skills/tools, candy-box projects, and bubble conclusion board
- Motion focus: floating candy bubbles, soft pop reveal, sticker hover bounce, and pill button squish

## Content Source

Portfolio text is stored in `src/data/portfolioData.js`. `docs/portfolio.md` is kept as an editable source note for later manual updates. The avatar comes from `docs/avatar.png`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```
```

- [ ] **Step 5: Commit scaffold**

Run:

```powershell
git add linh-portfolio/package.json linh-portfolio/package-lock.json linh-portfolio/index.html linh-portfolio/README.md
git commit -m "chore: scaffold linh portfolio"
```

Expected: commit succeeds.

### Task 2: Add Failing Candy Smoke Test

**Files:**
- Modify: `linh-portfolio/tests/render-check.spec.js`

- [ ] **Step 1: Replace smoke test expectations before implementation**

Replace `linh-portfolio/tests/render-check.spec.js` with:

```js
import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

test('portfolio renders the candy pop experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5176/');

  await expect(page.getByRole('heading', { name: 'Linh' })).toBeVisible();
  await expect(page.getByLabel('Thông tin cá nhân').getByText('Digital Portfolio')).toBeVisible();
  await expect(page.locator('.candy-background')).toBeVisible();
  await expect(page.locator('.candy-bubble')).toHaveCount(8);
  await expect(page.locator('.candy-project-card')).toHaveCount(6);
  await expect(page.locator('.sticker-badge').first()).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'VỀ TÔI' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 1: Máy tính và các thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài tập 6: An toàn số và Đạo đức học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Linh • Digital Portfolio')).toBeVisible();

  const bubbleAnimation = await page
    .locator('.candy-bubble')
    .first()
    .evaluate((bubble) => getComputedStyle(bubble).animationName);
  expect(bubbleAnimation).toContain('candy-float');
  expect(consoleErrors).toEqual([]);
});

test('portfolio data removes student self-reference pronouns', async () => {
  const dataSource = readFileSync('src/data/portfolioData.js', 'utf8');

  expect(dataSource).not.toMatch(/(^|[^A-Za-zÀ-ỹ])em([^A-Za-zÀ-ỹ]|$)/i);
});
```

- [ ] **Step 2: Verify the new render test fails before candy implementation**

Run:

```powershell
cd linh-portfolio
npm run test:e2e
```

Expected: FAIL because `.candy-background`, `.candy-bubble`, Linh heading, and `.candy-project-card` do not exist yet. If Playwright browsers are missing, record that the failure is environmental and continue to implementation.

- [ ] **Step 3: Commit failing test**

Run:

```powershell
git add linh-portfolio/tests/render-check.spec.js
git commit -m "test: define linh candy render expectations"
```

Expected: commit succeeds.

### Task 3: Update Identity Data and Theme Tokens

**Files:**
- Modify: `linh-portfolio/src/data/portfolioData.js`
- Modify: `linh-portfolio/src/theme.js`

- [ ] **Step 1: Update starter identity**

In `linh-portfolio/src/data/portfolioData.js`, keep all existing exported object names and item arrays, but change `personalInfo` to:

```js
export const personalInfo = {
    name: "Linh",
    major: "Digital Portfolio",
    university: "Portfolio cá nhân",
    hobbies: "Sáng tạo - Học tập - Công nghệ",
    style: "Candy Pop - Tươi sáng - Cá tính",
    footer: "© 2026 • Linh • Digital Portfolio",
    avatarUrl,
};
```

Also change `about.profile` to use those same values through `personalInfo` as it does now.

- [ ] **Step 2: Remove Trang-only references from data**

In the same file, replace occurrences of `Hoàng Thu Trang` with `Linh`. Keep project titles/descriptions unchanged as generic starter content, unless the text explicitly names Trang.

- [ ] **Step 3: Replace Ant Design theme tokens**

Replace `linh-portfolio/src/theme.js` with:

```js
export const theme = {
  token: {
    colorBgBase: '#FFF0F7',
    colorBgContainer: '#FFFFFF',
    colorPrimary: '#FF5CA8',
    colorTextBase: '#2F2440',
    colorTextSecondary: '#725D86',
    colorInfo: '#8AD8FF',
    colorSuccess: '#8EF0C0',
    colorWarning: '#FFE08A',
    colorError: '#FF6B8A',
    colorBorder: '#F5B8D8',
    borderRadius: 28,
    fontFamily: "'Nunito', 'Baloo 2', sans-serif",
  },
  components: {
    Button: {
      borderRadius: 999,
      controlHeight: 44,
      fontWeight: 900,
    },
    Card: {
      borderRadiusLG: 28,
    },
  },
};
```

- [ ] **Step 4: Run data pronoun test**

Run:

```powershell
cd linh-portfolio
npm run test:e2e -- --grep "portfolio data"
```

Expected: PASS for the data test.

- [ ] **Step 5: Commit identity/theme**

Run:

```powershell
git add linh-portfolio/src/data/portfolioData.js linh-portfolio/src/theme.js
git commit -m "feat: set linh starter data and candy theme"
```

Expected: commit succeeds.

### Task 4: Replace Summer Components With Candy Components

**Files:**
- Modify: `linh-portfolio/src/App.jsx`
- Create: `linh-portfolio/src/components/candy/CandyBackground.jsx`
- Create: `linh-portfolio/src/components/candy/BubblePanel.jsx`
- Delete: `linh-portfolio/src/components/summer/SummerSky.jsx`
- Delete: `linh-portfolio/src/components/summer/WaveLayer.jsx`
- Delete: `linh-portfolio/src/components/summer/PostcardFrame.jsx`

- [ ] **Step 1: Create candy background**

Create `linh-portfolio/src/components/candy/CandyBackground.jsx`:

```jsx
const bubbles = [
  ['pink', 'one'],
  ['mint', 'two'],
  ['lavender', 'three'],
  ['yellow', 'four'],
  ['blue', 'five'],
  ['pink', 'six'],
  ['mint', 'seven'],
  ['lavender', 'eight'],
];

export default function CandyBackground() {
  return (
    <div className="candy-background" aria-hidden="true">
      {bubbles.map(([tone, position]) => (
        <span className={`candy-bubble candy-bubble--${tone} candy-bubble--${position}`} key={position} />
      ))}
      <span className="candy-ribbon candy-ribbon--top" />
      <span className="candy-ribbon candy-ribbon--bottom" />
    </div>
  );
}
```

- [ ] **Step 2: Create reusable bubble panel**

Create `linh-portfolio/src/components/candy/BubblePanel.jsx`:

```jsx
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function BubblePanel({ id, title, eyebrow, children, accent = 'pink' }) {
  return (
    <ScrollReveal>
      <section id={id} className={`bubble-panel bubble-panel--${accent}`}>
        <div className="bubble-panel__sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}
```

- [ ] **Step 3: Update app shell**

Replace `linh-portfolio/src/App.jsx` with:

```jsx
import { ConfigProvider } from 'antd';
import CandyBackground from './components/candy/CandyBackground.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ConclusionSection from './components/sections/ConclusionSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="candy-app">
        <CandyBackground />
        <HeroSection />
        <main className="candy-main" aria-label="Linh portfolio">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="candy-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
```

- [ ] **Step 4: Remove old summer component files**

Run:

```powershell
Remove-Item -LiteralPath linh-portfolio/src/components/summer/SummerSky.jsx
Remove-Item -LiteralPath linh-portfolio/src/components/summer/WaveLayer.jsx
Remove-Item -LiteralPath linh-portfolio/src/components/summer/PostcardFrame.jsx
Remove-Item -LiteralPath linh-portfolio/src/components/summer -Recurse
```

Expected: `linh-portfolio/src/components/summer` no longer exists.

- [ ] **Step 5: Commit candy shell**

Run:

```powershell
git add linh-portfolio/src/App.jsx linh-portfolio/src/components/candy
git add -u linh-portfolio/src/components/summer
git commit -m "feat: add candy portfolio shell"
```

Expected: commit succeeds.

### Task 5: Convert Sections and Cards to Candy UI

**Files:**
- Modify: `linh-portfolio/src/components/sections/HeroSection.jsx`
- Modify: `linh-portfolio/src/components/sections/AboutSection.jsx`
- Modify: `linh-portfolio/src/components/sections/SkillsSection.jsx`
- Modify: `linh-portfolio/src/components/sections/ProjectsSection.jsx`
- Modify: `linh-portfolio/src/components/sections/ConclusionSection.jsx`
- Modify: `linh-portfolio/src/components/ui/StickerBadge.jsx`
- Create: `linh-portfolio/src/components/ui/CandyProjectCard.jsx`
- Delete: `linh-portfolio/src/components/ui/PostcardCard.jsx`

- [ ] **Step 1: Replace hero**

Replace `linh-portfolio/src/components/sections/HeroSection.jsx` with:

```jsx
import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import { about, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function HeroSection() {
  return (
    <header className="candy-hero">
      <ScrollReveal>
        <div className="hero-bubble">
          <p className="hero-kicker">
            <Sparkles size={18} strokeWidth={2.4} />
            Candy Pop Portfolio
          </p>
          <h1>{personalInfo.name}</h1>
          <p className="hero-subtitle">{about.kicker}</p>
          <div className="hero-tags" aria-label="Thông tin cá nhân">
            <span>{personalInfo.major}</span>
            <span>{personalInfo.university}</span>
            <span>{personalInfo.style}</span>
          </div>
        </div>
      </ScrollReveal>
      <div className="hero-avatar-card">
        <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
        <div className="hero-avatar-badge" aria-hidden="true">
          <Heart size={22} fill="currentColor" />
        </div>
      </div>
      <a className="scroll-candy" href="#about" aria-label="Xuống VỀ TÔI">
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
```

- [ ] **Step 2: Replace about section**

Replace `linh-portfolio/src/components/sections/AboutSection.jsx` with:

```jsx
import { BookOpen, Candy } from 'lucide-react';
import { about } from '../../data/portfolioData.js';
import BubblePanel from '../candy/BubblePanel.jsx';

export default function AboutSection() {
  return (
    <BubblePanel id="about" title={about.title} eyebrow="Bubble profile">
      <div className="about-layout">
        <article className="bubble-copy-card">
          <BookOpen size={22} strokeWidth={2.3} />
          <p>{about.intro}</p>
        </article>
        <div className="profile-chip-grid">
          {about.profile.map(([label, value]) => (
            <div className="profile-chip" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="candy-note">
        <Candy size={20} strokeWidth={2.3} />
        <span>{about.kicker}</span>
      </div>
    </BubblePanel>
  );
}
```

- [ ] **Step 3: Replace skills section imports/classes**

In `linh-portfolio/src/components/sections/SkillsSection.jsx`, import `BubblePanel` and remove wave-related icons:

```jsx
import {
    Bot,
    FileArchive,
    FolderKanban,
    GraduationCap,
    Palette,
    SearchCheck,
    Sparkles,
    UsersRound,
} from "lucide-react";
import {
    coreSkills,
    practicingSkills,
    tools,
} from "../../data/portfolioData.js";
import BubblePanel from "../candy/BubblePanel.jsx";
import StickerBadge from "../ui/StickerBadge.jsx";

const skillIcons = [FolderKanban, SearchCheck, Bot];
const coreIcons = [FileArchive, GraduationCap, Bot, Sparkles];
const toolIcons = [FolderKanban, SearchCheck, Bot, Palette, UsersRound];
const tones = ["pink", "yellow", "mint", "lavender", "blue"];

export default function SkillsSection() {
    return (
        <BubblePanel
            id="skills"
            title={coreSkills.title}
            eyebrow="Sticker skills"
            accent="mint"
        >
            <div className="sticker-row" aria-label={tools.title}>
                {tools.items.map((tool, index) => {
                    const Icon = toolIcons[index];
                    return (
                        <StickerBadge
                            icon={Icon}
                            key={tool.title}
                            label={tool.title}
                            tone={tones[index]}
                        />
                    );
                })}
            </div>

            <div className="candy-card-grid">
                {coreSkills.items.map((item, index) => {
                    const Icon = coreIcons[index];
                    return (
                        <article className="candy-note-card" key={item.title}>
                            <Icon size={22} strokeWidth={2.3} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    );
                })}
            </div>

            <div className="subsection">
                <h3>{practicingSkills.title}</h3>
                <div className="candy-card-grid three">
                    {practicingSkills.items.map((item, index) => {
                        const Icon = skillIcons[index];
                        return (
                            <article
                                className="candy-note-card compact"
                                key={item.title}
                            >
                                <Icon size={21} strokeWidth={2.3} />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </BubblePanel>
    );
}
```

- [ ] **Step 4: Create candy project card**

Create `linh-portfolio/src/components/ui/CandyProjectCard.jsx`:

```jsx
export default function CandyProjectCard({ number, title, children }) {
  return (
    <article className="candy-project-card">
      <div className="candy-project-card__number" aria-hidden="true">
        {number}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
```

- [ ] **Step 5: Replace projects section**

Replace `linh-portfolio/src/components/sections/ProjectsSection.jsx` with:

```jsx
import { Candy, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolioData.js';
import BubblePanel from '../candy/BubblePanel.jsx';
import CandyProjectCard from '../ui/CandyProjectCard.jsx';

export default function ProjectsSection() {
  return (
    <BubblePanel id="projects" title={projects.title} eyebrow={projects.chooser} accent="lavender">
      <p className="section-lead">
        <Candy size={19} strokeWidth={2.3} />
        {projects.intro}
      </p>
      <div className="candy-project-grid">
        {projects.items.map((project, index) => (
          <CandyProjectCard
            key={project.title}
            number={String(index + 1).padStart(2, '0')}
            title={project.title}
          >
            {project.description}
          </CandyProjectCard>
        ))}
      </div>
      <p className="candy-note">
        <Sparkles size={18} strokeWidth={2.3} />
        {projects.chooser}
      </p>
    </BubblePanel>
  );
}
```

- [ ] **Step 6: Replace conclusion section import/classes**

In `linh-portfolio/src/components/sections/ConclusionSection.jsx`, import `BubblePanel` and use it in place of `PostcardFrame`:

```jsx
import { CheckCircle2, Compass, Sparkles } from 'lucide-react';
import { conclusion } from '../../data/portfolioData.js';
import BubblePanel from '../candy/BubblePanel.jsx';

export default function ConclusionSection() {
  return (
    <BubblePanel
      id="conclusion"
      title={conclusion.title}
      eyebrow={conclusion.futureTitle}
      accent="yellow"
    >
      <p className="conclusion-lead">{conclusion.intro}</p>

      <div className="subsection">
        <h3>{conclusion.mindsetTitle}</h3>
        <div className="timeline-list">
          {conclusion.mindsetItems.map((item) => (
            <article className="timeline-item" key={item.title}>
              <Sparkles size={19} strokeWidth={2.4} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="reflection-grid">
        <article>
          <h3>Những điểm tâm đắc</h3>
          {conclusion.highlights.map((item) => (
            <div className="reflection-card" key={item.title}>
              <CheckCircle2 size={18} strokeWidth={2.3} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </article>
        <article>
          <h3>Những thách thức</h3>
          {conclusion.challenges.map((item) => (
            <div className="reflection-card" key={item.title}>
              <Compass size={18} strokeWidth={2.3} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div className="future-board">
        <h3>{conclusion.futureTitle}</h3>
        <p>{conclusion.futureIntro}</p>
        <div className="future-grid">
          {conclusion.futureItems.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </BubblePanel>
  );
}
```

- [ ] **Step 7: Update sticker badge tones**

Replace `linh-portfolio/src/components/ui/StickerBadge.jsx` with:

```jsx
export default function StickerBadge({ icon: Icon, label, tone = 'pink' }) {
  return (
    <div className={`sticker-badge sticker-badge--${tone}`}>
      {Icon ? <Icon size={18} strokeWidth={2.3} /> : null}
      <span>{label}</span>
    </div>
  );
}
```

- [ ] **Step 8: Delete old postcard card**

Run:

```powershell
Remove-Item -LiteralPath linh-portfolio/src/components/ui/PostcardCard.jsx
```

Expected: `PostcardCard.jsx` no longer exists.

- [ ] **Step 9: Commit candy sections**

Run:

```powershell
git add linh-portfolio/src/components/sections linh-portfolio/src/components/ui
git add -u linh-portfolio/src/components/ui/PostcardCard.jsx
git commit -m "feat: convert linh sections to candy UI"
```

Expected: commit succeeds.

### Task 6: Replace CSS With Candy-Pop Visual System

**Files:**
- Replace: `linh-portfolio/src/index.css`

- [ ] **Step 1: Replace CSS**

Replace `linh-portfolio/src/index.css` with:

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bubblegum: #ff5ca8;
  --mint-pop: #8ef0c0;
  --lavender-pop: #c7b8ff;
  --cream-yellow: #ffe08a;
  --baby-blue: #8ad8ff;
  --ink: #2f2440;
  --muted: #725d86;
  --paper: rgba(255, 255, 255, 0.86);
  --border: rgba(245, 184, 216, 0.75);
  --candy-shadow: 0 16px 34px rgba(255, 92, 168, 0.2);
  --candy-shadow-lift: 0 26px 58px rgba(47, 36, 64, 0.18);
  font-family: "Nunito", system-ui, sans-serif;
  color: var(--ink);
  background: #fff0f7;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 10%, rgba(255, 92, 168, 0.2), transparent 18rem),
    radial-gradient(circle at 86% 12%, rgba(142, 240, 192, 0.24), transparent 20rem),
    radial-gradient(circle at 72% 76%, rgba(199, 184, 255, 0.26), transparent 24rem),
    linear-gradient(180deg, #fff0f7 0%, #fff8fd 52%, #f1fbff 100%);
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
}

.candy-app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.candy-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.candy-bubble {
  position: absolute;
  display: block;
  width: clamp(46px, 8vw, 116px);
  aspect-ratio: 1;
  border: 8px solid rgba(255, 255, 255, 0.76);
  border-radius: 999px;
  box-shadow: var(--candy-shadow);
  animation: candy-float 8s ease-in-out infinite;
}

.candy-bubble--pink { background: rgba(255, 92, 168, 0.42); }
.candy-bubble--mint { background: rgba(142, 240, 192, 0.5); }
.candy-bubble--lavender { background: rgba(199, 184, 255, 0.48); }
.candy-bubble--yellow { background: rgba(255, 224, 138, 0.58); }
.candy-bubble--blue { background: rgba(138, 216, 255, 0.45); }
.candy-bubble--one { left: 5vw; top: 12vh; }
.candy-bubble--two { right: 9vw; top: 10vh; animation-delay: 0.9s; }
.candy-bubble--three { left: 18vw; top: 48vh; animation-delay: 1.5s; }
.candy-bubble--four { right: 18vw; top: 42vh; animation-delay: 2.1s; }
.candy-bubble--five { left: 8vw; bottom: 12vh; animation-delay: 2.8s; }
.candy-bubble--six { right: 6vw; bottom: 16vh; animation-delay: 3.4s; }
.candy-bubble--seven { left: 44vw; top: 18vh; animation-delay: 4s; }
.candy-bubble--eight { left: 54vw; bottom: 8vh; animation-delay: 4.6s; }

.candy-ribbon {
  position: absolute;
  left: -12vw;
  right: -12vw;
  height: 70px;
  border-radius: 999px;
  background: repeating-linear-gradient(90deg, rgba(255, 92, 168, 0.2) 0 44px, rgba(255, 224, 138, 0.28) 44px 88px, rgba(142, 240, 192, 0.22) 88px 132px);
  filter: blur(0.2px);
  opacity: 0.58;
  animation: candy-ribbon-drift 14s ease-in-out infinite;
}

.candy-ribbon--top {
  top: 72px;
  rotate: -7deg;
}

.candy-ribbon--bottom {
  bottom: 90px;
  rotate: 6deg;
  animation-delay: 2s;
}

.candy-hero,
.candy-main {
  position: relative;
  z-index: 2;
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
}

.candy-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(190px, 320px);
  gap: clamp(24px, 6vw, 74px);
  align-items: center;
  min-height: 92vh;
  padding: 54px 0 92px;
}

.hero-bubble,
.hero-avatar-card,
.bubble-panel,
.bubble-copy-card,
.profile-chip,
.candy-note-card,
.candy-project-card,
.timeline-item,
.reflection-card,
.future-board,
.future-grid article {
  border: 2px solid var(--border);
  background: var(--paper);
  box-shadow: var(--candy-shadow);
  backdrop-filter: blur(14px);
}

.hero-bubble {
  position: relative;
  overflow: hidden;
  padding: clamp(28px, 5vw, 60px);
  border-radius: 42px;
  animation: candy-pop-in 520ms ease both;
}

.hero-bubble::after {
  position: absolute;
  right: -28px;
  bottom: -34px;
  width: 130px;
  aspect-ratio: 1;
  border-radius: 999px;
  background: rgba(255, 224, 138, 0.68);
  content: "";
}

.hero-kicker,
.section-eyebrow,
.section-lead,
.candy-note {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.hero-kicker,
.section-eyebrow {
  margin: 0 0 14px;
  color: var(--bubblegum);
  font-size: 0.82rem;
  font-weight: 900;
  text-transform: uppercase;
}

.hero-bubble h1 {
  max-width: 820px;
  margin: 0;
  font-family: "Baloo 2", "Nunito", system-ui, sans-serif;
  font-size: clamp(3.2rem, 9vw, 7.2rem);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.9;
}

.hero-subtitle {
  max-width: 720px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: clamp(1rem, 2vw, 1.16rem);
  line-height: 1.74;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.hero-tags span,
.sticker-badge {
  border: 2px solid rgba(47, 36, 64, 0.08);
  border-radius: 999px;
  box-shadow: 0 12px 26px rgba(47, 36, 64, 0.1);
  font-weight: 900;
}

.hero-tags span {
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.78);
}

.hero-avatar-card {
  position: relative;
  justify-self: center;
  width: min(320px, 70vw);
  padding: 14px;
  border-radius: 40px;
  background: linear-gradient(145deg, #ffffff, #fff0f7);
  transform: rotate(3deg);
}

.hero-avatar-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 30px;
  object-fit: cover;
}

.hero-avatar-badge {
  position: absolute;
  right: -10px;
  bottom: 24px;
  display: grid;
  width: 66px;
  height: 66px;
  place-items: center;
  border: 6px solid white;
  border-radius: 999px;
  background: var(--bubblegum);
  color: white;
  box-shadow: var(--candy-shadow);
}

.scroll-candy {
  position: absolute;
  left: 50%;
  bottom: 28px;
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border-radius: 999px;
  background: var(--bubblegum);
  color: white;
  box-shadow: var(--candy-shadow);
  transform: translateX(-50%);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.scroll-candy:hover {
  box-shadow: var(--candy-shadow-lift);
  transform: translateX(-50%) translateY(-4px) scale(1.04);
}

.candy-main {
  display: grid;
  gap: clamp(38px, 7vw, 86px);
  padding-bottom: 78px;
}

.bubble-panel {
  position: relative;
  overflow: hidden;
  padding: clamp(28px, 5vw, 56px);
  border-radius: 36px;
}

.bubble-panel--mint { border-color: rgba(142, 240, 192, 0.72); }
.bubble-panel--lavender { border-color: rgba(199, 184, 255, 0.76); }
.bubble-panel--yellow { border-color: rgba(255, 224, 138, 0.86); }

.bubble-panel__sparkles {
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  gap: 8px;
}

.bubble-panel__sparkles span {
  display: block;
  width: 12px;
  aspect-ratio: 1;
  border-radius: 999px;
  background: var(--bubblegum);
}

.bubble-panel__sparkles span:nth-child(2) { background: var(--mint-pop); }
.bubble-panel__sparkles span:nth-child(3) { background: var(--cream-yellow); }

.bubble-panel h2 {
  margin: 0 0 24px;
  font-family: "Baloo 2", "Nunito", system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 4.3rem);
  font-weight: 800;
  line-height: 0.98;
}

.bubble-panel h3,
.bubble-panel h4,
.candy-project-card h3 {
  margin: 0;
  line-height: 1.18;
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 18px;
}

.bubble-copy-card {
  display: grid;
  gap: 14px;
  align-content: start;
  min-height: 260px;
  padding: 22px;
  border-radius: 30px;
}

.bubble-copy-card svg,
.candy-note-card svg,
.timeline-item svg,
.reflection-card svg {
  color: var(--bubblegum);
}

.bubble-copy-card p,
.candy-note-card p,
.candy-project-card p,
.timeline-item p,
.reflection-card p,
.future-board p,
.future-grid p,
.section-lead,
.conclusion-lead,
.candy-note {
  color: var(--muted);
  line-height: 1.72;
}

.profile-chip-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.profile-chip {
  display: grid;
  gap: 7px;
  min-height: 112px;
  padding: 16px;
  border-radius: 28px;
}

.profile-chip span {
  color: var(--bubblegum);
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.profile-chip strong {
  font-size: 1rem;
  line-height: 1.32;
}

.candy-note {
  margin: 18px 0 0;
  font-weight: 900;
}

.sticker-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 22px;
}

.sticker-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 15px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.sticker-badge:hover {
  animation: sticker-bounce 360ms ease both;
  box-shadow: var(--candy-shadow-lift);
}

.sticker-badge--pink { background: #ffd7ea; color: #97275f; }
.sticker-badge--yellow { background: #fff0b8; color: #745800; }
.sticker-badge--mint { background: #d7fae8; color: #17683c; }
.sticker-badge--lavender { background: #ece6ff; color: #5944a8; }
.sticker-badge--blue { background: #dff4ff; color: #17627c; }

.candy-card-grid,
.candy-project-grid,
.reflection-grid,
.future-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.candy-card-grid.three,
.future-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.candy-note-card {
  display: grid;
  gap: 12px;
  align-content: start;
  min-height: 178px;
  padding: 20px;
  border-radius: 30px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.candy-note-card:hover,
.candy-project-card:hover {
  box-shadow: var(--candy-shadow-lift);
  transform: translateY(-5px) rotate(0.6deg);
}

.candy-note-card.compact {
  min-height: 210px;
}

.subsection {
  margin-top: 28px;
}

.subsection > h3,
.reflection-grid h3,
.future-board h3 {
  margin: 0 0 14px;
  font-size: clamp(1.25rem, 2.6vw, 1.8rem);
}

.timeline-list {
  display: grid;
  gap: 12px;
}

.timeline-item,
.reflection-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 13px;
  padding: 16px;
  border-radius: 28px;
}

.timeline-item h4,
.reflection-card h4 {
  font-size: 1rem;
}

.section-lead {
  margin: 0 0 20px;
  font-weight: 900;
}

.candy-project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.candy-project-card {
  position: relative;
  min-height: 252px;
  overflow: hidden;
  padding: 22px;
  border-radius: 30px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.candy-project-card:nth-child(3n + 1) { background: rgba(255, 215, 234, 0.86); }
.candy-project-card:nth-child(3n + 2) { background: rgba(215, 250, 232, 0.86); }
.candy-project-card:nth-child(3n) { background: rgba(236, 230, 255, 0.86); }

.candy-project-card__number {
  display: grid;
  width: 58px;
  height: 42px;
  place-items: center;
  margin-bottom: 16px;
  border-radius: 999px;
  background: var(--bubblegum);
  color: white;
  font-weight: 900;
}

.candy-project-card h3 {
  font-size: 1.04rem;
}

.candy-project-card p {
  margin: 12px 0 0;
}

.conclusion-lead {
  max-width: 980px;
  margin: -6px 0 24px;
  font-size: 1.02rem;
}

.reflection-grid {
  margin-top: 28px;
}

.reflection-grid article {
  display: grid;
  gap: 12px;
}

.future-board {
  margin-top: 28px;
  padding: 22px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(255, 224, 138, 0.34), rgba(138, 216, 255, 0.18)), rgba(255, 255, 255, 0.86);
}

.future-grid article {
  padding: 16px;
  border-radius: 24px;
}

.candy-footer {
  position: relative;
  z-index: 2;
  padding: 36px 18px 46px;
  color: var(--muted);
  font-weight: 900;
  text-align: center;
}

@keyframes candy-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-18px) scale(1.04); }
}

@keyframes candy-ribbon-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-34px); }
}

@keyframes sticker-bounce {
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-5px) rotate(2deg) scale(1.04); }
}

@keyframes candy-pop-in {
  from { opacity: 0; transform: translateY(14px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 980px) {
  .candy-hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 42px;
  }

  .hero-avatar-card {
    justify-self: start;
    width: 230px;
  }

  .about-layout,
  .candy-card-grid,
  .candy-card-grid.three,
  .candy-project-grid,
  .reflection-grid,
  .future-grid {
    grid-template-columns: 1fr;
  }

  .profile-chip-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .candy-hero,
  .candy-main {
    width: min(100% - 22px, 1180px);
  }

  .hero-bubble,
  .bubble-panel {
    padding: 24px 18px;
    border-radius: 30px;
  }

  .hero-bubble h1 {
    font-size: clamp(2.8rem, 17vw, 4.5rem);
  }

  .profile-chip-grid {
    grid-template-columns: 1fr;
  }

  .bubble-panel__sparkles {
    display: none;
  }
}

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

- [ ] **Step 2: Scan for forbidden summer selectors and motifs**

Run:

```powershell
rg -n "summer|postcard|wave|palm|sun|beach|travel|stamp|ocean" linh-portfolio/src
```

Expected: no matches, except text inside old comments if any comments remain. Remove any remaining matches.

- [ ] **Step 3: Run lint**

Run:

```powershell
cd linh-portfolio
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit candy CSS**

Run:

```powershell
git add linh-portfolio/src/index.css
git commit -m "feat: style linh portfolio as candy pop"
```

Expected: commit succeeds.

### Task 7: Verify Build, Render, and Documentation

**Files:**
- Modify if needed: `linh-portfolio/README.md`
- Modify if needed: `README.md`

- [ ] **Step 1: Run production build**

Run:

```powershell
cd linh-portfolio
npm run build
```

Expected: PASS and `dist/` is generated.

- [ ] **Step 2: Run lint**

Run:

```powershell
cd linh-portfolio
npm run lint
```

Expected: PASS.

- [ ] **Step 3: Run render check with dev server**

Start the app:

```powershell
cd linh-portfolio
npm run dev -- --host 127.0.0.1 --port 5176
```

In another shell, run:

```powershell
cd linh-portfolio
npm run test:e2e
```

Expected: PASS for both tests. Stop the dev server after the test run.

- [ ] **Step 4: Update root README if it lists projects**

If root `README.md` contains a project list, add `linh-portfolio` with `candy-pop`. If it does not contain a project list, make no root README change.

Expected line when needed:

```markdown
- `linh-portfolio` - Candy Pop / Bubblegum Portfolio
```

- [ ] **Step 5: Final status scan**

Run:

```powershell
git status --short
rg -n "Hoàng Thu Trang|Tropical Summer|tropical-summer|summer|postcard|wave|palm|sun|beach|travel|stamp|ocean" linh-portfolio
```

Expected: `git status --short` only shows intended `linh-portfolio` and README changes. The `rg` command has no matches for Trang/tropical/summer motifs in `linh-portfolio`.

- [ ] **Step 6: Commit final verification/docs**

Run:

```powershell
git add linh-portfolio README.md
git commit -m "docs: register linh portfolio"
```

Expected: commit succeeds if README changed. If no README change is needed and no files remain unstaged, skip this commit.
