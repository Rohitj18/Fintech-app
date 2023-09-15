const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    currentbalance:{
        type:Number,
        required:true,
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
    },
    stocks:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StockTable"
    }

});

module.exports  = mongoose.model("Wallet",WalletSchema); 