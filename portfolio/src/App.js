import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';
import './clouds.css'
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

export function Night() {
  return (
    <div className="App containers">
      <HTMLContent />
      <Title />
      <Shooting/>
    </div>
  );
}

export function NightHome() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Night />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export function Day() {
  return (
    <div className='containers' >
      <Cloud />
      <Shooting/>
      <Title1 />
    </div>
  );
}

export function DayHome() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Day />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
    </div>
  );
}

export function Cloud()
{
  return(
    <div class="container">
  <div class="cloud"></div>
</div>
  );
  
}

export function Title() {
  return (
    <div className="text title typewriter">
      <text className=''>
        Hello, Welcome to my website.
        I'm Andrew Rizk, Fullstack Developer 😁! 
      </text>
    </div>
  );
}

export function Title1() {
  return (
    <div className="text title1 typewriter">
      <text className=''>
        Hello, Welcome to my website.
        I'm Andrew Rizk, Fullstack Developer 😁! 
      </text>
    </div>
  );
}


// ... rest of the components

export default function App() {
  const [isNightTheme, setIsNightTheme] = useState(false);

  const toggleTheme = () => {
    setIsNightTheme(!isNightTheme);
  };

  return (
      <div className={isNightTheme ? 'night-theme' : 'day-theme'}>
        {isNightTheme ? <DayHome /> : <NightHome />}
        <div>
          <Toggle toggleTheme={toggleTheme} isChecked={isNightTheme} />
        </div>
      </div>
  );
}