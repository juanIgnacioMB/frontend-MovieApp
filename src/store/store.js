import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../slices/MovieSlice";
import FavMoviesSlice from "../slices/FavMoviesSlice";
import LoginSlice from "../slices/LoginSlice";

export default configureStore({
    reducer:{
       movie: MovieSlice,
       favmovies:FavMoviesSlice,
       isLogin:LoginSlice,
    }
})
