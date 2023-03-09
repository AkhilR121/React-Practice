import { findIndex } from './findIndex'
import { expect, test } from 'vitest'

test('findIndex', () => {
  expect(findIndex([1, 2, 3], 2)).toBe(1)
  expect(findIndex([1, 2, 3], 4)).toBe(-1)
  expect(findIndex([1, 2, 3], 2, 1)).toBe(1)
  expect(findIndex([1, 2, 3], 2, 2)).toBe(-1)
})
