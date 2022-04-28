import React from "react";
import "./MovieTop.css";

const MovieTop = ({ movie }) => {
  if (movie) {
    return (
      <div className="movie_intro pr">
        <img
          className="bg"
          src={movie.background_image_original}
          alt={movie.title}
        />
        {/* <img className='poster blur pa' src={movie.medium_cover_image} alt={movie.title} /> */}
        <div className="poster_box pr">
          <img
            className="poster pa"
            src={movie.large_cover_image}
            alt={movie.title}
          />
        </div>
        <div className="overlay pa"></div>
        <div className="blur pa"></div>
        <div className="blur top pa"></div>
        <div className="blur content pa"></div>
        <div className="container ">
          <div className="movie_content">
            <div className="title_wrap">
              <h3>{movie.title}</h3>
              <h5 className="rating">{movie.rating}</h5>
            </div>
            <div className="content_wrap">
              {/* <span>{movie.year}</span> */}
              <ul className="movie_genre flex">
                <li>{movie.year}</li>
                <li>|</li>
                {movie.genres.map((genre, index) => {
                  return (
                    <li key={index} className="genre">
                      {genre}
                    </li>
                  );
                })}
              </ul>
              {/* <p>{movie.summary.slice(0, 200)}...</p> */}
            </div>
          <div className="top20">Top 20 Movies to Watch</div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieTop;
