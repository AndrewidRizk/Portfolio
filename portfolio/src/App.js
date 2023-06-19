// App.js
import React from 'react';
import './App.css';
import HTMLContent from './HTMLContent';
import Shooting from './Shooting';


function App() {
  return (
    <div className="App">
      <HTMLContent />
      <Title />
      <Shooting/>
    </div>
  );
}

export function Title() {
  return (
    <div  className='title'>
       <h1>
           Andrew Rizk
        </h1>
    </div>
   
  );
}

export default App;
