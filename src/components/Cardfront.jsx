import "../styles/cards.css";
import React from "react";

function Cardfront({ image }) {
  return (
    <div className="card__front">
      <img alt="landscape" src={image && image.photos[0].image.mobile} />
    </div>
  );
}

export default Cardfront;
