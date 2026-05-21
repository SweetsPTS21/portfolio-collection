import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync, spawn } from "node:child_process";
import { PNG } from "pngjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const artifactsDir = join(root, "test-artifacts");
const screenshotPath = join(artifactsDir, "design-screenshot.png");
const referencePath = join(root, "src/assets/page.png");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viteBin = join(root, "node_modules/vite/bin/vite.js");
const reference = PNG.sync.read(readFileSync(referencePath));

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 15000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await wait(300);
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function pixelMismatchRatio(actual, expected) {
  assert.equal(actual.width, expected.width, "screenshot width should match page.png width");
  assert.equal(actual.height, expected.height, "screenshot height should match page.png height");

  let mismatched = 0;
  const total = actual.width * actual.height;
  for (let i = 0; i < actual.data.length; i += 4) {
    if (
      actual.data[i] !== expected.data[i]
      || actual.data[i + 1] !== expected.data[i + 1]
      || actual.data[i + 2] !== expected.data[i + 2]
      || actual.data[i + 3] !== expected.data[i + 3]
    ) {
      mismatched += 1;
    }
  }
  return mismatched / total;
}

function averageRgbDistance(actual, expected) {
  assert.equal(actual.width, expected.width, "screenshot width should match page.png width");
  assert.equal(actual.height, expected.height, "screenshot height should match page.png height");

  let distance = 0;
  const total = actual.width * actual.height;
  for (let i = 0; i < actual.data.length; i += 4) {
    distance += Math.abs(actual.data[i] - expected.data[i]);
    distance += Math.abs(actual.data[i + 1] - expected.data[i + 1]);
    distance += Math.abs(actual.data[i + 2] - expected.data[i + 2]);
  }
  return distance / (total * 3);
}

if (!existsSync(chromePath)) {
  throw new Error(`Chrome executable not found at ${chromePath}`);
}

mkdirSync(artifactsDir, { recursive: true });
rmSync(screenshotPath, { force: true });

execFileSync(process.execPath, [viteBin, "build"], { cwd: root, stdio: "inherit" });

const preview = spawn(process.execPath, [viteBin, "preview", "--host", "127.0.0.1", "--port", "4195"], {
  cwd: root,
  stdio: "ignore",
});

try {
  await waitForServer("http://127.0.0.1:4195");

  execFileSync(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${reference.width},${reference.height}`,
      `--screenshot=${screenshotPath}`,
      "http://127.0.0.1:4195/",
    ],
    { stdio: "inherit" },
  );

  const actual = PNG.sync.read(readFileSync(screenshotPath));
  const expected = reference;
  const mismatch = pixelMismatchRatio(actual, expected);
  const averageDistance = averageRgbDistance(actual, expected);
  const layoutSimilarityFloor = 0.74;
  const colorSimilarity = 1 - (averageDistance / 255);

  assert.ok(
    mismatch > 0.01,
    "screenshot should include mapped text/frame content, not only render page.png directly",
  );

  assert.ok(
    colorSimilarity >= layoutSimilarityFloor,
    `screenshot should retain page.png palette/layout similarity, got color similarity ${colorSimilarity}`,
  );

  assert.ok(
    averageDistance <= 72,
    `screenshot colors should remain close to page.png palette, got average RGB distance ${averageDistance}`,
  );

  console.log(`visual page layout passed; mismatch ratio ${mismatch}; average RGB distance ${averageDistance}; color similarity ${colorSimilarity}`);
} finally {
  preview.kill();
}
