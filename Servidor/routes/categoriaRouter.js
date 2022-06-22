var express = require('express');
var router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', categoriaController.salvarCategoria);
router.get('/', categoriaController.listarCategoria);
router.get('/:codigo', categoriaController.buscarCategoriaPorCodigo);
router.put('/:codigo', categoriaController.atualizarCategoria);
router.delete('/:codigo', categoriaController.excluirCategoria);

module.exports = router;