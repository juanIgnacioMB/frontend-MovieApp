import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import "./GenresResults.css";
import { getGenres } from "../services/MovieApi";
import { getMoviesByGenre } from "../services/MovieApi";

export const GenreResults = () => {
  const [genreList, setGenreList] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [genreSearch, setGenreSearch] = useState();

  useEffect(() => {
    const getGenreList = async () => {
      const response = await getGenres();
      setGenreList(response.genres);
    };

    const getGenreMovies = async () => {
      const response = await getMoviesByGenre(genreSearch);
      setGenreMovies(response.results);
    };

    getGenreList();
    getGenreMovies();
  }, [genreSearch, setGenreList]);

  return (
    <div className="home-container">
      <div className="section-container">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="cont">
          <div className="select-genres-cont">
            <h1>Results of:</h1>
            <select
              onChange={(e) => setGenreSearch(e.target.value)}
              name=""
              id=""
              className="select-genres"
            >
              {genreList.map((genre) => (
                <option key={genre?.id}value={genre?.id}>{genre.name}</option>
              ))}
            </select>
          </div>
          <div className="movies-container">
            {genreMovies.map((movie) => (
              <Card
                key={movie.id}
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
  );
};
