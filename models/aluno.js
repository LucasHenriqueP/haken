const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/haken", { useNewUrlParser: true
});


const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

const alunoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        index: { unique: true }
    },
    email:{
        type: String, // ideal seria usar algo pra validar se mesmo um email
        required: true
    }
});

const Aluno = mongoose.model("alunos", alunoSchema, "aluno");

teste = new Aluno({
    nome: "Testerson",
    email: "teste@testando.com"
});

teste.save().catch(err => console.log(err));

console.log(teste);
