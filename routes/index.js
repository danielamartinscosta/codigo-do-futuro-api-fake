const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController")


/* GET home page. */
router.get('/', HomeController.index);

router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.create);


module.exports = router;
