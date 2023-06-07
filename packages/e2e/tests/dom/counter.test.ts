import { test, expect } from "@playwright/test";

test.describe("Counter DOM", () => {
  let incrementButton, decrementButton, display, resetButton;

  test.beforeEach(async ({ page }) => {
    await page.goto(
      "http://localhost:5173/src/Programs/11.%20DOM/1.%20Counter/counter.html"
    );

    incrementButton = page.locator(".inc-button");

    decrementButton = page.locator(".dec-button");

    resetButton = page.locator(".reset-btn");

    display = page.locator(".disp");
  });

  test("Increment", async () => {
    await expect(display).toHaveText("0");
    await incrementButton.click();
    await expect(display).toHaveText("1");

    for (let i = 0; i < 10; i += 1) {
      await incrementButton.click();
    }

    await expect(display).toHaveText("11");
  });

  test("Decrement", async () => {
    await expect(display).toHaveText("0");
    for (let i = 0; i < 10; i += 1) {
      await decrementButton.click();
    }

    await expect(display).toHaveText("-10");
  });

  test("Reset", async () => {
    let result = 0;
    await expect(display).toHaveText("0");

    for (let i = 0; i < Math.random() * 10; i += 1) {
      result += 1;
      await incrementButton.click();
    }

    for (let i = 0; i < Math.random() * 10; i += 1) {
      result -= 1;
      await decrementButton.click();
    }

    await expect(display).toHaveText(`${result}`);

    await resetButton.click();
    await expect(display).toHaveText("0");
  });
});
