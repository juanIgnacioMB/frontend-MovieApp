import "./Details.css";
import { getMovieInfo } from "../services/MovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";
import { getMoviesByGenre } from "../services/MovieApi";

export const Details = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [movieList, setMovieList] = useState([]);

  const id = useParams();
  useEffect(() => {
    const getInfo = async () => {
      const response = await getMovieInfo(id.id);
      setMovieInfo(response);
      const response2 = await getMoviesByGenre(response.genres[0]?.id);
      setMovieList(response2.results);
      window.scrollTo(0, 0);
    };

    getInfo();

  }, [id, setMovieList, setMovieInfo]);

  return (
    <div className="detail-container">
      <div
        className="topbackground"
        style={{
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original/" +
            movieInfo.backdrop_path +
            ")",
        }}
      ></div>
      <div className="topbackground2"></div>
      <div className="movie-details">
        <div className="img-container">
          <h3>{movieInfo.vote_average}</h3>
          {movieInfo.poster_path === null && (
            <img
              src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"
              alt=""
            />
          )}
          {movieInfo.poster_path !== null && (
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + movieInfo.poster_path
              }
              alt=""
            />
          )}
        </div>
        <div className="movie-info">
          <h1>{movieInfo.original_title}</h1>
          {movieInfo.tagline !== "" && <h3> {movieInfo.tagline}</h3>}
          <div className="genre-cont">
            {movieInfo.genres?.map((genre) => (
              <p key={genre.id}> {genre.name}</p>
            ))}
          </div>
          <p>{movieInfo.overview}</p>
          <p>Release: {movieInfo.release_date}</p>

          <div className="btn-container">
            {movieInfo.homepage !== "" && (
              <button className="watchlaterbtn">
                <a target="_blank" href={movieInfo.homepage}>
                  Go to homepage
                </a>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="carrousel-cont">
        <Carrousel MovieList={movieList} />
      </div>
    </div>
  );
};
