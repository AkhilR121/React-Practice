import { checked, Natural, range } from '@lib'

export const isPerfect = checked(
  [Natural],
  n =>
    range(1, n)
      .filter(i => n % i === 0)
      .reduce((a, b) => a + b, 0) === n,
)
