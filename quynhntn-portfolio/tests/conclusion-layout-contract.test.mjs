import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('src/features/dream-conclusion/ConclusionGlassScroll.jsx', 'utf8');

assert.match(source, /conclusion-dream-stage/, 'conclusion should use a layered dreamy stage');
assert.match(source, /splitParagraph/, 'long conclusion text should be split before rendering');
assert.match(source, /conclusion-fragment-grid/, 'long reflection text should render as smaller fragments');
assert.match(source, /reflection-chip-card/, 'reflection fragments should use chip cards');
assert.match(source, /gratitude-note-card/, 'thanks text should be split into note cards');
assert.doesNotMatch(
  source,
  /<p[^>]*>\s*{conclusion\.(experience|baggage|thanks)}\s*<\/p>/,
  'long conclusion fields should not be rendered as one paragraph',
);

console.log('conclusion layout contract passed');
