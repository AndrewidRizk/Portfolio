import React from 'react';
import './Yorku.css'; // Import the CSS file
import York from "./welcome-to-york.png";

function Yorku() {
  return (
    <div className="Yorku">
      <img src={York} alt="Welcome to York" />
    </div>
  );
}

export default Yorku;
