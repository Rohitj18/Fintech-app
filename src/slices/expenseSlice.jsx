import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todayExpenseArr:localStorage.getItem("todayExpenseArr")?JSON.parse(localStorage.getItem("todayExpenseArr")):[],
    aggregate:localStorage.getItem("aggregate")?JSON.parse(localStorage.getItem("aggregate")):0,
};

const expenseSlice = createSlice({
    name: "expense",
    initialState: initialState,
    reducers: {
      setTodayExpenseArr(state, value) {
        state.todayExpenseArr = value.payload;
      },
      setAggregate(state, value) {
        state.aggregate = value.payload;
      },
    },
});
  
export const { setTodayExpenseArr, setAggregate} = expenseSlice.actions;

export default expenseSlice.reducer;