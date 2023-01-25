const Produto = require("../../app/models/produto");


describe('Modelo Produto', () =>{
    it('Deve retornar o modelo de Produto', () =>{
      let produto = Produto;
      console.log(produto);
      expect(produto != undefined).toBe(true);
      expect(produto.nome != undefined).toBe(true);
      expect(produto.descricao != undefined).toBe(true);
      expect(produto.nivel_investidor != undefined).toBe(true);         
    });
});