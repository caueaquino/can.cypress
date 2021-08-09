/// <reference types="cypress" />


describe('sign up can website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/auth/sign-in')

        cy.get('.sign-in')
            .contains(`Don't have an account? Click here`)
            .should('be.visible')
            .click();
    })

    it('have to go to sign up page', () => {
        cy.get('.sign-up h3')
            .contains('Fill the fields bellow to complete the register')
            .should('be.visible');

        cy.get('.sign-up mat-label')
            .contains('Username')
            .should('be.visible');

        cy.get('.sign-up mat-label')
            .contains('Email')
            .should('be.visible');

        cy.get('.sign-up mat-label')
            .contains('Phone')
            .should('be.visible');

        cy.get('.sign-up mat-label')
            .contains('Password')
            .should('be.visible');

        cy.get('.sign-up button')
            .contains('Cancel')
            .should('be.visible');

        cy.get('.sign-up button')
            .contains('Sign up')
            .should('be.visible');
    })

    it('have to sign up successfully', () => {
        cy.get('input[formControlName=userName]')
            .type('caue-teste')
            .should('have.value', 'caue-teste');

        cy.get('input[formControlName=email]')
            .type('cauenogueira@alunos.utfpr.edu.br')
            .should('have.value', 'cauenogueira@alunos.utfpr.edu.br');

        cy.get('input[formControlName=phone]')
            .type('11964646464')
            .should('have.value', '+55 (11) 96464 6464');

        cy.get('input[formControlName=password]')
            .type('Abc@123')
            .should('have.value', 'Abc@123');

        cy.get('button')
            .contains('Sign up')
            .should('be.visible')
            .click();

        cy.get('can-alert-dialog h1')
            .contains('Success')
            .should('be.visible');

        cy.get('can-alert-dialog div')
            .contains('User was registered successfully.')
            .should('be.visible');

        cy.get('can-alert-dialog button')
            .contains('Ok')
            .should('be.visible')
            .click();
    })

    it('have to show sign up validators errors', () => {
        cy.get('button')
            .contains('Sign up')
            .should('be.visible')
            .click();

        cy.get('mat-error')
            .contains('Username is required')
            .should('have.text', ' Username is required');

        cy.get('mat-error')
            .contains('Email is required')
            .should('have.text', ' Email is required');

        cy.get('mat-error')
            .contains('Phone is required')
            .should('have.text', ' Phone is required');

        cy.get('mat-error')
            .contains('Password is required')
            .should('have.text', ' Password is required');

        cy.get('input[formControlName=userName]')
            .type('ca')
            .should('have.value', 'ca');

        cy.get('mat-error')
            .contains('Password need at least 4 characters')
            .should('have.text', ' Password need at least 4 characters ');

        cy.get('input[formControlName=email]')
            .type('email')
            .should('have.value', 'email')

        cy.get('mat-error')
            .contains('Please enter a valid email address')
            .should('have.text', ' Please enter a valid email address ');

        cy.get('input[formControlName=phone]')
            .type('11964')
            .should('have.value', '+55 (11) 964');

        cy.get('mat-error')
            .contains('Phone need at least 11 digits')
            .should('have.text', ' Phone need at least 11 digits ');

        cy.get('input[formControlName=password]')
            .type('123')
            .should('have.value', '123');

        cy.get('mat-error')
            .contains('Password need at least 6 characters')
            .should('have.text', ' Password need at least 6 characters ');

        cy.get('input[formControlName=password]')
            .type('456abcdefghijklmnopqrs')
            .should('have.value', '123456abcdefghijklmnopqrs');

        cy.get('mat-error')
            .contains('Password must have a maximum of 12 characters')
            .should('have.text', ' Password must have a maximum of 12 characters ');
    })
})
