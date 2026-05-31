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
  "src/main.jsx",
  "src/App.jsx",
  "src/app/routes.js",
  "src/app/theme.js",
  "src/app/lenisSetup.js",
  "src/data/portfolioData.js",
  "src/components/layout/SunlitOceanShell.jsx",
  "src/components/music/OceanMusicPlayer.jsx",
  "src/features/sunlit-ocean-scene/SunlitOceanBackground.jsx",
  "src/pages/SunCovePage.jsx",
  "src/pages/OceanLogsPage.jsx",
  "src/pages/ShellMailPage.jsx",
  "public/music/playlist.json",
]) {
  assert.ok(exists(path), `${path} should exist`);
}

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.dependencies.react, "^18.3.1", "React 18 should be used");
assert.ok(pkg.dependencies["framer-motion"], "framer-motion should be installed");
assert.ok(pkg.dependencies["lucide-react"], "lucide-react should be installed");
assert.ok(pkg.dependencies.lenis, "lenis should be installed");
assert.ok(pkg.devDependencies.vite, "Vite should be configured");

const theme = read("src/app/theme.js");
assert.match(theme, /sunlit-ocean-life/, "theme id should be refactored to sunlit ocean life");
assert.match(theme, /#E9FAFF/, "bright sky blue should be present");
assert.match(theme, /#08A8F8/, "vibrant ocean blue should be present");
assert.match(theme, /Crimson Pro/, "theme should use Crimson Pro globally");

const routes = read("src/app/routes.js");
assert.equal((routes.match(/path:/g) || []).length, 3, "exactly three routes should be configured");
assert.match(routes, /SunCovePage/, "route 1 should render hero/about page");
assert.match(routes, /OceanLogsPage/, "route 2 should render projects page");
assert.match(routes, /ShellMailPage/, "route 3 should render conclusion page");

const data = read("src/data/portfolioData.js");
for (const phrase of [
  "Nguyễn Đỗ Bảo Trân",
  "Luật học",
  "Đại học Luật - ĐHQGHN",
  "Nhóm 36",
  "phản biện độc lập",
  "sunlit-ocean-life",
]) {
  assert.match(data, new RegExp(phrase), `data should contain ${phrase}`);
}

const jsxContent = [
  "src/components/layout/SunlitOceanShell.jsx",
  "src/components/music/OceanMusicPlayer.jsx",
  "src/pages/SunCovePage.jsx",
  "src/pages/OceanLogsPage.jsx",
  "src/pages/ShellMailPage.jsx",
].map(read).join("\n");

for (const phrase of [
  "Open ocean logs",
  "Send shell mail",
  "Ocean identity",
  "Sun cove brief",
  "Ocean Log Archive",
  "Shell Mail",
  "Ocean playlist",
  "chuyến trôi trên mặt biển",
  "Lời nhắn gửi theo sóng",
]) {
  assert.doesNotMatch(jsxContent, new RegExp(phrase), `JSX should not invent copy: ${phrase}`);
}

for (const phrase of [
  "Hồ sơ cá nhân",
  "Thông tin sinh viên",
  "Mục tiêu và nguyên tắc",
  "Bài tập thực hành",
  "Playlist nhạc",
  "Lời cảm ơn",
]) {
  assert.match(jsxContent, new RegExp(phrase), `JSX should use portfolio-aligned copy: ${phrase}`);
}

const assetDir = join(root, "src/assets/sunlit-ocean-life");
assert.ok(exists("src/assets/sunlit-ocean-life"), "sunlit ocean asset folder should exist");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 8, "theme should include at least eight SVG assets");
for (const asset of [
  "sunlit-ocean-scene.svg",
  "cute-fish-school.svg",
  "seaweed-coral-garden.svg",
  "sailing-boat.svg",
  "bubble-sparkles.svg",
  "shell-stickers.svg",
  "wave-ribbons.svg",
  "sun-badge.svg",
]) {
  assert.ok(exists(`src/assets/sunlit-ocean-life/${asset}`), `${asset} should exist`);
}

const css = read("src/styles.css");
for (const token of [
  "sunlit-stage",
  "ocean-music-player",
  "width: min\\(360px",
  "music-player-toggle",
  "music-player-toggle.playing",
  "music-player-spin",
  "music-volume-control",
  "music-volume-slider",
  "music-seek-control",
  "music-seek-slider",
  "music-player-main",
  "music-player-info",
  "music-vinyl-disc",
  "width: 88px",
  "music-vinyl-label",
  "music-vinyl-disc.playing",
  "music-vinyl-spin",
  "music-playlist",
  "fish-swim",
  "bubble-rise",
  "seaweed-sway",
  "sun-sparkle",
  "wave-dance",
  "Crimson Pro",
  "prefers-reduced-motion",
]) {
  assert.match(css, new RegExp(token), `CSS should include ${token}`);
}

const bg = read("src/features/sunlit-ocean-scene/SunlitOceanBackground.jsx");
assert.match(bg, /sunlitOceanScene/, "background should use large sunlit ocean SVG");
assert.match(bg, /cuteFishSchool/, "background should use cute fish SVG");
assert.match(bg, /seaweedCoralGarden/, "background should use seaweed/coral SVG");
assert.doesNotMatch(bg, /deep-sea-research-log/, "background should not import old deep-sea assets");

const shell = read("src/components/layout/SunlitOceanShell.jsx");
assert.match(shell, /OceanMusicPlayer/, "shell should render the floating music player");

const player = read("src/components/music/OceanMusicPlayer.jsx");
for (const token of [
  "playlist.json",
  "new Audio",
  "music-player-toggle",
  "playing",
  "setVolume",
  "audio.volume",
  "setCurrentTime",
  "setDuration",
  "audio.currentTime",
  "type=\"range\"",
  "track.artist",
  "music-track-artist",
  "music-player-main",
  "music-player-info",
  "music-vinyl-disc",
  "music-vinyl-label",
  "Đang phát",
  "setIsExpanded",
  "skipTrack",
  "togglePlayback",
]) {
  assert.match(player, new RegExp(token), `music player should include ${token}`);
}

const playlist = JSON.parse(read("public/music/playlist.json"));
assert.ok(Array.isArray(playlist.tracks), "playlist should expose tracks array");
assert.ok(playlist.tracks.length >= 2, "playlist should include at least two tracks");
for (const track of playlist.tracks) {
  assert.match(track.src, /^\/music\/.*\.mp3$/, "track src should point to public/music mp3");
  assert.ok(track.title, "track title should be present");
  assert.ok(track.artist, "track artist should be present");
}

for (const page of [
  "src/pages/SunCovePage.jsx",
  "src/pages/OceanLogsPage.jsx",
  "src/pages/ShellMailPage.jsx",
]) {
  assert.match(read(page), /framer-motion/, `${page} should use Framer Motion`);
  assert.match(read(page), /lucide-react/, `${page} should use lucide-react icons`);
}
