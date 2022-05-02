import React, { useState } from "react";
import useCharacters from "../hooks/useCharacters";

import SearchBar from "../components/SearchBar";
import CharactersCard from "../components/CharacterCard";
import CharactersContainer from "../components/CharactersContainer";
import CharactersModal from "../components/CharactersModal";

const Home = () => {
  const [query, setQuery] = useState("");
  const [characters] = useCharacters(query);
  const [modalData, setModalData] = useState({show: false, name: '', status: '', origin: '', image: ''});

  const handleShowModal = ({name, status, origin, image}) => 
    setModalData({show: !modalData.show, name, status, origin: origin.name, image });

  return (
    <div>
      <h1 className="text-center mt-3">Rick and Morty API</h1>
      <SearchBar setQuery={setQuery} />
      <CharactersModal modalData={modalData} setModalData={setModalData} />
      <CharactersContainer>
        {characters.map((ch) => (
          <CharactersCard
            key={ch.id}
            characterData={ch}
            handleShowModal={handleShowModal}
          />
        ))}
      </CharactersContainer>
    </div>
  );
};

export default Home;
