import { createContext,useContext,useEffect,useState } from "react";

const moviecontext=createContext()

export const usemoviecontext=()=> useContext(moviecontext)

export const Movieprovider=({children})=>{


    const [fav,setfav]=useState([])
    useEffect(()=>{
        const storedfav=localStorage.getItem("fav")
        if (storedfav) setfav(JSON.parse(storedfav))
    },[])

    useEffect(()=>{
        localStorage.setItem('fav',JSON.stringify(fav))
    },[fav])

    const addtofav=(movie)=>{
        setfav(prev=>[...prev,movie])
    }

    const remonefromfav=(movieid)=>{
          setfav(prev=>prev.filter(movie=>movie.id!== movieid))
    }

    const isfav=(movieid)=>{
        return fav.some(movie=>movie.id===movieid)

    }

    const value={
        fav,
        addtofav,
        remonefromfav,
        isfav
    }

    return <moviecontext.Provider value={value}>
        {children}
    </moviecontext.Provider>
}

