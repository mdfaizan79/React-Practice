import { useState, useMemo } from 'react'; 
import './App.css'; 

function App() {
  const [count, setCount] = useState(0); 
  const [input, setInput] = useState(); 

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 100000000; i++) {
      
    }
    return num*2;
  }

  // Memoize the expensiveTask result based on input value
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>

      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))} 
      />

      <div>
        Double of Input: {doubleValue}
      </div>
    </div>
  );
}

export default App;
