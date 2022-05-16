describe("Go to diferent elements",function(){
    it("Ir al primer elemento Woman",function(){
        cy.visit("http://automationpractice.com/index.php");
        cy.get("[class=sf-with-ul]").first().click();
    })
})