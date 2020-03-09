export const getTotalVotes = choices => choices.reduce((acc, n) =>acc + n.votes, 0)
