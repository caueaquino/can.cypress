/// <reference types="cypress" />


describe('Task item flow actions can website', () => {
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

    it('have to create a task list to test task items', () => {
        cy.get('.new-task-list-btn')
            .should('be.visible')
            .click();

        cy.get('can-task-list-form span')
            .contains('Create Task List')
            .should('be.visible');

        cy.get('input[formControlName=name]')
            .type('Receita lasanha')
            .should('have.value', 'Receita lasanha');

        cy.get('input[formControlName=description]')
            .type('Receita com passo a passo para fazer uma lasanha.')
            .should('have.value', 'Receita com passo a passo para fazer uma lasanha.');

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

    it('have to create a task successfully', () => {
        cy.get('.task-list-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Open')
            .should('be.visible')
            .click();

        cy.get('can-task-list-project .new-task-button')
            .should('be.visible')
            .click();

        cy.get('can-task-item-form')
            .contains('span', 'Create Task')
            .should('be.visible');

        cy.get('input[formControlName=name]')
            .type('Separar os ingredientes para a receita')
            .should('have.value', 'Separar os ingredientes para a receita');

        cy.get('input[formControlName=description]')
            .type('Separar os ingredientes necessarios para realizar o preparo da lasanha.')
            .should('have.value', 'Separar os ingredientes necessarios para realizar o preparo da lasanha.');

        cy.get('can-task-item-form button')
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

    it('have to edit task successfully', () => {
        cy.get('.task-list-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Open')
            .should('be.visible')
            .click();

        cy.get('.task-item-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Edit')
            .should('be.visible')
            .click();

        cy.get('can-task-item-form')
            .contains('span', 'Edit Task')
            .should('be.visible');

        cy.get('input[formControlName=name]')
            .type(' edited')
            .should('have.value', 'Separar os ingredientes para a receita edited');

        cy.get('input[formControlName=description]')
            .type(' edited')
            .should('have.value', 'Separar os ingredientes necessarios para realizar o preparo da lasanha. edited');

        cy.get('can-task-item-form button')
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

    it('have to delete task successfully', () => {
        cy.get('.task-list-context-menu')
            .last()
            .should('be.visible')
            .click();

        cy.get('.mat-menu-content button')
            .contains('Open')
            .should('be.visible')
            .click();

        cy.get('.task-item-context-menu')
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
            .contains('div[class=mat-dialog-content]', 'Task was deleted successfully.')
            .should('be.visible');

        cy.get('can-alert-dialog')
            .contains('button', 'Ok')
            .click();
    })

    it('have to delete task list used in task item test', () => {
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