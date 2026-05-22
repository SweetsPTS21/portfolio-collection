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
assert.match(app, /const\s+backgroundDecorItems/, "App should define outside-page background decor data");
assert.match(app, /BackgroundDecor/, "App should render a dedicated background decor layer");
assert.match(app, /background-decor/, "App should include the background decor class");
assert.match(app, /className="app"[\s\S]*<BackgroundDecor \/>[\s\S]*className="main-page"/, "background decor should render inside app before main page to avoid white side gutters");
assert.match(app, /wrap-icon-1\/wrap1-002-bow-ribbon-large\.png/, "Background decor should use wrap-icon-1 assets");
assert.match(app, /wrap-icon-2\/wrap2-001-tamagotchi-large\.png/, "Background decor should use wrap-icon-2 assets");

for (const index of [1, 2, 3, 4, 5, 6]) {
  assert.match(app, new RegExp(`import\\s+bt${index}Pdf\\s+from\\s+'\\.\\./docs/Bt${index}\\.pdf'`), `App should import Bt${index}.pdf`);
  assert.match(app, new RegExp(`href=\\{bt${index}Pdf\\}`), `Xem them button should link to Bt${index}.pdf`);
}

assert.equal([...app.matchAll(/target="_blank"/g)].length, 6, "All PDF buttons should open in a new tab");
assert.equal([...app.matchAll(/rel="noopener noreferrer"/g)].length, 6, "All PDF buttons should use safe external-tab rel");
assert.equal([...app.matchAll(/<a[\s\S]*?className="text-wrapper-6"[\s\S]*?Xem thêm[\s\S]*?<\/a>/g)].length, 6, "All Xem them controls should be anchor buttons");

for (const keyframe of [
  "page-pop-in",
  "y2k-glitter",
  "kawaii-float",
  "sticker-wiggle",
  "sparkle-twinkle",
  "soft-pulse",
  "tag-soft-pink",
  "pdf-button-pulse",
  "bg-float-slow",
  "bg-wiggle",
  "bg-twinkle",
  "bg-drift",
]) {
  assert.match(css, new RegExp(`@keyframes\\s+${keyframe}`), `CSS should define ${keyframe}`);
}

assert.match(css, /\.background-decor/, "CSS should style the outside-page background decor layer");
assert.match(combinedCssBlock(".background-decor"), /pointer-events:\s*none;/, "background decor should not block page interactions");
assert.match(combinedCssBlock(".app"), /z-index:\s*1;/, "app should stack above outside-page background decor");
assert.match(combinedCssBlock(".main-page"), /z-index:\s*1;/, "main page should stack above its app-level background decor");
assert.match(css, /\.y2k-sparkle-field/, "CSS should style the Y2K sparkle overlay");
assert.match(css, /\.kawaii-shine/, "CSS should style kawaii shine highlights");
assert.match(css, /\.sticker-float/, "CSS should animate sticker float classes");
assert.match(css, /\.main-page\s+\.tag,[\s\S]*?animation:\s*tag-soft-pink/, "profile tags should use a dedicated subtle pink animation");
assert.doesNotMatch(css.match(/\.main-page\s+\.tag,[\s\S]*?\n\}/)?.[0] ?? "", /drop-shadow|#ff77bc|#ff7dcc|#ff8fd3/i, "profile tag animation should not use large or saturated glow colors");
assert.match(keyframesBlock("tag-soft-pink"), /sepia\(/, "profile tag animation should tint PNG tags visibly toward pink");
assert.match(keyframesBlock("tag-soft-pink"), /scale\(1\.01[0-9]\)/, "profile tag animation should include a tiny visible motion");
assert.match(css, /\.project-card:is/, "CSS should apply one hover rule across project cards");
assert.match(css, /prefers-reduced-motion:\s*reduce/, "CSS should respect reduced motion preferences");
assert.match(combinedCssBlock(".main-page .floating-layer"), /pointer-events:\s*none;/, "floating decorative layer should not block project-card hover");
assert.match(combinedCssBlock(".main-page .text-wrapper-6"), /display:\s*block;/, "Xem them PDF links should keep button-like sizing");
assert.match(combinedCssBlock(".main-page .text-wrapper-6"), /text-decoration:\s*none;/, "Xem them PDF links should not render default link underlines");
assert.match(combinedCssBlock(".main-page .text-wrapper-6"), /transition:/, "Xem them PDF links should animate interaction changes");
assert.match(combinedCssBlock(".main-page .text-wrapper-6"), /animation:\s*pdf-button-pulse/, "Xem them PDF links should keep a subtle text animation");
assert.doesNotMatch(combinedCssBlock(".main-page .text-wrapper-6"), /border(?:-radius)?:|box-shadow:|background:/, "Xem them PDF links should not use borders, boxed backgrounds, or fake border shadows");
assert.match(css, /\.main-page\s+\.text-wrapper-6:is\(:hover,\s*:focus-visible\)/, "Xem them PDF links should have hover and keyboard focus effects");
assert.doesNotMatch(css, /\.main-page\s+\.text-wrapper-6::after/, "Xem them PDF links should not render a decorative sparkle border effect");

const kawaiiShine = cssBlock(".kawaii-shine");
assert.doesNotMatch(kawaiiShine, /#(?:8fcaff|96d8ff|9fd7ff)/i, "kawaii shine glow should not spread blue or purple");
assert.match(kawaiiShine, /#(?:ff9ed8|ffb5e5|ff7dcc|ff77bc)/i, "kawaii shine glow should stay pink");

const softPulse = keyframesBlock("soft-pulse");
assert.doesNotMatch(softPulse, /#(?:8fcaff|96d8ff|9fd7ff)/i, "soft-pulse used by kawaii shine should not shift to blue or purple");
