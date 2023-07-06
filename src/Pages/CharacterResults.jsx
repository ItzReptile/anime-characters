import React, { useEffect, useState } from "react";
import "../universal.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Nav } from "../Componets/Nav";

export const CharacterResults = () => {
  const API = `https://api.jikan.moe/v4/characters?q=`;
  const [characterId, setCharacterId] = useState([]);
  const { setSearch } = useParams();

  async function fetchCharacters() {
    const { data } = await axios.get(`${API}${setSearch}`);
    setCharacterId(data);
    console.log(data);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          {characterId &&
            characterId.slice(0, 16).map((character) => (
              <div className="character-info-wrapper" key={character.mal_id}>
                <figure className="character-img-wrapper">
                  <img src={character.image_url} alt="img-not-found" />
                </figure>
                <div className="character-name-wrapper">
                  <h1 className="character-name">{character.name}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
