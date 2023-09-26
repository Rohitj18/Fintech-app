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
            console.log(decode);
            req.user = decode;
            console.log("This is middler ware data",req.user);
        }catch(error){
            return res.status(401).json({
                success:false,
                message:'token is invalid',
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

//isStudent


// exports.isAdmin = async (req,res,next)=>{
//     try {
//         if(req.user.accountType !=="Admin"){
//             return res.status(401).json({
//                 success:false,
//                 message:'this route is protected for Admins only',
//             });
//         }
//         next();
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:'User cannot be verified please try again',
//         });
//     }
// }