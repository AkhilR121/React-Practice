import { expect, test } from 'vitest'
import { maxBy } from './maxBy'

test('maxBy', () => {
  expect(
    maxBy([{ x: 1 }, { x: 3 }, { x: 2 }, { x: 4 }, { x: 0 }, { x: -1 }], 'x'),
  ).toEqual({ x: 4 })

  expect(
    maxBy([{ x: 1 }, { x: 3 }, { x: 2 }, { x: 0 }, { x: -1 }, { x: 4 }], 'x'),
  ).toEqual({ x: 4 })

  expect(
    maxBy([{ x: 4 }, { x: 1 }, { x: 3 }, { x: 2 }, { x: 0 }, { x: -1 }], 'x'),
  ).toEqual({ x: 4 })

  expect(maxBy([{ x: 1 }, { x: 3 }, { x: 2 }], 'x')).toEqual({ x: 3 })
  expect(maxBy([{ x: 1 }, { x: 3 }], 'x')).toEqual({ x: 3 })
  expect(maxBy([{ x: 1 }], 'x')).toEqual({ x: 1 })
  expect(() => maxBy([], 'x')).toThrow()
})
