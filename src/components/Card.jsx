import React from "react";
import Cardback from "./Cardback";
import Cardfront from "./Cardfront";
import "../styles/cards.css";

const Card = ({ image, name, moreInfo, isFlipped, flag, moreMoreInfo }) => {
  return (
    <div className={!isFlipped ? "card" : "card__inner"}>
      <div className="card__inner">
        <Cardfront image={image} />
        <Cardback
          name={name}
          moreInfo={moreInfo}
          flag={flag && flag.flags.png}
          moreMoreInfo={moreMoreInfo}
        />
      </div>
    </div>
  );
};

export default Card;
