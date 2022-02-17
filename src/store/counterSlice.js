import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
  },
});
// each case under reducers becomes an action

export const counterActions = counterSlice.actions;
export default counterSlice;
