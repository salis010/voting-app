import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { H3, Text } from './common'
import { getQuestionNumberFromUrl } from '../utils/get-question-number-from-url'

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${props => props.theme.colors.tableBorderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
`

export const Question = ({ question }) => {

  const questionNumber = getQuestionNumberFromUrl(question.url, '/')

  return (
    <Link to={`/questions:${questionNumber}`}>
      <QuestionWrapper>
        <H3>{question.question}</H3>
        <Text>Published on: {new Date(question.published_at).toLocaleDateString()}</Text>
        <Text>Choice of: {question.choices.length}</Text>
      </QuestionWrapper>
    </Link>
  )
}
