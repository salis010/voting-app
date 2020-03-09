export const getPercentageOfVotes = (votes, totalVotes) => {
  if(votes === 0 || totalVotes === 0)
   return '0%'

  return Math.floor((votes / totalVotes) * 100) + '%'
}
