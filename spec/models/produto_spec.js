const Produto = require("../../app/models/produto");


describe('Modelo Produto', () =>{
    it('Deve retornar o modelo de Produto', () =>{
        Produto.find().then(dado => {
        expect(dado != undefined).toBe(true);
      });    
    });
});