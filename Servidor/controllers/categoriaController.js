const categoriaModel = require("../models/categoriaModel");

class CategoriaController {
  async salvarCategoria(req, res) {
    console.log("entrou no salvar categoria");
    // const max = await categoriaModel.findOne({}).sort({ codigo: -1 });
    // console.log(max);
    let categoria = req.body;
    // categoria.codigo = max ? max.codigo + 1 : 1;
    const resultado = await categoriaModel.create(categoria);
    res.status(201).json(resultado);
    // res.send("deu boa galera");
  }

  async listarCategoria(req, res) {
    const resultado = await categoriaModel.find({});
    res.status(200).json(resultado);
  }

  async buscarCategoriaPorCodigo(req, res) {
    const codigo = req.params.codigo;
    const resultado = await categoriaModel.findOne({ codigo: codigo });
    res.status(200).json(resultado);
  }

  async atualizarCategoria(req, res) {
    const codigo = req.params.codigo;
    const _id = String((await categoriaModel.findOne({ codigo: codigo }))._id);
    let categoria = req.body;
    await categoriaModel.findByIdAndUpdate(String(_id), categoria);
    res.status(200).send();
  }

  async excluirCategoria(req, res) {
    const codigo = req.params.codigo;
    const _id = String((await categoriaModel.findOne({ codigo: codigo }))._id);
    await categoriaModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new CategoriaController();
