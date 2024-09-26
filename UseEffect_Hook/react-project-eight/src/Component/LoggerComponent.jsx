import React from 'react'
import { useState,useEffect } from 'react'

function LoggerComponent() {
    const[count,setCount] = useState(0);
    useEffect(() => {
      console.log('Component render or count changed :',count);
    });
    

  return (
    <div className='container'>
    <h1>Count : {count}</h1>
    <button onClick={() =>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent
