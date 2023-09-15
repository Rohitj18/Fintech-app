const mongoose = require("mongoose");

const ExpenseTableSchema = new mongoose.Schema({
    walletid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    allstocks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Expense"
    }
});

module.exports  = mongoose.model("ExpenseTable",ExpenseTableSchema); 