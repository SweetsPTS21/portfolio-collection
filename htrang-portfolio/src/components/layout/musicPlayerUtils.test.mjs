import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  formatTrackTime,
  getNextTrackIndex,
  getPreviousTrackIndex
} from "./musicPlayerUtils.js";

describe("music player utilities", () => {
  it("formats time as m:ss and falls back to 0:00", () => {
    assert.equal(formatTrackTime(0), "0:00");
    assert.equal(formatTrackTime(8), "0:08");
    assert.equal(formatTrackTime(125), "2:05");
    assert.equal(formatTrackTime(Number.NaN), "0:00");
    assert.equal(formatTrackTime(-1), "0:00");
  });

  it("wraps previous and next track indexes", () => {
    assert.equal(getNextTrackIndex(0, 3), 1);
    assert.equal(getNextTrackIndex(2, 3), 0);
    assert.equal(getPreviousTrackIndex(2, 3), 1);
    assert.equal(getPreviousTrackIndex(0, 3), 2);
  });
});
