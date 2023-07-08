import React, { useEffect, useState } from "react";
import "../universal.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Nav } from "../Componets/Nav";

export const CharacterResults = ({ id }) => {
  const API = `https://api.jikan.moe/v4/characters?q=`;
  const [characterId, setCharacterId] = useState([]);
  const { setSearch } = useParams();
  const [searchTerm, setSearchTerm] = useState(setSearch);
  const [reSearch, setreSearch] = useState(setSearch);
  const [displayCount, setDisplayCount] = useState(16);

  async function fetchCharacters(searchQuery) {
    const { data } = await axios.get(`${API}${searchQuery}`);
    setCharacterId(data.data);
    console.log(data);
  }

  useEffect(() => {
    fetchCharacters(reSearch);
  }, []);

  const reSearchCharacter = async () => {
    await fetchCharacters(reSearch);
    setSearchTerm(reSearch);
    window.history.replaceState(null, "", `${reSearch}`);
  };

  function OnKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      reSearchCharacter();
    }
  }

  function sortAnime(filter) {
    switch (filter) {
      case "NAME_A-Z":
        setCharacterId(
          [...characterId].sort((a, b) => (a.name > b.name ? 1 : -1))
        );
        break;
      case "NAME_Z-A":
        setCharacterId(
          [...characterId].sort((a, b) => (b.name > a.name ? 1 : -1))
        );
        break;

      default:
        break;
    }
  }

  const loadMoreCharacters = () => {
    setDisplayCount((prevCount) => prevCount + 16);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div>
            you searched for <span> {searchTerm}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="search character again"
              value={reSearch}
              onChange={(event) => setreSearch(event.target.value)}
            />
            <button
              disabled={!reSearch}
              onKeyDown={(event) => OnKeyPress(event)}
              onClick={() => reSearchCharacter()}
            >
              search again
            </button>
          </div>
          <div>
            <select
              id="filter"
              onChange={(e) => sortAnime(e.target.value)}
              defaultValue={"select"}
            >
              <option disabled value="select">
                Sort
              </option>
              <option value="NAME_A-Z">Name A-Z</option>
              <option value="NAME_Z-A">Name Z-A</option>
            </select>
          </div>
          {characterId &&
            characterId.slice(0, displayCount).map((character) => (
              <div className="character-info-wrapper" key={character.mal_id}>
                <figure className="character-img-wrapper">
                  <img
                    src={character.images.jpg.image_url}
                    alt="img-not-found"
                  />
                </figure>
                <div className="character-name-wrapper">
                  <h1 className="character-name">{character.name}</h1>
                </div>
                <Link to={`/characters/${character.mal_id}`}>
                  <button>Learn More</button>
                </Link>
              </div>
            ))}
          <div>
            <button onClick={loadMoreCharacters}>load more</button>
          </div>
        </div>
      </div>
    </>
  );
};
