import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const css = readFileSync(join(root, 'src/index.css'), 'utf8');
const theme = readFileSync(join(root, 'src/theme.js'), 'utf8');

const failures = [];

const requiredCss = [
  'Readable Tailwind typography scale',
  '.text-\\[10px\\]',
  'font-size: 0.78rem;',
  '.text-xs',
  'font-size: 0.86rem;',
  '.text-sm',
  'font-size: 0.98rem;',
  '.text-base',
  'font-size: 1.08rem;',
  '.text-lg',
  'font-size: 1.22rem;',
  '.text-xl',
  'font-size: 1.42rem;'
];

for (const snippet of requiredCss) {
  if (!css.includes(snippet)) failures.push(`Missing CSS typography snippet: ${snippet}`);
}

const requiredTheme = [
  'fontSize: 18',
  'fontSizeSM: 16',
  'fontSizeLG: 20'
];

for (const snippet of requiredTheme) {
  if (!theme.includes(snippet)) failures.push(`Missing theme typography token: ${snippet}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Typography scale verification passed.');
