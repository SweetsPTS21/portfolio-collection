import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SvgSceneLayer } from "./SvgSceneLayer";

describe("SvgSceneLayer background upgrade", () => {
  it("renders five upgraded large animated background assets", () => {
    render(<SvgSceneLayer />);

    const upgradedLayers = [
      "sceneLayer__sunHalo",
      "sceneLayer__vinyl",
      "sceneLayer__bookStack",
      "sceneLayer__spotlights",
      "sceneLayer__musicNotes",
    ];

    for (const className of upgradedLayers) {
      expect(document.querySelector(`.${className}`)).not.toBeNull();
    }

    expect(screen.getByTestId("scene-layer").querySelectorAll("img")).toHaveLength(8);
  });
});
