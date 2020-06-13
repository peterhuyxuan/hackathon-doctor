import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import history from "../history";

class Navbar extends Component {
  state = {};
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <section
          className="navbar custom-navbar navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
              </button>
              {/* lOGO TEXT HERE */}
              <a href="/" className="navbar-brand">
                <img
                  src="images/440px-Department_of_Health_(Australia)_logo.svg.png"
                  style={{ maxHeight: "200%", maxWidth: "200%" }}
                />
              </a>
            </div>
            {/* MENU LINKS */}
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-nav-first">
                <li>
                  <a href="/" className="smoothScroll">
                    Home
                  </a>
                </li>
                {/* <li>
                  <a href="#about" className="smoothScroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="smoothScroll">
                    Our Teachers
                  </a>
                </li>
                <li>
                  <a href="#courses" className="smoothScroll">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className="smoothScroll">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="smoothScroll">
                    Contact
                  </a>
                </li> */}
                <li>
                  <a href="/patient">Patient</a>
                </li>
                <li>
                  <a href="/login">Doctor</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <i className="fa fa-phone" /> 1800 020 103
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
