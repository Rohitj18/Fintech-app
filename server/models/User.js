const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AdditionalDetails"
    },
    date:{
        type:Date,
        default:Date.now()
    },
    walletId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wallet",
    },
    image:{
        type:String,
        default:"",
    }

});

module.exports  = mongoose.model("User",UserSchema); 