var express = require('express');
const HomeController = require('../app/controllers/home_controller');
const AdmController = require('../app/controllers/adm_controller')
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index)

module.exports = router;
