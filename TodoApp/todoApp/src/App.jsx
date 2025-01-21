import { useState } from 'react';

function App() {
  const [inputList,setInputList] = useState("");
  const [item,setItem] = useState([]);


  
  const itemEvent = (e)=>{
    setInputList(e.target.value)  
  }

  const listItem = () =>{

  }


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">ToDo List</h1>

          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a new task" onChange={itemEvent}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              +
            </button>
          </div>

          <ol className="list-decimal list-inside">
            {/* <li className="mb-2">{inputList}</li> */}

            {item.map((itemval) => {
              return <li className="mb-2">{itemval}</li>
            })
          }

          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
