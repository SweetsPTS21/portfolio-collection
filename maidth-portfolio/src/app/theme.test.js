import { describe, expect, it } from "vitest";
import { theme } from "./theme";

describe("dreamy purple theme", () => {
  it("defines glass-friendly dreamy violet tokens", () => {
    expect(theme.colorPrimary).toBe("#B88CFF");
    expect(theme.colorBgContainer).toContain("rgba");
    expect(theme.fontFamily).toContain("Quicksand");
    expect(theme.borderRadius).toBe(20);
  });
});

