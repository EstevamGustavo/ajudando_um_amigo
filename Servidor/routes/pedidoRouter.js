var express = require('express');
var router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const auth = require('../auth/auth');

router.unsubscribe(auth.autorizar);
router.post('/', pedidoController.salvarPedido);
router.get('/:usuarioId', pedidoController.atualizarPedido);
router.get('/:usuarioId/:codigo', pedidoController.buscarPedidoPorCodigo);
router.put('/:codigo', pedidoController.atualizarPedido);
router.delete('/:codigo', pedidoController.excluirPedido);

module.exports = router;