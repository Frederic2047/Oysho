describe('login example', () => {
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
    
    it('user can login', () =>{
        const username = 'fpascualga@outlook.es'
        const pass = 'Frederictest123'

        cy.get('[data-testid="user-button"]').click()
        cy.get('#email-login').type(username)
        cy.get('.login-password').type(pass)
        cy.get('.login__button').should('be.visible')
                cy.get('[data-testid="login-button"]').click()

        cy.visit({
          url: "https://www.oysho.com/es/account/",
          headers: {
            'Accept' : 'cy.accept()',
            'User-Agent': 'cy.user-Agent()',
            'Accept-Encoding': 'cy.enconding()',
            'Accept-Language': 'cy.language()',
            'Cache-Control': 'cy.cachecontrol()',
            'Connection': 'cy.connection()',
            'Cookie': 'cy.logged_cookie()',
            'Host': 'www.oysho.com',
            'Sec-Ch-Ua': 'cy.sec-Ch-Ua()',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': "Windows",
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Upgrade-Insecure-Requests': 1,

            //La prueba sale Pass pero no detecta el login ni pasandole la cookie de autentificación. 
          }
        })
    })
})
