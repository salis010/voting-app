import React, { useState } from 'react'
import styled from 'styled-components'
import { apiBaseUrl } from '../constants/constants'
import { Button } from './common'
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

`

const Input = styled.input`

`

export const CreateQuestion = () => {

  const [question, setQuestion] = useState([])
  const [options, setOptions] = useState([])

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
          console.log('OK')
        } else {
          console.log('Error: new question was not created')
          // notify user: not implmented
        }
      })
    } else {
      alert('Question should not be empty\nThere should be at least 2 options')
    }
  }

  return (
    <Wrapper>
      <FormWrapper>
        <Label>Enter the new question here:</Label>
        <Input value={question} onChange={handleQuestionChange}/>
        <Label>Enter the options here:</Label>
        {options.map((option, i) => <Input key={i} id={i} onChange={handleOptionChange} />)}
        <Button onClick={handleAddOption}>Add Option</Button>
        <Button onClick={handleSubmitQuestion}>Submit Question</Button>
      </FormWrapper>
    </Wrapper>
  )
}
