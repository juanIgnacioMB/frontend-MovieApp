import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import { useState,useEffect} from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { getMovieByName } from "../services/MovieApi";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const [movieList, setMovieList] = useState([]);
const movieName = useSelector(state => state.movie.value)
const navigate = useNavigate()

useEffect(() => {
  if(movieName === ""){
    navigate("/")
  }
    const getSearch = async () => {
      const response = await getMovieByName(movieName);
      setMovieList(response.results);
    };
    getSearch();
  }, [movieList, setMovieList]);

  return (
    <div className="home-container">
      <div className="section-container">
        <div className="nav-bar">
        <NavBar />
        </div>
        <div className="cont">
          {movieList?.length === 0 && <h1>Movie not Found!</h1>}
          {movieList?.length > 0 && <>
          <h1>Results of: {movieName}</h1>
          <div className="movies-container">
            {movieList?.map((movie, i) => (
              <Card
                key={i}
                title={movie.original_title}
                image={movie.poster_path}
                ranking={movie.vote_average}
                release={movie.release_date}
                favbtn={true}
                id={movie.id}
              />
            ))}
          </div>
          </>}

          
        </div>
      </div>
    </div>
  );
};
