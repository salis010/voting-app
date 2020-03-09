import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Questions } from './questions'
import { QuestionDetails } from './question-details'
import { apiBaseUrl } from '../constants/constants'

// In QuestionDetails, on voting, the voting figrues should be updated, meaning that the
//		state in app.js needs to be refreshed from the API
// PropTypes

export const App = () => {

	const [ questions, setQuestions ] = useState([])

	const url = `${apiBaseUrl}/questions`

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setQuestions(data))
	}, [])

	return (
		<Router>
			<h1>Polling Station</h1>

			<Switch>
				<Route exact path='/' render={() => <Questions questions={questions} />} />
				<Route  path='/questions:id' render={() => <QuestionDetails questions={questions} />} />
			</Switch>
		</Router>
	)
}
