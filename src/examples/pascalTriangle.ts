import { Natural, Positive, checked, mul, range } from '@lib'

export const factorial = checked([Natural], n => range(1, n + 1).reduce(mul, 1))

const ncr = (n: number, r: number) =>
  factorial(n) / (factorial(r) * factorial(n - r))

type PascalLine = number[]

const pascalLine = (line: number): PascalLine =>
  range(line + 1).map(i => ncr(line, i))

export const pascalTriangle = checked([Positive], (n): PascalLine[] =>
  range(n + 1).map(pascalLine),
)
