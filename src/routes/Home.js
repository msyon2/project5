import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

let firstMovieAPI = "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=1"
let allMovieAPI = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"

const requestFirst = axios.get(firstMovieAPI);
const requestAll = axios.get(allMovieAPI);

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
	first: [],
  };
  

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.all([requestFirst, requestAll]).then(axios.spread((...allData) => {
		const firstMovie = allData[0];
		const AllMovie = allData[1];
		
	})
    
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {/* condition ? execution when true: execusion when false */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie //Movie is a component
                //props are listed below as follows
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                runtime={movie.runtime}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
