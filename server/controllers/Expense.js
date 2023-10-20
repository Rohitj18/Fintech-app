const Expense = require('../models/Expense');
const User = require('../models/User');
const ExpenseTable = require('../models/ExpenseTable');



exports.CreateExpense = async(req,res)=>{
    try {
        let {category,amount,name,desc,timeStamp} = req.body;
        const userId = req.user.id;
        // console.log("This is the recieved time",timeStamp);
        if(!userId||!category||!amount||!name||!desc){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        timeStamp = timeStamp.toString().substring(0,10);
        console.log(`this is date ${timeStamp} and date type ${typeof(timeStamp)}`)
        const response = await Expense.create({category,timeStamp,amount,name,desc});
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create Expense , please try again",
            });
        }
        const isTable = await ExpenseTable.findOne({userId});
        console.log("Reached here")
        let tableresponse = null;
        if(isTable){
            tableresponse= await ExpenseTable.findOneAndUpdate({userId},{$push:{allExpense:response._id}});
        }else{
            let createtableresponse = await ExpenseTable.create({userId});
            if(!createtableresponse){
                return res.status(403).json({
                    success:false,
                    message:"Error while creating table"
                });
            }
            tableresponse= await ExpenseTable.findOneAndUpdate({userId},{$push:{allExpense:response._id}});
        }
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
        // ExpenseTable.findOne({ userId: userId })
        // .populate('allExpense') 
        // .then((expenseTable)=>{
        //     if (expenseTable) {
              
        //         const matchingExpenses = expenseTable.allExpense.filter(expense => {
        //           return expense.timeStamp === date;
        //         });
        
        //         console.log(matchingExpenses);
        //       } else {
        //         console.log('ExpenseTable not found.');
        //     }
        // }).catch((err)=>{
        //     console.log(err);
        // });
      

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