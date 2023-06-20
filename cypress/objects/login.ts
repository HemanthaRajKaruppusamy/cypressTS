/// <reference types="cypress" />

class loginPage{

    getloginIn()
    {
        return cy.get('.panel > .header > .authorization-link > a');
    }
    getEmailText(){
        return cy.get('#email');
    }
    getPwdText(){
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass');
    }
    getsignInButton(){
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span');
    }
}

export default loginPage;