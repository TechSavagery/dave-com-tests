/// <reference types="cypress" />
describe("Job Posts Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      });
      cy.clearCookies()
    });
  
    it("Finds Senior QA Engineer Posts", () => {
      cy.fixture("viewports").then((viewports) =>{
          viewports.forEach(viewport => {
            cy.log(`Running on ${viewport}`)
            //Arrange 
            cy.viewport('macbook-13')
            cy.visit(Cypress.env("baseUrl"))
            //Act 
            cy.contains('Careers').click()
            //Assert
            cy.contains('Sr. QA Engineer')
          });
      })
    });
  });
  