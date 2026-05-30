import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const files = {
  page: readFileSync('src/pages/GlassHeroAboutPage.jsx', 'utf8'),
  profile: readFileSync('src/features/glass-hero/HeroGlassPanel.jsx', 'utf8'),
  about: readFileSync('src/features/glass-hero/AboutGlassCards.jsx', 'utf8'),
  tools: readFileSync('src/features/glass-hero/ToolBadgeRow.jsx', 'utf8'),
};

assert.match(files.page, /dreamy-hero-stage/, 'hero page should expose layered stage hook');
assert.match(files.page, /Không gian học tập số của Như Quỳnh/, 'hero page should include editorial headline');
assert.match(files.profile, /profile-orbit/, 'profile panel should include orbit visual hook');
assert.match(files.about, /glass-tile-feature/, 'about cards should include feature tile hook');
assert.match(files.tools, /tool-prism-row/, 'tool row should include prism row hook');

console.log('glass hero presentation contract passed');
