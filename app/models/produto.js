var mongoose = require('../../db/conexao');

const Produto = mongoose.model('user', {
  nome: {type: String, required: true, unique:true },
  descricao:{type: String, required: true },
  nivel_investidor:{type: Number, required: true },
});

module.exports = Produto;