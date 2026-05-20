import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const data = readFileSync(join(root, 'src/data/portfolioData.js'), 'utf8');

const requiredSnippets = [
  'Nguyễn Thanh Thư',
  'Đại học Luật, Đại học Quốc gia Hà Nội',
  'storybook-royal-forest',
  'rừng phép thuật',
  'lâu đài xa xa',
  'bầu trời sao lấp lánh',
  'ánh trăng',
  'sao băng',
  'đom đóm',
  'cỗ xe ngựa',
  'cột đèn đường',
  'Luật học',
  'Nhập môn công nghệ số và trí tuệ nhân tạo',
  'Máy tính và các thiết bị ngoại vi',
  'Khai thác dữ liệu và thông tin',
  'Tổng quan về trí tuệ nhân tạo',
  'Giao tiếp và hợp tác trong môi trường số',
  'Sáng tạo nội dung số',
  'An toàn và liêm chính học thuật',
  'AI chỉ là người bạn đồng hành',
];

for (const snippet of requiredSnippets) {
  const escaped = snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert.match(data, new RegExp(escaped), `${snippet} must be represented`);
}

assert.doesNotMatch(data, /Phương Linh/, 'old portfolio owner must not remain');

const requiredFiles = [
  'src/app/App.jsx',
  'src/app/routes.js',
  'src/app/theme.js',
  'src/components/layout/StorybookNav.jsx',
  'src/pages/StorybookHeroPage.jsx',
  'src/pages/ChapterProjectsPage.jsx',
  'src/pages/RoyalInventorySkillsPage.jsx',
  'src/pages/RoyalLetterContactPage.jsx',
  'src/features/storybook-scene/OpenBookBackground.jsx',
  'src/features/storybook-scene/ForestPathLayer.jsx',
  'src/features/storybook-scene/CastleSilhouette.jsx',
  'src/features/storybook-scene/SparkleDustLayer.jsx',
  'src/features/royal-mascot/RoyalMascotRiveController.jsx',
  'src/features/royal-mascot/PrincessPrinceIdle.jsx',
  'src/features/royal-mascot/CrownSparkle.jsx',
  'src/features/royal-mascot/MagicKeyReaction.jsx',
  'src/features/chapter-projects/ChapterCardGrid.jsx',
  'src/features/chapter-projects/ChapterCard.jsx',
  'src/features/chapter-projects/QuestIconBadge.jsx',
  'src/features/chapter-projects/PageTurnDetail.jsx',
  'src/features/royal-inventory/InventoryShelf.jsx',
  'src/features/royal-inventory/InventoryItemBadge.jsx',
  'src/features/royal-inventory/SkillScrollTooltip.jsx',
  'src/components/layout/StorybookShell.jsx',
  'src/components/layout/ChapterTransitionWrapper.jsx',
  'src/components/ui/CrownButton.jsx',
  'src/components/ui/ScrollCard.jsx',
  'src/components/ui/RibbonTag.jsx',
  'src/components/ui/SealBadge.jsx',
  'src/assets/storybook-royal-forest/open-storybook-scene.svg',
  'src/assets/storybook-royal-forest/castle-silhouette-set.svg',
  'src/assets/storybook-royal-forest/royal-mascot-pair.svg',
  'src/assets/storybook-royal-forest/enchanted-forest-path.svg',
  'src/assets/storybook-royal-forest/crown-key-wand-set.svg',
  'src/assets/storybook-royal-forest/scroll-letter-set.svg',
  'src/assets/storybook-royal-forest/sparkle-dust-particles.svg',
  'src/assets/storybook-royal-forest/carriage-lantern-set.svg',
  'src/assets/storybook-royal-forest/storybook-icons.svg',
];

for (const file of requiredFiles) {
  assert.equal(existsSync(join(root, file)), true, `${file} must exist`);
}

const sourceFiles = [
  'src/app/App.jsx',
  'src/components/layout/StorybookShell.jsx',
  'src/pages/StorybookHeroPage.jsx',
  'src/pages/ChapterProjectsPage.jsx',
  'src/pages/RoyalInventorySkillsPage.jsx',
  'src/pages/RoyalLetterContactPage.jsx',
  'src/features/storybook-scene/OpenBookBackground.jsx',
  'src/features/storybook-scene/ForestPathLayer.jsx',
  'src/features/storybook-scene/CastleSilhouette.jsx',
  'src/features/storybook-scene/SparkleDustLayer.jsx',
  'src/features/royal-mascot/PrincessPrinceIdle.jsx',
  'src/features/royal-inventory/InventoryShelf.jsx',
].map((file) => readFileSync(join(root, file), 'utf8')).join('\n');

for (const asset of [
  'open-storybook-scene.svg',
  'castle-silhouette-set.svg',
  'royal-mascot-pair.svg',
  'enchanted-forest-path.svg',
  'crown-key-wand-set.svg',
  'scroll-letter-set.svg',
  'sparkle-dust-particles.svg',
  'carriage-lantern-set.svg',
  'storybook-icons.svg',
]) {
  assert.match(sourceFiles, new RegExp(asset), `${asset} must be imported by UI or feature code`);
}

const css = readFileSync(join(root, 'src/index.css'), 'utf8');
const themeSource = readFileSync(join(root, 'src/app/theme.js'), 'utf8');
for (const token of [
  '--midnight-blue',
  '--moon-ivory',
  '--starlight-gold',
  '--panel-night',
  '--panel-night-strong',
  '--panel-border',
  '--text-soft',
  '--icon-gold',
  'shooting-star',
  'firefly-drift',
  'lantern-glow',
]) {
  assert.match(css, new RegExp(token), `${token} must be represented in night fairytale CSS`);
}

