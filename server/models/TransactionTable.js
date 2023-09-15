const mongoose = require("mongoose");

const TransactionTableSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    allstocks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Transaction"
    }
});

module.exports  = mongoose.model("TransactionTable",TransactionTableSchema); 