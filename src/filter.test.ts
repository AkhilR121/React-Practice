import { expect, test } from 'vitest'
import { filter } from './filter'
import { pipe } from './pipe'

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
