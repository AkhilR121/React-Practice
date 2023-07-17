describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.visit("http://localhost:3000")
      cy.get("h1").contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the home page are correct", () => {
      cy.visit("http://localhost:3000")
      cy.get("dt").eq(1).contains("25+ Lessons")
    })
  })

  context("Courses section", () => {
    it("Course: Testing your first Next.js Application", () => {
      // By using parent class we can fetch all <a>..</a> tags
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it.only("Course: Testing your first Next.js Application", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
