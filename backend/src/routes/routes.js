const express = require("express");
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');
const EstoqueController = require("../controllers/EstoqueController");
const MarcaController = require("../controllers/MarcaController");

// Rotas
router.post('/produtos', ProdutoController.create);
router.get('/produtos', ProdutoController.index);
router.delete('/produtos/:id', ProdutoController.delete);
router.put('/produtos/:id', ProdutoController.update);

router.post('/estoque', EstoqueController.create);
router.get('/estoque', EstoqueController.index);
router.delete('/estoque/:id', EstoqueController.delete);
router.put('/estoque/:id', EstoqueController.update);

router.post('/marca', MarcaController.create);
router.get('/marca', MarcaController.index);
router.delete('/marca/:id', MarcaController.delete);
router.put('/marca/:id', MarcaController.update);

module.exports = router;