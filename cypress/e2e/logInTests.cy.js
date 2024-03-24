
describe("Pierwszy blok testów", () => {
  it("Wizyta na stronie GoIT", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Wpisz email user888", () => {
    cy.visit("https://www.edu.goit.global/account/login");

   
    cy.signIn("user888@gmail.com", "1234567890");

   
    cy.contains("Log in").click();

    cy.get('#open-navigation-menu-mobile').click();
  });

  it("Wyloguj się", () => {
    cy.visit("https://www.edu.goit.global/account/login");
        cy.get(':nth-child(12) > .next-bve2vl')
    cy.contains('Log out').click();

});

});


describe("Drugi blok testów", () => {
  it("Wizyta na stronie GoIT", () => {
      cy.visit("https://www.edu.goit.global/account/login");
  });
 it("Wpisz email testowyqa", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("testowyqa@qa.team ", "QA!automation-1")
    });
    it("Wyloguj się", () => {
      cy.visit("https://www.edu.goit.global/account/login");
          cy.get(':nth-child(12) > .next-bve2vl')
      cy.contains('Log out').click();
  
  })
});