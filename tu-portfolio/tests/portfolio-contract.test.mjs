import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';

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
    expect(portfolioData.profile.avatar).toBe('/assets/avatar.jpg');
    expect(existsSync('public/assets/avatar.jpg')).toBe(true);
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

  it('defines generated PNG visual assets and project card imagery', () => {
    expect(Object.keys(portfolioData.visualAssets ?? {}).sort()).toEqual([
      'background',
      'cardTexture',
      'conclusionPanel',
      'decorations',
      'projectStickerSheet',
    ]);

    Object.entries(portfolioData.visualAssets)
      .filter(([key]) => key !== 'decorations')
      .forEach(([, assetPath]) => {
      expect(assetPath).toMatch(/^\/assets\/generated\/.+\.png$/);
    });

    expect(portfolioData.visualAssets.decorations).toHaveLength(8);
    portfolioData.visualAssets.decorations.forEach((decoration) => {
      expect(decoration.src).toMatch(/^\/assets\/decor\/decor-.+\.png$/);
      expect(decoration.className).toMatch(/^background-scene__decor--/);
      expect(decoration.alt).toBe('');
    });

    portfolioData.projects.forEach((project) => {
      expect(project.visual?.image).toMatch(/^\/assets\/generated\/.+\.png$/);
      expect(project.visual?.alt).toContain(project.chapter);
    });
  });

  it('keeps motion subtle and reduced-motion aware', () => {
    expect(motionConfig.defaultTransition.duration).toBeLessThanOrEqual(0.55);
    expect(motionConfig.reducedMotion).toBe('user');
  });

  it('keeps the background scene layered and kinetic', () => {
    const sceneSource = readFileSync('src/components/layout/BackgroundScene.jsx', 'utf8');
    const styles = readFileSync('src/index.css', 'utf8');

    expect(sceneSource).toContain('background-scene__motion-field');
    expect(sceneSource.match(/background-scene__streak/g)).toHaveLength(3);
    expect(sceneSource.match(/background-scene__spark/g)).toHaveLength(6);

    [
      'ambient-pan',
      'decor-bob',
      'decor-orbit',
      'spark-rush',
      'streak-sweep',
      'paper-glide',
      'dot-drift',
      'flower-spin',
    ].forEach((animationName) => {
      expect(styles).toContain(`@keyframes ${animationName}`);
    });

    expect(styles).toMatch(/@media \(prefers-reduced-motion: reduce\)[\s\S]*background-scene/);
  });
});
