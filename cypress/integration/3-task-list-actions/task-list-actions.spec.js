/// <reference types="cypress" />


describe('Task list flow actions can website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/auth/sign-in')

        cy.clearLocalStorage();

        cy.get('input[formControlName=email]')
            .type('cauenogueira@alunos.utfpr.edu.br')
            .should('have.value', 'cauenogueira@alunos.utfpr.edu.br');

        cy.get('input[formControlName=password]')
            .type('Abc@123')
            .should('have.value', 'Abc@123');

        cy.get('button')
            .contains('Sign in')
            .should('be.visible')
            .click();

        cy.get('.can-sidenav-button')
            .should('be.visible')
            .click();

        cy.get('mat-nav-list a')
            .contains('Task list')
            .should('have.text', ' Task list ')
            .click();

        cy.get('.can-sidenav-button')
            .should('be.visible')
            .click();
    });

    it('have to open create task list form and close it', () => {
        cy.get('.new-task-list-btn')
            .should('be.visible')
            .click();

        cy.get('can-task-list-form span')
            .contains('Create Task List')
            .should('be.visible');

        cy.get('can-task-list-form mat-toolbar button')
            .should('be.visible')
            .click();
    })

    it('have to create a task list project successfully', () => {
        cy.get('.new-task-list-btn')
            .should('be.visible')
            .click();

        cy.get('can-task-list-form span')
            .contains('Create Task List')
            .should('be.visible');

        cy.get('input[formControlName=name]')
            .type('Receita pudim')
            .should('have.value', 'Receita pudim');

        cy.get('input[formControlName=description]')
            .type('Receita com passo a passo para fazer um pudim de leite.')
            .should('have.value', 'Receita com passo a passo para fazer um pudim de leite.');

        cy.get('can-task-list-form button')
            .contains('Confirm')
            .should('be.visible')
            .click();

        cy.get('can-alert-dialog h1')
            .contains('Success')
            .should('be.visible');

        cy.get('can-alert-dialog button')
            .contains('Ok')
            .should('be.visible')
            .click();
    })

    it('have to edit a task list project successfully', () => {
        cy.get('.task-list-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Edit')
            .should('be.visible')
            .click();

        cy.get('can-task-list-form')
            .contains('span', 'Edit Task List')
            .should('be.visible');

        cy.get('input[formControlName=name]')
            .type(' edited')
            .should('have.value', 'Receita pudim edited');

        cy.get('input[formControlName=description]')
            .type(' edited')
            .should('have.value', 'Receita com passo a passo para fazer um pudim de leite. edited');

        cy.get('div[class=button-row] button[color=primary]')
            .contains('span', 'Confirm')
            .should('be.visible')
            .click();

        cy.get('can-alert-dialog')
            .contains('h1', 'Success')
            .should('be.visible');

        cy.get('can-alert-dialog')
            .contains('div[class=mat-dialog-content]', 'Task list was updated successfully.')
            .should('be.visible');

        cy.get('can-alert-dialog button')
            .contains('Ok')
            .should('be.visible')
            .click();
    })

    it('have to delete a task list project successfully', () => {
        cy.get('.task-list-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Delete')
            .should('be.visible')
            .click();

        cy.get('can-alert-dialog')
            .contains('h1', 'Success')
            .should('be.visible');

        cy.get('can-alert-dialog')
            .contains('div[class=mat-dialog-content]', 'Task list was deleted successfully.')
            .should('be.visible');

        cy.get('can-alert-dialog')
            .contains('button', 'Ok')
            .click();
    })
})
