/// <reference types="cypress" />

describe("teste para pagina", () => {

  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  })


it('deve preencher formulario de escrição', () => {


      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

     cy.get('[type="text"]').clear().type(' Medeiros')
     cy.get('[type="email"]').clear().type('Medeiros@gmail.com')


   cy.get('[type="tel"]').clear().type('11111111111')


   cy.get('.alterar').click()

})

})
