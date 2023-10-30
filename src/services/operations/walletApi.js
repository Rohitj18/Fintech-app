import { toast } from "react-hot-toast"
import { setLoading } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { walletEndPoints } from "../api"
import {setcurrentBalance} from '../../slices/walletSlice';

const {ADDMONEY_API,GETWALLETDETS_API} = walletEndPoints;

export function AddMoney(token,amount) {
    return async (dispatch) => {
        const toastId = toast.loading("Transaction in Progress");
        dispatch(setLoading(true))
        try {
          const response = await apiConnector("POST", ADDMONEY_API,
            {amount},
            {
              Authorization: `Bearer ${token}`,
            },
          )
    
          // console.log("AddMoney response...", response)
    
          if (!response.data.success) {
            throw new Error(response.data.message)
          }
    
          toast.success("Added Money Successfully");
        
        } catch (error) {
          // console.log("AddMoney API ERROR............", error)
          toast.error("Transaction Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
      }
}

export function getWalletDetails(token) {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
          const response = await apiConnector("GET", GETWALLETDETS_API,
            {},
            {
              Authorization: `Bearer ${token}`,
            },
          )
    
          // console.log("WalletDetails response...", response);
          dispatch(setcurrentBalance(response.data.data.currentbalance));
          localStorage.setItem("currentBalance",JSON.stringify(response.data.data.currentbalance));
          if (!response.data.success) {
            throw new Error(response.data.message)
          }
          return response;
          
        } catch (error) {
          // console.log("LOGIN API ERROR............", error)
          toast.error("Login Failed")
        }
        dispatch(setLoading(false)) 
      }
}