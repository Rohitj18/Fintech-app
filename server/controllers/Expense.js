const Expense = require('../models/Expense');
// const User = require('../models/User');
const ExpenseTable = require('../models/ExpenseTable');
// const { GiConsoleController } = require('react-icons/gi');
const moment = require('moment'); 


exports.CreateExpense = async(req,res)=>{
    try {
        let {category,amount,name,desc,timeStamp} = req.body;
        const userId = req.user.id;
        if(!userId||!category||!amount||!name||!desc){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        timeStamp = timeStamp.toString().substring(0,10);
        const response = await Expense.create({category,timeStamp,amount,name,desc});
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create Expense , please try again",
            });
        }
        
        let tableresponse = null;
        tableresponse= await ExpenseTable.findOneAndUpdate({userId},{$push:{allExpense:response._id}});
        
        if(!tableresponse){
            return res.status(403).json({
                success:false,
                message:"Error occured while table operations"
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully created expense",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while Creating expense",
        });
    }
}
 
exports.getDateExpense = async(req,res)=>{
    try {
        const date = req.query.params.id;
        const userId = req.user.id;
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const response = await ExpenseTable.findOne({ userId: userId })
        .populate({
          path: 'allExpense',
          match: { timeStamp: date.substring(0,10) } // Filter expenses by timestamp
        })
        .then((expenseTable) => {
          if (expenseTable) {
            return expenseTable.allExpense;
          } else {
            console.log('cannot fetch');
          }
        })
        .catch((err) => {
          console.log('Error:', err);
        });
        
      

        if(!response){
            return res.status(403).json({
                success:false,
                message:"No expense table found",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Successfully fetched all expenses",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}


exports.getCurrentMonthSum = async(req,res)=>{
    const currentDate = moment();
    const firstDayOfMonth = currentDate.startOf('month').format('YYYY-MM-DD');
    const lastDayOfMonth = currentDate.endOf('month').format('YYYY-MM-DD');
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const response = await ExpenseTable.findOne({ userId: userId })
        .populate({
          path: 'allExpense',
          match: { timeStamp: {
            $gte: firstDayOfMonth,
            $lte: lastDayOfMonth,
          }, } 
        })
        .then((expenseTable) => {
          if (expenseTable) {
            return expenseTable.allExpense;
          } else {
            console.log('cannot fetch');
          }
        })
        .catch((err) => {
          console.log('Error:',err);
      });
        
      

        if(!response){
            return res.status(403).json({
                success:false,
                message:"No expense table found",
            });
        }
        let Totalsum = 0;
        let foodsum = 0;
        let travelsum =0;
        let healthsum =0;
        let grocerySum =0;
        let Electronicsum = 0;
        let othersum = 0;
        response.forEach((item)=>{
            Totalsum=Totalsum+Number(item?.amount);
            switch (item?.category) {
                case "Food":
                    foodsum=foodsum+item?.amount;
                    break;
                case "Travel":
                    travelsum=travelsum+item?.amount;
                    break;
                case "Health":
                    healthsum=healthsum+item?.amount;
                    break;
                case "Grocery":
                    grocerySum=grocerySum+item?.amount;
                    break;
                case "Electronics":
                    Electronicsum =Electronicsum +item?.amount;
                    break;
                case "Other":
                    othersum =othersum +item?.amount;
                    break;
                default:
                    break;
            }
        })
        
        let responseData = {
            Totalsum,
            foodsum,
            travelsum,
            healthsum,
            grocerySum,
            Electronicsum,
            othersum,
        }

        res.status(200).json({
            success:true,
            data:responseData,
            message:"Successfully calculated the total amount",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}



exports.getCurrentExpenseArr = async(req,res)=>{
    const currentDate = moment();
    const firstDayOfMonth = currentDate.startOf('month').format('YYYY-MM-DD');
    const lastDayOfMonth = currentDate.endOf('month').format('YYYY-MM-DD');
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const response = await ExpenseTable.findOne({ userId: userId })
        .populate({
          path: 'allExpense',
          match: { timeStamp: {
            $gte: firstDayOfMonth,
            $lte: lastDayOfMonth,
          }, } 
        }).exec();

        if(!response){
            return res.status(403).json({
                success:false,
                message:"No expense table found",
            });
        }
        
        res.status(200).json({
            success:true,
            data:response,
            message:"Successfully calculated the total amount",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}

exports.getallexpense = async(req,res)=>{
    try {
        const {userId} = req.body;
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const response = await ExpenseTable.findOne({userId:userId}).populate("allExpense").exec();
        if(!response){
            return res.status(403).json({
                success:false,
                message:"No expense table found",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Successfully fetched all expenses",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching additional details",
        });
    }
}

exports.deleteExpense = async(req,res)=>{
    try {
        const {userId,objectid} = req.body;
        if(!userId || !objectid){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const response = await ExpenseTable.findOneAndUpdate({userId:userId},{ $pull: { allExpense:objectid } },{ safe: true, multi: false });
        if(!response){
            return res.status(400).json({
                success:false,
                message:"Error while deleting in table",
            });
        }
        const expensedeletion = await Expense.findByIdAndDelete({_id:objectid});
        if(!expensedeletion){
            return res.status(400).json({
                success:false,
                message:"Error while deleting in expenses",
            });
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Succesfully deleted expense",
        }); 

    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Something went wrong while deleting expense",
        });
    }
}