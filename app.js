const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const redacao = require('./routes/redacao');
const login = require('./routes/login');
let port = 3000;

const app = express();

app.get('/', (req, res) =>{
    res.send("Tudo funcionou");
});

app.use('/redacao', redacao);
app.use('/login', login);

app.listen(port, ()=>{
    console.log(`Servidor iniciado na porta: ${port}`);
})