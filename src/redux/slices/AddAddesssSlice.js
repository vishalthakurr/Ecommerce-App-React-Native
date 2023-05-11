const {createSlice} = require('@reduxjs/toolkit');

const AddAddesssSlice = createSlice({
  name: 'address',
  initialState: {
    data: [],
  },
  reducers: {
    addAddress(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addAddress} = AddAddesssSlice.actions;
export default AddAddesssSlice.reducer;
