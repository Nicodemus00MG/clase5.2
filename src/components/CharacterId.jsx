import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterId = () => {
  const [characterData, setCharacterData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setCharacterData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className=" characterId_container">
      <img src={characterData?.image} alt="" />
      <h2>{characterData?.name}</h2>
    </div>
  );
};

export default CharacterId;
