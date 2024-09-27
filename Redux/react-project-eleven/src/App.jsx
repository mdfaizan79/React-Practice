import './App.css'; // Corrected import statement
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Correct imports
import { increment, decrement,reset } from './features/counter/counterSlice'; // Correct import

function App() {
  const count = useSelector((state) => state.counter.value); // Get the counter value from the store
  const dispatch = useDispatch(); // Initialize dispatch

  function handleIncrementClick() {
    dispatch(increment()); // Dispatch increment action
  }

  function handleDecrementClick() {
    dispatch(decrement()); // Dispatch decrement action
  }
  function handleResetClick() {
    dispatch(reset()); // Dispatch reset action
  }

  return (
    <div className="container"> {/* Corrected className */}
      <h1>Count: {count}</h1> {/* Display the count */}
      <button onClick={handleIncrementClick}>+</button> {/* Increment button */}
      <button onClick={handleDecrementClick}>-</button> {/* Decrement button */}
      <button onClick={handleResetClick}>Reset</button> {/* Reset button */}
    </div>
  );
}

export default App;
