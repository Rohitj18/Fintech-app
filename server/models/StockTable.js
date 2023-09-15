const mongoose = require("mongoose");

const StockTableSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet"
    },
    allstocks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Stocks"
    }
});

module.exports  = mongoose.model("StockTable",StockTableSchema); 