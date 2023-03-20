import { isPrime } from './isPrime'
import { plus } from './operators'
import { range } from './range'

export const sumOfPrimes = (n: number): number =>
  range(n).filter(isPrime).reduce(plus, 0)
