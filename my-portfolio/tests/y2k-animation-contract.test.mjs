import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");

const app = read("src/App.jsx");
const css = read("src/index.css");

const cssBlock = (selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`${escaped}\\s*\\{[\\s\\S]*?\\n\\}`));
  assert.ok(match, `${selector} block should exist`);
  return match[0];
};

const keyframesBlock = (name) => {
  const start = css.indexOf(`@keyframes ${name}`);
  assert.notEqual(start, -1, `${name} keyframes should exist`);
  const next = css.indexOf("@keyframes", start + 1);
  return css.slice(start, next === -1 ? undefined : next);
};

const combinedCssBlock = (selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = [...css.matchAll(new RegExp(`${escaped}\\s*\\{[\\s\\S]*?\\n\\}`, "g"))];
  assert.ok(matches.length, `${selector} block should exist`);
  return matches.map((match) => match[0]).join("\n");
};

assert.match(app, /framer-motion/, "App should use framer-motion for staged page animation");
assert.match(app, /motion\./, "App should render motion elements");
assert.match(app, /y2k-sparkle-field/, "App should include a Y2K sparkle overlay field");
assert.match(app, /kawaii-shine/, "App should mark highlight elements for kawaii shine effects");
assert.match(app, /sticker-float/, "App should mark sticker assets for ambient floating effects");

for (const keyframe of [
  "page-pop-in",
  "y2k-glitter",
  "kawaii-float",
  "sticker-wiggle",
  "sparkle-twinkle",
  "soft-pulse",
]) {
  assert.match(css, new RegExp(`@keyframes\\s+${keyframe}`), `CSS should define ${keyframe}`);
}

assert.match(css, /\.y2k-sparkle-field/, "CSS should style the Y2K sparkle overlay");
assert.match(css, /\.kawaii-shine/, "CSS should style kawaii shine highlights");
assert.match(css, /\.sticker-float/, "CSS should animate sticker float classes");
assert.match(css, /\.project-card:is/, "CSS should apply one hover rule across project cards");
assert.match(css, /prefers-reduced-motion:\s*reduce/, "CSS should respect reduced motion preferences");
assert.match(combinedCssBlock(".main-page .floating-layer"), /pointer-events:\s*none;/, "floating decorative layer should not block project-card hover");

const kawaiiShine = cssBlock(".kawaii-shine");
assert.doesNotMatch(kawaiiShine, /#(?:8fcaff|96d8ff|9fd7ff)/i, "kawaii shine glow should not spread blue or purple");
assert.match(kawaiiShine, /#(?:ff9ed8|ffb5e5|ff7dcc|ff77bc)/i, "kawaii shine glow should stay pink");

const softPulse = keyframesBlock("soft-pulse");
assert.doesNotMatch(softPulse, /#(?:8fcaff|96d8ff|9fd7ff)/i, "soft-pulse used by kawaii shine should not shift to blue or purple");
