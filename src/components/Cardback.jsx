import "../styles/cards.css";
import React from "react";

function Cardback({ name, moreInfo }) {
  return (
    <div className="card__back">
      <p className="card__match">
        C'est un match avec <h2> {name} !</h2>
      </p>
      <img src="" alt="drapeau" />
      <div className="card__infos">
        <ul>
          <li>Population : </li>
          <li>Capitale : </li>
          <li>Monnaie : </li>
        </ul>
        <a href={moreInfo && moreInfo.data.teleport_city_url}>
          More informations about the city
        </a>
      </div>
    </div>
  );
}

export default Cardback;
