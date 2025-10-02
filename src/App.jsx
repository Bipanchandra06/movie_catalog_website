import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Moviecard from './components/MoiveCard'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Favorite from './pages/favourties'
import Navbar from './components/navbar'
import { Movieprovider } from './context/Moviecontext'
import { Moviedescription } from './pages/moviedescription'

function App() {
  
  return (
    <div>
      <Movieprovider>
      <Navbar/>
    <main className='main-content'>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorite/>}></Route>
        <Route path="/movie/:id" element={<Moviedescription/>}></Route>
      </Routes>
    </main>
    </Movieprovider>
      </div>
  )
}

export default App
