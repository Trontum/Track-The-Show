import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_API_KEY } from "../pages/keys";


const initialState={
    topMovies:[],
    topShows:[],
    trendingMovies:[],
    trendingShows:[]
}


export const getTopMovies= createAsyncThunk("TrackTheShow/topratedmovies",async()=>{
    const data= await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`);
    return data.data.results;
});
export const getTopShows= createAsyncThunk("TrackTheShow/topratedshows",async()=>{
    const data= await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}`);
    return data.data.results;
});
export const getTrendingMovies= createAsyncThunk("TrackTheShow/trendingmovies",async()=>{
    const data= await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`);
    return data.data.results;
});
export const getTrendingShows= createAsyncThunk("TrackTheShow/trendingshows",async()=>{
    const data= await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}`);
    return data.data.results;
});


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTopMovies.fulfilled,(state,action)=>{
            state.topMovies=action.payload;
        })
        builder.addCase(getTopShows.fulfilled,(state,action)=>{
            state.topShows=action.payload;
        })
        builder.addCase(getTrendingMovies.fulfilled,(state,action)=>{
            state.trendingMovies=action.payload;
        })
        builder.addCase(getTrendingShows.fulfilled,(state,action)=>{
            state.trendingShows=action.payload;
        })
    }
})
export const {changeLoginState}= userSlice.actions;
export default userSlice.reducer;