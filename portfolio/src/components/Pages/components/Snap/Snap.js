import "./styles.css";
import React from 'react';
import { FaSnapchatGhost } from "react-icons/fa";
import Snap2 from "./snap.png";



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
                <img src={Snap2} alt="Discord" />
            </div>
            <span>Andrew Rizk</span>
            <p1 className="job6"> @andrewrizk3030</p1>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Snap;
