const request = require('request');
var Produto = require('../models/produto');
const TOKEN = "123456789";

const ProdutoController = {
  index: function(req, res, next) {
    if (req.headers.token == TOKEN) {
      Produto.find().then(dado => res.send(dado));
    } else {
      res.status(401).send({error: "Acesso negado a API."});
    };    
  },

  create: (req, res, next)=> {   
    if (req.headers.token == TOKEN) { 
      const produto = new Produto({nome: req.body.nome ,descricao:req.body.descricao, nivel_investidor: req.body.nivel_investidor});
      produto.save(error =>{
        if (error) {
          res.status(401).send(error);
          return;
        }
        res.status(201).send({});
      });
    } else {
      res.status(401).send({error: "Acesso negado a API."});
    };
  },

  change: async(req, res, next)=> {
    if (req.headers.token == TOKEN) { 
      try {
        await Produto.findOneAndUpdate({_id: req.params.produto_id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email});
        res.status(204).send(`Alterado com o id ${req.params.produto_id}`);
      } catch (error) {
        res.status(401).send(`Erro ${error}`);
      };
    } else {
      res.status(401).send({error: "Acesso negado a API."});
    };
  },

  delete:async(req, res, next) =>{
    if (req.headers.token == TOKEN) { 
      try {
        await Produto.findByIdAndDelete(req.params.produto_id);
        res.status(204).send({});
      } catch (error) {
        res.status(401).send({});
      };
    } else {
      res.status(401).send({error: "Acesso negado a API."});
    };
  },
  
}

module.exports = ProdutoController;