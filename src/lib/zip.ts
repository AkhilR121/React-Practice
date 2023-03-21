import { minBy } from './minBy'
import { range } from './range'

export function zip<T>(...args: ReadonlyArray<T>[]): T[][] {
  const len = minBy(args, 'length').length
  return range(len).map(i => args.map(arr => arr[i]))
}
