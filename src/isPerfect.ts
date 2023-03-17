import { range } from './range'
import type { Natural } from './specs'

export const isPerfect = (n: Natural) =>
  range(1, n)
    .filter(i => n % i === 0)
    .reduce((a, b) => a + b, 0) === n
