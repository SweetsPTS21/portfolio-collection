import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.js/,
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: "http://127.0.0.1:5191",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "chromium-mobile",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:5191",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
