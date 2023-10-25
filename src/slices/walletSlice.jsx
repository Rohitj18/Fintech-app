import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    TransactionHIstory:localStorage.getItem("TransactionHIstory")?JSON.parse(localStorage.getItem("TransactionHIstory")):[],
    currentBalance:localStorage.getItem("currentBalance")?JSON.parse(localStorage.getItem("currentBalance")):null,
};

const walletSlice = createSlice({
    name: "wallet",
    initialState: initialState,
    reducers: {
      setTransactionHIstory(state, value) {
        state.TransactionHIstory = value.payload;
      },
      setcurrentBalance(state, value) {
        state.currentBalance = value.payload;
      },
    },
});
  
export const { setTransactionHIstory, setcurrentBalance} = walletSlice.actions;

export default walletSlice.reducer;