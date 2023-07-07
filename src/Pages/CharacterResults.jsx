import React, { useEffect, useState } from "react";
import "../universal.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Nav } from "../Componets/Nav";

export const CharacterResults = ({ id }) => {
  const API = `https://api.jikan.moe/v4/characters?q=`;
  const [characterId, setCharacterId] = useState([]);
  const { setSearch } = useParams();
  async function fetchCharacters() {
    const { data } = await axios.get(`${API}${setSearch}`);
    setCharacterId(data.data);
    console.log(data);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

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
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div>
            you searched for <span> {setSearch}</span>
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
            characterId.slice(0, 16).map((character) => (
              <div className="character-info-wrapper">
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
        </div>
      </div>
    </>
  );
};
