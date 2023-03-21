import { range } from './range'

function defaultEq<T>(fst: T, snd: T): boolean {
  return fst === snd
}

export function arrayEqual<T>(
  fst: readonly T[],
  snd: readonly T[],
  eq = defaultEq,
): boolean {
  if (!eq(fst.length, snd.length)) {
    return false
  }

  return range(fst.length).every(i => eq(fst[i], snd[i]))
}
