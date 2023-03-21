import { expect, test } from 'vitest'
import { minBy } from './minBy'

test('minBy', () => {
  expect(() => minBy([], 'x')).toThrow()
  expect(minBy([{ x: 1 }], 'x')).toEqual({ x: 1 })
  expect(minBy([{ x: 1 }, { x: 3 }], 'x')).toEqual({ x: 1 })
  expect(minBy([{ x: 1 }, { x: 3 }, { x: 2 }], 'x')).toEqual({ x: 1 })
  expect(
    minBy([{ x: 4 }, { x: 1 }, { x: 3 }, { x: 2 }, { x: 0 }, { x: -1 }], 'x'),
  ).toEqual({ x: -1 })
})
