const usuarioModel = require('../models/usuarioModel');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');


class LoginController{

    async login(req, res){
        const {email, senha} = req.body;
        const usuario = await usuarioModel.findOne({'email': email}).select('+senha');
        if(!usuario){
            res.status(400).send({error: 'Usuario não encontrado'});
        }

        if(!await bcryptjs.compare(senha, usuario.senha)){
            res.status(400).send({error: 'Senha invalida'});
        }

        const token = auth.gerarToken(usuario);
        res.status(201).json({id: usuario._id, nome: usuario.nome, email: usuario.email, token: token});
    }

    async salvarUsuario(req, res){
        let usuario = req.body;
        const max = await usuarioModel.findOne({}).sort({codigo: -1});
        usuario.codigo = max == null ? 1 : max.codigo + 1;

        if(await usuarioModel.findOne({'email': usuario.email})){
            res.status(400).send({error: 'Usuario já cadastrado'});
        }

        const resultado = await usuarioModel.create(usuario);
        const token = auth.gerarToken(resultado);
        res.status(201).json({id: usuario._id, nome: usuario.nome, email: usuario.email, token: token});
    }

    async listarUsuario(req, res){
        const resultado = await usuarioModel.find({});
        res.status(200).json(resultado);
    }

    async buscarUsuarioPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await usuarioModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }

    async atualizarUsuario(req, res){
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({'codigo': codigo}))._id);
        let usuario = req.body;
        await usuarioModel.findByIdAndUpdate(String(_id), usuario);
        res.status(200).send();
    }

    async excluirUsuario(req, res){
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({'codigo': codigo}))._id);
        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }

    
}

module.exports = new LoginController();