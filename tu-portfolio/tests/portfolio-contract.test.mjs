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

  it('exposes the pink prototype theme tokens from the design reference', () => {
    expect(theme.colors.cream).toBe('#FFF4F8');
    expect(theme.colors.warmBeige).toBe('#F8DCE8');
    expect(theme.colors.softPink).toBe('#F6C6D7');
    expect(theme.colors.coral).toBe('#D98AA8');
    expect(theme.colors.sage).toBe('#F1B8CB');
    expect(theme.colors.roseLine).toBe('#E9BFD0');
    expect(theme.colors.oliveText).toBe('#B9859D');
    expect(theme.colors.ink).toBe('#5F4653');
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

    const projectImages = portfolioData.projects.map((project) => project.visual?.image);
    expect(projectImages).toEqual([
      '/assets/decor/decor-folder.png',
      '/assets/decor/decor-law-book.png',
      '/assets/decor/decor-ai-sparkle.png',
      '/assets/decor/decor-laptop.png',
      '/assets/decor/decor-flower-sprig.png',
      '/assets/decor/decor-shield.png',
    ]);

    portfolioData.projects.forEach((project) => {
      expect(project.visual?.image).toMatch(/^\/assets\/decor\/decor-.+\.png$/);
      expect(project.visual?.alt).toContain(project.chapter);
    });
  });

  it('keeps generated source assets in the pink palette', () => {
    const generatedSvgs = [
      'public/assets/generated/card-paper-texture.svg',
      'public/assets/generated/conclusion-soft-panel.svg',
      'public/assets/generated/sweet-legal-background.svg',
    ];
    const retiredColors = ['#FAF6DF', '#EBD9C4', '#EF7C82', '#D8D99A', '#8C8453'];

    portfolioData.projects.forEach((project) => {
      expect(project.accent).toMatch(/^#(?:D98AA8|F1B8CB|F6C6D7|E9BFD0)$/);
    });

    generatedSvgs.forEach((svgPath) => {
      const svg = readFileSync(svgPath, 'utf8').toUpperCase();
      retiredColors.forEach((color) => {
        expect(svg).not.toContain(color);
      });
    });
  });

  it('keeps About hero profile info in the copy and portrait square', () => {
    const aboutSource = readFileSync('src/components/pages/AboutPage.jsx', 'utf8');
    const styles = readFileSync('src/index.css', 'utf8');
    const copyStart = aboutSource.indexOf('className="hero-section__copy"');
    const infoStart = aboutSource.indexOf('className="profile-card__info"');
    const ctaStart = aboutSource.indexOf('className="hero-section__cta-row"');
    const editorialStart = aboutSource.indexOf('className="hero-editorial"');
    const profileCardStart = aboutSource.indexOf('className="profile-card"');
    const portraitRule = styles.match(/\.profile-card__portrait\s*\{[\s\S]*?\}/)?.[0] ?? '';
    const portraitImageRule = styles.match(/\.profile-card__portrait img\s*\{[\s\S]*?\}/)?.[0] ?? '';

    expect(copyStart).toBeGreaterThan(-1);
    expect(infoStart).toBeGreaterThan(copyStart);
    expect(infoStart).toBeLessThan(ctaStart);
    expect(infoStart).toBeLessThan(editorialStart);
    expect(profileCardStart).toBeGreaterThan(editorialStart);
    expect(portraitRule).toContain('aspect-ratio: 1');
    expect(portraitRule).not.toContain('border-radius: 50%');
    expect(portraitImageRule).not.toContain('border-radius: 50%');
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





