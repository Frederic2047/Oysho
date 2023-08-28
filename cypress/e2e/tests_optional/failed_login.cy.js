describe('failed login example', () => {
    beforeEach( () => {
      cy.visit({
        url: "https://www.oysho.com/es/index.html",
        headers: {
          'Accept' : 'cy.accept()',
          'User-Agent': 'cy.user-Agent()',
          'Accept-Encoding': 'cy.enconding()',
          'Accept-Language': 'cy.language()',
          'Cache-Control': 'cy.cachecontrol()',
          'Connection': 'cy.connection()',
          'Cookie': 'cy.Cookie()',
          'Host': 'www.oysho.com',
          'Sec-Ch-Ua': 'cy.sec-Ch-Ua()',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': "Windows",
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Upgrade-Insecure-Requests': 1,
        }
      })
      cy.cookies_banner()

    })
    
    it('typing login form and obtain a loggin error', () =>{
      cy.get('body').invoke('css', 'overflow', 'hidden');
      cy.viewport(1600, 900);
      cy.get('[data-testid="user-button"]').click()
      const user_mail = 'fredericpascual@oysho.com'
      const user_pass = 'falsepassword1234'
      
      cy.get('#email-login').click().type(user_mail)
      cy.get('#password').click().type(user_pass)
      cy.get('.login__button').click()
      cy.wait(4000)
      cy.get('.login__button').click()
      cy.get('[data-testid="login-generic-error"]').contains('Ha habido un problema al logarse. Por favor inténtalo de nuevo')
      cy.get('body').invoke('css', 'overflow', 'auto');

    })
})
