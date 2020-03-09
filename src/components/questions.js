import React from 'react'
import styled from 'styled-components'
import { Question } from './question'

const QuestionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Questions = ({ questions }) => {
  return (
    <>
      <h2>Questions</h2>
      <QuestionsWrapper>
        {questions.map(question => <Question key={question.url} question={question} />)}
      </QuestionsWrapper>
    </>
  )
}
