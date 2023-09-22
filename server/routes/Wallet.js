const express = require("express");
const router = express.Router();

const {auth} = require("../middleware/auth");

const{
    AddMoney,
    getWalletDetails,
} = require("../controllers/Wallet");

//routes for login ,signup and auth

router.post("/addMoney",auth,AddMoney);
router.get("/getwalletdetails",auth,getWalletDetails);

module.exports=router;