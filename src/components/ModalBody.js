import React from "react";

export default function ModalBody({image, name, status, origin}) {


    return (
        <div className="d-flex justify-content-around align-items-center">
            <div className="overflow-hidden rounded">
                <img src={image} />
            </div>
            <div>
                <h1>Name: {name} </h1>
                <h4>Status: <b className={`${status === 'Alive' ? 'text-success' : 'text-danger'}`}>{status}</b></h4>
                <h4>Planet: {origin} </h4>
            </div>
        </div>
    )
}