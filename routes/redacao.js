const router = require('express').Router();
const redacao = require('../models/redacao');
const verifyToken = require('../middleware/auth');


router.get('/',(req, res) =>{
    redacao.find({}, (err, redacoes)=>{
        if(redacoes != null){
            for(i in redacoes){
                
                redacoes[i]['autor'] = ''
                console.log(redacoes[i]['autor']);
            }
            res.json(redacoes);
        }
        
    });
})

router.get('/:id', (req, res)=>{
    redacao.find(
        {_id: req.params.id},
        (err, redacao)=>{
            if(redacao != null){
                res.json(redacao[0]);
            }
        }
    )
})

module.exports = router;