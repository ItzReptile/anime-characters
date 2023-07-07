import React from "react";
import { Nav } from "../Componets/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterResults.css";
import "../universal.css";
import { useParams } from "react-router-dom";
const API = `https://api.jikan.moe/v4/characters/`;
export const CharacterInfo = () => {
  console.log(API);

  function InfoPage() {
    const { setId } = useParams();
    const [character, setCharacter] = useState({
      data: {
        mal_id: "",
        url: "",
        images: { jpg: { large_image_url: "" } },
        name: "",
        name_kanji: "",
        nicknames: "",
        favorites: "",
        about: "",
        anime: "",
        manga: "",
        voices: "",
      },
    });

    async function getAnime() {
      const { data } = await axios.get(`${API}${setId}/full`);
      const getData = data.data;
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
            {
              <div className="character-info-wrapper" key={character.mal_id}>
                <figure className="character-img-wrapper">
                  <img
                    src={character.images.jpg.image_url}
                    alt="img-not-found"
                  />
                </figure>
                <div className="character-name-wrapper">
                  <h1 className="character-name">{character.name}</h1>
                  <h1 className="character-anime">{character.anime}</h1>
                </div>
              </div>
            }
          </div>
        </div>
      </>
    );
  }
};
