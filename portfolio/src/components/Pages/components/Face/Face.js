import React from 'react';
import faceImage from "./face.jpg";
import coverImage from "./cover.jpg";

import { AiFillFacebook } from "react-icons/ai";
import "./style.css";

function Face() {
  return (
    <div className="card2">
      <div className="card-inner2">
        <div className="card-front2">
          <AiFillFacebook className="card-icon2" />
        </div>
        <div className="card-back2">
          <div className="cover-image">
            <img src={coverImage} alt="Cover" />
          </div>
          <div className="card-border-top2"></div>
          <div className="img2">
            <img src={faceImage} alt="FaceBook" />
          </div>
          <span>Andrew Rizk</span>
          <p className="job2">andro_m</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Face;
