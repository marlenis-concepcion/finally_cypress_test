/// <reference types="cypress-xpath" />
import { SignupPage } from "../support/page-Object/signupPage";
import { StartRegistrationPage } from "../support/page-Object/startRegistrationPage";
import { BusinessDetailsPage } from "../support/page-Object/businessDetails";
import { BusinessRepresentativePage } from "../support/page-Object/businessRepresentativePage";
import { BankAccountPage } from "../support/page-Object/bankAccount";

const signupPage = new SignupPage();
const startRegistrationPage = new StartRegistrationPage();
const businessDetails = new BusinessDetailsPage();
const businessRepresentativePage = new BusinessRepresentativePage();
const bankAccount = new BankAccountPage();

describe('template spec', () => {
  it('Verify finally registration', () => {
    cy.clearCookies();
    cy.clearAllLocalStorage();
    cy.exec('npm cache clear --force');

    cy.visit('https://cards-sandbox.finally.com/auth/register')

    signupPage
      .setEmail("mjccconsultant+1@gmail.com")
      .setUserPassword("Mozart36$")
      .clickApply();

    startRegistrationPage
      .setBusinessName("finally")
      .setDoingBusinessAS("finally")
      .setDoingBusinessWebSite("https://cards-sandbox.finally.com/auth/login")
      .setFirstName("Marlenis")
      .setLastName("Concepcion")
      .setPhoneNumber("8299688116")
      .setNumberEmployee("10")
      .setEntityType("Corporation")
      .setAnnualRevenue("22")
      .clickNext();

    businessDetails
      .setBusinessCategory()
      .setEmployeeId("938239982")
      .setBusinessStateOfIncorporation()
      .setBusinessAddressOne("Dominican Republic")
      .setBusinessAddressSecond("Dominican Republic")
      .setBusinessCity("Santo Domingo")
      .setDATE()
      .setBusinessState()
      .setZipCode("10707")
      .setBDescription("Selenium sucks for e2e testing")
      .clickNext();

    businessRepresentativePage
      .setFirstName("Marlenis")
      .setLastName("Concepcion")
      .setPhoneNumber("8299688116")
      .setSSN("3333999999")
      .setBusinessAddressOne("Dominican Republic")
      .setBusinessAddressSecond("Dominican Republic")
      .setBusinessCity("Santo Domingo")
      .setDATE()
      .setEmail("mjccconsultant@gmail.com")
      .setZipCode("10707")
      .setBusinessState()
      .setApproveCheckbox()
      .clickNext();

    bankAccount.clickSaveAndExit()
      .confirmExit();


  })
})