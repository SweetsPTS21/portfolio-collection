import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const mainSource = readFileSync(resolve('src/main.jsx'), 'utf8');

assert.match(mainSource, /import\s+\{\s*ReactLenis\s*\}\s+from\s+['"]lenis\/react['"]/);
assert.match(mainSource, /import\s+['"]lenis\/dist\/lenis\.css['"]/);
assert.doesNotMatch(mainSource, /import\s+Lenis\s+from\s+['"]lenis['"]/);
assert.match(mainSource, /<ReactLenis\b/);
assert.match(mainSource, /<\/ReactLenis>/);

console.log('Lenis React setup uses current lenis/react wrapper.');
