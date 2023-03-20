export function reduce<T1, T2>(f: (x: T1, acc: T2) => T2, init: T2) {
  return (arr: readonly T1[]): T2 => {
    let result = init
    for (const e of arr) {
      result = f(e, result)
    }

    return result
  }
}
