import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Cloudinary } from '../Utils/Constants'
import { addToCart, removeFromCart } from '../Utils/CartSlice'

const Checkout = () => {
  const cartData = useSelector((store) => store.cart) // Accessing cart data
  const dispatch = useDispatch()

  let total = 0
  for(let item of cartData){
    total += item.price * item.quantity
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>

        {cartData.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">Your cart is empty 😢</p>
        ) : (
          <div className="space-y-5">
            {cartData.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-6 p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                {/* Product Image */}
                <img className="h-[100px] w-[100px] object-cover rounded-md" src={Cloudinary + item.img} alt={item.name} />

                {/* Product Details */}
                <div className="flex flex-col flex-grow">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600">Price: <span className="font-semibold">${item.price}</span></p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <div className="text-lg font-semibold">{item.quantity}</div>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    -
                  </button>
                </div>

                {/* Total Price */}
                <p className="text-lg font-semibold text-gray-800">${item.price * item.quantity}</p>
              </div>
            ))}
            Total Amount: {total}
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
