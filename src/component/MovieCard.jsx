import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  
  const { imdbID, Title, Poster } = movie;
  
  const movieName = Title.substring(0, 15);

  return (
    <Link to={`/movie/${imdbID}`}>
      <div className="card">
        <div className="card-info">
          <h2>
            {movieName.length >= 15
              ? `${movieName}...`
              : movieName}
          </h2>

          <img src={Poster} alt={Title} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;