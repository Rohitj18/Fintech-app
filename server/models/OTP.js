const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate = require("../mail/templates/emailVerificationTemplate");


const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }
});

async function sendVerificationEmail(email,otp){
    try {
        const mailResponse = await mailSender(email," verification email from studyNotion ",emailTemplate(otp));
        console.log("email sent successfully ",mailResponse);
    } catch (error) {
        console.log("Error occured while sending mail ",error);
    }
}

// OTPSchema.pre("save",async function(next){
//     console.log("new document saved to database");
//     if(this.isNew){
//         sendVerificationEmail(this.email,this.otp);
//     }
//     next();
// })


module.exports = mongoose.model("OTP",OTPSchema);