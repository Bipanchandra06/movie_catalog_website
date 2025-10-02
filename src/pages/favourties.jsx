
import "../css/favorites.css"
import { usemoviecontext } from "../context/Moviecontext"
import Moviecard from "../components/MoiveCard"

function Favorite(){

    const {fav}=usemoviecontext()
    if (fav!=[]){
        return (<div>
            <h2> Your Watchlist</h2>
        <div className="movies-grid">
        {fav.map(movie=><Moviecard movie={movie} key={movie.id}/>)}
    </div></div>)
    }
    else {return <div>
       <h2>No Movies in Watchlist yet</h2>
       <p>Start adding movies to your Watchlist</p>
    </div>}
}
export default Favorite