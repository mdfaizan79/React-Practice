import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponents from './components/ChildComponents';

function App() {
  const [count, setCount] = useState(0);
  

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={handleClick}>Increment</button>

        <div>
          <ChildComponents buttonName ="Click me2" />
        </div>
      </div>
    </>
  )
}

export default App
