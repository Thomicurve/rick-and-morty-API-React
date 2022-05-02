import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from "mdb-react-ui-kit";
import ModalBody from "./ModalBody";

export default function App({ modalData, setModalData }) {
  const toggleShow = () => setModalData({ ...modalData, show: !modalData.show });

  return (
    <>
      <MDBModal staticBackdrop show={modalData.show} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Character</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <ModalBody {...modalData}/>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
