
const ProdutoController = {
    index: function(req, res, next) {
        res.send([{
          nome: "Fundo Imbiliario",
          descricao:"fundo imbobiliario unitario",
          nivel_investidor:3,
        }]);
      }
}

module.exports = ProdutoController;