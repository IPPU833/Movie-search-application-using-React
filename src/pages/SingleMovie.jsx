import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

const API_url = `https://www.omdbapi.com/?apikey=${apiKey}`

export default function SingleMovie() {

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true)
        const [movie, setMovie] = useState("");
        
    
        const getMovies = async(url) => {
            try{
                const res = await fetch(url);
                const data = await res.json(); 
                console.log(data);
    
                if(data.Response === 'True'){
                    setIsLoading(false);
                    setMovie(data);
                }
                
            }catch(error) {
                console.log(error); 
            }
        }
    
        useEffect(() => {
    
            // Debauncing 
            let timerOut =  setTimeout(() => {
                getMovies(`${API_url}&i=${id}`);
            },1000);
            
            return () => clearTimeout(timerOut)
        },[id])

    if(isLoading){
        return (
            <div className="movie-section">
                <div className="loading">Loading...</div>
            </div>
        )
    }


  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
            <img src={movie.Poster} alt="Movie Img" />
        </figure>

        <div className="card-content">
            <p className="title"> {movie.Title}</p>
            <p ><span>Realesed:</span> {movie.Released}</p>
            <p ><span>Genre:</span> {movie.Genre}</p>
            <p ><span>Country: </span>{movie.Country}</p>
            <p ><span>imdbRating:</span> {movie.imdbRating}/10</p>
            <p > <span>Actors: </span>{movie.Actors}</p>
            <p><span>Awards: </span>{movie.Awards}</p>
            <Link to="/">Go Back</Link>
        </div>
      </div>
    </section>
  )
}