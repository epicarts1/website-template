import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Config für Epic Arts Website Template
 * Tests gegen 4 Viewports (Desktop, Mobile Safari, Mobile Chrome, Tablet)
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 30 * 1000,
  expect: { timeout: 10 * 1000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [["html", { open: "never" }], ["github"]]
    : [["html", { open: "on-failure" }], ["list"]],

  use: {
    baseURL: process.env.E2E_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 14"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "Tablet",
      use: { ...devices["iPad (gen 7)"] },
    },
  ],

  webServer: process.env.CI ? undefined : {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