assert.match(themeSource, /colorBorder:\s*'#D8C7FF'/, 'theme border token must stay visible on dark backgrounds');

assert.doesNotMatch(
  css,
  /background:\s*rgba\(255,\s*(?:250|255)/,
  'interactive cards and badges must not keep light backgrounds on the dark night theme',
);

for (const token of [
  'color: var(--icon-gold)',
  'color: var(--text-bright)',
  'color: var(--text-soft)',
  'background: var(--panel-night)',
  'background: var(--panel-night-strong)',
]) {
  assert.match(css, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${token} must support dark theme contrast`);
}

const storybookCard = readFileSync(join(root, 'src/features/royal-mascot/PrincessPrinceIdle.jsx'), 'utf8');
assert.match(storybookCard, /docs\/avatar\.png/, 'storybook-card must use avatar from docs');
assert.doesNotMatch(storybookCard, /royal-mascot-pair\.svg/, 'royal couple asset must not be inside storybook-card');
assert.doesNotMatch(storybookCard, /MagicKeyReaction/, 'book-page content must not be inside storybook-card');

const shell = readFileSync(join(root, 'src/components/layout/StorybookShell.jsx'), 'utf8');
assert.match(shell, /royal-mascot-pair\.svg/, 'royal couple asset must be placed in background shell');
assert.match(shell, /StorybookNav/, 'storybook shell must render the top navigation');

const heroPage = readFileSync(join(root, 'src/pages/StorybookHeroPage.jsx'), 'utf8');
assert.match(heroPage, /book-page/, 'book-page content must move into hero-copy');
assert.match(heroPage, /href="\/projects"/, 'hero project action must navigate to /projects');

for (const token of [
  'object-fit: cover',
  'position: absolute',
  'inset: 0',
  'book-cover__corner',
  'avatar-kitty',
  'z-index: 6',
]) {
  assert.match(css, new RegExp(token), `${token} must be represented in full-frame avatar card CSS`);
}

assert.match(storybookCard, /avatar-kitty/, 'avatar-kitty ornament must be present in storybook-card');

const app = readFileSync(join(root, 'src/app/routes.js'), 'utf8');
for (const route of ['home', 'projects', 'conclutions']) {
  assert.match(app, new RegExp(route), `${route} route must be represented in routes`);
}

for (const path of ["path: '/'", "path: '/projects'", "path: '/conclutions'"]) {
  assert.match(app, new RegExp(path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${path} must be represented in routes`);
}
assert.match(app, /label:\s*'Conclutions'/, 'Conclutions label must be represented in routes');

const nav = readFileSync(join(root, 'src/components/layout/StorybookNav.jsx'), 'utf8');
for (const token of ['storybook-nav', 'NavLink', 'route.label']) {
  assert.match(nav, new RegExp(token), `${token} must be represented in top navigation`);
}

const appSource = readFileSync(join(root, 'src/app/App.jsx'), 'utf8');
for (const token of ['useLocation', 'Routes', 'Route', 'HomePage', 'ProjectsPage', 'ConclutionsPage']) {
  assert.match(appSource, new RegExp(token), `${token} must be represented in page routing`);
}

for (const token of ['page-transition', 'data-page={location.pathname}', '<Routes location={location}>']) {
  assert.match(appSource, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${token} must support smooth page transitions`);
}

for (const token of ['.page-transition', 'storybook-page-enter', 'will-change: opacity, transform', 'prefers-reduced-motion']) {
  assert.match(css, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${token} must be represented in page transition CSS`);
}

assert.match(css, /animation:\s*storybook-page-enter\s+(?:9\d{2}|[1-9]\d{3,})ms/, 'page transition must be slow enough to feel gentle');
assert.match(css, /\.storybook-app\s*{[\s\S]*overflow-x:\s*hidden/, 'storybook app must still prevent horizontal overflow');
assert.match(css, /\.storybook-app\s*{[\s\S]*overflow-y:\s*visible/, 'storybook app must allow vertical sticky navigation');
assert.doesNotMatch(css, /\.storybook-app\s*{(?:(?!}).)*overflow:\s*hidden/s, 'storybook app must not disable sticky navigation with overflow hidden');

const pageEnterStart = css.indexOf('@keyframes storybook-page-enter');
const pageEnterEnd = css.indexOf('@media', pageEnterStart);
const pageEnterKeyframes = css.slice(pageEnterStart, pageEnterEnd);
assert.notEqual(pageEnterStart, -1, 'storybook-page-enter keyframes must exist');
assert.doesNotMatch(pageEnterKeyframes, /blur\(/, 'storybook-page-enter must not use blur');
assert.match(pageEnterKeyframes, /rotateX\(/, 'storybook-page-enter must use a page-lift transform instead of blur');

const mainSource = readFileSync(join(root, 'src/main.jsx'), 'utf8');
assert.match(mainSource, /BrowserRouter/, 'app must be mounted inside BrowserRouter');

const packageSource = readFileSync(join(root, 'package.json'), 'utf8');
assert.match(packageSource, /"react-router"/, 'react-router dependency must be installed');

const crownButton = readFileSync(join(root, 'src/components/ui/CrownButton.jsx'), 'utf8');
assert.match(crownButton, /Link/, 'internal CrownButton navigation must use React Router Link');
