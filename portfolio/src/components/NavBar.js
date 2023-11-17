import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { HiOutlineHome } from "react-icons/hi";
import Logo1 from "./Logos/Logo2.png.png";

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
    <nav className={toggle ? 'nav-container_expanded ' : 'nav-container_expanded2 nav-menu '}>
      <div className="  wrapper header">
        {windowWidth <= 769 && ( // Only show toggle icon on phones
          <nav className={toggle ? ' ' : 'nav-menu'}>
          
          <div className="">
            <ul className='links dropdown'>
              {toggle && ( // Only render the links when toggle is true
                <>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      <HiOutlineHome /> Home
                    </NavLink>
                  </li>
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
                </>
              )}
            </ul>
            </div>
          <div className='toggle-icon' onClick={handleToggle}>
              {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={30} />}
            </div>
        </nav>
        )}
        <div className="nav-container">
        {windowWidth > 769 && ( // Render links only on larger screens
          <ul className='links dropdown'>
           
            <li className="nav-item dropbtn linkItem">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links aboutme1 "
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>

            <li className="nav-item linkItem">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links "
                onClick={handleClick}
              >
                Qualification
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="LOGO"
                className="nav-links2"
                onClick={handleClick}
              >
                <img src={Logo1} alt="Logo" style={{ width: 40 }} />
              </NavLink>
            </li>

            
            <li className="nav-item linkItem">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links "
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item linkItem">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links "
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
