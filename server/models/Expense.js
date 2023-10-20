const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    category: {
        type: String,
        required:true,
    },
    timeStamp:{
        type:String,
        // default:Date.now()
    },
    amount:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
    },
    desc:{
        type:String,

    }
});

module.exports  = mongoose.model("Expense",ExpenseSchema); 