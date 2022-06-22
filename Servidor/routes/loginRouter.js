var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.salvarUsuario);
router.get('/', loginController.listarUsuario);
router.get('/:codigo', loginController.buscarUsuarioPorCodigo);
router.put('/:codigo', loginController.atualizarUsuario);
router.delete('/:codigo', loginController.excluirUsuario);

router.post('/login', loginController.login);

module.exports = router;