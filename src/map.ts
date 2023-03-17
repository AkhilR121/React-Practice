export function map<T1, T2>(f: (x: T1) => T2) {
  return (arr: T1[]): T2[] => {
    const result = []
    for (const e of arr) {
      result.push(f(e))
    }

    return result
  }
}
