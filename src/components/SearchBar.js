import React from "react";
import { MDBInputGroup, MDBContainer } from "mdb-react-ui-kit";

const SearchBar = ({ setQuery }) => {
  const handleQuery = (e) => setQuery(e.target.value);
  
  return (
    <MDBContainer className="mb-5 mt-3">
      <MDBInputGroup noWrap textBefore="">
        <input
          className="form-control"
          type="text"
          placeholder="Search any character"
          onChange={handleQuery}
        />
      </MDBInputGroup>
    </MDBContainer>
  );
};

export default SearchBar;
