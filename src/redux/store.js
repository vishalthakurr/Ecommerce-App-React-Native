const {configureStore} = require('@reduxjs/toolkit');

import ProductSlice from './slices/ProductSlice';
import wishlistSlice from './slices/wishlistSlice';
import CartSlice from './slices/CartSlice';
import AddAddesssSlice from './slices/AddAddesssSlice';
const store = configureStore({
  reducer: {
    product: ProductSlice,
    wishlist: wishlistSlice,
    cart: CartSlice,
    address: AddAddesssSlice,
  },
});

export default store;
