import { getQuestionNumberFromUrl } from './get-question-number-from-url'

describe('Test getQuestionNumber. Extracts and returns the number in the url after the last occurrence of the character supplied by the second parameter', () => {

  it('Retruns the number after the "/"', () => {
    expect(getQuestionNumberFromUrl('get/number/after/last/forward/slash/999', '/')).toEqual('999')
  })

  it('Retruns the number after the ":"', () => {
    expect(getQuestionNumberFromUrl('get/number/after/last/forward/colon:123', ':')).toEqual('123')
  })

})
