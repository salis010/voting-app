describe('Test navigation', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should take the user to the Create Question page when pressing the "Create Question" button', () => {
      cy.get('[data-cy=create-question-button]')
        .click()
        .url()
        .should('include', '/create-question')
  })

  it('Should take the user Home when pressing the "Home" icon in "/create-question"', () => {
      cy.get('[data-cy=create-question-button]')
        .click()
        .url()
        .should('include', '/create-question')
        .get('[data-cy=home-icon]')
        .click()
        .url()
        .should('equal', Cypress.config().baseUrl + '/')
  })

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
})
