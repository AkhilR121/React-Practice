import { range } from './range'

export function arrayEqual<T>(
  fst: readonly T[],
  snd: readonly T[],
  eq = (fst: T, snd: T): boolean => fst === snd,
): boolean {
  if (fst.length !== snd.length) {
    return false
  }

  return range(fst.length).every(i => eq(fst[i], snd[i]))
}
