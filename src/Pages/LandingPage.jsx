import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Componets/Nav";
import "../universal.css";
export const LandingPage = () => {
  const [setSearch, resetSearch] = useState("");
  const navigate = useNavigate();

  function animeData() {
    navigate(`/characters/search/${setSearch}`);
    console.log(setSearch);
  }

  function OnKeyPress(key) {
    if (key === "Enter" && setSearch) {
      animeData();
    }
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="searchbar-wrapper">
            <input
              type="textarea"
              placeholder="Search Any Title:"
              onChange={(e) => resetSearch(e.target.value)}
              onKeyDown={(event) => OnKeyPress(event.key)}
              value={setSearch} 
            />
            <button onClick={() => animeData()} disabled={!setSearch}>
              press
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
