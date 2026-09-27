import { useGlobalContext } from "../context/AppContext"
import { Link } from "react-router-dom";

export default function MovieList() {

  const {movie, isLoading} = useGlobalContext();

  if(isLoading){
    return (
      <div className="movie-section">
        <div className="loading">
          Loading...
        </div>
      </div>
    );
  }
  return (
    <>
    <section className="movie-page container">
      <div className="grid grid-4-col">
        {movie.map((currMovie) => {

          const { imdbID , Title, Poster} = currMovie;

          const movieName = Title.substring(0,15);

        return <Link to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="card-info">
              <h2>{movieName.length >= 15 ? `${movieName}...`: movieName}</h2>
              <img src={Poster} alt={imdbID}  />
            </div>
          </div>
        </Link>
      })}
      </div>
    </section>
      
    </>
  )
}