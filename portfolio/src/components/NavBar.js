import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'



function NavBar() {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }



  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  
  return (

    <nav className={toggle?'  expanded ':'nav-menu'}>

        <div className="nav-container wrapper header">
          
        <ul className='links'>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
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
                Contact Us
              </NavLink>
            </li>
            
            <div className='toggle-icon' onClick={handleToggle}>
              {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={30}/>}
            </div>

            </ul>

        </div>
    </nav>
  );
}

export default NavBar;