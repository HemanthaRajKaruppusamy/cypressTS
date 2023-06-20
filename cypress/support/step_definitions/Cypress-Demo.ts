///<reference types = "Cypress"/>

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
    cy.window().then(win => {
        win.sessionStorage.clear();
        win.localStorage.clear();
    });
    cy.clearCookies();
    //cy.HandleUncaughtExp();
});

Given('To verify the login flow for Cypress Demo', function() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('visalakshhi.karthick@gmail.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Visa@123');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
});

Given('To verify the login flow for Cypress Demo for second feature', function() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('visalakshhi.karthick1@gmail.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Visa@123');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
});

Given('To verify the login flow for Cypress Demo for third feature', function() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('visalakshhi.karthick1@gmail.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Visa@123');
    cy.get('.login-container1 > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
});


