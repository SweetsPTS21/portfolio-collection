import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "README.md",
  "index.html",
  "package.json",
  "src/main.jsx",
  "src/App.jsx",
  "src/theme.js",
  "src/data/portfolioData.js",
  "src/data/musicPlaylist.js",
  "src/components/layout/OceanDiaryShell.jsx",
  "src/components/layout/OceanDiaryNav.jsx",
  "src/components/layout/MusicPlayer.jsx",
  "src/components/layout/musicPlayerUtils.js",
  "src/components/pages/AboutPage.jsx",
  "src/components/pages/ProjectsPage.jsx",
  "src/components/pages/ConclusionPage.jsx",
  "src/components/ui/DiaryCard.jsx",
  "src/components/ui/PageTransition.jsx",
  "src/index.css",
];

const requiredSvgAssets = [
  "sunset-sky-panorama.svg",
  "wave-layers-sunset.svg",
  "sun-reflection-ribbon.svg",
  "pink-cloud-clusters.svg",
  "shoreline-sand-scene.svg",
  "seashell-collection.svg",
  "seagull-silhouette.svg",
  "foam-dots-pattern.svg",
  "diary-page-frame.svg",
  "bottle-message.svg",
  "cute-crab.svg",
  "anchor-rope-icons.svg",
];

