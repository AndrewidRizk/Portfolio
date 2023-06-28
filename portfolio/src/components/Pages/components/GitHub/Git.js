import "./style.css";
import React from 'react';
/*import instaImage from "./insta.jpg";*/
import { FaGithub } from "react-icons/fa";



function Git() {
  return (
    <div className="card5">
        <div class="card-inner">
        <div class="card-front5">
        <FaGithub  className="card-icon5"/>
         </div>
     <div class="card-back5">
            <div className="card-border-top5"></div>
            <div className="img5">
                <img /*src={instaImage}*/ alt="Git" />
            </div>
            <span>Andrew Rizk</span>
            <p className="job5"> androw_m </p>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Git;
