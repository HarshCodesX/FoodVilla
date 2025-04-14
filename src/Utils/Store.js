import {configureStore} from "@reduxjs/toolkit"
import CartReducer from './CartSlice' //imported CartSlice.reducer by the name of cartReducer (as it was default export so it can be exported by any name)

const Store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export default Store //as we need to wrap our application with redux store