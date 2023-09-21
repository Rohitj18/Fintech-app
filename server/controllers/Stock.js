const Wallet= require('../models/Wallet');
const TransactionTable= require('../models/TransactionTable');
const Transaction = require('../models/Transaction');
const StockTable = require('../models/StockTable')
const Stocks = require('../models/Stocks');

exports.BuyStock = async(req,res)=>{
    try {
        const {walletId,companyName,totalqty} = req.body;
        if(!companyName||!totalqty){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
        
        const timestamp ={
            time:Date.now(),
            price:1000,
            qty:totalqty
        }
        
        const response = await Stocks.create({companyName:companyName,totalqty:totalqty});
        const timestamppushres = await Stocks.findOneAndUpdate({_id:response._id},{$push:{timeStamp:timestamp}})
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not create stock request",
            });
        }
        const updatedresponse = await Wallet.findOneAndUpdate({_id:walletId}, {$inc : {currentbalance : Number(-1000)}}).exec();
        if(!updatedresponse){
            return res.status(403).json({
                success:false,
                message:"Could not update wallet money",
            });
        }
        const stocktableupdateres = await StockTable.findOneAndUpdate({walletid:walletId},{$push:{allstocks:response._id}}); 
        if(!stocktableupdateres){
            return res.status(403).json({
                success:false,
                message:"Could not update stocktable",
            });
        }  
        const transctionCreation = await Transaction.create({walletid:walletId,stockid:response._id,timestamp:timestamp,qty:totalqty,amount:1000});      
        if(!transctionCreation){
            return res.status(403).json({
                success:false,
                message:"Could not create transaction",
            });
        }
        
        const tableresponse= await TransactionTable.findOneAndUpdate({walletid:walletId},{$push:{alltransaction:transctionCreation._id}});
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


    }catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while Creating expense",
        });
    }
}
 
// exports.getallexpense = async(req,res)=>{
//     try {
//         const {userId} = req.body;
//         if(!userId){
//             return res.status(403).json({
//                 success:false,
//                 message:"all field required",
//             });
//         }
//         const response = await ExpenseTable.findOne({userId:userId}).populate("allExpense").exec();
//         res.status(200).json({
//             success:true,
//             data:response,
//             message:"Successfully fetched all expenses",
//         }); 

//     } catch (error) {
//         console.log(error);
//         console.log(error.message);
//         return res.status(400).json({
//             success:false,
//             message:"Error while fetching additional details",
//         });
//     }
// }

// exports.deleteExpense = async(req,res)=>{
//     try {
//         const {userId,objectid} = req.body;
//         if(!userId || !objectid){
//             return res.status(403).json({
//                 success:false,
//                 message:"all field required",
//             });
//         }
//         const response = await ExpenseTable.findOneAndUpdate({userId:userId},{ $pull: { allExpense:objectid } },{ safe: true, multi: false });
//         if(!response){
//             return res.status(400).json({
//                 success:false,
//                 message:"Error while deleting in table",
//             });
//         }
//         const expensedeletion = await Expense.findByIdAndDelete({_id:objectid});
//         if(!expensedeletion){
//             return res.status(400).json({
//                 success:false,
//                 message:"Error while deleting in expenses",
//             });
//         }
//         res.status(200).json({
//             success:true,
//             data:response,
//             message:"Succesfully deleted expense",
//         }); 

//     } catch (error) {
//         console.log(error);
//         console.log(error.message);
//         return res.status(400).json({
//             success:false,
//             message:"Something went wrong while deleting expense",
//         });
//     }
// }