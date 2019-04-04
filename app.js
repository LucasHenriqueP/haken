const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let port = 3000;

const app = express();

app.get('/', (req, res) =>{
    res.send("Tudo funcionou");
});

app.listen(port, ()=>{
    console.log(`Servidor iniciado na porta: ${port}`);
})