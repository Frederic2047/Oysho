describe('Searching some articles', () => {
    beforeEach(() => {
      cy.request({
        method: 'GET',
        url: 'http://www.oysho.com',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'es-ES,es;q=0.9',
            'Referer': 'http://www.oysho.com',
        },
        followRedirect: true, 
      })
    });
  
    it('Click search button and type for search articles', () => {
       
        cy.get('[placeholder("Buscar")]').click().type('pantalon{enter}')
        //click on first result 
        cy.get('img.x-result-picture-image').first().click();
    });

    it('select size and add to cart', () => {
        cy.get('.sizes__list-size').contains('M').click();
        cy.get('.detail-sizes-selector__wrapper-actions').click()
    })

    it('see shopping bag ', () => {
        cy.get('.shopcart-header__button').click()
    })
});
