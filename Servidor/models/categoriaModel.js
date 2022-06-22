const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  // codigo: {type: Number, required: [true, 'Informação obrigatória']},
  //codigo: Number,
  nome: { type: String, required: [true, "Informação obrigatória"] },
  //nome: String,
  desc: String,
});

module.exports = mongoose.model("categoria", categoriaSchema);
