import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { apiBaseUrl } from '../constants/constants'
import { H2Wrapper, H2, Button } from './common'
import { allOptionsHaveText } from '../utils/all-options-have-text'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 25rem;
  margin-bottom: 1rem;
  text-indent: 0.5rem;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 95%;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CreateQuestion = () => {

  const [question, setQuestion] = useState([])
  const [options, setOptions] = useState([])
  const [ redirectToHome, setRedirectToHome ] = useState(false)

  if(redirectToHome) {
     return <Redirect to='/' />
  }

  const handleQuestionChange = event => setQuestion(event.target.value)

  const handleAddOption = () => {
    if(allOptionsHaveText(options)) {
      const arr = Array.from(options)
      arr.push('')
      setOptions(arr)
    } else {
      alert('One or more options are empty')
    }
  }

  const handleOptionChange = event => {
    const index = event.target.getAttribute('id')
    const arr = Array.from(options)

    options[index] = event.target.value
  }

  const handleSubmitQuestion = () => {
    if(question.length > 0 && options.length > 1) {
      const newQuestion = {
        question: question,
        choices: options,
      }
      fetch(`${apiBaseUrl}/questions?`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuestion),
      })
      .then(response => {
        if(response.ok) {
          console.log('Question successfully created')
        } else {
          alert('Error: new question was not created')
        }
      })
      setRedirectToHome(true)
    } else {
      alert('Question should not be empty\nThere should be at least 2 options')
    }
  }

  return (
      <>
      <H2Wrapper>
        <H2>Create Question</H2>
      </H2Wrapper>
      <FormWrapper>
        <Label>Enter the new question here:</Label>
        <Input data-cy='input-question'value={question} onChange={handleQuestionChange}/>
        <Label>Press 'Add Option':</Label>
        {options.map((option, i) => <Input data-cy={'option' + i} key={i} id={i} onChange={handleOptionChange} />)}
        <ButtonsWrapper>
          <Button data-cy='add-option' onClick={handleAddOption}>Add Option</Button>
          <Button data-cy='submit-question' onClick={handleSubmitQuestion}>Submit Question</Button>
        </ButtonsWrapper>
      </FormWrapper>
    </>
  )
}
