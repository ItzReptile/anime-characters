import React, { useEffect, useState } from "react";
import "../universal.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Nav } from "../Componets/Nav";

export const CharacterResults = ({ id }) => {
  const API = `https://api.jikan.moe/v4/characters?q=`;
  const [characterId, setCharacterId] = useState([]);
  const { setSearch } = useParams();
  const navigate = useNavigate();

  async function fetchCharacters() {
    const { data } = await axios.get(`${API}${setSearch}`);
    setCharacterId(data.data);
    console.log(data);
  }

  function fetchInfo() {
    navigate(`/characters/${id}`);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div>
            you searched for <span> {setSearch}</span>
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
                <button onClick={fetchInfo}>Learn More</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
