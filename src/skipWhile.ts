export function skipWhile<T>(arr: readonly T[], f: (v: T) => boolean): T[] {
  for (let i = 0; i < arr.length; i += 1) {
    if (!f(arr[i])) {
      return arr.slice(i)
    }
  }

  return []
}
