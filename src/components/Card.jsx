import React from "react";
import Cardback from "./Cardback";
import Cardfront from "./Cardfront";
import "../styles/cards.css";

const Card = ({ image, name, moreInfo, isFlipped }) => {
  React.useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div className={isFlipped ? "card.flipped" : "card"}>
      <div className="card__inner">
        <Cardfront image={image} />
        <Cardback name={name} moreInfo={moreInfo} />
      </div>
    </div>
  );
};

export default Card;
