import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";

import "./styles.css";

const TimelineStep = ({
  setObserver,
  someCallback,
  index,
  img,
  imgHeight = "75"
}) => {
  const timelineRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    setObserver(timelineRef.current);
    setObserver(circleRef.current, someCallback);
  }, []);

  return (  
    <>
      <div id={"timeline" + index} ref={timelineRef} className="timeline4" />
      <div className="circleWrapper">
        <div id={"circle" + index} ref={circleRef} className="circle4"></div>
        <div className="topic">
          <img height={imgHeight} alt="technology logo" src={img} />
        </div>
      </div>
    </>
  );
};

const Timeline = ({ setObserver, callback }) => {
  const images = [  
    
    "https://help.apple.com/assets/6152754A4192845C4361C49A/6152754B4192845C4361C4A1/de_DE/d94aa1c4979b25e9ffbda97fcbae219a.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png",
    "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    "https://hownot2code.files.wordpress.com/2019/01/intellij-519-d4ff21c469.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png",
    "https://hirschtec.eu/wp-content/uploads/2018/05/hirschtec.eu-00_agile-umsetzung-java-logo-icon.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/800px-Spring_Framework_Logo_2018.svg.png",
    "https://nordicapis.com/wp-content/uploads/pm-logo-vert.png",
    "https://www.fast-report.com/uploads/blogpost/json/logo_JSON.PNG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    "https://junit.org/junit4/images/junit5-banner.png",
    "https://www.michael-albrecht.de/wp-content/uploads/2015/03/mockito_logo.jpg",
    "https://galler.digital/img/sonarqube.feb26207.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OOP.svg/1200px-OOP.svg.png",
    "https://www.mitp.de/out/pictures/master/product/1/978-3-8266-5548-7.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png",
    "https://v4.mui.com/static/logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1280px-Docker_%28container_engine%29_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"
  ];

  const confettiCallback = () => {
    //SsetMessage3("Finish");
    fireConfetti();
  };

  return (
    <div className="wrapper4">
      {images.map((tech, index) => (
        <TimelineStep
          key={tech}
          setObserver={setObserver}
          img={tech}
          index={index}
        />
      ))}
      {/*
      
       Kanban
       Prototyping 
       Scrum
       Dailies, Planning, Review, Retro
       Datenmodelle diskutieren 
       Code Reviews 
      
       */}
      <TimelineStep
        setObserver={setObserver}
        img={
          "https://pm-tools.info/wp-content/uploads/2020/05/pm-tools_TaskManagementSoftware_Kanban.png"
        }
        index={images.length}
        imgHeight="200"
      />
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App4">
      <h1>Rückblick</h1>
      <div className="stub1"> &nbsp; </div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#ff4a11"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
