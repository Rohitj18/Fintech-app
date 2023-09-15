const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    category: {
        type: String,
        required:true,
    },
    timeStamp:{
        type:[Map],
        of:new mongoose.Schema(
            {
                time:Date.now(),
                price:Number,
                qty:Number,
            }
        )
    },
    amount:{
        type:Number,
        required:true,
    },
    Name:{
        type:String,
    },
    Desc:{
        type:String,

    }
});

module.exports  = mongoose.model("Expense",ExpenseSchema); 