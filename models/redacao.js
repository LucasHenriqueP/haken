const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

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
        type: String//mongoose.Schema.Types.ObjectId Aqui vai entrar uma referencia para o id do autor
    },
    data: {
        type: Date
    }
});

const Redacao = mongoose.model('redacao', RedacaoSchema, 'redacoes');

// Aqui codigo para testar se a model foi criada certa
const teste = new Redacao({
    titulo: "Um titulo qualquer",
    arquivo: "redacao.pdf",
    autor: "Eu", //  Depois vai entrar uma referencia para a 'tabela' aluno
    tema: "um tema legal" // Depois vai entrar uma referencia para a 'tabela' tema
})
teste.save()
console.log(teste);
