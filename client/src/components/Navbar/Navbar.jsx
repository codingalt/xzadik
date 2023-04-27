import React, { useState } from 'react'
import './navbar.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import * as bs from 'react-icons/bs'
import * as fa from 'react-icons/fa'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [navbarBg, setNavbarBg] = useState(false);
    const toggleNavbar = () => {
        setToggle(!toggle);
      };

      const changeBackground = ()=>{
        if(window.scrollY >= 115){
          setNavbarBg(true);
        }else{
          setNavbarBg(false);
        }
      }
      window.addEventListener('scroll',changeBackground);

    return (
        <nav className={navbar ? "navbar active shadow-sm" : navbarBg ? "navbar shadow-sm navbar-active-bg" : "navbar shadow-sm"}>
          <div className="logo">
            <NavLink to="/">
              <img className="" src={logo} alt="" />
            </NavLink>
          </div>
        
          {/* Right Side  */}
          <div className="right">
            <div className="menu_right">
            <div className={toggle ? "navbar-toggle nav-items" : "nav-items"}>
            <ul className="ul">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/playground"}>
                <li>Playground</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
           
            </div>
            <div className="toggle" onClick={toggleNavbar}>
              <fa.FaBars />
            </div>
          </div>
        </nav>
    );
  
}

export default Navbar