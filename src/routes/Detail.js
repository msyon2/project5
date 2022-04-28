import React from "react";
import './Detail.css'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location.state);
    if (location.state) {
      return (
        <div className="detail flex pr">
          <img className="pa"
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie_info pr">
            <div className="top flex">
              <h2 className="movie_tit">{location.state.title}</h2>
              <h3 className="movie_rating">{location.state.rating}</h3>
            </div>
            <div>
              <ul className="movie_genre flex">
                {location.state.genres.map((genre, index) => {
                  return (
                    <li key={index} className="genre">
                      {genre}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="movie_summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
