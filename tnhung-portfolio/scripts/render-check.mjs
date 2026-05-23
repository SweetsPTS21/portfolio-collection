import { existsSync, mkdirSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const url = 'http://127.0.0.1:5173/';
const outputDir = 'render-check-screenshots';
const viewports = [
  { name: 'mobile-375', width: 375, height: 844 },
  { name: 'tablet-768', width: 768, height: 900 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

mkdirSync(outputDir, { recursive: true });

const failures = [];

for (const viewport of viewports) {
  const screenshot = resolve(`${outputDir}/${viewport.name}.png`);
  const result = spawnSync(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    `--window-size=${viewport.width},${viewport.height}`,
    `--screenshot=${screenshot}`,
    url,
  ], { encoding: 'utf8' });

  if (result.status !== 0) {
    failures.push(`${viewport.name}: Chrome exited with ${result.status}. ${result.stderr}`);
    continue;
  }

  if (!existsSync(screenshot)) {
    failures.push(`${viewport.name}: screenshot was not written.`);
    continue;
  }

  const size = statSync(screenshot).size;
  if (size < 10000) failures.push(`${viewport.name}: screenshot is unexpectedly small (${size} bytes).`);
}

if (failures.length > 0) {
  console.error('Render smoke check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Render smoke check passed. Screenshots saved in ${outputDir}.`);
