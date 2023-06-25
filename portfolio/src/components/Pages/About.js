import React, { useRef } from "react";
import { Link } from "react-scroll";
import ScrollToTop from "./components/ScrollToTop";
import "./Styles/About.css";
import { BsFillBookFill } from "react-icons/bs";
import { TfiHummer } from "react-icons/tfi";
import { FaRegGrinAlt } from "react-icons/fa";

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

  return (
    <div className="About">
      <ScrollToTop />
      <div className="Container">
        <ul>
          <li onClick={() => scrollToSection(Introduction)} className="link nav-item">
            <FaRegGrinAlt />
          </li>
          <li>.</li>
          <li>.</li>

          <li onClick={() => scrollToSection(Education)} className="link nav-item">
          <BsFillBookFill />
          </li>

          <li>.</li>
          <li>.</li>

          <li onClick={() => scrollToSection(Experiance)} className="link nav-item">
            <TfiHummer />
          </li>
          
        </ul>
      </div>
      <div ref={Introduction} className="Introduction">
        <h3>Introduction</h3>
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

