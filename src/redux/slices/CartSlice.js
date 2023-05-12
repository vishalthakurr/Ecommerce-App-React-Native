const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemtoCart(state, action) {
      let tempData = state.data;
      let isitemExist = false;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          isitemExist = true;
          item.qty = item.qty + 1;
        }
      });
      if (!isitemExist) {
        tempData.push(action.payload);
      }
      state.data = tempData;
    },
    reduceQtyFromCart(state, action) {
      let tempData = state.data;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          item.qty = item.qty - 1;
        }
      });

      state.data = tempData;
    },
    deleteItemFromCart(state, action) {
      let tempData = state.data;
      tempData.splice(action.payload, 1);
      state.data = tempData;
    },
    addQtYItemtoCart(state, action) {
      let tempData = state.data;
      let isitemExist = false;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          isitemExist = true;
          item.qty = item.qty + action.payload.qty;
        }
      });
      if (!isitemExist) {
        tempData.push(action.payload);
      }
      state.data = tempData;
    },
    emptycart(state, action) {
      state.data = action.payload;
    },
  },
});

export const {
  addItemtoCart,
  reduceQtyFromCart,
  deleteItemFromCart,
  addQtYItemtoCart,
  emptycart,
} = CartSlice.actions;
export default CartSlice.reducer;
