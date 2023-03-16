export const reduce = (
  arr: readonly number[],
  f: (acc: number, x: number) => number,
  acc: number,
): number => {
  for (let i = 0; i < arr.length; i++) {
    acc = f(acc, arr[i])
  }
  return acc
}
