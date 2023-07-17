describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("akhil@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("akhil@gmail.com")
  })
  it("does not allow invalid email address", () => {
    cy.getByData("email-input").type("akhil")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
  it("does NOT allow already subscribed email addresses", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})
