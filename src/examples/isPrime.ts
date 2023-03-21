import { checked, Natural, range } from '@lib'

export const isPrime = checked(Natural)(n =>
  n === 1 ? false : !range(2, n).some(i => n % i === 0),
)
