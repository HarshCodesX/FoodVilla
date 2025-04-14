import React, {useState, useEffect} from 'react'
import {API} from '../Utils/Constants'
import Navbar from './Navbar'
import Carousel from './Carousel'
import TopRestaurants from './TopRestaurants'
import ResInCity from './ResInCity'
import ShimmerUI from './ShimmerUI'

const AllRestaurants = () => {
  const[apiData, setApiData] = useState()
  useEffect(() => {
          async function getData(){
              let res = await fetch(API);
              let data = await res.json();
              setApiData(data)
          }
          getData()
      }, [])
  return (
    <div>
      <Navbar />
      {
        apiData ? (<>
        <Carousel data={apiData ? apiData.data.cards[0].card.card.imageGridCards.info : ""} />
      <hr className='w-[80vw] mx-auto mt-5 text-gray-300 mb-10' />
      <TopRestaurants data={apiData ? apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants : []} />
      <hr className='w-[80vw] mx-auto mt-5 text-gray-300 mb-10' />
      <ResInCity data={apiData ? apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants: []} />
        </>) : (<ShimmerUI />)
      }
      
    </div>
  )
}

export default AllRestaurants
