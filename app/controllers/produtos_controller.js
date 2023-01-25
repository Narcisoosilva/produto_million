const request = require('request');
var Produto = require('../models/produto');

const ProdutoController = {
  index: function(req, res, next) {
    res.send([{
      nome: "Fundo Imbiliario",
      descricao:"fundo imbobiliario unitario",
      nivel_investidor:3,
    }]);
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
}

module.exports = ProdutoController;