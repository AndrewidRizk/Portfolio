import React, { useState } from 'react';
import './App.css';
import './Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';
import './clouds.css'

export function Night() {
  return (
    <div className="App">
      <HTMLContent />
      <Title />
      <Shooting/>
      
    </div>
  );
}

export function Day() {
  return (
    <div >
      <Cloud />
    </div>
  );
}
export function Cloud()
{
  return(
    <div className="container">
      <div id="cloud-intro"></div>
    </div>
  );
  
}

export function Title() {
  return (
    <div className="text title typewriter">
      <text>
        Hello, Welcome to my website.
        I'm Andrew Rizk, Fullstack Developer!
      </text>
    </div>
  );
}

export default function App() {
  const [isNightTheme, setIsNightTheme] = useState(false);

  const toggleTheme = () => {
    setIsNightTheme(!isNightTheme);
  };

  return (
    <div className={isNightTheme ? 'night-theme' : 'day-theme'}>
      {isNightTheme ? < Day/> : <Night />}
      <div>
        <Toggle toggleTheme={toggleTheme} isChecked={isNightTheme} />
      </div>
    </div>
  );
}