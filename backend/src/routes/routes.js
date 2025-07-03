const express = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");
const EstoqueController = require("../controllers/EstoqueController");
const MarcaController = require("../controllers/MarcaController");
const CompraController = require("../controllers/CompraController");
const CategoriaController = require("../controllers/CategoriaController");
const FormaPagamentoController = require("../controllers/FormaPagamentoController");
const UnidadeMedidaController = require("../controllers/UnidadeMedidaController");
const UsuarioController = require("../controllers/UsuarioController");

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

router.post('/compra', CompraController.create);
router.get('/compra', CompraController.index);
router.delete('/compra/:id', CompraController.delete);
router.put('/compra/:id', CompraController.update);

router.post('/categoria', CategoriaController.create);
router.get('/categoria', CategoriaController.index);
router.delete('/categoria/:id', CategoriaController.delete);
router.put('/categoria/:id', CategoriaController.update);

router.post('/formaPagamento', FormaPagamentoController.create);
router.get('/formaPagamento', FormaPagamentoController.index);
router.delete('/formaPagamento/:id', FormaPagamentoController.delete);
router.put('/formaPagamento/:id', FormaPagamentoController.update);

router.post('/unidadeMedida', UnidadeMedidaController.create);
router.get('/unidadeMedida', UnidadeMedidaController.index);
router.delete('/unidadeMedida/:id', UnidadeMedidaController.delete);
router.put('/unidadeMedida/:id', UnidadeMedidaController.update);

router.post('/usuario', UsuarioController.create);
router.get('/usuario', UsuarioController.index);
router.delete('/usuario/:id', UsuarioController.delete);
router.put('/usuario/:id', UsuarioController.update);

module.exports = router;