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
assert.ok(existsSync(join(root, "src/components/layout/CafeScene.jsx")), "scene background should be a layout component");
assert.ok(existsSync(join(root, "src/components/layout/PageShell.jsx")), "page shell should be a layout component");
assert.ok(existsSync(join(root, "src/components/ui/CafePanel.jsx")), "cafe panel should be a shared UI component");
assert.ok(existsSync(join(root, "src/pages/AboutPage.jsx")), "about page should be separated");
assert.ok(existsSync(join(root, "src/pages/ProjectsPage.jsx")), "projects page should be separated");
assert.ok(existsSync(join(root, "src/pages/ConclutionPage.jsx")), "conclution page should be separated");

const app = read("src/App.jsx");
const animatedRoutes = read("src/app/AnimatedRoutes.jsx");
const routeConfig = read("src/app/routeConfig.jsx");
assert.match(app, /BrowserRouter/, "app should use a React router");
assert.match(animatedRoutes, /Routes/, "animated route component should render routes");
assert.match(routeConfig, /\/about/, "about route should be configured");
assert.match(routeConfig, /\/projects/, "projects route should be configured");
assert.match(routeConfig, /\/conclution/, "conclution route should be configured with requested spelling");
assert.doesNotMatch(app, /function AboutPage|function ProjectsPage|function ConclutionPage/, "page components should not live in App.jsx");

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
const menuCard = read("src/components/projects/MenuCard.jsx");
assert.match(css, /paw-prints\.svg/, "background should reference paw-prints.svg");
assert.match(css, /--kitty-blue:\s*#8ECDF6/i, "theme should use kitty-blue from catalog");
assert.match(css, /--cafe-bg:\s*#F2FAFF/i, "background should use the cafe cloud-cream color");
assert.match(css, /kitty-tail-sway/, "kitty tail sway animation should exist");
assert.match(css, /steam-rise/, "steam rise animation should exist");
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(css, /\.menu-card\s*{[\s\S]*background:\s*#4A6670/, "menu card should look like a chalkboard");
assert.match(css, /\.menu-content\s*{[\s\S]*z-index:/, "menu card content should layer above the chalkboard");
assert.match(menuCard, /target="_blank"/, "menu card should open PDF in a new tab");
assert.match(menuCard, /download=\{project\.pdfName\}/, "menu card should provide a PDF download action");
assert.match(css, /\.menu-actions/, "menu card PDF actions should be styled");

const assetDir = join(root, "src/assets/kitty-cafe-menu");
assert.ok(existsSync(assetDir), "kitty-cafe-menu asset directory should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 6, "should include at least six 2D SVG assets");

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
