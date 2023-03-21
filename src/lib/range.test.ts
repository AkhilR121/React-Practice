import { expect, test } from 'vitest'
import { range } from './range'

test('range', () => {
  expect(range(1, 1)).toEqual([])
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
})
