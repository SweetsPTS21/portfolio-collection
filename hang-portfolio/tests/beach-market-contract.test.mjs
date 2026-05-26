import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const exists = (path) => existsSync(join(root, path));

const requiredFiles = [
  'src/app/App.jsx',
  'src/app/routes.js',
  'src/app/theme.js',
  'src/app/lenisSetup.js',
  'src/app/motionConfig.js',
  'src/pages/AboutPage.jsx',
  'src/pages/ProjectsPage.jsx',
  'src/pages/ConclutionsPage.jsx',
  'src/features/market-scene/BeachMarketBackground.jsx',
  'src/features/market-scene/AwningSwayLayer.jsx',
  'src/features/market-scene/FlagFlutterLayer.jsx',
  'src/features/market-scene/SeaBehindMarket.jsx',
  'src/features/market-stalls/StallProjectGrid.jsx',
  'src/features/market-stalls/MarketStallCard.jsx',
  'src/features/market-stalls/PriceTagPop.jsx',
  'src/features/basket-skills/BasketSkillGrid.jsx',
  'src/features/basket-skills/MarketItemBadge.jsx',
  'src/components/ui/MarketButton.jsx',
  'src/components/ui/StallCard.jsx',
  'src/components/ui/PriceTag.jsx',
  'src/components/ui/BasketBadge.jsx',
  'src/data/portfolioData.js',
  'src/index.css',
  'README.md',
];

for (const file of requiredFiles) {
  assert.ok(exists(file), `${file} must exist`);
}

const requiredGeneratedAssets = [
  'generated/beach-market-hero.png',
  'generated/market-stall-card-frame.png',
  'generated/woven-basket-cutout.png',
  'generated/coastal-sticker-sheet.png',
  'generated/bunting-flags.png',
  'generated/receipt-postcard-set.png',
  'generated/sea-sparkle-overlay.png',
  'generated/market-props-strip.png',
];

const requiredSlicedAssets = [
  'generated/slices/coastal-scallop-shell.png',
  'generated/slices/coastal-starfish.png',
  'generated/slices/coastal-camera.png',
  'generated/slices/coastal-parasol.png',
  'generated/slices/coastal-shell-tray.png',
  'generated/slices/receipt-seascape-postcard.png',
  'generated/slices/receipt-kraft-tag.png',
  'generated/slices/receipt-blue-stamp.png',
  'generated/slices/props-empty-crate.png',
  'generated/slices/props-sea-glass.png',
];

for (const asset of requiredGeneratedAssets) {
  assert.ok(exists(`src/assets/beach-market-stroll/${asset}`), `${asset} must exist`);
}

for (const asset of requiredSlicedAssets) {
  assert.ok(exists(`src/assets/beach-market-stroll/${asset}`), `${asset} must exist`);
}

const pkg = JSON.parse(read('package.json'));
assert.match(pkg.dependencies.react, /^(\^|~)?18\./, 'React 18 is required');
assert.ok(pkg.dependencies['framer-motion'], 'framer-motion dependency is required');
assert.ok(pkg.dependencies.lenis, 'lenis dependency is required');

const app = read('src/app/App.jsx');
const motionConfig = read('src/app/motionConfig.js');
const theme = read('src/app/theme.js');
const routes = read('src/app/routes.js');
const data = read('src/data/portfolioData.js');
const css = read('src/index.css');
const background = read('src/features/market-scene/BeachMarketBackground.jsx');
const aboutPage = read('src/pages/AboutPage.jsx');
const projectsPage = read('src/pages/ProjectsPage.jsx');
const conclutionsPage = read('src/pages/ConclutionsPage.jsx');

