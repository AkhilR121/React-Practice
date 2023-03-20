import { checked } from './checked'
import { range } from './range'
import { Natural } from './specs'

export const isPerfect = checked(Natural)(
  n =>
    range(1, n)
      .filter(i => n % i === 0)
      .reduce((a, b) => a + b, 0) === n,
)
