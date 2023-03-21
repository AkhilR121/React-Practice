import { max } from './max'
import { test, expect } from 'vitest'

test('max', () => {
  expect(max(1, 2, 3)).toBe(3)
  expect(max(3, 3, 1)).toBe(3)
  expect(max(3, 3, 3)).toBe(3)
})
