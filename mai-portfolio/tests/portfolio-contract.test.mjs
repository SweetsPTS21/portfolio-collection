import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const dataPath = resolve(root, "src", "data", "portfolioData.js");
assert.ok(existsSync(dataPath), "src/data/portfolioData.js must exist");
const assetDir = resolve(root, "src", "assets", "summer-sea-case");

const dataSource = readFileSync(dataPath, "utf8").replace(
  /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/docs\/(Bt\d\.pdf)['"];?/g,
  'const $1 = "/docs/$2";'
).replace(
  /import\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/docs\/avatar\.png['"];?/g,
  'const $1 = "/docs/avatar.png";'
);
const data = await import(
  `data:text/javascript;charset=utf-8,${encodeURIComponent(dataSource)}`
);

assert.equal(data.personalInfo.name, "Nguyễn Thị Xuân Mai");
assert.equal(data.personalInfo.major, "Ngành luật");
assert.equal(data.personalInfo.university, "Trường Đại học Luật - ĐHQG HN");
assert.equal(data.personalInfo.style, "Đơn giản - Thanh lịch - Hiện đại");
assert.equal(data.personalInfo.avatarUrl, "/docs/avatar.png");
assert.ok(
  existsSync(resolve(root, "docs", "avatar.png")),
  "Expected source avatar.png to exist"
);
assert.equal(
  data.hero.quote,
  "Luật pháp là lăng kính. Công nghệ là đòn bẩy. Tư duy nguyên bản là điểm tựa."
);

assert.equal(data.learningGoals.items.length, 3);
assert.equal(data.portfolioGoals.items.length, 3);

assert.equal(data.projects.items.length, 6);
data.projects.items.forEach((project, index) => {
  const pdfName = `Bt${index + 1}.pdf`;
  assert.equal(project.pdfName, pdfName);
  assert.ok(
    existsSync(resolve(root, "docs", pdfName)),
    `Expected source PDF ${pdfName} to exist`
  );
});

assert.ok(
  data.projects.items.some((project) =>
    project.title.includes("Sáng tạo nội dung số")
  )
);
assert.ok(
  data.projects.items.some((project) =>
    project.title.includes("An toàn và Liêm chính học thuật")
  )
);

assert.equal(data.conclusion.coreSkills.length, 3);
assert.equal(data.conclusion.futureItems.length, 3);
assert.ok(data.conclusion.proudest.text.includes("Liêm chính học thuật"));
assert.ok(data.conclusion.challenge.text.includes("AI đồng hóa"));

const heroSection = readFileSync(
  resolve(root, "src", "components", "sections", "HeroSection.jsx"),
  "utf8"
);
assert.match(heroSection, /<img[\s>]/, "Hero section must render the docs avatar");
assert.match(
  heroSection,
  /personalInfo\.avatarUrl/,
  "Hero section must use personalInfo.avatarUrl"
);
assert.match(
  heroSection,
  /SeaCaseHero/,
  "Hero section must keep the sea-case asset as decoration"
);
assert.match(
  heroSection,
  /hero-background-assets/,
  "Hero decorative assets must live in a background layer around the section"
);
assert.doesNotMatch(
  heroSection,
  /className="hero-visual"[\s\S]*?<SeaCaseHero \/>/,
  "Sea-case assets should not sit inside the avatar visual stack"
);

const aboutSection = readFileSync(
  resolve(root, "src", "components", "sections", "AboutSection.jsx"),
  "utf8"
);
assert.doesNotMatch(
  aboutSection,
  /<img[\s>]/,
  "About section should not duplicate the hero avatar"
);

const requiredSummerAssets = [
  "palm-island.svg",
  "summer-sun.svg",
  "crab.svg",
  "sand-dune.svg",
  "starfish.svg",
  "wave-ribbon.svg",
];

for (const asset of requiredSummerAssets) {
  const assetPath = resolve(assetDir, asset);
  assert.ok(existsSync(assetPath), `${asset} must exist in summer-sea-case assets`);
  assert.match(readFileSync(assetPath, "utf8"), /<svg[\s>]/, `${asset} must be SVG`);
}

const globalBackground = readFileSync(
  resolve(root, "src", "components", "sea", "GlobalSummerBackground.jsx"),
  "utf8"
);
assert.match(
  globalBackground,
  /placement/,
  "GlobalSummerBackground must assign explicit placement classes for each asset"
);
assert.doesNotMatch(
  globalBackground,
  /\["[^"]+\s[^"]+",/,
  "Global background asset type names must not contain spaces"
);
for (const assetName of [
  "palmIsland",
  "summerSun",
  "crab",
  "sandDune",
  "starfish",
  "waveRibbon",
]) {
  assert.match(
    globalBackground,
    new RegExp(assetName),
    `GlobalSummerBackground must include ${assetName}`
  );
}

const appSource = readFileSync(resolve(root, "src", "App.jsx"), "utf8");
assert.match(
  appSource,
  /GlobalSummerBackground/,
  "App must mount one global summer background"
);
assert.doesNotMatch(
  appSource,
  /WaveLayer/,
  "App must not use a fixed wave layer that visually splits pages"
);

for (const sectionName of [
  "AboutSection.jsx",
  "ProjectsSection.jsx",
  "ConclusionSection.jsx",
]) {
  const sectionSource = readFileSync(
    resolve(root, "src", "components", "sections", sectionName),
    "utf8"
  );
  assert.doesNotMatch(
    sectionSource,
    /SectionBackground/,
    `${sectionName} must not own separate section background layers`
  );
}

console.log("portfolio contract ok");
