const pedidoModel = require('../models/pedidoModel');

class PedidoController{

    async salvarPedido(req, res){
        const max = await produtoModel.findOne({}).sort({codigo: -1});
        let produto = req.body;
        produto.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);
    }

    async listarPedido(req, res){
        const resultado = await produtoModel.find({'usuarioId': req.params.usuarioId});
        res.status(200).json(resultado);
    }

    async buscarPedidoPorCodigo(req, res){
        const {usuarioId, codigo} = req.params;
        const resultado = await produtoModel.findOne({'codigo': codigo, 'usuarioId': usuarioId});
        res.status(200).json(resultado);
    }

    async atualizarPedido(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        let produto = req.body;
        await produtoModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send();
    }

    async excluirPedido(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        await produtoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

}

module.exports = new PedidoController();