export function max2(x: number, y: number): number {
  return x > y ? x : y
}

export function max(first: number, ...rest: number[]): number {
  if (rest.length === 0) {
    return first
  }

  const [fst, ...rst] = rest
  return max2(first, max(fst, ...rst))
}
