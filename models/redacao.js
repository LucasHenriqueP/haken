const mongoose = require("mongoose");

const RedacaoSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    tema:{
        type: String//mongoose.Schema.Types.ObjectId Aqui vai entrar uma referencia para o id do tema
    },
    arquivo:{
        type: String
    },
    autor:{
        type: mongoose.Schema.Types.ObjectId //Aqui vai entrar uma referencia para o id do autor
    },
    data: {
        type: Date
    }
});

const Redacao = mongoose.model('redacao', RedacaoSchema, 'redacoes');


module.exports = Redacao; 
