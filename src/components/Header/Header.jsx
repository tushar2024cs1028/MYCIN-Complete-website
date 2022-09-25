import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";

import "./Header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Resources",
    url: "/Resources",
  },

  {
    display: "Achievements",
    url: "/Achievements",
  },
  {
    display: "Events",
    url: "/Events",
  },
  {
    display: "Team",
    url: "/Team",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      
        <div className="navigation ">
          <div className="logo">
            <img src={logo} alt="none" />
          </div>

          <div className="nav">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="heading__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
            
          </div>

         
        </div>
      
    </header>
  );
};

export default Header;