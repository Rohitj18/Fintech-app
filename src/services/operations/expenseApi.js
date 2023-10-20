import { toast } from "react-hot-toast"
import { setLoading } from "../../slices/authSlice"
// import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { expenseEndPoints } from "../api"

// CREATEEXPENSE_API:BASE_URL+"/createExpense",
//     GETALLEXPENSE_API:BASE_URL+"/getallExpense",
//     DELETEEXPENSE_API:BASE_URL+"/deleteExpense"

const {CREATEEXPENSE_API,GETALLEXPENSE_API,DELETEEXPENSE_API,GETDATEEXPENSE_API} = expenseEndPoints

export function createExpense(token,category,amount,name,desc,timeStamp) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", CREATEEXPENSE_API,{
          category,amount,name,desc,timeStamp
        },{
          Authorization: `Bearer ${token}`,
        });
  
        console.log("Created Expense", response)
        
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        dispatch(setLoading(false))
        return response;
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Something went wrong")
      }
      dispatch(setLoading(false))
    }
}

export function getDateExpenes(token,date) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      
      const response = await apiConnector("GET", GETDATEEXPENSE_API,
        {}
      ,{
        Authorization: `Bearer ${token}`,
      },{ params: { id:date } });
      // console.log("type ",typeof(date));
      

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setLoading(false))
      return response;
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Something went wrong")
    }
    dispatch(setLoading(false))
  }
}

// export function signUp(
//     stockName,year
    
//   ) {
//     return async (dispatch) => {
//       const toastId = toast.loading("Loading...")
//       dispatch(setLoading(true))
//       try {
//         const response = await apiConnector("POST", GET_STOCK_DATA, {
//             stockName,year
//         })
  
//         console.log("GET STOCK DATA", response)
  
//         if (!response.data.success) {
//           throw new Error(response.data.message)
//         }
//         return response;
//         // toast.success("Signup Successful")
        
//       } catch (error) {
//         console.log("API ERROR............", error)
//         toast.error("Something went Wrong")
//       }
//       dispatch(setLoading(false))
//       toast.dismiss(toastId)
//     }
//   }
  