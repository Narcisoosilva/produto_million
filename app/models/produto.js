var mongoose = require('../../db/conexao');

const Produto = mongoose.model('user', {
  nome: {type: String, required: true },
  descricao:{type: String, required: true },
  nivel_investidor:{type: String, required: true },
});

module.exports = Produto;