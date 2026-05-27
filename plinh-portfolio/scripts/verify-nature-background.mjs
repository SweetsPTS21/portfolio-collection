import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const backgroundFile = join(root, 'src/components/ui/NatureBackground.jsx');
const cssFile = join(root, 'src/index.css');

const component = readFileSync(backgroundFile, 'utf8');
const css = readFileSync(cssFile, 'utf8');

const requiredAssets = [
  'canopy-top-left.svg',
  'canopy-top-right.svg',
  'vine-column-left.svg',
  'vine-column-right.svg',
  'leaf-cluster-1.svg',
  'leaf-cluster-2.svg',
  'pressed-flower.svg',
  'seed-pod.svg',
  'sun-ray-mask.svg',
  'paper-speckles.svg'
];

const failures = [];

for (const asset of requiredAssets) {
  const assetPath = join(root, 'src/assets/botanical/background', asset);
  if (!existsSync(assetPath)) failures.push(`Missing asset: ${asset}`);
  if (!component.includes(asset)) failures.push(`Component does not import/use: ${asset}`);
}

const requiredComponentSnippets = [
  'const FALLING_LEAVES =',
  'const POLLEN_PARTICLES =',
  'const PRESSED_SPECIMENS =',
  'className="nature-bg"',
  'aria-hidden="true"'
];

for (const snippet of requiredComponentSnippets) {
  if (!component.includes(snippet)) failures.push(`Missing component snippet: ${snippet}`);
}

if (component.includes('Math.random')) failures.push('Component still uses Math.random');
if (component.includes('./src/assets')) failures.push('Component still uses ./src/assets path');

const requiredCssSnippets = [
  '.nature-bg',
  '.nature-bg__paper',
  '.nature-bg__wash',
  '.nature-bg__canopy',
  '.nature-bg__vine',
  '.nature-bg__leaf',
  '.nature-bg__pollen',
  '.nature-bg__pressed',
  '.nature-bg__sun-rays',
  '@media (prefers-reduced-motion: reduce)'
];

for (const snippet of requiredCssSnippets) {
  if (!css.includes(snippet)) failures.push(`Missing CSS snippet: ${snippet}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Nature background verification passed.');
