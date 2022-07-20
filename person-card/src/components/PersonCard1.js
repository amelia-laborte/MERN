import React from "react";

const PersonCard = (props) => {
    return(
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>{props.hairColor}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default PersonCard;