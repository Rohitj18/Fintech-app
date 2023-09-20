const Wallet= require('../models/Wallet');
const User = require('../models/User');
const WalletTransaction = require('../models/WalletTransaction');
const WalletTransactionTable = require('../models/WalletTransactionTable');


exports.AddMoney = async(req,res)=>{
    try {
        const {email,carddetails,amount} = req.body;
        if(!email||!carddetails||!amount){
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
        const user = await User.findOne({email});
        console.log(user);
        
        const response = await Wallet.findOneAndUpdate({userId:user._id}, {$inc : {currentbalance : Number(amount)}}).exec();
        if(!response){
            return res.status(402).json({
                success:false,
                message:"Error occured while adding money",
            }); 
        }
        const walletId = await Wallet.findOne({_id:user.walletId});
        console.log(walletId);
        const walletTransRes = await WalletTransaction.create({walletid:walletId._id,amount:Number(amount)});
        if(!walletTransRes){
            return res.status(402).json({
                success:false,
                message:"Error occured while creating wallettransaction"
            }); 
        }
        const walletTransupdate = await WalletTransactionTable.findOneAndUpdate({walletid:walletId._id},{$push:{allWalletTrans:walletTransRes._id}});
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
        const {userId} = req.body;
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
        if(!wallet){
            return res.status(402).json({
                success:false,
                message:"Error while fetching data from wallet",
            });
        }

        res.status(200).json({
            success:true,
            data:wallet,
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
