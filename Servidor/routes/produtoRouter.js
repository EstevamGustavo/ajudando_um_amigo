var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.salvarProduto);
router.get('/', produtoController.listarProduto);
router.get('/:codigo', produtoController.buscarProdutoPorCodigo);
router.put('/:codigo', produtoController.atualizarProduto);
router.delete('/:codigo', produtoController.excluirProduto);

/*

    //Create de produtos
    router.post('/', function(req, res, next){
        let produto = req.body;
        const id = produtos.length + 1;
        produto.id = id;
        produtos.push(produto);
        res.send(produtos);
    });

    //Read de produtos
    router.get('/', function(req, res, next){
        res.json(produtos);
    });

    //ReadForId de produtos
    router.get('/:produtoId', function(req, res, next){
        const produtoId = req.params.produtoId;
        const produto = produtos[produtoId -1];
        res.json(produto);
    })

    //Update de produtos
    router.put('/:produtoId', function(req, res, next){
        let produto = req.body;
        produtos.splice(produto.id -1, 1, produto);
        res.send(produto);
    });

    //Delete de produtos
    router.delete('/:produtoId', function(req, res, next){
        const produtoId = req.params.produtoId -1;
        produtos.splice(produtoId);
        res.status(204);
    });

*/

module.exports = router;
