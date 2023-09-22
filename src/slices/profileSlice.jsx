import {createSlice} from "@reduxjs/toolkit"

const initalState = {
    user:null,
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