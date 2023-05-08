import { expect, test } from "@playwright/test";

// Test URL: https://todomvc.com/examples/vanillajs/

test.describe("TodoMVC App", () => {
  let page;

  test.beforeEach(async ({ page }) => {
    page = page;
    await page.goto("https://todomvc.com/examples/vanillajs/");
  });

  test("should add a new todo item", async ({ page }) => {
    await page.fill(".new-todo", "Test todo");
    await page.keyboard.press("Enter");
    const todoItem = await page.textContent(".todo-list li");
    expect(todoItem).toBe("Test todo");
  });

  test("should mark a todo item as completed", async ({ page }) => {
    await page.fill(".new-todo", "Test todo");
    await page.keyboard.press("Enter");
    await page.click(".todo-list li .toggle");
    const isCompleted = await page.$eval(".todo-list li", item =>
      item.classList.contains("completed")
    );
    expect(isCompleted).toBe(true);
  });

  test("should edit a todo item", async ({ page }) => {
    await page.fill(".new-todo", "Test todo");
    await page.keyboard.press("Enter");
    await page.dblclick(".todo-list li label");
    await page.fill(".todo-list li.editing input.edit", "Updated todo");
    await page.keyboard.press("Enter");
    const updatedTodoItem = await page.textContent(".todo-list li");
    expect(updatedTodoItem).toBe("Updated todo");
  });

  test("should delete a todo item", async ({ page }) => {
    await page.fill(".new-todo", "Test todo");
    await page.keyboard.press("Enter");
    await page.hover(".todo-list li");
    await page.click(".todo-list li .destroy");
    const todoItem = await page.$(".todo-list li");
    expect(todoItem).toBeNull();
  });
});
