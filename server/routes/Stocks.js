
const express = require("express");
const router = express.Router();

const{
    BuyStock
} = require("../controllers/Stock");

//routes for login ,signup and auth


router.post("/buyStock",BuyStock);

module.exports=router;