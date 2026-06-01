import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const read = (path) => readFileSync(join(root, path), 'utf8');

assert.ok(existsSync(join(root, 'src/App.jsx')), 'App.jsx should exist');
assert.ok(existsSync(join(root, 'src/data/portfolioData.js')), 'portfolio data should exist');
assert.ok(existsSync(join(root, 'src/app/AnimatedRoutes.jsx')), 'routes should be separated from App');
assert.ok(existsSync(join(root, 'src/components/layout/Navbar.jsx')), 'navbar should be a layout component');
assert.ok(existsSync(join(root, 'src/components/layout/CoffeeScene.jsx')), 'scene background should be a layout component');
assert.ok(existsSync(join(root, 'src/components/layout/PageShell.jsx')), 'page shell should be a layout component');
assert.ok(existsSync(join(root, 'src/components/ui/CoffeeCard.jsx')), 'coffee card should be a shared UI component');
assert.ok(existsSync(join(root, 'src/pages/AboutPage.jsx')), 'about page should be separated');
assert.ok(existsSync(join(root, 'src/pages/ProjectsPage.jsx')), 'projects page should be separated');
assert.ok(existsSync(join(root, 'src/pages/ConclusionPage.jsx')), 'conclusion page should be separated');

const app = read('src/App.jsx');
const animatedRoutes = read('src/app/AnimatedRoutes.jsx');
const routeConfig = read('src/app/routeConfig.jsx');
assert.match(app, /BrowserRouter/, 'app should use a React router');
assert.match(animatedRoutes, /Routes/, 'animated route component should render routes');
assert.match(routeConfig, /\/about/, 'about route should be configured');
assert.match(routeConfig, /\/projects/, 'projects route should be configured');
assert.match(routeConfig, /\/conclusion/, 'conclusion route should be configured');
assert.doesNotMatch(app, /function AboutPage|function ProjectsPage|function ConclusionPage/, 'page components should not live in App.jsx');

const data = read('src/data/portfolioData.js');
assert.match(data, /Nguyễn Bích Ngọc/, 'portfolio should identify Bich Ngoc');
assert.match(data, /24063211/, 'portfolio should include student id');
assert.match(data, /Luật Kinh doanh/, 'portfolio should include major');
assert.match(data, /Nghe nhạc/, 'portfolio should include interests');
assert.match(data, /Bt1\.pdf/, 'project data should reference the first PDF');
assert.match(data, /Bt6\.pdf/, 'project data should reference the sixth PDF');

const css = read('src/index.css');
assert.match(css, /sunlight-sway/, 'sunlight sway animation should exist');
assert.match(css, /steam-flow/, 'steam flow animation should exist');
assert.match(css, /dust-float/, 'dust float animation should exist');
assert.match(css, /sign-sway/, 'sign sway animation should exist');
assert.match(css, /cat-tail-wag/, 'cat tail wag animation should exist');
assert.match(css, /ribbon-float/, 'ribbon float animation should exist');
assert.match(css, /float-slow/, 'float slow animation should exist');
assert.match(css, /prefers-reduced-motion/, 'reduced motion should be handled');

const assetDir = join(root, 'src/assets/ngocnb-afternoon-coffee');
assert.ok(existsSync(assetDir), 'ngocnb-afternoon-coffee asset directory should exist');
const svgAssets = readdirSync(assetDir).filter((file) => file.endsWith('.svg'));
assert.ok(svgAssets.length >= 10, 'should include at least ten 2D SVG assets for Cat Coffee');
for (const required of [
  'cute-cat-silhouette.svg',
  'cappuccino-art.svg',
  'coffee-signboard.svg',
  'deco-ribbon.svg',
]) {
  assert.ok(svgAssets.includes(required), `${required} should exist`);
}


const collectJsxFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectJsxFiles(fullPath);
    }
    return entry.name.endsWith('.jsx') ? [fullPath] : [];
  });

for (const filePath of collectJsxFiles(join(root, 'src'))) {
  const source = readFileSync(filePath, 'utf8');
  assert.match(
    source,
    /import React from ["']react["'];/,
    `${filePath} should import React explicitly`,
  );
}

console.log('portfolio contract ok');
