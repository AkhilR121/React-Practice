import { expect, test } from 'vitest'
import { partial } from './partial'

test('partial', () => {
  const add = (x: number, y: number, z: number, w: number) => x + y + z + w
  expect(partial(add, 1, 2)(3, 4)).toBe(10)
})
