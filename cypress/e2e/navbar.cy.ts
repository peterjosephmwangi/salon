// cypress/e2e/navbar.cy.ts

describe("Navbar Component", () => {
  beforeEach(() => {
    cy.viewport(375, 667); // Set a mobile viewport
    cy.visit("http://localhost:3000");
    cy.contains("a", "Saloonist").should("be.visible"); // Wait for the logo to be visible
  });

  it("renders the logo correctly", () => {
    cy.contains("a", "Saloonist").should("exist").and("have.attr", "href", "/");
  });

  it("renders the navigation links correctly", () => {
    // cy.contains("button", "Toggle Menu").click(); // Click the hamburger menu button
    cy.contains("a", "Home").should("be.visible").and("have.attr", "href", "/");
    cy.contains("a", "About Us")
      .should("be.visible")
      .and("have.attr", "href", "/about");
    cy.contains("a", "Services")
      .should("be.visible")
      .and("have.attr", "href", "/services");
    cy.contains("a", "Gallery")
      .should("be.visible")
      .and("have.attr", "href", "/gallery");
    cy.contains("a", "FAQs")
      .should("be.visible")
      .and("have.attr", "href", "/faqs");
    cy.contains("a", "Contact")
      .should("be.visible")
      .and("have.attr", "href", "/contact");
    cy.contains("button", "Toggle Menu").click(); // Close the menu
  });
});
