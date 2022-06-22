const mongoose = require('mongoose');
const produtoSchema = require('./schemas/produtoSchema');

const pedidoSchema = new mongoose.Schema({
    codigo: {type: Number, required: [true, 'Informação Obrigatório']},
    data: {type: Date, default: Date.now},
    itens: [produtoSchema],
    total: Number,
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'},
    statusId: {type: mongoose.Schema.Types.ObjectId, ref: 'status'}

});

module.exports = mongoose.model('pedido', pedidoSchema);