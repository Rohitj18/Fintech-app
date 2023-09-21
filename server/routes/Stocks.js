
const express = require("express");
const router = express.Router();

const {auth} = require("../middleware/auth");

const{
    BuyStock
} = require("../controllers/Stock");

//routes for login ,signup and auth


router.post("/buyStock",auth,BuyStock);

module.exports=router;