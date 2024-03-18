import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData=
    createAsyncThunk('user/fetchUserData',async(id=null,{rejectWithValue})=>{
        try{
            const response=await axios.get(`http://localhost:3001/products`);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
        
    });

const userSlice=createSlice({
    name:'user',
    initialState:{
        data:[],
        loading:null,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUserData.pending,(state)=>{
                state.loading='pending';
            })
            .addCase(fetchUserData.fulfilled,(state,action)=>{
                state.loading=false;
                state.data=action.payload;
            })
            .addCase(fetchUserData.rejected,(state,action)=>{
                state.loading='rejected';
                state.error=action.payload;
            });
    }
});

export default userSlice.reducer;
