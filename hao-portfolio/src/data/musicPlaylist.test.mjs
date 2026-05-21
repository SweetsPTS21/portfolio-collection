import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { musicPlaylist } from './musicPlaylist.js';

describe('music playlist data', () => {
  it('defines sidebar tracks from public music paths', () => {
    assert.equal(musicPlaylist.length, 3);

    for (const track of musicPlaylist) {
      assert.equal(typeof track.title, 'string');
      assert.equal(typeof track.artist, 'string');
      assert.match(track.src, /^\/music\/.+\.mp3$/);
    }
  });
});
