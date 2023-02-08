
export class BusinessDetailsPage{
    constructor() {


    }

    setBusinessCategory() {

        cy.wait(5000);
        cy.get('#businessCategory').click();
        cy.xpath("//li[contains(.,'Accounting')]").click();

        return this;
    }

    setEmployeeId(id) {

        cy.get('#employerIdentificationNumber').clear().type(id)
        return this;

    }


    setBusinessStateOfIncorporation() {

        cy.wait(5000);
        cy.get('#businessStateOfIncorporation').click();
        cy.xpath("//li[contains(.,'Alabama')]").click();

        return this;
    }


    setBusinessAddressOne(addressone) {

        cy.get('#businessAddressLineOne').clear().type(addressone)
        return this;

    }

    setBusinessAddressSecond(addressSecond) {

        cy.get('#businessAddressLineTwo').clear().type(addressSecond)
        return this;

    }


    setDATE() {

        cy.wait(5000);
        cy.get('#mui-15').click({ force: true });
        cy.get('#mui-15').type("02/08/2022");
        return this;

    }
    // cy.get('#mui-15')


    //cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')



    setBusinessCity(city) {

        cy.get('#businessAddressCity').clear().type(city)
        return this;

    }

    setBusinessState(state) {

        cy.wait(5000);
        cy.get('#businessAddressState').click();
        cy.xpath("//li[contains(.,'Alabama')]").click();
        return this;
    }

    setZipCode(code) {

        cy.get('#businessAddressZipCode').clear().type(code)
        return this;
    }

    setBDescription(description) {

        cy.get('#businessDescription').clear().type(description)
        return this;
    }
    clickNext() {
        cy.xpath("//button[contains(.,'Next')]").click({ force: true });

        cy.wait(5000);

        return this;

    }



} 