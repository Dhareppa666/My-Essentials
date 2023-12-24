import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  const deadline = "May, 15, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
    setMilliSeconds(((time / 1000) % 60).toFixed(2).split(".")[1]);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 0);

    return () => clearInterval(interval);
  }, []);

  const appendData = (currentMinutes) => {
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    return currentMinutes;
  };

  const comp = (heading, value) => {
    return (
      <div className="timer-card">
        <h4 className="timer-card-heading">{heading}</h4>
        <h4 className="timer-card-value">{value}</h4>
      </div>
    );
  }

  return (
    <div className="root-x">
      <h2 className="timer-heading">{`The Goal Deadline Date is: 15th May 2024`}
      </h2>
      <div className="timer-root">
        <div className="timer-container">
          <div className="timer-cards-root">
            {comp("Days", appendData(days))}
            {comp("Hours", appendData(hours))}
            {comp("Minutes", appendData(minutes))}
            {comp("Seconds", appendData(seconds))}
            {comp("MilliSecs", milliSeconds)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;