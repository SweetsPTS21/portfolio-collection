import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

assert.ok(existsSync(join(root, 'src/App.jsx')), 'React app should exist');
assert.ok(existsSync(join(root, 'src/app/routeConfig.jsx')), 'route config should exist');
assert.ok(existsSync(join(root, 'src/app/theme.js')), 'theme config should exist');
assert.ok(existsSync(join(root, 'src/data/portfolioData.js')), 'portfolio data should exist');
assert.ok(existsSync(join(root, 'docs/portfolio.md')), 'source portfolio markdown should exist');

const theme = read('src/app/theme.js');
assert.match(theme, /kawaii-beach-day/, 'theme id should be kawaii-beach-day');

const routes = read('src/app/routeConfig.jsx');
assert.match(routes, /'\/about'/, 'about route should exist');
assert.match(routes, /'\/projects'/, 'projects route should exist');
assert.match(routes, /'\/conclusion'/, 'conclusion route should exist');
assert.doesNotMatch(routes, /conclution/i, 'route should not use misspelled conclution');

const data = read('src/data/portfolioData.js');
assert.match(data, /Đoàn Ngọc Huyền/, 'portfolio should identify Huyen');
assert.match(data, /24061186/, 'portfolio should include student id');
assert.match(data, /Notion/, 'portfolio should include tools from source');
assert.match(data, /Kalimba/, 'portfolio should include interests from source');
assert.match(data, /Nhóm 15/, 'portfolio should include source project detail');
assert.doesNotMatch(data, /HÀ THỊ YẾN VI|Bích Ngọc/, 'data should not leak other portfolios');

const css = read('src/index.css');
assert.match(css, /beach-scene/, 'background-first beach scene should be styled');
assert.match(css, /wave-sway/, 'wave sway animation should exist');
assert.match(css, /floatie-bob/, 'floatie bob animation should exist');
assert.match(css, /sticker-bounce/, 'sticker animation should exist');
assert.match(css, /prefers-reduced-motion/, 'reduced motion support should exist');

const assetDir = join(root, 'src/assets/kawaii-beach-day');
const assets = readdirSync(assetDir).filter((file) => file.endsWith('.svg'));
assert.ok(assets.length >= 8, 'kawaii-beach-day should include at least 8 SVG assets');
for (const required of [
  'pastel-beach-hero-scene.svg',
  'heart-floatie-set.svg',
  'umbrella-towel-pattern.svg',
  'sandcastle-shells.svg',
  'kawaii-beach-stickers.svg',
  'foam-bubble-particles.svg',
  'shell-mail-bottle.svg',
]) {
  assert.ok(assets.includes(required), `${required} should exist`);
}

console.log('portfolio contract ok');
