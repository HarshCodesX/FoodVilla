import React from 'react'
import {useNavigate} from "react-router-dom"
import { Cloudinary } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import {addToCart} from "../Utils/CartSlice"

const FinalCard = ({img, name, price, resName, resId, rating, isVeg}) => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  if(rating == undefined || img == undefined || name == undefined || resName == undefined || resId == undefined){
    return
  }
  return (
    <div className='border rounded-3xl p-4 w-[400px] mt-4 hover:cursor-pointer' onClick={() => {
      nav(`/menu/${resId}`)
    }}>
      <div className='flex justify-between'>
        <div>
          <h3>By {resName}</h3>
          <p><i class="fa-solid fa-star"></i>{rating}</p>
        </div>
        <i class="fa-solid fa-caret-down fa-rotate-270"></i>

      </div>
      <div className='flex items-center justify-between'>
        <div className='h-fit ml-4'>
          <h1>{name}</h1>
          <p className='mt-3'>$ {price}</p>
        </div>
        <div>
          <img className='h-[150px] w-[150px] rounded-lg' src={Cloudinary + img} alt="" />
          <button onClick={() => {
            dispatch(addToCart({name, price, isVeg, img}))
            }} className='border relative bottom-2 left-10 bg-white rounded-lg text-green-400 px-5 py-2'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default FinalCard