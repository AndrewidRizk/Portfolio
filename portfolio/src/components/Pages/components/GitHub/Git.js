import "./style.css";
import React from 'react';
import Git2 from "./git.png";
import { FaGithub } from "react-icons/fa";



function Git() {
  return (
    <div className="card5">
        <div class="card-inner">
        <div class="card-front5 ">
        <FaGithub  className="card-icon5 "/>
         </div>
     <div class="card-back5">
            <div className="card-border-top5"></div>
            <div className="img5">
                <img src={Git2} alt="Git" />
            </div>
            <span>Andrewid Rizk
</span>
            <p className="job5"> AndrewidRizk
 </p>
            <button>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Git;
