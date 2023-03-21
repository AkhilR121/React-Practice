import { expect, test } from 'vitest'
import { map } from './map'
import { pipe } from './pipe'

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
