import React from "react";
import "../universal.css";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
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
                <Link to={"/"}>
                  <li className=" site-link">Home</li>
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
          </nav>
        </div>
      </div>
    </section>
  );
};
