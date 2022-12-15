import "./Details.css";
import { getMovieInfo } from "../services/MovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../slices/FavMoviesSlice";


export const Details = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const dispatch = useDispatch()

  const id = useParams();
  const linear = "linear-gradient(to bottom, #f5f6ff00, ##222a31)";
  useEffect(() => {
    const getInfo = async () => {
      const response = await getMovieInfo(id.id);
      setMovieInfo(response);
    };

    getInfo();
  }, []);
  const added = (e) => {
    e.target.innerHTML = "Added ♡";
    dispatch(addMovie({
      Title:movieInfo.original_title,
      release:movieInfo.release_date,
      ranking: movieInfo.vote_average,
      image: "https://image.tmdb.org/t/p/original/" + movieInfo.poster_path,
      id: movieInfo.id
    }))
  };

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
          {movieInfo.poster_path === null &&
          <img
          src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg" 
          alt=""
        />}
        {movieInfo.poster_path !== null &&
          <img
          src={"https://image.tmdb.org/t/p/original/" + movieInfo.poster_path}
          alt=""
        />}
          
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
            <button className="favbtn" onClick={added}>
              Add to favourites ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
