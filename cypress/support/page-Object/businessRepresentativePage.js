
export class BusinessRepresentativePage {

    constructor() {



    }


    setFirstName(fName) {

        cy.get('#businessRepresentativeFirstName').clear().type(fName)
        return this;

    }

    setEmail(email) {

        cy.get('#businessRepresentativeEmail').clear().type(email)
        return this;

    }

    setLastName(lName) {

        cy.get('#businessRepresentativeLastName').clear().type(lName)
        return this;
    }

    setPhoneNumber(number) {

        cy.get('#businessRepresentativePhoneNumber').clear().type(number)
        return this;
    }


    setSSN(IDnumber) {

        cy.get('#businessRepresentativeSSN').clear().type(IDnumber)
        return this;
    }


    //cy.get('#useMyProfileInformation')
  



    //cy.get('#mui-17')


    setDATE() {

        cy.wait(5000);

        cy.get('#mui-17').click({ force: true });

        cy.get('#mui-17').type("02/08/1995");
        return this;

    }

    //cy.get('.css-1hyq633 > .MuiButton-root')


    setBusinessAddressOne(addressone) {

        cy.get('#businessRepresentativeAddressLineOne').clear().type(addressone)
        return this;

    }

    setBusinessAddressSecond(addressSecond) {

        cy.get('#businessRepresentativeAddressLineTwo').clear().type(addressSecond)
        return this;

    }


    setDATE() {

        cy.wait(5000);
        cy.get('#mui-17').click({ force: true });
        cy.get('#mui-17').type("02/08/1995");
        return this;

    }
    // cy.get('#mui-15')


    //cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')



    setBusinessCity(city) {

        cy.get('#businessRepresentativeCity').clear().type(city)
        return this;

    }

    setBusinessState(state) {

        cy.wait(5000);
        cy.get('#businessRepresentativeState').click();
        cy.xpath("//li[contains(.,'Alabama')]").click();
        return this;
    }

    setZipCode(code) {

        cy.get('#businessRepresentativeZipCode').clear().type(code)
        return this;
    }

    clickNext() {
        cy.xpath("//button[contains(.,'Next')]").click({ force: true });

        cy.wait(5000);

        return this;

    }

    
    
    setApproveCheckbox() {
        cy.get('#businessRepresentativeAgreeToFinallyTerms').check();
        return this;
        }
    
    


}