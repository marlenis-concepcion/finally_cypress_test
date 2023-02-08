

export class StartRegistrationPage {

    constructor() {


    }

    setBusinessName(bname) {
        cy.wait(5000);
        cy.get('#legalBusinessName').clear().type(bname);
        return this;
    }



    setDoingBusinessAS(bname) {
        cy.get('#businessNameDBA').clear().type(bname);
        return this;
    }


    setDoingBusinessWebSite(bname) {
        cy.get('#businessWebsite').clear().type(bname);
        return this;
    }


    setFirstName(fName) {

        cy.get('#firstName').clear().type(fName)
        return this;

    }

    setLastName(lName) {

        cy.get('#lastName').clear().type(lName)
        return this;
    }


    setPhoneNumber(number) {

        cy.get('#phoneNumber').clear().type(number)
        return this;


    }

    setNumberEmployee(numberemployees) {

        cy.get('#numberOfEmployees').clear().type(numberemployees)
        return this;

    }

    setEntityType() {

        cy.wait(5000);
        cy.get('#businessIncorporationType').click();
        cy.xpath("//li[contains(.,'Corporation')]").click();

        return this;
    }


    setAnnualRevenue(aRevenue) {

        cy.get('#annualRevenue').clear().type(aRevenue)
        return this;

    }

    clickNext(){
        cy.xpath("//button[contains(.,'Next')]").click();
        
        cy.wait(5000);

        return this;
       
    }

}

