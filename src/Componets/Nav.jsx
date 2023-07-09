import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger} from "react-icons/fa";
import "./Nav.css";
import { LandingPage } from "../Pages/LandingPage";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <section id="NAV">
      <div className="container">
        <div className="row">
          <nav>
            <div className="site-title">
              <h2>AnimeCharacters</h2>
            </div>
            <div className="site-links-wrapper">
              <ul className="site-links">
                <Link to={"/"} >
                  <li className="site-link">Home</li>
                </Link>
                <li
                  onClick={() => alert("Ive Suffered Enough")}
                  className="no site-link"
                >
                  Contact
                </li>
                <li
                  onClick={() => alert("Ive Suffered Enough")}
                  className="no site-link"
                >
                  About
                </li>
              </ul>
            </div>
            <FaHamburger onClick={toggleMenu} className="hamburger" />
            <div className={`menu-display ${menuOpen ? "menu--open" : ""}`}>
              <ul className="menu-links">
                <li className="menu-link">About</li>
                <li className="menu-link">Contact</li>
                <li className="menu-link red" onClick={toggleMenu}>
                  Close
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
