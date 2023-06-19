// App.js
import React from 'react';
import './App.css';
import './Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';




function App() {
  return (
    <div className="App"> 
      <HTMLContent />
      <Title />
      <Shooting/>
      <div><Toggle /></div>
    </div>
  );
}
export function App2()
{
  return(
  <div>App2</div>
    );
}


export function Title() {
  return (
    <div class="text title typewriter">
      <text >
        
          {`Hello, Welcome to my website.`} 
          {`\n`}
          {`I'm Andrew Rizk, Fullstack Developer!`}
       
      </text>
      
  </div>
  );
}


export default App;
