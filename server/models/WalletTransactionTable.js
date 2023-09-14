const mongoose = require("mongoose");

const WalletTransactionTableSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    allstocks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"WalletTransaction"
    }
});

module.exports  = mongoose.model("WalletTransactionTable",WalletTransactionTableSchema); 