import "./style.css";
import React from 'react';
/*import instaImage from "./insta.jpg";*/
import { AiOutlineInstagram } from "react-icons/ai";



function Gmail() {
  return (
    <div className="card3">
        <div class="card-inner">
        <div class="card-front">
        <AiOutlineInstagram  className="card-icon2"/>
         </div>
     <div class="card-back">
            <div className="card-border-top"></div>
            <div className="img">
                <img /*src={instaImage}*/ alt="Instagram" />
            </div>
            <span>Andrew Rizk</span>
            <p className="job"> androw_m </p>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Gmail;
