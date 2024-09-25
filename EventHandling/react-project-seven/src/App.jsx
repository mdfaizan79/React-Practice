
import './App.css'

function App() {

  function handlesubmit(e){
    e.preventDefault();//refresh mtt krne do reload mtt krne do
alert("Form Submit kr du kya?")
  }
  function handlechange(){

  }
  return(

  
  <div>
<form onSubmit={handlesubmit}>
    <input type="text" onChange={handlechange} />
    <button type='submit'>Submit</button>

  </form>
  </div>
  )
// function handleClick(){
//   alert("mtt click kr beta")
// }
// function paramouse(){
//   alert("Para k uper mouse le kr aaye ho na beta")
// }
// function valuechange(){
//  console.log(" input me vlue change hui  hai");
// }

//   return (
//    <div>
//     <input type="text" onChange={valuechange} />
//     <p onMouseOver={paramouse} style={{color : "red"}}>This para</p>
//     <button onClick={handleClick}>ClickMe</button>
//    </div>
//   )
}

export default App
