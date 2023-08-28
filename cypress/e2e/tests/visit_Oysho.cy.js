describe('webAcces Oysho', () => {
  beforeEach(()=>{
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

  

  it('Verify that title is correct', () => {
    cy.visit("https://www.oysho.com/es/index.html")
    //Al ser un logo y no un texto, no se puede verificar con cy.title()
    cy.get('.header__item-container-oysho').should('be.visible');
  })


  it('Assert search bar is present ',() =>{
    cy.visit("https://www.oysho.com/es/index.html")

    cy.get('.header__search-bar').should('be.visible')
  })

  it('navigation works correctly', ()=>{
    //basic navigation 
    cy.visit('https://www.oysho.com/es/novedades-c1010062530.html');

    //change language 
    cy.get('.store-selector__language-list-item').contains('Català').click()
    cy.wait(5000);
    cy.go('back')
  })
})