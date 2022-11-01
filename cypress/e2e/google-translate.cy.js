describe('Goole Translate Tests',()=>{

    describe('Translate from German to Spanish', ()=>{

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

        it('should enter the selected language initial text ', ()=>{
            cy.fixture('example').as('data').then((data)=>{
                cy.get('textarea[aria-label="Source text"]').click();
                
                cy.wait(1000).then(()=>{
                    cy.get('textarea[aria-label="Source text"]').type(data.initialtext);
                });
            });
        });

        it('should detect that the target language translation is correct', ()=>{
            cy.fixture('example').as('data').then((data)=>{
                cy.get('span.ryNqvb').should('have.text', data.ExpectedResult);
            });
        });

    });

    describe('Swap Languages, Verify Results', ()=>{

        it('should click the swap languages button', ()=>{
            cy.get('button[aria-label="Swap languages (Cmd+Shift+S)"]').eq(0).should('exist').click();
            cy.wait(1000);
        });

        it('the Source Text area should have Spanish translation ', ()=>{
            cy.fixture('example').as('data').then((data)=>{
                cy.get('textarea[aria-label="Source text"]').parent().within(()=>{
                    cy.get('.D5aOJc.vJwDU').should('have.text', data.ExpectedResult);
                });
            });
        });

        it('the Target text area should have the German word', ()=>{
            cy.fixture('example').as('data').then((data)=>{
                cy.get('span.ryNqvb').should('have.text', data.initialtext);
            });
        });

    });

    describe('Use the Screen Keyboard ', ()=>{

        it('should clear the input field', ()=>{
            cy.get('textarea[aria-label="Source text"]').clear();
        });

        it('should click the select input tool button', ()=>{
            cy.get('[aria-label="Show the Input Tools menu"]').click();
        });

        it('should select the screen keyboard', ()=>{
            cy.get('.ita-kd-inputtool-icon').click();
        });

        it.skip('should type "Hi!" into the virtual keyboard', ()=>{});

    });




});