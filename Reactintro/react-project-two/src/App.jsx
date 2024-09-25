import UserCard from "./components/UserCard"
import tajpics from "./assets/Taj.jpeg"
import faizan from "./assets/profile.jpg"

function App() {
  

  return (
    <>
    <div className="container">
   
    <UserCard name="Faizan" desc="dec1" image={faizan} 
    styles={{ borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} />
    <UserCard name="Nitin" desc="dec2" image={tajpics}/>
    <UserCard name="Faiz" desc="dec3" image={faizan} 
    styles={{ borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    />
    

    </div>
    </>
  )
}

export default App
