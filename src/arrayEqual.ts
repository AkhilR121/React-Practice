import { every } from './every'
import { range } from './range'

export function arrayEqual<T>(fst: readonly T[], snd: readonly T[]): boolean {
  if (fst.length !== snd.length) {
    return false
  }

  return every(range(fst.length), i => fst[i] === snd[i])
}
