const Expense = require('../models/Expense');
const User = require('../models/User');
const ExpenseTable = require('../models/ExpenseTable');

exports.CreateExpense = async(req,res)=>{
    try {
        const {email,category,amount,name,desc} = req.body;
        if(!email||!category||!amount||!name||!desc){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        const user = await User.findOne({email});
        const response = await Expense.create({category,amount,name,desc});
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create Expense , please try again",
            });
        }
        const isTable = await ExpenseTable.findOne({userId:user._id});
        console.log("Reached here")
        let tableresponse = null;
        if(isTable){
            tableresponse= await ExpenseTable.findOneAndUpdate({userId:user._id},{$push:{allExpense:response._id}});
        }else{
            let createtableresponse = await ExpenseTable.create({userId:user._id});
            if(!createtableresponse){
                return res.status(403).json({
                    success:false,
                    message:"Error while creating table"
                });
            }
            tableresponse= await ExpenseTable.findOneAndUpdate({userId:user._id},{$push:{allExpense:response._id}});
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