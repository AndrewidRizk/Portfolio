import React, { useState } from 'react';
import './App.css';
import './Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';
import './clouds.css'

export function Night() {
  return (
    <div className="App containers">
      
      <HTMLContent />
      <Title />
      <Shooting/>
      
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

export function  Navbar()
{
  <header>
	<nav>
		<ul>
			<li>ABOUT</li>
			<li>PROJECTS</li>
			<li>BLOG</li>
			<li>CONTACT ME</li>
		</ul>
	</nav>
</header>

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

