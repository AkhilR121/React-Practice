import { Natural, checked, plus, range } from '@lib'
import { isPrime } from './isPrime'

export const sumOfPrimes = checked([Natural], n =>
  range(n).filter(isPrime).reduce(plus, 0),
)
