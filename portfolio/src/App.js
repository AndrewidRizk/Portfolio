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
import { Skills } from "./components/Pages/Skills";
import { Contact } from "./components/Pages/Contact";
import { Projects } from "./components/Pages/Projects";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useEffect } from "react";
import Loader from './components/Pages/components/Loader/loader.js';


export function Night() {
    
  return  (
    <div className="App containers ">
  
      <HTMLContent />
      <Title />
      <Shooting/>
    </div>
  );
}

export function Day() {
  return (
    <div className='App containers' >

      <Cloud />
      <Title1 />
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
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </Router>
    </div>
  );
}



export function DayHome() {
  return (
    <div >
      <div className="container ">
        
      <Router>
      <NavBar />
      <Routes>
      

        <Route path="/" element={<Day />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
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

  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);
  return isLoading ?(
    <Loader />
    ) : (
    
    
      <div className={isNightTheme ? 'night-theme' : 'day-theme'}>
        
        {isNightTheme ? <DayHome /> : <NightHome />}
        <div>
          <Toggle toggleTheme={toggleTheme} isChecked={isNightTheme} />
        </div>
      </div>
      
  );
} 

export function Resume() {
  return <HiOutlineDocumentText className='HiOutlineDocumentText icon' />;
}

