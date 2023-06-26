import React, { useRef, useMemo } from "react";
import {useState} from 'react';
import { Link } from "react-scroll";
import "./Styles/About.css";
import { BsFillBookFill } from "react-icons/bs";
import { TfiHummer } from "react-icons/tfi";
import { FaRegGrinAlt } from "react-icons/fa";
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash.shuffle';
import Masonry from './components/Introduction.tsx';




export const About = () => {
  const Introduction = useRef(null);
  const Education = useRef(null);
  const Experiance = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const [isHoveringIntro, setIsHoveringIntro] = useState(false);
  const [isHoveringEdu, setIsHoveringEdu] = useState(false);
  const [isHoveringExp, setIsHoveringExp] = useState(false);

  const handleIntroMouseOver = () => {
    setIsHoveringIntro(true);
  };

  const handleIntroMouseOut = () => {
    setIsHoveringIntro(false);
  };

  const handleEduMouseOver = () => {
    setIsHoveringEdu(true);
  };

  const handleEduMouseOut = () => {
    setIsHoveringEdu(false);
  };

  const handleExpMouseOver = () => {
    setIsHoveringExp(true);
  };

  const handleExpMouseOut = () => {
    setIsHoveringExp(false);
  };

  return (
    <div className="About">
      <div className="Container">
        <ul>
          <li
            onClick={() => scrollToSection(Introduction)}
            className="link nav-item icon"
            onMouseOver={handleIntroMouseOver}
            onMouseOut={handleIntroMouseOut}
          >
            <div className="icon-container">
              <FaRegGrinAlt />
              {isHoveringIntro && <span className="tooltip">{"                               "}Introduction</span>}
            </div>
          </li>
          <li>.</li>
          <li>.</li>

          <li
            onClick={() => scrollToSection(Education)}
            className="link nav-item icon"
            onMouseOver={handleEduMouseOver}
            onMouseOut={handleEduMouseOut}
          >
            <div className="icon-container">
              <BsFillBookFill />
              {isHoveringEdu && <span className="tooltip">{"                               "}Education</span>}
            </div>
          </li>

          <li>.</li>
          <li>.</li>

          <li
            onClick={() => scrollToSection(Experiance)}
            className="link nav-item icon"
            onMouseOver={handleExpMouseOver}
            onMouseOut={handleExpMouseOut}
          >
            <div className="icon-container">
              <TfiHummer />
              {isHoveringExp && <span className="tooltip">{"                               "}Experiance</span>}
            </div>
          </li>
        </ul>
      </div>
      <div ref={Introduction} className="Introduction">
        <h3><Masonry /></h3>
      </div>

      <div ref={Education} className="Education">
        <h3>Education</h3>
      </div>

      <div ref={Experiance} className="Experiance">
        <h3>Experiance</h3>
      </div>
    </div>
  );
};



/* Random Pics */


