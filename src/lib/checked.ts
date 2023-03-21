import { z } from 'zod'
import { zip } from './zip'

type Args<Specs extends z.ZodTypeAny[]> = {
  [K in keyof Specs]: z.infer<Specs[K]>
}

export function checked<Specs extends z.ZodTypeAny[]>(...specs: Specs) {
  return <R>(fn: (...args: Args<Specs>) => R) => {
    return (...args: Args<Specs>): R => {
      zip(specs, args).forEach(([spec, value]) => spec.parse(value))
      return fn(...args)
    }
  }
}
