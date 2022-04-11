import { describe, it, assert } from 'vitest'
import { addLeadingZero, getTimeFromDate } from './timestamp-pad'

describe('Adding a leading zero', () => {
  it('should return "01" when 1 is supplied', () => {
    assert.equal(addLeadingZero(1), '01')
  })

  it('should return "00" when 0 is supplied', () => {
    assert.equal(addLeadingZero(0), '00')
  })

  it('should return "-1" when -1 is supplied', () => {
    assert.equal(addLeadingZero(-1), '-1')
  })

  it('should return "22" when 22 is supplied', () => {
    assert.equal(addLeadingZero(22), '22')
  })
})

describe('Extracting time from date', () => {
  it('should return "09:02:03"', () => {
    const date = new Date('04 Dec 1995 09:02:03 GMT')
    assert.equal(getTimeFromDate(date), "09:02:03")
  })

  it('should return "18:12:03"', () => {
    const date = new Date('04 Dec 1995 18:12:03 GMT')
    assert.equal(getTimeFromDate(date), "18:12:03")
  })

  it('should return "18:12:03"', () => {
    const date = new Date('04 Dec 1995 11:11:11 GMT')
    assert.equal(getTimeFromDate(date), "11:11:11")
  })
})