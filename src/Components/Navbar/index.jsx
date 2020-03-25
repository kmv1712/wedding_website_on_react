import React from "react";
import logo from "../../assets/icon/logo192.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} width="30" height="30" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav m-auto">
          <li className="nav-item mr-4 ml-4">
            <Link
              className="nav-link"
              to="carouselbox"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              Главная
            </Link>
          </li>
            <li className="nav-item mr-4 ml-4">
                 <Link
                  className="nav-link"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-58}
                  duration={500}
                >
                  Наша история
                </Link>
              </li>
              <li className="nav-item mr-4 ml-4">
                <Link
                className="nav-link"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-58}
                  duration={500}
                >
                  Наши гости
                </Link>
              </li>
              <li className="nav-item mr-4 ml-4">
                <Link
                className="nav-link"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-58}
                  duration={500}
                >
                  События
                </Link>
              </li>
              <li className="nav-item mr-4 ml-4">
                <Link
                className="nav-link"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-58}
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
