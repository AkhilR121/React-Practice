import { range } from './range'
import { Positive, verify } from './specs'

export function power(x: number, n: number): number {
  verify(Positive, n)

  return range(n).reduce(a => a * x, 1)
}
