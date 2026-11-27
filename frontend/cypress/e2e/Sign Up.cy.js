describe("Sign Up", () => {
  it("tests Sign Up", () => {
    cy.viewport(765, 729);
    cy.visit("http://localhost:5173/");
    cy.visit("http://localhost:5173/");
    cy.get("li:nth-of-type(6) > a").click();
    cy.get("div:nth-of-type(2) a").click();
    cy.get("#firstNameTextField").click();
    cy.get("#firstNameTextField").type("John");
    cy.get("#lastNameTextField").type("S");
    cy.get("#lastNameTextField").type("Smith");
    cy.get("#emailTextField").click();
    cy.get("#emailTextField").type("john@");
    cy.get("#emailTextField").type("john@smith.ca");
    cy.get("#passwordTextField").click();
    cy.get("#passwordTextField").type("12345678");
    cy.get("#confirmPasswordTextField").click();
    cy.get("#confirmPasswordTextField").type("12345678");
    cy.get("div:nth-of-type(2) button").click();
  });
});
