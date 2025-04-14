import React, {useState} from 'react'
import navlogo from '../assets/navlogo.svg'
import offers from '../assets/offers.svg'
import search from '../assets/search.svg'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import DropdownCart from './DropdownCart'

const Navbar = () => {
  const[showDropdown, setShowDropdown] = useState(false)
  let cartData = useSelector((store) => { //yaha store kaha se ayaa cb me?
    return store.cart 
  })

  let allItems = 0;

  for(let item of cartData){
    allItems += item.quantity
  }

  // let timeoutId = "" //because we are passing it inside props so if we defined it there inside callback function, then its scope will be limited to its fucntion block
  //above line wont work as component has been mounted and when this variable changed, react couldnt track changes inside it, so we will use state variable 

  let [timeoutID, setTimeoutID] = useState("")

  return (
    <div className='relative'>
    <div className='mb-5 flex justify-between items-center p-4 shadow-lg'>
      <div className='flex items-center justify-center gap-3'>
      <img src={navlogo} alt="" />
      <h3 className='font-bold text-3xl'>Swiggy</h3>
      </div>
      <div className='flex gap-8'>
        <div className='hover:cursor-pointer hover:text-orange-400'>
          <i className="mr-2 fa-solid fa-magnifying-glass"></i>
          <Link to={"/search"}>Search</Link>
        </div>
        <div className='hover:cursor-pointer hover:text-orange-400'>
        <i className="mr-2 fa-solid fa-percent"></i>
        <Link>offers</Link>
        </div>
        <div
        onMouseLeave={() => {
          let id  = setTimeout(() => {
            setShowDropdown(false)
          }, 1500)
          setTimeoutID(id)
        }}
        onMouseEnter={() => {
          setShowDropdown((prev) => !prev)
        }} className='hover:cursor-pointer hover:text-orange-400'>
          <div className='flex relative'>
              <i className="text-[30px] hover:text-orange-400 fa-solid mr-2 fa-cart-shopping text-black"></i>
              {cartData.length > 0 && <div className='h-[20px] w-[20px] bg-red-600 absolute right-0 -top-2 rounded-full text-white text-center text-sm'>{allItems}</div>}
          </div>
        <Link to={"/checkout"}>Cart</Link>
        </div>
      </div>
    </div>
    {showDropdown && <DropdownCart showDropdown={showDropdown} setShowDropdown={setShowDropdown} id={timeoutID} />}
    </div>
  )
}

export default Navbar


//1:17:25 10 jan