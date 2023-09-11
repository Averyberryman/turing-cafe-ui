describe('Reservation Form', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the form correctly', () => {
    cy.get('form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="date"]').should('exist');
    cy.get('input[name="time"]').should('exist');
    cy.get('input[name="number"]').should('exist');
    cy.get('button').contains('SUBMIT').should('exist');
  });

  it('accepts input', () => {
    const testName = "John Doe";
    const testDate = "09/15/2023";
    const testTime = "7:30";
    const testNumber = "4";

    cy.get('input[name="name"]').type(testName).should('have.value', testName);
    cy.get('input[name="date"]').type(testDate).should('have.value', testDate);
    cy.get('input[name="time"]').type(testTime).should('have.value', testTime);
    cy.get('input[name="number"]').type(testNumber).should('have.value', testNumber);
  });

  it('can submit the form', () => {
    const testName = "John Doe";

    cy.get('input[name="name"]').type(testName);
    cy.get('input[name="date"]').type("09/15/2023");
    cy.get('input[name="time"]').type("7:30");
    cy.get('input[name="number"]').type("4");
    
    cy.get('button').contains('SUBMIT').click();
    cy.contains(testName).should('exist');
  });
});
