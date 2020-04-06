const emailInput = 'input[name="_email"]'
const passwordInput = 'input[name="_password"]'
const loginBtn = 'button[type="submit"]'
const menu = 'a[data-tour-step-name="TOUR_MARKETPLACE_STEP_NAME"]'
const errorMessage = '.error-message'

class LoginPage {

    static inputEmail(email){
        cy.get(emailInput).type(email)
    }

    static inputPassword(password){
        cy.get(passwordInput).type(password)
    }

    static clickOnLogin(){
        cy.get(loginBtn).click({force: true})
    }

    static submitLoginForm(email, password){
        this.inputEmail(email)
        this.inputPassword(password)
    }

    static getMenu(){
        return cy.get(menu)
    }

    static getErrorMessage(){
        return cy.get(errorMessage)
    }
}
export default LoginPage