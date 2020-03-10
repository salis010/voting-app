import React from 'react'
import styled from 'styled-components'
import { H3, Text, Link } from './common'
import { getQuestionNumberFromUrl } from '../utils/get-question-number-from-url'

const QuestionWrapper = styled.div`
  display: grid;
  grid-template-row: 10rem 3rem 3rem;
  width: 16rem;
  height: 12rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;

  &:hover {
    border-width: 2px;
  }
`

export const Question = ({ question, setshowQuestionDetails }) => {

  const questionNumber = getQuestionNumberFromUrl(question.url, '/')

  return (
      <Link to={`/questions:${questionNumber}`} >
        <QuestionWrapper>
          <H3>{question.question}</H3>
          <Text>Published on: {new Date(question.published_at).toLocaleDateString()}</Text>
          <Text>Choice of: {question.choices.length}</Text>
        </QuestionWrapper>
      </Link>
  )
}
