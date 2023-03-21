import { expect, test } from 'vitest'
import { zip } from './zip'

test('zip', () => {
  expect(zip([1, 2], [3, 4], [5, 6, 7])).toEqual([
    [1, 3, 5],
    [2, 4, 6],
  ])
  expect(zip([1, 2], [3, 4], [5, 6])).toEqual([
    [1, 3, 5],
    [2, 4, 6],
  ])
  expect(zip([1, 2], [3, 4])).toEqual([
    [1, 3],
    [2, 4],
  ])
  expect(zip([1, 2, 3])).toEqual([[1], [2], [3]])
  expect(zip([1])).toEqual([[1]])
  expect(zip([])).toEqual([])
})
