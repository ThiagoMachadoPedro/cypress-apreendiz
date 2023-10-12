/// <reference types="cypress" />
describe("teste para pagina de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("deve levar o usuario até o site de escrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
  });

  it("deve preencher formulario de escrição", () => {
    cy.get('input[name="nome-completo"]').type("Thiago Machado Pedro");
    cy.get('input[name="email"]').type("tmachado807@gmail.com");
    cy.get('input[name="telefone"]').type(11941612131);
    cy.get('input[name="endereco"]').type("rua espiga 168");
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"').select("outros");
    cy.get(".Aplicacao_button__tw2AE").click();

    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado peça candidatura");
    });
  });
});
