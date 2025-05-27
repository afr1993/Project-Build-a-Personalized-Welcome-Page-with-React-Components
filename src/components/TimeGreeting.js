import React from 'react';

const TimeGreeting = () => {
  const hour = new Date().getHours();
  let message = '';

  if (hour >= 5 && hour < 12) {
    message = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon!";
  } else if (hour >= 17 && hour < 22) {
    message = "Good Evening!";
  } else {
    message = "Good Night!";
  }

  return <p>{message}</p>;
};

export default TimeGreeting;
