import React from "react";
import "./Styles/Contact.css"
import ContactMe from './components/ContactMe/ContactMe'
import Insta from './components/Insta/Insta'
import Face from './components/Face/Face'



export const Contact = () => {
  return (
    <div className="app">
      <div className="card-container">
        <ContactMe />
        <Insta />
        <Face />
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};