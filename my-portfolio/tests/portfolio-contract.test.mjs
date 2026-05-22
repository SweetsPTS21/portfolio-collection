import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "index.html",
  "package.json",
  "src/main.jsx",
  "src/App.jsx",
  "src/index.css",
  "src/data/portfolioData.js",
  "src/assets/DESIGN.png",
  "src/assets/page.png",
  "src/assets/hero.png",
  "src/assets/avatar-portrait.png",
  "src/assets/project-card.png",
  "src/assets/conclution-left.png",
  "src/assets/conclution-right.png",
  "src/assets/icons/manifest.json",
  "tests/visual-design-match.test.mjs",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} should exist`);
}

const packageJson = JSON.parse(read("package.json"));
const app = read("src/App.jsx");
const css = read("src/index.css");
const data = read("src/data/portfolioData.js");
const manifest = JSON.parse(read("src/assets/icons/manifest.json"));
const visualTest = read("tests/visual-design-match.test.mjs");

assert.equal(packageJson.scripts.dev, "vite --host 127.0.0.1 --port 5195", "dev script should use the my-portfolio port");
assert.equal(packageJson.scripts.build, "vite build", "build script should compile with Vite");
assert.equal(packageJson.scripts.test, "node tests/portfolio-contract.test.mjs", "test script should run the contract test");
assert.equal(packageJson.scripts["test:visual"], "node tests/visual-design-match.test.mjs", "visual test script should compare against DESIGN");

for (const dependency of ["@vitejs/plugin-react", "vite", "react", "react-dom", "framer-motion", "lucide-react"]) {
  assert.ok(packageJson.dependencies[dependency], `${dependency} should be declared`);
}

assert.doesNotMatch(app, /import\s+\w+\s+from\s+["']\.\/assets\/DESIGN\.png["']/, "App must not render DESIGN.png as the page");
assert.doesNotMatch(app, /designReference|design-reference/, "App should not keep the old DESIGN image shortcut");
assert.match(app, /page\.png/, "App should use page.png as the full-page frame asset");
assert.match(app, /avatar-portrait\.png/, "App should use the avatar frame asset");
assert.match(app, /project-card\.png/, "App should use project-card.png for repeated project cards");
assert.match(app, /conclution-left\.png/, "App should use the left conclusion frame asset");
assert.match(app, /conclution-right\.png/, "App should use the right conclusion frame asset");
assert.doesNotMatch(app, /import\.meta\.glob\([^)]*eager:\s*true/, "App should not eager-bundle every extracted icon");
assert.doesNotMatch(app, /decorativeIcons|decor-|heroTemplate|hero-template/, "App should not add decorative layers outside the provided frames");
assert.doesNotMatch(app, /avatar-art|portrait-face|project-visual|projectLooks/, "App should not draw synthetic image placeholders");
assert.match(app, /chapters\.map/, "App should render project cards from portfolio data");
assert.match(app, /aria-label=\{portfolioTitle\}/, "App should expose the portfolio title as an accessible label");
assert.match(app, /hero-profile-note/, "hero should render a right-side personal information note");
assert.match(app, /profile-note-list/, "hero note should list compact personal details");
assert.match(app, /profile\.future/, "hero note should include the future direction from portfolio data");
assert.doesNotMatch(app, /className=["']goal-box["']/, "hero should remove the old goal box to keep the intro compact");

assert.match(css, /--page-width:\s*941;/, "CSS should preserve current page.png width");
assert.match(css, /--page-height:\s*1672;/, "CSS should preserve current page.png height");
assert.match(css, /--sheet-max-width:\s*1120px;/, "sheet should scale above the raw 941px design width on desktop");
assert.match(css, /\.portfolio-sheet\s*{[\s\S]*aspect-ratio:\s*941\s*\/\s*1672;/, "sheet should match current page.png aspect ratio");
assert.match(css, /\.portfolio-sheet\s*{[\s\S]*width:\s*min\(100vw,\s*var\(--sheet-max-width\)\);/, "sheet width should use the larger desktop scale variable");
assert.match(css, /\.page-frame\s*{[\s\S]*position:\s*absolute;[\s\S]*inset:\s*0;[\s\S]*width:\s*100%;[\s\S]*height:\s*100%;/, "page.png should fill the frame");
assert.match(css, /\.avatar-card\s*{[\s\S]*left:\s*7%;[\s\S]*width:\s*35%;/, "hero avatar frame should sit on the left side");
assert.match(css, /\.hero-profile-note\s*{[\s\S]*right:\s*5%;[\s\S]*width:\s*46%;/, "hero personal note should sit on the right side");
assert.match(css, /\.profile-note-list\s*{[\s\S]*grid-template-columns:\s*1fr;/, "hero note should stack compact personal fields");
assert.match(css, /\.projects-grid\s*{[\s\S]*grid-template-columns:\s*repeat\(3,\s*1fr\);/, "project list should follow the 3-column DESIGN layout");
assert.match(css, /\.projects-section\s*{[\s\S]*top:\s*34\.6%;[\s\S]*height:\s*39\.8%;/, "project section should align with the middle panel in the current page.png");
assert.match(css, /\.projects-grid\s*{[\s\S]*height:\s*77%;[\s\S]*align-content:\s*space-between;/, "project grid should distribute the two project rows across the current middle panel");
assert.doesNotMatch(css, /radial-gradient|repeating-linear-gradient|linear-gradient\(/, "CSS should not create extra illustrative details beyond assets/text");
assert.doesNotMatch(css, /\.decor|\.hero-template|\.avatar-art|\.portrait-face|\.project-visual/, "CSS should not contain synthetic decoration classes");

for (const token of [
  "Đặng Vũ Trà My",
  "Luật học",
  "Sở hữu trí tuệ",
  "Tổ chức, sắp xếp và lưu trữ dữ liệu",
  "An toàn và liêm chính học thuật",
]) {
  assert.match(data, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `data should include ${token}`);
}

assert.equal(manifest.length, 154, "icon manifest should include all extracted sticker assets");

const iconFiles = readdirSync(join(root, "src/assets/icons/wrap-icon-1")).length
  + readdirSync(join(root, "src/assets/icons/wrap-icon-2")).length;
assert.equal(iconFiles, 154, "there should be 154 extracted sticker PNG files");

assert.match(visualTest, /pixelMismatchRatio/, "visual test should compute a pixel mismatch ratio");
assert.match(visualTest, /page\.png/, "visual test should use page.png as the current screenshot size reference");
assert.doesNotMatch(visualTest, /DESIGN\.png/, "visual test should not use the old DESIGN dimensions after page.png changed");
