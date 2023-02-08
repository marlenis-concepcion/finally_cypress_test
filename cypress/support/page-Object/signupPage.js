
export class SignupPage {

    constructor() {

    }

    setEmail(emailAddress) {

        cy.get('[id=outlined-adornment-email-register]').type(emailAddress)
        return this;


    }

    setUserPassword(userpassword) {
        cy.get('[id=outlined-adornment-password-register]').type(userpassword)
        return this;
    }

    clickApply() {

        cy.get('.css-1f5mwld > .MuiButton-root').click({ force: true });
        return this;

    }

}
