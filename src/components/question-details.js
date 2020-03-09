import React from 'react'
import styled from 'styled-components'
import { H2, H3, Text } from './common'
import { getTotalVotes } from '../utils/get-total-votes'
import { getPercentageOfVotes } from '../utils/get-percentage-of-votes'

const QuestionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
`

const Ul = styled.ul`
  padding: 0;
  border: 1px solid ${props => props.theme.colors.tableBorderColor};
`

const VotingOption = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  border: ${props => props.theme.colors.tableBorderColor};

  &:nth-child(2n) {
    background: ${props => props.theme.colors.tableBorderColor};
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: ${props => props.theme.colors.tableBorderColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`

export const QuestionDetails = ({ question }) => {
  const totalVotes = getTotalVotes(question.choices)

  return (
    <>
      <H2>Question Details</H2>
      <QuestionDetailsWrapper>
        <H3>Question: {question.question}</H3>
        <Ul>
          {question.choices.map(option =>
            <VotingOption key={option.choice}>
              <Text>{option.choice}</Text>
              <Text>{option.votes}</Text>
              <Text>{getPercentageOfVotes(option.votes, totalVotes)}</Text>
              <Text>{getPercentageOfVotes(option.votes, totalVotes)}</Text>
            </VotingOption>
          )}
        </Ul>
        <ButtonWrapper><Button>Vote</Button></ButtonWrapper>
      </QuestionDetailsWrapper>
    </>
  )
}