import { getQuestionNumberFromUrl } from './get-question-number-from-url'

export const getQuestion = (questions, questionNumber) => {

  if(!Array.isArray(questions) || questions.length === 0)
    return null

  for(let i = 0; i < questions.length; i++) {
    
    if( questionNumber == getQuestionNumberFromUrl(questions[i].url, '/') )
      return questions[i]
  }

  return null
}
