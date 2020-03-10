import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { H2, H3, Text, Button } from './common'
import { getQuestionNumberFromUrl } from '../utils/get-question-number-from-url'
import { getQuestion } from '../utils/get-question'
import { getTotalVotes } from '../utils/get-total-votes'
import { getPercentageOfVotes } from '../utils/get-percentage-of-votes'
import checkBox from '../../images/check-box.png'
import checkBoxChecked from '../../images/check-box-checked.png'

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
  cursor: pointer;

  &:nth-child(2n) {
    background: ${props => props.theme.colors.tableBorderColor};
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const QuestionDetails = ({ questions, voteHandler }) => {

  const [ selectedOption, setSelectedOption ] = useState(0)
  const [ redirectToHome, setRedirectToHome ] = useState(false)

  if(redirectToHome) {
     return <Redirect to='/' />
  }

  const questionNumber = getQuestionNumberFromUrl(window.location.href, ':')
  const question = getQuestion(questions, questionNumber)
  const totalVotes = getTotalVotes(question.choices)

  const selectOptionHandler = event => {
    const optionNumber = getQuestionNumberFromUrl(event.currentTarget.getAttribute('value'), '/')

    setSelectedOption(optionNumber)
  }

  const onVoteClick = () => {
    if(selectedOption !== 0) {
      voteHandler(questionNumber, selectedOption)

      setRedirectToHome(true)
    }
  }

  return (
    <>
      <H2>Question Details</H2>
      <QuestionDetailsWrapper>
        <H3>Question: {question.question}</H3>
        <Ul>
          {question.choices.map(option =>
            <VotingOption key={option.choice} value={option.url} onClick={selectOptionHandler}>
              <Text>{option.choice}</Text>
              <Text>{option.votes}</Text>
              <Text>{getPercentageOfVotes(option.votes, totalVotes)}</Text>
              <ImageWrapper>
                <img
                  src={getQuestionNumberFromUrl(option.url, '/') == selectedOption ? checkBoxChecked : checkBox}
                  alt='check box'
                  />
              </ImageWrapper>
            </VotingOption>
          )}
        </Ul>
        <ButtonWrapper>
          <Button onClick={onVoteClick}>Vote</Button>
        </ButtonWrapper>
      </QuestionDetailsWrapper>
    </>
  )
}
