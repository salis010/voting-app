import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './header'
import { Questions } from './questions'
import { QuestionDetails } from './question-details'
import { CreateQuestion } from  './create-question'
import { apiBaseUrl } from '../constants/constants'
import { PageWrapper } from './common'

// Styling
// Cypress
// Enzyme
// PropTypes

export const App = () => {

	const [ questions, setQuestions ] = useState([])
	const [ votes, setVotes ] = useState(0)

	const questionsUrl = `${apiBaseUrl}/questions`

	useEffect(() => {
		fetch(questionsUrl)
			.then(response => response.json())
			.then(data => setQuestions(data))
	}, [votes])

	const voteHandler = (questionNumber, selectedOption) => {
		const voteUrl = `${apiBaseUrl}/questions/${questionNumber}/choices/${selectedOption}`

		if(selectedOption !== 0) {
			fetch(voteUrl, {
	      method: 'POST',
	    })
	    .then(response => {
	      if(response.ok) {
					setVotes(votes + 1) // will trigger
	      } else {
	        console.log('Error: the vote was not saved')
	        // notify user: not implmented
	      }
	    })
		}
	}

	return (
		<Router>
			<Header />
			<PageWrapper>
				<Switch>
					<Route exact path='/' render={() => <Questions questions={questions} />} />
					<Route  path='/questions:id' render={() => <QuestionDetails questions={questions} voteHandler={voteHandler}/>} />
					<Route  path='/create-question' component={CreateQuestion} />
				</Switch>
			</PageWrapper>	
		</Router>
	)
}
