import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically
  
    function handleClick() {
      navigate('/about'); // Navigates to the /about page
    }
  return (
    <div className="home page-container">
        <button onClick={handleClick}>
        Move to About Page
      </button>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
    </div>

    
  );
}

export default Home;
