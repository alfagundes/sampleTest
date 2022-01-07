/// <reference types="cypress" />

describe('', () => {
    it('deve poder acessar o site saucedemo.', () => {
        cy.visit('https://www.saucedemo.com/');
        // cy.get - Busca um elemento deve
        // .type - insere um
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Fulano');
        cy.get('[data-test="lastName"]').type('Sobre nome do Fulano');
        cy.get('[data-test="postalCode"]').type('95555000');
        cy.get('[data-test="continue"]').click();
        cy.contains('Sauce Labs Backpack');
        cy.get('[data-test="finish"]').click();
        cy.contains('THANK YOU FOR YOUR ORDER');
    });
});