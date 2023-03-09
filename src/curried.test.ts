import { expect, test } from 'vitest'
import { add } from './curried'

test('curried', () => {
  expect(add(1)(2)(3)).toBe(6)
})
