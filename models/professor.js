const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/haken", { useNewUrlParser: true
});


const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));

const professorSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        index: { unique: true }
    },
    senha:{
        type: String, 
        required: true 
    },
})

const Professor = mongoose.model('professor', professorSchema, 'professores');

const testeprofessor = new Professor({
    nome: "Sechineli",
    senha: 123456
});

testeprofessor.save();

console.log(testeprofessor);