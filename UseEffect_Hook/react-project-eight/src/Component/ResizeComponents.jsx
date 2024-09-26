import React, { useState, useEffect } from 'react'; 

function ResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event listner added")
    window.addEventListener('resize', handleResize); 

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
        console.log("event listner removed")
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array makes the effect run only once on first render

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponent;
