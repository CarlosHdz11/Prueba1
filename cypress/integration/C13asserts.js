describe("Como usar asserts",function(){
    var a=1;


    it("vamos a ver una igualdad",function(){
        expect(1==1).to.equal(true);
    })
    it("Vamos a ver que no sea una igualdad",function(){
        expect(1==2).to.equal(false);
    })
    it("Vamos a resolver una resta",function(){
        expect(1-1).to.equal(0);
    })
    it("Vamos a ver que una resta no esta bien",function(){
        expect(1-1).to.not.equal(2);
    })
    it("Tiene que ser verdadero",function(){
        expect(2==2).to.be.true;

    })
    it("Tiene que ser falso",function(){
        expect(1==2).to.be.false;
    })
    it("comprobar si la variable existe",function(){
        expect(a).to.exist;
    })
    it("Es menor a 10",function(){
        expect(a).to.be.lessThan(10);

    })
    it("Es mayor a 10",function(){
        expect(a).to.be.greaterThan(10); 
    })
})
