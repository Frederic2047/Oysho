describe('failed login example', () => {
    beforeEach( () => {
      cy.request({
        method: 'GET',
        url: 'http://www.oysho.com',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'es-ES,es;q=0.9',
            'Referer': 'http://www.oysho.com',
        },
      });
      cy.visit('http://www.oysho.com')

    })

    it('click on login button', () => {
      cy.get('.header__user').click()
    })
    
    it('typing login form and obtain a loggin error', () =>{
      const user_mail = 'fredericpascual@oysho.com'
      const user_pass = 'falsepassword1234'
      const errorLoggin = 'Ha habido un problema al logarse. Por favor inténtalo de nuevo';

      cy.get('#email-login').click().type(user_mail)
      cy.get('#password').click().type(user_pass)
      cy.get('.login__button').click()
      cy.contains('.login__error-message', errorLoggin).should('be.visible')
    })
})
