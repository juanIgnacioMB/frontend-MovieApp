import "./Card.css";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../slices/FavMoviesSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Card = (props) => {
  const [addedToFav, setAddedToFav] = useState(false);

  const dispatch = useDispatch();

  const { ranking, image, title, release, favbtn, id } = props;
  const shortTitle = (str) => {
    if (str?.length > 12) {
      return str.slice(0, 9).concat("....");
    } else {
      return str;
    }
  };

  const removeFav2 = async () => {
    dispatch(
      removeMovie({
        id: id,
      })
    );
  };

  const addToFav = async () => {
    dispatch(
      addMovie({
        release: release,
        Title: title,
        ranking: ranking,
        image: image,
        id: id,
      })
    );
    setAddedToFav(true);
  };
  return (
    <div className="Card">
      {favbtn && (
        <button className="button-fav" onClick={addToFav}>
          {(addedToFav && "💖") || "❤"}
        </button>
      )}
      {!favbtn && (
        <button className="button-fav" onClick={removeFav2}>
          ✘
        </button>
      )}
     <div className="ranking-cont"> <h3>{ranking}</h3></div>
      <Link to={"/details/" + id}>
        {image === null && (
          <img
            src={
              "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"
            }
            alt=""
            className="card-img"
          />
        )}
        {image !== null &&
        <img
        src={"https://image.tmdb.org/t/p/original/" + image}
        alt=""
        className="card-img"
      />}
        
      </Link>
      <h4>{shortTitle(title)}</h4>
      <p>release: {release}</p>
    </div>
  );
};
