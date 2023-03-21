import { expect, test } from 'vitest'
import { reduce } from './reduce'
import { pipe } from './pipe'

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
