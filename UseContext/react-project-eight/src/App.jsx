import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA'
import ChildC from './Components/ChildC'
import ChildB from './Components/ChildB'

// step1:- create Context
// const UserContext = createContext();
//step2:-wrap all the child inside the provider
//step3:-Pass Value
//step4:-Consumere k ander jaa kr value ko consume kr lo

const ThemeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"Faizan"});

  const [theme,setTheme] = useState('light');

  return (
    <>
<ThemeContext.Provider value={{theme,setTheme}} >
  <div id="wrapperA" style={{backgroundColor:theme ==='light' ? "beige" :"black"}}> 

    <ChildA />

  </div>

</ThemeContext.Provider>






    {/* <UserContext.Provider value={user}>
    <ChildA />
    </UserContext.Provider> */}
    </>
    
  )
}

export default App
// export  {UserContext}
export  {ThemeContext}
