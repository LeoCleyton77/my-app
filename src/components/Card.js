
import React from "react";

const Card = ({ name, type, specially, id, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='Medabots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
                <h4>{specially}</h4>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default Card;
