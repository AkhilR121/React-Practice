import { expect, test } from 'vitest'
import { filter } from './filter'
import { map } from './map'
import { isOdd, plus, squared } from './operators'
import { range } from './range'
import { reduce } from './reduce'
import { pipe } from './pipe'

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
