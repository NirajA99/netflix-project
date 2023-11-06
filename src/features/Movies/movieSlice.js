import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints, requests } from "../../utility/requests";
import axios from "../../utility/axios";


const initialState ={
    popularMovies : {
        status : 'idle',
        data : null,
        error : null
    },
    topRatedMovies : { 
        status : 'idle',
        data : null,
        error : null
    },
    nowPlaying : { 
        status : 'idle',
        data : null,
        error : null
    }

}


export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async ()=>{
        const response = await axios.get(requests.getMovies(endPoints.popular));
        return response.data
    }
);
export const fetchTopRatedMovies = createAsyncThunk(
    'movie/fetchTopRatedMovies',
    async ()=>{
        const response = await axios.get(requests.getMovies(endPoints.top_rated));
        return response.data
    }
);
export const fetchNowPlaying = createAsyncThunk(
    'movie/fetchNowPlaying',
    async ()=>{
        const response = await axios.get(requests.getMovies(endPoints.now_playing));
        return response.data
    }
);

export const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPopularMovies.pending, (state, action)=>{
            state.popularMovies.status = 'Loading';
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
            state.popularMovies.status = 'Success';
            state.popularMovies.data = action.payload; 
        })
        .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = 'Try-Again';
            state.popularMovies.error = action.error;
        })
        .addCase(fetchTopRatedMovies.pending, (state, action)=>{
            state.topRatedMovies.status = 'Loading';
        })
        .addCase(fetchTopRatedMovies.fulfilled, (state, action)=>{
            state.topRatedMovies.status = 'Success';
            state.topRatedMovies.data = action.payload; 
        })
        .addCase(fetchTopRatedMovies.rejected, (state, action)=>{
            state.topRatedMovies.status = 'Try-Again';
            state.topRatedMovies.error = action.error;
        })
        .addCase(fetchNowPlaying.pending, (state, action)=>{
            state.nowPlaying.status = 'Loading';
        })
        .addCase(fetchNowPlaying.fulfilled, (state, action)=>{
            state.nowPlaying.status = 'Success';
            state.nowPlaying.data = action.payload; 
        })
        .addCase(fetchNowPlaying.rejected, (state, action)=>{
            state.nowPlaying.status = 'Try-Again';
            state.nowPlaying.error = action.error;
        })  
    }
    
});

export const popularMoviesSelector = (state)=>state.movie.popularMovies;
export const topRatedMoviesSelector = (state)=>state.movie.topRatedMovies;
export const nowPlayingSelector = (state)=>state.movie.nowPlaying;
export default movieSlice.reducer;