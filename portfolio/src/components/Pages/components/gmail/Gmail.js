import "./style.css";
import React from 'react';
import { FaSnapchatGhost } from "react-icons/fa";
import ContactMe from "../ContactMe/ContactMe";
import { SiGmail } from "react-icons/si";



function Gmail() {
  return (
    <div className="card10">
        <div class="card-inner">
        <div class="card-front10">
        <SiGmail  className="card-icon10"/> {" "}
         </div>
            <div class="card-back6">
            <ContactMe />
            </div>
        </div>

      </div>
  );
}

export default Gmail;
