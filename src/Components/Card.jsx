import React from 'react'
import {Cloudinary} from '../Utils/Constants'
import veg from '../assets/veg.svg'
import { Link } from 'react-router-dom'

const Card = ({name, id, img, time, rating, area, cuisines, c}) => {

  let nm = name.length > 20 ? name.slice(0,20) + "..." : name

  let str = cuisines.join(", ")
  str = str.length > 30 ? str.slice(0, 30) + "..." : str


  let nm2 = name.length > 12 ? name.slice(0, 12) + "..." : name
  let str2 = cuisines.join(", ")
  str2 = str2.length > 20 ? str2.slice(0, 20) + "..." : str2
  return (
    <Link to={`/menu/${id}`}>
    <div className={'flex flex-col items-center ' + (c == "tr" ? "min-w-80 h-[330px]" : "w-[100%] h-[270px]")}>
      <img className='h-[60%] w-[90%] rounded-3xl' src={Cloudinary + img} alt='img-broken' />
      <div className='p-3 w-[90%]'>
        <h2 className='font-bold'>{c == "tr" ? nm : nm2}</h2>
        <div className='flex'>
            <img src={veg} />
            <p>{rating} - {time}</p>
        </div>
        <p className='text-gray-400'>{c == "tr" ? str : str2}</p>
        <p className='text-gray-400'>{area}</p>
        </div>
    </div>
    </Link>
  )
}

export default Card
