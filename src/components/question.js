import React from 'react'
import styled from 'styled-components'
import { H3, Text } from './common'

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

export const Question = ({ question }) =>
  <QuestionWrapper>
    <H3>{question.question}</H3>
    <Text>Published on: {new Date(question.published_at).toLocaleDateString()}</Text>
    <Text>Choice of: {question.choices.length}</Text>
  </QuestionWrapper>
