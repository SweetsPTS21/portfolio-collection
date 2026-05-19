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
  "src/components/layout/CityShell.jsx",
  "src/components/layout/CityNav.jsx",
  "src/components/pages/AboutPage.jsx",
  "src/components/pages/ProjectsPage.jsx",
  "src/components/pages/ConclusionPage.jsx",
  "src/components/ui/NeonPanel.jsx",
  "src/components/ui/SignalBadge.jsx",
  "src/index.css",
];

const requiredAssets = [
  "neon-skyline.svg",
  "pixel-rain.svg",
  "scanline-grid.svg",
  "terminal-frame.svg",
  "neon-signs.svg",
  "circuit-map.svg",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} must exist`);
}

for (const asset of requiredAssets) {
  const assetPath = join(root, "src/assets/cyberpunk-city", asset);
  assert.ok(existsSync(assetPath), `${asset} must exist in src/assets/cyberpunk-city`);
  assert.ok(statSync(assetPath).size > 300, `${asset} must be a real custom SVG asset`);
  assert.match(readFileSync(assetPath, "utf8"), /<svg[\s>]/, `${asset} must contain SVG markup`);
}

const readme = read("README.md");
assert.match(readme, /cyberpunk-city/, "README must declare the chosen catalog theme");
assert.match(readme, /3 tab/, "README must require a 3-tab layout");
assert.match(readme, /không phải one-page|khong phai one-page/i, "README must reject one-page layout");

const packageJson = JSON.parse(read("package.json"));
assert.equal(packageJson.name, "nghia-portfolio", "package must identify Nghia portfolio");
assert.ok(packageJson.dependencies["react-router-dom"], "app must use react-router-dom");
assert.ok(packageJson.dependencies["framer-motion"], "app must use Framer Motion");
assert.ok(packageJson.dependencies["lucide-react"], "app must use lucide-react icons");

const app = read("src/App.jsx");
assert.match(app, /BrowserRouter/, "App must use BrowserRouter");
assert.match(app, /Routes/, "App must define route-based pages");
assert.match(app, /path="\/projects"/, "App must include the projects route");
assert.match(app, /path="\/conclusion"/, "App must include the conclusion route");
assert.doesNotMatch(app, /href="#/, "App must not use one-page anchor navigation");

const nav = read("src/components/layout/CityNav.jsx");
assert.match(nav, /NavLink/, "CityNav must navigate with route links");
assert.match(nav, /Giới thiệu/, "Nav must include About tab");
assert.match(nav, /Dự án/, "Nav must include Projects tab");
assert.match(nav, /Tổng kết/, "Nav must include Conclusion tab");
assert.doesNotMatch(nav, /href="#/, "Nav must not use anchor-scroll links");

const data = read("src/data/portfolioData.js");
assert.match(data, /Mẫn Văn Nghĩa/, "data must identify Man Van Nghia");
assert.match(data, /Luật Chất lượng cao/, "data must include Nghia's major");
assert.match(data, /Luật Doanh nghiệp/, "data must include current legal focus");
assert.match(data, /AI tạo sinh/, "data must include generative AI interest");
assert.match(data, /Liêm chính học thuật/, "data must include conclusion emphasis");
assert.match(data, /bt1\.pdf/i, "data must wire evidence PDF 1");
assert.match(data, /bt6\.pdf/i, "data must wire evidence PDF 6");

const shell = read("src/components/layout/CityShell.jsx");
const allSource = [
  shell,
  nav,
  read("src/components/pages/AboutPage.jsx"),
  read("src/components/pages/ProjectsPage.jsx"),
  read("src/components/pages/ConclusionPage.jsx"),
  read("src/components/ui/NeonPanel.jsx"),
].join("\n");
for (const asset of requiredAssets) {
  assert.match(allSource, new RegExp(asset.replace(".", "\\.")), `${asset} must be imported/rendered in UI`);
}

const css = read("src/index.css");
assert.match(css, /--neon-cyan:\s*#00F5FF/i, "CSS must include catalog cyan");
assert.match(css, /--neon-pink:\s*#FF2D78/i, "CSS must include catalog pink");
assert.match(css, /--neon-purple:\s*#8B00FF/i, "CSS must include catalog purple");
assert.match(css, /--neon-green:\s*#00FF88/i, "CSS must include catalog green");
assert.match(css, /--bg-base:\s*#050508/i, "CSS must include catalog black background");
assert.match(css, /@keyframes\s+glitch/, "CSS must include glitch animation");
assert.match(css, /@keyframes\s+pixelRain/, "CSS must include pixel rain animation");
assert.match(css, /scanline|terminal|skyline|neon-sign/i, "CSS must style cyberpunk city surfaces");
assert.doesNotMatch(css, /#F2F8FF|#FAF3E8|#FFD08A/i, "CSS must not reuse soft pastel catalog palettes");

const theme = read("src/theme.js");
assert.match(theme, /colorBgBase:\s*"#050508"/, "Ant Design bg token must use cyberpunk black");
assert.match(theme, /colorBgContainer:\s*"#0D0D18"/, "Ant Design container token must use catalog container");
assert.match(theme, /colorPrimary:\s*"#00F5FF"/, "Ant Design primary token must use neon cyan");
assert.match(theme, /borderRadius:\s*2/, "Ant Design radius must stay sharp");
