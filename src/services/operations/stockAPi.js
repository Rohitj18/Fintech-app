import { toast } from "react-hot-toast"
import { setLoading } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { yahooEndPoints } from "../api"



const {GET_GAINER_LOSER_API,GET_STOCK_DATA} = yahooEndPoints;

export function Get_Gain_Loser() {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("GET", GET_GAINER_LOSER_API)
  
        console.log("GAINER AND LOSER API", response)
        
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("You are all set")
        dispatch(setLoading(false))
        toast.dismiss(toastId)
        return response;
      } catch (error) {
        console.log("Get_Gain_Loser API ERROR............", error)
        toast.error("Something went wrong")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
}

export function signUp(
    stockName,year
    
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", GET_STOCK_DATA, {
            stockName,year
        })
  
        console.log("GET STOCK DATA", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        return response;
        // toast.success("Signup Successful")
        
      } catch (error) {
        console.log("API ERROR............", error)
        toast.error("Something went Wrong")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  