import React from "react";
import "./Styles/Contact.css"
import ContactMe from './components/ContactMe/ContactMe'
import Insta from './components/Insta/Insta'
import Face from './components/Face/Face'
import Discord from './components/Discord/Discrod'
import Git from './components/GitHub/Git'
import Snap from './components/Snap/Snap'
import LinkedIn from './components/LinkedIn/Linked'
import WhatsApp from './components/whats/WhatsApp'
import Gmail from './components/gmail/Gmail'




export const Contact = () => {
  return (
    <div className="app">
      <div className="card-container">
        <ContactMe />
        <Insta />
        <Face />
        <Discord />
        <Git />
        <Snap />
        <LinkedIn />
        <WhatsApp />
        <Gmail />
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};