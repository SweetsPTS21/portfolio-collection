import { describe, expect, it } from 'vitest';
import {
  focalAssetsByRoute,
  navigationRoutes,
  profile,
  projectChapters,
  reflectionItems,
} from './portfolioData.js';

describe('portfolio data contract', () => {
  it('defines exactly the three README routes', () => {
    expect(navigationRoutes.map((route) => route.path)).toEqual([
      '/about',
      '/projects',
      '/conclusion',
    ]);
  });

  it('keeps six project chapters from portfolio.md', () => {
    expect(projectChapters).toHaveLength(6);
    expect(projectChapters.map((chapter) => chapter.number)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('enriches the about route with a large avatar and custom cards', () => {
    expect(profile.avatarSpec).toEqual(
      expect.objectContaining({
        desktopPx: expect.any(Number),
        mobilePx: expect.any(Number),
        frame: expect.stringMatching(/^avatar-/),
      }),
    );
    expect(profile.avatarSpec.desktopPx).toBeGreaterThanOrEqual(220);
    expect(profile.avatarSpec.mobilePx).toBeGreaterThanOrEqual(200);

    expect(profile.aboutCards).toHaveLength(3);
    for (const card of profile.aboutCards) {
      expect(card).toEqual(
        expect.objectContaining({
          title: expect.any(String),
          text: expect.any(String),
          frame: expect.stringMatching(/^about-frame-/),
          backgroundAsset: expect.any(String),
        }),
      );
      expect(card.palette).toHaveLength(3);
    }
  });

  it('enriches every project card with its own frame, sunken asset, and palette', () => {
    for (const chapter of projectChapters) {
      expect(chapter.card).toEqual(
        expect.objectContaining({
          frame: expect.stringMatching(/^frame-/),
          backgroundAsset: expect.any(String),
          accent: expect.stringMatching(/^accent-/),
          paperLabel: expect.any(String),
        }),
      );
      expect(chapter.card.palette).toHaveLength(3);
    }

    expect(new Set(projectChapters.map((chapter) => chapter.card.frame)).size).toBe(6);
  });

  it('assigns at least two large focal assets per route', () => {
    for (const route of navigationRoutes) {
      const assets = focalAssetsByRoute[route.path];
      expect(assets).toBeDefined();
      expect(assets.length).toBeGreaterThanOrEqual(2);
      expect(assets.every((asset) => asset.kind === 'large-focal')).toBe(true);
      expect(assets.every((asset) => asset.desktopVw >= 30)).toBe(true);
    }
  });

  it('uses neutral study content without restricted subject terms', () => {
    const searchable = JSON.stringify({
      profile,
      projectChapters,
      reflectionItems,
    }).toLowerCase();

    for (const restricted of ['luật', 'pháp lý', 'pháp luật', 'legal', 'law', 'đhqghn']) {
      expect(searchable).not.toContain(restricted);
    }
  });
});
