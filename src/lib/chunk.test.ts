import { expect, test } from 'vitest'
import { chunk } from './chunk'

test('chunks', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10],
  ])
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ])
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ])
  expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
    [1, 2, 3],
    [4, 5],
  ])
  expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]])
  expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]])
  expect(chunk([1, 2], 3)).toEqual([[1, 2]])
  expect(chunk([1], 3)).toEqual([[1]])
  expect(chunk([], 3)).toEqual([])
})
