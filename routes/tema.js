const Router = require('express').Router()
const Tema = require('../models/tema');


Router.get('/', (req, res) =>{
    Tema.find({}, (err, respostas) =>{
        if(err){
            res.sendStatus(404)
        }else{
            res.json(respostas)
        }
    })
})

Router.post('/', (req, res) =>{
    console.log('algo chegou ');
    
    nome = req.body.nome
    data_limite = req.body.data
    texto_apoio = req.body.texto
    novo_tema = new Tema({
        nome,
        data_limite,
        texto_apoio
    })
    novo_tema.save();
    res.redirect("/paginadoprofessor159");
})

module.exports = Router;