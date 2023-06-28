import "./styles.css";
import React from 'react';
import { FaSnapchatGhost } from "react-icons/fa";
/*import DiscordPic from "./Discord.jpg";*/



function Snap() {
  return (
    <div className="card6">
        <div class="card-inner">
        <div class="card-front6">
        <FaSnapchatGhost  className="card-icon6"/> {" "}
         </div>
            <div class="card-back6">
            <div className="cover-image">
                
            </div>
            <div className="card-border-top6"></div>
            <div className="img6">
                <img /*src={DiscordPic}*/ alt="Discord" />
            </div>
            <span>Andrew Maged</span>
            <p1 className="job6"> andrewmaged#0084 </p1>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Snap;
