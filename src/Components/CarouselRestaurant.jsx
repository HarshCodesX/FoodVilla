import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Card'

const CarouselRestaurant = () => {
    const {id} = useParams()
    const[data, setData] = useState([])
    const[details, setDetails] = useState({})
    useEffect(() => {
        async function getData(){
            const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.652&lng=77.1663&collection=${id}&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
            const data = await res.json()
            setData(data.data.cards.slice(3))
            setDetails(data.data.cards[0].card.card)
        }
        getData()
    }, [])
  return (
    <div>
      <Navbar />
      <div className='p-4 border mb-6 w-fit ml-5'>
        <h1 className='text-[42px] font-bold'>{details.title}</h1>
        <p>{details.description}</p>
      </div>

      <div className='grid grid-cols-4'>
        {data && data.map((item) => {
            let obj = item.card.card.info
            return <Card area={obj.areaName} cuisines={obj.cuisines} id={obj.id} img={obj.cloudinaryImageId} name={obj.name} c={"tr"} time={obj.sla.deliveryTime} rating={obj.avgRating} />
        })}
      </div>
    </div>
  )
}

export default CarouselRestaurant

//1: 07 hours
