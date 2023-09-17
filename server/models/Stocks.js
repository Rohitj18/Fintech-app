const mongoose = require("mongoose");

const StocksSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required:true,
        unique: true
    },
    timeStamp:{
        type:[mongoose.Schema.Types.Mixed]
    },
    totalqty:{
        type:Number,
    }
});

module.exports  = mongoose.model("Stocks",StocksSchema); 