import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const exists = (path) => existsSync(join(root, path));

// 1. Verify existence of required project files
for (const path of [
  "package.json",
  "index.html",
  "vite.config.js",
  "src/main.jsx",
  "src/App.jsx",
  "src/app/routes.js",
  "src/app/theme.js",
  "src/app/lenisSetup.js",
  "src/data/portfolioData.js",
  "src/components/layout/CourtroomShell.jsx",
  "src/features/legal-brief-scene/CourtroomBackground.jsx",
  "src/pages/CourtroomBriefHeroPage.jsx",
  "src/pages/CaseFileProjectsPage.jsx",
  "src/pages/SignSealConclusionPage.jsx",
]) {
  assert.ok(exists(path), `${path} should exist`);
}

// 2. Verify dependencies in package.json
const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.dependencies.react, "^18.3.1", "React 18 should be used");
assert.ok(pkg.dependencies["framer-motion"], "framer-motion should be installed");
assert.ok(pkg.dependencies["lucide-react"], "lucide-react should be installed");
assert.ok(pkg.dependencies.lenis, "lenis should be installed");
assert.ok(pkg.dependencies["react-router-dom"], "react-router-dom should be installed");
assert.ok(pkg.dependencies["vite"], "Vite should be configured");

// 3. Verify Theme Configuration
const theme = read("src/app/theme.js");
assert.match(theme, /azure-courtroom-brief/, "theme id should match catalog-7");
assert.match(theme, /#EDF8FF/, "azure base catalog color should be present");
assert.match(theme, /#1E78C8/, "legal blue catalog color should be present");
assert.match(theme, /#12304A/, "ink navy catalog color should be present");

// 4. Verify Route configuration
const routes = read("src/app/routes.js");
assert.equal((routes.match(/path:/g) || []).length, 3, "exactly three routes should be configured");
assert.match(routes, /\/about/, "about route should be configured");
assert.match(routes, /\/projects/, "projects route should be configured");
assert.match(routes, /\/conclution/, "conclution route should be configured with requested spelling");

// 5. Verify Personal Info inside data store
const data = read("src/data/portfolioData.js");
for (const phrase of [
  "Nguyễn Việt Hùng",
  "24061166",
  "Luật",
  "Đại học Luật - ĐHQG Hà Nội",
  "Nhóm 13",
  "phản biện độc lập",
  "azure-courtroom-brief",
  "bt1.pdf",
  "bt6.pdf",
]) {
  assert.match(data, new RegExp(phrase), `data should contain ${phrase}`);
}

// 6. Verify SVG asset directory and files
const assetDir = join(root, "src/assets/azure-courtroom-brief");
assert.ok(exists("src/assets/azure-courtroom-brief"), "azure courtroom asset folder should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 8, "theme should include at least eight SVG assets");
for (const asset of [
  "legal-brief-stack.svg",
  "balance-scale-blue.svg",
  "courtroom-seal-set.svg",
  "citation-tab-labels.svg",
  "evidence-card-frames.svg",
  "legal-tool-icons.svg",
  "signature-underline.svg",
  "paper-motion-particles.svg",
]) {
  assert.ok(exists(`src/assets/azure-courtroom-brief/${asset}`), `${asset} should exist`);
}

// 7. Verify styles.css variables and animations
const css = read("src/styles.css");
for (const token of [
  "brief-azure",
  "legal-blue",
  "ink-navy",
  "balance-sway",
  "paper-float",
  "particles-drift",
  "prefers-reduced-motion",
]) {
  assert.match(css, new RegExp(token), `CSS should include ${token}`);
}

// 8. Verify Framer Motion imports in pages
for (const page of [
  "src/pages/CourtroomBriefHeroPage.jsx",
  "src/pages/CaseFileProjectsPage.jsx",
  "src/pages/SignSealConclusionPage.jsx",
]) {
  assert.match(read(page), /framer-motion/, `${page} should use Framer Motion`);
}

// 9. Verify background motion does not fight over the same transform axis.
const background = read("src/features/legal-brief-scene/CourtroomBackground.jsx");
const hasConflictingParallaxAndIdleY = /style=\{\{[\s\S]*?y: (?:assetL1Y|assetL2Y|scaleParallaxY)[\s\S]*?\}\}\s*animate=\{\{[\s\S]*?y:/m.test(background);
assert.equal(
  hasConflictingParallaxAndIdleY,
  false,
  "background parallax and idle y animation should be split across nested elements"
);
assert.match(
  background,
  /requestAnimationFrame/,
  "background pointer parallax should be throttled with requestAnimationFrame"
);
assert.match(
  background,
  /cancelAnimationFrame/,
  "background pointer parallax should clean up pending animation frames"
);

// 10. Verify background assets stay visible without adding expensive shadows.
assert.match(
  css,
  /\.particles-layer\s*\{[\s\S]*?opacity:\s*0\.78;/,
  "background layer should be prominent enough to reveal legal assets"
);
assert.match(
  css,
  /\.legal-bg-float\s*\{[\s\S]*?filter:\s*saturate\(1\.12\) contrast\(1\.08\);/,
  "background assets should use lightweight contrast instead of drop shadows"
);
for (const expectedOpacity of ["0.5", "0.4", "0.42", "0.46", "0.52", "0.56"]) {
  assert.match(
    background,
    new RegExp(`opacity:\\s*${expectedOpacity}`),
    `background should include asset opacity ${expectedOpacity}`
  );
}

console.log("✓ All contract test checks passed successfully for hungnv-portfolio!");
