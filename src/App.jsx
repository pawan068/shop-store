import React from 'react'
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {

  const [location,setLocation]=useState()

  const getLocation = async()=>{
    navigator.geolocation.getCurrentPosition(async pos => {
         const { latitude, longitude } = pos.coords;

         const URL = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
         
         try {
          const location = await axios.get(URL)
          const exactLocation = location.data.address
          console.log(exactLocation);
          
          setLocation(exactLocation)
          
          
         } catch (error) {
          console.log(error)
         }
         

    })
  }
 useEffect(() => {
  getLocation()
}, [])   


  return (
    <>
      <BrowserRouter basename="/shop-store">
        <Navbar location={location} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App