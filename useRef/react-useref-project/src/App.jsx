import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [time, setTime] = useState(0); 
  const timerRef = useRef(null); 

  // Start the timer
  function startTimer() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000); // 1 second
    }
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(timerRef.current); // Clear the interval
    timerRef.current = null; // Reset the reference
  }

  // Reset the timer
  function resetTimer() {
    stopTimer(); // Stop the timer first
    setTime(0); // Reset the time to 0
  }

  return (
    <div className='container'>
      <h1>{time} seconds</h1>
      <button onClick={startTimer}>Start</button> 
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button> 
    </div>
  );
}
  // const [count, setCount] = useState(0)
  // let val = useRef(0);

  // let btnRef = useRef();

  // function changeColor(){
  //   btnRef.current.style.backgroundColor ="red";
  // }

  // function handleClick(){
  //   val.current = val.current + 1;
  //   console.log("Value of Val : ",val.current);
  //   setCount ( count + 1);
  // }

  // useEffect(() => {
  //   console.log("mai phir se render ho gaya hu")
  
  // })
  
  // return (
    <>


     {/* <div>
     <button 
     ref ={btnRef}
     onClick={handleClick}>Increment</button>
     </div>
     <br />
      <button onClick={changeColor}>
        Change Color of first button
      </button>
     
     <br />
     <div>
      count :{count}
     </div> */}
    </>
//   )
// }

export default App
