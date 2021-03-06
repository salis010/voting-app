import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Question } from './question'
import { H2Wrapper, H2 } from './common'

const QuestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Questions = ({ questions }) => {
  return (
    <>
      <H2Wrapper>
        <H2>Questions</H2>
      </H2Wrapper>
      <QuestionsWrapper>
        {questions.map(question =>
          <Question
            key={question.url}
            question={question}
          />)}
      </QuestionsWrapper>
    </>
  )
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
}
