import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "README.md",
  "index.html",
  "src/main.jsx",
  "src/App.jsx",
  "src/theme.js",
  "src/data/portfolioData.js",
  "src/components/layout/CruiseShell.jsx",
  "src/components/layout/CruiseNav.jsx",
  "src/components/pages/AboutPage.jsx",
  "src/components/pages/ProjectsPage.jsx",
  "src/components/pages/ConclusionPage.jsx",
  "src/index.css",
];

const requiredSvgAssets = [
  "sunset-sky-gradient.svg",
  "ship-silhouette.svg",
  "lantern-set.svg",
  "compass-rose.svg",
  "rope-knot-borders.svg",
  "wave-gentle.svg",
  "cruise-log-icons.svg",
  "star-constellation.svg",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} must exist`);
}

for (const asset of requiredSvgAssets) {
  const assetPath = join(root, "src/assets/sunset-cruise-log", asset);
  assert.ok(existsSync(assetPath), `${asset} must exist in src/assets/sunset-cruise-log`);
  assert.ok(statSync(assetPath).size > 300, `${asset} must be a real custom SVG asset`);
  const svg = readFileSync(assetPath, "utf8");
  assert.match(svg, /<svg[\s>]/, `${asset} must contain SVG markup`);
}

const readme = read("README.md");
assert.match(readme, /sunset-cruise-log/, "README must declare the chosen catalog theme");
assert.match(readme, /3 tab/, "README must require a 3-tab layout");
assert.match(readme, /không phải one-page|khong phai one-page/i, "README must reject one-page layout");

const packageJson = JSON.parse(read("package.json"));
assert.ok(packageJson.dependencies["react-router-dom"], "app must use react-router-dom");
assert.ok(packageJson.dependencies["framer-motion"], "app must use Framer Motion");

const app = read("src/App.jsx");
assert.match(app, /BrowserRouter/, "App must use BrowserRouter");
assert.match(app, /Routes/, "App must define route-based pages");
assert.match(app, /path="\/projects"/, "App must include the projects route");
assert.match(app, /path="\/conclusion"/, "App must include the conclusion route");
assert.doesNotMatch(app, /href="#/, "App must not use one-page anchor navigation");

const shell = read("src/components/layout/CruiseShell.jsx");
const allSource = [
  shell,
  read("src/components/layout/CruiseNav.jsx"),
  read("src/components/pages/AboutPage.jsx"),
  read("src/components/pages/ProjectsPage.jsx"),
  read("src/components/pages/ConclusionPage.jsx"),
  read("src/components/ui/RopeCard.jsx"),
].join("\n");
for (const asset of requiredSvgAssets) {
  assert.match(allSource, new RegExp(asset.replace(".", "\\.")), `${asset} must be imported/rendered in UI`);
}

const nav = read("src/components/layout/CruiseNav.jsx");
assert.match(nav, /NavLink/, "CruiseNav must navigate with route links");
assert.match(nav, /Giới thiệu/, "Nav must include About tab");
assert.match(nav, /Dự án/, "Nav must include Projects tab");
assert.match(nav, /Tổng kết/, "Nav must include Conclusion tab");
assert.doesNotMatch(nav, /href="#/, "Nav must not use anchor-scroll links");

const data = read("src/data/portfolioData.js");
assert.match(data, /Nguyễn Minh Châu/, "data must identify Nguyen Minh Chau");
assert.match(data, /Kiến thức là nền tảng/, "data must include the source motto");
assert.match(data, /Google Drive/, "data must include tools from docs/portfolio.md");
assert.match(data, /ResearchGate/, "data must include academic source tools");
assert.match(data, /Quan điểm học thuật độc lập/, "data must include conclusion from docs/portfolio.md");
assert.match(data, /bt1\.pdf/, "data must wire evidence PDF 1");
assert.match(data, /bt6\.pdf/, "data must wire evidence PDF 6");

const about = read("src/components/pages/AboutPage.jsx");
const projects = read("src/components/pages/ProjectsPage.jsx");
const conclusion = read("src/components/pages/ConclusionPage.jsx");
assert.match(about, /profile|strengths|tools/i, "About page must render profile, strengths, and tools");
assert.match(projects, /projects\.map/, "Projects page must render project entries from data");
assert.match(conclusion, /conclusion/, "Conclusion page must render conclusion data");

const css = read("src/index.css");
assert.match(css, /--sunset-pink:\s*#F2789F/i, "CSS must include sunset-cruise-log palette");
assert.match(css, /--ocean-teal:\s*#5EC4B8/i, "CSS must include ocean teal");
assert.match(css, /@keyframes\s+wave/, "CSS must include wave animation");
assert.match(css, /@keyframes\s+lanternGlow/, "CSS must include lantern animation");
assert.match(css, /asset-sky|asset-wave|asset-ship|asset-lantern|asset-compass/, "CSS must style rendered SVG assets");
