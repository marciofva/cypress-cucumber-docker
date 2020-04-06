/// <reference types="Cypress" />

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../pages/login.po'
import HomePage from '../pages/home.po'

Before(() => {
    cy.visit('/')
})

Given(`I navigate to the login page`, () => {
    HomePage.goToLogin()
})

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
  })

When('I input the credentials {string} and {string}', (email, password) => {
    LoginPage.submitLoginForm(email, password)
})

Given('I click on login button', () => {
    LoginPage.clickOnLogin()
})

Given('Carrier should be logged in', () => {
    LoginPage.getMenu().should('be.visible')
})

Then('Should see the message {string}', (message) => {
    LoginPage.getErrorMessage().should('include.have.text', message)
  })
