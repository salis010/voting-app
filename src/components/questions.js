import React from 'react'
import styled from 'styled-components'
import { Question } from './question'
import { H2 } from './common'

const QuestionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Questions = ({ questions }) => {
  return (
    <>
      <H2>Questions</H2>
      <QuestionsWrapper>
        {questions.map(question => <Question key={question.url} question={question} />)}
      </QuestionsWrapper>
    </>
  )
}
