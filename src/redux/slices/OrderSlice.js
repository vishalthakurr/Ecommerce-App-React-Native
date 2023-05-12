const {createSlice} = require('@reduxjs/toolkit');

const OrderSlice = createSlice({
  name: 'Order',
  initialState: {
    data: [],
  },
  reducers: {
    orderitem(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {orderitem} = OrderSlice.actions;
export default OrderSlice.reducer;
