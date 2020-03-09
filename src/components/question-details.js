import React, { useState } from 'react'
import styled from 'styled-components'
import { apiBaseUrl } from '../constants/constants'
import { H2, H3, Text } from './common'
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

export const QuestionDetails = ({ questions }) => {

  const [ selectedOption, setSelectedOption ] = useState(0)

  const questionNumber = getQuestionNumberFromUrl(window.location.href, ':')
  const question = getQuestion(questions, questionNumber)
  const totalVotes = getTotalVotes(question.choices)
  const url = `${apiBaseUrl}/questions/${questionNumber}/choices/${selectedOption}`

  const voteHandler = () => {
    fetch(url, {
      method: 'POST',
    })
    .then(response => {
      if(response.ok) {
        console.log('OK')
        // const newShipmentsData = getUpdatedShipmentsData(shipments.data, shipmentId, newName)
        // setShipments({ ...shipments, data: newShipmentsData })
      } else {
        console.log('NOT OK')
        // notify user: not implmented
      }
    })
  }

  const selectOptionHandler = event => {
    const optionNumber = getQuestionNumberFromUrl(event.currentTarget.getAttribute('value'), '/')

    setSelectedOption(optionNumber)
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
          <Button onClick={voteHandler}>Vote</Button>
        </ButtonWrapper>
      </QuestionDetailsWrapper>
    </>
  )
}
