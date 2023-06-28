import "./styles.css";
import React from 'react';
import { FaDiscord } from "react-icons/fa";
import DiscordPic from "./Discord.jpg";



function Discrod() {
  return (
    <div className="card4">
        <div class="card-inner">
        <div class="card-front4">
        <FaDiscord  className="card-icon4"/> {" "}
         </div>
            <div class="card-back4">
            <div className="cover-image">
                
            </div>
            <div className="card-border-top4"></div>
            <div className="img4">
                <img src={DiscordPic} alt="Discord" />
            </div>
            <span>Andrew Maged</span>
            <p1 className="job4"> andrewmaged#0084 </p1>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Discrod;
