import {createSlice} from "@reduxjs/toolkit"

const initalState = {
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    additionalDetails: localStorage.getItem("additionalDetails")?JSON.parse(localStorage.getItem("additionalDetails")):null,
}

const ProfileSlice = createSlice({
    name:"profile",
    initialState:initalState,
    reducers:{
        setUser(state,value){
            state.user = value.payload;
        },
        setAdditionalDetails(state,value){
            state.additionalDetails = value.payload;
        }
    }
});

export const {setUser,setAdditionalDetails} = ProfileSlice.actions;
export default ProfileSlice.reducer;