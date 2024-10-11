import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center top-3
      inset-x-0 px-2 '> 
        <div className="fixed flex flex-wrap justify-center 
      gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl  ">
        <button onClick={ () => setColor("red")}
        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >Red</button>
        <button onClick={ () => setColor("green")}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >Green</button>
        <button onClick={ () => setColor("yellow")}
        className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
        >Yellow</button>
        <button
        onClick={ () => setColor("black")}
        className='bg-black text-white px-4 py-2 rounded-full hover:bg-black-700'>
          Black
        </button>
        <button 
        onClick={() => setColor("blue")}
        className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700'
        >
          Blue
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
