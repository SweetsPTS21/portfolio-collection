import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:5179/',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
