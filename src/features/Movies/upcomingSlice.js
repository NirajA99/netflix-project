import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utility/axios";
import { endPoints, requests } from "../../utility/requests";


const initialState ={
    upcomingMovies:{
        status : 'idle',
        data : null,
        error : null
    }
}



export const fetchUpcomingMovies = createAsyncThunk(
    'upcoming/fetchUpcomingMovies',
    async ()=>{
        const response = await axios.get(requests.getMovies(endPoints.upcoming));
        return response.data
    }
);

export const upcomingMoviesSlice = createSlice({
    name : 'upcoming',
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
        builder
        .addCase(fetchUpcomingMovies.pending,(state)=>{
            state.upcomingMovies.status = 'Loading';
        })
        .addCase(fetchUpcomingMovies.fulfilled, (state, action)=>{
            state.upcomingMovies.status = 'Success';
            state.upcomingMovies.data = action.payload;
        })
        .addCase(fetchUpcomingMovies.error,(state, action)=>{
            state.upcomingMovies.status = 'Error-404';
            state.upcomingMovies.error = action.error;
        })
    }

})

export const upcomingMoviesSelector = (state)=>state.upcoming.upcomingMovies;
export default upcomingMoviesSlice.reducer;