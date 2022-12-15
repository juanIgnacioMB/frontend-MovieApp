import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: "",
  },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

export const { changeName } = movieSlice.actions;

export default movieSlice.reducer;
