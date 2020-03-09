import React, { useState, useEffect } from 'react'
import { Questions } from './questions'

export const App = () => {

	const [ questions, setQuestions ] = useState([])

	const url = 'https://polls.apiblueprint.org/questions'

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			// .then(data => console.table(data))
			.then(data => setQuestions(data))
	}, [])
	return (
		<>
			<h1>Polling Station</h1>
			<Questions questions={questions} />
		</>
	)
}
