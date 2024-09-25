import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Count from './Components/Count'

function App() {
  const [count, setCount] = useState(0);
function handleClick(){
  setCount(count +1);
}
  return (
    <>
       <div >
        <Count Click={handleClick} text="clickonme" >
          <h1>{count}</h1>
        
        </Count>
       {/* <Card name ="Faizan" >
        <h1>Md Faizan</h1>
        <p>I am btech student</p>
        <p>I study at VIT Chennai</p>
       </Card> */}

       </div>
    </>
  )
}

export default App
