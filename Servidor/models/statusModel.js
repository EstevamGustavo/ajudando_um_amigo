const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    codigo: {type: Number, required: [true, 'Informação obrigatória']},
    nome: {type: String, required: [true, 'Informação obrigatória']},
});

module.exports = mongoose.model('status', statusSchema);