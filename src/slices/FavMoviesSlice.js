import { createSlice } from "@reduxjs/toolkit";

export const FavMoviesSlice = createSlice({
  name: 'favMovies',
  initialState:{ 
    value:
        []
    },
  reducers:{
    addMovie:(state,action)=>{
        state.value = [...state.value,action.payload]
    },
    removeMovie:(state,action)=>{
state.value = state.value.filter((favMovie) =>  favMovie.id !== action.payload.id)

    }
  }
});


export const { addMovie,removeMovie } = FavMoviesSlice.actions;

export default FavMoviesSlice.reducer;
