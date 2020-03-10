# Voting App

- State Management: React Hooks
- Navigation: React Router
- CSS: Styled Components
- Testing: Jest, Cypress

## The Most Interesting Part

It must be the Cypress test of the 'Create Question' option.

![](/screenshots/app3.png)

The test simulates all steps of a user's journey from the home page up till the actual creation of the question in the api.

```
it('Should create a new question', () => {
    cy.get('[data-cy=create-question-button]')
      .click()
      .get('[data-cy=input-question]')
      .type('Should aliens from space be given EU citizenship?')
      .get('[data-cy=add-option]')
      .click()
      .get('[data-cy=option0]')
      .type('Yes')
      .get('[data-cy=add-option]')
      .click()
      .get('[data-cy=option1]')
      .type('No')
      .get('[data-cy=submit-question]')
      .click()
      .wait(5000)
      .url()
      .should('equal', Cypress.config().baseUrl + '/')
})
```

One can change the test above (`cypress/integration/navigation.spec.js`) by inputting a new question and re-running the test is Cypress: the new question will be posted to the API, and actually created.

## Get the App Started

- Install packages, in terminal execute `npm i`
- Execute `npm start` in terminal
- Go to `localhost:3000`

## Run Tests

### Jest

The jest tests are available in `src\utils` which contains helper functions. For each function there is a jest test.

- In terminal, execute `npm run test`

### Cypress

Only a few tests were written, since this is just an exercise.

- In terminal, execute `npm run cypress:open`
- Wait for the Cypress app to load
- Click on a spec test, in this app's case there is only `navigation.spec.js`

![](/screenshots/cypress-select-test.png)
- A new browser window will open, just watch the tests run
- To run the tests again press the 'circular arrow' button at the top-right in this screenshot:

![](/screenshots/cypress-tests.png)

## The App

The voting questions are derived from the api, put into state via a `useEffect`, and displayed accordingly.

![](/screenshots/app1.png)

The user can click on any part of each question to view the details and vote.

Voting is not allowed if no option is selected.

![](/screenshots/app2.png)

Clicking 'Create Question' at the top right provides the feature to create a new voting question.

![](/screenshots/app3.png)

The user has to enter a question and at least two options, if not the question is not created.

The user can add as many options as required by pressing 'Add Option'. The app will alert the user if any option is left empty.

## Issues

There is some latency in the api, from the moment a vote is posted and a `response.ok` is returned, till the actual updated data being available. This latency can be replicated by using the app to vote, capturing the returned `response.ok`, say via `console.log`, and checking the data pertaining to the respective voting question directly via the api's address in another browser tab: e.g.: `https://polls.apiblueprint.org/questions/12`.Although `response.ok` would have been received, may often the actual updated data is not available in the api.

The consequence of this is that the interface may not update in time with the new voting statistics.
