import React from 'react'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Restaurant' element={<RestaurantList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App