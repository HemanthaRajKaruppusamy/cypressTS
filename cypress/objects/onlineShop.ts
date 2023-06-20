/// <reference types="cypress" />

class onlineShop{

    getloginIn()
    {
        return cy.get('.panel > .header > .authorization-link > a');
    }
}

export default onlineShop;