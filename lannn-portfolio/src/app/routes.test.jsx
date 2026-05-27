import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { appRoutes, navItems } from "./routes";
import { theme } from "./theme";

describe("lannn route and stack contract", () => {
  it("defines only three navigation routes plus root about alias", () => {
    expect(navItems.map((item) => item.path)).toEqual(["/about", "/projects", "/conclusion"]);
    expect(appRoutes.map((route) => route.path)).toEqual(["/", "/about", "/projects", "/conclusion"]);
  });

  it("uses Lan red-orange-yellow theme", () => {
    expect(theme.id).toBe("sunset-concert-law-diary");
    expect(theme.color.primary).toBe("#D9362B");
    expect(theme.color.accentOrange).toBe("#F97316");
    expect(theme.color.accentGold).toBe("#F7B801");
  });

  it("does not depend on Tailwind", () => {
    const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    expect(Object.keys(allDeps)).not.toContain("tailwindcss");
    expect(Object.keys(allDeps)).not.toContain("@tailwindcss/vite");
  });
});
