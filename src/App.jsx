import React from 'react'
import Landing from './Components/Landing'
import AllRestaurants from './Components/AllRestaurants'
import {Routes, Route} from "react-router-dom"
import Menu from "./Components/Menu"
import CarouselRestaurant from './Components/CarouselRestaurant'
import Search from './Components/Search'
import Checkout from './Components/Checkout'
import Error from './Components/Error'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restaurants' element={<AllRestaurants />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/carouselrestaurants/:id' element={<CarouselRestaurant />} />
        <Route path='/search' element={<Search />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
