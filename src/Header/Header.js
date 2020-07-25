import React, { Component } from "react";
import "./Header.css";
import ReactRotatingText from "../rotatingtext/Rotatingtext";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <span id="name">R</span>
            <span id="surname">Thakur</span>
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
            <div className="links">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#aboutMe">
                    About Us <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#Project">
                    Projects <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#language">
                    Languages <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="homepage-image">Rohit</div>

        <div className="info">
          <div className="info-block">
            <div>
            <span id="name-info">Rohit Thakur</span>
            </div>
            <div>
              <ReactRotatingText />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
