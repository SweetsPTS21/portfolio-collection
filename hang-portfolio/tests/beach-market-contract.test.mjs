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

assert.match(data, /aboutCards/);
assert.match(data, /conclusionCards/);
assert.match(aboutPage, /aboutCards[\s\S]*\.map/, 'about page must split content into cards');
assert.match(projectsPage, /projects\.map/, 'projects page must split chapters into cards');
assert.match(conclutionsPage, /conclusionCards\.map/, 'conclutions page must split conclusion into cards');
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

for (const asset of requiredSlicedAssets) {
  assert.match(css, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${asset} must decorate pages or cards independently`);
  assert.doesNotMatch(background, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${asset} must not be injected into the fixed background`);
}

assert.doesNotMatch(background, /sceneAssets|generated-market-assets|generated-bunting-anchor/, 'fixed background must not scatter extra decorative cutouts');
assert.doesNotMatch(background, /market-stall-card-frame|woven-basket-cutout|bunting-flags/, 'fixed background should rely on the main scene, not extra cutouts');

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

for (const retiredSpriteSheet of ['coastal-sticker-sheet.png', 'receipt-postcard-set.png', 'market-props-strip.png']) {
  assert.doesNotMatch(background, new RegExp(retiredSpriteSheet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${retiredSpriteSheet} must be replaced by sliced assets in the background layer`);
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
