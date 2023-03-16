export const map = (
  arr: readonly number[],
  f: (x: number) => number,
): number[] => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]))
  }

  return result
}