const animatedOceanSceneAssets = [
  "paper-boat-drift.svg",
  "fish-trail.svg",
  "starfish-foreground.svg",
  "moon-jellyfish.svg",
  "magic-sparkle-cluster.svg",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} must exist`);
}

for (const asset of [...requiredSvgAssets, ...animatedOceanSceneAssets]) {
  const assetPath = join(root, "src/assets/ocean-wave-diary", asset);
  assert.ok(existsSync(assetPath), `${asset} must exist in src/assets/ocean-wave-diary`);
  assert.ok(statSync(assetPath).size > 240, `${asset} must be a real custom SVG asset`);
  assert.match(readFileSync(assetPath, "utf8"), /<svg[\s>]/, `${asset} must contain SVG markup`);
}

const readme = read("README.md");
assert.match(readme, /ocean-wave-diary/, "README must declare the chosen catalog theme");
assert.match(readme, /xanh dương nhạt|xanh duong nhat/i, "README must describe the light blue palette");
assert.match(readme, /hồng|hong/i, "README must describe the pink palette");
assert.match(readme, /vàng|vang/i, "README must describe the gold sunset palette");
assert.match(readme, /3 tab/, "README must require a 3-tab layout");
assert.match(readme, /không phải one-page|khong phai one-page/i, "README must reject one-page layout");

const packageJson = JSON.parse(read("package.json"));
assert.ok(packageJson.dependencies["react-router-dom"], "app must use react-router-dom");
assert.ok(packageJson.dependencies["framer-motion"], "app must use Framer Motion");
assert.ok(packageJson.dependencies.antd, "app must keep Ant Design ConfigProvider support like chau-portfolio");

const app = read("src/App.jsx");
assert.match(app, /BrowserRouter/, "App must use BrowserRouter");
assert.match(app, /Routes/, "App must define route-based pages");
assert.match(app, /path="\/projects"/, "App must include the projects route");
assert.match(app, /path="\/conclusion"/, "App must include the conclusion route");
assert.doesNotMatch(app, /href="#/, "App must not use one-page anchor navigation");

const shell = read("src/components/layout/OceanDiaryShell.jsx");
const nav = read("src/components/layout/OceanDiaryNav.jsx");
const musicPlayer = read("src/components/layout/MusicPlayer.jsx");
const about = read("src/components/pages/AboutPage.jsx");
const projectsPage = read("src/components/pages/ProjectsPage.jsx");
const conclusionPage = read("src/components/pages/ConclusionPage.jsx");
const card = read("src/components/ui/DiaryCard.jsx");
const allSource = [shell, nav, musicPlayer, about, projectsPage, conclusionPage, card].join("\n");

for (const asset of requiredSvgAssets) {
  assert.match(allSource, new RegExp(asset.replace(".", "\\.")), `${asset} must be imported/rendered in UI`);
}

for (const asset of animatedOceanSceneAssets) {
  assert.match(shell, new RegExp(asset.replace(".", "\\.")), `${asset} must be imported/rendered by OceanDiaryShell`);
}

assert.match(nav, /NavLink/, "OceanDiaryNav must navigate with route links");
assert.match(nav, /Giới thiệu/, "Nav must include About tab");
assert.match(nav, /Dự án/, "Nav must include Projects tab");
assert.match(nav, /Tổng kết/, "Nav must include Conclusion tab");
assert.doesNotMatch(nav, /href="#/, "Nav must not use anchor-scroll links");
assert.match(shell, /<MusicPlayer\s*\/>/, "OceanDiaryShell must render the referenced music player");
assert.match(musicPlayer, /<audio[\s\S]*preload="metadata"/, "MusicPlayer must use an audio element with metadata preload");
assert.match(musicPlayer, /musicPlaylist/, "MusicPlayer must read tracks from playlist data");
assert.match(musicPlayer, /formatTrackTime/, "MusicPlayer must format current and total track time");
assert.match(musicPlayer, /getNextTrackIndex/, "MusicPlayer must support next track behavior");
assert.match(musicPlayer, /getPreviousTrackIndex/, "MusicPlayer must support previous track behavior");
assert.match(musicPlayer, /isExpanded/, "MusicPlayer must track popup expanded/collapsed state");
assert.match(musicPlayer, /player-popup-toggle/, "MusicPlayer must expose a compact popup toggle button");
assert.match(musicPlayer, /aria-expanded=\{isExpanded\}/, "MusicPlayer toggle must expose expanded state for accessibility");
assert.match(musicPlayer, /music-player-popup/, "MusicPlayer controls must live inside a popup panel");

const data = read("src/data/portfolioData.js");
assert.match(data, /Đỗ Thị Huyền Trang/, "data must identify Do Thi Huyen Trang");
assert.match(data, /Luật chung/, "data must include the source major");
assert.match(data, /Đại học Luật - Đại học Quốc gia Hà Nội/, "data must include the source university");
assert.match(data, /Microsoft PowerPoint/, "data must include tools from docs/portfolio.md");
assert.match(data, /Google Scholar/, "data must include academic source tools");
assert.match(data, /pháp luật bảo vệ người đi vay/, "data must include the personal direction");
assert.match(data, /Bt1\.pdf/, "data must wire evidence PDF 1");
assert.match(data, /Bt6\.pdf/, "data must wire evidence PDF 6");

assert.match(about, /profile|strengths|tools/i, "About page must render profile, strengths, and tools");
assert.match(projectsPage, /projects\.map/, "Projects page must render project entries from data");
assert.match(conclusionPage, /conclusion/, "Conclusion page must render conclusion data");

const css = read("src/index.css");
const sunsetSky = read("src/assets/ocean-wave-diary/sunset-sky-panorama.svg");
assert.match(sunsetSky, /<circle cx="230" cy="310" r="150" fill="url\(#sun\)"\/>/, "sunset panorama must place the main sun far enough left to avoid centered content");
assert.match(css, /\.ocean-scene::before\s*{[\s\S]*left:\s*16%;/, "CSS sun glow must sit far left of the centered content");
assert.match(css, /\.asset-reflection\s*{[\s\S]*left:\s*16%;/, "sun reflection ribbon must align with the far-left sun");
assert.match(css, /\.asset-bottle\s*{[\s\S]*right:\s*clamp\(0\.7rem,\s*5vw,\s*4rem\);/, "bottle asset must stay on the lower-right shore");
assert.match(css, /\.asset-crab\s*{[\s\S]*left:\s*clamp\(0\.7rem,\s*5vw,\s*4rem\);[\s\S]*bottom:/, "cute crab asset must sit opposite the bottle on the lower-left shore");
assert.match(shell, /asset-boat|asset-fish-trail|asset-starfish|asset-jellyfish|asset-magic-cluster/, "OceanDiaryShell must render livelier ocean scene asset layers");
assert.match(css, /\.asset-boat|\.asset-fish-trail|\.asset-starfish|\.asset-jellyfish|\.asset-magic-cluster/, "CSS must style livelier ocean scene asset layers");
for (const keyframe of [
  "boatDrift",
  "fishSwim",
  "starfishPulse",
  "jellyfishFloat",
  "magicClusterShimmer",
  "bubbleRise",
]) {
  assert.match(css, new RegExp(`@keyframes\\s+${keyframe}`), `CSS must include ${keyframe} animation for the ocean scene`);
}
for (const token of [
  "--sky-blue-soft: #eef9ff",
  "--ocean-blue: #7ccdf2",
  "--wave-blue: #a7e4ff",
  "--sunset-pink: #ffb7c8",
  "--blush-cloud: #ffd7e2",
  "--sun-gold: #ffd978",
  "--sand-warm: #ffebc7",
  "--deep-navy: #18384a",
]) {
  assert.ok(css.toLowerCase().includes(token), `${token} must be present in CSS`);
}
assert.match(css, /@keyframes\s+waveSway/, "CSS must include wave sway animation");
assert.match(css, /@keyframes\s+sunGlow/, "CSS must include sun glow animation");
assert.match(css, /@keyframes\s+cloudDrift/, "CSS must include cloud drift animation");
assert.match(css, /@keyframes\s+sparkleTwinkle/, "CSS must include water sparkle animation");
assert.match(css, /\.player-dock\s*{[\s\S]*position:\s*fixed;[\s\S]*right:\s*clamp\(0\.75rem,\s*3vw,\s*2rem\);[\s\S]*bottom:\s*clamp\(0\.75rem,\s*3vw,\s*2rem\);/, "music player dock must be fixed in the lower-right corner");
assert.match(css, /\.music-player\s*{[\s\S]*ocean-player/, "CSS must style the ocean-themed music player");
assert.match(css, /\.music-player-popup\s*{[\s\S]*position:\s*absolute;/, "music player controls must open as a popup panel");
assert.match(css, /\.music-player\.is-collapsed\s+\.music-player-popup\s*{[\s\S]*opacity:\s*0;/, "collapsed music player must hide the popup panel");
assert.match(css, /\.wave-disc\s*{[\s\S]*animation:\s*vinylSpin/, "CSS must include an animated disc for the player");
assert.match(css, /asset-sky|asset-wave|asset-reflection|asset-clouds|asset-shore|asset-seagull/, "CSS must style rendered ocean scene SVG assets");
assert.ok(css.includes("--deep-ink: #0f2e44"), "CSS must add a darker navy ink token for stronger text contrast");
assert.ok(css.includes("--deep-rose: #b92c67"), "CSS must add a darker rose token for colorful text accents");
assert.match(css, /--text-muted:\s*#315f73/, "muted body text must be darkened for readability");
assert.match(css, /\.magic-gradient-text/, "CSS must include a reusable colorful text treatment");
assert.match(css, /@keyframes\s+magicGradientFlow/, "CSS must animate colorful text to feel magical");
assert.match(css, /\.magic-sparkles/, "CSS must include decorative animated sparkle details");
assert.match(css, /@keyframes\s+magicSparkleFloat/, "CSS must animate sparkle details");
assert.match(css, /\.page-card\s*{[\s\S]*rgba\(255,\s*255,\s*255,\s*0\.68\)[\s\S]*rgba\(238,\s*249,\s*255,\s*0\.52\)/, "page cards must be translucent enough to reveal the animated background");
assert.match(css, /\.page-card\s*{[\s\S]*backdrop-filter:\s*blur\(12px\)/, "page cards must use blur to keep text readable over the visible background");

const theme = read("src/theme.js");
assert.match(theme, /colorBgBase:\s*"#EEF9FF"/, "Ant Design background token must match catalog");
assert.match(theme, /colorPrimary:\s*"#7CCDF2"/, "Ant Design primary token must match catalog");
assert.match(theme, /colorWarning:\s*"#FFD978"/, "Ant Design warning token must use sunset gold");
assert.match(theme, /borderRadius:\s*20/, "Ant Design radius token must match catalog");
