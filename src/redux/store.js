const {configureStore} = require('@reduxjs/toolkit');

import ProductSlice from './slices/ProductSlice';
import wishlistSlice from './slices/wishlistSlice';
import CartSlice from './slices/CartSlice';
const store = configureStore({
  reducer: {
    product: ProductSlice,
    wishlist: wishlistSlice,
    cart: CartSlice,
  },
});

export default store;
