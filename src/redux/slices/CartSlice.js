const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartdata: [],
  },
  reducers: {
    addItemtoCart(state, action) {
      let tempData = state.cartdata;
      tempData.push(action.payload);
      state.cartdata = tempData;
    },
  },
});

export const {addItemtoCart} = CartSlice.actions;
export default CartSlice.reducer;
