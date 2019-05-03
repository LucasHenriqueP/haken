const mongoose = require("mongoose");

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
    nome: "Tema do dia 03",
    data_limite: Date.now(), // Data usada apenas para teste
    texto_apoio: "ASADSIOASOPDOÍFDSKADSMKDPCOFASPOSAPOD"
});

//teste.save()

module.exports = Tema
