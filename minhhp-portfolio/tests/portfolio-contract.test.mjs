import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const exists = (path) => existsSync(join(root, path));

for (const path of [
  "package.json",
  "index.html",
  "vite.config.js",
  "README.md",
  "src/main.jsx",
  "src/App.jsx",
  "src/styles.css",
  "src/app/routes.js",
  "src/app/theme.js",
  "src/app/lenisSetup.js",
  "src/data/portfolioData.js",
  "src/components/layout/RainNotebookShell.jsx",
  "src/components/ui/NotebookCard.jsx",
  "src/components/ui/InkButton.jsx",
  "src/components/ui/MarginNote.jsx",
  "src/components/ui/IndexTab.jsx",
  "src/features/rain-notebook-scene/RainNotebookBackground.jsx",
  "src/features/writing-object/WritingObject.jsx",
  "src/features/notebook-entries/NotebookEntryList.jsx",
  "src/pages/RainNotebookHeroPage.jsx",
  "src/pages/NotebookEntriesProjectsPage.jsx",
  "src/pages/SignatureContactPage.jsx"
]) {
  assert.ok(exists(path), `${path} should exist`);
}

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.dependencies.react, "^18.3.1", "React 18 should be used");
assert.equal(pkg.dependencies["@vitejs/plugin-react"], "latest", "latest Vite React plugin should be used");
assert.equal(pkg.devDependencies.vite, "latest", "latest Vite should be used");
assert.ok(pkg.dependencies["framer-motion"], "framer-motion should be installed");
assert.ok(pkg.dependencies["lucide-react"], "lucide-react should be installed");
assert.ok(pkg.dependencies.lenis, "lenis should be installed");

const theme = read("src/app/theme.js");
for (const token of ["blue-rain-notebook", "#EAF5FF", "#2D8BD8", "#F8B9D4", "Nunito Sans", "Lora"]) {
  assert.match(theme, new RegExp(token), `theme should contain ${token}`);
}

const routes = read("src/app/routes.js");
assert.equal((routes.match(/path:/g) || []).length, 3, "exactly three routes should be configured");
for (const routeToken of ["RainNotebookHeroPage", "NotebookEntriesProjectsPage", "SignatureContactPage"]) {
  assert.match(routes, new RegExp(routeToken), `routes should include ${routeToken}`);
}
for (const routeLabel of ["Giới thiệu", "Dự án", "Tổng kết"]) {
  assert.match(routes, new RegExp(routeLabel), `routes should use academic Vietnamese label ${routeLabel}`);
}

const data = read("src/data/portfolioData.js");
for (const phrase of [
  "Hoàng Phương Minh",
  "Luật học",
  "Trường đại học Luật - ĐHQGHN",
  "Nhóm 20",
  "phản biện độc lập",
  "blue-rain-notebook"
]) {
  assert.match(data, new RegExp(phrase), `data should contain ${phrase}`);
}

const assetDir = join(root, "src/assets/blue-rain-notebook");
assert.ok(exists("src/assets/blue-rain-notebook"), "blue rain notebook asset folder should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 8, "theme should include at least eight SVG assets");
for (const asset of [
  "rain-window-blue.svg",
  "notebook-spread-frame.svg",
  "blue-pen-set.svg",
  "index-tabs-labels.svg",
  "notebook-entry-cards.svg",
  "rain-ink-icons.svg",
  "paper-float-particles.svg",
  "signature-check.svg"
]) {
  assert.ok(exists(`src/assets/blue-rain-notebook/${asset}`), `${asset} should exist`);
}

const css = read("src/styles.css");
for (const token of [
  "rain-notebook-stage",
  "rain-slide",
  "paper-float",
  "ink-glow",
  "page-turn",
  "sparkle-twinkle",
  "pastel",
  "prefers-reduced-motion"
]) {
  assert.match(css, new RegExp(token), `CSS should include ${token}`);
}

const bg = read("src/features/rain-notebook-scene/RainNotebookBackground.jsx");
for (const token of ["rainWindowBlue", "notebookSpreadFrame", "paperFloatParticles", "bluePenSet"]) {
  assert.match(bg, new RegExp(token), `background should use ${token}`);
}

for (const page of [
  "src/pages/RainNotebookHeroPage.jsx",
  "src/pages/NotebookEntriesProjectsPage.jsx",
  "src/pages/SignatureContactPage.jsx"
]) {
  assert.match(read(page), /framer-motion/, `${page} should use Framer Motion`);
  assert.match(read(page), /lucide-react/, `${page} should use lucide-react icons`);
}

const jsxCopy = [
  "src/pages/RainNotebookHeroPage.jsx",
  "src/pages/NotebookEntriesProjectsPage.jsx",
  "src/pages/SignatureContactPage.jsx",
  "src/components/layout/RainNotebookShell.jsx",
  "src/features/notebook-entries/NotebookEntryList.jsx"
].map(read).join("\n");

const displayCopy = `${jsxCopy}\n${data}`;

for (const bannedPhrase of [
  "mực xanh",
  "xinh xắn",
  "Signature CTA",
  "Blue ink mark",
  "Paper tabs",
  "Notebook entries",
  "6 entry",
  "storage, research, prompt",
  "Khép sổ",
  "dưới trời mưa"
]) {
  assert.doesNotMatch(jsxCopy, new RegExp(bannedPhrase), `JSX should not display invented decorative phrase: ${bannedPhrase}`);
}

for (const requiredPhrase of [
  "Trang Giới thiệu",
  "Trang Dự án",
  "Trang Tổng kết",
  "Thông tin cá nhân",
  "Các công cụ đã sử dụng",
  "Những thách thức đã đối mặt"
]) {
  assert.match(displayCopy, new RegExp(requiredPhrase), `display copy should include source-aligned phrase: ${requiredPhrase}`);
}

const readme = read("README.md");
assert.match(readme, /blue-rain-notebook/, "README should mention theme id");
