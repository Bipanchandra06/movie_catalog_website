
import "../css/moviecard.css"
import { usemoviecontext } from "../context/Moviecontext";
import { Link } from "react-router-dom";

function Moviecard({movie}){
     const {isfav,addtofav,remonefromfav}=usemoviecontext()
    const favrotie=isfav(movie.id)

    function handleclick(e){
        e.preventDefault()
        if (favrotie) remonefromfav(movie.id)
        else addtofav(movie)
         
    }
    
return <Link to={`/movie/${movie.id}`} className="movie-card">
        <div className="movie-card" >
            <div  className="movie-poster" >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
            <div className="movie-overlay">
                <button className="like-button" onClick={handleclick}>{favrotie?"Remove from Watchlist":"Add to Watchlist"}</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            </div>
        </div>
        </Link>

}

export default Moviecard