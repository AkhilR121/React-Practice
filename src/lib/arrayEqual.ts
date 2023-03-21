import { range } from './range'

export function arrayEqual<T>(fst: readonly T[], snd: readonly T[]): boolean {
  if (fst.length !== snd.length) {
    return false
  }

  return range(fst.length).every(i => fst[i] === snd[i])
}
