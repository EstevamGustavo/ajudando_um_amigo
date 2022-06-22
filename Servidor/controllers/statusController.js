const statusModel = require('../models/statusModel');

class StatusController{

    async salvarStatus(req, res){
        const max = await produtoModel.findOne({}).sort({codigo: -1});
        let produto = req.body;
        produto.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);
    }

    async listarStatus(req, res){
        const resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarStatusPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await produtoModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }

    async atualizarStatus(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        let produto = req.body;
        await produtoModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send();
    }

    async excluirStatus(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        await produtoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

}

module.exports = new StatusController();