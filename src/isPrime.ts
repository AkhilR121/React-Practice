import { some } from './some'
import { range } from './range'
import type { Natural } from './specs'

export const isPrime = (n: Natural) => some(range(2, n), i => n % i === 0)
