import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const source = readFileSync(resolve(root, 'src/pages/Projects.jsx'), 'utf8');

for (let index = 1; index <= 6; index += 1) {
  const pdfName = `Bt${index}.pdf`;

  assert.ok(
    existsSync(resolve(root, 'docs', pdfName)),
    `${pdfName} should exist in docs`,
  );
  assert.match(
    source,
    new RegExp(`docs/${pdfName}|\\.\\./\\.\\./docs/${pdfName}`),
    `Project ${index} should link to ${pdfName}`,
  );
}

assert.match(source, /target="_blank"/, 'PDF links should open in a new tab');
assert.match(source, /rel="noreferrer"/, 'New-tab PDF links should use rel="noreferrer"');
