describe('Goole Translate Tests',()=>{
    it('should navigate to Google Translate', () => {
        cy.visit('https://translate.google.com/').then(()=> {
            cy.url().should('eq', 'https://translate.google.com/');
        });
    });

    it('should show a Source Languages dropdown', ()=>{
        cy.get('[aria-label="More source languages"]').eq(0).should('exist');
    });

    it('should click on the Source Languages dropdown', ()=>{
        cy.get('[aria-label="More source languages"]').eq(0).click();
    });

    it('should click German as the source language', ()=>{
        cy.get('input[aria-label="Search languages"]').eq(0).click().type('German{enter}');
    });

    it('should show a Target Languages dropdown button', ()=>{
        cy.get('[aria-label="More target languages"]').eq(0).should('exist');
    });

    it('should click on the Source Languages dropdown', ()=>{
        cy.get('[aria-label="More target languages"]').eq(0).click();
    });

    it('should select Spanish as the target language', ()=>{
        cy.get('input[aria-label="Search languages"]').eq(1).click({force: true}).type('Spanish{enter}');
    });

    it.skip('should type the ', ()=>{
        cy.get('textarea[aria-label="Source text"]').click();
    });



});