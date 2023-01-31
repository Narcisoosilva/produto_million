const axios = require('axios').default;
const { default: Axios } = require('axios');
const request = require("request-promise");
const Produto = require('../../app/models/produto');
const host = "http://localhost:3000";
const TOKEN = "123456789";

describe("AmdController", () =>{
  beforeEach(async() =>{
    await Produto.deleteMany({descricao: / /}).then(error =>{}); 
    await Produto.create([{nome: "teste1", descricao:'test do produto1', nivel_investidor: 3 }, {nome: "teste2", descricao:'test do produto2', nivel_investidor: 4 }]);
  });


  describe("GET /produto.json - deve retornar uma lista de produtos", () =>{
    it("deve retornar o status code de 200", async(done) => {
      const response = await axios.get(`${host}/produto.json`, {headers: {'token': TOKEN}});
      expect(response.status).toBe(200);
      done();
    });
    
    it("deve retornar dados do Produtos da API", async(done) => {
      const response = await axios.get(`${host}/produto.json`, {headers: {'token': TOKEN}});
      const itens = response.data;
      expect(itens[0].nome).toBe("teste1");
      expect(itens[1].nome).toBe("teste2");
      done();
    });
  });

  describe("POST /produto.json - produto", () =>{
    it("deve cadastrar um produto na API", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      const body = { 
        nome, 
        descricao: "testando alguma coisa falando sobre o produto",
        nivel_investidor: "2"
      }
      const response = await axios.post(`${host}/produto.json`, body, {headers: {'token': TOKEN}});
      expect(response.status).toBe(201);
      done();
    });
  });

  describe("PUT /produto.json - produto", ()=>{
    it("deve alterar um produto", async(done)=>{
      let nome = `teste ${new Date().getTime()}`;
      const produto = await Produto.create({nome: nome, descricao:"testando alguma coisa falando sobre o produto", nivel_investidor:"6"});
      const body={
        nome: "teste_alterei", 
        descricao: "testando alguma coisa falando sobre o produto 22",
        nivel_investidor: "5"
      }
      const response = await axios.put(`${host}/produto/${produto._id}.json`, body, {headers:{'token': TOKEN}});
      expect(response.status).toBe(204);
      done();
    });
  });

  describe("DELETE /produto.json - produto", ()=>{
    it("deve deletar um produto", async(done)=>{
      let nome = `teste ${new Date().getTime()}`;
      const produto = await Produto.create({nome: nome, descricao:"testando deletar o produto", nivel_investidor:"7"});
      const response = await axios.delete(`${host}/produto/${produto._id}.json`, {headers:{'token': TOKEN}});
      expect(response.status).toBe(204);
      done();
    });
  });

});