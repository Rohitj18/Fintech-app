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
    aditionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AdditionalDetails"
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports  = mongoose.model("User",UserSchema); 