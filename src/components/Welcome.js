import React from 'react';

const Welcome = ({ name, location }) => {
  return (
    <h2>Hello, {name} from {location}! Welcome to our platform.</h2>
  );
};

export default Welcome;
