import React, { createContext, useState,  } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(10 * 60); // 10 minutes in seconds
  const [percentComplete, setPerCentComplete] = useState(0); // 10 minutes in seconds
  // Function to start the timer
  function startTimer() {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      //setTimer(timer - 1);
      setPerCentComplete((prevPerCentComplete) =>  (600-timer)%600 );

      
    }, 1000); // Decrease the timer every second
    




    // Clear the interval when the timer reaches 0
    if (timer <= 0) {
      clearInterval(intervalId);
    }
  };

  const value = {
    timer,
    startTimer,
    percentComplete,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