assert.match(theme, /beach-market-stroll/, 'theme config must include beach-market-stroll');
for (const routePath of ['/about', '/projects', '/conclutions']) {
  assert.match(routes, new RegExp(routePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${routePath} route is required`);
}

assert.doesNotMatch(app, /BeachMarketHeroPage|MarketStallProjectsPage|BasketSkillsPage|SeasideOrderContactPage/, 'app shell must route to the three requested pages');
assert.match(app, /AboutPage/);
assert.match(app, /ProjectsPage/);
assert.match(app, /ConclutionsPage/);
assert.match(app, /useLenis/);
assert.match(app, /motion\./, 'Framer Motion must be used in app shell');
assert.match(app, /window\.history\.pushState|location\.pathname/, 'app shell must support browser routes');
assert.match(motionConfig, /dynamicCardReveal/, 'shared dynamic card reveal variant is required');
assert.match(motionConfig, /cardHoverMotion/, 'shared card hover motion config is required');
assert.match(motionConfig, /contentBlockReveal/, 'shared content block reveal variant is required');

assert.match(data, /aboutCards/);
assert.match(data, /conclusionCards/);
assert.match(data, /decor:\s*'profile-shell'/, 'about cards must carry data-driven decoration metadata');
assert.match(data, /layout:\s*'postcard'/, 'about cards must support postcard-style card variants');
assert.match(data, /decor:\s*'research-stamp'/, 'project cards must carry per-chapter decoration metadata');
assert.match(data, /decor:\s*'closing-letter'/, 'conclusion cards must carry reflection decoration metadata');
assert.match(aboutPage, /aboutCards[\s\S]*\.map/, 'about page must split content into cards');
assert.match(aboutPage, /content-card--\$\{card\.layout/, 'about cards must render layout modifier classes from data');
assert.match(aboutPage, /decor-\$\{card\.decor/, 'about cards must render decoration modifier classes from data');
assert.match(aboutPage, /variants=\{dynamicCardReveal\}/, 'about cards must use shared Framer Motion card reveal variants');
assert.match(aboutPage, /whileHover=\{cardHoverMotion\.whileHover\}/, 'about cards must use shared hover motion');
assert.match(aboutPage, /whileTap=\{cardHoverMotion\.whileTap\}/, 'about cards must use shared tap motion');
assert.match(projectsPage, /projects\.map/, 'projects page must split chapters into cards');
assert.match(projectsPage, /project-chapter-card--\$\{project\.decor/, 'project cards must render decoration modifier classes from data');
assert.match(projectsPage, /variants=\{dynamicCardReveal\}/, 'project cards must use shared Framer Motion card reveal variants');
assert.match(projectsPage, /motion\.div[\s\S]*className="chapter-block"[\s\S]*variants=\{contentBlockReveal\}/, 'project chapter blocks must animate with Framer Motion');
assert.match(conclutionsPage, /conclusionCards\.map/, 'conclutions page must split conclusion into cards');
assert.match(conclutionsPage, /conclusion-card--\$\{card\.decor/, 'conclusion cards must render decoration modifier classes from data');
assert.match(conclutionsPage, /variants=\{dynamicCardReveal\}/, 'conclusion cards must use shared Framer Motion card reveal variants');
assert.match(conclutionsPage, /whileHover=\{cardHoverMotion\.whileHover\}/, 'conclusion cards must use shared hover motion');
assert.doesNotMatch(css, /\.conclusion-card-grid\s*{[^}]*repeat\(4,\s*minmax\(0,\s*1fr\)\)/s, 'conclusion page must not use a four-column grid');
assert.match(css, /\.conclusion-card-grid\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1\.15fr\)\s+minmax\(280px,\s*0\.85fr\)/s, 'conclusion page needs an asymmetric readable grid');
assert.match(css, /\.conclusion-card:nth-child\(1\)\s*{[^}]*grid-row:\s*span 2/s, 'long conclusion card should span rows instead of forcing narrow columns');
assert.match(css, /\.conclusion-card\s*>\s*\*\s*{[^}]*z-index:\s*1/s, 'conclusion card content must stay above decorative icons');
assert.match(css, /\.conclusion-card:nth-child\(1\)::before\s*{[^}]*coastal-starfish\.png/s, 'wide conclusion card should use a secondary decorative icon');
assert.match(css, /\.conclusion-card:nth-child\(1\)::after\s*{[^}]*coastal-shell-tray\.png/s, 'wide conclusion card should use a large decorative icon to fill whitespace');

for (const asset of [
  'generated/beach-market-hero.png',
  'generated/sea-sparkle-overlay.png',
]) {
  assert.match(background + app + css, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${asset} must be imported or referenced`);
}

const allowedBackgroundSlicedAssets = new Set([
  'generated/slices/coastal-camera.png',
  'generated/slices/receipt-seascape-postcard.png',
]);

for (const asset of requiredSlicedAssets) {
  assert.match(css, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${asset} must decorate pages or cards independently`);
  if (!allowedBackgroundSlicedAssets.has(asset)) {
    assert.doesNotMatch(background, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${asset} must not be injected into the fixed background`);
  }
}

