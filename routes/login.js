const router = require('express').Router();
const jwt = require('jsonwebtoken');
const professor = require('../models/professor')


// Trazer a model do professor, e comparar com o nome e senha que vem com a requisição
router.get('/', (req, res)=>{
    const {nome, senha} = req.body;
    professor.findOne({nome, senha}, (err, prof) =>{
        if(prof){
            token = jwt.sign({nome}, 'segredo');
            // junto com a resposta enviar um token do JWT para acessar rotas protegidas;
            res.json(token);
        }else{
            res.json({status: 401})
        }
    })
});

module.exports = router;