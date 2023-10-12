/// <reference types="cypress" />

describe("teste para pagina", () => {

  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  })


it('deve preencher formulario de escrição', () => {

  cy.get('[type="text"]').type('Thiago Machado Pedro')
  cy.get('[type="email"]').type('tmachado807@gmail.com')
  cy.get('[type="tel"]').type('11941612131')

    cy.get('.adicionar').click()


})

})
