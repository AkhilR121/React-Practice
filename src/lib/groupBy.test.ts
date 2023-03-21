import { expect, test } from 'vitest'
import { groupBy } from './groupBy'

test('groupBy', () => {
  expect(
    groupBy(['1.2', '1.4', '2.4', '2.7', '3'], x => Math.floor(+x)),
  ).toEqual({
    1: ['1.2', '1.4'],
    2: ['2.4', '2.7'],
    3: ['3'],
  })
})
