import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  formatTrackTime,
  getNextTrackIndex,
  getPreviousTrackIndex,
} from './musicPlayerUtils.js';

describe('music player utilities', () => {
  it('formats track time as m:ss and falls back to 0:00', () => {
    assert.equal(formatTrackTime(0), '0:00');
    assert.equal(formatTrackTime(7), '0:07');
    assert.equal(formatTrackTime(75), '1:15');
    assert.equal(formatTrackTime(Number.NaN), '0:00');
  });

  it('wraps next and previous track indexes across the playlist', () => {
    assert.equal(getNextTrackIndex(0, 3), 1);
    assert.equal(getNextTrackIndex(2, 3), 0);
    assert.equal(getPreviousTrackIndex(2, 3), 1);
    assert.equal(getPreviousTrackIndex(0, 3), 2);
  });
});
