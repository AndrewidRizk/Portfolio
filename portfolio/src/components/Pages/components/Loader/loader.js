import React from "react";
import "./loader.css";
import logo from "./2.png"; // Import your image file
import Stars3 from "./stars"; // Import the stars3 component with the correct name

const Loader = () => {
  return (
    <div className="loader">
      <div className="image-wrapper">
        <Stars3 /> {/* Use the Stars3 component as a custom JSX element */}
        <img src={logo} alt="Your Image" className="image" width="175" style={{ marginTop: '100px' }} />
      </div>
    </div>
  );
};

export default Loader;
