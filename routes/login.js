const router = require('express').Router();
const jwt = require('jsonwebtoken');


// Trazer a model do professor, e comparar com o nome e senha que vem com a requisição
router.get('/', (req, res)=>{
    let nome = 'req.body.nome;'
    //let senha = req.body.senha;
    token = jwt.sign({nome}, 'segredo');
    // junto com a resposta enviar um token do JWT para acessar rotas protegidas;
    res.json(token);
});

module.exports = router;