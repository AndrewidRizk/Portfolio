import React, { useRef, useMemo } from "react";
import {useState} from 'react';
import "./Styles/About.css";
import { FaRegGrinAlt } from "react-icons/fa";
import Masonry from './components/Introduction.tsx';
import { FaArrowUp } from "react-icons/fa6";
import {IoEllipsisVerticalOutline} from "react-icons/io5";
import me from "./components/photos/WhatsApp.jpeg"





export const About = () => {
  const Up = useRef(null);
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

        <li onClick={() => scrollToSection(Up)} className="link nav-item icon">
        <FaArrowUp />
          </li>

          <li></li>
          <li></li>
          <li onClick={() => scrollToSection(Introduction)} className="link nav-item icon"
            onMouseOver={handleIntroMouseOver}
            onMouseOut={handleIntroMouseOut}
          >
            
            <div>
              <FaRegGrinAlt />
              {isHoveringIntro && <span className="tooltip">{"                               "}Introduction</span>}
            </div>

          </li>

        </ul>
        
      </div>
      <div ref={Up} className="photos"> 
        <Masonry />
      </div>

      <div ref={Introduction} className="Introduction">
        <h3>Introduction</h3>
        <div class="textbox-container content-container">
            <div class="textbox1 left-paragraph">
        
              <p>I am Andrew Rizk, currently a third-year Computer Science Honours student at York University. My life combines various interests and qualities that have shaped my identity. I  enjoy reading, gaming, and coding. In addition, what sets me apart are my strengths in time management, leadership, self-learning, and a strong drive to achieve long-term goals.</p>
              <p>My journey began in Egypt, a place where I fondly remember its familiar and warm feelings. Egypt’s rich history and cultural diversity left a lasting mark on my values and a deep appreciation of my heritage. At the age of 17, my family and I started a new chapter by moving to Canada. This transition exposed me to advanced technology and sparked my passion for computer science. The blend of these experiences has moulded me into a culturally aware and tech-savvy individual, eager to bridge gaps between tradition and innovation. One of my most poignant memories is standing at the airport, bidding farewell to my childhood friends. It made one of my lowest points, but it also added pressure, which ultimately transformed into dedication and strength, realising there was no going back and success must happen, which helped me be more determined in my goals.</p>
              <p>My decision to join York University was influenced by its proximity to my home and the entry scholarship, which eased my path to a higher education. My passion for programming, continued sparking by its prevalence in shows and movies, led me to the competitive program at Lassonde Engineering.My ultimate inspiration has always been my father. His unwavering dedication to family and his willingness to sacrifice everything for us are truly remarkable. Managing three jobs to support our family, his vast knowledge and experiences have taught me the value of resilience, unwavering commitment and resourcefulness.</p>
              <p>In the words of Winston Churchill “Success is not final, failure is fatal: it is the courage to continue that counts” This quote resonates with me because it sums up the essence of my journey. When I moved from Egypt to Canada, the transition came with its challenges. The pressure to adapt could have been daunting. However, it ignited a sense of strength in me. These experiences have taught me that it is not about avoiding failures, but about how you bounce back  from them. I find comfort in Winston Churchill’s, to drive me forward on my path to success. </p>
              
              </div>
              <div class="right-photo">
              <img src={me} alt="Image on the left"></img>
              </div>
        </div>

      </div>

  
    </div>
  );
};



/* Random Pics */


