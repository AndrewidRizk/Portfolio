import React from "react";
import "./Styles/Contact.css"
import Insta from './components/Insta/Insta'
import Face from './components/Face/Face'
import Discord from './components/Discord/Discrod'
import Git from './components/GitHub/Git'
import Snap from './components/Snap/Snap'
import LinkedIn from './components/LinkedIn/Linked'
import Gmail from './components/gmail/Gmail'




export const Contact = () => {
  return (
    <div className="app">
      <div className="get-in-touch">
        <h1>Get in touch</h1>
        <div className="gmail-container">
          <Gmail />
        </div>
      </div>
      <div className="lets-be-social">
        <h1>Let's be social</h1>
        <div className="social-container">
          <div className="linkedin-discord-github">
            <LinkedIn />
            <Discord />
            <Git />
          </div>
          <div className="insta-face-snap">
            <Insta />
            <Face />
            <Snap />
          </div>
        </div>
      </div>
    </div>
  );
};



const Card = () => {
  return <div className="card">This is the card content</div>;
};