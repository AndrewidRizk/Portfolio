import React from "react";
import "./Styles/Contact.css"
import ContactMe from './components/ContactMe/ContactMe'
import Insta from './components/Insta/Insta'


export const Contact = () => {
  return (
    <div className="app">
      <div className="card-container">
        <ContactMe />
        <Insta />
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};