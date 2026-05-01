import { useState } from 'react'
import {route,routes} from 'route,routes./react-router-dom'
import header from './components/Header'
import footer  from './components/Footer'
import './App.css'
import Home from './pages/Home'
import Ex4 from './pages.Ex4'
import Ex13 from './'
import Header from './components/Header'
import { Routes } from 'react-router-dom'
function App() {
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="Ex4" element={<Ex4 />} />
        <Route path="Ex13" element={<Ex13/>} />
    </Routes>
    <Footer/>
   </>
    
  )
}

export default App
  

   



  