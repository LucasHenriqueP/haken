const mongoose = require('mongoose');
const aluno = require("./aluno")
const redacao = require('./redacao')
const tema = require('./tema')
const redacao_cor = require('./redacao_corrigida')


mongoose.connect("mongodb://127.0.0.1/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

aluno.remove({}).then();
redacao.remove({}).then()
tema.remove({}).then()
redacao_cor.remove({}).then()