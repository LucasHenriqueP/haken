const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

const Redacao_Corrigida_Schema = new mongoose.Schema({
    titulo:{
        type: String
    },
    arquivo:{
        type: String
    },
    redacao_original:{
        type: mongoose.Schema.Types.ObjectId,
        //required: true
    }
});

const Redacao_corrigida = mongoose.model('redacao_corrigida', Redacao_Corrigida_Schema, 'redacao_corrigida') 
//Por favor veja se declarei certo os schemas

const testered_corrigida = new Redacao_corrigida({
    titulo: "Os tres mosqueteiros",
    arquivo: "redacao.pdf",
    redacao_original: "5ccc82b2f0ec561e410882ab"

})


//Não coloquei o autor porque acho que não é preciso na redação corrigida
testered_corrigida.save()
//console.log(testered_corrigida);
//testered_corrigida.save()

module.exports = Redacao_corrigida