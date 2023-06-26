import React from "react";
import "./Styles/Contact.css"

export const Contact = () => {
    

  return (
    <div className="app">
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};