import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // Correct import

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the counter reducer
  },
});


// steps:
//1 create store
//2 wrap app component under Provided
//3 create Slice
//4 register reducer in store