assert.doesNotMatch(background, /sceneAssets|generated-market-assets|generated-bunting-anchor/, 'fixed background must not scatter extra decorative cutouts');
assert.doesNotMatch(background, /market-stall-card-frame|bunting-flags/, 'fixed background should rely on the main scene and a small controlled prop layer');
assert.match(background, /floating-market-props/, 'fixed background should expose a controlled animated prop layer');
assert.match(background, /floating-prop-camera/, 'background prop layer should include an animated camera asset');
assert.match(background, /floating-prop-basket/, 'background prop layer should include an animated basket asset');
assert.match(background, /floating-prop-starfish/, 'background prop layer should include an animated starfish asset');
for (const animatedAsset of [
  'generated/slices/coastal-camera.png',
  'generated/woven-basket-cutout.png',
  'generated/slices/receipt-seascape-postcard.png',
]) {
  assert.match(background + css, new RegExp(animatedAsset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${animatedAsset} must be used by the animated decoration layer`);
}

for (const oldAsset of [
  'beach-market-street.svg',
  'market-stall-frames.svg',
  'tropical-fruit-set.svg',
  'woven-basket-tags.svg',
  'souvenir-shell-icons.svg',
  'market-flag-bunting.svg',
  'receipt-order-set.svg',
  'sun-sea-sparkles.svg',
]) {
  assert.doesNotMatch(background, new RegExp(oldAsset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${oldAsset} must be retired from the background layer`);
}

for (const controlledBackgroundAsset of ['coastal-camera.png', 'woven-basket-cutout.png', 'receipt-seascape-postcard.png']) {
  assert.match(background, new RegExp(controlledBackgroundAsset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${controlledBackgroundAsset} must be used as a controlled animated background asset`);
}

for (const snippet of [
  'Hoàng Thúy Hằng',
  'Đại học Luật',
  'Luật học',
  'Hãy mở một bản nhạc không lời thật êm dịu',
  'Sở thích',
  'Mình tìm thấy niềm vui và sự bình yên',
  'Công nghệ không nên là sự rườm rà hay nhồi nhét',
  'người làm luật mang phong thái điềm tĩnh',
  'làm quen với các kỹ năng số cơ bản',
  'Tối giản trong hình thức',
  'Độc lập trong tư duy',
  'Minh bạch trong trích dẫn',
  'Google Workspace',
  'Canva',
  'các mô hình ngôn ngữ lớn',
  'Chương 1',
  'Chương 6',
  'tạo mới, đổi tên, di chuyển và lưu trữ tài liệu',
  'Luật Các tổ chức tín dụng năm 2024',
  'máy móc hoàn toàn vô cảm',
  'biên bản được ghi chép cẩn thận',
  'gam màu dịu nhẹ và bố cục thanh thoát',
  'Sự thanh lịch thực thụ của người học luật',
  'Khép lại dự án này giống như việc mình vừa đọc xong một cuốn sách hay',
  'công nghệ sẽ trở thành một khu vườn ngăn nắp',
  'năng lực sàng lọc thông tin',
  'nguy cơ tiếp xúc với nguồn thông tin pháp lý thiếu chính xác',
]) {
  assert.match(data, new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${snippet} must be represented in data`);
}

for (const pdf of ['Bt1.pdf', 'Bt2.pdf', 'Bt3.pdf', 'Bt4.pdf', 'Bt5.pdf', 'Bt6.pdf']) {
  assert.match(data, new RegExp(pdf.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${pdf} must be linked`);
}

assert.match(css, /prefers-reduced-motion/, 'reduced motion fallback is required');
assert.match(css, /beach-market-stroll/, 'CSS must include theme identity marker');
assert.match(background, /aria-hidden="true"/, 'decorative generated scene must be hidden from assistive tech');

for (const cardAsset of ['coastal-scallop-shell.png', 'receipt-kraft-tag.png', 'props-sea-glass.png']) {
  assert.match(css, new RegExp(cardAsset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${cardAsset} must decorate cards from CSS`);
}

for (const selector of [
  '.content-card--postcard',
  '.content-card--receipt',
  '.content-card--basket',
  '.decor-profile-shell::after',
  '.decor-tools-crate::after',
  '.project-chapter-card--research-stamp::after',
  '.conclusion-card--closing-letter::after',
]) {
  assert.match(css, new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${selector} must exist in the decoration system`);
}

for (const selector of [
  '.route-avatar::after',
  '.floating-market-props',
  '.floating-prop-camera',
  '.floating-prop-basket',
  '.floating-prop-starfish',
  '@keyframes avatar-corner-float',
  '@keyframes prop-drift',
]) {
  assert.match(css, new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${selector} must exist for animated decorative assets`);
}

assert.match(css, /\.floating-prop\s*{[^}]*opacity:\s*0\.(?:4|5|6)/s, 'floating background props should be more visible for a stylized look');
assert.match(css, /\.floating-prop-camera\s*{[^}]*width:\s*clamp\(220px,\s*24vw,\s*380px\)/s, 'camera background prop should use a large asset scale');
assert.match(css, /\.floating-prop-starfish\s*{[^}]*width:\s*clamp\(240px,\s*30vw,\s*460px\)/s, 'starfish/background sheet prop should use a large asset scale');

const backgroundVeil = css.match(/\.beach-market-background::after\s*{[^}]*}/s)?.[0] ?? '';
assert.doesNotMatch(backgroundVeil, /rgba\(248,\s*243,\s*234,\s*0\.(?:7|8|9)\)/, 'beige background veil must not cover generated art');
assert.doesNotMatch(backgroundVeil, /rgba\(255,\s*255,\s*255,\s*0\.(?:6|7|8|9)\)/, 'white background veil must stay translucent enough for generated art');
assert.match(css, /market-hero-generated\s*{[^}]*opacity:\s*0\.(?:8|9)/s, 'hero background must remain visually clear');
assert.doesNotMatch(css, /generated-market-assets img\s*{/, 'floating generated assets should move out of the fixed background layer');

const paletteFiles = [
  'src/app/theme.js',
  'src/index.css',
];

const paletteSource = paletteFiles.map(read).join('\n');
for (const color of ['#2F80B7', '#7DB8DA', '#EFE0C4', '#F8F3EA', '#FFFFFF']) {
  assert.match(paletteSource, new RegExp(color, 'i'), `${color} must be present in the blue beige white palette`);
}

for (const retiredColor of ['#FF8FA3', '#FF6B7A', '#4ED9B4', '#FFD166']) {
  assert.doesNotMatch(paletteSource, new RegExp(retiredColor, 'i'), `${retiredColor} must be removed from the palette`);
}
