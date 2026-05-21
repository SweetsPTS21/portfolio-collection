import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const src = join(root, "src");

const requiredFiles = [
  "src/app/App.jsx",
  "src/app/routes.js",
  "src/app/theme.js",
  "src/pages/OceanReefHeroPage.jsx",
  "src/pages/FishTrailProjectsPage.jsx",
  "src/pages/SeaGardenSkillsPage.jsx",
  "src/pages/BottleNoteContactPage.jsx",
  "src/features/underwater-scene/OceanGradientBackground.jsx",
  "src/features/underwater-scene/SunbeamLayer.jsx",
  "src/features/underwater-scene/BubbleParticleLayer.jsx",
  "src/features/underwater-scene/CoralReefBase.jsx",
  "src/features/ocean-mascot/FishRiveController.jsx",
  "src/features/ocean-mascot/FishSchoolSwim.jsx",
  "src/features/ocean-mascot/CrabWalkAnimation.jsx",
  "src/features/ocean-mascot/StarfishReaction.jsx",
  "src/features/reef-projects/ReefProjectGrid.jsx",
  "src/features/reef-projects/CoralProjectCard.jsx",
  "src/features/reef-projects/ShellProjectBadge.jsx",
  "src/features/reef-projects/FishPassHover.jsx",
  "src/features/sea-garden-skills/SeaGardenScene.jsx",
  "src/features/sea-garden-skills/SeaweedSkillGroup.jsx",
  "src/features/sea-garden-skills/CoralSkillBadge.jsx",
  "src/features/sea-garden-skills/AquaticIconTooltip.jsx",
  "src/components/ui/BubbleButton.jsx",
  "src/components/ui/CoralCard.jsx",
  "src/components/ui/ShellTag.jsx",
  "src/components/ui/WaveDivider.jsx",
  "src/assets/underwater-world/fish-school-set.svg",
  "src/assets/underwater-world/coral-reef-scene.svg",
  "src/assets/underwater-world/crab-starfish-set.svg",
  "src/assets/underwater-world/seaweed-aquatic-plants.svg",
  "src/assets/underwater-world/bubble-particle-set.svg",
  "src/assets/underwater-world/sunbeam-caustics.svg",
  "src/assets/underwater-world/shell-pearl-icons.svg",
  "src/assets/underwater-world/message-bottle-set.svg",
  "src/assets/underwater-world/aquatic-creature-icons.svg",
  "src/assets/underwater-world/clownfish.svg",
  "src/assets/underwater-world/angelfish.svg",
  "src/assets/underwater-world/blue-tang.svg",
  "src/assets/underwater-world/butterflyfish.svg",
  "src/assets/underwater-world/seahorse.svg",
];

const requiredTokens = [
  "underwater-world",
  "BubbleButton",
  "CoralCard",
  "ShellTag",
  "WaveDivider",
  "FishSchoolSwim",
  "BubbleParticleLayer",
  "SeaweedSkillGroup",
  "BottleNoteContactPage",
  "--ocean-blue: #68C7F5",
  "--aqua-bg: #EAF9FF",
  "--sunbeam-cream: #FFF4C8",
  "prefers-reduced-motion",
  "background-side-decorations",
  "background-fish-school-swim",
  "background-fish-pass-hover",
  "background-bottle-note-grid",
  "background-crab-walk-animation",
  "swimming-fish-layer",
  "swim-left-to-right",
  "swim-right-to-left",
  "clownfish.svg",
  "angelfish.svg",
  "blue-tang.svg",
  "butterflyfish.svg",
  "seahorse.svg",
];

const forbiddenTokens = [
  ["fai", "ry-", "mush", "room-", "for", "est"].join(""),
  ["mush", "room"].join(""),
  ["fai", "ry"].join(""),
  ["for", "est"].join(""),
  ["fire", "fly"].join(""),
  ["a", "corn"].join(""),
];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    return path;
  });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Missing required catalog file: ${file}`);
}

const files = [
  join(root, "README.md"),
  join(root, "package.json"),
  ...walk(src).filter((file) => statSync(file).isFile()),
];

const content = files
  .map((file) => readFileSync(file, "utf8"))
  .join("\n")
  .toLowerCase();

for (const token of requiredTokens) {
  assert(content.includes(token.toLowerCase()), `Missing underwater token: ${token}`);
}

for (const token of forbiddenTokens) {
  assert(!content.includes(token), `Theme still contains forbidden old token: ${token}`);
}

const appContent = readFileSync(join(root, "src/app/App.jsx"), "utf8");
const heroContent = readFileSync(join(root, "src/pages/OceanReefHeroPage.jsx"), "utf8");
const projectCardContent = readFileSync(join(root, "src/features/reef-projects/CoralProjectCard.jsx"), "utf8");
const bottlePageContent = readFileSync(join(root, "src/pages/BottleNoteContactPage.jsx"), "utf8");

assert(appContent.includes("BackgroundSideDecorations"), "App must render side background decorations");
assert(appContent.includes("SwimmingFishLayer"), "App must render swimming fish background layer");
assert(!heroContent.includes("<FishSchoolSwim"), "FishSchoolSwim must not render inside hero content");
assert(!projectCardContent.includes("<FishPassHover"), "FishPassHover must not render inside project card content");
assert(!bottlePageContent.includes("messageBottleSet"), "Bottle note asset must not render inside page content");
assert(!bottlePageContent.includes("<CrabWalkAnimation"), "CrabWalkAnimation must not render inside page content");

console.log("underwater theme verification passed");
