import { createSlice } from "@reduxjs/toolkit";

export const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptToggle: false,
    movieResults: null,
    movieSearch: null,
  },
  reducers: {
    addgptToggle: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    addgptMovies: (state, action) => {
      state.movieResults = action.payload.movieResults;
      state.movieSearch = action.payload.movieSearch;
    },
  },
});

export const { addgptToggle, addgptMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
