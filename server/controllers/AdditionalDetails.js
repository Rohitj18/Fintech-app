const AdditionalDetails = require('../models/AdditionalDetails');
const User = require('../models/User');

exports.getAdditionalDetails = async(req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        const response = await AdditionalDetails.findOne({userId:user._id});
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create additional details , please try again",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully created additonal details",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}

exports.createAdditionalDetails = async(req,res)=>{
    try {
        const {userId,firstName,lastName,gender,aadharnumber,pannumber,dob,city,zipcode,state,address,annualincome,personalexpense,phoneno,country} = req.body;

        if(!firstName||!lastName||!gender||!aadharnumber||!pannumber||!dob||!city||!zipcode||!state||!address||!annualincome||!personalexpense||!phoneno||!country){
            return res.status(402).json({
                success:false,
                message:"All fields required",
            });
        }

        const response = await AdditionalDetails.create({userId,firstName,lastName,gender,aadharnumber,pannumber,dob,city,zipcode,state,address,annualincome,personalexpense,phoneno,country});

        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create additional details , please try again",
            });
        }

        const updateUser = await User.findByIdAndUpdate({_id:userId},{additionalDetails:response._id});
        if(!updateUser){
            return res.status(403).json({
                success:false,
                message:"Could not update additonal details in user",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully created additonal details",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}