import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

assert.equal(existsSync('public/_redirects'), true, 'Netlify _redirects file must exist');
assert.match(
  readFileSync('public/_redirects', 'utf8'),
  /^\/\*\s+\/index\.html\s+200\s*$/m,
  'Netlify must rewrite SPA routes to index.html',
);

assert.equal(existsSync('wrangler.json'), true, 'Cloudflare wrangler.json file must exist');
const wrangler = JSON.parse(readFileSync('wrangler.json', 'utf8'));
assert.equal(
  wrangler.assets?.not_found_handling,
  'single-page-application',
  'Cloudflare assets must serve index.html for unknown SPA routes',
);

console.log('SPA fallback config exists for Netlify and Cloudflare.');
