import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt search",
    initialState: {
        showGptSearch: false,
        gptMovieName: null,
        gptMovieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptSuggestMovies: (state, action) => {
            const {movieName, movieResults} = action.payload;
            state.gptMovieName = movieName
            state.gptMovieResults = movieResults
        }
    }
});

export const {toggleGptSearchView, addGptSuggestMovies}  = gptSlice.actions;
export default gptSlice.reducer;