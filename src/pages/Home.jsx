import Moviecard from "../components/MoiveCard"
import { useState,useEffect} from "react";
import "../css/home.css"
import { getpopmovie,searchmovie}  from "../api";

function Home(){

    const[searchQuery,setsearchQuery]=useState("");
    const [movies,setmovies]=useState([]);
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true)
    useEffect(()=>{
const loadpopmovies=async ()=>{
    try{
        const popmovies=await getpopmovie()
        setmovies(popmovies)
    }catch(err){seterror("failed to load")
        console.log(err)
    }
    finally {
        setloading(false)
    }
}
loadpopmovies()
    },[])


const handlesearch= async (e)=>{
e.preventDefault()
if(!searchQuery.trim()) return
if(loading) return
setloading(true);
try{
const searchresults=await searchmovie(searchQuery)
setmovies(searchresults)
seterror(null)
}catch(err){
    seterror("failed to load");

}finally{
    setloading(false)
}


};
   return <div className="home">
    <form onSubmit={handlesearch} className="search-form">
        <input type="text" placeholder="Search for Movies" className="search-input" value={searchQuery} onChange={(e)=> setsearchQuery(e.target.value)}></input>
        <button type="submit" className="search-button"> Search</button>
    </form>

    {error&& <div>{error}</div>}

    {loading? <div className="loading">Loading...</div>:
    <div className="movies-grid">
        {movies.map(movie=> movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <Moviecard movie={movie} key={movie.id}/>)}
    </div>}

   </div>
}
export default Home