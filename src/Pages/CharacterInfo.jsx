import React from "react";
import { Nav } from "../Componets/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterResults.css";
import "../universal.css";
import { useParams } from "react-router-dom";
const API = `https://api.jikan.moe/v4/characters/`;

export const CharacterInfo = () => {
  function InfoPage() {
    const { id } = useParams();
    const [character, setCharacter] = useState({
      mal_id: "",
      url: "",
      images: { jpg: { large_image_url: "" } },
      name: "",
      name_kanji: "",
      nicknames: [],
      about: "",
      anime: [],
    });

    async function getAnime() {
      const { data } = await axios.get(`${API}${id}/full`);
      const getData = data.data;
      console.log(getData);
      setCharacter(getData);
    }

    useEffect(() => {
      getAnime();
    }, []);

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="character-info-wrapper">
              <figure className="character-img-wrapper">
                <img
                  src={character.images?.jpg?.image_url}
                  alt="img-not-found"
                />
              </figure>
              <div className="character-name-wrapper">
                <h1 className="character-name">{character.name}</h1>
                <h1 className="character-name">{character.name_kanji}</h1>
                <div className="character-anime">
                  {character.anime.slice(0, 1).map((anime, index) => (
                    <div key={index}>{anime.anime.title}, </div>
                  ))}
                  <div>{character.about} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <InfoPage />;
};
