import { any } from './any'
import { range } from './range'
import type { Natural } from './specs'

export const isPrime = (n: Natural) => any(range(2, n), i => n % i === 0)
