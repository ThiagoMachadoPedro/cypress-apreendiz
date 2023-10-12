/// <reference types="cypress" />

describe("teste para pagina", () => {

  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  })



it('deve preencher formulario de escrição', () => {


    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()


})

})
