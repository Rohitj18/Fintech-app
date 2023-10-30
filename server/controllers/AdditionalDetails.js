// const { secureHeapUsed } = require('crypto');
const AdditionalDetails = require('../models/AdditionalDetails');
const User = require('../models/User');
const cloudinary = require('cloudinary').v2;

exports.getAdditionalDetails = async(req,res)=>{
    try {
        const userId = req.user.id;
        const response = await AdditionalDetails.findOne({userId:userId});
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

async function uploadFileToCloudinary(file,folder){
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}

// function isFileTypeSupported(type,supportedFiles){
//     return supportedFiles.includes(type);
// }


exports.createAdditionalDetails = async(req,res)=>{
    try {
        const {firstName,lastName,gender,aadharnumber,pannumber,dob,city,zipcode,state,address,annualincome,personalexpense,phoneno,country,image} = req.body;
        const userId = req.user.id;
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
        
        let imageurl = image;
        if(image.substring(0,5)!=="https"){
            const upload = await uploadFileToCloudinary(image,"StudyNotion");
            imageurl=upload.secure_url;
        }
        const updateUser = await User.findByIdAndUpdate({_id:userId},{additionalDetails:response._id,image:imageurl.toString()});
        if(!updateUser){
            return res.status(403).json({
                success:false,
                message:"Could not update additonal details in user",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            url: imageurl,
            message:"succesfully created additonal details",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while creating additional details",
        });
    }
}