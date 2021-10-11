// https://docs.cypress.io/api/introduction/api.html

describe("Homepage", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(".q-banner__content", "Please press See Users button to see github users.");
    cy.get(".q-btn__content > span").contains( "See Github Users");
  });
});
