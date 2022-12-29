import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import { NewReleases } from "../services/MovieApi";
import "./Home.css";
import { useNavigate } from "react-router-dom/dist";
import { useSelector } from "react-redux";

export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const isLoged = useSelector((state) => state.isLogin.value);

  useEffect(() => {
    if (!localStorage.getItem("loged")) {
      navigate("/register");
    }
    const getNewReleases = async () => {
      const response = await NewReleases();
      setMovieList(response.results);
    };
  
    getNewReleases();
  }, [setMovieList,isLoged]);

  return (
    <>
    <div className="home-container">
      <div className="section-container">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="cont">
          <h1>New Releases</h1>
          <div className="movies-container">
            {movieList.map((movie, i) => (
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
        </div>
      </div>
    </div>
    </>
  );
};
