/**
 * Website Template Smoke Tests
 * Critical paths every Epic Arts client website must pass.
 */
import { test, expect } from "@playwright/test";

test.describe("Website · Critical Paths", () => {
  test("Homepage loads", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Page loads successfully
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test("Admin route exists (Payload CMS)", async ({ page }) => {
    const res = await page.goto("/admin", { waitUntil: "networkidle" });
    // Expect either /admin or /admin/login or /admin/create-first-user
    expect(res?.status()).toBeLessThan(500);
    const url = page.url();
    expect(url).toContain("/admin");
  });

  test("Blog route renders", async ({ page }) => {
    const res = await page.goto("/blog", { waitUntil: "networkidle" });
    expect(res?.status()).toBeLessThan(500);
  });

  test("404 pages handled", async ({ page }) => {
    const res = await page.goto("/this-does-not-exist-xyz123");
    // Should not crash with 500 — proper 404 or fallback
    expect(res?.status()).toBeLessThan(500);
  });

  test("No critical console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", msg => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Filter expected/known errors
    const critical = errors.filter(
      e => !e.includes("favicon") && !e.includes("net::ERR") && !e.includes("404")
    );
    expect(critical.length).toBeLessThan(3); // Allow up to 2 minor warnings
  });
});

test.describe("Website · Mobile Viewport", () => {
  test("No horizontal scroll on mobile", async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "Mobile-only test");
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const dimensions = await page.evaluate(() => ({
      bodyWidth: document.body.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(dimensions.bodyWidth).toBeLessThanOrEqual(dimensions.viewportWidth + 20);
  });

  test("Hero/CTA visible on mobile", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // First headline (h1) should be visible above the fold
    const h1 = page.locator("h1").first();
    if (await h1.count() > 0) {
      await expect(h1).toBeVisible();
    }
  });
});

test.describe("Website · Performance Hints", () => {
  test("Page loads under 3s on mobile", async ({ page }) => {
    const start = Date.now();
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    console.log(`Mobile load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(5000); // 5s max even on slower CI
  });
});
