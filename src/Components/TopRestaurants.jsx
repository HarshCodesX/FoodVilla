import React from 'react'
import Card from './Card'

const TopRestaurants = ({data}) => {
  return (
    <div className='mx-auto w-[80vw] h-fit'>
      <h2 className='text-2xl font-bold ml-4 mb-5'>Top Restaurant chains in Delhi</h2>
      <div className='flex overflow-scroll' style={{scrollbarWidth: "none", msOverflowStyle: "none"}}>
      {data && data.map((item) => {
        return <Card c="tr" id={item.info.id} time={item.info.sla.slaString} area={item.info.areaName} name={item.info.name} rating={item.info.avgRating} img={item.info.cloudinaryImageId} cuisines={item.info.cuisines} />
      })}
    </div>
    </div>
  )
}

export default TopRestaurants
