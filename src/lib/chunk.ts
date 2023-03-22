import { Natural, verify } from './specs'

export function chunk<T>(arr: readonly T[], size: Natural): T[][] {
  verify(Natural, size)

  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }

  return result
}
