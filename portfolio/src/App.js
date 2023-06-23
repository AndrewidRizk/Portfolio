import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import './Styles/Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';
import './Styles/clouds.css'
import NavBar from "./components/NavBar";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";






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
    <div className='starScreen'>
      <Router>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Night />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </Router>
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
      <div className="container">
        
      <Router>
      <NavBar />
      <Routes>
      

        <Route path="/" element={<Day />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      </Router>
      </div>
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

