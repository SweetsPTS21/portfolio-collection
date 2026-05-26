import { describe, expect, it } from 'vitest';

import { pageConfig } from '../src/app/pageConfig.js';
import { motionConfig } from '../src/app/motionConfig.js';
import { portfolioData } from '../src/data/portfolioData.js';
import { theme } from '../src/theme.js';

describe('tu portfolio contract', () => {
  it('defines the three README pages with stable ids and labels', () => {
    expect(pageConfig.map((page) => page.id)).toEqual([
      'about',
      'projects',
      'conclusion',
    ]);
    expect(pageConfig.map((page) => page.label)).toEqual([
      'About',
      'Projects',
      'Conclusion',
    ]);
  });

  it('contains Cam Tu profile, tools, projects and conclusion content', () => {
    expect(portfolioData.profile.name).toBe('Lê Thị Cẩm Tú');
    expect(portfolioData.profile.major).toBe('Luật Kinh Doanh');
    expect(portfolioData.tools).toContain('ChatGPT');
    expect(portfolioData.tools).toContain('Canva');
    expect(portfolioData.projects).toHaveLength(6);
    expect(portfolioData.projects.map((project) => project.pdf)).toEqual([
      '/docs/bt1.pdf',
      '/docs/bt2.pdf',
      '/docs/bt3.pdf',
      '/docs/bt4.pdf',
      '/docs/bt5.pdf',
      '/docs/bt6.pdf',
    ]);
    expect(portfolioData.conclusion.futureDirection).toContain('chuyên gia pháp lý hiện đại');
  });

  it('exposes the pastel editorial theme tokens from the README', () => {
    expect(theme.colors.coral).toBe('#EF7C82');
    expect(theme.colors.sage).toBe('#D8D99A');
    expect(theme.fonts.body).toContain('Quicksand');
    expect(theme.radii.card).toBe('12px');
    expect(theme.radii.pill).toBe('999px');
  });

  it('keeps motion subtle and reduced-motion aware', () => {
    expect(motionConfig.defaultTransition.duration).toBeLessThanOrEqual(0.55);
    expect(motionConfig.reducedMotion).toBe('user');
  });
});
