import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "README.md",
  "index.html",
  "package.json",
  "vite.config.js",
  "src/main.jsx",
  "src/App.jsx",
  "src/index.css",
  "src/data/portfolioData.js",
  "src/components/layout/HarborShell.jsx",
  "src/components/layout/HarborNav.jsx",
  "src/components/ui/WoodButton.jsx",
  "src/components/ui/PageTransition.jsx",
  "src/components/about/HeroDock.jsx",
  "src/components/about/AboutBoard.jsx",
  "src/components/about/CompassSkills.jsx",
  "src/components/projects/ProjectDockGrid.jsx",
  "src/pages/AboutPage.jsx",
  "src/pages/ProjectsPage.jsx",
  "src/pages/ConclutionsPage.jsx"
];

const requiredAssets = [
  "DESIGN.png",
  "about-bg.png",
  "about-frame.png",
  "avatar-frame.png",
  "bottle.png",
  "compas.png",
  "conclution-bg.png",
  "explore-projects.png",
  "footer.png",
  "lantern.png",
  "law-tag.png",
  "project-bg.png",
  "project-frame.png",
  "skills-bg.png",
  "wave.png"
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} must exist`);
}

for (const asset of requiredAssets) {
  const assetPath = join(root, "src/assets", asset);
  assert.ok(existsSync(assetPath), `${asset} must exist in src/assets`);
  assert.ok(statSync(assetPath).size > 1024, `${asset} must be a real image asset`);
}

for (const doc of ["avatar.png", "bt1.pdf", "bt2.pdf", "bt3.pdf", "bt4.pdf", "bt5.pdf", "bt6.pdf", "portfolio.md"]) {
  const docPath = join(root, "docs", doc);
  assert.ok(existsSync(docPath), `${doc} must exist in docs`);
  assert.ok(statSync(docPath).size > 512, `${doc} must contain real content`);
}

const packageJson = JSON.parse(read("package.json"));
assert.ok(packageJson.dependencies.react.startsWith("^18"), "app must use React 18");
assert.ok(packageJson.dependencies.vite, "app must use Vite");
assert.ok(packageJson.dependencies["framer-motion"], "app must use Framer Motion");
assert.ok(packageJson.dependencies["lucide-react"], "app must use Lucide React");
assert.ok(packageJson.dependencies["react-router-dom"], "app must use route-based navigation");

const app = read("src/App.jsx");
assert.match(app, /BrowserRouter/, "App must use BrowserRouter");
assert.match(app, /Navigate/, "App must redirect the root route");
assert.match(app, /path="\/about"/, "App must define /about");
assert.match(app, /path="\/projects"/, "App must define /projects");
assert.match(app, /path="\/conclutions"/, "App must define /conclutions");
assert.doesNotMatch(app, /path="\/skills"|path="\/contact"|path="\/home"/, "App must not add extra top-level routes");

const data = read("src/data/portfolioData.js");
for (const expected of [
  "Nguyễn Tống Sỹ Phương",
  "Luật",
  "Trường Đại học Luật - ĐHQGHN",
  "Law x Technology",
  "Giới thiệu",
  "Dự án",
  "Bơi lội",
  "thiết bị công nghệ",
  "Chương 1",
  "Chương 6",
  "Tổ chức, sắp xếp và lưu trữ dữ liệu",
  "Khai thác dữ liệu và thông tin",
  "Trí tuệ nhân tạo",
  "Giao tiếp và hợp tác trong môi trường số",
  "Sáng tạo nội dung số",
  "An toàn và liêm chính học thuật",
  "/docs/bt1.pdf",
  "/docs/bt6.pdf"
]) {
  assert.match(data, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `data must include ${expected}`);
}

assert.doesNotMatch(data, /Chuong\s+\d/, "chapter labels in portfolioData must use Vietnamese diacritics");

const shell = read("src/components/layout/HarborShell.jsx");
const nav = read("src/components/layout/HarborNav.jsx");
const hero = read("src/components/about/HeroDock.jsx");
const about = read("src/components/about/AboutBoard.jsx");
const skills = read("src/components/about/CompassSkills.jsx");
const projects = read("src/components/projects/ProjectDockGrid.jsx");
const conclusions = read("src/pages/ConclutionsPage.jsx");
const css = read("src/index.css");
const allSource = [shell, nav, hero, about, skills, projects, conclusions, css].join("\n");

assert.match(
  css,
  /@import url\("https:\/\/fonts\.googleapis\.com\/css2\?family=Fraunces:wght@500;600;700&family=Nunito\+Sans:wght@400;600;700;800&display=swap"\);/,
  "CSS must import the requested Fraunces and Nunito Sans Google Fonts"
);
assert.match(css, /--font-heading:\s*"Fraunces",\s*serif;/, "CSS must expose --font-heading");
assert.match(css, /--font-body:\s*"Nunito Sans",\s*sans-serif;/, "CSS must expose --font-body");
assert.match(css, /font-family:\s*var\(--font-body\);/, "base typography must use --font-body");
assert.match(css, /font-family:\s*var\(--font-heading\);/, "headings must use --font-heading");

const boardWaveBlock = css.match(/\.board-wave\s*{[\s\S]*?}/)?.[0] ?? "";
assert.match(boardWaveBlock, /border-top:\s*2px solid/, "board-wave must render as a simple line");
assert.doesNotMatch(boardWaveBlock, /radial-gradient|repeat-x/, "board-wave must not use decorative wave CSS");
assert.doesNotMatch(
  css,
  /\.send-harbor\s+\.board-wave\s*{[\s\S]*?radial-gradient/,
  "send harbor board-wave must not reintroduce decorative wave CSS"
);

for (const asset of [
  "about-bg.png",
  "about-frame.png",
  "avatar-frame.png",
  "bottle.png",
  "compas.png",
  "conclution-bg.png",
  "footer.png",
  "lantern.png",
  "law-tag.png",
  "project-bg.png",
  "project-frame.png",
  "skills-bg.png",
  "wave.png"
]) {
  assert.match(allSource, new RegExp(asset.replace(".", "\\.")), `${asset} must be imported or referenced by the UI`);
}

assert.match(nav, /NavLink/, "navigation must use route links");
assert.match(data, /Giới thiệu/, "navigation data must include Vietnamese About label");
assert.match(data, /Dự án/, "navigation data must include Vietnamese Projects label");
assert.match(nav, /Dock/, "navigation must include Dock label");
assert.doesNotMatch(nav, /href="#/, "navigation must not be one-page anchors");

assert.match(hero, /docs\/avatar\.png/, "hero must use the real avatar from docs");
assert.match(hero, /avatar-frame\.png/, "hero must frame avatar with avatar-frame");
assert.match(hero, /law-tag\.png/, "hero must use the provided law tag asset");
assert.match(hero, /framer-motion|motion\./, "hero must use Framer Motion");

assert.match(about, /about-frame\.png/, "about board must use the provided wood frame");
assert.match(skills, /compas\.png/, "skills section must use the compass asset");
assert.match(skills, /skills-bg\.png/, "skills section must use the skills background");

assert.match(projects, /projects\.map/, "projects section must render all project data");
assert.match(projects, /project-frame\.png/, "projects cards must use the project frame asset");
for (const pdf of ["bt1.pdf", "bt2.pdf", "bt3.pdf", "bt4.pdf", "bt5.pdf", "bt6.pdf"]) {
  assert.match(projects + data, new RegExp(pdf), `${pdf} must be wired to a project`);
}

assert.match(conclusions, /bottle\.png/, "conclusions must use the bottle asset");
assert.match(conclusions, /footer\.png/, "conclusions must use the footer asset");
assert.match(conclusions, /khong them quote|portfolioData|conclusion/i, "conclusions must render sourced conclusion data");

for (const token of [
  "--harbor-sky",
  "--harbor-navy",
  "--harbor-wood",
  "--harbor-paper",
  "--harbor-rope"
]) {
  assert.ok(css.includes(token), `${token} must be defined in CSS`);
}

assert.match(css, /\.hero-dock/, "CSS must define the hero dock layout");
assert.match(css, /\.about-board/, "CSS must define the about board layout");
assert.match(css, /\.project-grid/, "CSS must define the project grid layout");
assert.match(css, /\.compass-skills/, "CSS must define the compass skills layout");
assert.match(css, /@media\s*\(max-width:\s*720px\)/, "CSS must include mobile responsive rules");
