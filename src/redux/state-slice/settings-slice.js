import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name:"settings",
    initialState:{
        loader:"d-none"
    },
    reducers:{
        ShowLoader:(state,action)=>{
            state.loader = "";
        },
        HideLoader:(state,action)=>{
            state.loader = "d-none";
        }
    }
});

export const {ShowLoader,HideLoader} = settingSlice.actions;
export default settingSlice.reducer;