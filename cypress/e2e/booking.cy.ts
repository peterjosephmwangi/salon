// cypress/e2e/booking.cy.ts

describe("Salon Booking Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/booking"); // use full route
  });

  it("renders all form fields", () => {
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="phone"]').should("exist");
    cy.get('select[name="service"]').should("exist");
    cy.get('input[name="date"]').should("exist");
    cy.get('input[name="time"]').should("exist");
    cy.get('textarea[name="notes"]').should("exist");
  });

  it("shows validation message if required fields are empty", () => {
    cy.contains("Confirm Appointment").click();
    cy.contains("Please fill in all required fields.").should("exist");
  });

  it("successfully submits form", () => {
    cy.get('input[name="name"]').type("Jane Doe");
    cy.get('input[name="email"]').type("jane@example.com");
    cy.get('input[name="phone"]').type("0712345678");
    cy.get('select[name="service"]').select("Hair Styling");
    cy.get('input[name="date"]').type("2025-05-10");
    cy.get('input[name="time"]').type("14:30");
    cy.get('textarea[name="notes"]').type("Any natural look is fine.");

    cy.contains("Confirm Appointment").click();

    cy.contains("Your appointment has been booked successfully!").should("exist");
  });
});
