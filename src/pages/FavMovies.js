import { NavBar } from "../components/NavBar";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FavMovies.css";
export const FavMovies = () => {
  const [newMovies, setNewMovies] = useState([]);
  const favMoviesArr = useSelector((state) => state.favmovies.value);
  const isLoged = useSelector((state) => state.isLogin.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loged")) {
      navigate("/");
    }

    const favs = () => {
      const uniqueArrayMovies = [
        ...new Set(favMoviesArr.map((o) => JSON.stringify(o))),
      ].map((s) => JSON.parse(s));

      setNewMovies(uniqueArrayMovies);
    };

    favs();
  }, [favMoviesArr, isLoged]);

  
  return (
    <>
      <div className="favs-container">
        <NavBar />
        <div className="cont">
          <h1>favourites movies</h1>
          <div className="favs-movies-container">
            {newMovies?.map((movie, i) => (
              <Card
                key={i}
                title={movie.Title}
                image={movie.image}
                ranking={movie.ranking}
                release={movie.release}
                favbtn={false}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
