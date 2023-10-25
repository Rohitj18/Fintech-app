const express = require("express");
const router = express.Router();

const {auth} = require("../middleware/auth");

const{
    CreateExpense,
    getallexpense,
    deleteExpense,
    getDateExpense,
    getCurrentMonthSum ,
    getCurrentExpenseArr
} = require("../controllers/Expense");

//routes for login ,signup and auth

router.post("/createExpense",auth,CreateExpense);
router.get("/getallExpense",auth,getallexpense);
router.delete("/deleteExpense",auth,deleteExpense);
router.get("/getDateExpense",auth,getDateExpense);
router.get("/getCurrentMonthSum",auth,getCurrentMonthSum);
router.get("/getCurrentExpenseArr",auth,getCurrentExpenseArr);


module.exports=router;