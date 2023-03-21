import { mul, range } from '@lib'

export function factorial(n: number): number {
  return range(1, n + 1).reduce(mul, 1)
}

function ncr(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

type PascalLine = number[]

function pascalLine(line: number): PascalLine {
  return range(line + 1).map(i => ncr(line, i))
}

export function pascalTriangle(n: number): PascalLine[] {
  return range(n + 1).map(pascalLine)
}
