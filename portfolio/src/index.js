import React from 'react';
import './Styles/index.css';
import ReactDOM from 'react-dom/client'
import App from './App';


import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(<div className='body'>
      <React.StrictMode>

          <App /> 
     </React.StrictMode>

     </div>);


