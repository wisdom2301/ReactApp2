import { configureStore } from '@reduxjs/toolkit'
import Cart from '../Cart/Cart'

export default configureStore({
  reducer: {
      Cart: Cart
  }
})