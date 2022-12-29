import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import {Card} from "./Card"

export const Carrousel = (props) => {
  const { MovieList } = props;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear"
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
          cssEase: "linear"
        },
      },
    ],
  };

  return (
    <div className="carr-cont">
      <h2>you might also be interested:</h2>
      <Slider {...settings}>
        {MovieList?.map((movie) => (
          
           <Card 
           key={movie.id}
           title={movie.original_title}
           image={movie.poster_path}
           release={movie.release_date}
           favbtn={true}
           id={movie.id}
           />
          
        ))}
      </Slider>
    </div>
  );
};

