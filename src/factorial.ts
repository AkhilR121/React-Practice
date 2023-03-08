import invariant from 'tiny-invariant'

export function factorial(n: number): number {
  invariant(n >= 0, 'n must be a positive integer')

  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }

  return fact
}
