import { range } from './range'
import { Int, verify } from './specs'

export function sum(n: number): number {
  verify(Int, n)

  return range(n).reduce((a, b) => a + b, 0)
}
