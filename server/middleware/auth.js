const jwt = require("jsonwebtoken");
require('dotenv').config();
//auth
exports.auth = async(req,res,next)=>{
    try{
        //extract token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(403).json({
                success:false,
                message:"Token is missing",
            });
        }
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;
        }catch(error){
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        const expirationTime = req.user.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();

        if (currentTime > expirationTime) {
            return res.status(401).json({ 
                data:"exp",
                message: 'Token has expired' 
            });
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({
            success:false,
            message:'something went wrong while validating the token',
        });
    }
}

