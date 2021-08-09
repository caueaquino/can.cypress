/// <reference types="cypress" />


describe('sign in can website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/auth/sign-in')
  })

  it('have to access sign in page', () => {
    cy.get('.sign-in')
      .contains('Email')
      .should('be.visible');

    cy.get('.sign-in')
      .contains('Password')
      .should('be.visible');

    cy.get('.sign-in')
      .contains('Sign in')
      .should('be.visible');

    cy.get('.sign-in')
      .contains('Forgot password?')
      .should('be.visible');

    cy.get('.sign-in')
      .contains(`Don't have an account? Click here`)
      .should('be.visible');
  })

  it('have to sign in successfully', () => {
    cy.get('input[formControlName=email]')
      .type('cauenogueira@alunos.utfpr.edu.br')
      .should('have.value', 'cauenogueira@alunos.utfpr.edu.br');

    cy.get('input[formControlName=password]')
      .type('Abc@123')
      .should('have.value', 'Abc@123');

    cy.get('button')
      .contains('Sign in')
      .click();

    cy.get('can-main-layout')
      .should('be.visible');
  })

  it('have to show sign in error', () => {
    cy.get('input[formControlName=email]')
      .type('cauenogueira@alunos.utfpr.edu.br')
      .should('have.value', 'cauenogueira@alunos.utfpr.edu.br');

    cy.get('input[formControlName=password]')
      .type('erro')
      .should('have.value', 'erro');

    cy.get('button')
      .contains('Sign in')
      .click();

    cy.get('can-alert-dialog')
      .contains('Error')
      .should('be.visible');

    cy.get('can-alert-dialog')
      .contains('Invalid credentials.')
      .should('be.visible');
  })

  it('have to show validate sign in input errors', () => {
    cy.get('button')
      .contains('Sign in')
      .click();

    cy.get('.sig in')
      .contains('Email is required')
      .should('be.visible');

    cy.get('.sig in')
      .contains('Password is required')
      .should('be.visible');
  })
})
