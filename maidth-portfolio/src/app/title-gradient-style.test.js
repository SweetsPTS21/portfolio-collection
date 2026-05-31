import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const cssPath = resolve(dirname(fileURLToPath(import.meta.url)), "../index.css");

describe("title gradient style", () => {
  it("applies clipped gradient text to large headings", () => {
    const css = readFileSync(cssPath, "utf8").replace(/\s+/g, " ");

    expect(css).toContain("--heading-gradient:");
    expect(css).toContain(".station-heading h1, .profile-ticket h1");
    expect(css).toContain("background: var(--heading-gradient)");
    expect(css).toContain("-webkit-background-clip: text");
    expect(css).toContain("background-clip: text");
    expect(css).toContain("color: transparent");
    expect(css).not.toMatch(
      /\.station-heading h1, \.profile-ticket h1, \.project-car h2/,
    );
    expect(css).not.toMatch(/\.modal-heading h2 \{[^}]*background: var\(--heading-gradient\)/);
  });

  it("applies a dimmer gradient to h2 headings", () => {
    const css = readFileSync(cssPath, "utf8").replace(/\s+/g, " ");

    expect(css).toContain("--heading-secondary-gradient:");
    expect(css).toContain(".project-car h2, .arrival-section h2, .arrival-card h2, .modal-heading h2");
    expect(css).toContain("background: var(--heading-secondary-gradient)");
    expect(css).not.toMatch(/\.project-car h2,[^{]+\{[^}]*background: var\(--heading-gradient\)/);
  });
});
