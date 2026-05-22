import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "README.md",
  "src/App.jsx",
  "src/main.jsx",
  "src/app/App.jsx",
  "src/app/routes.js",
  "src/app/theme.js",
  "src/app/motionConfig.js",
  "src/app/riveSetup.js",
  "src/app/lenisSetup.js",
  "src/data/portfolioData.js",
  "src/pages/SakuraDeskHeroPage.jsx",
  "src/pages/LetterProjectsPage.jsx",
  "src/pages/InkPaletteSkillsPage.jsx",
  "src/pages/LetterMailboxContactPage.jsx",
  "src/features/sakura-scene/SakuraBranch.jsx",
  "src/features/sakura-scene/PetalFallLayer.jsx",
  "src/features/sakura-scene/InkSplashAccent.jsx",
  "src/features/sakura-scene/SparrowBird.jsx",
  "src/features/letter-desk/EnvelopeCard.jsx",
  "src/features/letter-desk/LetterReveal.jsx",
  "src/features/letter-desk/WashiSealStamp.jsx",
  "src/features/letter-desk/PostcardProjectCard.jsx",
  "src/features/ink-palette/InkPaletteGrid.jsx",
  "src/features/ink-palette/InkColorBadge.jsx",
  "src/features/ink-palette/BrushStrokeDraw.jsx",
  "src/components/layout/PaperNav.jsx",
  "src/components/layout/PaperPageShell.jsx",
  "src/components/layout/FoldPageTransition.jsx",
  "src/components/ui/SealButton.jsx",
  "src/components/ui/EnvelopeCard.jsx",
  "src/components/ui/InkBadge.jsx",
  "src/components/ui/PetalTag.jsx",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} should exist`);
}

const readme = read("README.md");
const appShell = read("src/app/App.jsx");
const data = read("src/data/portfolioData.js");
const css = read("src/index.css");
const theme = read("src/app/theme.js");
const routes = read("src/app/routes.js");
const foldPageTransition = read("src/components/layout/FoldPageTransition.jsx");
const sakuraBranch = read("src/features/sakura-scene/SakuraBranch.jsx");
const petalFallLayer = read("src/features/sakura-scene/PetalFallLayer.jsx");
const brushStrokeDraw = read("src/features/ink-palette/BrushStrokeDraw.jsx");
const heroPage = read("src/pages/SakuraDeskHeroPage.jsx");
const projectsPageCard = read("src/features/letter-desk/PostcardProjectCard.jsx");
const mailboxPage = read("src/pages/LetterMailboxContactPage.jsx");

assert.match(readme, /sakura-letter-desk/, "README should declare the catalog theme id");
assert.match(data, /themeId:\s*["']sakura-letter-desk["']/, "data should declare theme id");
assert.match(css, /family=Nunito:wght@400;500;600;700/, "CSS should load Nunito for Vietnamese-friendly rounded typography");
assert.doesNotMatch(css, /Zen\+Maru\+Gothic|Zen Maru Gothic/, "CSS should not use Zen Maru Gothic because Vietnamese glyphs render poorly");
assert.match(theme, /fontFamily:\s*["']'Nunito', 'Noto Sans JP', system-ui, sans-serif["']/, "theme token should use Nunito with Noto Sans JP fallback");
assert.doesNotMatch(theme, /Zen Maru Gothic/, "theme token should not use Zen Maru Gothic");
assert.match(data, /Lê Thị Hoàng Yến/, "data should include the student name");
assert.match(data, /Sở hữu trí tuệ/, "data should include future IP-law direction");
assert.match(data, /BT1\.pdf/, "project data should reference BT1.pdf");
assert.match(data, /BT6\.pdf/, "project data should reference BT6.pdf");
assert.match(data, /cardVariant:\s*["']library-slip["']/, "chapter 1 should use a library slip object card");
assert.match(data, /cardVariant:\s*["']integrity-certificate["']/, "chapter 6 should use an integrity certificate object card");
assert.match(routes, /\/desk/, "desk route should exist");
assert.match(routes, /\/letters/, "letters route should exist");
assert.match(routes, /\/palette/, "palette route should exist");
assert.match(routes, /\/mailbox/, "mailbox route should exist");
assert.match(foldPageTransition, /className=["']page-transition-surface["']/, "animated route surface should expose a stacking class");
assert.match(css, /\.page-transition-surface\s*{[\s\S]*position:\s*relative;[\s\S]*z-index:\s*4;/, "animated route surface should stack above fixed sakura decorations during navbar transitions");
assert.match(appShell, /dog\.png/, "app shell should import dog background asset");
assert.match(appShell, /className=["']dog-bg-companion["']/, "app shell should render dog in a dedicated background class");
assert.match(css, /\.dog-bg-companion\s*{[\s\S]*position:\s*fixed;[\s\S]*left:\s*clamp\(8px,\s*3vw,\s*42px\);[\s\S]*bottom:\s*0;/, "dog companion should sit in the lower-left background");
assert.match(css, /\.dog-bg-companion\s*{[\s\S]*animation:\s*dog-companion-breathe/, "dog companion should have a gentle idle animation");
assert.match(brushStrokeDraw, /cat\.png/, "brush stroke draw should import cat asset");
assert.match(brushStrokeDraw, /className=["']brush-cat["']/, "brush stroke draw should render cat inside the brush card");
assert.match(css, /\.brush-stroke-draw\s*{[\s\S]*position:\s*relative;[\s\S]*overflow:\s*hidden;/, "brush stroke draw should frame the cat asset");
assert.match(css, /\.brush-cat\s*{[\s\S]*position:\s*absolute;[\s\S]*left:\s*14px;[\s\S]*bottom:\s*10px;/, "cat should sit inside the brush stroke draw surface");
assert.match(css, /\.brush-cat\s*{[\s\S]*animation:\s*cat-brush-perch/, "cat should have a gentle perch animation");
assert.match(sakuraBranch, /sakura-branch-left\.png/, "sakura branch should use the left PNG asset");
assert.match(sakuraBranch, /sakura-branch-right\.png/, "sakura branch should use the right PNG asset");
assert.doesNotMatch(sakuraBranch, /sakura-branch\.svg/, "sakura branch should no longer import the SVG asset");
assert.match(css, /\.sakura-branch-left\s*{[\s\S]*left:\s*-72px;/, "left sakura branch should sit in the upper-left corner");
assert.match(css, /\.sakura-branch-right\s*{[\s\S]*right:\s*-64px;/, "right sakura branch should sit in the upper-right corner");
assert.match(petalFallLayer, /sakura-petal-blush\.svg/, "petal layer should import the blush petal asset");
assert.match(petalFallLayer, /sakura-petal-soft\.svg/, "petal layer should import the soft petal asset");
assert.match(petalFallLayer, /sakura-petal-rose\.svg/, "petal layer should import the rose petal asset");
assert.match(petalFallLayer, /sakura-petal-light\.svg/, "petal layer should import the light petal asset");
assert.match(petalFallLayer, /petal-depth-back/, "petal layer should render a background-depth petal class");
assert.match(petalFallLayer, /petal-depth-front/, "petal layer should render a foreground-depth petal class");

for (const token of [
  "--sakura-pink: #f2a0b8",
  "--blossom-white: #fffbf7",
  "--ink-charcoal: #2d2028",
  "--washi-gold: #ffe4a0",
  "--paper-cream: #fff5ec",
  "sakura-petal-fall",
  "sakura-petal-fall-deep",
  "sakura-petal-sway",
  ".petal-backdrop",
  "branch-sway",
  "ink-stroke-draw",
  "sparrow-hop",
  "dog-companion-breathe",
  "cat-brush-perch",
  "prefers-reduced-motion",
]) {
  assert.match(css, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${token} should be present`);
}

