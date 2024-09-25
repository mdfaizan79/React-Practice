import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log("setInterval Executed")
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
        console.log("Time to Stop")
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means the effect runs only on first render

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}

export default TimerComponent;
