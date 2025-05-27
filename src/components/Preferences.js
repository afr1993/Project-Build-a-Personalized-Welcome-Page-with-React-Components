import React, { useState } from 'react';
import Button from './Button';

const Preferences = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '2rem',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={styles}>
      <Button
        text={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        onClick={toggleTheme}
      />
      {children}
    </div>
  );
};

export default Preferences;
