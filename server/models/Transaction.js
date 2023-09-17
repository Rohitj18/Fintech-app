const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    stockid:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Stocks"
    },
    timestamp:{
        type:mongoose.Schema.Types.Mixed,
    },
    qty:{
        type:Number,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    }
});

module.exports  = mongoose.model("Transaction",TransactionSchema); 