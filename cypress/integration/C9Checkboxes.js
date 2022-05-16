
describe("Pruebas de click en cajas", function(){

    it('Vamos a probar los checkbox', function(){
        cy.visit("http://automationpractice.com/index.php");
        //cy.get('#search_query_top').type("dress");
        //cy.get('#searchbox > .btn').click();
    })
    it('Vamos a probar los checkbox', function(){
        cy.visit("http://automationpractice.com/index.php");
        cy.get('#search_query_top').type("hat");
        cy.get('#searchbox > .btn').click();
    })
        
})
