import React, { useRef, useState } from "react";

const About = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    if (!timerRef.current) {
      // Check to avoid multiple intervals
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0); // Timer reset to 0
  }

  function stopTimer() {
    clearInterval(timerRef.current); // Stop the timer
    timerRef.current = null; // Reset the interval reference
  }

  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br /> <br />
      <button onClick={stopTimer}>Stop</button>
      <br /> <br />
      <button onClick={resetTimer}>Reset</button>
      <br /> <br />
    </div>
  );
};

export default About;
