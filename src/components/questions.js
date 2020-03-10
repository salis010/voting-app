import React from 'react'
import styled from 'styled-components'
import { Question } from './question'
import { H2 } from './common'

const QuestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Questions = ({ questions, setshowQuestionDetails, setSelectedQuestion }) => {
  return (
    <>
      <H2>Questions</H2>
      <QuestionsWrapper>
        {questions.map(question =>
          <Question
            key={question.url}
            question={question}
            setshowQuestionDetails={setshowQuestionDetails}
            setSelectedQuestion={setSelectedQuestion}
          />)}
      </QuestionsWrapper>
    </>
  )
}
