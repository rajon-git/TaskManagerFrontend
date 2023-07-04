import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
    name:"summary",
    initialState:{
        value:[],
    },
    reducers:{
        SetSummary:(state,action)=>{
            state.value = action.payload;
        }
    }
});

export const {SetSummary} = summarySlice.actions;

export default summarySlice.reducer;