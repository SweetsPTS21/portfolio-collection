import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const read = (path) => readFileSync(join(root, path), "utf8");

assert.ok(existsSync(join(root, "src/App.jsx")), "App.jsx should exist");
assert.ok(existsSync(join(root, "src/data/portfolioData.js")), "portfolio data should exist");
assert.ok(existsSync(join(root, "src/app/AnimatedRoutes.jsx")), "routes should be separated from App");
assert.ok(existsSync(join(root, "src/app/motionConfig.js")), "shared motion config should define the upgraded desk interactions");
assert.ok(existsSync(join(root, "src/components/layout/Navbar.jsx")), "navbar should be a layout component");
assert.ok(existsSync(join(root, "src/components/layout/StudyDeskScene.jsx")), "study desk scene should be a layout component");
assert.ok(existsSync(join(root, "src/components/layout/PageShell.jsx")), "page shell should be a layout component");
assert.ok(existsSync(join(root, "src/components/ui/StudyPanel.jsx")), "study panel should be a shared UI component");
assert.ok(existsSync(join(root, "src/pages/AboutPage.jsx")), "about page should be separated");
assert.ok(existsSync(join(root, "src/pages/ProjectsPage.jsx")), "projects page should be separated");
assert.ok(existsSync(join(root, "src/pages/ConclutionPage.jsx")), "conclution page should be separated");
assert.ok(existsSync(join(root, "src/components/projects/ResearchNoteCard.jsx")), "projects should use research note cards");

const app = read("src/App.jsx");
const animatedRoutes = read("src/app/AnimatedRoutes.jsx");
const routeConfig = read("src/app/routeConfig.jsx");
assert.match(app, /BrowserRouter/, "app should use a React router");
assert.match(app, /StudyDeskScene/, "app should render the azure study desk scene");
assert.match(animatedRoutes, /Routes/, "animated route component should render routes");
assert.match(routeConfig, /\/about/, "about route should be configured");
assert.match(routeConfig, /\/projects/, "projects route should be configured");
assert.match(routeConfig, /\/conclution/, "conclution route should be configured with requested spelling");
assert.doesNotMatch(app, /function AboutPage|function ProjectsPage|function ConclutionPage/, "page components should not live in App.jsx");
assert.doesNotMatch(app, /CafeScene/, "app shell should not use the old cafe scene");

const data = read("src/data/portfolioData.js");
assert.match(data, /Vũ Thị Quỳnh Chi/, "portfolio should identify Quynh Chi from docs");
assert.match(data, /Luật Kinh Doanh/, "portfolio should include the documented major");
assert.match(data, /Đại học Quốc gia Hà Nội/, "portfolio should include the documented school");
assert.match(data, /năng động và tự tin/, "portfolio should reflect the documented style");
assert.match(data, /chuyên gia pháp lý doanh nghiệp/, "portfolio should include the documented direction");
assert.match(data, /kiểm chứng chéo độc lập/, "portfolio should include the documented integrity challenge");
assert.match(data, /bt1\.pdf/, "project data should reference the first PDF with existing filename casing");
assert.match(data, /bt6\.pdf/, "project data should reference the sixth PDF with existing filename casing");

