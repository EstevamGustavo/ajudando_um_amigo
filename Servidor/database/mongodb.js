const mongoose = require("mongoose");

const URL =
  "mongodb+srv://dev_hom_user:45223831@contabilidadehomdev.krizp.mongodb.net/test";

const db = mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;

con.on("open", function () {
  console.log("Conectado ao MongoDB");
});

con.on("error", function () {
  console.log("Erro na conexão com o MongoDB");
});

con.on("close", function () {
  console.log("Encerrando conexão com o MongoDB");
});

module.exports = db;
