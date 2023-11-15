import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { HiOutlineHome } from "react-icons/hi";
import Logo1 from "./Logos/Logo2.png.png";
import Logo2 from "./Logos/Logo1.png";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = () => setClick(!click);

  // Update the windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <nav className='nav-menu '>
      <div className="  wrapper header">
        <div className="nav-container">
     
          <ul className='links dropdown'>
            
            <li className="nav-item dropbtn">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Qualification
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img src={Logo1} alt="Logo" style={{ width: 40 }} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
       
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
