const express = require("express");
const router = express.Router();

const{
    login,
    signUp,
    getUser
} = require("../controllers/Auth");

const{
    getAdditionalDetails,
    createAdditionalDetails
} = require("../controllers/AdditionalDetails");

//routes for login ,signup and auth


router.post("/login",login);

router.post("/signup",signUp);

router.get("/getAdditionalDetails",getAdditionalDetails);

router.post("/createAdditionalDetails",createAdditionalDetails);

router.get("/getUser",getUser);


module.exports=router;