const request = require('request');
var Produto = require('../models/produto');

const ProdutoController = {
  index: function(req, res, next) {
    Produto.find().then(dado => res.send(dado));
  },

  create: (req, res, next)=> {    
    const produto = new Produto({nome: req.body.nome ,descricao:req.body.descricao, nivel_investidor: req.body.nivel_investidor});
    produto.save(error =>{
      if (error) {
        res.status(401).send(error);
        return;
      }
      res.status(201).send({});
    }); 
  },

  change: async(req, res, next)=> {
    try {
      await Produto.findOneAndUpdate({_id: req.params.produto_id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email});
      res.status(204).send(`Alterado com o id ${req.params.produto_id}`);
    } catch (error) {
      res.status(401).send(`Erro ${error}`);
    }; 
  },

  delete:async(req, res, next) =>{
    try {
      await Produto.findByIdAndDelete(req.params.produto_id);
      res.status(204).send({});
    } catch (error) {
      res.status(401).send({});
    };
  },
}

module.exports = ProdutoController;