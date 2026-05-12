import { expect, test } from '@playwright/test';

test('portfolio renders the flower-market experience without project modal buttons', async ({
  page,
}) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Phạm Yến Vi' })).toBeVisible();
  await expect(page.locator('.flower-market-app')).toBeVisible();
  await expect(page.locator('.floral-background')).toBeVisible();
  await expect(page.locator('.falling-petal').first()).toBeVisible();
  await expect(page.locator('.floating-bloom')).toHaveCount(5);
  await expect(page.locator('.market-sparkle')).toHaveCount(12);
  await expect(page.locator('.stall-awning')).toBeVisible();
  await expect(page.locator('.market-counter')).toBeVisible();
  await expect(page.locator('.market-crate')).toHaveCount(3);
  if ((page.viewportSize()?.width ?? 0) <= 500) {
    const crateBoxes = await page.locator('.market-crate').evaluateAll((nodes) =>
      nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          width: Math.round(rect.width),
        };
      }),
    );

    expect(crateBoxes[1].x).toBe(crateBoxes[0].x);
    expect(crateBoxes[2].x).toBe(crateBoxes[0].x);
    expect(crateBoxes[1].y).toBeGreaterThan(crateBoxes[0].y);
    expect(crateBoxes[2].y).toBeGreaterThan(crateBoxes[1].y);
    expect(crateBoxes.every(({ width }) => width >= 280)).toBe(true);
  }
  await expect(page.locator('.twine-line').first()).toBeVisible();
  await expect(page.locator('.ribbon-label').first()).toBeVisible();
  await expect(page.locator('.market-skills .hanging-tag')).toHaveCount(5);
  await expect(page.locator('.market-skills .seed-packet')).toHaveCount(3);
  await expect(page.locator('.market-skills .market-note')).toHaveCount(3);
  await expect(page.locator('.market-skills .tool-chip')).toHaveCount(6);
  await expect(page.locator('.project-card')).toHaveCount(6);
  await expect(page.locator('.project-card .bouquet-wrap')).toHaveCount(6);
  const projectHeadingGap = await page
    .locator('.bouquet-projects .section-heading')
    .evaluate((node) => {
      const title = node.querySelector('.section-title').getBoundingClientRect();
      const intro = node.querySelector('p').getBoundingClientRect();
      return Math.round(intro.top - title.bottom);
    });
  expect(projectHeadingGap).toBeLessThanOrEqual(8);
  await expect(page.getByRole('button', { name: /mở bài|open|pdf/i })).toHaveCount(
    0,
  );
  await expect(
    page.getByText('© 2026 • Phạm Yến Vi • Digital Portfolio'),
  ).toBeVisible();

  const bouquetAnimation = await page
    .locator('.hero-bouquet')
    .evaluate((node) => getComputedStyle(node).animationName);
  const backgroundAnimations = await page.evaluate(() => ({
    pattern: getComputedStyle(document.querySelector('.floral-pattern'))
      .animationName,
    petal: getComputedStyle(document.querySelector('.falling-petal'))
      .animationName,
    bloom: getComputedStyle(document.querySelector('.floating-bloom'))
      .animationName,
    sparkle: getComputedStyle(document.querySelector('.market-sparkle'))
      .animationName,
  }));

  expect(bouquetAnimation).toContain('bouquet-bloom');
  expect(backgroundAnimations.pattern).toContain('pattern-breathe');
  expect(backgroundAnimations.petal).toContain('petal-drift');
  expect(backgroundAnimations.bloom).toContain('bloom-float');
  expect(backgroundAnimations.sparkle).toContain('sparkle-drift');
  expect(consoleErrors).toEqual([]);
});
