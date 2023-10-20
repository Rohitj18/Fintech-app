const express = require("express");
const router = express.Router();


const{
    api,getGainerapi
} = require("../controllers/API");


router.get("/getApi",api);
router.get("/getGainer&LoserApi",getGainerapi);