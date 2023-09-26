import {createSlice} from "@reduxjs/toolkit"

const initalState = {
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const ProfileSlice = createSlice({
    name:"profile",
    initialState:initalState,
    reducers:{
        setUser(state,value){
            state.user = value.payload;
        }
    }
});

export const {setUser} = ProfileSlice.actions;
export default ProfileSlice.reducer;