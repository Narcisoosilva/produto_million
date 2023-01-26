var express = require('express');
const HomeController = require('../app/controllers/home_controller');
const ProdutosController = require('../app/controllers/produtos_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/produto.json', ProdutosController.index);
router.post('/produto.json', ProdutosController.create);
router.put('/produto/:produto_id.json', ProdutosController.change);
router.delete(`/produto/:produto_id.json`, ProdutosController.delete);

module.exports = router;
