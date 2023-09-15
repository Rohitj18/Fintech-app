const mongoose = require("mongoose");

const AdditionalDetailsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    firstName: {
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    aadharnumber:{
        type:Number,
        required:true,
        unique:true
    },
    pannumber:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
    },
    profilepic:{
        type:String,
    },
    city:{
        type:String,
        required:true,
    },
    zipcode:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    annualincome:{
        type:Number,
        required:true,
    },
    personalexpense:{
        type:Number,
        required:true,
    },
    phoneno:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }

});

module.exports  = mongoose.model("AdditionalDetails",AdditionalDetailsSchema); 