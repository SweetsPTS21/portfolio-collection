import { test, expect } from '@playwright/test';

test.describe('Coral Reef Portfolio - Render Check', () => {
  test('Tab 1 (Reef) renders hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Vũ Minh Ánh');
    await expect(page.locator('blockquote')).toContainText('Rời vùng an toàn');
  });

  test('Tab 1 shows strengths and toolsets', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Điểm mạnh cốt lõi')).toBeVisible();
    await expect(page.getByText('Hệ sinh thái công cụ')).toBeVisible();
    // Scroll down to see the strength cards
    await page.getByText('Điểm mạnh cốt lõi').scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Tư duy phản biện' })).toBeVisible();
  });

  test('Tab 2 (Aquarium) renders projects', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();
    await expect(page.getByText('Máy tính & Thiết bị ngoại vi')).toBeVisible();
    await expect(page.getByText('An toàn và Liêm chính học thuật')).toBeVisible();
  });

  test('Tab 2 specimen card opens modal', async ({ page }) => {
    await page.goto('/projects');
    await page.getByText('Máy tính & Thiết bị ngoại vi').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Quá trình thực hiện')).toBeVisible();
    await expect(page.getByText('Xem minh chứng (PDF)')).toBeVisible();
  });

  test('Tab 3 (Pearl) renders conclusion', async ({ page }) => {
    await page.goto('/conclusion');
    await expect(page.getByRole('heading', { name: 'Con dao hai lưỡi' })).toBeVisible();
    await expect(page.getByText('Giá trị cốt lõi tích lũy')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Điểm đắc ý', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Thách thức lớn nhất', exact: true })).toBeVisible();
  });

  test('Navigation between tabs works', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Vũ Minh Ánh');

    // Navigate to Aquarium
    await page.getByRole('link', { name: 'Aquarium' }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByText('Dự án')).toBeVisible();

    // Navigate to Pearl
    await page.getByRole('link', { name: 'Pearl' }).click();
    await expect(page).toHaveURL('/conclusion');
    await expect(page.getByRole('heading', { name: 'Con dao hai lưỡi' })).toBeVisible();

    // Navigate back to Reef
    await page.getByRole('link', { name: 'Reef' }).click();
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toContainText('Vũ Minh Ánh');
  });

  test('All 6 project cards are rendered', async ({ page }) => {
    await page.goto('/projects');
    const cards = page.locator('article');
    await expect(cards).toHaveCount(6);
  });

  test('Responsive: mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Vũ Minh Ánh');
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});
