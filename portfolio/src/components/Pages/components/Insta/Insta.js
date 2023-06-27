import "./style.css";
import React from 'react';
import instaImage from "./insta.jpg";

function Insta() {
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <img src={instaImage} alt="Instagram" />
      </div>
      <span>andro_m</span>
      <p className="job"> Andrew Rizk </p>
      <button>Follow</button>
    </div>
  );
}

export default Insta;
