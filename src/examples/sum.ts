import { checked, Natural, range } from '@lib'

export const sum = checked([Natural], n => range(n).reduce((a, b) => a + b, 0))
