const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

const Redacao_Corrigida_Schema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    tema:{
        type: String
    },
    arquivo:{
        type: String
    },
});

const Redacao_corrigida = mongoose.model('redacao_corrigida', Redacao_Corrigida_Schema, 'redacao_corrigida') 
//Por favor veja se declarei certo os schemas

const testered_corrigida = new Redacao_corrigida({
    titulo: "Os tres mosqueteiros",
    tema: "Livros classicos",
    arquivo: "redacao.pdf"

})
//Não coloquei o autor porque acho que não é preciso na redação corrigida
testered_corrigida.save()
console.log(testered_corrigida);