const {configureStore} = require('@reduxjs/toolkit');
import ProductSlice from './slices/ProductSlice';

const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default store;
