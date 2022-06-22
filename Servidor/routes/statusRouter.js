var express = require('express');
var router = express.Router();
const statusController = require('../controllers/statusController');

router.post('/', statusController.salvarStatus);
router.get('/', statusController.atualizarStatus);
router.get('/:codigo', statusController.buscarStatusPorCodigo);
router.put('/:codigo', statusController.atualizarStatus);
router.delete('/:codigo', statusController.excluirStatus);

module.exports = router;