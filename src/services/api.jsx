const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthEndPoints = {
    LOGIN_API : BASE_URL + "/login",
    SIGNUP_API : BASE_URL + "/signup",
    GETADDDET_API:BASE_URL +"/getAdditionalDetails",
    ADDDET_API: BASE_URL +"/createAdditionalDetails"
}

export const stockEndPoints = {
    BUYSTOCK_API:BASE_URL+"/buyStock"
}

export const expenseEndPoints={
    CREATEEXPENSE_API:BASE_URL+"/createExpense",
    GETALLEXPENSE_API:BASE_URL+"/getallExpense",
    DELETEEXPENSE_API:BASE_URL+"/deleteExpense"
}

export const walletEndPoints={  
   ADDMONEY_API :BASE_URL+"/addMoney",
   GETWALLETDETS_API:BASE_URL+"/getwalletdetails"
}