import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import TimerComponent from './Component/TimeComponent'
import LoggerComponent from './Component/LoggerComponent'
import DataFetcher from './Component/DataFetcher'
import ResizeComponent from './Component/ResizeComponents'

function App() {
//   const[count,setCount] = useState(0);
//   const[total,setTotal] = useState(0);
//  //first - side effect function
 //second - clean-up function
 //third - comma separated dep list

  // useEffect( () =>{
  //   first

  //   return() =>{
  //     second
  //   }
  // }, [third])
  
  // Variation 1:-
//   useEffect(() => {
//     alert("I will run on each render")
// })

// Variation 2:-
// useEffect(() => {
// alert("I will run in only 1st render")
// }, [])

// Variation 3:-
// useEffect(() => {
// alert("I will run every time when count is updated")
// }, [count])

// Variation 4:-(multiple dependency)
// useEffect(() => {
// alert("I will run every time when count/total is updated")
// }, [count,total])

// variation 5:-
//is baar bracket add a clean up function

// useEffect(() => {
//   alert("Count is updated")

//   return () => {
//     alert("Count reset the previous value from UI")
//   }
// }, [count])


  
// function handleClick() {
//   setCount(count + 1);
// }

// function handleClickTotal() {
//   setTotal(total + 1);
// }

//   return (
//     <div className="container">

// <button onClick={handleClick}>
//   Update Count
// </button>
// <br />
// count is {count}

// <button onClick={handleClickTotal}>
//   UpdateTotal
// </button>
// <br />
// Total is {total}
//     </div>
//   )
return(
<div>
  
    {/* <TimerComponent /> */}
    {/* <LoggerComponent /> */}
    {/* <DataFetcher /> */}
    <ResizeComponent />
  
</div>
)
}

export default App
