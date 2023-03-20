export function filter<T>(pred: (v: T) => boolean) {
  return (arr: readonly T[]): T[] => {
    const result = []
    for (const e of arr) {
      if (pred(e)) {
        result.push(e)
      }
    }

    return result
  }
}
