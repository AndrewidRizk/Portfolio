import React, { useRef, useMemo } from "react";
import {useState, useEffect } from 'react';
import "./Styles/About.css";
import { FaRegGrinAlt } from "react-icons/fa";
import Masonry from './components/Introduction.tsx';
import { FaArrowUp } from "react-icons/fa6";
import {IoEllipsisVerticalOutline} from "react-icons/io5";
import me from "./components/photos/WhatsApp.jpeg"
import { MdInsertPhoto } from "react-icons/md";
import Aboutme from './AboutMe/Aboutme.js';




export const About = () => {
  const Up = useRef(null);
  const Introduction1 = useRef(null);
  const photos = useRef(null);


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
          
              <li onClick={() => scrollToSection(photos)} className="link nav-item icon"
                onMouseOver={handleIntroMouseOver}
                onMouseOut={handleIntroMouseOut}>
                  <div>
            <MdInsertPhoto />
            {isHoveringIntro && <span className="tooltip">{"                               "}Photos</span>}
                </div>
              </li>

          <li></li>
          <li></li>
              <li onClick={() => scrollToSection(Introduction1)} className="link nav-item icon"
                onMouseOver={handleEduMouseOver}
                onMouseOut={handleEduMouseOut}
              >
                
                <div>
                  <FaRegGrinAlt />
                  {isHoveringEdu && <span className="tooltip">{"                               "}Introduction</span>}
                </div>

              </li>

        </ul>
        
      </div>
      <div ref={Up} className="up"> 
          <Aboutme/>
      </div>

      <div ref={photos} className="photos"> 
        <Masonry />
      </div>



      <div ref={Introduction1} className="Introduction">
        <h3>Introduction</h3>
        <div class="textbox-container content-container2">
            <div class="textbox1 left-paragraph">
        
              <p>I am Andrew Rizk, currently a third-year Computer Science Honours student at York University. My life combines various interests and qualities that have shaped my identity. I  enjoy reading, gaming, and coding. In addition, what sets me apart are my strengths in time management, leadership, self-learning, and a strong drive to achieve long-term goals.</p>
             
              </div>
              <div class="right-photo">
                <Slideshow/>
              </div>
        </div>
        <div class="textbox-container content-container2">
            <div class="textbox1 left-paragraph">
        
            <p>My journey began in Egypt, a place where I fondly remember its familiar and warm feelings. Egypt’s rich history and cultural diversity left a lasting mark on my values and a deep appreciation of my heritage. At the age of 17, my family and I started a new chapter by moving to Canada. This transition exposed me to advanced technology and sparked my passion for computer science. The blend of these experiences has moulded me into a culturally aware and tech-savvy individual, eager to bridge gaps between tradition and innovation. One of my most poignant memories is standing at the airport, bidding farewell to my childhood friends. It made one of my lowest points, but it also added pressure, which ultimately transformed into dedication and strength, realising there was no going back and success must happen, which helped me be more determined in my goals.</p>
             
              </div>
              <div class="right-photo">
                <Slideshow2/>
              </div>
        </div>
        <div class="textbox-container content-container2">
            <div class="textbox1 left-paragraph">
        
            <p>My decision to join York University was influenced by its proximity to my home and the entry scholarship, which eased my path to a higher education. My passion for programming, continued sparking by its prevalence in shows and movies, led me to the competitive program at Lassonde Engineering.My ultimate inspiration has always been my father. His unwavering dedication to family and his willingness to sacrifice everything for us are truly remarkable. Managing three jobs to support our family, his vast knowledge and experiences have taught me the value of resilience, unwavering commitment and resourcefulness.</p>
             
              </div>
              <div class="right-photo">
                <Slideshow3/>
              </div>
        </div>
        <div class="textbox-container content-container2">
            <div class="textbox1 left-paragraph">
        
            <p>In the words of Winston Churchill “Success is not final, failure is fatal: it is the courage to continue that counts” This quote resonates with me because it sums up the essence of my journey. When I moved from Egypt to Canada, the transition came with its challenges. The pressure to adapt could have been daunting. However, it ignited a sense of strength in me. These experiences have taught me that it is not about avoiding failures, but about how you bounce back  from them. I find comfort in Winston Churchill’s, to drive me forward on my path to success. </p>
             
              </div>
              <div class="right-photo">
                <Slideshow4/>
              </div>
        </div>
              

      </div>

  
    </div>
  );
};



/* Random Pics */



const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;

    if (newIndex > 3) {
      // Wrap around to the first slide when reaching the end
      setSlideIndex(1);
    } else if (newIndex < 1) {
      // Wrap around to the last slide when going previous from the first slide
      setSlideIndex(3);
    } else {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active1";
  };

  return (
    <div className="slideshow-container">
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img
        src={me}
        style={{ width: '100%' }}
      />
      <div className="text">London, England</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img
        src={me}
        style={{ width: '100%' }}
      />
      <div className="text">Sunset in Romania</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img
        src={me}
        style={{ width: '100%' }}
      />
      <div className="text">New York, USA</div>
    </div>
    <a className="prev" onClick={() => plusSlides(-1)}>
      &#10094;
    </a>
    <a className="next" onClick={() => plusSlides(1)}>
      &#10095;
    </a>
    <br />
    <div style={{ textAlign: 'center' }}>
      <span className="dot" onClick={() => currentSlide(1)}></span>
      <span className="dot" onClick={() => currentSlide(2)}></span>
      <span className="dot" onClick={() => currentSlide(3)}></span>
    </div>
  </div>
  );
};



