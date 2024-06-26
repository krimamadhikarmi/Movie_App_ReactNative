import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const MovieSlice = createSlice({
    name: 'movieshow',
    initialState,
    reducers: {
        FetchMovie(state,action){
            return [...state, action.payload];
        }
    },
});


export const {FetchMovie} = MovieSlice.actions;
export default MovieSlice.reducer;