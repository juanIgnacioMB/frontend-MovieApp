import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../slices/MovieSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {

  const [search, setSearch] = useState("");
  const [newMovies, setNewMovies] = useState([]);
  const dispatch = useDispatch();
  const movieName = useSelector((state) => state.movie.value);
const navigate = useNavigate()

  const searching = (e) => {
    if(e.key == "Enter"){
    dispatch(changeName(search))
    navigate("/results")
    e.target.value = ""
    }
    
  };

  const setSearchHook =(e)=>{
    setSearch(e.target.value);
  }
  
  
  return (
    <div className="header-cont">
      <div className="title-cont">
       <Link to={"/"}> <h2>Movie app</h2></Link>
      </div>
      <div className="input-button-cont">
      <input type="text" placeholder=" search..." onChange={setSearchHook} onKeyDown={searching}/>
     
      </div>
    </div>
  );
};
