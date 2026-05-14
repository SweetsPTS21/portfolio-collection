import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dataPath = join(root, "src", "data", "portfolioData.js");
const assetsDir = join(root, "src", "assets", "kawaii-stationery");
const cssPath = join(root, "src", "index.css");
const themePath = join(root, "src", "theme.js");
const readmePath = join(root, "README.md");
const projectsSectionPath = join(
  root,
  "src",
  "components",
  "sections",
  "ProjectsSection.jsx"
);

assert.ok(existsSync(dataPath), "portfolioData.js must exist");
assert.ok(existsSync(readmePath), "sub-project README.md must exist");

const dataSource = readFileSync(dataPath, "utf8").replace(
  /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/docs\/(bt\d\.pdf)['"];?/g,
  'const $1 = "/docs/$2";'
).replace(
  /import\s+avatar\s+from\s+['"]\.\.\/\.\.\/docs\/avatar\.png['"];?/,
  'const avatar = "/docs/avatar.png";'
);
const data = await import(
  `data:text/javascript;charset=utf-8,${encodeURIComponent(dataSource)}`
);

assert.equal(data.personalInfo.name, "Dương Thị Thủy Phúc");
assert.equal(data.personalInfo.major, "Luật học");
assert.equal(data.personalInfo.university, "Đại học Luật - ĐHQGHN");
assert.equal(data.personalInfo.style, "đơn giản - ngắn gọn - trọng tâm");
assert.ok(
  data.about.philosophy.includes("Luật pháp là khuôn mẫu"),
  "about philosophy must be sourced from docs/portfolio.md"
);
assert.equal(data.projects.length, 6, "portfolio must render 6 assignment projects");
for (const [index, project] of data.projects.entries()) {
  const expectedFile = `bt${index + 1}.pdf`;
  assert.match(project.file, /\.pdf$/, `${project.title} must link to a PDF`);
  assert.ok(
    existsSync(join(root, "docs", expectedFile)),
    `${expectedFile} must exist in docs`
  );
}
assert.ok(
  data.conclusion.aiExample.includes("ảo giác AI"),
  "AI hallucination example must be represented in conclusion data"
);
assert.ok(
  data.futureDirections.includes("Tinh gọn nội dung nhưng tăng chiều sâu"),
  "future direction must be sourced from docs/portfolio.md"
);

const requiredAssets = [
  "sticker-sheet.svg",
  "notebook-grid.svg",
  "washi-tape-set.svg",
  "gel-pen-doodles.svg",
  "school-supply-icons.svg",
  "cute-stamp-postcard.svg",
  "sticky-note-shapes.svg",
];

for (const asset of requiredAssets) {
  const assetPath = join(assetsDir, asset);
  assert.ok(existsSync(assetPath), `${asset} must exist`);
  const svg = readFileSync(assetPath, "utf8");
  assert.match(svg, /<svg[\s>]/, `${asset} must be an SVG file`);
}

const css = readFileSync(cssPath, "utf8");
const theme = readFileSync(themePath, "utf8");
const readme = readFileSync(readmePath, "utf8");
const projectsSection = readFileSync(projectsSectionPath, "utf8");

assert.match(
  projectsSection,
  /<Modal[\s>]/,
  "ProjectsSection must open assignment PDFs in a modal"
);
assert.match(
  projectsSection,
  /<iframe[\s>]/,
  "ProjectsSection modal must render the assignment PDF in an iframe"
);
assert.match(
  projectsSection,
  />\s*Xem\s*</,
  'each assignment card must include a "Xem" button'
);

assert.ok(readme.includes("kawaii-stationery"), "README must declare the chosen UI style");
assert.ok(readme.includes("Framer Motion"), "README must document Framer Motion usage");
assert.ok(readme.includes("Rive"), "README must document Rive-ready pipeline");
assert.ok(readme.includes("SVGator"), "README must document SVGator asset pipeline");
assert.ok(readme.includes("Lenis"), "README must document Lenis usage");
assert.ok(readme.includes("Realtime Colors"), "README must document Realtime Colors palette workflow");
assert.ok(readme.includes("Blush"), "README must document Blush illustration workflow");
assert.ok(css.includes("M PLUS Rounded 1c"), "display font must match kawaii-stationery");
assert.ok(css.includes("Nunito"), "body font must match kawaii-stationery");
assert.ok(theme.includes("M PLUS Rounded 1c"), "Ant Design theme must use the display font");
assert.equal(
  /Outfit|Cormorant Garamond/.test(`${css}\n${theme}`),
  false,
  "fonts with weaker Vietnamese rendering must not be used"
);
