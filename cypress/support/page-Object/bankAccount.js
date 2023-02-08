
export class BankAccountPage {

    constructor() {



    }

    clickSaveAndExit() {
        cy.xpath("//button[contains(.,'Save and Exit')]").click({ force: true });

        cy.wait(5000);

        return this;

    }
    confirmExit()

        {
            cy.get('.MuiGrid-direction-xs-row-reverse > :nth-child(2) > .MuiButton-root').doubleclick({ force: true });

            cy.wait(5000);
    
            return this;
        }


}

// cy.get('#link-plaid-account-button')

// cy.get('.css-141to9b > .MuiTypography-subtitle3')

// cy.get('#link-plaid-account-button')

// cy.get('.css-1yx017s > .MuiGrid-root > .MuiButton-root')