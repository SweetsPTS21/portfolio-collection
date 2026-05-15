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
assert.ok(existsSync(join(root, "src/components/layout/MagicalScene.jsx")), "scene background should be a layout component");
assert.ok(existsSync(join(root, "src/components/layout/PageShell.jsx")), "page shell should be a layout component");
assert.ok(existsSync(join(root, "src/components/ui/MagicPanel.jsx")), "magic panel should be a shared UI component");
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
assert.match(data, /HÀ THỊ YẾN VI/, "portfolio should identify Yen Vi");
assert.match(data, /Luật học/, "portfolio should include major");
assert.match(data, /Google Scholar/, "portfolio should include tools");
assert.match(data, /Prompt Engineering/, "portfolio should include conclusion skills");
assert.match(data, /Bt1\.pdf/, "project data should reference the first PDF");
assert.match(data, /Bt6\.pdf/, "project data should reference the sixth PDF");

const css = read("src/index.css");
const spellCard = read("src/components/projects/SpellCard.jsx");
assert.match(css, /color\.jpg/, "background should reference color.jpg");
assert.match(css, /--photo-pink-bg:\s*#ffe6ec/i, "background should use the sampled pink from docs/color.jpg");
assert.doesNotMatch(css, /rgba\(255,\s*230,\s*109,\s*0\.2\)/, "background should not mix in the old yellow wash");
assert.doesNotMatch(css, /rgba\(109,\s*242,\s*214,\s*0\.2\)/, "background should not mix in the old aqua wash");
assert.match(css, /magic-circle-spin/, "magic circle animation should exist");
assert.match(css, /wand-trail-draw/, "wand trail animation should exist");
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(spellCard, /className="spell-card-frame"/, "spell card frame should have a dedicated class");
assert.match(css, /\.spell-card-frame\s*{[\s\S]*right:/, "spell card frame should be positioned away from text");
assert.match(css, /\.spell-content\s*{[\s\S]*max-width:/, "spell card content should reserve space away from frame art");
assert.match(spellCard, /target="_blank"/, "spell card should open PDF in a new tab");
assert.match(spellCard, /download=\{project\.pdfName\}/, "spell card should provide a PDF download action");
assert.match(css, /\.spell-actions/, "spell card PDF actions should be styled");

const assetDir = join(root, "src/assets/magical-girl-ui");
assert.ok(existsSync(assetDir), "magical-girl-ui asset directory should exist");
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
