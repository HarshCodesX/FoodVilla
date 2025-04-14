import React from 'react'
import Card from './Card'

const ResInCity = ({data}) => {
    // console.log(data)
  return (
    <div className='w-[80vw] mx-auto'>
      <h2 className='text-2xl font-bold ml-4 mb-5' >Restaurants with online food delivery in Delhi</h2>
      
      <div className='grid grid-cols-4 w-[80vw] mx-auto'>
      {data && data.map((item) => {
        return <Card c="ric" id={item.info.id} time={item.info.sla.slaString} area={item.info.areaName} name={item.info.name} rating={item.info.avgRating} img={item.info.cloudinaryImageId} cuisines={item.info.cuisines} />
      })}
      </div>
    </div>
  )
}

export default ResInCity
