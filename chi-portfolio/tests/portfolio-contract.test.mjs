import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dataPath = join(root, "src", "data", "portfolioData.js");
const assetsDir = join(root, "src", "assets", "fashion-editorial");
const cssPath = join(root, "src", "index.css");
const themePath = join(root, "src", "theme.js");
const projectsSectionPath = join(
  root,
  "src",
  "components",
  "sections",
  "ProjectsSection.jsx"
);

assert.ok(existsSync(dataPath), "portfolioData.js must exist");

const data = await import(pathToFileURL(dataPath));

assert.equal(data.personalInfo.name, "Vũ Huyền Chi");
assert.equal(data.personalInfo.major, "Luật Kinh Doanh");
assert.equal(data.projects.length, 6, "portfolio must render 6 assignment projects");
for (const [index, project] of data.projects.entries()) {
  assert.equal(
    project.file,
    `/docs/bt${index + 1}.pdf`,
    `${project.title} must link to the matching assignment PDF`
  );
  assert.ok(
    existsSync(join(root, project.file.slice(1))),
    `${project.file} must exist in docs`
  );
}
assert.ok(
  data.about.lead.includes("bản đồ năng lực số"),
  "about lead must be sourced from docs/portfolio.md"
);

const requiredAssets = [
  "fashion-figure.svg",
  "magazine-spread-lines.svg",
  "fashion-outline-icons.svg",
  "editorial-blob-shapes.svg",
  "runway-silhouettes.svg",
  "grain-pattern.svg",
];

for (const asset of requiredAssets) {
  const assetPath = join(assetsDir, asset);
  assert.ok(existsSync(assetPath), `${asset} must exist`);
  const svg = readFileSync(assetPath, "utf8");
  assert.match(svg, /<svg[\s>]/, `${asset} must be an SVG file`);
}

const css = readFileSync(cssPath, "utf8");
const theme = readFileSync(themePath, "utf8");
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

assert.ok(
  css.includes("Be Vietnam Pro"),
  "body font must support Vietnamese accents"
);
assert.ok(
  css.includes("Noto Serif Display"),
  "display font must support Vietnamese accents"
);
assert.ok(
  theme.includes("Be Vietnam Pro"),
  "Ant Design theme must use the Vietnamese-safe body font"
);
assert.equal(
  /Outfit|Cormorant Garamond/.test(`${css}\n${theme}`),
  false,
  "fonts with broken Vietnamese rendering must not be used"
);
