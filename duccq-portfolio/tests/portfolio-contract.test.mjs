import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const { portfolioData } = await import("../src/data/portfolioData.js");
const { routes } = await import("../src/app/routes.js");
const { theme } = await import("../src/app/theme.js");

assert.equal(theme.id, "stadium-ocean-motion");
assert.equal(theme.mode, "light-vivid");
assert.equal(theme.colors.sunlitSky, "#EAF8FF");
assert.equal(theme.colors.inkNavy, "#062043");

const footballAssets = [
  "pitch-strategy-board.svg",
  "ball-net-impact.svg",
  "corner-flag-wave.svg",
  "golden-boot-burst.svg",
  "stadium-crowd-ribbon.svg",
];

for (const asset of footballAssets) {
  assert.ok(
    existsSync(new URL(`../src/assets/stadium-ocean-motion/${asset}`, import.meta.url)),
    `missing football asset: ${asset}`,
  );
}

const backgroundSource = readFileSync(
  new URL("../src/features/stadium-ocean-scene/StadiumOceanBackground.jsx", import.meta.url),
  "utf8",
);
for (const asset of footballAssets) {
  assert.ok(!backgroundSource.includes(asset), `background should not import card asset: ${asset}`);
}

const cardSources = [
  readFileSync(new URL("../src/pages/HomeFieldRoute.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/content/ToolChipGrid.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/motion-cards/ProfileFieldCard.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/motion-cards/MatchTicketCard.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/motion-cards/RecapTimelineCard.jsx", import.meta.url), "utf8"),
].join("\n");
for (const asset of footballAssets) {
  assert.ok(cardSources.includes(asset), `card layer should import football asset: ${asset}`);
}

const homeCardSources = [
  readFileSync(new URL("../src/pages/HomeFieldRoute.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/content/ToolChipGrid.jsx", import.meta.url), "utf8"),
  readFileSync(new URL("../src/features/motion-cards/ProfileFieldCard.jsx", import.meta.url), "utf8"),
].join("\n");
for (const asset of ["scoreboard-ui.svg", "football-trail.svg", "film-music-strip.svg"]) {
  assert.ok(homeCardSources.includes(asset), `home card layer should import decorative asset: ${asset}`);
}

const finalRouteSource = readFileSync(new URL("../src/pages/FinalWhistleRoute.jsx", import.meta.url), "utf8");
assert.ok(!finalRouteSource.includes("Tốc độ phải đứng trên nền tảng tổ chức khoa học."));
assert.ok(!finalRouteSource.includes("Phần tổng kết giữ tinh thần nhanh, dứt khoát và phản biện độc lập"));
assert.ok(finalRouteSource.includes("portfolioData.recapSections"));
assert.ok(finalRouteSource.includes("final-scoreboard"));
assert.ok(finalRouteSource.includes("final-scoreboard-panel"));
assert.ok(finalRouteSource.includes("recap-play-grid"));
assert.ok(finalRouteSource.includes("portfolioData.aiPrinciple"));
assert.ok(!finalRouteSource.includes("recap-rail"));

const matchCardSource = readFileSync(new URL("../src/features/motion-cards/MatchTicketCard.jsx", import.meta.url), "utf8");
assert.ok(matchCardSource.includes("Xem quá trình"));
assert.ok(matchCardSource.includes("project.summary"));
assert.ok(!matchCardSource.includes("project.process"));
assert.ok(!matchCardSource.includes("PdfReplayButton"));

const matchRouteSource = readFileSync(new URL("../src/pages/MatchProjectsRoute.jsx", import.meta.url), "utf8");
assert.ok(matchRouteSource.includes("selectedProject"));
assert.ok(matchRouteSource.includes("project-detail-modal"));
assert.ok(matchRouteSource.includes("PdfReplayButton"));
assert.ok(matchRouteSource.includes("createPortal"));
assert.ok(matchRouteSource.includes("document.body"));

assert.deepEqual(
  routes.map((route) => route.path),
  ["/", "/projects", "/recap"],
);

assert.equal(portfolioData.personal.fullName, "C\u00f9 Quang \u0110\u1ee9c");
assert.equal(portfolioData.personal.studentId, "24061103");
assert.equal(portfolioData.personal.major, "Lu\u1eadt H\u1ecdc");
assert.equal(portfolioData.personal.school, "\u0110\u1ea1i h\u1ecdc Lu\u1eadt - \u0110HQGHN");

assert.equal(portfolioData.projects.length, 6);
assert.ok(portfolioData.projects.every((project) => typeof project.summary === "string" && project.summary.length > 0));
assert.deepEqual(
  portfolioData.projects.map((project) => project.pdfHref),
  ["/bai1.pdf", "/bai2.pdf", "/bai3.pdf", "/bai4.pdf", "/bai5.pdf", "/bai6.pdf"],
);

assert.ok(portfolioData.aiPrinciple.includes("t\u01b0 duy ph\u1ea3n bi\u1ec7n \u0111\u1ed9c l\u1eadp"));
assert.ok(portfolioData.conclusion.includes("b\u01b0\u1edbc ch\u1ea1y \u0111\u00e0 ho\u00e0n h\u1ea3o"));

const sourceText = normalize(readFileSync(new URL("../docs/portfolio.md", import.meta.url), "utf8"));
const dataStrings = collectStrings(portfolioData);

for (const { path, value } of dataStrings) {
  assert.ok(
    sourceText.includes(normalize(value)),
    `${path} is not copied from docs/portfolio.md: ${value}`,
  );
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function collectStrings(value, path = "portfolioData") {
  if (typeof value === "string") {
    return [{ path, value }];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectStrings(item, `${path}[${index}]`));
  }

  if (!value || typeof value !== "object") {
    return [];
  }

  return Object.entries(value).flatMap(([key, child]) => {
    if (key === "pdfHref" || key === "number") {
      return [];
    }
    return collectStrings(child, `${path}.${key}`);
  });
}

console.log("portfolio contract ok");


