const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const redacao = require('./routes/redacao');
const login = require('./routes/login');
const tema = require('./routes/tema');
let port = 3000;

mongoose.connect("mongodb://127.0.0.1/haken", { useNewUrlParser: true
});

const bd = mongoose.connection
bd.on('error',() =>console.log("erro ao conectar"));



const app = express();
app.set('view engine', 'ejs');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
    numeros = 5
    res.render('index.ejs', {numeros})
});

app.use('/redacao', redacao);
app.use('/login', login);
app.use('/tema', tema);

app.listen(port, ()=>{
    console.log(`Servidor iniciado na porta: ${port}`);
})