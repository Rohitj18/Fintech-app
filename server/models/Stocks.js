const mongoose = require("mongoose");

const StocksSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required:true,
        unique: true
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
    totalqty:{
        type:Number,
    }
});

module.exports  = mongoose.model("Stocks",StocksSchema); 