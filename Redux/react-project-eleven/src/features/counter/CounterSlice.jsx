import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // Increment and decrement are actions
    increment: (state) => {
      state.value += 1; // Increment the counter value
    },
    decrement: (state) => {
      state.value -= 1; // Decrement the counter value
    },
    reset: (state) => {
      state.value = 0; // Reset the counter value
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Increment by a specific amount
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement,reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer; // Export the reducer
