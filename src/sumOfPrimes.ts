import { checked } from './checked'
import { isPrime } from './isPrime'
import { plus } from './operators'
import { range } from './range'
import { Natural } from './specs'

export const sumOfPrimes = checked(Natural)(n =>
  range(n).filter(isPrime).reduce(plus, 0),
)
