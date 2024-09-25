import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './Component/LoginBtn'
import Logoutbtn from './Component/Logoutbtn'

function App() {
  const [isLogin,setLogin] = useState(false)
if(!isLogin){
  return(
    <Logoutbtn/>
  )
}
  //LogicalOperator
  return (
    <div>
      <h1>Hello , I am Faizan</h1>
    <div>
      {isLogin && <LoginBtn />}
    </div>
    </div>
    
  )

 //ternary-operator
//   return(
//     <div>
// {isLogin ? <LoginBtn /> : <Logoutbtn />}
//     </div>
//   )
 
//if-else statement

  // if(isLogin){
  //   return (
  //     <Logoutbtn />
      
  //     )
  // }
  // else{
  //   return (
  //     <LoginBtn />
  //   )
  // }
  
}

export default App
