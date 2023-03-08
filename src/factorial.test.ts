import { test, expect } from 'vitest'
import { factorial } from './factorial'

test('example', () => {
  expect(factorial(0)).toBe(1)
  expect(factorial(1)).toBe(1)
  expect(factorial(5)).toBe(120)
  expect(() => factorial(-1)).toThrow()
})
