import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import expenseReducer from "../slices/expenseSlice";
import walletReducer from '../slices/walletSlice';

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    expense:expenseReducer,
    wallet:walletReducer
});

export default rootReducer;