 import { useParams } from "react-router-dom";
 import { useState,useEffect } from "react";
 import { getMovieDetails } from "../api";
 import "../css/moviedescription.css"

 export function Moviedescription(){

    const {id}=useParams();

    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        setLoading(true);
        // 2. Use the retrieved ID to call your API function
        const data = await getMovieDetails(id);
        setMovieDetails(data);
        console.log(data)
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);
if(loading) return
 else{ return <div>
    <div className="movie-page">
        <div className="movie-poster1">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}  alt={movieDetails.title} />
        </div>
        <div className="movie-details">
            <h1 className="movie-title">{movieDetails.title}</h1>
            <p className="tagline">{movieDetails.tagline}</p>
            {movieDetails.original_title!==movieDetails.title && <p className="movie-meta">Original Title : {movieDetails.original_title}</p>}
             <p className="movie-meta">{movieDetails.adult?"A":"UA"} |{movieDetails.release_date} | {movieDetails.genres[0].name},{movieDetails.genres[1].name} </p>
             {movieDetails.budget!==0?
                <p className="movie-meta">Budget : ${Math.round(movieDetails.budget/1000000)}M</p>
            : <p className="movie-meta">Budget : NA</p>}
             {movieDetails.revenue!==0?
                <p className="movie-meta">Revenue generated : ${Math.round(movieDetails.revenue/1000000)}M</p>
            : <p className="movie-meta">Revenue generated : NA</p>}
             <div className="movie-score">
                <div className="score-circle">{Math.round(movieDetails.vote_average*10)}%</div>
                <span>User Score</span>
                </div>

            <div className="movie-overview">
            <h3>Overview</h3>
            <p>
               {movieDetails.overview}
            </p>

            
            </div> 
            <div>
            <a 
                href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="imdb-link"
            >
            IMDB
            </a>
            </div>


            </div>
           
        
        
    </div>





  </div>


}}

