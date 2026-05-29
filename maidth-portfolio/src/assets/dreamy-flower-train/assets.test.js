import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const assetDir = join(process.cwd(), "src", "assets", "dreamy-flower-train");

describe("dreamy flower train assets", () => {
  it("contains the required eight SVG assets", () => {
    const files = [
      "sky-garden-panorama.svg",
      "flower-train-set.svg",
      "rainbow-lilac-rail-path.svg",
      "cloud-station-set.svg",
      "train-ticket-frames.svg",
      "petal-smoke-particles.svg",
      "luggage-flower-icons.svg",
      "arrival-board-labels.svg",
    ];

    expect(files.every((file) => existsSync(join(assetDir, file)))).toBe(true);
  });
});
