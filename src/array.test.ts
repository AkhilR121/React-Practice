import { expect, test } from 'vitest'
import { range } from './range'
import { reduce } from './reduce'
import { map } from './map'
import { filter } from './filter'
import { isOdd, plus, squared } from './operators'

test('range', () => {
  expect(range(1, 1)).toEqual([])
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
})

test('map', () => {
  expect(map([], x => x * x)).toEqual([])
  expect(map([1, 2, 3], x => x * x)).toEqual([1, 4, 9])
})

test('filter', () => {
  expect(filter([], x => x % 2 !== 0)).toEqual([])
  expect(filter([1, 2, 3, 4, 5], x => x % 2 !== 0)).toEqual([1, 3, 5])
})

test('reduce', () => {
  expect(reduce([], (acc, x) => acc + x, 0)).toEqual(0)
  expect(reduce([1, 2, 3, 4, 5], (acc, x) => acc + x, 0)).toEqual(15)
})

test('array: basic', () => {
  const factorial = (n: number): number => {
    return reduce(range(1, n + 1), (acc, x) => acc * x, 1)
  }
  expect(factorial(0)).toEqual(1)
  expect(factorial(1)).toEqual(1)
  expect(factorial(5)).toEqual(120)
})

test('array: advanced', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const filtered = filter(arr, isOdd)
  const mapped = map(filtered, squared)
  const result = reduce(mapped, plus, 0)

  expect(result).toBe(165)
})
