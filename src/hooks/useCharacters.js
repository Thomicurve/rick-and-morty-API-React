import { useState, useEffect } from "react";

const useCharacters = (query) => {
  const [characters, setCharacters] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character";

  const getCharacters = async () => {
    const response = await fetch(URL);
    const chResult = await response.json();
    setCharacters(chResult.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const filteredCharacters = characters.filter((ch) => ch.name.includes(query));

  return [filteredCharacters];
};

export default useCharacters;
