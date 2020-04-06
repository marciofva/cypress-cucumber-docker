const loginMenuBtn = 'Login'

class HomePage {

    static goToLogin(){
        cy.contains(loginMenuBtn).click()
    }
}
export default HomePage