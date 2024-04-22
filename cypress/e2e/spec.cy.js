describe('empty spec', () => {
  
  beforeEach(() => {

    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
    statusCode: 200,
    body: {urls: [ {
      id: 1,
      long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'Awesome photo'
    },
    {
      id: 1,
      long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'Awesome photo'
    }]}
  })

  cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
    statusCode: 200,
    body: {
      id: 2,
      long_url: 'https://longURL*****************',
      short_url: 'http://localhost:3001/longURL/1',
      title: 'Awesome photo'
    }
  })
  cy.visit('http://localhost:3000/')
  })

  it('should display the page title, form and the existing shortened URLs', () => {
    cy.visit('http://localhost:3000/')
    .get('h1').should("contain.text", 'URL Shortener')
    .get('form').should('exist')
    .get('section > :nth-child(1)').should('exist')
    .get('section > :nth-child(2)').should('exist')
  })

  it('should allow a user to fill in the form and update the values', () => {
    cy.visit('http://localhost:3000/')
    .get('form > :nth-child(1)').type("A LONG URL")
    .get('form > :nth-child(2)').type("https://longURL*****************")
  })

  it('should return a new shortened URL when the user submits', () => {
    cy.visit('http://localhost:3000/')
    .get('form > :nth-child(1)').type("A LONG URL")
    .get('form > :nth-child(2)').type("https://longURL*****************")
    .get('button').click()

    .get('section > :nth-child(3)').should('exist')
  })
})