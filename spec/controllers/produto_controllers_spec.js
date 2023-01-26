const axios = require('axios').default;
const request = require("request-promise");
const Produto = require('../../app/models/produto');
const host = "http://localhost:3000";

describe("AmdController", () =>{
    beforeEach(async() =>{
      await Produto.deleteMany({descricao: /test/}).then(error =>{}); 
      await Produto.create([{nome: "teste1", descricao:'test do produto1', nivel_investidor: 3 }, {nome: "teste2", descricao:'test do produto2', nivel_investidor: 5 }]);
    });
  
  
    describe("GET /produto.json - deve retornar uma lista de produtos", () =>{
      it("deve retornar o status code de 200", async(done) => {
        const response = await axios.get(`${host}/produto.json`);
        expect(response.status).toBe(200);
        done();
      });
      
      it("deve retornar dados do Produtos da API", async(done) => {
        const response = await axios.get(`${host}/produto.json`);
        const itens = response.data;
        expect(itens[0].nome).toBe("teste1");
        expect(itens[1].nome).toBe("teste2");
        done();
      });
    });
});