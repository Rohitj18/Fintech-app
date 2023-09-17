const express = require("express");
const router = express.Router();

const{
    AddMoney,
    getWalletDetails,
} = require("../controllers/Wallet");

//routes for login ,signup and auth


router.post("/addMoney",AddMoney);
router.get("/getwalletdetails",getWalletDetails);

module.exports=router;