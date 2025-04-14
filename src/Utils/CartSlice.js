import {createSlice} from "@reduxjs/toolkit"
const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // console.log("function chala")
            // const {name, price} = action.payload
            // state.push({name: name, price: price})

            const foundItem = state.find((item) => {
                return item.name == action.payload.name
            })
            if(!foundItem){
                state.push({name: action.payload.name, price: action.payload.price, quantity: 1, isVeg: action.payload.isVeg, img: action.payload.img})
            }
            else{
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })
                nArr.push({name: foundItem.name, price: foundItem.price, quantity: foundItem.quantity + 1, isVeg: foundItem.isVeg, img: foundItem.img})
                // state = nArr //state are immutable, we can not change them directly
                while(state.length){
                    state.pop()
                }
                while(nArr.length){
                    state.push(nArr.pop())
                }
            }
        },

        removeFromCart: (state, action) => {
            const foundItem = state.find((item) => {
                return item.name == action.payload.name
            })
            if(foundItem.quantity == 1){
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })

                while(state.length){
                    state.pop()
                }
                while(nArr.length){
                    state.push(nArr.pop())
                }
            }
            else{
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })
                nArr.push({name: foundItem.name, price: foundItem.price, quantity: foundItem.quantity - 1, isVeg: foundItem.isVeg, img: foundItem.img})
                while(state.length){
                    state.pop()
                }
                while(nArr.length){
                    state.push(nArr.pop())
                }
            }
        }
    }
})

//
export default CartSlice.reducer //we need to export this slice to store, because we know that slices are a part of store
export const {addToCart, removeFromCart} = CartSlice.actions