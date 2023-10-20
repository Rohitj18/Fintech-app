
const express = require("express");
const router = express.Router();

const {auth} = require("../middleware/auth");

const{
    BuyStock
} = require("../controllers/Stock");

//routes for login ,signup and auth
const{
    api,getGainerapi
} = require("../controllers/API");

router.post("/buyStock",auth,BuyStock);
router.get("/getapi",api);
router.get("/getGainer&LoserApi",getGainerapi);
module.exports=router;