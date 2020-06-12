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
              <a href="#" className="navbar-brand">
                Known
              </a>
            </div>
            {/* MENU LINKS */}
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-nav-first">
                <li>
                  <a href="#top" className="smoothScroll">
                    Home
                  </a>
                </li>
                <li>
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
                </li>
                <li>
                  <a href="/Doctor">Doctor</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <i className="fa fa-phone" /> +65 2244 1100
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
