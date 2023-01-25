var express = require('express');
const HomeController = require('../app/controllers/home_controller');
const ProdutosController = require('../app/controllers/produtos_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/produto.json', ProdutosController.index)

module.exports = router;
