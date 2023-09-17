const mongoose = require("mongoose");

const TransactionTableSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    alltransaction:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Transaction"
    }
});

module.exports  = mongoose.model("TransactionTable",TransactionTableSchema); 