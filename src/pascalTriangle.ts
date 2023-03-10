// pascalTriangle
// pascalLine
// ncr
// factorial

export function factorial(n: number): number {
  let fact = 1
  for (let i = 1; i <= n; i += 1) {
    fact *= i
  }
  return fact
}

function ncr(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

type PascalLine = number[]
// 3c0 3c1 3c2 3c3
function pascalLine(line: number): PascalLine {
  const result: number[] = []

  for (let i = 0; i <= line; i += 1) {
    result.push(ncr(line, i))
  }
  return result
}

export function pascalTriangle(n: number): PascalLine[] {
  const result: PascalLine[] = []

  for (let i = 0; i <= n; i += 1) {
    result.push(pascalLine(i))
  }

  return result
}
