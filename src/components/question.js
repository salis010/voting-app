import React from 'react'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${props => props.theme.colors.tableBorderColor};
  border-radius: ${props => props.theme.tableBorderRadius};
`

const H3 = styled.h3`
  margin-top: 0;
  color: ${props => props.theme.colors.h3Color};
`

const P = styled.p`
  font-size: 1rem;
`

export const Question = ({ question }) =>
  <QuestionWrapper>
    <H3>{question.question}</H3>
    <P>Published on: {new Date(question.published_at).toLocaleDateString()}</P>
    <P>Choice of: {question.choices.length}</P>
  </QuestionWrapper>
