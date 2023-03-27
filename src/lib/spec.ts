import { z } from "zod";

export const Natural = z.number().int().nonnegative();
export type Natural = z.infer<typeof Natural>;

export const Positive = z.number().int().nonnegative();
export type Positive = z.infer<typeof Positive>;

export const Int = z.number().int();
export type Int = z.infer<typeof Int>;

export function safeCast<T>(
  schema: z.ZodSchema<T>,
  value: unknown,
  msg?: string
): T | Error {
  const result = schema.safeParse(value);
  return result.success
    ? result.data
    : msg === undefined
    ? new Error(msg)
    : result.error;
}

export function cast<T>(
  schema: z.ZodSchema<T>,
  value: unknown
): z.infer<typeof schema> {
  return schema.parse(value);
}

export function verify<T>(
  schema: z.ZodSchema<T>,
  value: unknown
): asserts value is z.infer<typeof schema> {
  schema.parse(value);
}

export function verifyArray(arr: unknown[]): asserts arr is unknown[] {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array");
  }
}

export function is<T>(schema: z.ZodSchema<T>, value: unknown): value is T {
  return schema.safeParse(value).success;
}

export type Comparable = string | number | Date;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function checked<
  Args extends [] | [z.ZodTypeAny, ...z.ZodTypeAny[]],
  F extends (...args: Array<z.infer<Args[number]>>) => unknown
>(specs: Args, f: F) {
  return z.function(z.tuple(specs)).implement(f);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function checkedReturn<
  Args extends [] | [z.ZodTypeAny, ...z.ZodTypeAny[]],
  F extends (...args: Array<z.infer<Args[number]>>) => unknown,
  R extends z.ZodTypeAny
>(specs: Args, ret: R, f: F) {
  return z.function(z.tuple(specs), ret).implement(f);
}
