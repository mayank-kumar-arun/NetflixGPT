import { createSlice } from "@reduxjs/toolkit";

export const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptToggle: false,
  },
  reducers: {
    addgptToggle: (state) => {
      state.gptToggle = !state.gptToggle;
    },
  },
});

export const { addgptToggle } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
