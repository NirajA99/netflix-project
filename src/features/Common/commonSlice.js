import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../utility/axios";
import { requests } from "../../utility/requests";

const initialState={
    headerVideo:{
        status : 'idle',
        error : null,
        data : null
    },
    VideoDetails: {
        status : 'idle',
        error : null,
        data : null
    }

}

export const fetchHeaderDetails =createAsyncThunk(
    'tv/fetchHeaderDetails',
    async (type) => {
    const response = await axios.get(requests.getVideoDetails(type));
    return response.data
    }
) 

export const fetchVideoDetails =createAsyncThunk(
    'tv/fetchVideoDetails',
    async (type) => {
    const response = await axios.get(requests.getVideoDetails(type));
    return response.data
    }
) 


export const commonSlice = createSlice({
    name : 'common',
    initialState,
    reducers:{
        platformAction : (state , action) => {
            state.platform = action.payload
        }
        },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchHeaderDetails.pending, (state,action)=>{
            state.headerVideo.status = 'Loading';
        })
        .addCase(fetchHeaderDetails.fulfilled, (state,action)=>{
            state.headerVideo.status = 'Success';
            state.headerVideo.data = action.payload;
        })
        .addCase(fetchHeaderDetails.rejected, (state,action)=>{
            state.headerVideo.status = 'Try-Again';
            state.headerVideo.error = action.error;
        })
        .addCase(fetchVideoDetails.pending, (state,action)=>{
            state.VideoDetails.status = 'Loading';
        })
        .addCase(fetchVideoDetails.fulfilled, (state,action)=>{
            state.VideoDetails.status = 'Success';
            state.VideoDetails.data = action.payload;
        })
        .addCase(fetchVideoDetails.rejected, (state,action)=>{
            state.VideoDetails.status = 'Try-Again';
            state.VideoDetails.error = action.error;
        })
    }


});

export const {platformAction} = commonSlice.actions;

export const headerVideoSelector = (state)=>state.common.headerVideo;
export const videoDetailsSelector = (state)=>state.common.VideoDetails;
export const platformSelector = (state)=>state.common.platform;
export default commonSlice.reducer;