const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    /*
    codigo: {type: Number, required: [true, 'Informação obrigatória']},
    nome: {type: String, required: [true, 'Informação obrigatória']},
    fone: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    login: String,
    senha: {
        type: String,
        required: true,
        select: false
    },
    foto: String,
    dtaCriacao: {
        type: Date,
        default: Date.now
    },
    */

    codigo: Number,
    nome: String,
    fone: String,
    email: String,
    login: String,
    senha: String,
    foto: String,

});
/*
usuarioSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;
    next();
});
*/
module.exports = usuarioSchema;