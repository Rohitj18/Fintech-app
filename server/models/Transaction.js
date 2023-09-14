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
        type:Map,
        of:{
            time:Date.now(),
            price:Number,
        }
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