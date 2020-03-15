import React, { Component } from "react";
import logo from '../../assets/icon/logo192.png';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = () => {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="carouselbox"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Наша история
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Наши гости
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                События
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;