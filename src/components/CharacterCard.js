import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdb-react-ui-kit";

const CharacterCard = ({ characterData, handleShowModal }) => {

  const {name, image, status} = characterData;
  
  return (
      <MDBCard
        style={{ width: "215px", margin: "20px", cursor: "pointer" }}
        className="rounded overflow-hidden my-3 shadow-5 character-card"
        onClick={() => handleShowModal(characterData)}
      >
        <MDBCardImage alt={name} src={image} />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText
            className={`${
              status === "Alive" ? "text-success" : "text-danger"
            } text-bold`}
          >
            {status}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  );
};

export default CharacterCard;
