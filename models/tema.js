const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

const TemaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    data_limite: {
        type: Date,
        required: true
    },
    texto_apoio:{
        type: String,
        required: true
    }
});

const Tema = mongoose.model('tema', TemaSchema, 'temas');

// Aqui codigo para testar se a model foi criada certa
const teste = new Tema({
    nome: "um tema",
    data_limite: Date.now() // Data usada apenas para teste
});

teste.save();

console.log(teste);
