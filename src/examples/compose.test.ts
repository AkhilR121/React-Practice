import { expect, test } from 'vitest'
import { compose } from './compose'

test('compose', () => {
  const add1 = (x: number) => x + 1
  const mul3 = (x: number) => x * 3
  const add1Mul3 = compose(mul3, add1)
  expect(add1Mul3(1)).toBe(6)
})
