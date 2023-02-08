
export class BankAccountPage {

    constructor() {



    }

    clickSaveAndExit() {
        cy.xpath("//button[contains(.,'Save and Exit')]").click({ force: true });

        cy.wait(5000);

        return this;

    }


}

// cy.get('#link-plaid-account-button')

// cy.get('.css-141to9b > .MuiTypography-subtitle3')

// cy.get('#link-plaid-account-button')

// cy.get('.css-1yx017s > .MuiGrid-root > .MuiButton-root')