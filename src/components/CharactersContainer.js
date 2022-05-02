import React from "react";

const CharactersContainer = ({ children }) => {
  return (
    <section className="justify-content-center d-flex flex-row flex-wrap">
      {children}
    </section>
  );
};

export default CharactersContainer;
