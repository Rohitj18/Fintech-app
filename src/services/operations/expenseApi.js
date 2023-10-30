import { toast } from "react-hot-toast"
import { setLoading } from "../../slices/authSlice"
// import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { expenseEndPoints } from "../api"

// CREATEEXPENSE_API:BASE_URL+"/createExpense",
//     GETALLEXPENSE_API:BASE_URL+"/getallExpense",
//     DELETEEXPENSE_API:BASE_URL+"/deleteExpense"

const {CREATEEXPENSE_API,GETDATEEXPENSE_API,GETCURRENTMONTHSUM_API,GETCURRENTMONTHEXPARR_API} = expenseEndPoints

export function createExpense(token,category,amount,name,desc,timeStamp) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", CREATEEXPENSE_API,{
          category,amount,name,desc,timeStamp
        },{
          Authorization: `Bearer ${token}`,
        });
  
        // console.log("Created Expense", response)
        
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        dispatch(setLoading(false))
        return response;
      } catch (error) {
        // console.log("Create exepnse error ", error)
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
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setLoading(false))
      return response;
    } catch (error) {
      // console.log("get date error", error)
      toast.error("Something went wrong")
    }
    dispatch(setLoading(false))
  }
}

export function getCurrentMonthSum(token) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      
      const response = await apiConnector("GET", GETCURRENTMONTHSUM_API,
        {}
      ,{
        Authorization: `Bearer ${token}`,
      });
      
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setLoading(false))
      return response;
    } catch (error) {
      // console.log("getCurrentMonthSum ERROR............", error)
      toast.error("Something went wrong")
    }
    dispatch(setLoading(false))
  }
}

export function getCurrentMonthExpenseArr(token) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      
      const response = await apiConnector("GET", GETCURRENTMONTHEXPARR_API,
        {}
      ,{
        Authorization: `Bearer ${token}`,
      });
      
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setLoading(false))
      return response;
    } catch (error) {
      // console.log("getCurrentMonthExpenseArr API ERROR............", error)
      toast.error("Something went wrong")
    }
    dispatch(setLoading(false))
  }
}

  