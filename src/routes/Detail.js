import React from "react";
import "./Detail.css";

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
        <div className="detail pr">
          <img
            className="pa"
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie_info pa">
            <div className="top">
              <h2 className="movie_tit">{location.state.title}</h2>
            </div>
            <p className="movie_summary">{location.state.summary}</p>
            <div className="movie_details flex pr">
              <ul className="movie_genre flex">
                <li>{location.state.year}</li>
                {location.state.genres.map((genre, index) => {
                  return (
                    <li key={index} className="genre">
                      {genre}
                    </li>
                  );
                })}
              </ul>
              <h3 className="movie_rating rating">{location.state.rating}</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
