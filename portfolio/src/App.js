// App.js
import React from 'react';
import './App.css';
import './Toggle.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';
import Toggle from './Toggle';
import Typing from 'react-typing-animation';




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

export function Title() {
  return (
    <div className='title'>
      <Typing speed={100} hideCursor={true}>
        <span>Andrew Rizk</span>
      </Typing>
    </div>
  );
}


export default App;
