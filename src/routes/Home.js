import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import MovieTop from "../components/MovieTop";

import "./Home.css";
import "./Common.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    selectMovie: null,
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, selectMovie: movies[0], isLoading: false });
  };

  onSelectMovie = (movie) => {
    this.setState({ selectMovie: movie });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <MovieTop movie={this.state.selectMovie}></MovieTop>
            <div className="movies">
              {movies.map((movie) => {
                return (            
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      largePoster={movie.large_cover_image}
                      genres={movie.genres}
                      rating={movie.rating}
                      background={movie.background_image_original}
                    />
            
                );
              })}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
