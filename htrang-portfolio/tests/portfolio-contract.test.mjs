import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const exists = (path) => existsSync(join(root, path));

assert.ok(exists("src/main.jsx"), "Vite React entry should exist");
assert.ok(exists("src/App.jsx"), "App shell should exist");
assert.ok(exists("src/app/routes.jsx"), "3-page route config should exist");
assert.ok(exists("src/app/AnimatedRoutes.jsx"), "animated routes should be separated");
assert.ok(exists("src/app/theme.js"), "tropical-postcard theme tokens should exist");
assert.ok(exists("src/data/portfolioData.js"), "portfolio content data should exist");
assert.ok(exists("src/components/layout/TropicalPostcardShell.jsx"), "theme shell should exist");
assert.ok(exists("src/features/tropical-scene/TropicalBackground.jsx"), "animated background scene should exist");
assert.ok(exists("src/pages/TropicalHeroPage.jsx"), "home page should exist");
assert.ok(exists("src/pages/PostcardProjectsPage.jsx"), "projects page should exist");
assert.ok(exists("src/pages/PassportAboutPage.jsx"), "passport page should exist");
assert.ok(exists("src/assets/tropical-postcard/palm-leaf-frame.svg"), "palm leaf svg asset should exist");
assert.ok(exists("src/assets/tropical-postcard/postcard-stamp-set.svg"), "stamp svg asset should exist");
assert.ok(exists("public/avatar.jpg"), "avatar should be available as public asset");

for (const image of [
    "hero-travel-girl-cutout.png",
    "blue-postcard-stack-cutout.png",
    "tropical-suitcase-cutout.png",
    "plumeria-flower-cluster-cutout.png",
    "coconut-cocktail-cutout.png",
    "flamingo-float-cutout.png",
]) {
    assert.ok(
        exists(`src/assets/tropical-postcard/generated/${image}`),
        `${image} should exist as generated transparent image asset`,
    );
}

const app = read("src/App.jsx");
const routes = read("src/app/routes.jsx");
const animatedRoutes = read("src/app/AnimatedRoutes.jsx");
assert.match(app, /BrowserRouter/, "App should use BrowserRouter");
assert.match(routes, /path:\s*"\/"/, "home route should be configured");
assert.match(routes, /path:\s*"\/postcards"/, "postcards route should be configured");
assert.match(routes, /path:\s*"\/passport"/, "passport route should be configured");
assert.match(animatedRoutes, /AnimatePresence/, "route transitions should use Framer Motion");

const data = read("src/data/portfolioData.js");
assert.match(data, /Đỗ Huyền Trang/, "portfolio should identify Huyen Trang");
assert.match(data, /Luật Kinh Doanh/, "portfolio should include major");
assert.match(data, /Google Scholar/, "portfolio should include research tools");
assert.match(data, /liêm chính học thuật/i, "portfolio should include academic integrity");
assert.match(data, /Chương 6/, "project data should include chapter 6");

const theme = read("src/app/theme.js");
assert.match(theme, /tropical-postcard/, "theme id should be tropical-postcard");
assert.match(theme, /#3FA9F5/i, "primary color should be blue");
assert.doesNotMatch(theme, /colorPrimary:\s*["']#FF85A8/i, "pink should not be primary");

const css = read("src/index.css");
const heroPage = read("src/pages/TropicalHeroPage.jsx");
const projectsPage = read("src/pages/PostcardProjectsPage.jsx");
const passportPage = read("src/pages/PassportAboutPage.jsx");
for (const animation of [
    "leaf-sway",
    "cloud-drift",
    "plane-fly",
    "wave-shimmer",
    "stamp-pop",
    "postcard-float",
]) {
    assert.match(css, new RegExp(`@keyframes\\s+${animation}`), `${animation} animation should exist`);
}
assert.match(css, /prefers-reduced-motion/, "reduced motion should be handled");
assert.match(css, /\.tropical-background/, "background component should be styled");
assert.match(heroPage, /heroTravelGirl/, "hero should use generated travel girl cutout");
assert.match(heroPage, /tropicalSuitcase/, "home should use generated suitcase cutout");
assert.match(heroPage, /className="profile-copy"/, "profile postcard should wrap text in profile-copy");
assert.match(heroPage, /className="tools-copy"/, "tools panel should wrap text in tools-copy");
assert.match(heroPage, /className="values-copy"/, "values panel should wrap text in values-copy");
assert.match(css, /\.profile-postcard\s*{[\s\S]*grid-template-areas:\s*"copy avatar"/, "profile postcard should use balanced copy/avatar areas");
assert.match(css, /\.profile-copy\s*{[\s\S]*grid-area:\s*copy/, "profile copy should occupy named copy area");
assert.match(css, /\.profile-postcard\s*{[\s\S]*transform:\s*none/, "profile postcard should not be rotated off-balance");
assert.match(css, /\.profile-postcard\s*{[\s\S]*animation:\s*profile-postcard-float/, "profile postcard should use non-rotating float animation");
assert.match(css, /@keyframes\s+profile-postcard-float/, "profile postcard should define non-rotating float keyframes");
assert.match(css, /\.hero-girl-cutout\s*{[\s\S]*width:\s*min\(30%, 150px\)/, "generated hero cutout should stay decorative and not dominate card");
assert.match(css, /\.tools-panel,\s*\n\.values-panel\s*{[\s\S]*grid-template-areas:\s*"media copy"/, "tools and values panels should use balanced media/copy areas");
assert.match(css, /\.tools-copy,\s*\n\.values-copy\s*{[\s\S]*grid-area:\s*copy/, "tools and values copy should occupy named copy area");
assert.match(css, /\.panel-media,\s*\n\.luggage-stack\s*{[\s\S]*grid-area:\s*media/, "tools and values art should occupy named media area");
assert.match(css, /\.suitcase-cutout\s*{[\s\S]*animation:\s*panel-art-float/, "suitcase should use non-rotating panel art animation");
assert.match(css, /@keyframes\s+panel-art-float/, "panel art float should not rotate the panel art");
assert.match(projectsPage, /postcardStack/, "projects should use generated postcard stack cutout");
assert.match(projectsPage, /flowerCluster/, "projects should use generated flower cluster cutout");
assert.match(passportPage, /coconutCocktail/, "passport should use generated coconut cocktail cutout");
assert.match(passportPage, /flamingoFloat/, "passport should use generated flamingo float cutout");

const assetDir = join(root, "src/assets/tropical-postcard");
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith(".svg"));
assert.ok(svgAssets.length >= 6, "theme should include at least six SVG assets");

const jsxFiles = [
    "src/App.jsx",
    "src/main.jsx",
    "src/app/AnimatedRoutes.jsx",
    "src/app/routes.jsx",
    "src/components/layout/TropicalPostcardShell.jsx",
    "src/features/tropical-scene/TropicalBackground.jsx",
    "src/pages/TropicalHeroPage.jsx",
    "src/pages/PostcardProjectsPage.jsx",
    "src/pages/PassportAboutPage.jsx",
];

for (const file of jsxFiles) {
    assert.match(read(file), /import React from ["']react["'];/, `${file} should import React explicitly`);
}
