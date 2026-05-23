import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const read = (path) => readFileSync(join(root, path), "utf8");

assert.ok(existsSync(join(root, "src/App.jsx")), "App.jsx should exist");
assert.ok(existsSync(join(root, "src/data/portfolioData.js")), "portfolio data should exist");
assert.ok(existsSync(join(root, "src/app/AnimatedRoutes.jsx")), "routes should be separated from App");
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
assert.match(css, /--desk-azure:\s*#EFF8FF/i, "theme should use azure study desk background");
assert.match(css, /--study-blue:\s*#2E86C1/i, "theme should use study-blue from catalog");
assert.match(css, /--kraft-brown:\s*#B98245/i, "theme should include kraft brown accent");
assert.match(css, /--wood-brown:\s*#7B4D2E/i, "theme should include wood brown accent");
assert.match(css, /paper-float/, "paper float animation should exist");
assert.match(css, /pen-underline-draw/, "pen underline animation should exist");
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(css, /\.research-note-card\s*{[\s\S]*background:/, "project cards should look like research notes");
assert.match(css, /\.note-content\s*{[\s\S]*z-index:/, "note card content should layer above desk decoration");
assert.match(css, /\.note-actions/, "research note PDF actions should be styled");
assert.match(noteCard, /target="_blank"/, "research note card should open PDF in a new tab");
assert.match(noteCard, /download=\{project\.pdfName\}/, "research note card should provide a PDF download action");
assert.match(studyScene, /study-desk-top\.svg/, "study scene should import desk top asset");
assert.doesNotMatch(css, /kitty-cafe-menu|paw-prints|kitty-tail-sway|steam-rise/, "css should not reference the old kitty cafe theme");

const assetDir = join(root, "src/assets/azure-study-desk");
assert.ok(existsSync(assetDir), "azure-study-desk asset directory should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 8, "should include at least eight 2D SVG assets");

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
