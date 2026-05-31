import { existsSync, readFileSync } from 'node:fs';

const css = readFileSync('src/index.css', 'utf8');
const navbar = readFileSync('src/components/Navbar.jsx', 'utf8');
const background = readFileSync('src/components/Background.jsx', 'utf8');
const portfolio = readFileSync('src/data/portfolio.js', 'utf8');
const projectsComponent = readFileSync('src/components/Projects.jsx', 'utf8');

const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return [0, 2, 4].map((offset) => Number.parseInt(clean.slice(offset, offset + 2), 16) / 255);
}

function channelToLinear(value) {
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(channelToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(foreground, background) {
  const light = Math.max(luminance(foreground), luminance(background));
  const dark = Math.min(luminance(foreground), luminance(background));
  return (light + 0.05) / (dark + 0.05);
}

const mutedMatch = css.match(/--muted:\s*(#[0-9a-fA-F]{6})/);
const muted = mutedMatch?.[1];

expect(existsSync('eslint.config.js'), 'ESLint flat config is missing.');
expect(/prefers-reduced-motion/.test(navbar), 'Navbar scroll behavior does not read prefers-reduced-motion.');
expect(!/scrollIntoView\(\{\s*behavior:\s*['"]smooth['"]\s*\}\)/.test(navbar), 'Navbar still uses unconditional smooth scroll.');
expect(/scroll-padding-top/.test(css), 'Global CSS is missing scroll-padding-top for fixed navbar anchors.');
expect(/scroll-margin-top/.test(css), 'Section targets are missing scroll-margin-top for fixed navbar anchors.');
expect(!/body\s*\{[^}]*overflow-x:\s*hidden/s.test(css), 'Body still masks horizontal overflow with overflow-x: hidden.');
expect(muted && contrast(muted, '#f5efff') >= 4.5, `Muted text contrast is below 4.5:1 over bg-mid. Current: ${muted ?? 'missing'}.`);
expect(background.includes("../assets/planet-1.png"), 'Background does not import the new planet-1.png asset.');
expect(background.includes("../assets/planet-2.png"), 'Background does not import the new planet-2.png asset.');
expect(/digital-bg__planet--one/.test(css), 'CSS is missing placement for the first large background planet.');
expect(/digital-bg__planet--two/.test(css), 'CSS is missing placement for the second large background planet.');
expect(/\.conclusion-skill\s*\{[^}]*var\(--shadow-card\)/s.test(css), 'Conclusion skill cards should use the stronger glass-card shadow.');
for (const pdf of ['Bt1.pdf', 'Bt2.pdf', 'Bt3.pdf', 'Bt4.pdf', 'Bt5.pdf', 'Bt6.pdf']) {
  expect(portfolio.includes(`../assets/${pdf}`), `Project data does not import ${pdf}.`);
}
expect((portfolio.match(/pdf:/g) ?? []).length === 6, 'Each of the six projects should expose a pdf field.');
expect(/project\.pdf/.test(projectsComponent), 'Project cards do not render project PDF links.');
expect(/target="_blank"/.test(projectsComponent), 'Project PDF links should open in a new tab.');

if (failures.length > 0) {
  console.error('Quality check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Quality check passed.');
