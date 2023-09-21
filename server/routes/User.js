const express = require("express");
const router = express.Router();

const {auth} = require("../middleware/auth");

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

router.get("/getAdditionalDetails",auth,getAdditionalDetails);

router.post("/createAdditionalDetails",auth,createAdditionalDetails);

router.get("/getUser",auth,getUser);


module.exports=router;