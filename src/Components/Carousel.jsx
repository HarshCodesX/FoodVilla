import React from 'react'
import {Cloudinary} from '../Utils/Constants'
import {useNavigate} from 'react-router-dom'

const Carousel = ({data}) => {
  const nav = useNavigate()
  return (
    <>
    <h2 className='font-bold text-[24px] ml-40'>What's on your mind?</h2>
    <div style={{scrollbarWidth: "none", msOverflowStyle: "none"}} className='flex w-[80vw] mx-auto overflow-scroll'>
      {data && data.map((item) => {
        let str = item.action.link.slice(35).split("?")
        // console.log(str[0])
        return <img onClick={() => {
          nav(`/carouselrestaurants/${str[0]}`)
        }} className='h-[288px] w-[360px]' src={Cloudinary + item.imageId} alt="" />
      })}
    </div>
    </>
  )
}

export default Carousel
