import React, { useRef, useMemo } from "react";
import {useState} from 'react';
import "./Styles/About.css";
import { BsFillBookFill } from "react-icons/bs";
import { TfiHummer } from "react-icons/tfi";
import { FaRegGrinAlt } from "react-icons/fa";
import Masonry from './components/Introduction.tsx';
import { FaArrowUp } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import App from './components/Deck/deck.tsx';
import MyTimeline from './components/Time_Line/line';
import Yorku from './components/YorkU/Yorku';





export const Skills = () => {
  const Up = useRef(null);
  const Certificates = useRef(null);
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

        <li onClick={() => scrollToSection(Up)} className="link nav-item icon">
        <FaArrowUp />
          </li>
          
          <li></li>
          <li></li>
         
          <li
            onClick={() => scrollToSection(Education)} className="link nav-item icon"
            onMouseOver={handleEduMouseOver}
            onMouseOut={handleEduMouseOut}
          >
            <div>
              <BsFillBookFill />
              {isHoveringEdu && <span className="tooltip">{"                               "}Education</span>}
            </div>
            

          </li>
           
          <li></li>
          <li></li>
          
          <li onClick={() => scrollToSection(Certificates)} className="link nav-item icon"
            onMouseOver={handleIntroMouseOver}
            onMouseOut={handleIntroMouseOut}
          >
            
            <div>
              <PiCertificateDuotone />
              {isHoveringIntro && <span className="tooltip">{"                               "}Certificates</span>}
            </div>

          </li>

          
          <li></li>
          <li></li>
          

          <li
            onClick={() => scrollToSection(Experiance)} className="link nav-item icon"
            onMouseOver={handleExpMouseOver}
            onMouseOut={handleExpMouseOut}
          >
            <div >
              <TfiHummer />
              {isHoveringExp && <span className="tooltip">{"                               "}Experiance</span>}
            </div>

          </li>
        </ul>
      </div>
     
      <div ref={Up} className=""> 
       
        <Yorku />
          
      </div>

   

      <div ref={Education} className="Education">
        <h3>Education</h3>
      </div>
      <div ref={Certificates} className="Certificates">
        <h1 className='cent' >Certificates</h1>
        <App />
      </div>

      <div ref={Experiance} className="Experiance">
        <MyTimeline />
      </div>
    </div>
  );
};



/* Random Pics */


