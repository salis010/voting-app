import React, { useState, useEffect } from 'react'
import { Questions } from './questions'

export const App = () => {

	const [ questions, setQuestions ] = useState({})
	return (
		<>
			<h1>Polling Station</h1>
			<Questions questions={questions} />
		</>
	)
}
