import React from "react";
import "../universal.css" 
import "./Nav.css" 
export const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <div className="site-title">
            <h2>
              AnimeCharacters
            </h2>
          </div>
          <div className="site-links-wrapper">
            <ul className="site-links">
              <li className="site-link">About</li>
              <li className="site-link">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
