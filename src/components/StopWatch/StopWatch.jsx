import React, { useState, useEffect } from 'react';
import './StopWatch.css';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="container">
      <div className="header">StopWatch</div>
      <div className="box">
        <div className="title">Timer</div>
        <p id="Display" className='time'>{formatTime(time)}</p>
        <button className="btn" id='start' onClick={start}>Start</button>
        <button className="btn" id="stop" onClick={stop}>Stop</button>
        <button className="btn" id="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;