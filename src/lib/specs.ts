import { z } from 'zod'

export const Natural = z.number().int().nonnegative()
export type Natural = z.infer<typeof Natural>

export const Positive = z.number().int().nonnegative()
export type Positive = z.infer<typeof Positive>

export const Int = z.number().int()
export type Int = z.infer<typeof Int>

export function safeCast<T>(
  schema: z.ZodSchema<T>,
  value: unknown,
  msg?: string,
): T | Error {
  const result = schema.safeParse(value)
  return result.success ? result.data : msg ? new Error(msg) : result.error
}

export function verify<T>(
  schema: z.ZodSchema<T>,
  value: unknown,
): asserts value is z.infer<typeof schema> {
  schema.parse(value)
}

export function is<T>(schema: z.ZodSchema<T>, value: unknown): value is T {
  return schema.safeParse(value).success
}

export type Comparable = string | number | Date
