const mongoose = require("mongoose");

const ExpenseTableSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    allExpense:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Expense"
    }
});

module.exports  = mongoose.model("ExpenseTable",ExpenseTableSchema); 