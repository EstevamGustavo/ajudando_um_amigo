const produtoModel = require("../models/produtoModel");

class ProdutoController {
  async salvarProduto(req, res) {
    console.log(req.body);
    const max = await produtoModel.findOne({}).sort({ codigo: -1 });
    let produto = req.body;
    produto.codigo = max ? max.codigo + 1 : 1;
    const resultado = await produtoModel.create(produto);
    res.status(201).json(resultado);
    // res.send("criar produto");
  }

  async listarProduto(req, res) {
    const resultado = await produtoModel.find({}).populate("categoriaNome");
    res.status(200).json(resultado);
  }

  async buscarProdutoPorCodigo(req, res) {
    const codigo = req.params.codigo;
    const resultado = await produtoModel.findOne({ codigo: codigo });
    res.status(200).json(resultado);
  }

  async atualizarProduto(req, res) {
    const codigo = req.params.codigo;
    const _id = String((await produtoModel.findOne({ codigo: codigo }))._id);
    let produto = req.body;
    await produtoModel.findByIdAndUpdate(String(_id), produto);
    res.status(200).send();
  }

  async excluirProduto(req, res) {
    const codigo = req.params.codigo;
    const _id = String((await produtoModel.findOne({ codigo: codigo }))._id);
    await produtoModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new ProdutoController();