const Slideshow2 = () => {
  const [slideIndex1, setslideIndex1] = useState(1);

  useEffect(() => {
    showSlides2(slideIndex1);
  }, [slideIndex1]);

  const plusSlides2 = (n) => {
    const newIndex1 = slideIndex1 + n;

    if (newIndex1 > 3) {
      // Wrap around to the first slide when reaching the end
      setslideIndex1(1);
    } else if (newIndex1 < 1) {
      // Wrap around to the last slide when going previous from the first slide
      setslideIndex1(3);
    } else {
      setslideIndex1(newIndex1);
    }
  };

  const currentSlide2 = (n) => {
    setslideIndex1(n);
  };

  const showSlides2 = (n) => {
    const slides1 = document.getElementsByClassName("mySlides1");
    const dots1 = document.getElementsByClassName("dot1");

    if (n > slides1.length) {
      setslideIndex1(1);
    }
    if (n < 1) {
      setslideIndex1(slides1.length);
    }

    for (let i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }

    for (let i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active1", "");
    }

    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides1 fade">
        <div className="numbertext">1 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">London, England</div>
      </div>

      <div className="mySlides1 fade">
        <div className="numbertext">2 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">Sunset in Romania</div>
      </div>

      <div className="mySlides1 fade">
        <div className="numbertext">3 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">New York, USA</div>
      </div>
      
      <a className="prev" onClick={() => plusSlides2(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides2(1)}>
        &#10095;
      </a>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot1" onClick={() => currentSlide2(1)}></span>
        <span className="dot1" onClick={() => currentSlide2(2)}></span>
        <span className="dot1" onClick={() => currentSlide2(3)}></span>
      </div>
  </div>
  );
};




const Slideshow3 = () => {
  const [slideIndex1, setslideIndex1] = useState(1);

  useEffect(() => {
    showSlides2(slideIndex1);
  }, [slideIndex1]);

  const plusSlides2 = (n) => {
    const newIndex1 = slideIndex1 + n;

    if (newIndex1 > 3) {
      // Wrap around to the first slide when reaching the end
      setslideIndex1(1);
    } else if (newIndex1 < 1) {
      // Wrap around to the last slide when going previous from the first slide
      setslideIndex1(3);
    } else {
      setslideIndex1(newIndex1);
    }
  };

  const currentSlide2 = (n) => {
    setslideIndex1(n);
  };

  const showSlides2 = (n) => {
    const slides1 = document.getElementsByClassName("mySlides2");
    const dots1 = document.getElementsByClassName("dot2");

    if (n > slides1.length) {
      setslideIndex1(1);
    }
    if (n < 1) {
      setslideIndex1(slides1.length);
    }

    for (let i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }

    for (let i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active1", "");
    }

    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides2 fade">
        <div className="numbertext">1 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">London, England</div>
      </div>

      <div className="mySlides2 fade">
        <div className="numbertext">2 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">Sunset in Romania</div>
      </div>

      <div className="mySlides2 fade">
        <div className="numbertext">3 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">New York, USA</div>
      </div>
      
      <a className="prev" onClick={() => plusSlides2(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides2(1)}>
        &#10095;
      </a>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot2" onClick={() => currentSlide2(1)}></span>
        <span className="dot2" onClick={() => currentSlide2(2)}></span>
        <span className="dot2" onClick={() => currentSlide2(3)}></span>
      </div>
  </div>
  );
};



const Slideshow4 = () => {
  const [slideIndex1, setslideIndex1] = useState(1);

  useEffect(() => {
    showSlides2(slideIndex1);
  }, [slideIndex1]);

  const plusSlides2 = (n) => {
    const newIndex1 = slideIndex1 + n;

    if (newIndex1 > 3) {
      // Wrap around to the first slide when reaching the end
      setslideIndex1(1);
    } else if (newIndex1 < 1) {
      // Wrap around to the last slide when going previous from the first slide
      setslideIndex1(3);
    } else {
      setslideIndex1(newIndex1);
    }
  };

  const currentSlide2 = (n) => {
    setslideIndex1(n);
  };

  const showSlides2 = (n) => {
    const slides1 = document.getElementsByClassName("mySlides3");
    const dots1 = document.getElementsByClassName("dot3");

    if (n > slides1.length) {
      setslideIndex1(1);
    }
    if (n < 1) {
      setslideIndex1(slides1.length);
    }

    for (let i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }

    for (let i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active1", "");
    }

    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides3 fade">
        <div className="numbertext">1 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">London, England</div>
      </div>

      <div className="mySlides3 fade">
        <div className="numbertext">2 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">Sunset in Romania</div>
      </div>

      <div className="mySlides3 fade">
        <div className="numbertext">3 / 3</div>
        <img
          src={me}
          style={{ width: '100%' }}
        />
        <div className="text">New York, USA</div>
      </div>
      
      <a className="prev" onClick={() => plusSlides2(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides2(1)}>
        &#10095;
      </a>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot3" onClick={() => currentSlide2(1)}></span>
        <span className="dot3" onClick={() => currentSlide2(2)}></span>
        <span className="dot3" onClick={() => currentSlide2(3)}></span>
      </div>
  </div>
  );
};