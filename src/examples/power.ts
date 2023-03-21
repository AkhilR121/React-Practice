import { Natural, checked, range } from '@lib'
import { z } from 'zod'

export const power = checked(
  z.number(),
  Natural,
)((x, n) => range(n).reduce(a => a * x, 1))
