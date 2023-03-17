import invariant from 'tiny-invariant'
import { Natural, Positive, verify } from './specs'

export function range(start: number, stop?: Natural, step?: number): number[] {
  if (stop === undefined) {
    stop = start
    start = 0
  }
  if (step === undefined) {
    step = 1
  }

  verify(Positive, step)
  invariant(start <= stop, `start(${start}) must be less than stop(${stop})`)

  const result = []
  for (let i = start; i < stop; i += step) {
    result.push(i)
  }

  return result
}
