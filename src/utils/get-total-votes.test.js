import { getTotalVotes } from './get-total-votes'

describe('Test getTotalVotes', () => {
  it('returns the summation of the "votes" property of each element in the array', () => {
    const arr = [{votes: 1}, {votes: 2}, {votes: 3}]

    expect(getTotalVotes(arr)).toEqual(6)
  })
})
