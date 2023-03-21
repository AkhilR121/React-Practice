import { expect, test } from 'vitest'
import { isDateValid } from './isDateValid'

test('isDateValid', () => {
  expect(isDateValid(1000, 1, 1)).toBeFalsy()
  expect(isDateValid(2000, 0, 1)).toBeFalsy()
  expect(isDateValid(2000, 13, 1)).toBeFalsy()

  expect(isDateValid(1900, 2, 29)).toBeFalsy()

  expect(isDateValid(2000, 1, 0)).toBeFalsy()
  expect(isDateValid(2000, 1, 32)).toBeFalsy()
  expect(isDateValid(2000, 2, 30)).toBeFalsy()
  expect(isDateValid(2000, 2, 29)).toBeTruthy()
  expect(isDateValid(2001, 2, 29)).toBeFalsy()

  expect(isDateValid(2000, 4, 31)).toBeFalsy()
  expect(isDateValid(2000, 6, 31)).toBeFalsy()
  expect(isDateValid(2000, 9, 31)).toBeFalsy()
  expect(isDateValid(2000, 11, 31)).toBeFalsy()
  expect(isDateValid(2000, 4, 30)).toBeTruthy()
  expect(isDateValid(2000, 6, 30)).toBeTruthy()
  expect(isDateValid(2000, 9, 30)).toBeTruthy()
  expect(isDateValid(2000, 11, 30)).toBeTruthy()
  expect(isDateValid(2000, 12, 31)).toBeTruthy()
})
