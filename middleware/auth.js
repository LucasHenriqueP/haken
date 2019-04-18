function verifyToken(req, res, next){
    token = req.headers['authorization']
    if(token){
        console.log(token);
        next();
        
    }else{
        res.sendStatus(403);
    }
}

module.exports = verifyToken;