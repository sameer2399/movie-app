import React from "react";

class MovieCard extends React.Component {
  render() {
    // const { movie } = this.props;
    const { Poster, Title, Plot, imdbRating, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{Title}</div>
          <div className="plot">{Plot}</div>
          <div className="footer">
            <div className="rating">{imdbRating}</div>
            {/* {isFavourite ? 
                    <button className="favourite-btn">Remove from Favourite</button>
                    :  */}
            <button className="favourite-btn">Favourite</button>
            {/* } */}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
