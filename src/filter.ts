export const filter = (
  arr: readonly number[],
  pred: (x: number) => boolean,
): number[] => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}
