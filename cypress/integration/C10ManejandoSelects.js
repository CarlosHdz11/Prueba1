describe("Prueba de check box", function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
    })
    it("Large tops search", function(){
        cy.get('#layered_category_4').click();
        cy.get('#layered_id_attribute_group_3').click();
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();

        /*Con estos comandos se busco que se tachara sobre
         opciones*/

    })
    it("Order by highest price", function(){
        cy.get("#selectProductSort").select("Price: Highest first");
        cy.get("#selectProductSort").select("In stock");
        
        
    })
})