const mongoose = require("mongoose");

const WalletTransactionSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    amount:{
        type:Number,
        required:true,
    },
    time:{
        type:Date,
        default:Date.now(),
    }
});

module.exports  = mongoose.model("WalletTransaction",WalletTransactionSchema); 