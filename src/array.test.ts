import { expect, test } from 'vitest'
import { filter } from './filter'
import { map } from './map'
import { isOdd, plus, squared } from './operators'
import { range } from './range'
import { reduce } from './reduce'
import { pipe } from './pipe'

test('range', () => {
  expect(range(1, 1)).toEqual([])
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
})

test('map', () => {
  expect(
    pipe(
      [],
      map(x => x * x),
    ),
  ).toEqual([])
  expect(
    pipe(
      [1, 2, 3],
      map(x => x * x),
    ),
  ).toEqual([1, 4, 9])
})

test('filter', () => {
  expect(
    pipe(
      [],
      filter(x => x % 2 !== 0),
    ),
  ).toEqual([])
  expect(
    pipe(
      [1, 2, 3, 4, 5],
      filter(x => x % 2 !== 0),
    ),
  ).toEqual([1, 3, 5])
})

test('reduce', () => {
  expect(
    pipe(
      [],
      reduce((acc, x) => acc + x, 0),
    ),
  ).toEqual(0)
  expect(
    pipe(
      [1, 2, 3, 4, 5],
      reduce((acc, x) => acc + x, 0),
    ),
  ).toEqual(15)
})

test('array: basic', () => {
  const factorial = (n: number): number => {
    return pipe(
      range(1, n + 1),
      reduce((acc, x) => acc * x, 1),
    )
  }
  expect(factorial(0)).toEqual(1)
  expect(factorial(1)).toEqual(1)
  expect(factorial(5)).toEqual(120)
})

test('array: advanced', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const result = pipe(arr, filter(isOdd), map(squared), reduce(plus, 0))

  expect(result).toBe(165)
})
