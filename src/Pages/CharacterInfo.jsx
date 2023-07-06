import React from "react";
import { Nav } from "../Componets/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterResults.css";
import "../universal.css";
import { useParams, useNavigate } from "react-router-dom";
const API = `https://api.jikan.moe/v4/search/character`;
export const CharacterInfo = () => {
  console.log(API);

  function InfoPage() {
    const { setSearch } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({
      data: {
        mal_id: 0,
        url: "string",
        images: {},
        name: "string",
        name_kanji: "string",
        nicknames: [],
        favorites: 0,
        about: "string",
        anime: [],
        manga: [],
        voices: [],
      },
    });

    async function getAnime() {
      const { data } = await axios.get(`${API}${setSearch}`);
      const getData = data.data;
      setCharacter(getData);
    }

    useEffect(() => {
      setCharacter();
    }, []);

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="searchbar-wrapper">
              <input type="textarea" placeholder="you did it" />
            </div>
          </div>
        </div>
      </>
    );
  }
};
