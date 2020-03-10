import { allOptionsHaveText } from './all-options-have-text'

describe('Test whether all the options of an array have at least one character', () => {

  it('should return false if at least one element is empty', () => {
    const arr = ['a', '', 'c']
    expect(allOptionsHaveText(arr)).toEqual(false)
  })

  it('should return true if no element is empty', () => {
    const arr = ['a', 'b', 'c']
    expect(allOptionsHaveText(arr)).toEqual(true)
  })

  it('should return true if aan empty array is provided', () => {
    const arr = []
    expect(allOptionsHaveText(arr)).toEqual(true)
  })

})
