const router = require('express').Router();
const redacao = require('../models/redacao');
const aluno = require('../models/aluno');


const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'redacoes/')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage
 })

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

router.post('/', upload.single('redacao'), (req, res) =>{
    console.log(req.file.originalname);
    const {nome, email, titulo, tema} = req.body
    console.log(titulo, nome, email, tema);
    let data =  new Date().toLocaleDateString('pt-br');

    const alunoNovo = new aluno({
        nome,
        email
    });

    alunoNovo.save()

    const novaRedacao = new redacao({
        titulo,
        tema,
        arquivo: req.file.originalname,
        autor: alunoNovo._id,
        data

    })
    console.log(novaRedacao);
    novaRedacao.save()
    res.status(200).send("Redação Enviada com Sucesso")
    
})

module.exports = router;