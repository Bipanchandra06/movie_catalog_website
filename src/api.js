const API_KEY="b3ad788737a468d60eefcbbf2f344c62";
const BASE_URL="https://api.themoviedb.org/3";

export const getpopmovie=async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data=await response.json()
    return data.results
}

export const searchmovie=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json()
    return data.results
}

export const getMovieDetails = async (movieId) => {
    try {
        if (!movieId) {
            throw new Error("Movie ID is required for fetching details.");
        }
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

        if (!response.ok) {
           
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};