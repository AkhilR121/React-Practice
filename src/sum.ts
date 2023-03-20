import { checked } from './checked'
import { range } from './range'
import { Natural } from './specs'

export const sum = checked(Natural)(n => range(n).reduce((a, b) => a + b, 0))
