describe('Searching some articles', () => {
    beforeEach(() => {
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

    });
  
    it('Click search button and type for search articles', () => {
        cy.viewport(1600, 900);
        cy.get('.header__search--title').click()
        cy.get('[data-test="search-input"]').type('pantalon{enter}');
        cy.get('article.x-result:first').filter('[data-test="search-grid-result"]').click()
        cy.get('button.sizes__list-size-name').eq(2).contains('M').click();

        //see shopping bag
        cy.get('.shopcart-header__button').click()


    });
});
