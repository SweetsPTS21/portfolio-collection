import { expect, test } from '@playwright/test';

test('portfolio renders the toy-box experience', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('http://127.0.0.1:5179/');

  await expect(page.getByRole('heading', { name: 'Trần Lan Anh' })).toBeVisible();
  await expect(page.locator('.toy-box-scene')).toBeVisible();
  await expect(page.locator('.toy-block')).toHaveCount(8);
  await expect(page.locator('.puzzle-badge').first()).toBeVisible();
  await expect(page.locator('.project-toy-card')).toHaveCount(6);

  await expect(page.getByRole('heading', { level: 2, name: 'ABOUT ME' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'PROJECT' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'CONCLUSION' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài 1: Máy tính và thiết bị ngoại vi' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bài 6: An toàn và liêm chính học thuật' })).toBeVisible();
  await expect(page.getByText('© 2026 • Trần Lan Anh • Digital Portfolio')).toBeVisible();

  const viewButtons = page.getByRole('button', { name: /Mở bài/i });
  await expect(viewButtons).toHaveCount(6);
  await viewButtons.first().click();

  const pdfDialog = page.getByRole('dialog', { name: 'Bài 1: Máy tính và thiết bị ngoại vi' });
  await expect(pdfDialog).toBeVisible();
  await expect(pdfDialog.locator('iframe')).toHaveAttribute('src', /bt1.*\.pdf$/);

  await page.getByRole('button', { name: 'Đóng PDF' }).click();
  await expect(pdfDialog).toBeHidden();

  const blockAnimation = await page
    .locator('.toy-block')
    .first()
    .evaluate((block) => getComputedStyle(block).animationName);
  expect(blockAnimation).toContain('block-bob');
  expect(consoleErrors).toEqual([]);
});
