describe('webAcces Oysho', () => {
    beforeEach( () => {
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      cy.clearCookies();
      cy.visit('https://www.oysho.com', {
        failOnStatusCode: false,
      });
    })

    it('assert cookies description and buttons are present', () => {
      cy.cookies_text();
      cy.get('.cookie-setting-link').contains('Configuración de cookies');
      cy.get('#onetrust-accept-btn-handler').contains('Aceptar todas las cookies');
      cy.get('#onetrust-accept-btn-handler').click();
    })
    

    it('Verify that title is correct', () => {
      //Al ser un logo y no un texto, no se puede verificar con cy.title()
      cy.get(header__item-container-oysho).should('be.visible');
    })


    it('Assert search bar is present ',() =>{
      cy.get('.header__search-bar').should('be.visible')
    })

    it('navigation works correctly', ()=>{
      //scrolling
      cy.scrollTo('bottom');
      cy.scrollTo('top');

      //basic navigation 
      cy.visit('https://www.oysho.com/es/novedades-c1010062530.html');
      cy.go('back')
      
      //acces to Rebajas from sidebar 
      cy.get('.category-menu').focus()
      cy.get('a[href="/es/rebajas/los-m%C3%A1s-buscados-c1010052285.html"]').click();

      //change language 
      cy.get('.store-selector__language-list-item').contains('Català').click()
      cy.go('back')
    })
})