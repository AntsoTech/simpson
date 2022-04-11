import React from "react"; 

const Card = ({image, character, quote } ) => {
    return (
        <div>
            <img src={image} alt={character} />
            <h1>{character}</h1>
            <h2>{quote}</h2>
        </div>
    )
};

export default Card;