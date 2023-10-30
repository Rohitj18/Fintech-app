const Wallet= require('../models/Wallet');
// const User = require('../models/User');
const WalletTransaction = require('../models/WalletTransaction');
const WalletTransactionTable = require('../models/WalletTransactionTable');
// const { GiConsoleController } = require('react-icons/gi');


exports.AddMoney = async(req,res)=>{
    try {
        const {amount} = req.body;
        const user = req.user;
        if(!amount){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        if(amount<=0){
            return res.status(402).json({
                success:false,
                message:"Amount should be greater than zero",
            }); 
        }
        const response = await Wallet.findOneAndUpdate({userId:user.id}, {$inc : {currentbalance : Number(amount)}}).exec();
        if(!response){
            return res.status(402).json({
                success:false,
                message:"Error occured while adding money",
            }); 
        }
        const walletTransRes = await WalletTransaction.create({walletid:user.walletId,amount:Number(amount)});
        if(!walletTransRes){
            return res.status(402).json({
                success:false,
                message:"Error occured while creating wallettransaction"
            }); 
        }
        const walletTransupdate = await WalletTransactionTable.findOneAndUpdate({walletid:user.walletId},{$push:{allWalletTrans:walletTransRes._id}});
        if(!walletTransupdate){
            return res.status(402).json({
                success:false,
                message:"Error occured while updating wallet trans table"
            }); 
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully Added money",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Error while Adding money to wallet",
        });
    }
}
 
exports.getWalletDetails = async(req,res)=>{
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const isWallet = await Wallet.findOne({userId:userId});
        if(!isWallet){
            const walletCreationResponse = await Wallet.create({userId:userId});
            if(walletCreationResponse){
                return res.status(402).json({
                    success:false,
                    message:"Error occured while creating wallet",
                }); 
            }
        }
        const wallet = await Wallet.findOne({userId:userId}).populate('transactionhistroy','wallettransactionhistory').exec();
        const wallethistory = await WalletTransactionTable.findOne({_id:wallet.wallettransactionhistory}).populate('allWalletTrans').exec();   
        if(!wallet){
            return res.status(402).json({
                success:false,
                message:"Error while fetching data from wallet",
            });
        }

        res.status(200).json({
            success:true,
            data:wallet,
            wallet:wallethistory,
            message:"succesfully fetched wallet data",
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
