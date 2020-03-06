const jwt = require('jsonwebtoken')
const jwtSecret = "secret"

module.exports = function(req,res,next){
    // get token from the header of req
    const token =req.header('x-auth-token')

    // check if the token exists
    if(!token){
        return res.status(401).json({ msg:'no token access denied!! '})
    
    }
    jwt.verify(token ,jwtSecret,(err,decoded)=>{
        if(err) {
            res.status(401).json({msg : "token not valid"})
        }

        req.user = decoded.user
        next()
    })
}