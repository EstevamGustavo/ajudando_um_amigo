const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  codigo: Number,
  nome: String,
  desc: String,
  cor: String,
  valor: String,
  foto: String,
  categoriaNome: { type: mongoose.Schema.Types.ObjectId, ref: "categoria" },
  //categoria: String,
  quantidade: Number,
});

module.exports = produtoSchema;
