import React, { useContext, useEffect, useState } from "react";
import "./Timer.css";
import TimerContext from "./TimerContext";
import { useLocalStorage } from "hooks";

// Converts int to string with 2 digits
const convert = (n) => {
  n = String(n);
  if (n.length === 1) n = "0" + n;
  return n;
};

const Timer = ({ examTimeLimit, examStartedTime }) => {
  const [borderColor, setBorderColor] = useState("green"); // Additional state for border color
  const [timeLeft, setTimeLeft] = useState(new Date()); // Time left on timer

  const timerEnded = useContext(TimerContext);

  const { setItem } = useLocalStorage();

  const calculateBorderColor = (timeleft) => {
    // Constants for threshold percentage values, exam time must be converted to milliseconds
    const ALERT_THRESHOLD_PERCENTAGE = (15 / 100) * (examTimeLimit * 60 * 1000);
    const WARNING_THRESHOLD_PERCENTAGE =
      (40 / 100) * (examTimeLimit * 60 * 1000);

    // Condition to calculate border color based on time left
    if (timeleft <= ALERT_THRESHOLD_PERCENTAGE) {
      return "red";
    } else if (timeleft <= WARNING_THRESHOLD_PERCENTAGE) {
      return "orange";
    } else {
      return "green";
    }
  };

  // Function to calculate time left
  const calculateTimeLeft = () => {
    // Initiate time left
    let timeLeft = {};

    // Calculate time difference
    let fixedTime = new Date(examStartedTime);
    fixedTime.setMinutes(fixedTime.getMinutes() + examTimeLimit);
    const difference = fixedTime - new Date();

    // Convert difference to time left
    if (difference > 0) {
      timeLeft = {
        hours: convert(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: convert(Math.floor((difference / 1000 / 60) % 60)),
        seconds: convert(Math.floor((difference / 1000) % 60)),
      };

      // Set Timer to Local Storage
      setItem("Timer", timeLeft);

      // Update border color based on time left
      const calculatedBorderColor = calculateBorderColor(difference);
      setBorderColor(calculatedBorderColor);
    } else if (difference <= 0) {
      timerEnded();
    }

    return timeLeft;
  };

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft(); // Calculate initial time left
    // @ts-ignore
    setTimeLeft(initialTimeLeft); // Update the time left state

    const timerInterval = setInterval(() => {
      // Set interval to update time every 1000ms
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Clear interval on component unmount or when exam ends
    };
  }, []);

  return (
    <div className={`timer ${borderColor}`}>
      <span className="clock">
        {timeLeft["hours"]}:{timeLeft["minutes"]}:{timeLeft["seconds"]}
      </span>
    </div>
  );
};

export default Timer;
