describe("Go to diferent elements",function(){

    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php");

    })
    it("Ir al primer elemento Woman",function(){
       cy.get("[class=sf-with-ul]").first().click();

    })
    it("Ir al tercer elemento dress(Es cualquier elemento)", function(){
        cy.get("[class=sf-with-ul]").eq(3).click()


    })
})