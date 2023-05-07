const {createSlice} = require('@reduxjs/toolkit');

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addproducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const {addproducts} = ProductSlice.actions;
export default ProductSlice.reducer;
