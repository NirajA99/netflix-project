import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../utility/axios";
import { requests } from "../../utility/requests";

const initialState={
    nfOriginals:{
        status : 'idle',
        error : null,
        data : null
    }
}

export const fetchNetflixOriginals =createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
    const response = await axios.get(requests.getNfOriginals);
    return response.data
    }
) 

export const tvSlice = createSlice({
    name : 'tv',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchNetflixOriginals.pending, (state,action)=>{
            state.nfOriginals.status = 'Loading';
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state,action)=>{
            state.nfOriginals.status = 'Success';
            state.nfOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state,action)=>{
            state.nfOriginals.status = 'Try-Again';
            state.nfOriginals.error = action.error;
        })
    }


})
export const nfOriginalsSelector = (state)=>state.tv.nfOriginals;
export default tvSlice.reducer;