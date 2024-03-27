import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          :)
        </h1>
        {/* Optionally, uncomment and update the <img> tag to include your logo */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello World! I'm Celine Chen</p>
        <h2>It is {currentTime}.</h2>
        <a
          className="App-link"
          href="https://linkedin.com/in/cceline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Me
        </a>
      </header>
    </div>
  );
}

export default App;
