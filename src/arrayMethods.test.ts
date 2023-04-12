import { expect, test } from "vitest";
import { classMethod, instanceMethod, pipeMethod } from "./arrayMethods";

test("arrayMethods", () => {
  let arr: number[] = [];

  const ipush = instanceMethod(arr, "concat");
  arr = ipush(100);

  const push = classMethod("concat");

  arr = push(arr, 200);

  const ppush = pipeMethod("concat");
  arr = ppush(arr)(300);

  expect(arr).toEqual([100, 200, 300]);
});
