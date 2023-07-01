import "./style.css";
import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
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
      
      <div className="profile-badge__content">
        <h3 className="linkedin-text">Linked<SiLinkedin  className="card-icon22"/></h3>
        <img
          className="artdeco-entity-image artdeco-entity-image--circle-4 profile-badge__content-profile-image"
          alt="Andrew Rizk"
          src="https://media.licdn.com/dms/image/D4D03AQGm5cyPhbvRAg/profile-displayphoto-shrink_200_200/0/1676413577946?e=1693440000&amp;v=beta&amp;t=hAsdHbGzmXwfVYa8UslmS_uSluz6usZK18gxFhCf6OY"
        />
        <h3>
          <a
            className="profile-badge__content-profile-name-link profile-badge__content-profile-name-link--dark"
            href="https://ca.linkedin.com/in/andrewrizk3030?trk=public-profile-badge-profile-badge-profile-name"
            data-tracking-control-name="public-profile-badge-profile-badge-profile-name"
            data-tracking-will-navigate=""
          >
            Andrew Rizk
          </a>
        </h3>
        <h4 className="profile-badge__content-profile-headline">
          CS Student @York University, Ontario, Canada || Actively Seeking An Internship
        </h4>
        <h4 className="profile-badge__content-profile-company-school-info">
          <a
            href="https://www.linkedin.com/school/york-university/?trk=public-profile-badge-profile-badge_school-name"
            className="profile-badge__content-profile-company-school-info-link profile-badge__content-profile-company-school-info-link--dark"
            data-tracking-control-name="public-profile-badge-profile-badge_school-name"
            data-tracking-will-navigate="true"
          >
            York University
          </a>
        </h4>
        <button
          href="https://ca.linkedin.com/in/andrewrizk3030?trk=public-profile-badge-profile-badge-profile-name"
          className="profile-badge__content-profile-view-profile-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </button>
      </div>
    );
  }

export default Linked;
