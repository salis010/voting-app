import React, { useState, useEffect } from 'react'
import { Questions } from './questions'
import { QuestionDetails } from './question-details'

export const App = () => {

	const [ questions, setQuestions ] = useState([])

	const url = 'https://polls.apiblueprint.org/questions'
	const mockQuestion = {
			"question": "Favourite programming language?",
			"published_at": "2020-03-06T18:31:18.497515+00:00",
			"url": "/questions/7", "choices": [
				{"choice": "Objective-C", "votes": 0, "url": "/questions/7/choices/28"},
				{"choice": "Python", "votes": 0, "url": "/questions/7/choices/27"},
				{"choice": "Ruby", "votes": 0, "url": "/questions/7/choices/29"},
				{"choice": "Swift", "votes": 0, "url": "/questions/7/choices/26"}
			]
		}

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			// .then(data => console.table(data))
			.then(data => setQuestions(data))
	}, [])
	return (
		<>
			<h1>Polling Station</h1>
			<QuestionDetails question={mockQuestion} />
			<Questions questions={questions} />
		</>
	)
}
