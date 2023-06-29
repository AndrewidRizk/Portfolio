import "./style.css";
import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";

function Linked() {
  return (
    <div className="card7">
      <div className="card-inner">
        <div className="card-front7">
          <AiFillLinkedin className="card-icon2" />
        </div>
        <div className="card-back7">
          <Badges />
        </div>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="andrewrizk3030" data-version="v1">
      <a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/andrewrizk3030?trk=profile-badge"></a>
    </div>
  );
}

export default Linked;
