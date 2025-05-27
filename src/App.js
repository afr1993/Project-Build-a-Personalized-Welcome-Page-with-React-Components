import React from 'react';
import Welcome from './components/Welcome';
import TimeGreeting from './components/TimeGreeting';
import Preferences from './components/Preferences';

function App() {
  return (
    <Preferences>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome Page</h1>
        <Welcome name="John" location="California" />
        <TimeGreeting />
      </div>
    </Preferences>
  );
}

export default App;