const css = read("src/index.css");
const noteCard = read("src/components/projects/ResearchNoteCard.jsx");
const studyScene = read("src/components/layout/StudyDeskScene.jsx");
const studyPanel = read("src/components/ui/StudyPanel.jsx");
const pageShell = read("src/components/layout/PageShell.jsx");
const reflectionHero = read("src/components/conclusion/ReflectionHero.jsx");
const motionConfig = read("src/app/motionConfig.js");
assert.match(css, /--desk-azure:\s*#EFF8FF/i, "theme should use azure study desk background");
assert.match(css, /--study-blue:\s*#2E86C1/i, "theme should use study-blue from catalog");
assert.match(css, /--kraft-brown:\s*#B98245/i, "theme should include kraft brown accent");
assert.match(css, /--wood-brown:\s*#7B4D2E/i, "theme should include wood brown accent");
assert.match(css, /paper-float/, "paper float animation should exist");
assert.match(css, /pen-underline-draw/, "pen underline animation should exist");
assert.match(css, /desk-parallax/, "desk parallax animation should exist");
assert.match(css, /page-turn/, "page turn animation should exist");
assert.match(css, /light-sweep/, "window light sweep animation should exist");
assert.match(css, /clip-shine/, "brass clip shine animation should exist");
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(css, /\.research-note-card\s*{[\s\S]*background:/, "project cards should look like research notes");
assert.match(css, /\.note-content\s*{[\s\S]*z-index:/, "note card content should layer above desk decoration");
assert.match(css, /\.note-actions/, "research note PDF actions should be styled");
assert.match(css, /\.study-panel::before/, "study panels should have paper material pseudo-elements");
assert.match(css, /\.paper-fastener/, "study panels should render brass paper fasteners");
assert.match(css, /\.note-tape/, "research notes should include kraft tape decoration");
assert.match(css, /\.note-clip/, "research notes should include brass clip decoration");
assert.match(css, /\.reflection-pinboard/, "conclusion should be styled as a desk pinboard");
assert.match(css, /\.scene-layer/, "scene assets should share layered positioning");
assert.match(noteCard, /target="_blank"/, "research note card should open PDF in a new tab");
assert.match(noteCard, /download=\{project\.pdfName\}/, "research note card should provide a PDF download action");
assert.match(studyScene, /study-desk-top\.svg/, "study scene should import desk top asset");
assert.match(studyScene, /desk-surface-layer\.svg/, "study scene should include a desk surface layer asset");
assert.match(studyScene, /window-light-layer\.svg/, "study scene should include a window light layer asset");
assert.match(studyScene, /paper-stack-set\.svg/, "study scene should include a moving paper stack asset");
assert.match(studyScene, /kraft-tape-tags\.svg/, "study scene should include kraft tape and tag accents");
assert.match(studyScene, /brass-clips-pins\.svg/, "study scene should include brass clips and pins");
assert.match(studyScene, /index-tab-set\.svg/, "study scene should include index tabs");
assert.match(studyScene, /desk-particle-set\.svg/, "study scene should include animated particles");
assert.match(studyPanel, /paper-fastener/, "study panel should render material fasteners");
assert.match(studyPanel, /panel-meta/, "study panel should support a small paper meta label");
assert.match(pageShell, /pageVariants/, "page shell should use shared page variants");
assert.match(noteCard, /cardHover/, "research note cards should use shared hover motion");
assert.match(reflectionHero, /reflection-pinboard/, "reflection hero should expose the pinboard layout class");
assert.match(motionConfig, /export const pageVariants/, "motion config should export page variants");
assert.match(motionConfig, /export const cardHover/, "motion config should export card hover motion");
assert.match(motionConfig, /export const noteReveal/, "motion config should export note reveal motion");
assert.doesNotMatch(css, /kitty-cafe-menu|paw-prints|kitty-tail-sway|steam-rise/, "css should not reference the old kitty cafe theme");

const assetDir = join(root, "src/assets/azure-study-desk");
assert.ok(existsSync(assetDir), "azure-study-desk asset directory should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 14, "should include at least fourteen layered 2D SVG assets");
for (const asset of [
    "desk-surface-layer.svg",
    "window-light-layer.svg",
    "open-notebook-layered.svg",
    "paper-stack-set.svg",
    "kraft-tape-tags.svg",
    "brass-clips-pins.svg",
    "index-tab-set.svg",
    "desk-particle-set.svg",
]) {
    assert.ok(existsSync(join(assetDir, asset)), `${asset} should exist`);
}

const collectJsxFiles = (dir) =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            return collectJsxFiles(fullPath);
        }
        return entry.name.endsWith(".jsx") ? [fullPath] : [];
    });

for (const filePath of collectJsxFiles(join(root, "src"))) {
    const source = readFileSync(filePath, "utf8");
    assert.match(
        source,
        /import React from ["']react["'];/,
        `${filePath} should import React explicitly`,
    );
}