assert.match(heroPage, /student-profile-slip/, "identity block should be a custom student profile slip");
assert.match(heroPage, /variant="bookmark-note"/, "portfolio goals should render as bookmark notes");
assert.match(heroPage, /variant="scroll-letter"/, "future direction should render as a scroll letter");
assert.match(projectsPageCard, /project-card-\$\{project\.cardVariant\}/, "project cards should use per-project object variants");
assert.match(mailboxPage, /variant="book-page"/, "reflection summary should render as a book page");
assert.match(mailboxPage, /variant="certificate"/, "challenge summary should render as a certificate");
assert.match(mailboxPage, /thank-you-envelope/, "final message should render as a thank-you envelope");
assert.match(css, /\.ink-palette-grid\s*{[\s\S]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/, "ink palette grid should use compact three-column desktop layout");
assert.match(css, /\.ink-color-card\s*{[\s\S]*min-height:\s*132px;/, "ink skill cards should stay compact for short skill text");
assert.match(css, /\.ink-color-card p\s*{[\s\S]*line-height:\s*1\.55;/, "ink skill copy should use a compact line height");

for (const objectClass of [
  ".student-profile-slip",
  ".desk-object-bookmark-note",
  ".desk-object-scroll-letter",
  ".desk-object-book-page",
  ".desk-object-certificate",
  ".project-card-library-slip",
  ".project-card-source-note",
  ".project-card-folded-ai-letter",
  ".project-card-club-postcard",
  ".project-card-film-strip-card",
  ".project-card-integrity-certificate",
  ".thank-you-envelope",
]) {
  assert.match(css, new RegExp(objectClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${objectClass} should be styled`);
}

const assetDir = join(root, "src/assets/sakura-letter-desk");
assert.ok(existsSync(assetDir), "sakura-letter-desk asset directory should exist");
assert.deepEqual(
  readdirSync(assetDir).filter((file) => file.endsWith(".svg")).sort(),
  [
    "desk-stationery-icons.svg",
    "envelope-set.svg",
    "ink-splash-set.svg",
    "paper-texture-pattern.svg",
    "sakura-petal-blush.svg",
    "sakura-petal-light.svg",
    "sakura-petal-rose.svg",
    "sakura-petal-soft.svg",
    "sakura-petals.svg",
    "sparrow-poses.svg",
    "washi-tape-japanese.svg",
  ].sort(),
  "catalog SVG asset set should be complete",
);
assert.ok(existsSync(join(assetDir, "sakura-branch.png")), "sakura branch PNG asset should exist");
assert.ok(existsSync(join(assetDir, "sakura-branch-left.png")), "left sakura branch PNG asset should exist");
assert.ok(existsSync(join(assetDir, "sakura-branch-right.png")), "right sakura branch PNG asset should exist");
assert.ok(existsSync(join(assetDir, "dog.png")), "dog background PNG asset should exist");
assert.ok(existsSync(join(assetDir, "cat.png")), "cat brush PNG asset should exist");

const collectJsx = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collectJsx(full);
    return entry.name.endsWith(".jsx") ? [full] : [];
  });

for (const filePath of collectJsx(join(root, "src"))) {
  const source = readFileSync(filePath, "utf8");
  assert.match(source, /import React from ["']react["'];/, `${filePath} should import React explicitly`);
}
