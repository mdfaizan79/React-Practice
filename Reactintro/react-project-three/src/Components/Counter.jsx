import React, { useState } from 'react'
import './Counter.css'

function counter() {
    const[count,setCount]= useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You have click {count} times</p>
      <button id='btn' onClick={() => {setCount(count+1)}}>Click on Me</button>
    </div>
  )
}

export default counter
