const express = require("express");
const router = express.Router();

const{
    CreateExpense,
    getallexpense,
    deleteExpense 
} = require("../controllers/Expense");

//routes for login ,signup and auth


router.post("/createExpense",CreateExpense);
router.get("/getallExpense",getallexpense);
router.delete("/deleteExpense",deleteExpense);


module.exports=router;