import { getPercentageOfVotes } from './get-percentage-of-votes'

describe('Test getPercentageOfVotes', () => {
  it('returns the percentage of votes out of totalVotes, which has decimal places, as a percentage string with no decimal places', () => {
      expect(getPercentageOfVotes(33, 100)).toEqual('33%')
  })

  it('returns the percentage of votes out of totalVotes, which has no decimal places, as a percentage string with no trailing zeros', () => {
      expect(getPercentageOfVotes(4, 10)).toEqual('40%')
  })

  it('returns 0% if the number of votes (1st parameter) is zero', () => {
      expect(getPercentageOfVotes(0, 10)).toEqual('0%')
  })

  it('returns 0% if the total number of votes (2nd parameter) is zero', () => {
      expect(getPercentageOfVotes(40, 0)).toEqual('0%')
  })

  it('returns 0% if both parameters are zero', () => {
      expect(getPercentageOfVotes(40, 0)).toEqual('0%')
  })
})
