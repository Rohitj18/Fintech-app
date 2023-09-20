const mongoose = require("mongoose");
const WalletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    currentbalance:{
        type:Number,
        default:0,
    },
    transactionhistroy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TransactionTable"
    },
    wallettransactionhistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"WalletTransaction"
    },
    carddetails:{
        type:Number,
        default:""
    },
    stocks:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StockTable"
    }

});

module.exports  = mongoose.model("Wallet",WalletSchema); 