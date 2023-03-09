export function findIndex(
  arr: number[],
  val: number,
  pos = 0,
): number {
  for (let i = pos; i < arr.length; i += 1) {
    if (arr[i] === val) {
      return i
    }
  }

  return -1
}
