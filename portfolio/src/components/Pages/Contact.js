import React from "react";
import "./Styles/Contact.css"
import ContactMe from './components/ContactMe/ContactMe'


export const Contact = () => {
  return (
    <div className="app">
      <div className="card-container">
        <ContactMe />
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};