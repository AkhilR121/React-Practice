import invariant from 'tiny-invariant'
import { Natural, Positive, verify } from './specs'

export function range(
  start: Natural,
  stop?: Natural,
  step?: Natural,
): number[] {
  if (stop === undefined) {
    stop = start
    start = 0
  }

  if (step === undefined) {
    step = 1
  }

  verify(Natural, start)
  verify(Natural, stop)
  verify(Positive, step)
  invariant(start <= stop, `start(${start}) must be less than stop(${stop})`)

  const result: number[] = []
  for (let i = start; i < stop; i += step) {
    result.push(i)
  }

  return result
}
