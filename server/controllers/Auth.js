const User = require('../models/User');
const bycrpt = require('bcrypt');
const Wallet= require('../models/Wallet');
const WalletTransactionTable = require('../models/WalletTransactionTable');
const StockTable = require('../models/StockTable')
const TransactionTable= require('../models/TransactionTable');
const jwt = require('jsonwebtoken');
const ExpenseTable = require('../models/ExpenseTable');
require("dotenv").config({ path: './vars/.env' });


exports.signUp = async(req,res)=>{
    try {
        const {email,password,confirmpassword} = req.body;
        if(!email||!password||!confirmpassword){
            return res.status(402).json({
                success:false,
                message:"All fields required",
            });
        }
        if(password!==confirmpassword){
            return res.status(502).json({
                success:false,
                message:"password doesnt match",
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(502).json({
                success:false,
                message:"user already exist",
            });
        }
        let hashedpassword = await bycrpt.hash(password,10);
        const response = await User.create({email,password:hashedpassword});
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create account",
            });
        }
        const CurrUser = await User.findOne({email:email});
        const walletCreationResponse = await Wallet.create({userId:CurrUser._id});
        if(!walletCreationResponse){
            return res.status(402).json({
                success:false,
                message:"Error occured while creating wallet"
            }); 
        }

        const updateUser = await User.findOneAndUpdate({_id:CurrUser._id},{walletId:walletCreationResponse._id});
        if(!updateUser){
            return res.status(402).json({
                success:false,
                message:"Error while updating wallet"
            });
        }
        const walletTransTableCreation = await WalletTransactionTable.create({walletid:walletCreationResponse._id});
        if(!walletTransTableCreation){
            
            return res.status(402).json({
                success:false,
                message:"Error occured while creating wallettranstable"
            }); 
        }
        const transactionTableCreation = await ExpenseTable.create({userId:CurrUser._id});
        if(!transactionTableCreation){
            return res.status(403).json({
                success:false,
                message:"Error while creating table"
            });
        }


        const createStockTableRes = await StockTable.create({walletid:walletCreationResponse._id});
        if(!createStockTableRes){
            res.status(403).json({
                success:false,
                message:"Error while creating table",
            });
        }
        const createtableresponse = await TransactionTable.create({walletid:walletCreationResponse._id});
        if(!createtableresponse){
            return res.status(403).json({
                success:false,
                message:"Error while creating table"
            });
        }
        const updateWallet = await Wallet.findOneAndUpdate({_id:walletCreationResponse._id},{transactionhistroy:createtableresponse._id,wallettransactionhistory:walletTransTableCreation._id,stocks:createStockTableRes._id});
        if(!updateWallet){
            return res.status(403).json({
                success:false,
                message:"Error while updating wallet",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully created account",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}

exports.login=async (req,res)=>{
    try{
        //fetch the data from req body
        const {email,password}=req.body;
        //validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required,please try again",
            });
        }
        //check if user exists
        const user =  await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not registered , please signup first",
            });
        }
        
        // generate jwt
        if(await bycrpt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                walletId:user.walletId
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"24h",
            });
            user.token = token;
            
            //create cookie and send response
            const options = {
                expires: new Date(Date.now() + 2*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"logged in succesfully",
            });

        }else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failure,please try again",
        });
    }
}






// 
exports.getUser=async (req,res)=>{
    try{
        //fetch the data from req body
        const {userId}=req.body;
        
        //check if user exists
        const user =  await User.findById({_id:userId}).populate("additionalDetails").exec();
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not registered , please signup first",
            });
        }
        res.status(200).json({
            success:true,
            data:user,
            message:"User logged in successfully",
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failure,please try again",
        });
    }
}