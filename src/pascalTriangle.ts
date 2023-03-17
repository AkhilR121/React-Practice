import { range } from './range'

export function factorial(n: number): number {
  return range(1, n + 1).reduce((acc, x) => acc * x, 1)
}

function ncr(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

type PascalLine = number[]

function pascalLine(line: number): PascalLine {
  return range(0, line + 1).map(i => ncr(line, i))
}

export function pascalTriangle(n: number): PascalLine[] {
  return range(0, n + 1).map(pascalLine)
}
